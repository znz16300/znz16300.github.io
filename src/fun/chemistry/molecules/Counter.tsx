import React from 'react';
import { ATOMS, ORDER, type AtomEl, type Counts } from './data';

/** Лічильники атомів: торкайся +/−, щоб набрати потрібні атоми. */
export const Counter: React.FC<{ counts: Counts; onChange: (c: Counts) => void; max?: number }> = ({ counts, onChange, max = 6 }) => {
  const set = (e: AtomEl, d: number) => onChange({ ...counts, [e]: Math.max(0, Math.min(max, counts[e] + d)) });
  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      {ORDER.map((e) => (
        <div key={e} className="bg-slate-800/80 rounded-xl p-2 flex flex-col items-center gap-1 text-white">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl font-bold border-2 border-slate-900/50" style={{ background: ATOMS[e].color, color: ATOMS[e].text }}>{e}</div>
          <div className="text-xs text-slate-300">{ATOMS[e].name}</div>
          <div className="text-3xl font-bold tabular-nums">{counts[e]}</div>
          <div className="flex gap-1">
            <button onClick={() => set(e, -1)} aria-label={`менше ${ATOMS[e].name}`} className="w-10 h-10 rounded-lg bg-slate-600 text-2xl font-bold active:scale-90">−</button>
            <button onClick={() => set(e, 1)} aria-label={`більше ${ATOMS[e].name}`} className="w-10 h-10 rounded-lg bg-indigo-500 text-2xl font-bold active:scale-90">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
