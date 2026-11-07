// Сторінка «Грім і блискавка»: 🔬 лабораторія · 🎯 гра · 💡 факти · ✅ тест.
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';
import { StormLab } from './StormLab';
import { GuessChallenge } from './GuessChallenge';
import { FACTS, QUIZ } from './content';

const ThunderPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab', icon: '🔬', label: 'Дослідити', content: <StormLab /> },
      { id: 'game', icon: '🎯', label: 'Виклик', content: <GuessChallenge /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);

export default ThunderPage;
