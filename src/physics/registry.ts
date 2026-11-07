// Реєстр сторінок «Фізики». Автоматично підхоплює кожну папку src/physics/<id>/index.ts —
// додавати сторінку в цей файл вручну НЕ потрібно.
// (Папка shared/ не має index.ts, тому в реєстр не потрапляє.)
import type { PhysicsPageDefinition } from './types';

const modules = import.meta.glob<{ default: PhysicsPageDefinition }>('./*/index.ts', { eager: true });

export const physicsPages: PhysicsPageDefinition[] = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.title.localeCompare(b.title, 'uk'));

export const findPhysicsPage = (id?: string): PhysicsPageDefinition | undefined =>
  physicsPages.find((p) => p.id === id);

/** Базова адреса розділу (на неї вже веде плитка «Фізика навколо нас») */
export const PHYSICS_BASE = '/kiosk/games/physics';
