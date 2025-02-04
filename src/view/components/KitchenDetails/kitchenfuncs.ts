export interface DataObject {
  id: string;
  [key: string]: string;
}

export interface Student {
  name: string;
  gender: string;
}

export interface KitchenOrder {
  lastDate: string;
  klassList: string[];
  workers: { date: string; name: string }[];
  klasses: {
    date: string;
    nameKlas: string;
    students: Student[];
  }[];
}

export function transformData(data: DataObject[]): KitchenOrder {
  const result: KitchenOrder = {
    lastDate: '---',
    klassList: [],
    workers: [],
    klasses: []
  };

  const klassSet = new Set<string>(); // Використовуємо Set для унікальних класів
  let lastDateT = '';

  // Знайти всі можливі класи
  data.forEach((entry) => {
    Object.keys(entry).forEach((key) => {
      if (key.startsWith('Оберіть учнів') && key.includes(' класу, які сьогодні харчуватимуться')) {
        const nameKlas = key
          .replace('Оберіть учнів ', '')
          .replace(' класу, які сьогодні харчуватимуться', '')
          .trim();

        klassSet.add(nameKlas);
      }
    });
  });

  // Додати всі можливі класи до result.klassList
  result.klassList = Array.from(klassSet);

  // Обробити дані
  data.forEach((entry) => {
    const date = entry['Дата харчування'];
    const dateInput = entry['Позначка часу'];
    lastDateT = dateInput;

    if (entry['Підрозділ'] === 'Працівники') {
      // Додати працівників
      const workerNames = entry['Прізвище, імʼя, по батькові']?.split(',') || [];
      workerNames.forEach((name: string) => {
        if (name.trim()) {
          result.workers.push({ date, name: name.trim() });
        }
      });
    } else {
      // Додати класи з учнями
      Object.keys(entry).forEach((key) => {
        if (key.startsWith('Оберіть учнів') && entry[key].trim()) {
          const nameKlas = key
            .replace('Оберіть учнів ', '')
            .replace(' класу, які сьогодні харчуватимуться', '')
            .trim();

          const students = entry[key].split(',').map((student: string) => {
            const name = student.trim();
            const gender = name.slice(-1) === 'а' ? 'Ж' : 'Ч';
            return { name, gender };
          });

          result.klasses.push({
            date,
            nameKlas,
            students: students.filter((s: Student) => s.name)
          });
        }
      });
    }
  });
  result.lastDate = lastDateT;

  return result;
}

export function filterByDate(data: KitchenOrder, selectedDate: string): KitchenOrder {
  return {
    // feedingDate: data.feedingDate,
    lastDate: data.lastDate,
    klassList: data.klassList,
    workers: data.workers.filter((worker) => worker.date.includes(selectedDate)),
    klasses: data.klasses
      .filter((klass) => klass.date.includes(selectedDate))
      .map((klass) => ({
        ...klass,
        students: klass.students // Студенти залишаються без змін
      }))
  };
}

export interface OrderItemProps {
  data: DataObject[] | null | undefined;
}

export function filterLatestEntries(order: KitchenOrder): KitchenOrder {
  const latestEntries = new Map<string, { date: string; nameKlas: string; students: Student[] }>();

  for (let i = order.klasses.length - 1; i >= 0; i -= 1) {
    const klass = order.klasses[i];
    if (!latestEntries.has(klass.nameKlas)) {
      latestEntries.set(klass.nameKlas, klass);
    }
  }

  // Перетворюємо Map назад у масив
  const filteredKlasses = Array.from(latestEntries.values());

  // Повертаємо новий об'єкт KitchenOrder з оновленим списком класів
  return {
    ...order,
    klasses: filteredKlasses.reverse() // Зберігаємо початковий порядок
  };
}

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  return `${day}.${month}.${year}`;
}

export function formatDate2(dateString: string): string {
  const [day, month, year] = dateString.split('.');
  return `${year}-${month}-${day}`;
}

export function formatToDateString(dateString: string): string {
  const date = new Date(dateString); // Створюємо об'єкт Date
  const day = date.getDate().toString().padStart(2, '0'); // Додаємо провідний нуль для дня
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Додаємо провідний нуль для місяця
  const year = date.getFullYear(); // Отримуємо рік

  return `${day}.${month}.${year}`; // Форматуємо рядок
}
