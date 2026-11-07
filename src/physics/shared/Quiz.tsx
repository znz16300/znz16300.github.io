// Міні-тест: питання по одному, миттєва відповідь з поясненням, підсумок.
import React, { useState } from 'react';

export interface QuizQuestion {
  q: string;
  options: string[];
  /** Індекс правильної відповіді */
  answer: number;
  explain: string;
}

export const Quiz: React.FC<{ questions: QuizQuestion[] }> = ({ questions }) => {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[i];

  const restart = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
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
    }
  };

  if (done) {
    const ratio = score / questions.length;
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white text-center">
        <div className="text-7xl">{ratio === 1 ? '🏆' : ratio >= 0.5 ? '👍' : '📚'}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Результат: {score} з {questions.length}
        </h2>
        <p className="text-xl text-slate-300">
          {ratio === 1 ? 'Чудово! Ти справжній фізик!' : ratio >= 0.5 ? 'Непогано! Перегляни факти й спробуй ще раз.' : 'Прочитай вкладку «Чи знаєте ви?» і спробуй знову.'}
        </p>
        <button onClick={restart} className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95">
          🔁 Ще раз
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 md:p-6 text-white overflow-auto">
      <div className="text-slate-400 font-semibold">
        Питання {i + 1} з {questions.length}
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
