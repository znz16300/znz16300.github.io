// Генерує album.json для папки з малюнками.
//
// Використання (з кореня проєкту):
//   node scripts/make-album.mjs <папка> "Назва пункту меню"
// Приклад:
//   node scripts/make-album.mjs healthy-food "Здорове харчування"
//
// Якщо назву не вказано - береться вже наявна в album.json (або ім'я папки).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [folder, ...titleParts] = process.argv.slice(2);

if (!folder) {
  console.error('Використання: node scripts/make-album.mjs <папка> "Назва пункту меню"');
  process.exit(1);
}

const dir = path.join(root, 'public', 'assets', 'albums', folder);
if (!fs.existsSync(dir)) {
  console.error(`Папку не знайдено: ${dir}`);
  process.exit(1);
}

const jsonPath = path.join(dir, 'album.json');
let title = titleParts.join(' ').trim();
if (!title && fs.existsSync(jsonPath)) {
  try {
    title = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')).title || '';
  } catch {
    /* ignore */
  }
}
if (!title) title = folder;

const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, 'uk', { numeric: true, sensitivity: 'base' }));

fs.writeFileSync(jsonPath, JSON.stringify({ title, files }, null, 2) + '\n', 'utf-8');
console.log(`Готово: ${jsonPath}\nНазва: ${title}\nМалюнків: ${files.length}`);
