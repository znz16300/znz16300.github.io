// «Числові послідовності»: задачі генеруються програмою щоразу нові - без кінця. Обери рівень.
import React, { useMemo, useState } from 'react';
import { QuizRunner, shuffleOptions, type RunnerQuestion, type Verdict } from '../../shared/QuizRunner';
import { shuffled } from '../../shared/seed';

const rnd = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));

interface Seq {
  terms: number[];
  next: number;
  rule: string;
  hint: string;
}

const make = (level: 1 | 2 | 3): Seq => {
  const kinds = level === 1 ? ['arith', 'arith', 'geom'] : level === 2 ? ['arith', 'geom', 'squares', 'growing'] : ['squares', 'growing', 'fib', 'zigzag', 'triple'];
  const kind = kinds[rnd(0, kinds.length - 1)];
  switch (kind) {
    case 'geom': {
      const r = level === 1 ? 2 : rnd(2, 3);
      const a = rnd(1, 4);
      const t = Array.from({ length: 4 }, (_, i) => a * r ** i);
      return { terms: t, next: a * r ** 4, rule: `Кожне число у ${r} ${r === 2 ? 'рази' : 'рази'} більше за попереднє.`, hint: 'Спробуй поділити друге число на перше.' };
    }
    case 'squares': {
      const o = rnd(0, 3);
      const t = Array.from({ length: 4 }, (_, i) => (i + 1) ** 2 + o);
      return { terms: t, next: 25 + o, rule: `Це квадрати чисел 1, 2, 3, 4, 5…${o ? ` плюс ${o}` : ''}.`, hint: 'Подивись, чи не 1×1, 2×2, 3×3…' };
    }
    case 'growing': {
      const s = rnd(1, 6);
      const t = [s];
      for (let i = 1; i <= 4; i++) t.push(t[i - 1] + i);
      return { terms: t, next: t[4] + 5, rule: 'Різниця між сусідніми числами збільшується на 1: +1, +2, +3, +4, +5.', hint: 'Подивись, наскільки збільшується кожне наступне число.' };
    }
    case 'fib': {
      const a = rnd(1, 3);
      const b = rnd(1, 4);
      const t = [a, b];
      for (let i = 2; i < 6; i++) t.push(t[i - 1] + t[i - 2]);
      return { terms: t.slice(0, 5), next: t[5], rule: 'Кожне число — це сума двох попередніх.', hint: 'Спробуй додати два попередні числа.' };
    }
    case 'zigzag': {
      const s = rnd(2, 8);
      const t = [s];
      for (let i = 1; i <= 5; i++) t.push(t[i - 1] + (i % 2 ? 3 : -1));
      return { terms: t.slice(0, 5), next: t[5], rule: 'Чергуємо: додаємо 3, потім віднімаємо 1.', hint: 'Різниця між сусідніми числами чергується.' };
    }
    case 'triple': {
      const a = rnd(2, 5);
      const t = Array.from({ length: 4 }, (_, i) => a * 3 ** i);
      return { terms: t, next: a * 3 ** 4, rule: 'Кожне число втричі більше за попереднє.', hint: 'Подивись, у скільки разів зростає число.' };
    }
    default: {
      const d = level === 1 ? rnd(2, 5) : rnd(3, 9);
      const a = rnd(1, 20);
      const t = Array.from({ length: 5 }, (_, i) => a + d * i);
      return { terms: t, next: a + d * 5, rule: `До кожного числа додаємо ${d}.`, hint: 'Знайди різницю між двома сусідніми числами.' };
    }
  }
};

const makeQuestion = (level: 1 | 2 | 3): RunnerQuestion => {
  const s = make(level);
  const wrong = new Set<number>();
  const base = [1, -1, 2, -2, 10, -10, 3].map((d) => s.next + d).filter((x) => x > 0 && x !== s.next);
  for (const w of shuffled(base)) {
    if (wrong.size < 3) wrong.add(w);
  }
  return shuffleOptions({
    q: `Яке число наступне?  ${s.terms.join(', ')}, …`,
    options: [String(s.next), ...[...wrong].map(String)],
    answer: 0,
    hint: s.hint,
    explain: `${s.rule} Наступне число — ${s.next}.`,
    tag: ['', '⭐ Легко', '⭐⭐ Середньо', '⭐⭐⭐ Складно'][level],
  });
};

const verdict = (score: number, total: number): Verdict => {
  const r = score / total;
  if (r === 1) return { emoji: '🏆', title: 'Математичний геній!', text: 'Усі закономірності розгадано!' };
  if (r >= 0.6) return { emoji: '🌟', title: 'Дуже добре!', text: 'Спробуй складніший рівень.' };
  return { emoji: '🧩', title: 'Шукай закономірність!', text: 'Дивись, як змінюються числа. Спробуй ще раз.' };
};

const SequencesPage: React.FC = () => {
  const [level, setLevel] = useState<1 | 2 | 3 | null>(null);
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () => (level == null ? [] : Array.from({ length: 8 }, () => makeQuestion(level))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [level, round]
  );

  if (level == null) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6 text-white text-center overflow-auto">
        <div className="text-7xl">🔢</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">Знайди закономірність: обери рівень</h2>
        <div className="grid gap-3 sm:grid-cols-3 w-full max-w-3xl">
          {([1, 2, 3] as const).map((l) => (
            <button key={l} onClick={() => setLevel(l)} className="px-6 py-5 rounded-2xl bg-blue-700 hover:bg-blue-600 text-2xl font-bold active:scale-95">
              {'⭐'.repeat(l)} {['Легко', 'Середньо', 'Складно'][l - 1]}
            </button>
          ))}
        </div>
        <p className="text-slate-400 text-lg">Числа щоразу нові, тож нудно не буде!</p>
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
        <QuizRunner key={`${level}-${round}`} questions={questions} verdict={verdict} onRestart={() => setRound((r) => r + 1)} restartLabel="🔁 Нові послідовності" />
      </div>
    </div>
  );
};

export default SequencesPage;
