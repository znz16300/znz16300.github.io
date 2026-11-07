// 🃏 Гра «Правда чи міф?»: картку можна перетягнути вправо (правда) чи вліво (міф) або натиснути кнопку.
import React, { useRef, useState } from 'react';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { STATEMENTS, type Statement } from './statements';

const ROUND_SIZE = 10;
const THRESHOLD = 110;

const pickRound = (): Statement[] => {
  const a = STATEMENTS.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, ROUND_SIZE);
};

export const SwipeDeck: React.FC = () => {
  const [best, submitBest] = useBest('mythfact');
  const [deck, setDeck] = useState<Statement[]>(pickRound);
  const [i, setI] = useState(0);
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState(false);
  const [dx, setDx] = useState(0);
  const drag = useRef<{ id: number; x: number } | null>(null);

  const st = deck[i];

  const restart = () => {
    setDeck(pickRound());
    setI(0);
    setAnswer(null);
    setScore(0);
    setStreak(0);
    setDone(false);
    setRecord(false);
    setDx(0);
    setStarted(true);
  };

  const respond = (truth: boolean) => {
    if (answer != null || !st) return;
    unlockAudio();
    const ok = truth === st.truth;
    playBeep(ok);
    setAnswer(truth);
    setDx(0);
    if (ok) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else setStreak(0);
  };

  const next = () => {
    if (i + 1 >= deck.length) {
      setRecord(submitBest(score));
      setDone(true);
    } else {
      setI(i + 1);
      setAnswer(null);
    }
  };

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (answer != null || drag.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { id: e.pointerId, x: e.clientX };
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.id !== e.pointerId) return;
    setDx(e.clientX - drag.current.x);
  };
  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.id !== e.pointerId) return;
    const d = e.clientX - drag.current.x;
    drag.current = null;
    if (d > THRESHOLD) respond(true);
    else if (d < -THRESHOLD) respond(false);
    else setDx(0);
  };

  if (!started) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6 text-white text-center">
        <div className="text-7xl">🃏</div>
        <h2 className="text-3xl md:text-5xl font-extrabold">Правда чи міф?</h2>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
          Тобі покажуть твердження з фізики. Свайпни картку <b>вправо</b>, якщо це правда, і <b>вліво</b>, якщо міф - або натисни кнопку.
        </p>
        <button onClick={restart} className="px-10 py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-2xl font-bold active:scale-95">
          ▶ Грати
        </button>
        <div className="text-slate-400">Рекорд: {best} з {ROUND_SIZE}</div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white text-center">
        <div className="text-7xl">{score >= 9 ? '🏆' : score >= 6 ? '👍' : '📚'}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ти відповів правильно на {score} з {deck.length}
        </h2>
        {record && <div className="text-yellow-300 font-bold text-xl">🏆 Новий рекорд!</div>}
        <p className="text-xl text-slate-300">Рекорд: {Math.max(best, score)}. Усі відповіді можна почитати у вкладці «Усі відповіді».</p>
        <button onClick={restart} className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95">
          🔁 Ще раунд
        </button>
      </div>
    );
  }

  const tint = answer != null ? (answer === st.truth ? 'ring-4 ring-green-400' : 'ring-4 ring-red-400') : dx > 40 ? 'ring-4 ring-green-400/70' : dx < -40 ? 'ring-4 ring-red-400/70' : '';

  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 md:p-6 text-white">
      <div className="shrink-0 flex items-center justify-between text-lg font-semibold">
        <span>
          Картка {i + 1} / {deck.length}
        </span>
        <span>✅ {score}</span>
        <span>{streak >= 2 ? `🔥 серія ${streak}` : ' '}</span>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center">
        <div
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          className={`w-full max-w-3xl max-h-full overflow-auto rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl p-6 md:p-10 text-center flex flex-col gap-4 ${tint}`}
          style={{
            transform: `translateX(${dx}px) rotate(${dx / 25}deg)`,
            transition: drag.current ? 'none' : 'transform 0.25s',
            touchAction: 'pan-y',
          }}
        >
          <p className="text-2xl md:text-4xl font-bold leading-snug">{st.text}</p>
          {answer != null && (
            <div className="bg-black/30 rounded-2xl p-4 text-lg md:text-2xl text-left flex flex-col gap-2">
              <div className="font-extrabold">
                {answer === st.truth ? '✅ Вірно!' : '❌ Ні.'} Це {st.truth ? 'правда' : 'міф'}.
              </div>
              <div className="text-slate-100">{st.explain}</div>
            </div>
          )}
        </div>
      </div>

      {answer == null ? (
        <div className="shrink-0 grid grid-cols-2 gap-3">
          <button onClick={() => respond(false)} className="py-4 md:py-5 rounded-2xl bg-red-600 hover:bg-red-500 text-xl md:text-3xl font-extrabold active:scale-95">
            ❌ Міф
          </button>
          <button onClick={() => respond(true)} className="py-4 md:py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-xl md:text-3xl font-extrabold active:scale-95">
            ✅ Правда
          </button>
        </div>
      ) : (
        <button onClick={next} className="shrink-0 py-4 md:py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-xl md:text-3xl font-extrabold active:scale-95">
          {i + 1 >= deck.length ? 'Результат' : 'Далі ▶'}
        </button>
      )}
    </div>
  );
};
