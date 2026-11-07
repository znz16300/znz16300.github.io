import type { PaletteId } from './theme.config';

/** Підписи й «зразки кольору» палітр для перемикача та сторінки /theme-preview. */
export const PALETTE_META: Record<PaletteId, { label: string; swatch: [string, string] }> = {
  classic: { label: 'Класична', swatch: ['#2563eb', '#059669'] },
  ocean: { label: 'Океан', swatch: ['#0284c7', '#4f46e5'] },
  forest: { label: 'Ліс', swatch: ['#16a34a', '#d97706'] },
  ukraine: { label: 'Україна', swatch: ['#0057b7', '#ffd500'] },
  violet: { label: 'Фіалка', swatch: ['#7c3aed', '#db2777'] },
};
