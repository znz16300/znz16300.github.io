import React from 'react';

/** Напівпрозорий екран поверх гри (старт, пауза, кінець гри). Батьківський елемент має бути position: relative. */
export const GameOverlay: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="absolute inset-0 z-30 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-slate-800/95 border border-white/10 rounded-3xl shadow-2xl px-8 py-6 max-w-xl w-full max-h-full overflow-auto text-center text-white flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {children}
    </div>
  </div>
);

export const GameButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}> = ({ onClick, children, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`px-6 py-4 rounded-2xl text-xl font-bold shadow-lg active:scale-95 transition-all ${
      variant === 'primary'
        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
        : 'bg-gray-600 hover:bg-gray-500 text-white'
    }`}
  >
    {children}
  </button>
);

export const GameChip: React.FC<{ selected: boolean; onClick: () => void; children: React.ReactNode }> = ({
  selected,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className={`px-5 py-3 rounded-xl font-semibold text-lg transition-all active:scale-95 ${
      selected ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-300' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
    }`}
  >
    {children}
  </button>
);
