// Реєстр розділу «Хімія навколо нас». Автоматично підхоплює кожну папку src/fun/chemistry/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const chemistrySection = createSection({ id: 'chemistry', base: '/kiosk/games/chemistry', title: 'Хімія навколо нас', icon: '⚗️' }, modules);
