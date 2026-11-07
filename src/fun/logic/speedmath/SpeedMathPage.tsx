// «Швидкий рахунок»: 45 секунд, приклади щоразу нові. Рекорд зберігається в браузері кіоску (за рівнем).
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { shuffled } from '../../shared/seed';

const TIME = 45;
type Level = 1 | 2 | 3;
const rnd = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));

interface Problem {
  text: string;
  answer: number;
  options: number[];
}

const makeProblem = (level: Level): Problem => {
  let text = '';
  let answer = 0;
  if (level === 1) {
    const a = rnd(2, 20);
    const b = rnd(2, 20);
    if (Math.random() < 0.5) { text = `${a} + ${b}`; answer = a + b; }
    else { const [x, y] = a >= b ? [a, b] : [b, a]; text = `${x} − ${y}`; answer = x - y; }
  } else if (level === 2) {
    const k = rnd(0, 2);
    if (k === 0) { const a = rnd(2, 9), b = rnd(2, 9); text = `${a} × ${b}`; answer = a * b; }
    else if (k === 1) { const a = rnd(20, 99), b = rnd(10, 60); text = `${a} + ${b}`; answer = a + b; }
    else { const b = rnd(2, 9), r = rnd(2, 9); text = `${b * r} ÷ ${b}`; answer = r; }
  } else {
    const k = rnd(0, 3);
    if (k === 0) { const a = rnd(11, 25), b = rnd(3, 9); text = `${a} × ${b}`; answer = a * b; }
    else if (k === 1) { const a = rnd(100, 500), b = rnd(20, 99); text = `${a} + ${b}`; answer = a + b; }
    else if (k === 2) { const a = rnd(100, 500), b = rnd(20, 99); text = `${a} − ${b}`; answer = a - b; }
    else { const a = rnd(2, 9), b = rnd(2, 9), c = rnd(2, 9); text = `${a} × ${b} + ${c}`; answer = a * b + c; }
  }
  const set = new Set<number>();
  const deltas = [1, -1, 2, -2, 10, -10, 3];
  for (const d of shuffled(deltas)) {
    if (set.size >= 3) break;
    const v = answer + d;
    if (v >= 0 && v !== answer) set.add(v);
  }
  return { text, answer, options: shuffled([answer, ...set]) };
};

const SpeedMathPage: React.FC = () => {
  const [level, setLevel] = useState<Level | null>(null);
  const [left, setLeft] = useState(TIME);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [flash, setFlash] = useState<'ok' | 'bad' | null>(null);
  const [playing, setPlaying] = useState(false);
  const [best, submit] = useBest(`speedmath-${level ?? 0}`);
  const [newRecord, setNewRecord] = useState(false);
  const scoreRef = useRef(0);

  const start = useCallback((l: Level) => {
    setLevel(l);
    setLeft(TIME);
    setScore(0);
    scoreRef.current = 0;
    setMistakes(0);
    setNewRecord(false);
    setProblem(makeProblem(l));
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setLeft((t) => t - 1), 1000);
    return () => window.clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (playing && left <= 0) {
      setPlaying(false);
      setNewRecord(submit(scoreRef.current));
    }
  }, [left, playing, submit]);

  const answer = (v: number) => {
    if (!playing || !problem || !level) return;
    if (v === problem.answer) {
      scoreRef.current += 1;
      setScore(scoreRef.current);
      setFlash('ok');
    } else {
      setMistakes((m) => m + 1);
      setFlash('bad');
    }
    window.setTimeout(() => setFlash(null), 250);
    setProblem(makeProblem(level));
  };

  if (level == null) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6 text-white text-center overflow-auto">
        <div className="text-7xl">⏱️</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">Скільки прикладів розв'яжеш за {TIME} секунд?</h2>
        <div className="grid gap-3 sm:grid-cols-3 w-full max-w-3xl">
          {([1, 2, 3] as const).map((l) => (
            <button key={l} onClick={() => start(l)} className="px-6 py-5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-2xl font-bold active:scale-95">
              {'⭐'.repeat(l)} {['Легко', 'Середньо', 'Складно'][l - 1]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!playing && left <= 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-white text-center">
        <div className="text-7xl">{newRecord ? '🏆' : '⏱️'}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">Час вийшов!</h2>
        <div className="text-2xl">Розв'язано: <b className="text-green-300">{score}</b> · Помилок: <b className="text-red-300">{mistakes}</b></div>
        <div className="text-xl text-amber-300">{newRecord ? '🎉 Новий рекорд!' : `Твій рекорд на цьому рівні: ${best}`}</div>
        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={() => start(level)} className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-xl font-bold active:scale-95">🔁 Ще раз</button>
          <button onClick={() => setLevel(null)} className="px-8 py-4 rounded-2xl bg-slate-600 hover:bg-slate-500 text-xl font-bold active:scale-95">Змінити рівень</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full flex flex-col gap-4 p-3 md:p-6 text-white transition-colors ${flash === 'ok' ? 'bg-green-900/40' : flash === 'bad' ? 'bg-red-900/40' : ''}`}>
      <div className="flex items-center justify-between text-xl md:text-2xl font-bold">
        <span>⏱️ {left} с</span>
        <span className="text-green-300">✅ {score}</span>
        <span className="text-amber-300">🏅 {best}</span>
      </div>
      <div className="h-3 rounded-full bg-slate-700 overflow-hidden shrink-0">
        <div className="h-full bg-orange-500 transition-all duration-1000 ease-linear" style={{ width: `${(left / TIME) * 100}%` }} />
      </div>
      <div className="flex-1 flex items-center justify-center text-6xl md:text-8xl font-extrabold">{problem?.text} = ?</div>
      <div className="grid grid-cols-2 gap-3">
        {problem?.options.map((o) => (
          <button key={o} onClick={() => answer(o)} className="px-4 py-6 rounded-2xl bg-slate-700 hover:bg-slate-600 text-4xl md:text-5xl font-extrabold active:scale-95">
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedMathPage;
