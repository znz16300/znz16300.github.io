// Спрощена 2D-фізика для конструктора: м'ячі, гірки (відрізки) і доміно (стрижні, що падають).
// Одиниці світу: 160 × 100, y вниз. Без React - можна тестувати окремо.
export const W = 160;
export const H = 100;
export const FLOOR = 94;
export const G = 60;
export const DOM_H = 14;
export const DOM_W = 2.4;
export const BALL_R = 2.6;
export const RAMP_LEN = 24;
export const RAMP_DROP = 10;

export interface Seg { x1: number; y1: number; x2: number; y2: number }
export interface Ball { x: number; y: number; vx: number; vy: number }
export interface Domino { x: number; th: number; om: number; dir: 0 | 1 | -1; down: boolean }
export interface Bell { x: number; y: number; r: number; rung: boolean }
export interface World { segs: Seg[]; balls: Ball[]; doms: Domino[]; bell: Bell | null; t: number; rungAt: number | null }

export type Item =
  | { kind: 'ramp'; dir: 1 | -1; cx: number; cy: number }
  | { kind: 'domino'; x: number }
  | { kind: 'ball'; x: number; y: number };

export interface LevelDef {
  id: string;
  title: string;
  hint: string;
  segs: Seg[];
  balls: { x: number; y: number }[];
  doms: number[];
  bell: { x: number; y: number; r: number };
  inv: { ramp: number; domino: number; ball: number };
}

export const rampSeg = (it: { dir: 1 | -1; cx: number; cy: number }): Seg => {
  const hx = RAMP_LEN / 2, hy = (RAMP_DROP / 2) * it.dir; // dir 1: ліворуч вище, праворуч нижче
  return { x1: it.cx - hx, y1: it.cy - hy, x2: it.cx + hx, y2: it.cy + hy };
};

export const buildWorld = (level: LevelDef | null, items: Item[]): World => {
  const segs: Seg[] = [
    { x1: 0, y1: FLOOR, x2: W, y2: FLOOR },
    { x1: 0, y1: -200, x2: 0, y2: FLOOR },
    { x1: W, y1: -200, x2: W, y2: FLOOR },
    ...(level ? level.segs : []),
  ];
  const balls: Ball[] = (level ? level.balls : []).map((b) => ({ x: b.x, y: b.y, vx: 0, vy: 0 }));
  const doms: Domino[] = (level ? level.doms : []).map((x) => ({ x, th: 0, om: 0, dir: 0, down: false }));
  for (const it of items) {
    if (it.kind === 'ramp') segs.push(rampSeg(it));
    else if (it.kind === 'domino') doms.push({ x: it.x, th: 0, om: 0, dir: 0, down: false });
    else balls.push({ x: it.x, y: it.y, vx: 0, vy: 0 });
  }
  return { segs, balls, doms, bell: level ? { ...level.bell, rung: false } : null, t: 0, rungAt: null };
};

export const domTop = (d: Domino) => ({
  x: d.x + d.dir * DOM_H * Math.sin(d.th),
  y: FLOOR - DOM_H * Math.cos(d.th),
});

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

function ballSeg(b: Ball, s: Seg, dt: number) {
  const ex = s.x2 - s.x1, ey = s.y2 - s.y1;
  const l2 = ex * ex + ey * ey;
  const u = clamp(((b.x - s.x1) * ex + (b.y - s.y1) * ey) / l2, 0, 1);
  const px = s.x1 + u * ex, py = s.y1 + u * ey;
  const dx = b.x - px, dy = b.y - py;
  const d = Math.hypot(dx, dy);
  if (d >= BALL_R + 0.02 || d < 1e-6) return;
  const nx = dx / d, ny = dy / d;
  if (d < BALL_R) { b.x += nx * (BALL_R - d); b.y += ny * (BALL_R - d); }
  const vn = b.vx * nx + b.vy * ny;
  if (vn < 0) {
    const e = vn < -25 ? 0.3 : 0;
    b.vx -= (1 + e) * vn * nx;
    b.vy -= (1 + e) * vn * ny;
  }
  // коченню заважає невелике тертя
  const tx = -ny, ty = nx;
  const vt = b.vx * tx + b.vy * ty;
  const f = 1 - Math.exp(-(Math.abs(ny) > 0.97 ? 1.0 : 0.25) * dt); // на рівній підлозі м'яч поступово зупиняється
  b.vx -= vt * f * tx;
  b.vy -= vt * f * ty;
}

function ballBall(a: Ball, b: Ball) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const d = Math.hypot(dx, dy);
  if (d >= 2 * BALL_R || d < 1e-6) return;
  const nx = dx / d, ny = dy / d;
  const o = (2 * BALL_R - d) / 2;
  a.x -= nx * o; a.y -= ny * o; b.x += nx * o; b.y += ny * o;
  const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
  if (rv < 0) {
    const j = -(1 + 0.8) * rv / 2;
    a.vx -= j * nx; a.vy -= j * ny; b.vx += j * nx; b.vy += j * ny;
  }
}

