// Уніфікований опис гри для кіоску.
// Кожна гра лежить у власній папці src/games/<id>/ і має файл index.ts з default-експортом defineGame({...}).
import type { ComponentType } from 'react';

export interface GameDefinition {
  /** Унікальний id латиницею (без пробілів). Потрапляє в URL: /kiosk/games/play/<id> */
  id: string;
  /** Назва на плитці та в заголовку */
  title: string;
  /** Емодзі на плитці */
  icon: string;
  /** Колір плитки: blue | purple | green | orange | red | teal | indigo | pink */
  color?: string;
  /** Порядок у меню (менше - раніше). За замовчуванням 100 */
  order?: number;
  /** React-компонент гри. Займає всю доступну область (width/height: 100%) */
  component: ComponentType;
}

export const defineGame = (game: GameDefinition): GameDefinition => game;
