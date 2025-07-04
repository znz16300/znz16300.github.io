import { PageItem } from "@/type/pageItem";
import axios from "axios";

export async function getPage(idSheet: string, chapter: string): Promise<PageItem[] | null> {
  try {
    const response = await axios.get(
      `https://znz16300.github.io/sitedata/data/${idSheet}.json`
    );
    // Фільтруємо елементи за розділом
    const data = chapter !== 'all' 
      ? response.data.filter((item: PageItem) => item["Розділ"] === chapter)
      : response.data;

    return data;
  } catch (error) {
    console.error("Помилка при завантаженні новин:", error);
    return null;
  }
}
