import { sitedataUrl } from '@/constants';
import { PageItem } from '@/type/pageItem';
import { http } from '@/api/http';

export async function getPage(idSheet: string, chapter: string): Promise<PageItem[] | null> {
  try {
    const response = await http.get(sitedataUrl(idSheet));
    // Фільтруємо елементи за розділом
    const data =
      chapter !== 'all'
        ? response.data.filter((item: PageItem) => item['Розділ'] === chapter)
        : response.data;

    return data;
  } catch (error) {
    console.error('Помилка при завантаженні новин:', error);
    return null;
  }
}
