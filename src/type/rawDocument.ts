export interface RawDocument {
  id: string;
  ['Позначка часу']: string;
  ['Назва документу']: string;
  ['Посилання на документ (якщо більше одного, то через кому)']: string;
  ['Файл(и) документу']: string;
  ["Фото (необов'язково)"]: string;
  title: string;
  type: string;
  size: string;
  info: string;
  sort: string;
  show: string;
}
