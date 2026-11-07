// Сторінка «Маятник і час»: 🔬 лабораторія · 🎯 гра · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { PendulumLab } from './PendulumLab';
import { TuneChallenge } from './TuneChallenge';
import { FACTS, QUIZ } from './content';

const PendulumPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <PendulumLab /> },
      { id: 'game', icon: '🎯', label: 'Налаштуй', content: <TuneChallenge /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default PendulumPage;
