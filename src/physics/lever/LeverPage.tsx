// Сторінка «Важіль-гойдалка»: 🔬 лабораторія · 🎯 терези · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { LeverLab } from './LeverLab';
import { BalanceGame } from './BalanceGame';
import { FACTS, QUIZ } from './content';

const LeverPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <LeverLab /> },
      { id: 'game', icon: '🎯', label: 'Терези', content: <BalanceGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default LeverPage;
