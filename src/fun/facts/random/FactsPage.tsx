// «Цікаві факти»: картки за категоріями (або всі разом, кожного разу в іншому порядку).
import React, { useMemo, useState } from 'react';
import { FactCards } from '../../../physics/shared/FactCards';
import { Chip } from '../../../physics/shared/ui';
import { shuffled } from '../../shared/seed';
import { CATEGORIES, FACTS, type FactCategory } from './facts';

const FactsPage: React.FC = () => {
  const [cat, setCat] = useState<FactCategory | 'all'>('all');
  const [round, setRound] = useState(0);

  const facts = useMemo(() => {
    const list = cat === 'all' ? FACTS : FACTS.filter((f) => f.cat === cat);
    return shuffled(list);
    // round змінюється кнопкою «Перемішати»
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, round]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="shrink-0 flex gap-2 px-2 pt-2 md:px-4 md:pt-3 overflow-x-auto">
        <Chip selected={cat === 'all'} onClick={() => setCat('all')}>
          🎲 Усі
        </Chip>
        {CATEGORIES.map((c) => (
          <Chip key={c.id} selected={cat === c.id} onClick={() => setCat(c.id)}>
            {c.icon} {c.label}
          </Chip>
        ))}
        <Chip selected={false} onClick={() => setRound((r) => r + 1)}>
          🔀 Перемішати
        </Chip>
      </div>
      <div className="flex-1 min-h-0">
        <FactCards key={`${cat}-${round}`} facts={facts} />
      </div>
    </div>
  );
};

export default FactsPage;
