// 🧪 Нейтралізація: у воду крапаємо кислоту або луг і повертаємо pH до 7.
import React, { useState } from 'react';
import { ActionButton } from '../../../physics/shared/ui';
import { Beaker } from './Beaker';

export const Neutralize: React.FC = () => {
  const [n, setN] = useState(0); // «надлишок» кислоти (+) або лугу (−)
  const [log, setLog] = useState('Склянка з чистою водою. Крапни кислоти чи лугу!');
  const ph = Math.max(0, Math.min(14, 7 - n * 1.2));
  const add = (d: number) => {
    const m = Math.max(-5, Math.min(5, n + d));
    setN(m);
    setLog(m === 0 ? '🎉 Нейтралізація! Кислота й луг взаємно знищили дію одне одного: утворилися вода й сіль.' : d > 0 ? '🍋 Додали кислоти — pH знизився.' : '🧼 Додали лугу — pH підвищився.');
  };
  return (
    <div className="h-full overflow-y-auto p-3 md:p-4">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
        <Beaker ph={ph} level={0.55 + Math.abs(n) * 0.01} label={`pH ≈ ${ph.toFixed(1).replace('.', ',')}`} />
        <div className="grid grid-cols-2 gap-3 w-full">
          <ActionButton onClick={() => add(1)} variant="warn">💧 + кислота</ActionButton>
          <ActionButton onClick={() => add(-1)}>💧 + луг</ActionButton>
        </div>
        <ActionButton onClick={() => { setN(0); setLog('Склянка з чистою водою.'); }} variant="secondary">↺ Чиста вода</ActionButton>
        <div className="bg-slate-800/80 rounded-xl p-3 text-white text-center w-full">{log}</div>
        <div className="text-slate-300 text-sm text-center">Так діє сода від печії: вона нейтралізує зайву кислоту в шлунку.</div>
      </div>
    </div>
  );
};
