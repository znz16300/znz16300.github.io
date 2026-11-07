// Сторінка «Гравітація на планетах»: 🔬 лабораторія · 🎯 гра · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { GravityLab } from './GravityLab';
import { ThrowChallenge } from './ThrowChallenge';
import { FACTS, QUIZ } from './content';

const GravityPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <GravityLab /> },
      { id: 'game', icon: '🎯', label: 'Виклик', content: <ThrowChallenge /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default GravityPage;
