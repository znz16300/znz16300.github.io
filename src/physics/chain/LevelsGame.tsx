// 🎯 Рівні: збери ланцюг так, щоб задзвонив дзвоник.
import React, { useState } from 'react';
import { Chip } from '../shared/ui';
import { useBest } from '../shared/useBest';
import { Builder } from './Builder';
import { LEVELS } from './levels';

export const Levels: React.FC = () => {
  const [best, submit] = useBest('chain-levels');
  const [idx, setIdx] = useState(0);
  const [solved, setSolved] = useState<string[]>([]);
  const lv = LEVELS[idx];

  const won = () => {
    setSolved((s) => {
      if (s.includes(lv.id)) return s;
      const n = [...s, lv.id];
      submit(n.length);
      return n;
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex gap-2 flex-wrap items-center px-3 pt-2">
        {LEVELS.map((l, i) => (
          <Chip key={l.id} selected={i === idx} onClick={() => setIdx(i)}>
            {solved.includes(l.id) ? '✅' : '🎯'} {i + 1}. {l.title}
          </Chip>
        ))}
        <span className="text-slate-300 text-sm ml-auto">Пройдено: {solved.length}/{LEVELS.length} · рекорд {best}</span>
      </div>
      <div className="flex-1 min-h-0">
        <Builder
          key={lv.id}
          level={lv}
          onWin={won}
          onNext={idx + 1 < LEVELS.length ? () => setIdx(idx + 1) : undefined}
          nextLabel="Наступний рівень ▶"
        />
      </div>
    </div>
  );
};
