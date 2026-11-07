// Полотно гойдалки: балка на опорі, вантажі на слотах, плавний нахил за моментами сил.
import React, { useRef } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { SLOTS, torque, type Load } from './calc';

interface Props {
  load: Load;
  /** які слоти можна змінювати ('both', 'R' - лише праві) */
  editable: 'both' | 'R';
  onTap: (slot: number) => void;
}

const COLORS: Record<number, string> = { 1: '#38bdf8', 2: '#4ade80', 5: '#f97316' };

export const LeverSim: React.FC<Props> = ({ load, editable, onTap }) => {
  const st = useRef({ ang: 0, load, editable });
  st.current.load = load;
  st.current.editable = editable;

  const onDown = (e: React.PointerEvent) => {
    const p = canvasPoint(e);
    if (!p) return;
    const unit = (p.w * 0.8) / 12; // 12 одиниць від краю до краю
    const slot = Math.round((p.x - p.w / 2) / unit);
    if (slot === 0 || Math.abs(slot) > 5) return;
    if (editable === 'R' && slot < 0) return;
    onTap(slot);
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    const net = torque(s.load, 'R') - torque(s.load, 'L');
    const target = Math.max(-14, Math.min(14, net * 1.4));
    s.ang += (target - s.ang) * Math.min(1, dt * 4);
    const rad = (s.ang * Math.PI) / 180;

    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#e0f2fe');
    bg.addColorStop(1, '#bae6fd');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#65a30d';
    ctx.fillRect(0, h * 0.9, w, h * 0.1);

    const unit = (w * 0.8) / 12;
    const px = w / 2;
    const py = h * 0.62;

    // опора
    ctx.fillStyle = '#92400e';
    ctx.beginPath();
    ctx.moveTo(px - unit * 0.9, h * 0.9);
    ctx.lineTo(px, py);
    ctx.lineTo(px + unit * 0.9, h * 0.9);
    ctx.closePath();
    ctx.fill();

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(rad);
    // балка
    ctx.fillStyle = '#b45309';
    ctx.fillRect(-unit * 6, -h * 0.025, unit * 12, h * 0.05);
    ctx.fillStyle = '#fde68a';
    SLOTS.forEach((sl) => {
      ctx.fillRect(sl * unit - 2, -h * 0.025, 4, h * 0.05);
    });
    ctx.fillStyle = '#334155';
    ctx.font = `bold ${Math.max(11, h * 0.04)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    SLOTS.forEach((sl) => ctx.fillText(String(Math.abs(sl)), sl * unit, h * 0.075));
    // вантажі
    const bw = unit * 0.72;
    const bh = Math.max(unit * 0.5, h * 0.07);
    s.load.forEach((ms, slot) => {
      ms.forEach((m, k) => {
        const y = -h * 0.025 - (k + 1) * bh;
        ctx.fillStyle = COLORS[m] ?? '#a78bfa';
        ctx.fillRect(slot * unit - bw / 2, y, bw, bh - 2);
        ctx.strokeStyle = 'rgba(15,23,42,0.5)';
        ctx.lineWidth = 2;
        ctx.strokeRect(slot * unit - bw / 2, y, bw, bh - 2);
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${Math.max(11, bh * 0.45)}px system-ui, sans-serif`;
        ctx.fillText(`${m}`, slot * unit, y + bh * 0.62);
      });
    });
    ctx.restore();
    // вісь
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(px, py, h * 0.022, 0, Math.PI * 2);
    ctx.fill();

    // заблокований бік
    if (s.editable === 'R') {
      ctx.fillStyle = 'rgba(15,23,42,0.5)';
      ctx.font = `${Math.max(11, h * 0.04)}px system-ui, sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText('🔒 це завдання', 10, h * 0.1);
      ctx.textAlign = 'right';
      ctx.fillText('став гирі сюди 👆', w - 10, h * 0.1);
    }
    // стан
    const balanced = net === 0 && torque(s.load, 'L') > 0;
    if (balanced) {
      ctx.fillStyle = 'rgba(22,163,74,0.95)';
      ctx.font = `bold ${h * 0.09}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('⚖️ Рівновага!', w / 2, h * 0.2);
    }
  };

  return (
    <div className="w-full h-full" onPointerDown={onDown}>
      <SimCanvas aspect={16 / 10} draw={draw} />
    </div>
  );
};
