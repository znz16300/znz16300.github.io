// 🏠 Каталог речовин навколо нас: торкнись картки - дізнайся формулу й де це зустрічається.
import React, { useState } from 'react';
import { THINGS } from './data';

export const Catalog: React.FC = () => {
  const [sel, setSel] = useState(THINGS[0]);
  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="md:w-3/5 grid grid-cols-3 sm:grid-cols-4 gap-2">
          {THINGS.map((t) => (
            <button key={t.id} onClick={() => setSel(t)} className={`rounded-xl p-2 text-center text-white active:scale-95 ${sel.id === t.id ? 'bg-indigo-600 ring-2 ring-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
              <div className="text-3xl">{t.emoji}</div>
              <div className="text-[11px] md:text-sm leading-tight">{t.name}</div>
            </button>
          ))}
        </div>
        <div className="md:w-2/5 bg-slate-800/90 rounded-2xl p-5 text-white self-start">
          <div className="text-6xl">{sel.emoji}</div>
          <div className="text-2xl font-bold mt-1">{sel.name}</div>
          <div className="text-4xl font-bold text-amber-300 my-2">{sel.formula}</div>
          <div className="text-slate-200"><b>Де зустрічається:</b> {sel.where}</div>
          <p className="mt-3 text-indigo-100">💡 {sel.fact}</p>
        </div>
      </div>
    </div>
  );
};
