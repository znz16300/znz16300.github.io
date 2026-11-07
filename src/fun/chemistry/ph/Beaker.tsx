import React from 'react';
import { colorAt } from './data';

/** Склянка з відваром капусти й шкала pH з маркером. */
export const Beaker: React.FC<{ ph: number | null; label?: string; level?: number }> = ({ ph, label, level = 0.62 }) => {
  const color = ph == null ? 'rgb(139,92,246)' : colorAt(ph);
  const top = 150 - 110 * level;
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <svg viewBox="0 0 120 160" className="w-40 md:w-52 drop-shadow-lg">
        <defs>
          <clipPath id="glass"><path d="M20 20 L28 140 Q30 150 40 150 L80 150 Q90 150 92 140 L100 20 Z" /></clipPath>
        </defs>
        <g clipPath="url(#glass)">
          <rect x="0" y={top} width="120" height={160 - top} style={{ fill: color, transition: 'fill 0.9s ease, y 0.5s ease' }} />
          <rect x="24" y={top} width="8" height={150 - top} fill="rgba(255,255,255,0.25)" />
        </g>
        <path d="M20 20 L28 140 Q30 150 40 150 L80 150 Q90 150 92 140 L100 20" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
        <line x1="16" y1="20" x2="104" y2="20" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {label && <div className="text-white text-lg font-bold text-center">{label}</div>}
      <PhScale ph={ph} />
    </div>
  );
};

export const PhScale: React.FC<{ ph: number | null }> = ({ ph }) => (
  <div className="w-full max-w-md px-2">
    <div className="relative h-6 rounded-full" style={{ background: `linear-gradient(90deg, ${Array.from({ length: 15 }, (_, i) => colorAt(i)).join(',')})` }}>
      {ph != null && (
        <div className="absolute -top-2 -translate-x-1/2 transition-all duration-700 text-white" style={{ left: `${(ph / 14) * 100}%` }}>
          <div className="w-1 h-10 bg-white mx-auto rounded" />
        </div>
      )}
    </div>
    <div className="flex justify-between text-slate-300 text-xs mt-1 px-1">
      <span>0 кислота</span><span>7 нейтрально</span><span>14 луг</span>
    </div>
  </div>
);
