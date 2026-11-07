// «Осцилограф»: показує 20 мілісекунд звуку - стільки коливань, скільки їх за цей час.
import React, { useRef } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import type { WaveType } from './tone';

export const waveAt = (type: WaveType, phase: number): number => {
  const p = phase - Math.floor(phase);
  switch (type) {
    case 'square': return p < 0.5 ? 1 : -1;
    case 'triangle': return p < 0.5 ? 4 * p - 1 : 3 - 4 * p;
    case 'sawtooth': return 2 * p - 1;
    default: return Math.sin(2 * Math.PI * p);
  }
};

export const WaveScope: React.FC<{ freq: number; volume: number; type: WaveType; hidden?: boolean; label?: string }> = ({ freq, volume, type, hidden, label }) => {
  const props = useRef({ freq, volume, type, hidden, label });
  props.current = { freq, volume, type, hidden, label };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const p = props.current;
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, w, h);
    // сітка
    ctx.strokeStyle = 'rgba(100,116,139,0.25)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo((w * i) / 10, 0);
      ctx.lineTo((w * i) / 10, h);
      ctx.stroke();
    }
    for (let i = 1; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, (h * i) / 6);
      ctx.lineTo(w, (h * i) / 6);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(148,163,184,0.5)';
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    if (p.hidden) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = `bold ${h * 0.09}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('❓ Хвиля прихована', w / 2, h / 2);
      return;
    }
    const win = 0.02; // 20 мс
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const amp = h * 0.38 * p.volume;
    for (let x = 0; x <= w; x += 2) {
      const t = (x / w) * win;
      const y = h / 2 - waveAt(p.type, p.freq * t) * amp;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.fillStyle = '#e2e8f0';
    ctx.textAlign = 'left';
    ctx.font = `bold ${Math.max(14, h * 0.06)}px system-ui, sans-serif`;
    ctx.fillText(`${p.label ? p.label + ' · ' : ''}${Math.round(p.freq)} Гц`, 12, h * 0.1);
    ctx.font = `${Math.max(11, h * 0.045)}px system-ui, sans-serif`;
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`за 20 мс — ${(p.freq * win).toFixed(1).replace('.', ',')} коливань`, 12, h * 0.17);
  };

  return <SimCanvas aspect={16 / 10} draw={draw} />;
};
