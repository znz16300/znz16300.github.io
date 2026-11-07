import type { FunPageDefinition, FunSection } from './types';

// Збирає розділ зі сторінок, знайдених import.meta.glob у реєстрі розділу (кожна папка з index.ts).
export const createSection = (
  cfg: Omit<FunSection, 'pages'>,
  modules: Record<string, { default: FunPageDefinition }>
): FunSection => ({
  ...cfg,
  pages: Object.values(modules)
    .map((m) => m.default)
    .filter(Boolean)
    .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.title.localeCompare(b.title, 'uk')),
});
