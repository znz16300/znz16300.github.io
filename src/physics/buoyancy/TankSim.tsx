// Резервуар із рідиною: кидаємо предмет і дивимось, чи тоне він. Анімація з плавучістю: a = g·(1 − ρр·f/ρ).
import React, { useEffect, useRef } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import type { Liquid, Thing } from './things';

interface Props {
  thing: Thing;
  liquid: Liquid;
  /** змінюється - предмет кидається знову */
  dropKey: number;
  showDensity?: boolean;
  hideThing?: boolean;
}

export const TankSim: React.FC<Props> = ({ thing, liquid, dropKey, showDensity, hideThing }) => {
  const st = useRef({ y: -1, v: 0, started: false });
  const p = useRef({ thing, liquid, showDensity, hideThing });
  p.current = { thing, liquid, showDensity, hideThing };

  useEffect(() => {
    st.current = { y: -1.2, v: 0, started: dropKey > 0 };
  }, [dropKey, thing, liquid]);

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const { thing: th, liquid: lq } = p.current;
    const s = st.current;
    const tankL = w * 0.2;
    const tankR = w * 0.8;
    const surface = h * 0.38;
    const bottom = h * 0.92;
    const size = h * 0.18;

    // фізика: y - центр предмета в пікселях, від 0 до bottom
    if (s.started) {
      if (s.y < -1) s.y = surface - h * 0.3;
      const steps = 8;
      for (let i = 0; i < steps; i++) {
        const d = dt / steps;
        const sub = Math.max(0, Math.min(1, (s.y + size / 2 - surface) / size));
        const g = 900; // px/c² (умовно)
        const a = g - g * (lq.density / th.density) * sub - 3.2 * s.v * (sub > 0 ? 1 : 0.05);
        s.v += a * d;
        s.y += s.v * d;
        if (s.y > bottom - size / 2) {
          s.y = bottom - size / 2;
          s.v = 0;
        }
      }
    } else {
      s.y = surface - h * 0.3;
    }

    ctx.fillStyle = '#e0f2fe';
    ctx.fillRect(0, 0, w, h);
    // рідина
    ctx.fillStyle = lq.color;
    ctx.globalAlpha = 0.85;
    ctx.fillRect(tankL, surface, tankR - tankL, bottom - surface);
    ctx.globalAlpha = 1;
    // хвилька
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = tankL; x <= tankR; x += 6) {
      const y = surface + Math.sin(x * 0.05 + performance.now() / 400) * 2;
      if (x === tankL) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // предмет
    if (!p.current.hideThing || s.started) {
      ctx.font = `${size}px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(th.emoji, w / 2, s.y);
      ctx.textBaseline = 'alphabetic';
    }
    // стінки
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(tankL, surface - h * 0.2);
    ctx.lineTo(tankL, bottom);
    ctx.lineTo(tankR, bottom);
    ctx.lineTo(tankR, surface - h * 0.2);
    ctx.stroke();
    // підписи
    ctx.fillStyle = '#0f172a';
    ctx.font = `bold ${Math.max(12, h * 0.04)}px system-ui, sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillText(`${lq.name}${p.current.showDensity ? ` · ρ = ${lq.density} кг/м³` : ''}`, 12, h * 0.05);
    if (!p.current.hideThing || s.started) ctx.fillText(`${th.name}${p.current.showDensity ? ` · ρ = ${th.density} кг/м³` : ''}`, 12, h * 0.1);
  };

  return <SimCanvas aspect={4 / 3} draw={draw} />;
};
