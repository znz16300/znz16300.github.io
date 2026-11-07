// Сховище JSON-експортів Google Sheets (репозиторій sitedata)
export const SITEDATA_URL = 'https://znz16300.github.io/sitedata/data/';
export const sitedataUrl = (sheetId: string) => `${SITEDATA_URL}${sheetId}.json`;

/** Таблиця новин і оголошень (одна на обидва розділи) */
export const NEWS_TABLE = '1Dk0WYpOKeRoDATgzMkIkFjUcFwNAG5MRn4W7bEyzd0M';
export const DOCUMENTS_TABLE = '1O_bJjH8TAHww34uxA51rdyJoX4PaxMGOzL57N8G7H34';

/** Файл з public/ з урахуванням base (працює і на вкладених адресах на кшталт /kiosk/teachers) */
export const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const PAGE_TABLE_1 = '1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI';
export const PAGE_TABLE_2 = '12tqoeJpUs1qa9paI7YuMpZ17nynq44-qqmn0zgoEup4';
export const ZAMINI_TABLE = '19NXvVwOlczpioqKHtO_kLaFfLKcqpN-knDl-87yC9mo';
// export const ZAMINI_TABLE = '1vWepnObCCI_61Ubt4Dlh6nWBjOUICCCrn8MyG-od9Sg';

export const SERVER_2 = 'https://schooltools.pythonanywhere.com/';
export const SERVER = 'https://alexzelenskiy.pythonanywhere.com/';
// export const SERVER = 'http://127.0.0.1:5000/';

export const TOKEN_LIFETIME_SECONDS = 3600;

export const REASONS = [
  { title: 'Лікарняний', label: 'ТН' },
  { title: 'Відпустка основна', label: '' },
  { title: 'Відпустка по пологам', label: 'ВП' },
  { title: 'Відпустка без збереження', label: 'НА' },
];

export const COURSES_TABLE_COLLS = [
  { field: 'Позначка часу', title: 'Уведено' },
  { field: 'Електронна адреса', title: 'Email' },
  { field: 'Працівник, який пройшов курсову підготовку', title: 'ПІБ' },
  { field: 'Назва курсів, семінару, вебінару тощо', title: 'Тема' },
  { field: 'Кількість годин', title: 'Всього годин' },
  { field: 'З них з інклюзії', title: 'з інклюзії' },
  {
    field: 'З них з надання психологічної підтримки учасникам освітнього процесу',
    title: 'з надання психологічної підтримки',
  },
  { field: 'Тип документа', title: 'Тип документа' },
  {
    field: 'Номер документа (якщо номера немає, вкажіть "бн" без лапок)',
    title: 'Номер',
  },
  { field: 'Дата видачі документа', title: 'Дата документу' },
  {
    field: 'Назва організації чи платформи, на базі якої проходила підготовка, навчання',
    title: "Суб'єкт підвищення",
  },
  { field: 'Форма навчання', title: '' },
  { field: 'Фотокопія сертифікату, свідоцтва тощо', title: 'Документ' },
  { field: 'Програма курсів, заходу', title: 'Програма' },
  {
    field: 'Потребує зарахування рішенням педради',
    title: 'Потреба в зарахуванні',
  },
  { field: 'Рішення педради про зарахування', title: 'Педрада' },
  { field: 'Рік атестації', title: 'Рік атестації' },
];
