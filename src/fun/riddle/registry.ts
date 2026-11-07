// Реєстр розділу «Загадка тижня». Автоматично підхоплює кожну папку src/fun/riddle/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const riddleSection = createSection({ id: 'riddle', base: '/kiosk/games/riddle', title: 'Загадка тижня', icon: '🧩' }, modules);
