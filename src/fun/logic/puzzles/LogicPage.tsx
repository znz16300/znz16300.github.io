// «Логічні задачі»: набір з 8 задач (від легких до складних), підказки, пояснення розв'язку.
import React, { useMemo, useState } from 'react';
import { QuizRunner, shuffleOptions, type RunnerQuestion, type Verdict } from '../../shared/QuizRunner';
import { shuffled } from '../../shared/seed';
import { PUZZLES } from './puzzles';

const STARS = ['', '⭐ Легко', '⭐⭐ Середньо', '⭐⭐⭐ Складно'];
const PER_ROUND: Record<1 | 2 | 3 | 'all', number> = { 1: 6, 2: 5, 3: 4, all: 8 };

type Level = 1 | 2 | 3 | 'all';

const makeRound = (level: Level): RunnerQuestion[] => {
  const pool = level === 'all' ? PUZZLES : PUZZLES.filter((p) => p.level === level);
  return shuffled(pool)
    .slice(0, PER_ROUND[level])
    .sort((a, b) => a.level - b.level)
    .map((p) =>
      // варіанти перемішуємо, окрім задач, де відповіді — числа в порядку зростання (так читається природніше)
      shuffleOptions({ q: p.q, options: p.options, answer: p.answer, hint: p.hint, explain: p.explain, tag: STARS[p.level] })
    );
};

const verdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Геніально!', text: 'Усі задачі розв\'язано. У тебе чудове логічне мислення!' };
  if (r >= 0.6) return { emoji: '🌟', title: 'Дуже добре!', text: 'Гарне мислення! Спробуй складніший рівень або нові задачі.' };
  return { emoji: '🧩', title: 'Тренуй мозок!', text: 'Логіка тренується, як м\'язи. Спробуй ще раз — користуйся підказками.' };
};

const LEVELS: { id: Level; label: string }[] = [
  { id: 'all', label: '🎲 Усі' },
  { id: 1, label: '⭐ Легко' },
  { id: 2, label: '⭐⭐ Середньо' },
  { id: 3, label: '⭐⭐⭐ Складно' },
];

const LogicPage: React.FC = () => {
  const [level, setLevel] = useState<Level | null>(null);
  const [round, setRound] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = useMemo(() => (level == null ? [] : makeRound(level)), [level, round]);

  if (level == null) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6 text-white text-center overflow-auto">
        <div className="text-7xl">🧠</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">Оціни свої сили: обери рівень</h2>
        <div className="grid gap-3 sm:grid-cols-2 w-full max-w-2xl">
          {LEVELS.map((l) => (
            <button
              key={String(l.id)}
              onClick={() => setLevel(l.id)}
              className="px-6 py-5 rounded-2xl bg-green-700 hover:bg-green-600 text-2xl font-bold active:scale-95"
            >
              {l.label}
            </button>
          ))}
        </div>
        <p className="text-slate-400 text-lg">Підказки допоможуть, якщо застряг(-ла). Пояснення розв'язку — після кожної відповіді.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="shrink-0 px-3 pt-2">
        <button onClick={() => setLevel(null)} className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold active:scale-95">
          ◀ Змінити рівень
        </button>
      </div>
      <div className="flex-1 min-h-0">
        <QuizRunner key={`${level}-${round}`} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові задачі" />
      </div>
    </div>
  );
};

export default LogicPage;
