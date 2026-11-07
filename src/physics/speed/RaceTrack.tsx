// Дві траси: кожна машина проїжджає свою відстань зі своєю швидкістю. Час стиснутий: усе вкладається у ~8 с.
import React, { useRef } from 'react';
import { SimCanvas } from '../shared/SimCanvas';

export interface Car {
  emoji: string;
  label: string;
  v: number; // км/год
  s: number; // км
  color: string;
}

interface Props {
  cars: [Car, Car];
  /** лічильник запусків: змінюється - гонка стартує з нуля; 0 - стоїмо на старті */
  runId: number;
  onFinish?: (t: [number | null, number | null]) => void;
}

export const hoursOf = (c: Car) => c.s / c.v;
export const fmtTime = (h: number) => {
  const m = Math.round(h * 60);
  const hh = Math.floor(m / 60), mm = m % 60;
  return hh ? `${hh} год ${mm} хв` : `${mm} хв`;
};

export const RaceTrack: React.FC<Props> = ({ cars, runId, onFinish }) => {
  const st = useRef({ run: -1, t: 0, fin: [null, null] as [number | null, number | null], notified: false });
  const carsRef = useRef(cars);
  carsRef.current = cars;
  const cb = useRef(onFinish);
  cb.current = onFinish;

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    const cs = carsRef.current;
    if (s.run !== runId) {
      s.run = runId; s.t = 0; s.fin = [null, null]; s.notified = false;
    }
    const maxT = Math.max(hoursOf(cs[0]), hoursOf(cs[1]));
    const scale = maxT / 8; // годин реального часу гонки за секунду показу
    if (runId > 0 && !s.notified) {
      s.t += dt * scale;
      cs.forEach((c, i) => { if (s.fin[i] == null && s.t >= hoursOf(c)) s.fin[i] = hoursOf(c); });
      if (s.fin[0] != null && s.fin[1] != null) {
        s.notified = true;
        cb.current?.(s.fin);
      }
    }
    ctx.fillStyle = '#bfdbfe';
    ctx.fillRect(0, 0, w, h * 0.3);
    ctx.fillStyle = '#86efac';
    ctx.fillRect(0, h * 0.3, w, h * 0.7);

    const left = w * 0.06, right = w * 0.94;
    const maxS = Math.max(cs[0].s, cs[1].s);
    cs.forEach((c, i) => {
      const y = h * (i === 0 ? 0.42 : 0.74);
      const roadH = h * 0.2;
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, y - roadH / 2, w, roadH);
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 2;
      ctx.setLineDash([14, 12]);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      ctx.setLineDash([]);
      const len = (right - left) * (c.s / maxS);
      // фініш
      const fx = left + len;
      ctx.fillStyle = '#fff';
      for (let k = 0; k < 6; k++) {
        ctx.fillStyle = k % 2 ? '#0f172a' : '#fff';
        ctx.fillRect(fx - 4, y - roadH / 2 + (k * roadH) / 6, 8, roadH / 6);
      }
      const done = s.fin[i] != null;
      const dist = done ? c.s : Math.min(c.s, c.v * s.t);
      const x = left + (right - left) * (dist / maxS);
      ctx.font = `${Math.max(24, h * 0.14)}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(c.emoji, x, y);
      ctx.font = `bold ${Math.max(12, h * 0.05)}px system-ui, sans-serif`;
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'left';
      ctx.fillText(`${c.label}: ${c.v} км/год, ${c.s} км`, 8, y - roadH / 2 - 6 + (i === 0 ? 0 : 0));
      if (done) {
        ctx.textAlign = 'right';
        ctx.fillStyle = '#14532d';
        ctx.fillText(`🏁 ${fmtTime(hoursOf(c))}`, w - 8, y - roadH / 2 - 6);
      }
    });
    // годинник
    if (runId > 0) {
      ctx.fillStyle = 'rgba(15,23,42,0.75)';
      ctx.font = `bold ${Math.max(14, h * 0.055)}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(`⏱ ${fmtTime(Math.min(s.t, maxT))}`, w / 2, h * 0.08);
    }
  };

  return <SimCanvas aspect={16 / 10} draw={draw} />;
};
