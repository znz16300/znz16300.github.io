# Ігри та тести: Квіз дня, Загадка тижня, Цікаві факти, Цікава мова, Історія України, Тест настрою, Логічні задачі

Кожна плитка сторінки **Ігри та тести** (`/kiosk/games`) - це розділ `src/fun/<розділ>/`. Усередині розділу кожен елемент лежить
у власній папці `src/fun/<розділ>/<id>/`. Плитки в меню розділу й маршрути будуються **автоматично** з усіх папок, у яких є `index.ts`.
Додавати елемент у роутер чи меню вручну **не потрібно**.

```
src/fun/
├── types.ts, createSection.ts   ← формат опису сторінки
├── FunHubPage.tsx, FunPage.tsx  ← меню розділу та оболонка сторінки (заголовок, «Назад», «Головне меню»)
├── index.ts                     ← список розділів (його читає routes.tsx)
├── shared/                      ← QuizRunner (тест), TopicQuiz (тест із випадкових питань банку), RiddleDeck (колода загадок), seed.ts
├── quiz/      /kiosk/games/quiz       daily · animals · ukraine · science
├── riddle/    /kiosk/games/riddle     weekly · nature · food · math
├── facts/     /kiosk/games/facts      random · truefalse · records · ukraine
├── language/  /kiosk/games/language   phraseology · proverbs · stress · antonyms
├── history/   /kiosk/games/history    timeline · figures · places · epochs
├── mood/      /kiosk/games/mood       check · breathing · emotions · kindness · animal
└── logic/     /kiosk/games/logic      puzzles · sequences · speedmath · oddone
```

Скрізь питання, загадки, слова й картки обираються **випадково** (з банку) і щоразу в новому порядку; відповіді теж перемішуються.
Банки лежать у файлах `questions.ts`, `riddles.ts`, `facts.ts`, `statements.ts`, `records.ts`, `phrases.ts`, `proverbs.ts`, `words.ts`, `events.ts`, `puzzles.ts`, `ideas.ts`, `mood.ts`, `emotions.ts`, `animals.ts`. Задачі «Числові послідовності» та «Швидкий рахунок» генеруються програмою (нескінченно).

Меню кожного розділу показує плитки всіх його сторінок; нові папки з'являються там самі.

## Як додати новий елемент у розділ

1. Створіть папку, напр. `src/fun/quiz/geography/` (id - латиницею).
2. У ній - `index.ts` і компонент сторінки.

```ts
// src/fun/quiz/geography/index.ts
import { lazy } from 'react';
import { defineFunPage } from '../../types';

export default defineFunPage({
  id: 'geography',              // = назві папки; потрапляє в URL /kiosk/games/quiz/geography
  title: 'Географічний квіз',   // підпис на плитці й заголовок
  icon: '🌍',                   // емодзі на плитці
  color: 'blue',                // blue | purple | green | orange | red | teal | indigo | pink
  order: 20,                    // порядок у меню (менше - раніше)
  component: lazy(() => import('./GeographyQuizPage')),
});
```

Компонент - `export default` React-компонент, що займає всю область (`w-full h-full`). Для тестів зручно взяти
`QuizRunner` з `../../shared/QuizRunner`, для карток - `FactCards` з `src/physics/shared/FactCards`, для вкладок - `Lesson` з `src/physics/shared/Lesson`.
Зручно почати з копії сусідньої папки.

## Як поповнювати наявний вміст

Весь вміст - у простих масивах, які можна редагувати без знання React: `questions.ts`, `riddles.ts`, `facts.ts`, `phrases.ts`, `events.ts`, `puzzles.ts`, `mood.ts`.
Допишіть новий об'єкт за зразком попередніх.

- **Квіз дня**, **Загадка тижня** - щоразу випадкові питання/загадки з банку (кнопка «Наступна загадка» - ще одна без повторів, поки не закінчиться колода).
- **Тест настрою** - нічого не зберігає; за низького результату показує кнопку на «Телефони психологічної допомоги» (`/kiosk/psypho/phones`).
