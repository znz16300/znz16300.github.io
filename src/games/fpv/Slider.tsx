import React from 'react';

/** Повзунок для сенсорних екранів (власний, на pointer events) з кнопками − / +. */
export const Slider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}> = ({ label, value, min, max, step, onChange, format }) => {
  const set = (v: number) => onChange(Math.round(Math.min(max, Math.max(min, v)) / step) * step);
  const pos = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    set(min + ((e.clientX - r.left) / r.width) * (max - min));
  };
  const pct = ((value - min) / (max - min)) * 100;
  const btn = 'w-9 h-9 rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-bold text-xl active:scale-95';
  return (
    <div className="flex items-center gap-2 text-left">
      <div className="w-40 text-sm font-semibold text-slate-200 shrink-0">{label}</div>
      <button className={btn} onClick={() => set(value - step)} aria-label="менше">−</button>
      <div
        className="relative flex-1 h-9 flex items-center cursor-pointer"
        style={{ touchAction: 'none' }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          pos(e);
        }}
        onPointerMove={(e) => {
          if (e.buttons) pos(e);
        }}
      >
        <div className="w-full h-2 rounded-full bg-slate-600" />
        <div className="absolute left-0 h-2 rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
        <div className="absolute w-6 h-6 rounded-full bg-white shadow-lg border-2 border-blue-500" style={{ left: `calc(${pct}% - 12px)` }} />
      </div>
      <button className={btn} onClick={() => set(value + step)} aria-label="більше">+</button>
      <div className="w-14 text-right text-sm font-mono text-white">{format ? format(value) : value.toFixed(2)}</div>
    </div>
  );
};
