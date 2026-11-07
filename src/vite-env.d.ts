/// <reference types="vite/client" />

/** Активна палітра (аліас у vite.config.ts → src/theme/palettes/<palette>.css) */
declare module '@active-palette';

interface ImportMetaEnv {
  /** Перевизначає palette з src/theme/theme.config.ts під час збірки */
  readonly VITE_THEME_PALETTE?: string;
  /** Перевизначає defaultMode: light | dark | system */
  readonly VITE_THEME_MODE?: string;
  /** 'true' — зробити сторінку /theme-preview доступною і в продакшн-збірці */
  readonly VITE_THEME_PREVIEW?: string;
}
