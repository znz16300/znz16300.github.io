// 🃏 Мемо: відкривай картки й знаходь пари «речовина — формула».
import React, { useEffect, useState } from 'react';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { shuffled } from '../../shared/seed';
import { THINGS } from './data';

interface Card { key: string; pair: string; text: string; sub?: string }
const PAIRS = 8;
const make = (): Card[] =>
  shuffled(
    shuffled(THINGS).slice(0, PAIRS).flatMap((t) => [
      { key: t.id + 'n', pair: t.id, text: t.emoji, sub: t.name },
      { key: t.id + 'f', pair: t.id, text: t.formula },
    ])
  );

export const Memory: React.FC = () => {
  const [best, submit] = useBest('chem-home-memory');
  const [cards, setCards] = useState(make);
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [rec, setRec] = useState(false);
  const done = matched.length === PAIRS;

  useEffect(() => {
    if (open.length !== 2) return;
    const [a, b] = open.map((k) => cards.find((c) => c.key === k)!);
    const ok = a.pair === b.pair;
    const t = setTimeout(() => {
      if (ok) setMatched((m) => [...m, a.pair]);
      setOpen([]);
    }, ok ? 450 : 900);
    playBeep(ok);
    return () => clearTimeout(t);
  }, [open, cards]);

  useEffect(() => {
    if (done) setRec(submit(Math.max(10, 120 - moves * 5)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const flip = (c: Card) => {
    if (open.length >= 2 || open.includes(c.key) || matched.includes(c.pair)) return;
    unlockAudio();
    setOpen([...open, c.key]);
    if (open.length === 1) setMoves((m) => m + 1);
  };
  const restart = () => { setCards(make()); setOpen([]); setMatched([]); setMoves(0); setRec(false); };

  return (
    <div className="h-full overflow-y-auto p-3 md:p-4 flex flex-col items-center gap-3">
      <div className="text-slate-300">Ходів: {moves} · знайдено пар: {matched.length}/{PAIRS} · рекорд {best}</div>
      <div className="grid grid-cols-4 gap-2 md:gap-3 w-full max-w-2xl">
        {cards.map((c) => {
          const shown = open.includes(c.key) || matched.includes(c.pair);
          return (
            <button key={c.key} onClick={() => flip(c)} aria-label={shown ? c.text : 'картка'} className={`aspect-[4/3] rounded-xl flex flex-col items-center justify-center font-bold text-white transition active:scale-95 ${matched.includes(c.pair) ? 'bg-green-700/70' : shown ? 'bg-indigo-600' : 'bg-slate-700'}`}>
              {shown ? (
                <>
                  <span className={c.sub ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl'}>{c.text}</span>
                  {c.sub && <span className="text-[10px] md:text-sm font-semibold leading-tight px-1 text-center">{c.sub}</span>}
                </>
              ) : (
                <span className="text-3xl md:text-4xl">⚗️</span>
              )}
            </button>
          );
        })}
      </div>
      {done && (
        <div className="bg-green-900/60 rounded-xl p-4 text-white text-center">
          <div className="text-xl font-bold">🎉 Усі пари знайдено за {moves} ходів!{rec ? ' 🏆 Новий рекорд!' : ''}</div>
        </div>
      )}
      <button onClick={restart} className="px-5 py-2 rounded-xl bg-slate-700 text-white font-bold active:scale-95">🔁 Нова гра</button>
    </div>
  );
};
