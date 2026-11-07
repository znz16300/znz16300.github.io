// 🔬 Дослідити: змінюй довжину, масу й розмах. Що впливає на період?
import React, { useState } from 'react';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, LabLayout, fmt } from '../shared/ui';
import { PendulumView, periodOf } from './PendulumView';

export const PendulumLab: React.FC = () => {
  const [length, setLength] = useState(1);
  const [mass, setMass] = useState(1);
  const [amp, setAmp] = useState(20);
  const [reset, setReset] = useState(0);

  const panel = (
    <>
      <BigSlider label="Довжина нитки" value={length} min={0.2} max={3.5} step={0.05} unit="м" format={(v) => fmt(v, 2)} onChange={setLength} />
      <BigSlider label="Маса вантажу" value={mass} min={0.5} max={5} step={0.5} unit="кг" format={(v) => fmt(v, 1)} onChange={setMass} />
      <BigSlider label="Початковий кут" value={amp} min={5} max={40} step={5} unit="°" onChange={setAmp} />
      <ActionButton onClick={() => setReset((r) => r + 1)} variant="secondary">
        ↺ Відхилити знову
      </ActionButton>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">
        <div className="font-bold mb-1">Формула</div>
        <div>T = 2π · √(L ÷ g)</div>
        <div className="mt-1 text-indigo-200">
          = 2π · √({fmt(length, 2)} ÷ 9,81) ≈ <b>{fmt(periodOf(length), 2)} с</b>
        </div>
      </div>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100 text-base">
        💡 Змінюй масу — період <b>не змінюється</b>! А довжину — змінюється: чим довша нитка, тим повільніше хитання.
      </div>
    </>
  );

  return <LabLayout scene={<PendulumView length={length} mass={mass} amplitude={amp} resetKey={reset} />} panel={panel} />;
};
