// 🔬 Збери коло: послідовно чи паралельно, торкайся вимикача й лампочок («викрутити»).
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { BigSlider } from '../shared/BigSlider';
import { Chip, LabLayout } from '../shared/ui';
import { along, drawBulb, type Pt } from './bulb';

type Mode = 'series' | 'parallel';

export const CircuitLab: React.FC = () => {
  const [mode, setMode] = useState<Mode>('series');
  const [n, setN] = useState(3);
  const [on, setOn] = useState(true);
  const [out, setOut] = useState<boolean[]>([false, false, false, false]); // викручені лампи

  const st = useRef({ mode, n, on, out, t: 0, hit: [] as { x: number; y: number; r: number; i: number }[], sw: { x: 0, y: 0, r: 0 } });
  st.current.mode = mode;
  st.current.n = n;
  st.current.on = on;
  st.current.out = out;

  const onDown = (e: React.PointerEvent) => {
    const p = canvasPoint(e);
    if (!p) return;
    const s = st.current;
    if (Math.hypot(p.x - s.sw.x, p.y - s.sw.y) < s.sw.r) {
      setOn((v) => !v);
      return;
    }
    for (const b of s.hit) {
      if (Math.hypot(p.x - b.x, p.y - b.y) < b.r * 1.6) {
        setOut((o) => o.map((v, i) => (i === b.i ? !v : v)));
        return;
      }
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    s.t += dt;
    ctx.fillStyle = '#0b1220';
    ctx.fillRect(0, 0, w, h);
    const R = Math.min(w, h) * 0.065;
    const X = (v: number) => v * w;
    const Y = (v: number) => v * h;
    const wire: Pt[][] = [];
    const bulbs: { x: number; y: number; i: number }[] = [];
    const swPos = { x: X(0.27), y: Y(0.22) };
    let current = false;
    let br = 0;

    if (s.mode === 'series') {
      for (let i = 0; i < s.n; i++) bulbs.push({ x: X(0.42 + (0.46 * (i + 0.5)) / s.n), y: Y(0.22), i });
      wire.push([{ x: X(0.1), y: Y(0.42) }, { x: X(0.1), y: Y(0.22) }, { x: X(0.92), y: Y(0.22) }, { x: X(0.92), y: Y(0.78) }, { x: X(0.1), y: Y(0.78) }, { x: X(0.1), y: Y(0.58) }]);
      current = s.on && !s.out.slice(0, s.n).some(Boolean);
      br = current ? 1 / (s.n * s.n) : 0;
      br = current ? Math.max(0.12, br * 1.8) : 0;
    } else {
      for (let i = 0; i < s.n; i++) bulbs.push({ x: X(0.42 + (0.46 * (i + 0.5)) / s.n), y: Y(0.5), i });
      wire.push([{ x: X(0.1), y: Y(0.42) }, { x: X(0.1), y: Y(0.22) }, { x: X(0.92), y: Y(0.22) }]);
      wire.push([{ x: X(0.92), y: Y(0.22) }, { x: X(0.92), y: Y(0.78) }, { x: X(0.1), y: Y(0.78) }, { x: X(0.1), y: Y(0.58) }]);
      for (const b of bulbs) wire.push([{ x: b.x, y: Y(0.22) }, { x: b.x, y: b.y - R }], [{ x: b.x, y: b.y + R * 1.35 }, { x: b.x, y: Y(0.78) }]);
      current = s.on;
      br = 1;
    }

    // дроти
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 4;
    wire.forEach((path) => {
      ctx.beginPath();
      path.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.stroke();
    });
    // вимикач
    const sx = swPos.x;
    const sy = swPos.y;
    ctx.fillStyle = '#0b1220';
    ctx.fillRect(sx - R * 1.1, sy - 6, R * 2.2, 12);
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.arc(sx - R, sy, 5, 0, Math.PI * 2);
    ctx.arc(sx + R, sy, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = s.on ? '#4ade80' : '#f87171';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(sx - R, sy);
    ctx.lineTo(s.on ? sx + R : sx + R * 0.9, s.on ? sy : sy - R * 0.9);
    ctx.stroke();
    ctx.fillStyle = '#cbd5e1';
    ctx.font = `${Math.max(11, h * 0.035)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(s.on ? 'вимикач: УВІМК.' : 'вимикач: ВИМК.', sx, sy - R * 1.3);
    s.sw = { x: sx, y: sy, r: R * 1.4 };

    // батарея
    const bx = X(0.1);
    const by = Y(0.5);
    ctx.fillStyle = '#0b1220';
    ctx.fillRect(bx - R, by - R * 0.5, R * 2, R);
    ctx.fillStyle = '#facc15';
    ctx.fillRect(bx - R * 0.8, by - R * 0.35, R * 1.6, R * 0.25);
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(bx - R * 0.5, by + R * 0.1, R, R * 0.25);
    ctx.fillStyle = '#fca5a5';
    ctx.font = `bold ${R * 0.8}px system-ui, sans-serif`;
    ctx.fillText('＋', bx + R * 1.5, by - R * 0.2);
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('батарея', bx, by + R * 2.1);

    // лампи
    s.hit = [];
    for (const b of bulbs) {
      const gone = s.out[b.i];
      let bright = 0;
      if (s.mode === 'series') bright = gone ? 0 : br;
      else bright = current && !gone ? 1 : 0;
      drawBulb(ctx, b.x, b.y, R, bright, false, gone);
      s.hit.push({ x: b.x, y: b.y, r: R, i: b.i });
      ctx.fillStyle = '#94a3b8';
      ctx.font = `${Math.max(10, h * 0.03)}px system-ui, sans-serif`;
      ctx.fillText(`лампа ${b.i + 1}`, b.x, b.y + R * 2.1);
    }

    // потік «електронів»
    if (current) {
      ctx.fillStyle = '#38bdf8';
      const flow = (path: Pt[], count: number) => {
        for (let k = 0; k < count; k++) {
          const p = along(path, k / count + s.t * 0.25);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      };
      if (s.mode === 'series') flow(wire[0], 22);
      else {
        flow(wire[0], 6);
        flow(wire[1], 10);
        bulbs.forEach((b, i) => {
          if (s.out[b.i]) return;
          flow([{ x: b.x, y: Y(0.22) }, { x: b.x, y: Y(0.78) }], 6);
          void i;
        });
      }
    }
  };

  const gone = out.slice(0, n).some(Boolean);
  const text =
    mode === 'series'
      ? !on
        ? 'Вимикач розімкнений — струму немає.'
        : gone
          ? 'Одна лампа викручена — коло розірване, гаснуть УСІ лампи!'
          : `Усі лампи на одному ланцюжку: напруга ділиться між ${n}, тому світять слабко.`
      : !on
        ? 'Вимикач розімкнений — струму немає.'
        : gone
          ? 'Викручена лампа згасла, а решта світять яскраво — у кожної своя гілка.'
          : 'Кожна лампа має свою гілку й повну напругу — світять яскраво.';

  const panel = (
    <>
      <div className="flex gap-2">
        <Chip selected={mode === 'series'} onClick={() => setMode('series')}>➡️ Послідовно</Chip>
        <Chip selected={mode === 'parallel'} onClick={() => setMode('parallel')}>🔀 Паралельно</Chip>
      </div>
      <BigSlider label="Кількість ламп" value={n} min={2} max={4} step={1} onChange={setN} />
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        👆 Торкайся <b>вимикача</b> та <b>лампочок</b> (щоб викрутити).
      </div>
      <div className="bg-indigo-900/50 border border-indigo-400/40 rounded-xl p-3 text-white text-lg">{text}</div>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
        💡 У ялинкових гірляндах із однієї несправної лампочки гасне все, якщо вони з&apos;єднані послідовно. У квартирі розетки з&apos;єднані <b>паралельно</b>.
      </div>
    </>
  );

  return <LabLayout scene={<div className="w-full h-full" onPointerDown={onDown}><SimCanvas aspect={16 / 10} draw={draw} /></div>} panel={panel} />;
};
