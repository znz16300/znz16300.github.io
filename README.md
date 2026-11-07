# Сайт Куликівського ліцею

React 18 + Vite + TypeScript + Tailwind (shadcn/ui). Хостинг — GitHub Pages.

```sh
npm i
npm run dev            # http://localhost:8080
npm run theme:preview  # порівняння палітр: http://localhost:8080/theme-preview
npm run typecheck      # перевірка типів
npm run lint
npm run deploy         # typecheck → build → 404.html → gh-pages
```

## Тема оформлення

Усе — у `src/theme/`. Детально: [src/theme/README.md](src/theme/README.md).

- **Обрати палітру перед деплоєм:** `palette` у `src/theme/theme.config.ts`
  (`classic`, `ocean`, `forest`, `ukraine`, `violet`), або без правки файлу:
  `VITE_THEME_PALETTE=forest npm run deploy`.
- Режим за замовчуванням (`light` / `dark` / `system`), перемикач у футері, тема кіоску — там само.

## Структура

```
src/
  App.tsx, main.tsx, routes.tsx   — провайдери та всі маршрути (кожна сторінка вантажиться окремо)
  constants.ts                    — адреси серверів, ID таблиць, publicUrl()
  theme/                          — палітри, ThemeProvider, перемикач, /theme-preview
  api/                            — запити до даних (http.ts — обгортка над fetch)
  components/                     — спільні компоненти (Navbar, Footer, header, ui/ — shadcn)
  pages/
    Index, News, Announce, ...    — сторінки сайту
    Schedule/                     — розклад, заміни, ПЗ (XML розкладу — public/data/timetable.xml)
    Kiosk/                        — сенсорний кіоск
      kiosk_data.tsx              — меню кіоску
      psycho-media.json           — пам'ятки й відео психологічної служби
      kulikivka-data.json         — розділи «Громада» та «Цікаві факти»
  games/  physics/  fun/          — розділи кіоску з автоматичним реєстром (див. README у кожному)
public/
  data/timetable.xml              — експорт aSc Timetables (замініть файл, щоб оновити розклад)
  assets/                         — зображення, відео, json
```

## Як додати…

- **Пам'ятку чи відео психолога** — об'єкт у `src/pages/Kiosk/psycho-media.json` + файл у `public/assets/…/kiosk/`.
- **Сторінку громади / факти** — розділ у `kulikivka-data.json` + рядок у `gromadaRoutes` в `routes.tsx`.
- **Гру / сторінку фізики / квіз** — нова папка за інструкцією в `src/games|physics|fun/README.md`, маршрути не чіпати.
- **Нову сторінку сайту** — `const X = lazy(() => import('./pages/X'))` і `<Route>` у `routes.tsx`.
