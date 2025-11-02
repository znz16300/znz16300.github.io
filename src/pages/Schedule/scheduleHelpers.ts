// scheduleHelpers.ts
import { LessonInfo, DaySchedule, WeekSchedule } from '@/type/scheduledata';

export const days = [
  { id: '10000', enName: 'mo', name: 'Понеділок' },
  { id: '01000', enName: 'tu', name: 'Вівторок' },
  { id: '00100', enName: 'we', name: 'Середа' },
  { id: '00010', enName: 'th', name: 'Четвер' },
  { id: '00001', enName: 'fr', name: "П'ятниця" }
];

export const daysArray = ['10000', '01000', '00100', '00010', '00001'];

export const getDayName = (dayBinary: string): string => {
  const dayNames = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця"];
  const index = dayBinary.split('').findIndex(d => d === '1');
  return dayNames[index] || '';
};

export const findById = <T extends { id: string }>(array: T[] | undefined, id: string): T | undefined => {
  return array?.find(item => item.id === id);
};

// Використовуємо типи з scheduledata.ts
export type { LessonInfo, DaySchedule, WeekSchedule };

// Додаткові типи для повних розкладів
export type ScheduleMap = WeekSchedule;
export type FullScheduleMap = Record<string, WeekSchedule>;
