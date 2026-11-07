// 🔬 Вільна збірка: набери атоми - якщо вони утворюють справжню молекулу, вона з'явиться в колекції.
import React, { useState } from 'react';
import { Counter } from './Counter';
import { MolView } from './MolView';
import { MOLS, emptyCounts, findMol, formula, molCounts, type Counts } from './data';

export const BuildLab: React.FC = () => {
  const [counts, setCounts] = useState<Counts>(emptyCounts());
  const [found, setFound] = useState<string[]>([]);
  const mol = findMol(counts);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const change = (c: Counts) => {
    setCounts(c);
    const m = findMol(c);
    if (m) setFound((f) => (f.includes(m.id) ? f : [...f, m.id]));
  };

  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <Counter counts={counts} onChange={change} />
          <button onClick={() => setCounts(emptyCounts())} className="rounded-xl bg-slate-700 text-white py-3 font-bold active:scale-95">↺ Очистити</button>
          <div className="bg-slate-800/80 rounded-2xl p-3 min-h-[15rem] flex flex-col items-center justify-center text-white text-center">
            {mol ? (
              <>
                <MolView mol={mol} />
                <div className="text-2xl font-bold">{mol.name} · {formula(counts)}</div>
                <div className="text-sm md:text-base text-slate-200">{mol.fact}</div>
              </>
            ) : total === 0 ? (
              <div className="text-slate-300">Набери атоми кнопками «+» 👆 — і я скажу, що вийшло.</div>
            ) : (
              <>
                <div className="text-4xl mb-2">{formula(counts)}</div>
                <div className="text-slate-300">Такої знайомої молекули немає в колекції. Спробуй додати або прибрати атом.</div>
              </>
            )}
          </div>
        </div>
        <div>
          <div className="text-slate-300 mb-2">Колекція: {found.length}/{MOLS.length}</div>
          <div className="grid grid-cols-2 gap-2">
            {MOLS.map((m) => {
              const ok = found.includes(m.id);
              const n = m.atoms.length;
              return (
                <div key={m.id} className={`rounded-xl p-2 text-center text-white ${ok ? 'bg-indigo-700/70' : 'bg-slate-800/70'}`}>
                  {ok ? (
                    <>
                      <div className="text-xl font-bold">{formula(molCounts(m))}</div>
                      <div className="text-sm">{m.name}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl">❓</div>
                      <div className="text-xs text-slate-300">з {n} атомів</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
