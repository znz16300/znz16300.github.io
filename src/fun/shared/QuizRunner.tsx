// Універсальний тест: питання по одному, необов'язкова підказка, миттєве пояснення, підсумок.
// Використовується в «Квізі дня», «Цікавій мові», «Логічних задачах».
import React, { useState } from 'react';
import { mulberry32, shuffled } from './seed';

export interface RunnerQuestion {
  q: string;
  options: string[];
  /** Індекс правильної відповіді в options */
  answer: number;
  explain: string;
  /** Підказка - показується за натисканням кнопки до відповіді */
  hint?: string;
  /** Невеликий підпис над питанням (рівень складності, тема) */
  tag?: string;
}

export interface Verdict {
  emoji: string;
  title: string;
  text: string;
}

/** Скорочений запис питання: перша відповідь у списку - правильна (варіанти перемішуються під час гри). */
export const mkQ = (q: string, right: string, wrong: string[], explain: string, extra: Partial<RunnerQuestion> = {}): RunnerQuestion => ({
  q,
  options: [right, ...wrong],
  answer: 0,
  explain,
  ...extra,
});

/** Перемішує варіанти відповідей, правильно переносячи індекс правильної. */
export const shuffleOptions = (q: RunnerQuestion, rng: () => number = Math.random): RunnerQuestion => {
  const order = shuffled(
    q.options.map((_, i) => i),
    rng
  );
  return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
};

export const shuffleAllOptions = (qs: RunnerQuestion[], seed?: number): RunnerQuestion[] => {
  const rng = seed == null ? Math.random : mulberry32(seed);
  return qs.map((q) => shuffleOptions(q, rng));
};

interface Props {
  questions: RunnerQuestion[];
  verdict: (score: number, total: number) => Verdict;
  /** Якщо задано - кнопка «Ще раз» викликає її (батько міняє набір питань). Інакше тест починається спочатку. */
  onRestart?: () => void;
  restartLabel?: string;
  /** Додатковий вміст під підсумком */
  footer?: React.ReactNode;
}

export const QuizRunner: React.FC<Props> = ({ questions, verdict, onRestart, restartLabel = '🔁 Ще раз', footer }) => {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [hintShown, setHintShown] = useState(false);
  const q = questions[i];

  const reset = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    setHintShown(false);
  };
  const pick = (idx: number) => {
    if (picked != null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= questions.length) setDone(true);
    else {
      setI(i + 1);
      setPicked(null);
      setHintShown(false);
    }
  };

  if (done) {
    const v = verdict(score, questions.length);
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white text-center overflow-auto">
        <div className="text-7xl">{v.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">{v.title}</h2>
        <div className="text-2xl font-bold text-amber-300">
          Результат: {score} з {questions.length}
        </div>
        <p className="text-xl text-slate-300 max-w-2xl">{v.text}</p>
        <button
          onClick={() => (onRestart ? onRestart() : reset())}
          className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95"
        >
          {restartLabel}
        </button>
        {footer}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 md:p-6 text-white overflow-auto">
      <div className="flex items-center justify-between gap-3 text-slate-400 font-semibold">
        <span>
          Питання {i + 1} з {questions.length}
        </span>
        {q.tag && <span className="text-amber-300">{q.tag}</span>}
      </div>
      <div className="h-2 rounded-full bg-slate-700 overflow-hidden shrink-0">
        <div className="h-full bg-indigo-500 transition-all" style={{ width: `${(i / questions.length) * 100}%` }} />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold leading-snug">{q.q}</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {q.options.map((o, idx) => {
          const state =
            picked == null
              ? 'bg-slate-700 hover:bg-slate-600'
              : idx === q.answer
                ? 'bg-green-600 ring-2 ring-green-300'
                : idx === picked
                  ? 'bg-red-600'
                  : 'bg-slate-700 opacity-60';
          return (
            <button
              key={idx}
              onClick={() => pick(idx)}
              className={`px-5 py-4 rounded-2xl text-lg md:text-2xl font-semibold text-left transition-all active:scale-[0.98] ${state}`}
            >
              {o}
            </button>
          );
        })}
      </div>

      {picked == null && q.hint && (
        <div className="flex flex-col gap-2">
          {hintShown ? (
            <div className="bg-amber-500/20 border border-amber-400/50 rounded-2xl p-4 text-lg md:text-xl text-amber-100">💡 {q.hint}</div>
          ) : (
            <button
              onClick={() => setHintShown(true)}
              className="self-start px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-lg font-bold active:scale-95"
            >
              💡 Підказка
            </button>
          )}
        </div>
      )}

      {picked != null && (
        <div className="bg-slate-800/90 rounded-2xl p-4 md:p-5 flex flex-col gap-3">
          <div className="text-xl md:text-2xl font-bold">{picked === q.answer ? '✅ Правильно!' : '❌ Не зовсім.'}</div>
          <p className="text-lg md:text-xl text-slate-200">{q.explain}</p>
          <button onClick={next} className="self-start px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-lg font-bold active:scale-95">
            {i + 1 >= questions.length ? 'Результат' : 'Далі ▶'}
          </button>
        </div>
      )}
    </div>
  );
};
