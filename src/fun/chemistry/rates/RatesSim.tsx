// Частинки A (сині) і B (помаранчеві) стикаються. Якщо удар достатньо сильний - утворюється продукт C (зелений).
import React, { useRef } from 'react';
import { SimCanvas } from '../../../physics/shared/SimCanvas';

interface P { x: number; y: number; vx: number; vy: number; t: 'A' | 'B' | 'C' }

export interface Props {
  temp: number; // 0…1
  conc: number; // скільки частинок кожного виду
  cat: boolean;
  runId: number; // 0 - очікування
  onTick?: (time: number, products: number) => void;
}

const R = 0.022;
export const speedOf = (T: number) => 0.18 + 0.5 * T;
export const energyBarrier = (cat: boolean) => (cat ? 0.28 : 0.55);

export const RatesSim: React.FC<Props> = ({ temp, conc, cat, runId, onTick }) => {
  const st = useRef({ sig: '', ps: [] as P[], time: 0, products: 0, hist: [] as number[], lastHist: 0, lastTick: 0, rx: 0 });
  const tick = useRef(onTick);
  tick.current = onTick;

  const init = () => {
    const s = st.current;
    const v = speedOf(temp);
    const mk = (t: 'A' | 'B'): P => {
      const a = Math.random() * Math.PI * 2, sp = v * (0.6 + Math.random() * 0.8);
      return { x: R + Math.random() * (1 - 2 * R), y: R + Math.random() * (1 - 2 * R), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, t };
    };
    s.ps = [];
    for (let i = 0; i < conc; i++) { s.ps.push(mk('A')); s.ps.push(mk('B')); }
    s.time = 0; s.products = 0; s.hist = [0]; s.lastHist = 0; s.lastTick = 0;
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    const sig = `${temp}|${conc}|${cat}|${runId}`;
    if (sig !== s.sig) { s.sig = sig; init(); }
    const running = runId > 0;
    const nSub = 3;
    for (let k = 0; k < nSub; k++) {
      const d = dt / nSub;
      if (running) s.time += d;
      for (const p of s.ps) {
        p.x += p.vx * d; p.y += p.vy * d;
        if (p.x < R) { p.x = R; p.vx = Math.abs(p.vx); }
        if (p.x > 1 - R) { p.x = 1 - R; p.vx = -Math.abs(p.vx); }
        if (p.y < R) { p.y = R; p.vy = Math.abs(p.vy); }
        if (p.y > 1 - R) { p.y = 1 - R; p.vy = -Math.abs(p.vy); }
      }
      const ps = s.ps;
      const dead = new Set<number>();
      const born: P[] = [];
      for (let i = 0; i < ps.length; i++) {
        if (dead.has(i)) continue;
        for (let j = i + 1; j < ps.length; j++) {
          if (dead.has(j)) continue;
          const a = ps[i], b = ps[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= 2 * R || dist < 1e-9) continue;
          const nx = dx / dist, ny = dy / dist;
          const rvx = b.vx - a.vx, rvy = b.vy - a.vy;
          const rel = Math.hypot(rvx, rvy);
          const approaching = rvx * nx + rvy * ny < 0;
          if (!approaching) continue;
          if (running && a.t !== b.t && a.t !== 'C' && b.t !== 'C' && rel > energyBarrier(cat)) {
            dead.add(i); dead.add(j);
            born.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, vx: (a.vx + b.vx) / 2, vy: (a.vy + b.vy) / 2, t: 'C' });
            s.products += 1;
            break;
          }
          const vn = rvx * nx + rvy * ny;
          a.vx += vn * nx; a.vy += vn * ny; b.vx -= vn * nx; b.vy -= vn * ny;
          const o = (2 * R - dist) / 2;
          a.x -= nx * o; a.y -= ny * o; b.x += nx * o; b.y += ny * o;
        }
      }
      if (dead.size) s.ps = ps.filter((_, i) => !dead.has(i)).concat(born);
    }
    if (running && s.time - s.lastHist >= 0.25) {
      s.lastHist = s.time;
      s.hist.push(s.products);
    }
    if (running && s.time - s.lastTick >= 0.2) {
      s.lastTick = s.time;
      tick.current?.(s.time, s.products);
    }

    // малюємо: ліворуч - посудина, праворуч - графік
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);
    const bw = Math.min(w * 0.58, h * 0.9), bh = bw;
    const bx = w * 0.02, by = (h - bh) / 2;
    ctx.fillStyle = '#1e293b'; ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3; ctx.strokeRect(bx, by, bw, bh);
    for (const p of s.ps) {
      ctx.fillStyle = p.t === 'A' ? '#38bdf8' : p.t === 'B' ? '#fb923c' : '#4ade80';
      ctx.beginPath(); ctx.arc(bx + p.x * bw, by + p.y * bh, R * bw * (p.t === 'C' ? 1.25 : 1), 0, Math.PI * 2); ctx.fill();
    }
    // графік
    const gx = bx + bw + w * 0.06, gw = w - gx - w * 0.03, gy = by + bh * 0.1, gh = bh * 0.7;
    ctx.fillStyle = '#e2e8f0'; ctx.font = `bold ${Math.max(11, h * 0.035)}px system-ui, sans-serif`; ctx.textAlign = 'left';
    ctx.fillText('Продукт C з часом', gx, gy - 22);
    ctx.strokeStyle = '#475569'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
    const maxT = 30;
    ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 3; ctx.beginPath();
    s.hist.forEach((v, i) => {
      const X = gx + Math.min(1, (i * 0.25) / maxT) * gw, Y = gy + gh - (v / conc) * gh;
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    });
    ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = `${Math.max(10, h * 0.03)}px system-ui, sans-serif`;
    ctx.fillText(`0`, gx - 12, gy + gh + 4);
    ctx.fillText(`${conc}`, gx - 22, gy + 4);
    ctx.textAlign = 'right'; ctx.fillText(`${maxT} с`, gx + gw, gy + gh + 18);
    // легенда
    ctx.textAlign = 'left';
    const ly = gy + gh + 40;
    [['#38bdf8', 'A'], ['#fb923c', 'B'], ['#4ade80', 'C = A + B']].forEach(([c, t], i) => {
      ctx.fillStyle = c; ctx.beginPath(); ctx.arc(gx + 6, ly + i * 20, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#e2e8f0'; ctx.fillText(t, gx + 20, ly + i * 20 + 4);
    });
    if (cat) { ctx.fillStyle = '#fde047'; ctx.fillText('⚡ каталізатор', gx + 90, ly + 4); }
    const nA = s.ps.filter((p) => p.t === 'A').length;
    const nB = s.ps.filter((p) => p.t === 'B').length;
    ctx.fillStyle = '#94a3b8'; ctx.fillText(`A: ${nA}  B: ${nB}  C: ${s.products}`, gx + 90, ly + 24);
  };

  return <SimCanvas aspect={16 / 10} draw={draw} />;
};
