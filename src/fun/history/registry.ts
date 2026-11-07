// Реєстр розділу «Історія України». Автоматично підхоплює кожну папку src/fun/history/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const historySection = createSection({ id: 'history', base: '/kiosk/games/history', title: 'Історія України', icon: '🇺🇦' }, modules);
