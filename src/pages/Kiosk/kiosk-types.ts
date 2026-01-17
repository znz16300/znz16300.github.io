/* eslint-disable @typescript-eslint/no-explicit-any */
// kiosk-types.ts - типи для універсального кіоску

export type Facilities = FacilityCategory[] | HealthcareFacility[];

export interface KioskButton {
  label: string;
  link: string;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'teal' | 'indigo' | 'pink';
  image?: string; // URL або емодзі
  disabled?: boolean;
}

export interface ContentSection {
  image: any;
  list: any;
  heading?: string;
  content?: string;
  items?: string[];
}

export interface Statistic {
  label: string;
  value: string;
  date?: string;
}

export interface FacilityItem {
  name: string;
  count: number | string;
}

export interface FacilityCategory {
  category: string;
  items: FacilityItem[];
}

export interface Settlement {
  name: string;
  population: number;
  distance: number;
}

export interface District {
  name: string;
  population: number;
  distance?: number;
  settlements: Settlement[];
}

export interface HealthcareFacility {
  name: string;
  count: number;
  icon?: string;
}

// Базові конфігурації для різних типів сторінок
export interface MenuConfig {
  type: 'menu';
  title?: string;
  subtitle?: string;
  buttons: KioskButton[];
}

export interface ContentConfig {
  image: any;
  type: 'content';
  title: string;
  sections?: ContentSection[];
  statistics?: Statistic[];
  facilities?: FacilityCategory[] | HealthcareFacility[];
  districts?: District[];
  totalPopulation?: string;
  centerPopulation?: string;
}

export interface IframeConfig {
  type: 'iframe';
  title?: string;
  url: string;
}

export interface ListItem {
  name: string;
  details: string;
  image?: string; // URL зображення
}

export type PageConfig = MenuConfig | ContentConfig | IframeConfig;

export interface KioskProps {
  config: PageConfig;
}

// Структура JSON файлу з даними
export interface KioskData {
  [key: string]: PageConfig;
}

// Helper type guards
export function isMenuConfig(config: PageConfig): config is MenuConfig {
  return config.type === 'menu';
}

export function isContentConfig(config: PageConfig): config is ContentConfig {
  return config.type === 'content';
}

export function isIframeConfig(config: PageConfig): config is IframeConfig {
  return config.type === 'iframe';
}
