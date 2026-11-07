// «Періодична система»: таблиця · гра · факти · тест.
import React from 'react';
import { Lesson } from '../../../physics/shared/Lesson';
import { FactCards } from '../../../physics/shared/FactCards';
import { TopicQuiz } from '../../shared/TopicQuiz';
import { PeriodTable } from './PeriodTable';
import { GuessGame } from './GuessGame';
import { QUESTIONS } from './questions';

const FACTS = [
  { emoji: '📜', title: 'Таблиця з «передбаченнями»', text: 'У 1869 році Менделєєв залишив у таблиці порожні клітинки та передбачив властивості ще не відкритих елементів. Згодом їх знайшли — Галій, Скандій, Германій — і властивості збіглися!' },
  { emoji: '🔢', title: 'Кількість протонів', text: 'Номер елемента — це кількість протонів у ядрі його атома. Саме вона визначає, що це за елемент.' },
  { emoji: '💎', title: 'Природних лише ~90', text: 'У природі зустрічається близько 90 елементів, решту створили вчені в лабораторіях за допомогою прискорювачів.' },
  { emoji: '🧂', title: 'Назви з Латини', text: 'Символи Au, Ag, Fe, Na, K, Hg походять від латинських назв: aurum, argentum, ferrum, natrium, kalium, hydrargyrum.' },
  { emoji: '🌌', title: 'Зорі — фабрики елементів', text: 'Водень і гелій виникли після Великого вибуху, а більшість важчих елементів — усередині зір та під час їхніх вибухів. Ми складаємося із «зоряного пилу».' },
  { emoji: '👨‍🔬', title: 'Імена в таблиці', text: 'Елементи названі на честь учених: Ейнштейній, Менделєвій, Кюрій, Резерфордій, Коперницій, Рентгеній.' },
];

const PeriodicPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'table', icon: '🧪', label: 'Таблиця', content: <PeriodTable /> },
      { id: 'game', icon: '🎯', label: 'Вгадай елемент', content: <GuessGame /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz', icon: '✅', label: 'Перевір себе', content: <TopicQuiz bank={QUESTIONS} perRound={8} /> },
    ]}
  />
);

export default PeriodicPage;
