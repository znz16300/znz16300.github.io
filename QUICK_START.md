# 🚀 Швидкий старт - Розклад уроків з дистанційним навчанням

## ✨ Нові можливості

### 📅 Вибір тижня
- **Непарний тиждень** (0) - перший тиждень циклу
- **Парний тиждень** (1) - другий тиждень циклу
- Селектор з'являється у режимах "Загальний (день)" та "Повний розклад класів"

### 🎨 Кольорове кодування
Комірки автоматично підсвічуються залежно від формату навчання:

| Колір | Формат | Опис |
|-------|--------|------|
| 🟢 Зелений | Очне | `bg-green-100` |
| 🟠 Оранжевий | Дистанційне | `bg-orange-100` |

### 🏷️ Бейджі
В кожній комірці з уроком відображається бейдж:
- **О** (зелений) - Очний урок
- **Д** (оранжевий) - Дистанційний урок

## 📋 Як це працює

### 1. Дані про дистанційне навчання (`distData.ts`)
```typescript
const distClasses = [
    { "name": "1-А", "week": ["о", "о"] },  // обидва тижні очно
    { "name": "2-А", "week": ["о", "д"] },  // непарний очно, парний дистанційно
    { "name": "3-А", "week": ["д", "о"] },  // непарний дистанційно, парний очно
    // ...
];

export const getDistData = (name: string, week: number): string => {
    // Повертає "о" (очне) або "д" (дистанційне)
};
```

### 2. Вибір тижня
```typescript
// У компоненті TimetableParser
const [weekType, setWeekType] = useState<WeekType>(0); // 0 або 1

// У SelectionControls
<select value={weekType} onChange={(e) => setWeekType(Number(e.target.value))}>
  <option value={0}>Непарний тиждень</option>
  <option value={1}>Парний тиждень</option>
</select>
```

### 3. Підсвічування комірок
```typescript
// distDataHelper.ts
export const getCellBackgroundColor = (className: string, weekType: WeekType): string => {
  const distType = getDistData(className, weekType);
  
  if (distType === 'д') return 'bg-orange-100 border-orange-200';
  if (distType === 'о') return 'bg-green-100 border-green-200';
  return 'bg-blue-50';
};
```

### 4. Застосування в таблицях
```typescript
// AllClassesTable.tsx
<td className={`... ${getCellBackgroundColor(cls.name, weekType)}`}>
  {/* Вміст комірки з бейджем */}
  <span className={badge.color}>{badge.label}</span>
</td>
```

## 🎯 Режими з підсвічуванням

### ✅ Повне підсвічування
- **Загальний (день)** - `AllClassesTable`
- **Повний розклад класів** - `FullScheduleTable` (view="fullClasses")

В цих режимах:
- Фон комірок зафарбований
- Відображаються бейджі О/Д
- Є вибір тижня

### ⚪ Без підсвічування
- **Розклад класу**
- **Розклад вчителя**
- **Повний розклад вчителів**
- **Повний розклад кабінетів**

## 🔧 Налаштування

### Додавання нового класу
У файлі `distData.ts`:
```typescript
{ "name": "12-А", "week": ["о", "д"] }
```

### Зміна кольорів
У файлі `distDataHelper.ts`:
```typescript
if (distType === 'д') {
  return 'bg-red-100 border-red-200'; // Замість оранжевого
}
```

### Додавання підсвічування в інші режими
```typescript
// У потрібному компоненті
import { getCellBackgroundColor, getDistTypeBadge } from './distDataHelper';

// У рендері
const bgColor = getCellBackgroundColor(item.name, weekType);
<td className={bgColor}>...</td>
```

## 📊 Структура файлів

```
src/
├── distData.ts              # Дані про дистанційне навчання
├── distDataHelper.ts        # Утиліти для роботи з дистанційним навчанням
├── SelectionControls.tsx    # + Селектор тижня
├── AllClassesTable.tsx      # + Підсвічування
├── FullScheduleTable.tsx    # + Підсвічування (тільки для класів)
└── Legend.tsx               # + Пояснення кольорів
```

## 💡 Приклади використання

### Отримання типу навчання
```typescript
const distType = getDistData("5-А", 0); // "о" або "д"
```

### Отримання кольору комірки
```typescript
const bgColor = getCellBackgroundColor("5-А", 1);
// "bg-orange-100 border-orange-200"
```

### Отримання бейджа
```typescript
const badge = getDistTypeBadge("д");
// { color: "bg-orange-500 text-white", label: "Д" }
```

## 🐛 Відладка

### Перевірка даних
```typescript
console.log(getDistData("1-А", 0)); // Має повернути "о" або "д"
```

### Перевірка кольорів
Відкрийте DevTools → Elements → перевірте класи на комірці:
- Має бути `bg-green-100` або `bg-orange-100`
- Має бути `border-green-200` або `border-orange-200`

### Перевірка бейджів
Шукайте `<span>` з класами `bg-green-500` або `bg-orange-500` всередині комірок.

## 🎓 Поради

1. **Планування тижнів** - Заздалегідь визначте, який тиждень зараз (непарний/парний)
2. **Консистентність даних** - Переконайтесь, що всі класи є в `distData.ts`
3. **Резервні значення** - Якщо клас не знайдено, повертається "н/д"
4. **Візуальна перевірка** - Використовуйте Legend для швидкої орієнтації

## 📞 Підтримка

При виникненні проблем:
1. Перевірте консоль браузера на помилки
2. Перевірте наявність класу в `distData.ts`
3. Переконайтесь, що weekType має значення 0 або 1
