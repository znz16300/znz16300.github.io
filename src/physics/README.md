# Фізика навколо нас

Розділ **Ігри та тести → Фізика навколо нас** (`/kiosk/games/physics`). Кожна сторінка лежить у власній папці
`src/physics/<id>/`. Плитки в меню розділу й маршрути будуються **автоматично** з усіх папок, у яких є `index.ts`.
Додавати сторінку в роутер чи меню вручну **не потрібно**.

```
src/physics/
├── types.ts              ← формат опису сторінки (PhysicsPageDefinition, definePhysicsPage)
├── registry.ts           ← автоматично знаходить src/physics/*/index.ts
├── PhysicsHubPage.tsx    ← головна розділу (плитки з реєстру)
├── PhysicsPage.tsx       ← спільна оболонка сторінки: заголовок, «Назад», «Головне меню»
├── shared/               ← спільні шматки (НЕ кладіть сюди index.ts - це не сторінка!)
├── gravity/              ← «Гравітація на планетах»
├── thunder/              ← «Грім і блискавка»
└── mythfact/             ← «Правда чи міф?»
```

## Як додати нову сторінку

1. Створіть папку `src/physics/<id>/` (id - латиницею, наприклад `pendulum`).
2. У ній - `index.ts` і компонент сторінки.

**`index.ts`** (опис - плитка в меню):

```ts
import { lazy } from 'react';
import { definePhysicsPage } from '../types';

export default definePhysicsPage({
  id: 'pendulum',                // збігається з назвою папки; потрапляє в URL /kiosk/games/physics/pendulum
  title: 'Маятник і час',        // підпис на плитці й заголовок сторінки
  icon: '🕰️',                   // емодзі на плитці
  color: 'teal',                 // blue | purple | green | orange | red | teal | indigo | pink
  order: 40,                     // порядок у меню (менше - раніше)
  component: lazy(() => import('./PendulumPage')),
});
```

**`PendulumPage.tsx`** - зручно скласти зі спільних шматків (вкладки 🔬 Дослідити · 🎯 Виклик · 💡 Факти · ✅ Тест):

```tsx
import React from 'react';
import { Lesson } from '../shared/Lesson';
import { FactCards } from '../shared/FactCards';
import { Quiz } from '../shared/Quiz';

const PendulumPage: React.FC = () => (
  <Lesson
    tabs={[
      { id: 'lab',   icon: '🔬', label: 'Дослідити',    content: <MyLab /> },
      { id: 'facts', icon: '💡', label: 'Чи знаєте ви?', content: <FactCards facts={FACTS} /> },
      { id: 'quiz',  icon: '✅', label: 'Перевір себе', content: <Quiz questions={QUIZ} /> },
    ]}
  />
);
export default PendulumPage;   // обов'язково default-експорт
```

Вкладок може бути скільки завгодно й будь-яких (див. `mythfact/` - лише 2 вкладки). Зручно починати з копії папки `thunder/`.

## Що є у `shared/`

| Що | Для чого |
|---|---|
| `Lesson` | сторінка з вкладками; неактивні вкладки не рендеряться (симуляції не крутяться у фоні) |
| `SimCanvas` | полотно для симуляцій: саме підганяє розмір, враховує щільність пікселів; `draw(ctx, w, h, dt)` викликається щокадру |
| `LabLayout` (`ui.tsx`) | «сцена + панель керування» (на вертикальному екрані - одна під одною) |
| `BigSlider`, `Chip`, `ActionButton`, `StatBox` (`ui.tsx`) | великі кнопки й повзунки для сенсорного екрана |
| `FactCards` | картки «Чи знаєте ви?» зі свайпом |
| `Quiz` | тест із миттєвим поясненням |
| `useBest(key)` | рекорд у `localStorage` браузера кіоску |
| `sound.ts`, `SoundToggle` | прості звуки на WebAudio (гуркіт грому, сигнал «вірно/невірно») без файлів |

Фізику й математику краще тримати в окремому `calc.ts` без React (див. `gravity/calc.ts`) - її легко перевіряти.

## Зміст наявних сторінок

- **gravity** - падіння м'яча на Землі й обраній планеті одночасно, вага й стрибок; гра «влуч у ціль» при різній гравітації; 7 фактів; тест. Дані планет - `planets.ts`.
- **thunder** - блискавка, звук іде зі швидкістю 343 м/с, формула відстані; гра «вгадай відстань до грози»; 7 фактів; тест.
- **mythfact** - 20 тверджень «правда чи міф» (свайп або кнопки), раунди по 10; список усіх відповідей. Твердження - `statements.ts`, щоб додати своє, допишіть об'єкт у масив.
