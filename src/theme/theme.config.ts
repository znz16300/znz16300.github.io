// ============================================================
//  НАЛАШТУВАННЯ ТЕМИ САЙТУ — змінюйте тут перед деплоєм.
// ============================================================
//
//  palette      — яка таблиця стилів (палітра) з src/theme/palettes/ іде в збірку.
//                 Доступні: 'classic' | 'ocean' | 'forest' | 'ukraine' | 'violet'
//                 Нова палітра = новий файл src/theme/palettes/<назва>.css (див. README.md).
//  defaultMode  — режим для нового відвідувача: 'light' | 'dark' | 'system' (як в ОС).
//  allowUserToggle  — показувати перемикач світла/темна у футері.
//  allowUserPalette — дозволити відвідувачу обирати палітру (інші палітри
//                 підвантажуються лише за потреби, у основний бандл не потрапляють).
//  kioskMode    — тема для сторінок кіоску (/kiosk…, /mainmenu):
//                 'light' | 'dark' — завжди цей режим; 'site' — як на решті сайту.
//
//  Можна не правити файл, а перевизначити змінними середовища під час збірки:
//    VITE_THEME_PALETTE=forest VITE_THEME_MODE=dark npm run deploy
//
//  Переглянути всі палітри наживо: npm run dev → http://localhost:8080/theme-preview
// ============================================================

export type ThemeMode = 'light' | 'dark' | 'system';

export const PALETTES = ['classic', 'ocean', 'forest', 'ukraine', 'violet'] as const;
export type PaletteId = (typeof PALETTES)[number];

export interface ThemeConfig {
  palette: PaletteId;
  defaultMode: ThemeMode;
  allowUserToggle: boolean;
  allowUserPalette: boolean;
  kioskMode: 'light' | 'dark' | 'site';
}

export const themeConfig: ThemeConfig = {
  palette: 'classic',
  defaultMode: 'system',
  allowUserToggle: true,
  allowUserPalette: false,
  kioskMode: 'light',
};

/** Ключі localStorage (той самий 'theme', що й раніше, — збережений вибір відвідувачів не загубиться). */
export const STORAGE_KEYS = { mode: 'theme', palette: 'theme-palette' } as const;

/** Підставляє VITE_THEME_* поверх themeConfig. Використовується і в vite.config.ts, і в застосунку. */
export function resolveThemeConfig(env: Record<string, string | boolean | undefined>): ThemeConfig {
  const palette = String(env.VITE_THEME_PALETTE ?? '');
  const mode = String(env.VITE_THEME_MODE ?? '');
  return {
    ...themeConfig,
    palette: (PALETTES as readonly string[]).includes(palette) ? (palette as PaletteId) : themeConfig.palette,
    defaultMode: ['light', 'dark', 'system'].includes(mode) ? (mode as ThemeMode) : themeConfig.defaultMode,
  };
}
