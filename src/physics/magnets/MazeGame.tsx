// 🎯 Магніт під столом: веди пальцем магніт - сталева кулька тягнеться до нього. Дотягни її до цілі.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { ActionButton, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { LabLayout } from '../shared/ui';
import { MAZES, find } from './mazes';

const COLS = 10, ROWS = 6, BR = 0.28;

export const MazeGame: React.FC = () => {
  const [best, submit] = useBest('magnets-maze');
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(0);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const [won, setWon] = useState(false);
  const st = useRef({
    level: 0,
    x: 0, y: 0, vx: 0, vy: 0,
    mx: 5, my: 3, t: 0, won: false, moved: false,
  });
  const init = (lv: number) => {
    const s = st.current;
    const [sx, sy] = find(MAZES[lv], 'S');
    s.level = lv; s.x = sx + 0.5; s.y = sy + 0.5; s.vx = 0; s.vy = 0; s.mx = s.x; s.my = s.y; s.t = 0; s.won = false; s.moved = false;
  };
  const inited = useRef(false);
  if (!inited.current) { inited.current = true; init(0); }

  const place = (e: React.PointerEvent) => {
    const p = canvasPoint(e);
    if (!p) return;
    const s = st.current;
    s.mx = (p.x / p.w) * COLS;
    s.my = (p.y / p.h) * ROWS;
    s.moved = true;
    unlockAudio();
  };

  const wall = (m: string[], x: number, y: number) => {
    const cx = Math.floor(x), cy = Math.floor(y);
    return cx < 0 || cy < 0 || cx >= COLS || cy >= ROWS || m[cy][cx] === '#';
  };
  const hits = (m: string[], x: number, y: number) =>
    wall(m, x - BR, y - BR) || wall(m, x + BR, y - BR) || wall(m, x - BR, y + BR) || wall(m, x + BR, y + BR);

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    const m = MAZES[s.level];
    const cw = w / COLS, ch = h / ROWS;
    if (!s.won && s.moved) {
      s.t += dt;
      const dx = s.mx - s.x, dy = s.my - s.y;
      const d = Math.hypot(dx, dy);
      const f = Math.min(40, 30 / (d + 0.4));
      s.vx += (dx / (d + 1e-6)) * f * dt;
      s.vy += (dy / (d + 1e-6)) * f * dt;
      const damp = Math.pow(0.05, dt);
      s.vx *= damp; s.vy *= damp;
      const sp = Math.hypot(s.vx, s.vy);
      if (sp > 6) { s.vx *= 6 / sp; s.vy *= 6 / sp; }
      const nx = s.x + s.vx * dt;
      if (!hits(m, nx, s.y)) s.x = nx; else s.vx *= -0.2;
      const ny = s.y + s.vy * dt;
      if (!hits(m, s.x, ny)) s.y = ny; else s.vy *= -0.2;
      const [gx, gy] = find(m, 'G');
      if (Math.hypot(s.x - (gx + 0.5), s.y - (gy + 0.5)) < 0.4) {
        s.won = true;
        playBeep(true);
        setWon(true);
        setTime(s.t);
      }
    }
    // малюємо
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const c = m[y][x];
        if (c === '#') {
          ctx.fillStyle = '#475569';
          ctx.fillRect(x * cw, y * ch, cw + 0.5, ch + 0.5);
        } else if (c === 'G') {
          ctx.fillStyle = '#86efac';
          ctx.fillRect(x * cw, y * ch, cw, ch);
          ctx.font = `${Math.min(cw, ch) * 0.7}px serif`;
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText('🏁', (x + 0.5) * cw, (y + 0.5) * ch);
        }
      }
    }
    // магніт
    ctx.font = `${Math.min(cw, ch) * 0.8}px serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.globalAlpha = 0.9;
    ctx.fillText('🧲', s.mx * cw, s.my * ch);
    ctx.globalAlpha = 1;
    // кулька
    const g = ctx.createRadialGradient(s.x * cw - 3, s.y * ch - 3, 1, s.x * cw, s.y * ch, BR * Math.min(cw, ch));
    g.addColorStop(0, '#f8fafc'); g.addColorStop(1, '#64748b');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(s.x * cw, s.y * ch, BR * Math.min(cw, ch), 0, Math.PI * 2);
    ctx.fill();
    if (!s.moved) {
      ctx.fillStyle = 'rgba(15,23,42,0.75)';
      ctx.font = `bold ${Math.max(12, ch * 0.2)}px system-ui, sans-serif`;
      ctx.fillText('👆 Проведи пальцем — магніт потягне кульку', w / 2, h / 2);
    }
  };

  const nextLevel = () => {
    const t = total + time;
    if (level + 1 >= MAZES.length) {
      setTotal(t);
      setDone(true);
      setRec(submit(Math.max(0, Math.round(600 - t * 5))));
      return;
    }
    setTotal(t);
    setLevel(level + 1);
    init(level + 1);
    setWon(false);
  };
  const restart = () => {
    setLevel(0); setTotal(0); setTime(0); setDone(false); setWon(false); setRec(false); init(0);
  };
  const retry = () => { init(level); setWon(false); };

  const score = Math.max(0, Math.round(600 - total * 5));
  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{rec ? '🏆' : '🧲'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-2 gap-2">
        <StatBox label="Лабіринт" value={`${level + 1}/${MAZES.length}`} />
        <StatBox label="Час, с" value={won ? time.toFixed(1).replace('.', ',') : '…'} />
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        Кулька з заліза тягнеться до магніта. Веди магніт <b>перед нею</b> — вздовж проходу, щоб обійти стіни.
      </div>
      {won && (
        <div className="bg-green-900/60 border border-green-400/50 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-2">Є! {time.toFixed(1).replace('.', ',')} с 🎉</div>
          <ActionButton onClick={nextLevel}>{level + 1 >= MAZES.length ? 'Результат' : 'Далі ▶'}</ActionButton>
        </div>
      )}
      <ActionButton onClick={retry} variant="secondary">↺ Спочатку</ActionButton>
      <SoundToggle />
    </>
  );
  const scene = (
    <div className="w-full h-full" style={{ touchAction: 'none' }} onPointerDown={place} onPointerMove={(e) => e.buttons && place(e)}>
      <SimCanvas aspect={10 / 6} draw={draw} />
    </div>
  );
  return <LabLayout scene={scene} panel={panel} />;
};
