// Реєстр розділу «Цікаві факти». Автоматично підхоплює кожну папку src/fun/facts/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const factsSection = createSection({ id: 'facts', base: '/kiosk/games/facts', title: 'Цікаві факти', icon: '💡' }, modules);
