// Реєстр ігор. Автоматично підхоплює кожну папку src/games/<id>/index.ts —
// додавати гру в цей файл вручну НЕ потрібно.
import type { GameDefinition } from './types';

const modules = import.meta.glob<{ default: GameDefinition }>('./*/index.ts', { eager: true });

export const games: GameDefinition[] = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.title.localeCompare(b.title, 'uk'));

export const findGame = (id?: string): GameDefinition | undefined => games.find((g) => g.id === id);
