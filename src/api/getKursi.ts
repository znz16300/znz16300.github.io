import { DataObject, TrainingItem } from "@/type/kursi";
import { PageItem } from "@/type/pageItem";
import axios from "axios";

const SERVER_URL = 'https://schooltools.pythonanywhere.com';
const tableNews = {
  tableName: '1W6zD4eXSqCFW2iObVuNUyjj_hyS1aPi_tWe7Ce8dxWU',
  sheetName: 'Відповіді форми (1)'
  // tableName: process.env.GOOGLESHEETS_TABLE_COURSES as string,
  // sheetName: process.env.GOOGLESHEETS_TABLE_COURSES_SHEET as string
};

interface IPageCache {
  [key: string]: DataObject[] | null;
}

export async function getKursiFromServ(
  idSheet: string,
  teacher: string
): Promise<{ data: PageItem[]; all: string[] } | null> {
  // Ініціалізація глобального кеша
  if (!globalThis.__kursiCache) {
    globalThis.__kursiCache = {};
  }
  const kursiCache: Record<string, PageItem[]> = globalThis.__kursiCache;

  const sheetKey = `sheet_${idSheet}`;
  let allData: PageItem[];

  if (kursiCache[sheetKey]) {
    // Беремо з кешу
    allData = kursiCache[sheetKey];
  } else {
    // Якщо ще не в кеші — завантажуємо
    try {
      const response = await axios.get(
        `${SERVER_URL}/getdata/${idSheet}/${tableNews.sheetName}/A1:Q10000`
      );

      allData = response.data.sort((a: TrainingItem, b: TrainingItem) => {
        const parseDate = (dateStr: string): number => {
          if (!dateStr) return 0;
          const [day, month, year] = dateStr.split(".").map(Number);
          return new Date(year, month - 1, day).getTime();
        };

        const dateA = parseDate(a["Дата видачі документа"] || "");
        const dateB = parseDate(b["Дата видачі документа"] || "");
        return dateB - dateA; // За спаданням
      });

      kursiCache[sheetKey] = allData; // Кешуємо повний масив
    } catch (error) {
      console.error("Помилка при завантаженні курсів:", error);
      return null;
    }
  }

  // Усі унікальні працівники
  const all = Array.from(
    new Set(
      allData
        .map((item) => item["Працівник, який пройшов курсову підготовку"])
        .filter((name) => name && name.length > 2)
    )
  ).sort((a, b) => a.localeCompare(b, "uk", { sensitivity: "base" }));

  // Фільтрація по вчителю, якщо задано
  const data =
    teacher && teacher !== "all"
      ? allData.filter(
          (item) =>
            item["Працівник, який пройшов курсову підготовку"] === teacher  
            
        )
      : allData.filter(
          (item) => item["Працівник, який пройшов курсову підготовку"].length > 2
        );

  return { data, all };
}


export async function getKursi(idSheet: string, teacher: string): Promise<{data: PageItem[], all: string[]} | null> {
  try {
    const response = await axios.get(
      `https://znz16300.github.io/sitedata/data/${idSheet}.json`
    );
    // Фільтруємо елементи за розділом
    const allData = response.data.sort((a: TrainingItem, b: TrainingItem) => {
  const parseDate = (dateStr: string): number => {
    if (!dateStr) return 0;
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, day).getTime(); // JS: місяці з 0
  };

  const dateA = parseDate(a["Дата видачі документа"] || "");
  const dateB = parseDate(b["Дата видачі документа"] || "");

  return dateB - dateA; // За спаданням дат
});
    const all = Array.from(
      new Set(
      allData
        .map((item: PageItem) => item["Працівник, який пройшов курсову підготовку"])
        .filter((name: string) => name && name.length > 2)
      )
    ).sort((a: string, b: string) => a.localeCompare(b, 'uk', { sensitivity: 'base' })) as string[];
    const data = teacher !== '' && teacher !== 'all' 
      ? allData.filter((item: PageItem) => item["Працівник, який пройшов курсову підготовку"] === teacher)
      : allData.filter((item: PageItem) => item["Працівник, який пройшов курсову підготовку"].length > 2);

    return {all: all, data: data};
  } catch (error) {
    console.error("Помилка при завантаженні новин:", error);
    return null;
  }
}