function trigger(d: Domino, dir: 1 | -1, om: number) {
  if (d.dir !== 0) return;
  d.dir = dir;
  d.th = 0.04;
  d.om = Math.max(0.8, om);
}

function ballDomino(b: Ball, d: Domino) {
  if (d.down) return;
  if (d.dir === 0) {
    const l = d.x - DOM_W / 2, r = d.x + DOM_W / 2, t = FLOOR - DOM_H;
    const cx = clamp(b.x, l, r), cy = clamp(b.y, t, FLOOR);
    const dx = b.x - cx, dy = b.y - cy;
    if (Math.hypot(dx, dy) >= BALL_R) return;
    if (Math.abs(b.vx) > 4 && b.y > t) {
      trigger(d, b.vx > 0 ? 1 : -1, (Math.abs(b.vx) / DOM_H) * 1.2);
      b.vx *= 0.6;
    } else {
      // повільний м'яч упирається в доміно, як у стінку
      if (b.x < d.x) { b.x = l - BALL_R; if (b.vx > 0) b.vx = 0; }
      else { b.x = r + BALL_R; if (b.vx < 0) b.vx = 0; }
    }
    return;
  }
  // доміно падає: його стрижень штовхає м'яч попереду
  if ((b.x - d.x) * d.dir <= 0) return;
  const top = domTop(d);
  const ex = top.x - d.x, ey = top.y - FLOOR;
  const l2 = ex * ex + ey * ey;
  const u = clamp(((b.x - d.x) * ex + (b.y - FLOOR) * ey) / l2, 0, 1);
  const px = d.x + u * ex, py = FLOOR + u * ey;
  if (u < 0.7) return; // штовхає лише верхівка; м'яч, що пробіг під стрижнем, не чіпаємо
  const dx = b.x - px, dy = b.y - py;
  const dist = Math.hypot(dx, dy);
  if (dist >= BALL_R + DOM_W / 2 || dist < 1e-6) return;
  const nx = dx / dist, ny = dy / dist;
  b.x += nx * (BALL_R + DOM_W / 2 - dist);
  b.y += ny * (BALL_R + DOM_W / 2 - dist);
  const vx = u * d.dir * DOM_H * Math.cos(d.th) * d.om;
  const vy = u * DOM_H * Math.sin(d.th) * d.om;
  const rv = (b.vx - vx) * nx + (b.vy - vy) * ny;
  if (rv < 0) {
    b.vx -= rv * nx;
    b.vy -= rv * ny;
  }
}

export function step(w: World, dtTotal: number) {
  const n = Math.max(1, Math.ceil(dtTotal / (1 / 240)));
  const dt = dtTotal / n;
  for (let k = 0; k < n; k++) {
    w.t += dt;
    for (const b of w.balls) {
      b.vy += G * dt;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      for (const s of w.segs) ballSeg(b, s, dt);
    }
    for (let i = 0; i < w.balls.length; i++) for (let j = i + 1; j < w.balls.length; j++) ballBall(w.balls[i], w.balls[j]);
    for (const d of w.doms) {
      if (d.dir !== 0 && !d.down) {
        d.om += ((1.5 * G) / DOM_H) * Math.sin(d.th) * dt;
        d.th += d.om * dt;
        if (d.th >= Math.PI / 2 - 0.03) { d.th = Math.PI / 2 - 0.03; d.om = 0; d.down = true; }
      }
    }
    for (const b of w.balls) for (const d of w.doms) ballDomino(b, d);
    for (const a of w.doms) {
      if (a.dir === 0) continue;
      const top = domTop(a);
      for (const c of w.doms) {
        if (c.dir !== 0 || c === a) continue;
        const ahead = (c.x - a.x) * a.dir;
        if (ahead > 0 && ahead < DOM_H + 1 && (top.x - c.x) * a.dir >= -DOM_W / 2) trigger(c, a.dir, 0.75 * a.om);
      }
    }
    if (w.bell && !w.bell.rung) {
      const bl = w.bell;
      let hit = w.balls.some((b) => Math.hypot(b.x - bl.x, b.y - bl.y) < bl.r + BALL_R);
      if (!hit) {
        hit = w.doms.some((d) => {
          if (d.dir === 0) return false;
          const top = domTop(d);
          return Math.hypot(top.x - bl.x, top.y - bl.y) < bl.r + DOM_W / 2;
        });
      }
      if (hit) { bl.rung = true; w.rungAt = w.t; }
    }
  }
}

/** Чи щось ще рухається (м'ячі, доміно, що падають). */
export const moving = (w: World): boolean =>
  w.balls.some((b) => Math.hypot(b.vx, b.vy) > 0.6) || w.doms.some((d) => d.dir !== 0 && !d.down);
