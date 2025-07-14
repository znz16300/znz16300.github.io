export interface NewsItem {
  id: string | number;
  'Назва новини': string;
  'Текст новини': string;
  'Позначка часу': string;
  author: string;
  Фото: string;
  show?: string | number | boolean; // необов’язково
}
