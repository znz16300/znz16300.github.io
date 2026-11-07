// «Скринька добра»: випадкова добра справа, комплімент або хвилинка руху. Нікуди нічого не записується.
import React, { useState } from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { COMPLIMENTS, GOOD_DEEDS, MOVES } from './ideas';

const pick = (list: string[], not?: string): string => {
  let v = list[Math.floor(Math.random() * list.length)];
  if (list.length > 1) while (v === not) v = list[Math.floor(Math.random() * list.length)];
  return v;
};

const RandomCard: React.FC<{ list: string[]; emoji: string; gradient: string; button: string }> = ({ list, emoji, gradient, button }) => {
  const [text, setText] = useState<string | null>(null);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-4 text-white text-center overflow-auto">
      <div className={`w-full max-w-3xl rounded-3xl bg-gradient-to-br ${gradient} shadow-2xl p-6 md:p-10 flex flex-col items-center gap-4 min-h-[16rem] justify-center`}>
        <div className="text-7xl">{emoji}</div>
        <p className="text-2xl md:text-4xl font-bold leading-snug">{text ?? 'Натисни кнопку — і отримаєш ідею!'}</p>
      </div>
      <button onClick={() => setText(pick(list, text ?? undefined))} className="px-8 py-4 rounded-2xl bg-white/20 hover:bg-white/30 text-xl font-bold active:scale-95">
        {text ? '🔀 Інша ідея' : button}
      </button>
    </div>
  );
};

const KindnessPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'deed', icon: '💛', label: 'Добра справа', content: <RandomCard list={GOOD_DEEDS} emoji="💛" gradient="from-amber-500 to-orange-600" button="🎁 Отримати добру справу" /> },
      { id: 'compliment', icon: '🌟', label: 'Комплімент', content: <RandomCard list={COMPLIMENTS} emoji="🌟" gradient="from-pink-500 to-rose-600" button="💌 Отримати комплімент" /> },
      { id: 'move', icon: '🤸', label: 'Хвилинка руху', content: <RandomCard list={MOVES} emoji="🤸" gradient="from-teal-500 to-emerald-600" button="⚡ Отримати вправу" /> },
    ]}
  />
);

export default KindnessPage;
