// Сторінки «Куликівська громада» та «Цікаві факти» кіоску. Дані — у kulikivka-data.json;
// JSON (≈60 КБ) потрапляє в окремий файл і завантажується лише при відкритті цих сторінок.
import { UniversalKiosk } from './UniversalKiosk';
import type { KioskData } from './kiosk-types';
import kioskData from './kulikivka-data.json';

const data = kioskData as unknown as KioskData;

export default function GromadaKiosk({ section }: { section: string }) {
  const config = data[section];
  if (!config) return <div className="p-8 text-center">Розділ «{section}» не знайдено в kulikivka-data.json</div>;
  return <UniversalKiosk config={config} />;
}
