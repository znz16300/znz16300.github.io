// «Стрічка часу»: розстав 4 події в порядку від найдавнішої до найновішої. Друга вкладка - усі віхи історії.
import React, { useMemo, useState } from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards, type Fact } from '../../../physics/shared/FactCards';
import { shuffled } from '../../shared/seed';
import { EVENTS, type HistoryEvent } from './events';

const PER_ROUND = 4;
const ROUNDS = 6;

/** Обирає PER_ROUND подій, між якими принаймні 8 років різниці, щоб порядок був чесним */
const pickRound = (): HistoryEvent[] => {
  for (let attempt = 0; attempt < 50; attempt++) {
    const pick = shuffled(EVENTS).slice(0, PER_ROUND);
    const years = pick.map((e) => e.year).sort((a, b) => a - b);
    if (years.every((y, i) => i === 0 || y - years[i - 1] >= 8)) return pick;
  }
  return shuffled(EVENTS).slice(0, PER_ROUND);
};

const GameTab: React.FC = () => {
  const [roundNo, setRoundNo] = useState(1);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [seed, setSeed] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cards = useMemo(pickRound, [seed]);
  const [order, setOrder] = useState<number[]>([]); // індекси карток у порядку, який обрав гравець
  const [checked, setChecked] = useState(false);

  const correctOrder = useMemo(
    () => cards.map((_, i) => i).sort((a, b) => cards[a].year - cards[b].year),
    [cards]
  );
  const isRight = checked && order.every((v, i) => v === correctOrder[i]);

  const toggle = (idx: number) => {
    if (checked) return;
    setOrder((o) => (o.includes(idx) ? o.filter((v) => v !== idx) : [...o, idx]));
  };
  const check = () => {
    setChecked(true);
    if (order.every((v, i) => v === correctOrder[i])) setScore((s) => s + 1);
  };
  const nextRound = () => {
    if (roundNo >= ROUNDS) {
      setFinished(true);
      return;
    }
    setRoundNo((n) => n + 1);
    setSeed((s) => s + 1);
    setOrder([]);
    setChecked(false);
  };
  const restart = () => {
    setRoundNo(1);
    setScore(0);
    setFinished(false);
    setSeed((s) => s + 1);
    setOrder([]);
    setChecked(false);
  };

  if (finished) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white text-center">
        <div className="text-7xl">{score === ROUNDS ? '🏆' : score >= ROUNDS / 2 ? '🌟' : '📜'}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">Правильно розставлено: {score} з {ROUNDS}</h2>
        <p className="text-xl text-slate-300 max-w-2xl">
          {score === ROUNDS ? 'Блискуче! Ти чудово орієнтуєшся в історії України.' : 'Загляни у вкладку «Віхи історії» — там коротко про кожну подію.'}
        </p>
        <button onClick={restart} className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95">
          🔁 Ще раз
        </button>
      </div>
    );
  }

  const shown = checked ? correctOrder : cards.map((_, i) => i);

  return (
    <div className="w-full h-full overflow-auto p-3 md:p-6 text-white flex flex-col gap-3">
      <div className="flex items-center justify-between text-slate-300 font-semibold">
        <span>Раунд {roundNo} з {ROUNDS}</span>
        <span className="text-amber-300">⭐ {score}</span>
      </div>
      <h2 className="text-xl md:text-3xl font-bold">
        {checked ? (isRight ? '✅ Правильно! Ось порядок з датами:' : '❌ Майже! Ось правильний порядок:') : 'Торкайся подій у порядку від найдавнішої до найновішої:'}
      </h2>

      <div className="grid gap-3 md:grid-cols-2">
        {shown.map((idx) => {
          const e = cards[idx];
          const pos = order.indexOf(idx);
          const mark = checked ? (order[correctOrder.indexOf(idx)] === idx ? 'ring-2 ring-green-300' : 'ring-2 ring-red-400') : pos >= 0 ? 'ring-2 ring-indigo-300 bg-indigo-700' : 'hover:bg-slate-600';
          return (
            <button
              key={idx}
              onClick={() => toggle(idx)}
              className={`relative text-left rounded-2xl p-4 md:p-5 bg-slate-700 transition-all active:scale-[0.98] ${mark}`}
            >
              {!checked && pos >= 0 && (
                <span className="absolute -top-2 -left-2 w-9 h-9 rounded-full bg-amber-400 text-slate-900 font-extrabold text-xl flex items-center justify-center shadow-lg">
                  {pos + 1}
                </span>
              )}
              {checked && <div className="text-amber-300 font-extrabold text-2xl">{e.label}</div>}
              <div className="text-xl md:text-2xl font-bold">{e.title}</div>
              <p className="text-base md:text-lg text-slate-200 mt-1">{e.text}</p>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3 flex-wrap">
        {!checked ? (
          <>
            <button
              onClick={check}
              disabled={order.length < cards.length}
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-lg font-bold active:scale-95 disabled:opacity-40"
            >
              ✔ Перевірити
            </button>
            <button onClick={() => setOrder([])} className="px-6 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 text-lg font-bold active:scale-95">
              ↺ Скинути
            </button>
          </>
        ) : (
          <button onClick={nextRound} className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-lg font-bold active:scale-95">
            {roundNo >= ROUNDS ? 'Результат' : 'Далі ▶'}
          </button>
        )}
      </div>
    </div>
  );
};

const MILESTONES: Fact[] = [...EVENTS]
  .sort((a, b) => a.year - b.year)
  .map((e) => ({ emoji: '📜', title: `${e.label} — ${e.title}`, text: e.text }));

const TimelinePage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'game', icon: '🎯', label: 'Стрічка часу', content: <GameTab /> },
      { id: 'milestones', icon: '📜', label: 'Віхи історії', content: <FactCards facts={MILESTONES} /> },
    ]}
  />
);

export default TimelinePage;
