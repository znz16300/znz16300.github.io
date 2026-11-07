// Реєстр розділу «Квіз дня». Автоматично підхоплює кожну папку src/fun/quiz/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const quizSection = createSection({ id: 'quiz', base: '/kiosk/games/quiz', title: 'Квіз дня', icon: '❓' }, modules);
