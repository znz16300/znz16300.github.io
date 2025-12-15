// distDataHelper.ts
import { getDistData, getLessonDistType } from './distData';

export type WeekType = 0 | 1; // 0 - непарний, 1 - парний

export const getWeekTypeLabel = (weekType: WeekType): string => {
  return weekType === 0 ? 'Непарний тиждень' : 'Парний тиждень';
};

export const getCellBackgroundColor = (className: string, weekType: WeekType): string => {
  const distType = getDistData(className, weekType);
  
  if (distType === 'д') {
    return 'bg-orange-100 border-orange-200'; // дистанційний
  } else if (distType === 'о') {
    return 'bg-green-100 border-green-200'; // очний
  }
  
  return 'bg-blue-50'; // за замовчуванням
};

export const getLessonBackgroundColor = (classes: string[], weekType: WeekType): string => {
  const distType = getLessonDistType(classes, weekType);
  console.log(classes);
  
  
  if (distType === 'д') {
    return 'bg-orange-100 border-orange-200'; // дистанційний
  } else if (distType === 'о') {
    return 'bg-green-100 border-green-200'; // очний
  } else if (distType === 'змішаний') {
    return 'bg-yellow-100 border-yellow-200'; // змішаний
  }
  
  return 'bg-blue-50'; // за замовчуванням
};

export const getDistTypeLabel = (className: string, weekType: WeekType): string => {
  const distType = getDistData(className, weekType);
  
  if (distType === 'д') {
    return '🟠 Дистанційно';
  } else if (distType === 'о') {
    return '🟢 Очно';
  }
  
  return '';
};

export const getDistTypeBadge = (distType: string): { color: string; label: string } | null => {
  if (distType === 'д') {
    return { color: 'bg-orange-500 text-white', label: 'Д' };
  } else if (distType === 'о') {
    return { color: 'bg-green-500 text-white', label: 'О' };
  } else if (distType === 'змішаний') {
    return { color: 'bg-yellow-500 text-white', label: 'З' };
  }
  return null;
};
