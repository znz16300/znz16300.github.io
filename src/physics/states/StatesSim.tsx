// Частинки води: лід (<0 °C), рідина (0…100 °C), пара (>100 °C).
import React, { useRef } from 'react';
import { SimCanvas } from '../shared/SimCanvas';

export const stateOf = (t: number): 'ice' | 'water' | 'steam' => (t <= 0 ? 'ice' : t < 100 ? 'water' : 'steam');

const COLS = 8;
const ROWS = 6;
const N = COLS * ROWS;

interface P {
  x: number; y: number; vx: number; vy: number; hx: number; hy: number;
}

export const StatesSim: React.FC<{ temp: number }> = ({ temp }) => {
  const st = useRef<{ ps: P[] | null; temp: number }>({ ps: null, temp });
  st.current.temp = temp;

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    const bx = w * 0.18, bw = w * 0.5, by = h * 0.06, bh = h * 0.88; // колба
    const r = Math.max(5, Math.min(bw, bh) * 0.03);
    if (!s.ps) {
      s.ps = [];
      for (let i = 0; i < N; i++) {
        const c = i % COLS, rw = Math.floor(i / COLS);
        const hx = (c + 0.5) / COLS, hy = 0.55 + (rw / (ROWS - 1)) * 0.41;
        s.ps.push({ x: hx, y: hy, vx: 0, vy: 0, hx, hy });
      }
    }
    const state = stateOf(s.temp);
    const heat = Math.max(0.05, (s.temp + 40) / 160); // 0…1
    const sub = 2;
    for (let k = 0; k < sub; k++) {
      const d = dt / sub;
      for (const p of s.ps) {
        const kick = (state === 'ice' ? 0.25 : state === 'water' ? 0.9 : 2.6) * (0.4 + heat) ;
        p.vx += (Math.random() - 0.5) * kick * 40 * d;
        p.vy += (Math.random() - 0.5) * kick * 40 * d;
        if (state === 'ice') {
          p.vx += (p.hx - p.x) * 90 * d; p.vy += (p.hy - p.y) * 90 * d;
          p.vx *= 0.9; p.vy *= 0.9;
        } else if (state === 'water') {
          p.vy += 1.1 * d;
          p.vx *= 0.985; p.vy *= 0.985;
        } else {
          p.vx *= 0.999; p.vy *= 0.999;
          const sp = Math.hypot(p.vx, p.vy);
          const want = 0.5 + heat * 0.35;
          if (sp < want) { const f = want / (sp + 1e-4); p.vx *= 1 + (f - 1) * 0.05; p.vy *= 1 + (f - 1) * 0.05; }
        }
        p.x += p.vx * d; p.y += p.vy * d;
        const top = state === 'steam' ? 0.03 : 0.5;
        if (p.x < 0.03) { p.x = 0.03; p.vx = Math.abs(p.vx); }
        if (p.x > 0.97) { p.x = 0.97; p.vx = -Math.abs(p.vx); }
        if (p.y < top) { p.y = top; p.vy = Math.abs(p.vy); }
        if (p.y > 0.97) { p.y = 0.97; p.vy = -Math.abs(p.vy) * 0.6; }
      }
    }

    // фон
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#0f172a');
    bg.addColorStop(1, '#1e293b');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // колба
    ctx.fillStyle = 'rgba(148,163,184,0.12)';
    ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3;
    ctx.strokeRect(bx, by, bw, bh);

    // частинки
    const col = state === 'ice' ? '#bae6fd' : state === 'water' ? '#38bdf8' : '#e2e8f0';
    for (const p of s.ps) {
      const X = bx + p.x * bw, Y = by + p.y * bh;
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(X, Y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(15,23,42,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    if (state === 'ice') {
      ctx.strokeStyle = 'rgba(186,230,253,0.35)';
      for (let i = 0; i < N; i++) {
        const a = s.ps[i];
        const b = s.ps[i + 1];
        if (b && (i % COLS) !== COLS - 1) {
          ctx.beginPath();
          ctx.moveTo(bx + a.x * bw, by + a.y * bh);
          ctx.lineTo(bx + b.x * bw, by + b.y * bh);
          ctx.stroke();
        }
      }
    }

    // термометр
    const tx = w * 0.8, ty = h * 0.08, th = h * 0.76;
    const frac = Math.max(0, Math.min(1, (s.temp + 20) / 140));
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(tx - 8, ty, 16, th);
    const hot = state === 'steam' ? '#ef4444' : state === 'water' ? '#f97316' : '#38bdf8';
    ctx.fillStyle = hot;
    ctx.fillRect(tx - 6, ty + th * (1 - frac), 12, th * frac);
    ctx.beginPath();
    ctx.arc(tx, ty + th + 14, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = `${Math.max(11, h * 0.035)}px system-ui, sans-serif`;
    ctx.textAlign = 'left';
    [0, 100].forEach((v) => {
      const yy = ty + th * (1 - (v + 20) / 140);
      ctx.fillRect(tx + 10, yy - 1, 12, 2);
      ctx.fillText(`${v}°`, tx + 26, yy + 4);
    });
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(16, h * 0.06)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round(s.temp)} °C`, tx, ty + th + 56);
    // підпис
    ctx.font = `bold ${Math.max(14, h * 0.055)}px system-ui, sans-serif`;
    ctx.fillStyle = hot;
    ctx.textAlign = 'center';
    ctx.fillText(state === 'ice' ? '🧊 Лід' : state === 'water' ? '💧 Вода' : '☁️ Пара', bx + bw / 2, by + h * 0.07);
  };

  return <SimCanvas aspect={16 / 10} draw={draw} />;
};
