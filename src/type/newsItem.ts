export interface NewsItem {
  id: string | number;
  'Назва новини': string;
  'Текст новини': string;
  'Позначка часу': string;
  'Електронна адреса': string;
  'Тип (новина/оголошення/і те і інше)': string;
  'Ваша електронна пошта': string;
  'old_photo': string;
  author: string;
  Фото: string;
  show?: string | number | boolean; // необов’язково
}
