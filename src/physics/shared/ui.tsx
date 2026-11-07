// Дрібні спільні елементи інтерфейсу сторінок «Фізики».
import React from 'react';

export const Chip: React.FC<{ selected: boolean; onClick: () => void; children: React.ReactNode }> = ({
  selected,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 md:px-4 md:py-3 rounded-xl font-semibold text-base md:text-lg transition-all active:scale-95 ${
      selected ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-300' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
    }`}
  >
    {children}
  </button>
);

export const ActionButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'warn';
  disabled?: boolean;
}> = ({ onClick, children, variant = 'primary', disabled }) => {
  const colors = {
    primary: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
    secondary: 'bg-gray-600 hover:bg-gray-500',
    warn: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
  }[variant];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-3 md:px-6 md:py-4 rounded-2xl text-lg md:text-xl font-bold text-white shadow-lg active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed ${colors}`}
    >
      {children}
    </button>
  );
};

export const StatBox: React.FC<{ label: string; value: React.ReactNode; hint?: string }> = ({ label, value, hint }) => (
  <div className="bg-slate-800/80 rounded-xl px-4 py-2 text-white">
    <div className="text-xs text-slate-400">{label}</div>
    <div className="text-xl md:text-2xl font-bold">{value}</div>
    {hint && <div className="text-xs text-slate-400">{hint}</div>}
  </div>
);

/** Контейнер сторінки-вкладки: ліворуч сцена (полотно), праворуч панель керування; на вузьких/вертикальних екранах - одна під одною. */
export const LabLayout: React.FC<{ scene: React.ReactNode; panel: React.ReactNode }> = ({ scene, panel }) => (
  <div className="w-full h-full flex flex-col landscape:flex-row gap-3 p-2 md:p-4">
    <div className="flex-1 min-h-0 min-w-0">{scene}</div>
    <div className="landscape:w-[22rem] landscape:max-w-[34%] flex-shrink-0 overflow-y-auto flex flex-col gap-3 max-h-[45%] landscape:max-h-full">
      {panel}
    </div>
  </div>
);

export const fmt = (n: number, digits = 1): string => n.toFixed(digits).replace('.', ',');
