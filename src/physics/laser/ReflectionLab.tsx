// 🔬 Відбивання: кут падіння дорівнює куту відбивання.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { LabLayout } from '../shared/ui';

export const ReflectionLab: React.FC = () => {
  const [angle, setAngle] = useState(40);
  const a = useRef(angle);
  a.current = angle;

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const ang = (a.current * Math.PI) / 180;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);
    const mx = w / 2;
    const my = h * 0.72;
    const L = Math.min(w, h) * 0.55;
    // дзеркало
    const g = ctx.createLinearGradient(0, my, 0, my + 16);
    g.addColorStop(0, '#e0f2fe');
    g.addColorStop(1, '#64748b');
    ctx.fillStyle = g;
    ctx.fillRect(w * 0.1, my, w * 0.8, 14);
    // нормаль
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx, my - L * 1.05);
    ctx.stroke();
    ctx.setLineDash([]);
    // падаючий і відбитий промені
    const ix = mx - Math.sin(ang) * L;
    const iy = my - Math.cos(ang) * L;
    const rx = mx + Math.sin(ang) * L;
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(ix, iy);
    ctx.lineTo(mx, my);
    ctx.stroke();
    ctx.strokeStyle = '#34d399';
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(rx, iy);
    ctx.stroke();
    // дуги кутів
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(mx, my, L * 0.3, -Math.PI / 2 - ang, -Math.PI / 2);
    ctx.stroke();
    ctx.strokeStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(mx, my, L * 0.4, -Math.PI / 2, -Math.PI / 2 + ang);
    ctx.stroke();
    ctx.font = `bold ${Math.max(14, h * 0.05)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`${a.current}°`, mx - Math.sin(ang / 2) * L * 0.48, my - Math.cos(ang / 2) * L * 0.48);
    ctx.fillStyle = '#34d399';
    ctx.fillText(`${a.current}°`, mx + Math.sin(ang / 2) * L * 0.55, my - Math.cos(ang / 2) * L * 0.55);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = `${Math.max(12, h * 0.04)}px system-ui, sans-serif`;
    ctx.fillText('падаючий промінь', Math.max(w * 0.15, ix), Math.max(h * 0.08, iy - 12));
    ctx.fillText('відбитий промінь', Math.min(w * 0.85, rx), Math.max(h * 0.08, iy - 12));
    ctx.fillText('нормаль', mx + 40, my - L * 1.05);
  };

  return (
    <LabLayout
      scene={<SimCanvas aspect={16 / 10} draw={draw} />}
      panel={
        <>
          <BigSlider label="Кут падіння (від нормалі)" value={angle} min={5} max={80} step={1} unit="°" onChange={setAngle} />
          <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
            <div className="font-bold mb-1">Закон відбивання</div>
            <div>Кут падіння = кут відбивання</div>
            <div className="text-indigo-200 mt-1">{angle}° = {angle}°</div>
          </div>
          <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100">
            💡 Кути рахують <b>від нормалі</b> — перпендикуляра до дзеркала, а не від самої поверхні.
          </div>
        </>
      }
    />
  );
};
