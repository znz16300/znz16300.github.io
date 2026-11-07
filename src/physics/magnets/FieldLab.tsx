// 🔬 Залізні ошурки навколо магніта + компас, який можна переставляти пальцем.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { ActionButton, Chip, LabLayout } from '../shared/ui';

/** Напрям поля диполя (m - одиничний момент) у точці (x,y) відносно центра. */
export function dipole(x: number, y: number, mx: number, my: number): { bx: number; by: number; mag: number } {
  const r2 = x * x + y * y + 1e-6;
  const r = Math.sqrt(r2);
  const dot = (mx * x + my * y) / r;
  const rx = x / r, ry = y / r;
  const k = 1 / (r2 * r);
  const bx = k * (3 * dot * rx - mx);
  const by = k * (3 * dot * ry - my);
  return { bx, by, mag: Math.hypot(bx, by) };
}

export const FieldLab: React.FC = () => {
  const [angle, setAngle] = useState(0); // градуси
  const [filings, setFilings] = useState(true);
  const st = useRef({ angle, filings, cx: 0.78, cy: 0.3, needle: 0 });
  st.current.angle = angle;
  st.current.filings = filings;

  const place = (e: React.PointerEvent) => {
    const p = canvasPoint(e);
    if (!p) return;
    st.current.cx = p.x / p.w;
    st.current.cy = p.y / p.h;
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = st.current;
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, w, h);
    const ox = w / 2, oy = h / 2;
    const u = Math.min(w, h) / 2; // одиниця = пів висоти
    const rad = (s.angle * Math.PI) / 180;
    const mx = Math.cos(rad), my = -Math.sin(rad); // екранні координати: y вниз
    const L = u * 0.32, T = u * 0.11;

    if (s.filings) {
      const nx = 36, ny = Math.round(36 * (h / w));
      ctx.lineWidth = 1.6;
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const px = ((i + 0.5) / nx) * w, py = ((j + 0.5) / ny) * h;
          const dx = (px - ox) / u, dy = (py - oy) / u;
          const b = dipole(dx, dy, mx, my);
          if (Math.abs(dx * mx + dy * my) < 0.33 && Math.abs(-dx * my + dy * mx) < 0.12) continue;
          const a = Math.atan2(b.by, b.bx);
          const strength = Math.min(1, Math.sqrt(b.mag) * 0.9);
          const len = 6 + strength * 8;
          ctx.strokeStyle = `rgba(51,65,85,${0.18 + strength * 0.7})`;
          ctx.beginPath();
          ctx.moveTo(px - Math.cos(a) * len / 2, py - Math.sin(a) * len / 2);
          ctx.lineTo(px + Math.cos(a) * len / 2, py + Math.sin(a) * len / 2);
          ctx.stroke();
        }
      }
    }

    // магніт
    ctx.save();
    ctx.translate(ox, oy);
    ctx.rotate(Math.atan2(my, mx));
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(0, -T, L, 2 * T);
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(-L, -T, L, 2 * T);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.strokeRect(-L, -T, 2 * L, 2 * T);
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${T * 1.4}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.save(); ctx.translate(L / 2, 0); ctx.rotate(-Math.atan2(my, mx)); ctx.fillText('N', 0, 0); ctx.restore();
    ctx.save(); ctx.translate(-L / 2, 0); ctx.rotate(-Math.atan2(my, mx)); ctx.fillText('S', 0, 0); ctx.restore();
    ctx.restore();

    // компас
    const cxp = s.cx * w, cyp = s.cy * h;
    const b = dipole((cxp - ox) / u, (cyp - oy) / u, mx, my);
    const target = Math.atan2(b.by, b.bx);
    let d = target - s.needle;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    s.needle += d * Math.min(1, dt * 8);
    const R = u * 0.14;
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(cxp, cyp, R, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.save();
    ctx.translate(cxp, cyp);
    ctx.rotate(s.needle);
    ctx.fillStyle = '#dc2626';
    ctx.beginPath(); ctx.moveTo(R * 0.85, 0); ctx.lineTo(0, -R * 0.2); ctx.lineTo(0, R * 0.2); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#2563eb';
    ctx.beginPath(); ctx.moveTo(-R * 0.85, 0); ctx.lineTo(0, -R * 0.2); ctx.lineTo(0, R * 0.2); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#334155';
    ctx.font = `${Math.max(11, u * 0.08)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('👆 Торкнись — компас перейде сюди', w / 2, h - 8);
  };

  const panel = (
    <>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white">
        <div className="mb-2 text-slate-300 text-sm">Поверни магніт</div>
        <div className="flex gap-2 flex-wrap">
          <Chip selected={angle === 0} onClick={() => setAngle(0)}>→ 0°</Chip>
          <Chip selected={angle === 90} onClick={() => setAngle(90)}>↑ 90°</Chip>
          <Chip selected={angle === 180} onClick={() => setAngle(180)}>← 180°</Chip>
          <Chip selected={angle === 270} onClick={() => setAngle(270)}>↓ 270°</Chip>
        </div>
      </div>
      <ActionButton onClick={() => setAngle((a) => (a + 45) % 360)} variant="secondary">↻ Повернути на 45°</ActionButton>
      <ActionButton onClick={() => setFilings(!filings)} variant="secondary">{filings ? '🙈 Сховати ошурки' : '🧲 Показати ошурки'}</ActionButton>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        Ошурки показують <b>магнітне поле</b>: лінії виходять з північного полюса (червоний) і входять у південний (синій). Червона стрілка компаса завжди дивиться вздовж поля.
      </div>
    </>
  );
  const scene = (
    <div className="w-full h-full" style={{ touchAction: 'none' }} onPointerDown={place} onPointerMove={(e) => e.buttons && place(e)}>
      <SimCanvas aspect={16 / 10} draw={draw} />
    </div>
  );
  return <LabLayout scene={scene} panel={panel} />;
};
