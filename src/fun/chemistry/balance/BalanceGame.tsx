// ⚖️ Зрівняй рівняння: коефіцієнти перед формулами так, щоб атомів було порівну зліва й справа.
import React, { useMemo, useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { EQUATIONS, count, gcd, pretty, type Equation } from './equations';

const Term: React.FC<{ f: string; k: number; onChange: (d: number) => void; locked: boolean }> = ({ f, k, onChange, locked }) => (
  <div className="bg-slate-800/90 rounded-xl p-2 flex flex-col items-center gap-1 text-white">
    <div className="flex items-center gap-1">
      <span className="text-3xl md:text-4xl font-bold w-8 text-center tabular-nums text-amber-300">{k > 1 ? k : ''}</span>
      <span className="text-2xl md:text-3xl font-bold">{pretty(f)}</span>
    </div>
    <div className="flex gap-1">
      <button disabled={locked} onClick={() => onChange(-1)} aria-label={`менше ${f}`} className="w-11 h-11 rounded-lg bg-slate-600 text-2xl font-bold active:scale-90 disabled:opacity-40">−</button>
      <button disabled={locked} onClick={() => onChange(1)} aria-label={`більше ${f}`} className="w-11 h-11 rounded-lg bg-indigo-500 text-2xl font-bold active:scale-90 disabled:opacity-40">+</button>
    </div>
  </div>
);

export const BalanceGame: React.FC = () => {
  const [best, submit] = useBest('chem-balance');
  const [eq, setEq] = useState<Equation>(EQUATIONS[0]);
  const [coefs, setCoefs] = useState<number[]>(() => EQUATIONS[0].left.concat(EQUATIONS[0].right).map(() => 1));
  const [solved, setSolved] = useState<string[]>([]);
  const [simple, setSimple] = useState(false);

  const nL = eq.left.length;
  const L = useMemo(() => count(eq.left, coefs.slice(0, nL)), [eq, coefs, nL]);
  const R = useMemo(() => count(eq.right, coefs.slice(nL)), [eq, coefs, nL]);
  const els = Array.from(new Set([...Object.keys(L), ...Object.keys(R)]));
  const balanced = els.every((e) => (L[e] ?? 0) === (R[e] ?? 0));
  const g = coefs.reduce(gcd, 0);
  const win = balanced && g === 1;
  const isSolved = solved.includes(eq.id);

  const pick = (e: Equation) => { setEq(e); setCoefs(e.left.concat(e.right).map(() => 1)); setSimple(false); };
  const change = (i: number, d: number) => {
    if (win) return;
    unlockAudio();
    const next = coefs.map((c, k) => (k === i ? Math.max(1, Math.min(9, c + d)) : c));
    setCoefs(next);
    const L2 = count(eq.left, next.slice(0, nL)), R2 = count(eq.right, next.slice(nL));
    const bal = els.every((e) => (L2[e] ?? 0) === (R2[e] ?? 0));
    const gg = next.reduce(gcd, 0);
    if (bal && gg === 1) {
      playBeep(true);
      setSolved((s) => { if (s.includes(eq.id)) return s; const n = [...s, eq.id]; submit(n.length); return n; });
    } else if (bal) setSimple(true);
    else setSimple(false);
  };
  const nextEq = () => {
    const rest = EQUATIONS.filter((e) => !solved.includes(e.id) && e.id !== eq.id);
    const pool = rest.length ? rest : EQUATIONS.filter((e) => e.id !== eq.id);
    pick(pool[Math.floor(Math.random() * pool.length)]);
  };

  const side = (items: string[], offset: number) =>
    items.map((f, i) => (
      <React.Fragment key={f + i}>
        {i > 0 && <span className="text-3xl text-white self-center">+</span>}
        <Term f={f} k={coefs[offset + i]} onChange={(d) => change(offset + i, d)} locked={win} />
      </React.Fragment>
    ));

  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {EQUATIONS.map((e) => (
            <button key={e.id} onClick={() => pick(e)} className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold text-white ${e.id === eq.id ? 'bg-indigo-500' : 'bg-slate-700'} active:scale-95`}>
              {solved.includes(e.id) ? '✅' : e.emoji} {e.title}
            </button>
          ))}
        </div>
        <div className="text-center text-slate-300">Розв'язано: {solved.length}/{EQUATIONS.length} · рекорд {best}</div>

        <div className="flex flex-wrap items-stretch justify-center gap-2 md:gap-3">
          {side(eq.left, 0)}
          <span className="text-4xl text-white self-center">→</span>
          {side(eq.right, nL)}
        </div>

        <div className="bg-slate-800/80 rounded-2xl p-3 text-white">
          <div className="grid" style={{ gridTemplateColumns: 'auto 1fr auto 1fr' }}>
            <div className="text-slate-300 text-sm col-span-4 mb-2">Рахуємо атоми (зліва = справа):</div>
            {els.map((e) => {
              const ok = (L[e] ?? 0) === (R[e] ?? 0);
              return (
                <React.Fragment key={e}>
                  <div className="text-xl font-bold pr-3">{e}</div>
                  <div className="flex items-center gap-1 flex-wrap">{Array.from({ length: Math.min(L[e] ?? 0, 24) }).map((_, i) => <span key={i} className={`w-3 h-3 rounded-full ${ok ? 'bg-green-400' : 'bg-amber-400'}`} />)}<span className="ml-1 tabular-nums">{L[e] ?? 0}</span></div>
                  <div className={`px-3 text-2xl ${ok ? 'text-green-400' : 'text-red-400'}`}>{ok ? '=' : '≠'}</div>
                  <div className="flex items-center gap-1 flex-wrap">{Array.from({ length: Math.min(R[e] ?? 0, 24) }).map((_, i) => <span key={i} className={`w-3 h-3 rounded-full ${ok ? 'bg-green-400' : 'bg-amber-400'}`} />)}<span className="ml-1 tabular-nums">{R[e] ?? 0}</span></div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {win ? (
          <div className="bg-green-900/60 border border-green-400/50 rounded-xl p-4 text-white text-center">
            <div className="text-xl font-bold">🎉 Зрівняно! Атоми не зникли й не з'явилися — закон збереження маси.</div>
            <div className="mt-1">{eq.note}</div>
            <button onClick={nextEq} className="mt-3 px-6 py-3 rounded-xl bg-indigo-500 font-bold text-lg active:scale-95">Наступне ▶</button>
          </div>
        ) : simple ? (
          <div className="bg-amber-900/50 rounded-xl p-3 text-white text-center">Атоми зрівняно, але коефіцієнти можна скоротити — шукаємо найменші числа!</div>
        ) : (
          <div className="text-center text-slate-300">
            {isSolved ? 'Ти вже розв\'язав це — спробуй інше!' : 'Тисни «+» і «−», щоб атомів ліворуч і праворуч було порівну.'}
          </div>
        )}
        <button onClick={() => pick(eq)} className="self-center px-4 py-2 rounded-lg bg-slate-700 text-white active:scale-95">↺ Спочатку</button>
      </div>
    </div>
  );
};
