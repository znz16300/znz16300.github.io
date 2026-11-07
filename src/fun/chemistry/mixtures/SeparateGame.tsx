// 🧲 Розділи суміш: склади план із методів у правильному порядку. 8 завдань.
import React, { useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { COMP, METHODS, TASKS, run, type Method, type Result } from './engine';

export const SeparateGame: React.FC = () => {
  const [best, submit] = useBest('chem-mixtures');
  const [deck, setDeck] = useState(() => shuffled(TASKS));
  const [i, setI] = useState(0);
  const [plan, setPlan] = useState<Method[]>([]);
  const [res, setRes] = useState<Result | null>(null);
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [gain, setGain] = useState(0);
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const t = deck[i];

  const exec = () => {
    unlockAudio();
    const r = run(t, plan);
    setRes(r);
    if (r.ok) {
      const extra = Math.max(0, plan.length - t.solution.length);
      const g = Math.max(10, 100 - tries * 30 - extra * 20);
      setGain(g); setScore((s) => s + g); playBeep(true);
    } else { setTries((x) => x + 1); playBeep(false); }
  };
  const next = () => {
    if (i + 1 >= deck.length) { setDone(true); setRec(submit(score)); return; }
    setI(i + 1); setPlan([]); setRes(null); setTries(0); setGain(0);
  };
  const restart = () => { setDeck(shuffled(TASKS)); setI(0); setPlan([]); setRes(null); setTries(0); setScore(0); setGain(0); setDone(false); setRec(false); };

  if (done)
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-slate-800/90 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl">{rec ? '🏆' : '🧲'}</div>
          <div className="text-3xl font-bold">Бали: {score}</div>
          <div className="text-slate-300 mb-4">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-indigo-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
        </div>
      </div>
    );
  const solved = res?.ok;
  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <div className="text-slate-300 text-center">Завдання {i + 1}/{deck.length} · бали {score}</div>
        <div className="bg-slate-800/90 rounded-2xl p-4 text-white text-center">
          <div className="text-xl md:text-2xl font-bold">{t.title}</div>
          <div className="text-4xl md:text-5xl my-2">{t.comps.map((c) => COMP[c].emoji).join(' + ')}</div>
          <div className="text-slate-300 text-sm">{t.comps.map((c) => COMP[c].name).join(' + ')}{t.wet ? ' (розчин/суспензія)' : ' (сухе)'}</div>
          <div className="text-slate-300 text-sm mt-1">Відокрем усі складники. Порядок кроків має значення!</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {METHODS.map((m) => (
            <button key={m.id} disabled={!!solved || plan.length >= 5} onClick={() => { setPlan([...plan, m.id]); setRes(null); }} className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-2 font-semibold active:scale-95 disabled:opacity-40">
              <div className="text-2xl">{m.emoji}</div>
              <div className="text-sm">{m.name}</div>
            </button>
          ))}
        </div>

        <div className="bg-slate-800/80 rounded-xl p-3 text-white">
          <div className="text-slate-300 text-sm mb-1">Мій план:</div>
          <div className="flex flex-wrap gap-2 items-center min-h-[2.5rem]">
            {plan.length === 0 && <span className="text-slate-400">Торкайся методів, щоб додати кроки</span>}
            {plan.map((m, k) => (
              <span key={k} className="px-3 py-1 rounded-lg bg-slate-600">{k + 1}. {METHODS.find((x) => x.id === m)!.emoji} {METHODS.find((x) => x.id === m)!.name}</span>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <button disabled={!plan.length || !!solved} onClick={() => { setPlan(plan.slice(0, -1)); setRes(null); }} className="px-4 py-2 rounded-lg bg-slate-600 text-white active:scale-95 disabled:opacity-40">⌫ Прибрати останній</button>
            <button disabled={!plan.length || !!solved} onClick={exec} className="px-5 py-2 rounded-lg bg-green-500 text-white font-bold active:scale-95 disabled:opacity-40">▶ Виконати</button>
          </div>
        </div>

        {res && (
          <div className={`rounded-xl p-3 text-white ${res.ok ? 'bg-green-900/60' : 'bg-red-900/50'}`}>
            <div className="font-bold text-lg mb-1">{res.ok ? `🎉 Усе розділено! +${gain}` : 'Не вийшло розділити чисто'}</div>
            <ol className="list-decimal ml-5 text-sm md:text-base space-y-0.5">{res.log.map((l, k) => <li key={k}>{l}</li>)}</ol>
            <div className="mt-2 text-sm">У пробірках: {res.collected.length ? res.collected.map((g) => g.map((c) => COMP[c].emoji).join('')).join(' | ') : '—'}{res.leftover.length ? ` · залишилось: ${res.leftover.map((c) => COMP[c].emoji).join('')}` : ''}</div>
            {res.ok && <button onClick={next} className="mt-3 px-6 py-2 rounded-xl bg-white/90 text-slate-900 font-bold active:scale-95">{i + 1 >= deck.length ? 'Результат' : 'Далі ▶'}</button>}
            {!res.ok && tries >= 2 && <div className="mt-2 text-amber-200 text-sm">Підказка: потрібно {t.solution.length} {t.solution.length === 1 ? 'крок' : 'кроки'}, перший — {METHODS.find((x) => x.id === t.solution[0])!.name}.</div>}
          </div>
        )}
      </div>
    </div>
  );
};
