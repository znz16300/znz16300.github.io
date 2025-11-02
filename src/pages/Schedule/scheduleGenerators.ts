// scheduleGenerators.ts
import { ScheduleData } from '@/type/scheduledata';
import { findById, daysArray, ScheduleMap, FullScheduleMap } from './scheduleHelpers';

export const getClassSchedule = (scheduleData: ScheduleData, classId: string): ScheduleMap => {
  const schedule: ScheduleMap = {};

  daysArray.forEach(day => {
    schedule[day] = {};
    scheduleData.periods.forEach(period => {
      schedule[day][period.id] = [];
    });
  });

  scheduleData.cards.forEach(card => {
    const lesson = findById(scheduleData.lessons, card.lessonId);
    if (!lesson || !lesson.classIds.includes(classId)) return;

    const subject = findById(scheduleData.subjects, lesson.subjectId);
    const teachers = lesson.teacherIds
      .map(tid => findById(scheduleData.teachers, tid))
      .filter(Boolean);
    const classrooms = card.classroomIds
      .map(cid => findById(scheduleData.classrooms, cid))
      .filter(Boolean);
    const groups = lesson.groupIds
      .map(gid => findById(scheduleData.groups, gid))
      .filter(Boolean);

    if (schedule[card.days] && schedule[card.days][card.period]) {
      schedule[card.days][card.period].push({
        subject: subject?.name || 'Невідомий предмет',
        teachers: teachers.map(t => t!.name),
        classrooms: classrooms.map(c => c!.name),
        groups: groups.map(g => g!.name)
      });
    }
  });

  return schedule;
};

export const getTeacherSchedule = (scheduleData: ScheduleData, teacherId: string): ScheduleMap => {
  const schedule: ScheduleMap = {};

  daysArray.forEach(day => {
    schedule[day] = {};
    scheduleData.periods.forEach(period => {
      schedule[day][period.id] = [];
    });
  });

  scheduleData.cards.forEach(card => {
    const lesson = findById(scheduleData.lessons, card.lessonId);
    if (!lesson || !lesson.teacherIds.includes(teacherId)) return;

    const subject = findById(scheduleData.subjects, lesson.subjectId);
    const classes = lesson.classIds
      .map(cid => findById(scheduleData.classes, cid))
      .filter(Boolean);
    const classrooms = card.classroomIds
      .map(cid => findById(scheduleData.classrooms, cid))
      .filter(Boolean);
    const groups = lesson.groupIds
      .map(gid => findById(scheduleData.groups, gid))
      .filter(Boolean);

    if (schedule[card.days] && schedule[card.days][card.period]) {
      schedule[card.days][card.period].push({
        subject: subject?.name || 'Невідомий предмет',
        classes: classes.map(c => c!.name),
        classrooms: classrooms.map(c => c!.name),
        groups: groups.map(g => g!.name),
        teachers: []
      });
    }
  });

  return schedule;
};
