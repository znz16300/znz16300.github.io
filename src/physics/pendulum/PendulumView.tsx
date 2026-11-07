// Полотно з маятником: інтегруємо θ'' = -(g/L)·sinθ, вимірюємо період за проходженнями через нуль.
import React, { useEffect, useRef } from 'react';
import { SimCanvas } from '../shared/SimCanvas';

export const G = 9.81;
export const periodOf = (L: number) => 2 * Math.PI * Math.sqrt(L / G);

interface Props {
  length: number; // м
  mass: number; // кг (лише розмір кульки: на період не впливає!)
  amplitude: number; // градуси
  resetKey: number;
  showPeriod?: boolean;
}

export const PendulumView: React.FC<Props> = ({ length, mass, amplitude, resetKey, showPeriod = true }) => {
  const st = useRef({ th: 0, om: 0, t: 0, lastUp: -1, measured: 0, trail: [] as number[] });
  const props = useRef({ length, mass, amplitude });
  props.current = { length, mass, amplitude };

  useEffect(() => {
    const s = st.current;
    s.th = (amplitude * Math.PI) / 180;
    s.om = 0;
    s.t = 0;
    s.lastUp = -1;
    s.measured = 0;
    s.trail = [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, length, amplitude]);

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    const { length: L, mass: m } = props.current;
    const steps = 20;
    for (let i = 0; i < steps; i++) {
      const d = dt / steps;
      const prev = s.th;
      s.om += -(G / L) * Math.sin(s.th) * d;
      s.th += s.om * d;
      s.t += d;
      if (prev < 0 && s.th >= 0) {
        if (s.lastUp >= 0) s.measured = s.t - s.lastUp;
        s.lastUp = s.t;
      }
    }

    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#1e293b');
    bg.addColorStop(1, '#0f172a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    const px = w / 2;
    const py = h * 0.08;
    const pxPerM = (h * 0.8) / 4; // 4 м - на всю висоту
    const len = L * pxPerM;
    const bx = px + Math.sin(s.th) * len;
    const by = py + Math.cos(s.th) * len;

    // стеля
    ctx.fillStyle = '#475569';
    ctx.fillRect(px - w * 0.2, py - h * 0.04, w * 0.4, h * 0.04);
    // лінія рівноваги й слід
    ctx.strokeStyle = 'rgba(148,163,184,0.4)';
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, py + len + 20);
    ctx.stroke();
    ctx.setLineDash([]);
    // дуга руху
    ctx.strokeStyle = 'rgba(96,165,250,0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const A = (props.current.amplitude * Math.PI) / 180;
    ctx.arc(px, py, len, Math.PI / 2 - A, Math.PI / 2 + A);
    ctx.stroke();
    // нитка
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(bx, by);
    ctx.stroke();
    // кулька
    const r = Math.max(10, h * (0.03 + m * 0.012));
    const grad = ctx.createRadialGradient(bx - r * 0.3, by - r * 0.3, r * 0.1, bx, by, r);
    grad.addColorStop(0, '#fde68a');
    grad.addColorStop(1, '#d97706');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(bx, by, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.font = `bold ${Math.max(11, r * 0.7)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${m} кг`, bx, by);
    ctx.textBaseline = 'alphabetic';

    // лінійка довжини
    ctx.fillStyle = '#93c5fd';
    ctx.textAlign = 'left';
    ctx.font = `${Math.max(12, h * 0.04)}px system-ui, sans-serif`;
    ctx.fillText(`L = ${L.toFixed(2).replace('.', ',')} м`, 12, h * 0.1);
    if (showPeriod) {
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(14, h * 0.05)}px system-ui, sans-serif`;
      ctx.fillText(`T виміряний: ${s.measured ? s.measured.toFixed(2).replace('.', ',') + ' с' : '…'}`, 12, h * 0.17);
    }
  };

  return <SimCanvas aspect={4 / 3} draw={draw} />;
};
