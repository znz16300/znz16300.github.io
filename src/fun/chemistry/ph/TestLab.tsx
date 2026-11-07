// 🔬 Тест домашніх рідин індикатором із червонокачанної капусти.
import React, { useState } from 'react';
import { Beaker } from './Beaker';
import { SUBS, kind, kindName, type Sub } from './data';

export const TestLab: React.FC = () => {
  const [sel, setSel] = useState<Sub | null>(null);
  const [tested, setTested] = useState<string[]>([]);
  const pick = (s: Sub) => { setSel(s); setTested((t) => (t.includes(s.id) ? t : [...t, s.id])); };
  const k = sel ? kind(sel.ph) : null;

  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
        <div className="md:w-1/2 flex flex-col items-center">
          <Beaker ph={sel ? sel.ph : null} label={sel ? `${sel.emoji} ${sel.name}` : 'Відвар червонокачанної капусти'} />
          {sel && (
            <div className={`mt-3 w-full max-w-md rounded-xl p-3 text-white ${k === 'acid' ? 'bg-red-900/60' : k === 'base' ? 'bg-blue-900/60' : 'bg-green-900/60'}`}>
              <div className="text-xl font-bold">pH ≈ {String(sel.ph).replace('.', ',')} · {kindName[k!]}</div>
              <div className="text-sm md:text-base">{sel.note}</div>
            </div>
          )}
          {!sel && <p className="text-slate-300 mt-3 text-center">Обери рідину справа — і крапни її в відвар 👉</p>}
        </div>
        <div className="md:w-1/2">
          <div className="text-slate-300 mb-2">Досліджено: {tested.length}/{SUBS.length}</div>
          <div className="grid grid-cols-2 gap-2">
            {SUBS.map((s) => (
              <button
                key={s.id}
                onClick={() => pick(s)}
                className={`rounded-xl px-3 py-3 text-left text-white font-semibold active:scale-95 transition ${sel?.id === s.id ? 'bg-indigo-500' : 'bg-slate-700 hover:bg-slate-600'}`}
              >
                <span className="text-2xl mr-2">{s.emoji}</span>
                {s.name}
                {tested.includes(s.id) && <span className="float-right text-green-300">✓</span>}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm text-amber-200 bg-amber-900/30 rounded-xl p-3">
            ⚠️ Удома не змішуйте засоби для прибирання й не куштуйте їх. Відбілювач і засіб для скла — небезпечні!
          </p>
        </div>
      </div>
    </div>
  );
};
