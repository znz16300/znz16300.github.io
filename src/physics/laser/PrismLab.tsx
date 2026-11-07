// 🌈 Призма: біле світло розкладається на кольори, бо червоне й фіолетове заломлюються по-різному.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { LabLayout } from '../shared/ui';

// Показники заломлення (дещо перебільшені для наочності)
const COLORS = [
  { c: '#ef4444', n: 1.5 },
  { c: '#f97316', n: 1.512 },
  { c: '#facc15', n: 1.524 },
  { c: '#22c55e', n: 1.536 },
  { c: '#38bdf8', n: 1.548 },
  { c: '#6366f1', n: 1.56 },
  { c: '#a855f7', n: 1.572 },
];

type V = { x: number; y: number };
const dot = (a: V, b: V) => a.x * b.x + a.y * b.y;
const norm = (a: V): V => {
  const l = Math.hypot(a.x, a.y);
  return { x: a.x / l, y: a.y / l };
};

/** Заломлення: d - напрямок променя, N - нормаль, спрямована проти променя (в бік, звідки він іде). null - повне внутрішнє відбиття */
const refract = (d: V, N: V, eta: number): V | null => {
  const cosi = -dot(N, d);
  const k = 1 - eta * eta * (1 - cosi * cosi);
  if (k < 0) return null;
  const t = eta * cosi - Math.sqrt(k);
  return { x: eta * d.x + t * N.x, y: eta * d.y + t * N.y };
};

export const PrismLab: React.FC = () => {
  const [angle, setAngle] = useState(50);
  const a = useRef(angle);
  a.current = angle;

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, w, h);
    const side = h * 0.62;
    const cx = w * 0.45;
    const cy = h * 0.55;
    const A: V = { x: cx, y: cy - (side * Math.sqrt(3)) / 3 };
    const B: V = { x: cx - side / 2, y: cy + (side * Math.sqrt(3)) / 6 };
    const C: V = { x: cx + side / 2, y: cy + (side * Math.sqrt(3)) / 6 };
    // призма
    ctx.fillStyle = 'rgba(125,211,252,0.18)';
    ctx.strokeStyle = 'rgba(186,230,253,0.9)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // точка падіння - середина лівої грані AB
    const P: V = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    // зовнішня нормаль лівої грані (вліво-вгору)
    const nOut = norm({ x: -(B.y - A.y), y: B.x - A.x });
    const outL = nOut.x < 0 ? nOut : { x: -nOut.x, y: -nOut.y };
    // промінь іде до P під кутом a від нормалі: напрямок = -outL повернутий на кут
    const ang = (a.current * Math.PI) / 180;
    const base = { x: -outL.x, y: -outL.y }; // у бік призми
    // повертаємо base на -ang (щоб промінь приходив знизу-зліва для додатних кутів)
    const d0: V = { x: base.x * Math.cos(-ang) - base.y * Math.sin(-ang), y: base.x * Math.sin(-ang) + base.y * Math.cos(-ang) };
    const start: V = { x: P.x - d0.x * w, y: P.y - d0.y * w };
    // біле світло
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(P.x, P.y);
    ctx.stroke();

    // права грань AC: точка й нормаль
    const nR = norm({ x: C.y - A.y, y: -(C.x - A.x) });
    const outR = nR.x > 0 ? nR : { x: -nR.x, y: -nR.y };
    const lineHit = (o: V, d: V): V | null => {
      // перетин променя з відрізками AC і BC (внутрішні грані)
      let best: { t: number; p: V } | null = null;
      for (const [p1, p2] of [[A, C], [B, C]] as [V, V][]) {
        const e = { x: p2.x - p1.x, y: p2.y - p1.y };
        const den = d.x * e.y - d.y * e.x;
        if (Math.abs(den) < 1e-9) continue;
        const t = ((p1.x - o.x) * e.y - (p1.y - o.y) * e.x) / den;
        const u = ((p1.x - o.x) * d.y - (p1.y - o.y) * d.x) / den;
        if (t > 1e-6 && u >= 0 && u <= 1 && (!best || t < best.t)) best = { t, p: { x: o.x + d.x * t, y: o.y + d.y * t } };
      }
      return best ? best.p : null;
    };

    ctx.lineWidth = 3;
    ctx.globalCompositeOperation = 'lighter';
    for (const col of COLORS) {
      const d1 = refract(d0, outL, 1 / col.n);
      if (!d1) continue;
      const Q = lineHit(P, d1);
      if (!Q) continue;
      const outN: V = Math.abs(Q.y - B.y) < 2 ? { x: 0, y: 1 } : outR;
      const d2 = refract(d1, { x: -outN.x, y: -outN.y }, col.n);
      ctx.strokeStyle = col.c;
      ctx.beginPath();
      ctx.moveTo(P.x, P.y);
      ctx.lineTo(Q.x, Q.y);
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
      if (d2) {
        ctx.beginPath();
        ctx.moveTo(Q.x, Q.y);
        ctx.lineTo(Q.x + d2.x * w, Q.y + d2.y * w);
        ctx.stroke();
      }
    }
    ctx.globalCompositeOperation = 'source-over';
  };

  return (
    <LabLayout
      scene={<SimCanvas aspect={16 / 10} draw={draw} />}
      panel={
        <>
          <BigSlider label="Кут падіння білого променя" value={angle} min={20} max={70} step={1} unit="°" onChange={setAngle} />
          <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
            <div className="font-bold mb-1">Розкладання світла</div>
            <div>Біле світло — суміш усіх кольорів. У склі <span className="text-red-400">червоний</span> заломлюється найменше, а <span className="text-purple-400">фіолетовий</span> — найбільше.</div>
          </div>
          <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100">
            💡 Веселка в небі — теж розкладання світла, тільки замість призми працюють <b>краплі дощу</b>.
          </div>
        </>
      }
    />
  );
};
