// Реєстр розділу «Цікава мова». Автоматично підхоплює кожну папку src/fun/language/<id>/index.ts -
// додавати сторінку сюди чи в роутер вручну НЕ потрібно.
import { createSection } from '../createSection';
import type { FunPageDefinition } from '../types';

const modules = import.meta.glob<{ default: FunPageDefinition }>('./*/index.ts', { eager: true });

export const languageSection = createSection({ id: 'language', base: '/kiosk/games/language', title: 'Цікава мова', icon: '📝' }, modules);
