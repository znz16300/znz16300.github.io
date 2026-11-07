// 🎯 Швидше!: за скільки секунд отримаємо 15 молекул продукту? Підбери умови й запусти.
import React, { useState } from 'react';
import { BigSlider } from '../../../physics/shared/BigSlider';
import { ActionButton, Chip, LabLayout, StatBox } from '../../../physics/shared/ui';
import { useBest } from '../../../physics/shared/useBest';
import { playBeep, unlockAudio } from '../../../physics/shared/sound';
import { RatesSim } from './RatesSim';

const GOAL = 15;
const LIMIT = 40;
const CONC = 24;

export const Race: React.FC = () => {
  const [best, submit] = useBest('chem-rates-race');
  const [temp, setTemp] = useState(0.5);
  const [cat, setCat] = useState(false);
  const [run, setRun] = useState(0);
  const [info, setInfo] = useState({ t: 0, n: 0 });
  const [result, setResult] = useState<null | { t: number; ok: boolean; rec: boolean; score: number }>(null);

  const finish = (t: number, ok: boolean) => {
    const score = ok ? Math.max(1, Math.round(100 - t * 2) - Math.round(temp * 20) - (cat ? 10 : 0) + 20) : 0;
    const rec = ok ? submit(score) : false;
    setResult({ t, ok, rec, score });
    setRun(0);
    playBeep(ok);
  };
  const onTick = (t: number, n: number) => {
    if (run === 0 || result) return;
    setInfo({ t, n });
    if (n >= GOAL) finish(t, true);
    else if (t >= LIMIT) finish(t, false);
  };

  const panel = (
    <>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white">
        Отримай <b>{GOAL}</b> частинок C за якомога менший час (ліміт {LIMIT} с). Але гарячіше й з каталізатором — «дорожче» (бали менші)!
      </div>
      <BigSlider label="🌡️ Температура" value={Math.round(temp * 100)} min={0} max={100} step={10} unit="%" onChange={(v) => { setTemp(v / 100); setRun(0); setResult(null); }} />
      <Chip selected={cat} onClick={() => { setCat(!cat); setRun(0); setResult(null); }}>⚡ Каталізатор {cat ? 'є' : 'нема'}</Chip>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Час, с" value={info.t.toFixed(1).replace('.', ',')} />
        <StatBox label="C" value={`${info.n}/${GOAL}`} />
        <StatBox label="Рекорд" value={best} />
      </div>
      <ActionButton onClick={() => { unlockAudio(); setResult(null); setInfo({ t: 0, n: 0 }); setRun((r) => r + 1); }}>▶ Старт</ActionButton>
      {result && (
        <div className={`rounded-xl p-3 text-white ${result.ok ? 'bg-green-900/60' : 'bg-red-900/60'}`}>
          <div className="text-xl font-bold">{result.ok ? `Готово за ${result.t.toFixed(1).replace('.', ',')} с!` : 'Не встигли 😕'}</div>
          <div>{result.ok ? `Бали: ${result.score}${result.rec ? ' · 🏆 новий рекорд!' : ''}` : 'Підніми температуру або додай каталізатор.'}</div>
        </div>
      )}
    </>
  );
  return <LabLayout scene={<RatesSim temp={temp} conc={CONC} cat={cat} runId={run} onTick={onTick} />} panel={panel} />;
};
