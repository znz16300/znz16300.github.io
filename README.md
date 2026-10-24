# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0943af71-e99c-49f6-b2af-ea3607912e7e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0943af71-e99c-49f6-b2af-ea3607912e7e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0943af71-e99c-49f6-b2af-ea3607912e7e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


# Оновлення сервісу «Для голів МК»

## Куди скопіювати файли (збережіть структуру папок)

| Файл в архіві                          | Дія                |
|----------------------------------------|--------------------|
| `src/components/MKHeadModal.tsx`       | **замінити**       |
| `src/lib/mkProtocol.ts`                | **додати** (новий) |
| `src/lib/docxExport.ts`                | **додати** (новий, експорт у .docx без сторонніх бібліотек) |
| `public/templates/protocol-mk.txt`     | **додати** (новий) |

`Kursi.tsx` та інші файли змінювати **не потрібно** (пропси модалки не змінилися).
Нові npm-пакети не потрібні. Використано вже наявні компоненти ui:
`popover`, `command`, `tabs`, `input`, `textarea`, `label`, `badge`, `select`, `dialog`, `checkbox`, `button`.

## Як працювати
1. «Комісія» – оберіть назву зі списку (або «Інша назва…»), впишіть голову й секретаря
   (формат «Прізвище Ім’я По батькові»). Зберігається в localStorage.
2. «Засідання» – № протоколу, дата, початок, за потреби присутні/відсутні.
3. «Педагогічні працівники» – оберіть вчителя (є пошук), позначте його курси,
   потім оберіть наступного. Зміни потрапляють у протокол одразу.
   Список доданих можна редагувати (олівець) і видаляти (кошик).
4. Праворуч – готовий текст: «Копіювати», «.txt» та «.docx».
   Кнопка «?» угорі праворуч відкриває довідку з алгоритмом створення протоколу.
   Прапорець «Лише пункт порядку денного» дає тільки блок СЛУХАЛИ / ВИРІШИЛИ.
5. «Зберегти» – протокол потрапляє на вкладку «Збережені» (відкрити, дублювати, видалити).
   Незбережена чернетка автоматично відновлюється після закриття вікна.

Вчителі в протоколі йдуть за алфавітом ПІБ, курси кожного – від давніших до новіших.

## Шаблон `public/templates/protocol-mk.txt`
Редагується як звичайний текст, перебудова проєкту не потрібна (після деплою).

Прості поля: `{{number}}` `{{commission}}` `{{date}}` `{{start}}` `{{head}}`
`{{secretary}}` `{{present}}` `{{absent}}`.

Цикли (теги `{{#...}}` / `{{/...}}`; якщо тег сам на рядку – порожній рядок не лишається):
- `{{#point}}…{{/point}}` – пункт порядку денного (саме він виводиться в режимі «Лише пункт»);
- `{{#teachers}}…{{/teachers}}` – вчителі: `{{name}}` `{{povidomyv}}` `{{oznaiomyv}}` `{{zaznachyv}}`
  (форми за статтю);
- `{{#courses}}…{{/courses}}` – курси вчителя: `{{org}}` `{{title}}` `{{date}}` `{{hours}}` `{{sep}}`
  (`{{sep}}` – «;» між курсами та «.» після останнього).

Якщо файл недоступний, використовується вбудована копія шаблону
(`DEFAULT_TEMPLATE` у `src/lib/mkProtocol.ts`).

## Відповідність Інструкції з діловодства (розділ 9, додаток 12)
- стисла форма протоколу, від 3-ї особи множини: СЛУХАЛИ – ВИРІШИЛИ;
- заголовок: вид документа + вид колегіальної діяльності («ПРОТОКОЛ № … засідання методичної комісії …»);
- дата протоколу = дата засідання, формат «24» жовтня 2026 року;
- вступна частина: голова, секретар, присутні, відсутні, порядок денний («Про …»);
- імена в форматі «Ім’я ПРІЗВИЩЕ»; рішення пронумеровано (1.1);
- підписують голова та секретар.
Номер протоколу, початок, присутні, результати голосування заповнює користувач.

## Файл .docx
Times New Roman 14 пт; поля: ліве 3 см, праве 1 см, верхнє та нижнє по 2 см; абзац 10 мм;
інтервал 1,5 у тексті; «СЛУХАЛИ / ВИРІШИЛИ / ГОЛОСУВАЛИ» без відступу; номери сторінок зверху
посередині, перша сторінка без номера. Структура береться з тексту шаблону:
рядки з 3+ пробілами підряд розкладаються по колонках (дата – місце – початок; підписи),
рядок «ПРОТОКОЛ …» та наступний «засідання …» центруються напівжирним.

## Кнопка «Копіювати»
Додано запасний спосіб копіювання на випадок, коли браузер блокує Clipboard API
(сайт відкрито не через https, обмеження дозволів, фокус у модальному вікні).
Якщо обидва способи не спрацюють, показується підказка (Ctrl+C).
