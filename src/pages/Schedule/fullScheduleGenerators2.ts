// fullScheduleGenerators2.ts
import { ScheduleData } from '@/type/scheduledata';
import { findById, daysArray, FullScheduleMap } from './scheduleHelpers';

export const getFullTeachersSchedule = (scheduleData: ScheduleData): FullScheduleMap => {
  const schedule: FullScheduleMap = {};

  scheduleData.teachers.forEach(teacher => {
    schedule[teacher.id] = {};
    daysArray.forEach(day => {
      schedule[teacher.id][day] = {};
      scheduleData.periods.forEach(period => {
        schedule[teacher.id][day][period.id] = [];
      });
    });
  });

  scheduleData.cards.forEach(card => {
    const lesson = findById(scheduleData.lessons, card.lessonId);
    if (!lesson) return;

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

    lesson.teacherIds.forEach(teacherId => {
      if (schedule[teacherId]?.[card.days]?.[card.period]) {
        schedule[teacherId][card.days][card.period].push({
          subject: subject?.name || 'Невідомий предмет',
          classes: classes.map(c => c!.name),
          classrooms: classrooms.map(c => c!.name),
          groups: groups.map(g => g!.name)
        });
      }
    });
  });

  return schedule;
};

export const getFullClassroomsSchedule = (scheduleData: ScheduleData): FullScheduleMap => {
  const schedule: FullScheduleMap = {};

  scheduleData.classrooms.forEach(classroom => {
    schedule[classroom.id] = {};
    daysArray.forEach(day => {
      schedule[classroom.id][day] = {};
      scheduleData.periods.forEach(period => {
        schedule[classroom.id][day][period.id] = [];
      });
    });
  });

  scheduleData.cards.forEach(card => {
    const lesson = findById(scheduleData.lessons, card.lessonId);
    if (!lesson) return;

    const subject = findById(scheduleData.subjects, lesson.subjectId);
    const classes = lesson.classIds
      .map(cid => findById(scheduleData.classes, cid))
      .filter(Boolean);
    const teachers = lesson.teacherIds
      .map(tid => findById(scheduleData.teachers, tid))
      .filter(Boolean);
    const groups = lesson.groupIds
      .map(gid => findById(scheduleData.groups, gid))
      .filter(Boolean);

    card.classroomIds.forEach(classroomId => {
      if (schedule[classroomId]?.[card.days]?.[card.period]) {
        schedule[classroomId][card.days][card.period].push({
          subject: subject?.name || 'Невідомий предмет',
          classes: classes.map(c => c!.name),
          teachers: teachers.map(t => t!.name),
          groups: groups.map(g => g!.name),
          classrooms: []
        });
      }
    });
  });

  return schedule;
};
