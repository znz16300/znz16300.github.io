// 🖼 Галерея: торкнись портрета - прочитай, що відкрив цей учений.
import React, { useState } from 'react';
import { PEOPLE } from './people';

export const Gallery: React.FC = () => {
  const [sel, setSel] = useState<string | null>(null);
  const p = PEOPLE.find((x) => x.id === sel);

  if (p) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <button onClick={() => setSel(null)} className="mb-4 px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-lg font-semibold active:scale-95">
          ◀ До галереї
        </button>
        <div className="max-w-3xl mx-auto bg-slate-800/80 rounded-2xl p-5 md:p-8 text-white">
          <div className="flex items-center gap-4 mb-3">
            <div className="text-6xl md:text-7xl">{p.emoji}</div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">{p.name}</h2>
              <div className="text-slate-300 text-lg">{p.years} · {p.place}</div>
              <div className="inline-block mt-1 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-100 text-sm">{p.tag}</div>
            </div>
          </div>
          <p className="text-lg md:text-xl mb-4">{p.summary}</p>
          <ul className="space-y-3">
            {p.facts.map((f) => (
              <li key={f} className="flex gap-3 text-base md:text-lg bg-slate-900/50 rounded-xl p-3">
                <span>⭐</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <p className="text-center text-slate-200 text-lg mb-4">Торкнись, щоб дізнатись більше 👇</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
        {PEOPLE.map((x) => (
          <button
            key={x.id}
            onClick={() => setSel(x.id)}
            className="rounded-2xl bg-gradient-to-br from-blue-600/70 to-indigo-700/70 hover:from-blue-500/70 text-white p-4 text-center border border-white/10 active:scale-95 transition"
          >
            <div className="text-5xl md:text-6xl mb-2">{x.emoji}</div>
            <div className="font-bold text-lg leading-tight">{x.name}</div>
            <div className="text-sm text-blue-100/90 mt-1">{x.tag}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
