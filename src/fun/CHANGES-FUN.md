# Ігри та тести: наповнення (7 розділів, по 4-5 сторінок у кожному)

Архів розпаковується **поверх** проєкту (корінь - папка `src` поруч із вашим `src`). Нових npm-залежностей немає.

## Нові файли
Уся папка `src/fun/` (див. `src/fun/README.md`). Розділи повторно використовують `src/physics/shared/` (Lesson, FactCards, Chip) -
якщо колись приберете розділ «Фізика», перенесіть ці 3 файли.

## Змінений наявний файл (1 файл): `src/routes.tsx`
Додано 3 рядки імпорту й один блок маршрутів (якщо не хочете перезаписувати файл, внесіть вручну):

1. Перший рядок файлу:
   ```ts
   import { Fragment } from 'react';
   ```
2. Після `import { PhysicsHubPage, PhysicsPage } from './physics';`:
   ```ts
   import { funSections, FunHubPage, FunPage } from './fun';
   ```
3. Після маршруту `/kiosk/games/physics/:pageId`:
   ```tsx
   {funSections.map((section) => (
     <Fragment key={section.id}>
       <Route path={section.base} element={<FunHubPage section={section} />} />
       <Route path={`${section.base}/:pageId`} element={<FunPage section={section} />} />
     </Fragment>
   ))}
   ```

`kiosk_data.tsx` **не змінювався**: плитки вже ведуть на `/kiosk/games/quiz|riddle|facts|language|history|mood|logic`.

## Оновлення (друга частина)
Архів розпаковується поверх проєкту: `src/fun/*` перезаписується, а `src/routes.tsx` - той самий, що й у першій частині (нові сторінки підхоплюються автоматично, у роутері нічого міняти не треба).
