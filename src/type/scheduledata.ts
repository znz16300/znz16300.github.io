interface Period {
  id: string;
  name: string;
  short: string;
  startTime: string;
  endTime: string;
}

interface Subject {
  id: string;
  name: string;
  short: string;
  partnerId?: string;
}

interface Teacher {
  id: string;
  name: string;
  short: string;
  firstname: string;
  lastname: string;
  gender: string;
  color: string;
  email: string;
  mobile: string;
  partnerId?: string;
}

interface Classroom {
  id: string;
  name: string;
  short: string;
  capacity: string;
  buildingId?: string;
  partnerId?: string;
}

interface Class {
  id: string;
  name: string;
  short: string;
  teacherId?: string;
  classroomIds?: string;
  grade?: string;
  partnerId?: string;
}

interface Group {
  id: string;
  name: string;
  classId: string;
  studentIds?: string;
  entireClass: string; // "0" або "1"
  divisionTag: string;
  studentCount?: string;
}

interface Lesson {
  id: string;
  subjectId: string;
  classIds: string[]; // масив ID класів, розділених комами
  teacherIds: string[]; // масив ID вчителів
  classroomIds: string[]; // масив ID кабінетів
  groupIds: string[]; // масив ID груп
  periodsPerCard: string;
  periodsPerWeek: string;
  capacity?: string;
  seminarGroup?: string;
  termsDefId?: string;
  weeksDefId?: string;
  daysDefId?: string;
  partnerId?: string;
}

interface Card {
  teacherIds: string[]; // масив ID вчителів
  lessonId: string;
  period: string; // номер уроку (1-7)
  days: string; // бінарний код дня тижня (наприклад, "10000" - понеділок)
  weeks: string;
  terms: string;
  classroomIds: string[]; // масив ID кабінетів
}

interface DaysDef {
  id: string;
  name: string;
  short: string;
  days: string;
}

interface WeeksDef {
  id: string;
  name: string;
  short: string;
  weeks: string;
}

interface TermsDef {
  id: string;
  name: string;
  short: string;
  terms: string;
}

interface Grade {
  grade: string;
  name: string;
  short: string;
}

interface Building {
  id?: string;
  name?: string;
  partnerId?: string;
}

// Основний інтерфейс для scheduleData
interface ScheduleData {
  periods: Period[];
  subjects: Subject[];
  teachers: Teacher[];
  classrooms: Classroom[];
  classes: Class[];
  groups: Group[];
  lessons: Lesson[];
  cards: Card[];
  daysDefs?: DaysDef[];
  weeksDefs?: WeeksDef[];
  termsDefs?: TermsDef[];
  grades?: Grade[];
  buildings?: Building[];
}

// Додаткові інтерфейси для відображення розкладу

interface LessonInfo {
  subject: string;
  teachers: string[];
  classrooms: string[];
  groups: string[];
  classes?: string[]; // для розкладу вчителів
}

interface DaySchedule {
  [periodId: string]: LessonInfo[];
}

interface WeekSchedule {
  [dayBinary: string]: DaySchedule;
}

// Типи для компоненту
type ViewMode = 'classes' | 'teachers';

interface TimetableState {
  scheduleData: ScheduleData | null;
  view: ViewMode;
  selectedClass: string;
  selectedTeacher: string;
}

// Експорт типів
export type {
  Period,
  Subject,
  Teacher,
  Classroom,
  Class,
  Group,
  Lesson,
  Card,
  DaysDef,
  WeeksDef,
  TermsDef,
  Grade,
  Building,
  ScheduleData,
  LessonInfo,
  DaySchedule,
  WeekSchedule,
  ViewMode,
  TimetableState
};
