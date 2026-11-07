import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export interface StickHandle {
  /** Програмно встановити положення по вертикалі (-1..1, вгору = +1) */
  setY: (y: number) => void;
  /** Повернути стік у центр */
  reset: () => void;
  /** Лише показати положення ручки (без onChange), напр. при керуванні з клавіатури. Ігнорується, поки стік тримають пальцем */
  show: (x: number, y: number) => void;
}

interface StickProps {
  /** Діаметр основи, px */
  size?: number;
  /** true - по вертикалі стік не повертається в центр (як газ на пульті) */
  holdY?: boolean;
  /** Викликається при кожній зміні: x, y в діапазоні -1..1 (вгору = +1) */
  onChange: (x: number, y: number) => void;
  label?: string;
  /** Хід ручки як частка діаметра (за замовчуванням 0.28) */
  travel?: number;
  /** Показувати лінію від центру до ручки та підсвічування при відхиленні */
  trail?: boolean;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/** Віртуальний стік пульта: коло, яке перетягується в невеликих межах. Мультитач, відносне перетягування. */
export const Stick = forwardRef<StickHandle, StickProps>(({ size = 170, holdY = false, onChange, label, travel: travelRatio = 0.28, trail = false }, ref) => {
  const travel = size * travelRatio; // хід стіка, px
  const knob = size * 0.44;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const posRef = useRef(pos);
  const drag = useRef<{ id: number; sx: number; sy: number; ox: number; oy: number } | null>(null);

  const apply = (x: number, y: number) => {
    const len = Math.hypot(x, y);
    if (len > 1) {
      x /= len;
      y /= len;
    }
    posRef.current = { x, y };
    setPos({ x, y });
    onChange(x, y);
  };

  useImperativeHandle(ref, () => ({
    setY: (y: number) => apply(posRef.current.x, clamp(y, -1, 1)),
    reset: () => apply(0, 0),
    show: (x: number, y: number) => {
      if (drag.current) return;
      posRef.current = { x, y };
      setPos({ x, y });
    },
  }));

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: posRef.current.x, oy: posRef.current.y };
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    apply(d.ox + (e.clientX - d.sx) / travel, d.oy - (e.clientY - d.sy) / travel);
  };
  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    apply(0, holdY ? posRef.current.y : 0);
  };

  return (
    <div className="flex flex-col items-center gap-1 select-none">
      <div
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onContextMenu={(e) => e.preventDefault()}
        className="relative rounded-full bg-black/35 border-2 border-white/40 backdrop-blur-sm"
        style={{ width: size, height: size, touchAction: 'none' }}
      >
        {/* зона ходу */}
        <div
          className="absolute rounded-full border border-dashed border-white/30"
          style={{ width: travel * 2, height: travel * 2, left: size / 2 - travel, top: size / 2 - travel }}
        />
        <div className="absolute bg-white/20" style={{ left: size / 2 - 0.5, top: size * 0.12, width: 1, height: size * 0.76 }} />
        <div className="absolute bg-white/20" style={{ top: size / 2 - 0.5, left: size * 0.12, height: 1, width: size * 0.76 }} />
        {trail && (
          <svg className="absolute inset-0 pointer-events-none" width={size} height={size}>
            <line x1={size / 2} y1={size / 2} x2={size / 2 + pos.x * travel} y2={size / 2 - pos.y * travel} stroke="rgba(147,197,253,0.8)" strokeWidth={6} strokeLinecap="round" />
            <circle cx={size / 2} cy={size / 2} r={travel * Math.hypot(pos.x, pos.y)} fill="rgba(59,130,246,0.18)" />
          </svg>
        )}
        {/* ручка */}
        <div
          className="absolute rounded-full shadow-xl border-2 border-white/70"
          style={{
            width: knob,
            height: knob,
            left: size / 2 - knob / 2,
            top: size / 2 - knob / 2,
            background: 'radial-gradient(circle at 35% 30%, #93c5fd, #2563eb 70%)',
            transform: `translate(${pos.x * travel}px, ${-pos.y * travel}px)`,
          }}
        />
      </div>
      {label && <div className="text-[11px] font-semibold tracking-wide text-white/70">{label}</div>}
    </div>
  );
});
Stick.displayName = 'Stick';
