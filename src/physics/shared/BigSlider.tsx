// Великий повзунок для сенсорного екрана.
import React from 'react';

export const BigSlider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  format?: (v: number) => string;
  onChange: (v: number) => void;
  disabled?: boolean;
}> = ({ label, value, min, max, step = 1, unit = '', format, onChange, disabled }) => (
  <div className="bg-slate-800/80 rounded-xl px-4 py-3 text-white">
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-sm text-slate-300">{label}</span>
      <span className="text-xl md:text-2xl font-bold tabular-nums">
        {format ? format(value) : value}
        {unit && <span className="text-base text-slate-300 ml-1">{unit}</span>}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      aria-label={label}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full mt-2 h-10 accent-indigo-400 cursor-pointer disabled:opacity-40"
    />
  </div>
);
