// 🔬 Дослідити: задай швидкості й відстані - машини їдуть наввипередки. t = s / v.
import React, { useState } from 'react';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, LabLayout } from '../shared/ui';
import { RaceTrack, fmtTime, hoursOf, type Car } from './RaceTrack';

export const SpeedLab: React.FC = () => {
  const [v1, setV1] = useState(60);
  const [v2, setV2] = useState(90);
  const [s1, setS1] = useState(120);
  const [s2, setS2] = useState(120);
  const [run, setRun] = useState(0);

  const cars: [Car, Car] = [
    { emoji: '🚗', label: 'Червона', v: v1, s: s1, color: '#ef4444' },
    { emoji: '🚙', label: 'Синя', v: v2, s: s2, color: '#3b82f6' },
  ];
  const t1 = hoursOf(cars[0]), t2 = hoursOf(cars[1]);
  const winner = Math.abs(t1 - t2) < 0.005 ? 'Нічия!' : t1 < t2 ? '🚗 Червона першою' : '🚙 Синя першою';
  const panel = (
    <>
      <BigSlider label="🚗 Швидкість червоної" value={v1} min={20} max={120} step={10} unit="км/год" onChange={(x) => { setV1(x); setRun(0); }} />
      <BigSlider label="🚗 Відстань червоної" value={s1} min={30} max={240} step={30} unit="км" onChange={(x) => { setS1(x); setRun(0); }} />
      <BigSlider label="🚙 Швидкість синьої" value={v2} min={20} max={120} step={10} unit="км/год" onChange={(x) => { setV2(x); setRun(0); }} />
      <BigSlider label="🚙 Відстань синьої" value={s2} min={30} max={240} step={30} unit="км" onChange={(x) => { setS2(x); setRun(0); }} />
      <div className="bg-slate-800/80 rounded-xl p-3 text-white">
        <div className="font-bold mb-1">Час = відстань ÷ швидкість</div>
        <div>🚗 {s1} ÷ {v1} = <b>{fmtTime(t1)}</b></div>
        <div>🚙 {s2} ÷ {v2} = <b>{fmtTime(t2)}</b></div>
        {run > 0 && <div className="mt-1 text-amber-200">{winner}</div>}
      </div>
      <ActionButton onClick={() => setRun((r) => r + 1)}>🏁 Старт!</ActionButton>
    </>
  );
  return <LabLayout scene={<RaceTrack cars={cars} runId={run} />} panel={panel} />;
};
