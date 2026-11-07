// Розділи «Ігри та тести» з автоматичними сторінками. Маршрути в routes.tsx будуються з цього списку.
import { quizSection } from './quiz/registry';
import { riddleSection } from './riddle/registry';
import { factsSection } from './facts/registry';
import { languageSection } from './language/registry';
import { historySection } from './history/registry';
import { moodSection } from './mood/registry';
import { logicSection } from './logic/registry';
import { chemistrySection } from './chemistry/registry';

export const funSections = [
  quizSection,
  riddleSection,
  factsSection,
  languageSection,
  historySection,
  moodSection,
  logicSection,
  chemistrySection,
];
