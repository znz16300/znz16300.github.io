// Колода загадок: щоразу випадкова загадка з банку (без повторів, поки не закінчиться колода),
// 4 варіанти відповіді, до 3 підказок, пояснення, лічильник «відгадав без підказок».
import React, { useMemo, useState } from 'react';
import type { Riddle } from '../riddle/weekly/riddles';
import { mulberry32, shuffled } from './seed';

export const RiddleCard: React.FC<{ riddle: Riddle; seed: number; weekLabel: string; onNext?: () => void; onResult?: (solved: boolean) => void }> = ({ riddle, seed, weekLabel, onNext, onResult }) => {
  const options = useMemo(() => shuffled(riddle.options, mulberry32(seed)), [riddle, seed]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [hints, setHints] = useState(0);
  const [solved, setSolved] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const correct = riddle.options[0];
  const finished = solved || revealed;

  const pick = (o: string) => {
    if (finished || wrong.includes(o)) return;
    if (o === correct) {
      setSolved(true);
      onResult?.(wrong.length === 0 && hints === 0);
    }
    else setWrong((w) => [...w, o]);
  };

  return (
    <div className="w-full h-full overflow-auto p-3 md:p-6 text-white flex flex-col gap-4">
      <div className="text-center text-slate-300 text-base md:text-xl font-semibold">{weekLabel}</div>
      <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-indigo-800 shadow-2xl p-5 md:p-8 text-center flex flex-col items-center gap-3">
        <div className="text-6xl md:text-8xl">{finished ? riddle.emoji : '❔'}</div>
        <p className="text-2xl md:text-4xl font-extrabold leading-snug max-w-4xl">{riddle.text}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {options.map((o) => {
          const isWrong = wrong.includes(o);
          const state = finished
            ? o === correct
              ? 'bg-green-600 ring-2 ring-green-300'
              : 'bg-slate-700 opacity-50'
            : isWrong
              ? 'bg-red-700/70 opacity-70'
              : 'bg-slate-700 hover:bg-slate-600';
          return (
            <button
              key={o}
              onClick={() => pick(o)}
              disabled={finished || isWrong}
              className={`px-5 py-4 rounded-2xl text-xl md:text-2xl font-semibold text-left transition-all active:scale-[0.98] ${state}`}
            >
              {isWrong ? '✖ ' : ''}
              {o}
            </button>
          );
        })}
      </div>

      {!finished && wrong.length > 0 && <div className="text-center text-xl text-amber-300 font-semibold">Ні, спробуй ще! 🤔</div>}

      {hints > 0 && (
        <div className="flex flex-col gap-2">
          {riddle.hints.slice(0, hints).map((h, i) => (
            <div key={i} className="bg-amber-500/20 border border-amber-400/50 rounded-2xl p-3 md:p-4 text-lg md:text-xl text-amber-100">
              💡 Підказка {i + 1}: {h}
            </div>
          ))}
        </div>
      )}

      {finished ? (
        <div className="bg-slate-800/90 rounded-2xl p-4 md:p-5">
          <div className="text-xl md:text-2xl font-bold mb-1">{solved ? '🎉 Молодець, відгадав(-ла)!' : `Відповідь: ${correct}`}</div>
          <p className="text-lg md:text-xl text-slate-200">{riddle.explain}</p>
          {onNext && (
            <button onClick={onNext} className="mt-3 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-lg font-bold active:scale-95">
              Наступна загадка ▶
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {hints < 3 && (
            <button
              onClick={() => setHints((h) => h + 1)}
              className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-lg font-bold active:scale-95"
            >
              💡 Підказка ({hints}/3)
            </button>
          )}
          <button
            onClick={() => {
              setRevealed(true);
              onResult?.(false);
            }}
            className="px-5 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 text-lg font-bold active:scale-95"
          >
            🙈 Здаюсь, покажи відповідь
          </button>
        </div>
      )}
    </div>
  );
};

export const RiddleDeck: React.FC<{ riddles: Riddle[]; title?: string }> = ({ riddles, title = 'Загадка' }) => {
  const [order, setOrder] = useState(() => shuffled(riddles.map((_, i) => i)));
  const [pos, setPos] = useState(0);
  const [clean, setClean] = useState(0); // відгадано без помилок і підказок
  const [seen, setSeen] = useState(0);

  const next = () => {
    if (pos + 1 >= order.length) {
      setOrder(shuffled(riddles.map((_, i) => i)));
      setPos(0);
    } else setPos(pos + 1);
  };
  const seed = useMemo(() => Math.floor(Math.random() * 1e9), [pos, order]);
  const riddle = riddles[order[pos]];

  return (
    <RiddleCard
      key={`${order[pos]}-${pos}-${seed}`}
      riddle={riddle}
      seed={seed}
      weekLabel={`${title} · відгадано без підказок: ${clean} з ${seen}`}
      onNext={next}
      onResult={(ok) => {
        setSeen((n) => n + 1);
        if (ok) setClean((n) => n + 1);
      }}
    />
  );
};
