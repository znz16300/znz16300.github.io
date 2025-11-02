/* eslint-disable @typescript-eslint/no-explicit-any */
// fullScheduleGenerators.ts
import { ScheduleData } from '@/type/scheduledata';
import { findById, daysArray, ScheduleMap, FullScheduleMap } from './scheduleHelpers';

export const getAllClassesSchedule = (scheduleData: ScheduleData, day: string): Record<string, Record<string, any[]>> => {
  const schedule: Record<string, Record<string, any[]>> = {};

  scheduleData.classes.forEach(cls => {
    schedule[cls.id] = {};
    scheduleData.periods.forEach(period => {
      schedule[cls.id][period.id] = [];
    });
  });

  scheduleData.cards.forEach(card => {
    if (card.days !== day) return;

    const lesson = findById(scheduleData.lessons, card.lessonId);
    if (!lesson) return;

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

    lesson.classIds.forEach(classId => {
      if (schedule[classId] && schedule[classId][card.period]) {
        schedule[classId][card.period].push({
          subject: subject?.name || 'Невідомий предмет',
          teachers: teachers.map(t => t!.name),
          classrooms: classrooms.map(c => c!.name),
          groups: groups.map(g => g!.name)
        });
      }
    });
  });

  return schedule;
};

export const getFullClassesSchedule = (scheduleData: ScheduleData): FullScheduleMap => {
  const schedule: FullScheduleMap = {};

  scheduleData.classes.forEach(cls => {
    schedule[cls.id] = {};
    daysArray.forEach(day => {
      schedule[cls.id][day] = {};
      scheduleData.periods.forEach(period => {
        schedule[cls.id][day][period.id] = [];
      });
    });
  });

  scheduleData.cards.forEach(card => {
    const lesson = findById(scheduleData.lessons, card.lessonId);
    if (!lesson) return;

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

    lesson.classIds.forEach(classId => {
      if (schedule[classId]?.[card.days]?.[card.period]) {
        schedule[classId][card.days][card.period].push({
          subject: subject?.name || 'Невідомий предмет',
          teachers: teachers.map(t => t!.name),
          classrooms: classrooms.map(c => c!.name),
          groups: groups.map(g => g!.name)
        });
      }
    });
  });

  return schedule;
};
