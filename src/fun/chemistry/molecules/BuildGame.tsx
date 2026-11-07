// 🎯 Збери за назвою: за 3 спроби набери потрібні атоми. Чим менше спроб - тим більше балів.
import React, { useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { Counter } from './Counter';
import { MolView } from './MolView';
import { MOLS, emptyCounts, formula, molCounts, same, type Counts } from './data';

const ROUNDS = 6;

export const BuildGame: React.FC = () => {
  const [best, submit] = useBest('chem-mol-build');
  const [deck, setDeck] = useState(() => shuffled(MOLS).slice(0, ROUNDS));
  const [i, setI] = useState(0);
  const [counts, setCounts] = useState<Counts>(emptyCounts());
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [state, setState] = useState<'play' | 'ok' | 'fail'>('play');
  const [msg, setMsg] = useState('');
  const [done, setDone] = useState(false);
  const [rec, setRec] = useState(false);
  const m = deck[i];

  const check = () => {
    unlockAudio();
    const target = molCounts(m);
    if (same(counts, target)) {
      const g = [100, 60, 30][tries];
      setScore((s) => s + g); setState('ok'); setMsg(`Правильно! +${g}`); playBeep(true);
      return;
    }
    const t = tries + 1;
    setTries(t);
    playBeep(false);
    if (t >= 3) { setState('fail'); setMsg('Спроби закінчилися. Правильна формула — ' + formula(target)); return; }
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const need = m.atoms.length;
    setMsg(total === need ? 'Кількість атомів правильна, але склад не той. Подумай, які атоми там є.' : total < need ? 'Атомів замало.' : 'Атомів забагато.');
  };
  const next = () => {
    if (i + 1 >= ROUNDS) { setDone(true); setRec(submit(score)); return; }
    setI(i + 1); setCounts(emptyCounts()); setTries(0); setState('play'); setMsg('');
  };
  const restart = () => { setDeck(shuffled(MOLS).slice(0, ROUNDS)); setI(0); setCounts(emptyCounts()); setTries(0); setScore(0); setState('play'); setMsg(''); setDone(false); setRec(false); };

  if (done)
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="bg-slate-800/90 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl">{rec ? '🏆' : '⚛️'}</div>
          <div className="text-3xl font-bold">Бали: {score}</div>
          <div className="text-slate-300 mb-4">{rec ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
          <button onClick={restart} className="px-6 py-3 rounded-xl bg-indigo-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
        </div>
      </div>
    );

  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
        <div className="text-slate-300">Раунд {i + 1}/{ROUNDS} · бали {score} · спроб: {3 - tries}</div>
        <div className="bg-slate-800/90 rounded-2xl px-8 py-4 text-center text-white">
          <div className="text-slate-300">Збери молекулу</div>
          <div className="text-3xl md:text-4xl font-bold">{m.name}</div>
          <div className="text-slate-300 text-sm">Скільки всього атомів: {m.atoms.length}</div>
        </div>
        <Counter counts={counts} onChange={(c) => state === 'play' && setCounts(c)} />
        {msg && <div className={`w-full rounded-xl p-3 text-white text-center ${state === 'ok' ? 'bg-green-900/60' : state === 'fail' ? 'bg-red-900/60' : 'bg-amber-900/50'}`}>{msg}</div>}
        {state !== 'play' && <div className="bg-slate-800/80 rounded-2xl p-3 flex flex-col items-center text-white"><MolView mol={m} size={180} /><div className="text-sm text-center">{m.fact}</div></div>}
        {state === 'play' ? (
          <button onClick={check} className="px-8 py-3 rounded-xl bg-green-500 text-white text-xl font-bold active:scale-95">✔ Перевірити</button>
        ) : (
          <button onClick={next} className="px-8 py-3 rounded-xl bg-indigo-500 text-white text-xl font-bold active:scale-95">{i + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</button>
        )}
      </div>
    </div>
  );
};
