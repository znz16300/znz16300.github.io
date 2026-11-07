// 🎯 Лабіринт: торкайся клітинок, щоб ставити дзеркала («/», «\»), і направ промінь у ціль. 8 рівнів.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { ActionButton, Chip, LabLayout, StatBox } from '../shared/ui';
import { useBest } from '../shared/useBest';
import { playBeep } from '../shared/sound';
import { SoundToggle } from '../shared/SoundToggle';
import { LEVELS } from './levels';
import { COLS, DX, DY, ROWS, key, trace, type Mirror } from './trace';

export const LaserGame: React.FC = () => {
  const [level, setLevel] = useState(0);
  const [mirrors, setMirrors] = useState<Map<string, Mirror>>(new Map());
  const [reached, submitReached] = useBest('laser-level');
  const lv = LEVELS[level];
  const result = trace(lv, mirrors);
  const solved = result.hit;
  const used = mirrors.size;

  const st = useRef({ mirrors, lv, result, solved, t: 0 });
  st.current = { mirrors, lv, result, solved, t: st.current.t };

  const select = (i: number) => {
    setLevel(i);
    setMirrors(new Map());
  };

  const onDown = (e: React.PointerEvent) => {
    const p = canvasPoint(e);
    if (!p || solved) return;
    const cell = Math.min(p.w / COLS, p.h / ROWS);
    const ox = (p.w - cell * COLS) / 2;
    const oy = (p.h - cell * ROWS) / 2;
    const c = Math.floor((p.x - ox) / cell);
    const r = Math.floor((p.y - oy) / cell);
    if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return;
    if (lv.walls.some((w) => w.c === c && w.r === r)) return;
    if ((c === lv.source.c && r === lv.source.r) || (c === lv.target.c && r === lv.target.r)) return;
    const k = key(c, r);
    const next = new Map(mirrors);
    const cur = next.get(k);
    if (!cur) {
      if (next.size >= lv.max) return;
      next.set(k, '/');
    } else if (cur === '/') next.set(k, '\\');
    else next.delete(k);
    setMirrors(next);
    const res = trace(lv, next);
    if (res.hit) {
      playBeep(true);
      submitReached(level + 1);
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    s.t += dt;
    const cell = Math.min(w / COLS, h / ROWS);
    const ox = (w - cell * COLS) / 2;
    const oy = (h - cell * ROWS) / 2;
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, w, h);
    ctx.translate(ox, oy);
    // клітинки
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++) {
        ctx.fillStyle = (r + c) % 2 ? '#0f172a' : '#111c33';
        ctx.fillRect(c * cell, r * cell, cell, cell);
      }
    // стіни
    ctx.fillStyle = '#475569';
    s.lv.walls.forEach((wl) => {
      ctx.fillRect(wl.c * cell + 2, wl.r * cell + 2, cell - 4, cell - 4);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(wl.c * cell + 2, wl.r * cell + 2, cell - 4, cell - 4);
    });
    // промінь
    const pts = s.result.points;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const [lw, col] of [[cell * 0.28, 'rgba(239,68,68,0.25)'], [cell * 0.1, '#f87171'], [cell * 0.04, '#fff']] as [number, string][]) {
      ctx.strokeStyle = col;
      ctx.lineWidth = lw;
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p.x * cell, p.y * cell) : ctx.moveTo(p.x * cell, p.y * cell)));
      ctx.stroke();
    }
    // дзеркала
    s.mirrors.forEach((m, k) => {
      const [c, r] = k.split(',').map(Number);
      const x = c * cell;
      const y = r * cell;
      ctx.strokeStyle = '#7dd3fc';
      ctx.lineWidth = Math.max(4, cell * 0.12);
      ctx.beginPath();
      if (m === '/') {
        ctx.moveTo(x + cell * 0.12, y + cell * 0.88);
        ctx.lineTo(x + cell * 0.88, y + cell * 0.12);
      } else {
        ctx.moveTo(x + cell * 0.12, y + cell * 0.12);
        ctx.lineTo(x + cell * 0.88, y + cell * 0.88);
      }
      ctx.stroke();
    });
    // джерело
    const sc = s.lv.source;
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc((sc.c + 0.5) * cell, (sc.r + 0.5) * cell, cell * 0.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((sc.c + 0.5) * cell, (sc.r + 0.5) * cell);
    ctx.lineTo((sc.c + 0.5 + DX[sc.dir] * 0.42) * cell, (sc.r + 0.5 + DY[sc.dir] * 0.42) * cell);
    ctx.stroke();
    // ціль
    const tg = s.lv.target;
    const pulse = 1 + Math.sin(s.t * 6) * 0.08;
    ctx.fillStyle = s.solved ? '#22c55e' : '#facc15';
    ctx.beginPath();
    ctx.arc((tg.c + 0.5) * cell, (tg.r + 0.5) * cell, cell * 0.3 * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc((tg.c + 0.5) * cell, (tg.r + 0.5) * cell, cell * 0.14, 0, Math.PI * 2);
    ctx.fill();
  };

  const panel = (
    <>
      <div className="flex flex-wrap gap-2">
        {LEVELS.map((_, i) => (
          <Chip key={i} selected={i === level} onClick={() => select(i)}>
            {i < reached ? '✅' : i === reached ? '▶' : '🔒'} {i + 1}
          </Chip>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <StatBox label="Рівень" value={`${level + 1} / ${LEVELS.length}`} />
        <StatBox label="Дзеркала" value={`${used} / ${lv.max}`} />
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base">
        Торкнись порожньої клітинки: <b>/</b> → <b>\</b> → прибрати. Освітли жовту ціль 🎯 променем.
      </div>
      {solved && (
        <div className="bg-green-900/60 border border-green-400/50 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-2">🎉 Ціль освітлена!</div>
          {level + 1 < LEVELS.length ? (
            <ActionButton onClick={() => select(level + 1)}>Наступний рівень ▶</ActionButton>
          ) : (
            <div>Ти пройшов(-ла) усі рівні!</div>
          )}
        </div>
      )}
      <ActionButton onClick={() => setMirrors(new Map())} variant="secondary">
        ↺ Прибрати дзеркала
      </ActionButton>
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<div className="w-full h-full" onPointerDown={onDown}><SimCanvas aspect={COLS / ROWS} draw={draw} /></div>} panel={panel} />;
};
