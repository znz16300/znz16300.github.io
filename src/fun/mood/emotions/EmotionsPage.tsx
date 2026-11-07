// «Мої емоції»: обери емоцію - дізнайся, що вона означає і що допоможе.
import React, { useState } from 'react';
import { EMOTIONS } from './emotions';

const EmotionsPage: React.FC = () => {
  const [i, setI] = useState<number | null>(null);
  const e = i == null ? null : EMOTIONS[i];

  return (
    <div className="w-full h-full overflow-auto p-3 md:p-6 text-white flex flex-col gap-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">{e ? '' : 'Що ти зараз відчуваєш?'}</h2>
      {!e && <p className="text-center text-slate-300 text-lg">Торкнись емоції — дізнайся, що вона означає і що може допомогти. Усі емоції — нормальні!</p>}
      <div className={`grid gap-3 ${e ? 'grid-cols-4 md:grid-cols-8' : 'grid-cols-2 md:grid-cols-4'}`}>
        {EMOTIONS.map((x, idx) => (
          <button
            key={x.name}
            onClick={() => setI(idx)}
            className={`rounded-2xl p-3 md:p-4 flex flex-col items-center gap-1 transition-all active:scale-95 ${
              i === idx ? 'bg-pink-600 ring-2 ring-pink-300' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <span className={e ? 'text-4xl' : 'text-6xl'}>{x.emoji}</span>
            <span className="text-sm md:text-lg font-semibold text-center">{x.name}</span>
          </button>
        ))}
      </div>
      {e && (
        <div className="bg-slate-800/90 rounded-3xl p-4 md:p-6 flex flex-col gap-3">
          <div className="text-3xl md:text-4xl font-extrabold">
            {e.emoji} {e.name}
          </div>
          <p className="text-lg md:text-2xl text-slate-200">{e.what}</p>
          <div className="text-xl md:text-2xl font-bold text-amber-300">Що може допомогти:</div>
          <ul className="flex flex-col gap-2">
            {e.tips.map((t) => (
              <li key={t} className="bg-slate-700/80 rounded-xl px-4 py-3 text-lg md:text-xl">
                ✨ {t}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmotionsPage;
