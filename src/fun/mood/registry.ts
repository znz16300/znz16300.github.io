// Реєстр розділу «Тест настрою». Автоматично підхоплює кожну папку src/fun/mood/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const moodSection = createSection({ id: 'mood', base: '/kiosk/games/mood', title: 'Тест настрою', icon: '😊' }, modules);
