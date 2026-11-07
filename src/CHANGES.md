# Фізика навколо нас: що додано

Архів розпаковується **поверх** проєкту (корінь - папка `src` поруч із вашим `src`).

## Нові файли
Уся папка `src/physics/` (розділ, спільні компоненти, 3 сторінки, `README.md` з інструкцією).
Нових npm-залежностей немає.

## Змінений наявний файл (одноразова правка, 1 файл)

`src/routes.tsx` - додано 3 рядки (якщо не хочете перезаписувати файл, внесіть вручну):

1. Імпорт після `import { GamePage, GamesMenuPage } from './games';`:
   ```ts
   import { PhysicsHubPage, PhysicsPage } from './physics';
   ```
2. Маршрути після `<Route path="/kiosk/games/play/:gameId" element={<GamePage />} />`:
   ```tsx
   <Route path="/kiosk/games/physics" element={<PhysicsHubPage />} />
   <Route path="/kiosk/games/physics/:pageId" element={<PhysicsPage />} />
   ```

`kiosk_data.tsx` **не змінювався**: плитка «Фізика навколо нас» вже веде на `/kiosk/games/physics`.
Після цієї правки нові сторінки додаються лише створенням папки в `src/physics/`.
