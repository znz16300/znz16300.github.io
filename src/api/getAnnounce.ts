import { NewsItem } from '@/type/newsItem';
import axios from 'axios';

export async function getAnnounce(): Promise<NewsItem[] | null> {
  try {
    const response = await axios.get(
      `https://znz16300.github.io/sitedata/data/1Dk0WYpOKeRoDATgzMkIkFjUcFwNAG5MRn4W7bEyzd0M.json`
    );
    const data = response.data;
    const filtered = Array.isArray(data)
      ? data.filter(item => (item.show === '1' || item.show === 1 || item.show === true) && (item['Тип (новина/оголошення/і те і інше)'] === '2' || item['Тип (новина/оголошення/і те і інше)'] === '3'))
      : [];

    return filtered.reverse();
  } catch (error) {
    console.error('Помилка при завантаженні новин:', error);
    return null;
  }
}
