// 🔬 Дослідити: крути температуру - дивись, як поводяться частинки.
import React, { useState } from 'react';
import { BigSlider } from '../shared/BigSlider';
import { Chip, LabLayout } from '../shared/ui';
import { StatesSim, stateOf } from './StatesSim';

const TEXT = {
  ice: 'Лід: частинки стоять на місцях у «ґратці» й лише тремтять. Тому лід має форму.',
  water: 'Вода: частинки ковзають одна повз одну, але тримаються разом. Тому вода тече й набуває форми посудини.',
  steam: 'Пара: частинки літають швидко й далеко одна від одної. Пара заповнює весь об\'єм.',
};

export const StatesLab: React.FC = () => {
  const [t, setT] = useState(-10);
  const s = stateOf(t);
  const panel = (
    <>
      <BigSlider label="Температура" value={t} min={-20} max={120} step={1} unit="°C" onChange={setT} />
      <div className="flex gap-2 flex-wrap">
        <Chip selected={s === 'ice'} onClick={() => setT(-10)}>🧊 Лід</Chip>
        <Chip selected={s === 'water'} onClick={() => setT(50)}>💧 Вода</Chip>
        <Chip selected={s === 'steam'} onClick={() => setT(110)}>☁️ Пара</Chip>
      </div>
      <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">{TEXT[s]}</div>
      <div className="bg-amber-900/40 border border-amber-400/40 rounded-xl p-3 text-amber-100">
        🔎 Вода замерзає при 0 °C і кипить при 100 °C. Проскануй повзунком ці межі!
      </div>
    </>
  );
  return <LabLayout scene={<StatesSim temp={t} />} panel={panel} />;
};
