// Новини й оголошення лежать в одній таблиці. Завантажуємо її один раз на сесію
// і фільтруємо за колонкою типу: 1 — новина, 2 — оголошення, 3 — і те і інше.
import { NEWS_TABLE, sitedataUrl } from '@/constants';
import { NewsItem } from '@/type/newsItem';
import { http } from './http';

const TYPE_COL = 'Тип (новина/оголошення/і те і інше)';

let feed: Promise<NewsItem[]> | null = null;

const isShown = (item: NewsItem) => item.show === '1' || item.show === 1 || item.show === true;

export function loadNewsFeed(): Promise<NewsItem[]> {
  if (!feed) {
    feed = http.get<NewsItem[]>(sitedataUrl(NEWS_TABLE)).then(({ data }) => (Array.isArray(data) ? data.filter(isShown) : []));
    feed.catch(() => (feed = null));
  }
  return feed;
}

/** Елементи потрібних типів, новіші першими. '' вважається новиною. */
export async function getFeedByType(types: string[]): Promise<NewsItem[] | null> {
  try {
    const all = await loadNewsFeed();
    return all.filter((item) => types.includes(String(item[TYPE_COL] ?? ''))).reverse();
  } catch (error) {
    console.error('Помилка при завантаженні новин:', error);
    return null;
  }
}
