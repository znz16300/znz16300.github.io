// Сторінка порівняння палітр: /theme-preview (доступна лише в `npm run dev`).
// Показує кожну палітру у світлому й темному режимі на типових елементах сайту,
// щоб обрати, яку вписати в theme.config.ts перед деплоєм.
import { useState } from 'react';
import { Bell, Calendar, FileText, GraduationCap } from 'lucide-react';
import { PALETTES, type PaletteId } from './theme.config';
import { PALETTE_META } from './palettes';
import { config, useTheme } from './ThemeProvider';

// Для порівняння потрібні всі палітри одразу (у продакшн-бандл ця сторінка не потрапляє)
import.meta.glob('./palettes/*.css', { eager: true });

function Sample({ id, dark }: { id: PaletteId; dark: boolean }) {
  return (
    <div data-palette={id} className={dark ? 'dark' : undefined}>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100">
        {/* навбар */}
        <div className="flex items-center gap-2 bg-white px-4 py-3 shadow-sm dark:bg-gray-900">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold">Куликівський ліцей</span>
          <span className="ml-auto text-sm text-brand-600 dark:text-brand-400">Новини</span>
        </div>
        {/* шапка сторінки (Header) */}
        <div className="bg-brand2-600 px-4 py-4 text-white dark:bg-brand2-800">
          <div className="text-xs text-brand2-100">← Повернутися на головну</div>
          <div className="text-lg font-bold">Документи</div>
        </div>
        {/* контент */}
        <div className="space-y-3 bg-gray-50 p-4 dark:bg-gray-950">
          <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <Bell className="h-4 w-4 text-brand-600 dark:text-brand-400" /> Оголошення
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Звичайна картка з текстом, рамкою та іконкою.
            </p>
          </div>
          {/* блок без dark:-класів — перевірка автоматичної темної теми */}
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-800">
              <Calendar className="h-4 w-4 text-brand-600" /> Розклад (без dark:-класів)
            </div>
            <div className="flex gap-2 text-xs">
              <span className="rounded bg-green-100 px-2 py-0.5 text-green-800">заміна</span>
              <span className="rounded bg-amber-100 px-2 py-0.5 text-amber-800">перенос</span>
              <span className="rounded bg-brand-50 px-2 py-0.5 text-brand-700">урок</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400 dark:text-gray-950">
              Основна
            </button>
            <button className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
              shadcn primary
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
              <FileText className="mr-1 inline h-4 w-4" />
              Другорядна
            </button>
          </div>
        </div>
        {/* футер */}
        <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 px-4 py-3 text-sm text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 dark:text-gray-300">
          Футер
        </div>
      </div>
    </div>
  );
}

export default function ThemePreviewPage() {
  const { palette, setPalette } = useTheme();
  const [copied, setCopied] = useState<PaletteId | null>(null);

  const copy = (id: PaletteId) => {
    navigator.clipboard?.writeText(`palette: '${id}',`);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-gray-900">Палітри сайту</h1>
        <p className="mt-1 text-gray-600">
          Зараз у збірці: <b>{config.palette}</b>. Щоб змінити — відредагуйте <code>palette</code> у{' '}
          <code>src/theme/theme.config.ts</code> або зберіть з <code>VITE_THEME_PALETTE=&lt;назва&gt;</code>.
        </p>

        <div className="mt-6 space-y-8">
          {PALETTES.map((id) => (
            <section key={id}>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span
                  className="h-5 w-5 rounded-full"
                  style={{ background: `linear-gradient(135deg, ${PALETTE_META[id].swatch[0]} 50%, ${PALETTE_META[id].swatch[1]} 50%)` }}
                />
                <h2 className="text-lg font-semibold text-gray-900">
                  {PALETTE_META[id].label} <code className="text-sm text-gray-500">'{id}'</code>
                </h2>
                {id === config.palette && (
                  <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs text-brand-800">у збірці</span>
                )}
                <button onClick={() => copy(id)} className="ml-auto rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700">
                  {copied === id ? 'Скопійовано' : 'Копіювати рядок конфігу'}
                </button>
                <button
                  onClick={() => setPalette(id)}
                  disabled={palette === id}
                  className="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 disabled:opacity-50"
                >
                  {palette === id ? 'Застосовано' : 'Застосувати до сайту (лише в цьому браузері)'}
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Sample id={id} dark={false} />
                <Sample id={id} dark />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
