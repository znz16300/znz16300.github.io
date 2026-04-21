export interface WorkDayInfo {
  "День тижня": string;
  "Чис./Знам/Вих": string;
  "дист/очн": string;
}

export type WorkDays = Record<string, WorkDayInfo>;
