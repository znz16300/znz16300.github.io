import { NewsItem } from '@/type/newsItem';
import { getFeedByType } from './newsFeed';

export const getAnnounce = (): Promise<NewsItem[] | null> => getFeedByType(['2', '3']);
