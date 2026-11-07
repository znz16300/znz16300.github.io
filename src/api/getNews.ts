import { NewsItem } from '@/type/newsItem';
import { getFeedByType } from './newsFeed';

export const getNews = (): Promise<NewsItem[] | null> => getFeedByType(['1', '3', '']);
