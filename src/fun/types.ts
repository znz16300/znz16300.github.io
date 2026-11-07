// Уніфікований опис сторінки розділів «Ігри та тести» (Квіз дня, Загадка тижня, Цікаві факти тощо).
// Кожна сторінка лежить у власній папці src/fun/<розділ>/<id>/ і має index.ts з default-експортом defineFunPage({...}).
import type { ComponentType } from 'react';

export interface FunPageDefinition {
  /** Унікальний id латиницею. Потрапляє в URL: <base розділу>/<id> */
  id: string;
  /** Назва на плитці та в заголовку */
  title: string;
  /** Емодзі на плитці */
  icon: string;
  /** Колір плитки: blue | purple | green | orange | red | teal | indigo | pink */
  color?: string;
  /** Порядок у меню (менше - раніше). За замовчуванням 100 */
  order?: number;
  /** React-компонент сторінки (default-експорт файлу). Займає всю доступну область */
  component: ComponentType;
}

export interface FunSection {
  id: string;
  /** Адреса розділу, на яку вже веде плитка в «Ігри та тести» */
  base: string;
  title: string;
  icon: string;
  pages: FunPageDefinition[];
}

export const defineFunPage = (page: FunPageDefinition): FunPageDefinition => page;
