// Уніфікований опис сторінки розділу «Фізика навколо нас».
// Кожна сторінка лежить у власній папці src/physics/<id>/ і має index.ts з default-експортом definePhysicsPage({...}).
import type { ComponentType } from 'react';

export interface PhysicsPageDefinition {
  /** Унікальний id латиницею (без пробілів). Потрапляє в URL: /kiosk/games/physics/<id> */
  id: string;
  /** Назва на плитці та в заголовку */
  title: string;
  /** Емодзі на плитці */
  icon: string;
  /** Колір плитки: blue | purple | green | orange | red | teal | indigo | pink */
  color?: string;
  /** Порядок у меню (менше - раніше). За замовчуванням 100 */
  order?: number;
  /** React-компонент сторінки. Займає всю доступну область (width/height: 100%) */
  component: ComponentType;
}

export const definePhysicsPage = (page: PhysicsPageDefinition): PhysicsPageDefinition => page;
