// 🔬 Дослідити: клади гирі на гойдалку - момент сили = маса × плече.
import React, { useState } from 'react';
import { ActionButton, Chip, LabLayout } from '../shared/ui';
import { MASSES, torque, type Load } from './calc';
import { LeverSim } from './LeverSim';

export const LeverLab: React.FC = () => {
  const [load, setLoad] = useState<Load>(new Map());
  const [mass, setMass] = useState(1);
  const [mode, setMode] = useState<'add' | 'remove'>('add');

  const tap = (slot: number) => {
    const next: Load = new Map(load);
    const cur = [...(next.get(slot) ?? [])];
    if (mode === 'add') {
      if (cur.length >= 3) return;
      cur.push(mass);
    } else cur.pop();
    if (cur.length) next.set(slot, cur);
    else next.delete(slot);
    setLoad(next);
  };

  const L = torque(load, 'L');
  const R = torque(load, 'R');
  const panel = (
    <>
      <div className="flex gap-2 flex-wrap items-center">
        {MASSES.map((m) => (
          <Chip key={m} selected={mass === m && mode === 'add'} onClick={() => { setMass(m); setMode('add'); }}>
            ➕ {m} кг
          </Chip>
        ))}
        <Chip selected={mode === 'remove'} onClick={() => setMode('remove')}>➖ Зняти</Chip>
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        👆 Торкайся місця на балці, щоб покласти вантаж. Цифри на балці — <b>плече</b> (відстань до опори).
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
        <div className="font-bold mb-1">Моменти сил</div>
        <div>Ліворуч: <b>{L}</b> кг·од</div>
        <div>Праворуч: <b>{R}</b> кг·од</div>
        <div className="mt-1 text-indigo-200">{L === R ? (L > 0 ? 'Рівні — гойдалка в рівновазі!' : 'Поклади вантажі.') : L > R ? 'Ліворуч важче' : 'Праворуч важче'}</div>
      </div>
      <ActionButton onClick={() => setLoad(new Map())} variant="secondary">↺ Прибрати все</ActionButton>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100">
        💡 Гирі 2 кг на плечі 3 дорівнюють гирі 3 кг на плечі 2: <b>2·3 = 3·2</b>. Легкий вантаж далеко врівноважує важкий близько!
      </div>
    </>
  );
  return <LabLayout scene={<LeverSim load={load} editable="both" onTap={tap} />} panel={panel} />;
};
