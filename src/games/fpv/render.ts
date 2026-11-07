// Псевдо-3D рендер від першої особи (FPV-камера) на canvas + екранна індикація (OSD).
import { Sim, V3 } from './sim';
import type { Building, Tree } from './scenery';

const FOV = 105; // горизонтальний кут огляду, градуси
const HAZE = '#cfe7f5';
const SKY = '#3b9be0';
const GROUND_COLORS = ['#a9d5a4', '#86bf80', '#63a85f', '#47914a', '#2e7d32'];
const GROUND_SIZES = [6000, 2500, 1000, 400, 150];

const fmtTime = (t: number) => {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  const d = Math.floor((t * 10) % 10);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${d}`;
};

export const render = (ctx: CanvasRenderingContext2D, W: number, H: number, s: Sim, t: number): void => {
  const cfg = s.cfg;
  const F = W / 2 / Math.tan((FOV / 2) * (Math.PI / 180));
  const cx = W / 2;
  const cy = H / 2;

  // камера = положення дрона + нахил камери вгору
  const f: V3 = [-s.b[0], -s.b[1], -s.b[2]];
  const a = (cfg.camTilt * Math.PI) / 180;
  const ca = Math.cos(a);
  const sa = Math.sin(a);
  const fc: V3 = [f[0] * ca + s.u[0] * sa, f[1] * ca + s.u[1] * sa, f[2] * ca + s.u[2] * sa];
  const uc: V3 = [s.u[0] * ca - f[0] * sa, s.u[1] * ca - f[1] * sa, s.u[2] * ca - f[2] * sa];
  const P = s.p;
  const rr = s.r;

  const toCam = (w: V3): V3 => {
    const d0 = w[0] - P[0];
    const d1 = w[1] - P[1];
    const d2 = w[2] - P[2];
    return [d0 * rr[0] + d1 * rr[1] + d2 * rr[2], d0 * uc[0] + d1 * uc[1] + d2 * uc[2], d0 * fc[0] + d1 * fc[1] + d2 * fc[2]];
  };
  const scr = (c: V3): [number, number] => [cx + (F * c[0]) / c[2], cy - (F * c[1]) / c[2]];

  const clipPoly = (cs: V3[], near: number): V3[] => {
    const out: V3[] = [];
    for (let i = 0; i < cs.length; i++) {
      const p = cs[i];
      const q = cs[(i + 1) % cs.length];
      const pin = p[2] >= near;
      const qin = q[2] >= near;
      if (pin) out.push(p);
      if (pin !== qin) {
        const k = (near - p[2]) / (q[2] - p[2]);
        out.push([p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, near]);
      }
    }
    return out;
  };

  const fillPoly = (pts: V3[], color: string, near = 0.8) => {
    const cs = clipPoly(pts.map(toCam), near);
    if (cs.length < 3) return;
    ctx.fillStyle = color;
    ctx.beginPath();
    cs.forEach((c, i) => {
      const [x, y] = scr(c);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
  };

  // відрізок, обрізаний площиною близькості; повертає екранні координати та глибину
  const clipSeg = (p: V3, q: V3, near = 0.25): [number, number, number, number, number] | null => {
    let c0 = toCam(p);
    let c1 = toCam(q);
    if (c0[2] < near && c1[2] < near) return null;
    if (c0[2] < near) {
      const k = (near - c0[2]) / (c1[2] - c0[2]);
      c0 = [c0[0] + (c1[0] - c0[0]) * k, c0[1] + (c1[1] - c0[1]) * k, near];
    } else if (c1[2] < near) {
      const k = (near - c1[2]) / (c0[2] - c1[2]);
      c1 = [c1[0] + (c0[0] - c1[0]) * k, c1[1] + (c0[1] - c1[1]) * k, near];
    }
    const [x0, y0] = scr(c0);
    const [x1, y1] = scr(c1);
    return [x0, y0, x1, y1, (c0[2] + c1[2]) / 2];
  };

  const lineW = (p: V3, q: V3, color: string, tube: number, minPx = 1.5) => {
    const sg = clipSeg(p, q);
    if (!sg) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.min(60, Math.max(minPx, (tube * 2 * F) / sg[4]));
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(sg[0], sg[1]);
    ctx.lineTo(sg[2], sg[3]);
    ctx.stroke();
  };

  // ---------- небо і земля ----------
  ctx.fillStyle = HAZE;
  ctx.fillRect(0, 0, W, H);
  const gx = P[0];
  const gz = P[2];
  const SK = 9000;
  fillPoly(
    [
      [gx - SK, 2500, gz - SK],
      [gx + SK, 2500, gz - SK],
      [gx + SK, 2500, gz + SK],
      [gx - SK, 2500, gz + SK],
    ],
    SKY,
    1
  );
  GROUND_SIZES.forEach((S, i) => {
    fillPoly(
      [
        [gx - S, 0, gz - S],
        [gx + S, 0, gz - S],
        [gx + S, 0, gz + S],
        [gx - S, 0, gz + S],
      ],
      GROUND_COLORS[i]
    );
  });

  // сітка на землі - орієнтир швидкості
  ctx.strokeStyle = 'rgba(255,255,255,0.13)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  const step = 10;
  const bx = Math.floor(gx / step) * step;
  const bz = Math.floor(gz / step) * step;
  for (let i = -18; i <= 18; i++) {
    const sg1 = clipSeg([bx + i * step, 0.02, gz - 180], [bx + i * step, 0.02, gz + 180], 0.8);
    if (sg1) {
      ctx.moveTo(sg1[0], sg1[1]);
      ctx.lineTo(sg1[2], sg1[3]);
    }
    const sg2 = clipSeg([gx - 180, 0.02, bz + i * step], [gx + 180, 0.02, bz + i * step], 0.8);
    if (sg2) {
      ctx.moveTo(sg2[0], sg2[1]);
      ctx.lineTo(sg2[2], sg2[3]);
    }
  }
  ctx.stroke();

  // стартовий майданчик
  fillPoly(
    [
      [-1.8, 0.01, -1.8],
      [1.8, 0.01, -1.8],
      [1.8, 0.01, 1.8],
      [-1.8, 0.01, 1.8],
    ],
    '#e5e7eb'
  );
  fillPoly(
    [
      [-1.5, 0.02, -1.5],
      [1.5, 0.02, -1.5],
      [1.5, 0.02, 1.5],
      [-1.5, 0.02, 1.5],
    ],
    '#475569'
  );

  // ---------- об'єкти: дерева та ворота (від далеких до близьких) ----------
  type Item = { depth: number; draw: () => void };
  const items: Item[] = [];

  const blob = (x: number, y: number, z: number, rx: number, ry: number, col: string) => {
    const c = toCam([x, y, z]);
    if (c[2] < 0.8) return;
    const [sx, sy] = scr(c);
    const k = F / c[2];
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.ellipse(sx, sy, rx * k, ry * k, 0, 0, Math.PI * 2);
    ctx.fill();
  };
  const trunk = (x: number, z: number, y1: number, w: number, col: string) => {
    const tb = toCam([x, 0, z]);
    const tt = toCam([x, y1, z]);
    if (tb[2] < 0.5 || tt[2] < 0.5) return;
    const [x0, y0] = scr(tb);
    const [x1, yy1] = scr(tt);
    ctx.strokeStyle = col;
    ctx.lineWidth = Math.max(1, (w * F) / tb[2]);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, yy1);
    ctx.stroke();
  };

  const drawTree = (tr: Tree, perp: V3) => {
    const { x, z, h, R } = tr;
    if (tr.kind === 'spruce') {
      const tiers: [number, number, number, string][] = [
        [0.1, 0.55, 1, '#14532d'],
        [0.38, 0.82, 0.75, '#166534'],
        [0.62, 1, 0.5, '#15803d'],
      ];
      trunk(x, z, h * 0.2, 0.7, '#78350f');
      for (const [y0, y1, rs, col] of tiers) {
        const Rr = R * rs;
        fillPoly([[x - perp[0] * Rr, h * y0, z - perp[2] * Rr], [x + perp[0] * Rr, h * y0, z + perp[2] * Rr], [x, h * y1, z]], col, 0.5);
      }
    } else if (tr.kind === 'pine') {
      trunk(x, z, h * 0.8, 0.55, '#9a5b2e');
      blob(x, h * 0.82, z, R, R * 0.55, '#1f6b2e');
      blob(x + perp[0] * R * 0.5, h * 0.9, z + perp[2] * R * 0.5, R * 0.7, R * 0.45, '#2c8a3e');
      blob(x - perp[0] * R * 0.4, h * 0.95, z - perp[2] * R * 0.4, R * 0.6, R * 0.4, '#38a04a');
    } else if (tr.kind === 'oak') {
      trunk(x, z, h * 0.55, 1.1, '#5b3a1e');
      blob(x - perp[0] * R * 0.5, h * 0.62, z - perp[2] * R * 0.5, R * 0.75, R * 0.65, '#3f7d20');
      blob(x + perp[0] * R * 0.5, h * 0.62, z + perp[2] * R * 0.5, R * 0.75, R * 0.65, '#4a8f26');
      blob(x, h * 0.78, z, R * 0.85, R * 0.75, '#5da832');
      blob(x - perp[0] * R * 0.2, h * 0.85, z - perp[2] * R * 0.2, R * 0.45, R * 0.4, '#7cc24a');
    } else if (tr.kind === 'birch') {
      trunk(x, z, h * 0.75, 0.38, '#f1f5f9');
      trunk(x, z, h * 0.3, 0.4, '#d1d5db');
      blob(x, h * 0.78, z, R, R * 1.15, '#8cc152');
      blob(x + perp[0] * R * 0.3, h * 0.88, z + perp[2] * R * 0.3, R * 0.65, R * 0.8, '#a4d46a');
    } else {
      trunk(x, z, h * 0.25, 0.5, '#6b4423');
      blob(x, h * 0.58, z, R, h * 0.4, '#2f7a34');
      blob(x + perp[0] * R * 0.25, h * 0.66, z + perp[2] * R * 0.25, R * 0.6, h * 0.3, '#43a047');
    }
  };

  // ---------- будівлі ----------
  const SUN: V3 = [0.4, 0.8, 0.45];
  const shade = (hex: string, k: number) => {
    const n = parseInt(hex.slice(1), 16);
    const m = Math.min(1.15, Math.max(0.45, k));
    const c = (v: number) => Math.min(255, Math.round(v * m));
    return `rgb(${c((n >> 16) & 255)},${c((n >> 8) & 255)},${c(n & 255)})`;
  };
  const face = (pts: V3[], n: V3, col: string, ref: V3) => {
    if ((P[0] - ref[0]) * n[0] + (P[1] - ref[1]) * n[1] + (P[2] - ref[2]) * n[2] <= 0) return false;
    const l = Math.hypot(n[0], n[1], n[2]) || 1;
    fillPoly(pts, shade(col, 0.55 + 0.6 * Math.max(0, (n[0] * SUN[0] + n[1] * SUN[1] + n[2] * SUN[2]) / l)), 0.5);
    return true;
  };
  const wall = (p0: V3, p1: V3, up: number, n: V3, u0: number, u1: number, v0: number, v1: number, col: string) => {
    const lp = (u: number, v: number): V3 => [p0[0] + (p1[0] - p0[0]) * u + n[0] * 0.03, p0[1] + up * v, p0[2] + (p1[2] - p0[2]) * u + n[2] * 0.03];
    fillPoly([lp(u0, v0), lp(u1, v0), lp(u1, v1), lp(u0, v1)], col, 0.5);
  };
  const drawBox = (x: number, z: number, hx: number, hz: number, y0: number, y1: number, col: string, windows: boolean) => {
    const A: V3 = [x - hx, y0, z - hz], B: V3 = [x + hx, y0, z - hz], C: V3 = [x + hx, y0, z + hz], D: V3 = [x - hx, y0, z + hz];
    const up = y1 - y0;
    const up3 = (p: V3): V3 => [p[0], y1, p[2]];
    const fs: [V3, V3, V3][] = [[A, B, [0, 0, -1]], [B, C, [1, 0, 0]], [C, D, [0, 0, 1]], [D, A, [-1, 0, 0]]];
    for (const [p, q, n] of fs) {
      if (face([p, q, up3(q), up3(p)], n, col, p) && windows && n[0] === 0) {
        wall(p, q, up, n, 0.16, 0.34, 0.4, 0.72, '#1e3a5f');
        wall(p, q, up, n, 0.66, 0.84, 0.4, 0.72, '#1e3a5f');
        if (n[2] < 0) wall(p, q, up, n, 0.44, 0.56, 0, 0.62, '#5b3a1e');
      }
    }
    face([up3(A), up3(D), up3(C), up3(B)].reverse(), [0, 1, 0], col, up3(A));
  };
  const drawBuilding = (b: Building) => {
    const { x, z, hx, hz, h, rh, kind } = b;
    if (kind === 'tower') {
      drawBox(x, z, hx, hz, 0, h, '#a8adb5', false);
      drawBox(x, z, hx * 1.6, hz * 1.6, h, h + 4, '#c2410c', false);
      drawBox(x, z, 0.3, 0.3, h + 4, h + 9, '#dc2626', false);
      return;
    }
    const wallCol = kind === 'barn' ? '#a3441b' : kind === 'hut' ? '#d9c9a0' : '#f3ecd9';
    const roofCol = kind === 'barn' ? '#4b4540' : kind === 'hut' ? '#a16207' : '#c0392b';
    drawBox(x, z, hx, hz, 0, h, wallCol, kind !== 'barn');
    const ov = 0.5;
    const E1: V3 = [x - hx - ov, h, z - hz - ov], E2: V3 = [x + hx + ov, h, z - hz - ov], E3: V3 = [x + hx + ov, h, z + hz + ov], E4: V3 = [x - hx - ov, h, z + hz + ov];
    const R1: V3 = [x - hx - ov, h + rh, z], R2: V3 = [x + hx + ov, h + rh, z];
    face([[x + hx, h, z - hz], [x + hx, h, z + hz], R2], [1, 0, 0], wallCol, [x + hx, h, z]);
    face([[x - hx, h, z + hz], [x - hx, h, z - hz], R1], [-1, 0, 0], wallCol, [x - hx, h, z]);
    face([E1, E2, R2, R1], [0, hz, -rh], roofCol, E1);
    face([E3, E4, R1, R2], [0, hz, rh], roofCol, E3);
  };

  for (const b of s.buildings) {
    const cB = toCam([b.x, 0, b.z]);
    if (cB[2] < 0.8 || cB[2] > 600) continue;
    items.push({ depth: cB[2], draw: () => drawBuilding(b) });
  }

  for (const tr of s.trees) {
    const cB = toCam([tr.x, 0, tr.z]);
    if (cB[2] < 0.8 || cB[2] > 450) continue;
    const dx = tr.x - P[0];
    const dz = tr.z - P[2];
    const dl = Math.hypot(dx, dz) || 1;
    const perp: V3 = [-dz / dl, 0, dx / dl];
    items.push({ depth: cB[2], draw: () => drawTree(tr, perp) });
  }

  s.gates.forEach((g, gi) => {
    const c = toCam(g.c);
    items.push({
      depth: c[2],
      draw: () => {
        const passed = gi < s.next;
        const isNext = gi === s.next;
        const color = passed ? 'rgba(74,222,128,0.5)' : isNext ? '#22d3ee' : '#fb923c';
        const N = 20;
        const ring: V3[] = [];
        for (let i = 0; i < N; i++) {
          const an = (i / N) * Math.PI * 2;
          const cs = Math.cos(an) * g.r;
          const sn = Math.sin(an) * g.r;
          ring.push([g.c[0] + g.rt[0] * cs, g.c[1] + sn, g.c[2] + g.rt[2] * cs]);
        }
        if (isNext) {
          for (let i = 0; i < N; i++) lineW(ring[i], ring[(i + 1) % N], 'rgba(34,211,238,0.28)', 0.4);
          if (cfg.beam) lineW([g.c[0], g.c[1] + g.r, g.c[2]], [g.c[0], g.c[1] + g.r + 60, g.c[2]], 'rgba(34,211,238,0.35)', 0.5, 3);
        }
        for (let i = 0; i < N; i++) lineW(ring[i], ring[(i + 1) % N], color, 0.14);
      },
    });
  });

  items.sort((p, q) => q.depth - p.depth);
  items.forEach((it) => it.draw());

  // ---------- вказівник на наступні ворота ----------
  const target = s.gates[Math.min(s.next, s.gates.length - 1)];
  const tc = toCam(target.c);
  const dist = Math.hypot(target.c[0] - P[0], target.c[1] - P[1], target.c[2] - P[2]);
  let tx = 0;
  let ty = 0;
  let onScreen = false;
  if (tc[2] > 0.5) {
    [tx, ty] = scr(tc);
    onScreen = tx > 40 && tx < W - 40 && ty > 40 && ty < H - 40;
  }
  if (!onScreen) {
    let dx = tc[0];
    let dy = -tc[1];
    if (tc[2] <= 0.5) {
      dx = -dx || 0.0001;
      dy = -dy || -0.0001;
    }
    const l = Math.hypot(dx, dy) || 1;
    tx = cx + (dx / l) * W * 0.4;
    ty = cy + (dy / l) * H * 0.36;
    const ang = Math.atan2(dy, dx);
    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(ang);
    ctx.fillStyle = 'rgba(34,211,238,0.9)';
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(18, 0);
    ctx.lineTo(-10, -13);
    ctx.lineTo(-4, 0);
    ctx.lineTo(-10, 13);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  ctx.font = 'bold 14px monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#22d3ee';
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.lineWidth = 3;
  const dLabel = `${Math.round(dist)} м`;
  const ly = onScreen ? ty - 24 : ty + 28;
  ctx.strokeText(dLabel, tx, ly);
  ctx.fillText(dLabel, tx, ly);

  // ---------- віньєтка (ефект камери) ----------
  const vg = ctx.createRadialGradient(cx, cy, H * 0.35, cx, cy, W * 0.62);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);

  // аналоговий шум відео (залежить від якості дрона)
  const nz = s.drone.noise;
  if (nz > 0) {
    ctx.fillStyle = `rgba(255,255,255,${0.05 * nz})`;
    for (let i = 0; i < 14; i++) ctx.fillRect(0, ((t * 97 + i * 53.7) % H), W, 1 + (i % 3) * 0.6);
    ctx.fillStyle = `rgba(0,0,0,${0.08 * nz})`;
    for (let i = 0; i < 90 * nz; i++) ctx.fillRect(Math.random() * W, Math.random() * H, 2, 1);
  }

  // ---------- OSD ----------
  const text = (str: string, x: number, y: number, color = '#fff', size = 16, align: CanvasTextAlign = 'left') => {
    ctx.font = `bold ${size}px monospace`;
    ctx.textAlign = align;
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    ctx.strokeText(str, x, y);
    ctx.fillStyle = color;
    ctx.fillText(str, x, y);
  };

  // приціл
  ctx.strokeStyle = 'rgba(255,255,255,0.8)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 14, cy);
  ctx.lineTo(cx - 5, cy);
  ctx.moveTo(cx + 5, cy);
  ctx.lineTo(cx + 14, cy);
  ctx.moveTo(cx, cy - 14);
  ctx.lineTo(cx, cy - 5);
  ctx.stroke();

  text(s.armed ? 'ARMED' : 'DISARMED', 20, 30, s.armed ? '#4ade80' : '#f87171');
  text(cfg.modeLabel, 20, 52, '#fde68a');
  text(`ШВИДК ${Math.round(s.speed * 3.6)} км/г`, 20, 78);
  text(`ВИСОТА ${Math.max(0, s.p[1] - 0.12).toFixed(1)} м`, 20, 100);
  text(`ВОРОТА ${Math.min(s.next, s.gates.length)}/${s.gates.length}`, W - 20, 30, '#22d3ee', 16, 'right');
  const left = Math.max(0, cfg.limit - s.time);
  text(`ЧАС ${fmtTime(s.time)}`, W - 20, 52, '#fff', 16, 'right');
  text(`ЛІМІТ ${fmtTime(left)}`, W - 20, 74, left < 30 ? '#f87171' : '#cbd5e1', 14, 'right');

  // підказки запуску
  if (!s.armed && s.crashT <= 0) {
    if (!s.primed) {
      text('ЗАПУСК МОТОРІВ', cx, H * 0.66, '#fde68a', 22, 'center');
      text('1) Лівий стік — ВНИЗ до упору', cx, H * 0.66 + 28, '#fff', 17, 'center');
    } else {
      text('ЗАПУСК МОТОРІВ', cx, H * 0.66, '#fde68a', 22, 'center');
      text('2) Тепер лівий стік — НАЗАД ВГОРУ', cx, H * 0.66 + 28, '#4ade80', 17, 'center');
    }
  }

  if (s.msg.t > 0 && s.crashT <= 0) {
    ctx.globalAlpha = Math.min(1, s.msg.t * 2);
    text(s.msg.text, cx, H * 0.28, s.msg.color, 26, 'center');
    ctx.globalAlpha = 1;
  }

  if (s.crashT > 0) {
    ctx.fillStyle = `rgba(220,38,38,${0.25 + 0.15 * Math.sin(t * 20)})`;
    ctx.fillRect(0, 0, W, H);
    text(s.msg.text, cx, cy, '#fff', 30, 'center');
    text('Відновлення...', cx, cy + 32, '#fecaca', 16, 'center');
  }

};
