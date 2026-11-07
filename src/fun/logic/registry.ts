// Реєстр розділу «Логічні задачі». Автоматично підхоплює кожну папку src/fun/logic/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const logicSection = createSection({ id: 'logic', base: '/kiosk/games/logic', title: 'Логічні задачі', icon: '🧠' }, modules);
