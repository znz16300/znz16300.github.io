// 📚 Усі відповіді: список усіх тверджень із поясненнями (режим читання).
import React from 'react';
import { STATEMENTS } from './statements';

export const AllAnswers: React.FC = () => (
  <div className="w-full h-full overflow-auto p-3 md:p-6">
    <div className="grid gap-3 lg:grid-cols-2 max-w-6xl mx-auto">
      {STATEMENTS.map((s, i) => (
        <div key={i} className="bg-slate-800/90 rounded-2xl p-4 text-white flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <span className={`shrink-0 px-3 py-1 rounded-lg font-bold text-sm ${s.truth ? 'bg-green-600' : 'bg-red-600'}`}>{s.truth ? 'ПРАВДА' : 'МІФ'}</span>
            <p className="text-lg md:text-xl font-semibold">{s.text}</p>
          </div>
          <p className="text-base md:text-lg text-slate-300">{s.explain}</p>
        </div>
      ))}
    </div>
  </div>
);
