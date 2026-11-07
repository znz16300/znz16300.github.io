// 🔬 Лабораторія швидкості реакцій: температура, концентрація, каталізатор.
import React, { useState } from 'react';
import { BigSlider } from '../../../physics/shared/BigSlider';
import { ActionButton, Chip, LabLayout, StatBox } from '../../../physics/shared/ui';
import { RatesSim } from './RatesSim';

export const RatesLab: React.FC = () => {
  const [temp, setTemp] = useState(0.4);
  const [conc, setConc] = useState(20);
  const [cat, setCat] = useState(false);
  const [run, setRun] = useState(0);
  const [info, setInfo] = useState({ t: 0, n: 0 });

  const running = run > 0;
  const panel = (
    <>
      <BigSlider label="🌡️ Температура" value={Math.round(temp * 100)} min={0} max={100} step={10} unit="%" onChange={(v) => { setTemp(v / 100); setRun(0); }} />
      <BigSlider label="🧫 Кількість частинок A і B" value={conc} min={8} max={40} step={4} onChange={(v) => { setConc(v); setRun(0); }} />
      <div className="flex gap-2">
        <Chip selected={cat} onClick={() => { setCat(!cat); setRun(0); }}>⚡ Каталізатор {cat ? 'є' : 'нема'}</Chip>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <StatBox label="Час, с" value={info.t.toFixed(1).replace('.', ',')} />
        <StatBox label="Продукту C" value={info.n} hint={`із ${conc}`} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <ActionButton onClick={() => { setInfo({ t: 0, n: 0 }); setRun((r) => r + 1); }}>▶ Запустити реакцію</ActionButton>
        <ActionButton onClick={() => { setRun(0); setInfo({ t: 0, n: 0 }); }} variant="secondary">↺ Стоп</ActionButton>
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-sm md:text-base">
        Частинки реагують, лише якщо вдарилися достатньо сильно. Спробуй: ↑ температура — швидше й сильніше; ↑ частинок — частіші зіткнення; каталізатор — знижує поріг.
      </div>
    </>
  );
  return <LabLayout scene={<RatesSim temp={temp} conc={conc} cat={cat} runId={run} onTick={(t, n) => running && setInfo({ t, n })} />} panel={panel} />;
};
