import React, { useState, useEffect } from 'react';
import { Table, FileText, Users, Calendar, Grid, BookOpen, DoorOpen, Download } from 'lucide-react';
import { xmlData } from './Schedule/xmlData';
import { ScheduleData } from '@/type/scheduledata';
import { getFullName } from './Schedule/teacherData';

export const TimetableParser = () => {
  const [scheduleData, setScheduleData] = useState(null);
  const [view, setView] = useState('classes');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedDay, setSelectedDay] = useState('10000');
  const [error, setError] = useState(null);

  useEffect(() => {
    const parseXML = () => {
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) {
          throw new Error('XML parsing error: ' + parseError.textContent);
        }

        const periods = Array.from(xmlDoc.querySelectorAll('period')).map(p => ({
          id: p.getAttribute('period'),
          name: p.getAttribute('name'),
          startTime: p.getAttribute('starttime'),
          endTime: p.getAttribute('endtime')
        }));

        const subjects = Array.from(xmlDoc.querySelectorAll('subject')).map(s => ({
          id: s.getAttribute('id'),
          name: s.getAttribute('name'),
          short: s.getAttribute('short')
        }));

        const teachers = Array.from(xmlDoc.querySelectorAll('teacher')).map(t => ({
          id: t.getAttribute('id'),
          name: t.getAttribute('name'),
          firstname: t.getAttribute('firstname'),
          lastname: t.getAttribute('lastname')
        }));

        const classrooms = Array.from(xmlDoc.querySelectorAll('classroom')).map(c => ({
          id: c.getAttribute('id'),
          name: c.getAttribute('name')
        }));

        const classes = Array.from(xmlDoc.querySelectorAll('class')).map(c => ({
          id: c.getAttribute('id'),
          name: c.getAttribute('name')
        }));

        const groups = Array.from(xmlDoc.querySelectorAll('group')).map(g => ({
          id: g.getAttribute('id'),
          name: g.getAttribute('name'),
          classId: g.getAttribute('classid')
        }));

        const lessons = Array.from(xmlDoc.querySelectorAll('lesson')).map(l => ({
          id: l.getAttribute('id'),
          subjectId: l.getAttribute('subjectid'),
          classIds: (l.getAttribute('classids') || '').split(',').filter(Boolean),
          teacherIds: (l.getAttribute('teacherids') || '').split(',').filter(Boolean),
          classroomIds: (l.getAttribute('classroomids') || '').split(',').filter(Boolean),
          groupIds: (l.getAttribute('groupids') || '').split(',').filter(Boolean)
        }));

        const cards = Array.from(xmlDoc.querySelectorAll('card')).map(c => ({
          lessonId: c.getAttribute('lessonid'),
          period: c.getAttribute('period'),
          days: c.getAttribute('days'),
          weeks: c.getAttribute('weeks'),
          terms: c.getAttribute('terms'),
          classroomIds: (c.getAttribute('classroomids') || '').split(',').filter(Boolean)
        }));

        return {
          periods,
          subjects,
          teachers,
          classrooms,
          classes,
          groups,
          lessons,
          cards
        };
      } catch (err) {
        console.error('Parse error:', err);
        setError(err.message);
        return null;
      }
    };

    const data = parseXML();
    console.log('data', data);

    if (data) {
      setScheduleData(data);
      if (data.classes.length > 0) setSelectedClass(data.classes[0].id);
      if (data.teachers.length > 0) setSelectedTeacher(data.teachers[0].id);
    }
  }, []);

  const getDayName = (dayBinary) => {
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця"];
    const index = dayBinary.split('').findIndex(d => d === '1');
    return days[index] || '';
  };

  const findById = (array, id) => array?.find(item => item.id === id);

  const getClassSchedule = (classId) => {
    if (!scheduleData) return {};

    const schedule = {};
    const days = ['10000', '01000', '00100', '00010', '00001'];

    days.forEach(day => {
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
          teachers: teachers.map(t => t.name),
          classrooms: classrooms.map(c => c.name),
          groups: groups.map(g => g.name)
        });
      }
    });

    return schedule;
  };

  const getTeacherSchedule = (teacherId) => {
    if (!scheduleData) return {};

    const schedule = {};
    const days = ['10000', '01000', '00100', '00010', '00001'];

    days.forEach(day => {
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
          classes: classes.map(c => c.name),
          classrooms: classrooms.map(c => c.name),
          groups: groups.map(g => g.name)
        });
      }
    });

    return schedule;
  };

  const getAllClassesSchedule = (day) => {
    if (!scheduleData) return {};

    const schedule = {};

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
            teachers: teachers.map(t => t.name),
            classrooms: classrooms.map(c => c.name),
            groups: groups.map(g => g.name)
          });
        }
      });
    });

    return schedule;
  };

  const getFullClassesSchedule = () => {
    if (!scheduleData) return {};

    const schedule = {};
    const days = ['10000', '01000', '00100', '00010', '00001'];

    scheduleData.classes.forEach(cls => {
      schedule[cls.id] = {};
      days.forEach(day => {
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
            teachers: teachers.map(t => t.name),
            classrooms: classrooms.map(c => c.name),
            groups: groups.map(g => g.name)
          });
        }
      });
    });

    return schedule;
  };

  const getFullTeachersSchedule = () => {
    if (!scheduleData) return {};

    const schedule = {};
    const days = ['10000', '01000', '00100', '00010', '00001'];

    scheduleData.teachers.forEach(teacher => {
      schedule[teacher.id] = {};
      days.forEach(day => {
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
            classes: classes.map(c => c.name),
            classrooms: classrooms.map(c => c.name),
            groups: groups.map(g => g.name)
          });
        }
      });
    });

    return schedule;
  };

  const getFullClassroomsSchedule = () => {
    if (!scheduleData) return {};

    const schedule = {};
    const days = ['10000', '01000', '00100', '00010', '00001'];

    scheduleData.classrooms.forEach(classroom => {
      schedule[classroom.id] = {};
      days.forEach(day => {
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
            classes: classes.map(c => c.name),
            teachers: teachers.map(t => t.name),
            groups: groups.map(g => g.name)
          });
        }
      });
    });

    return schedule;
  };

  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600 font-bold mb-2">Помилка завантаження</div>
        <div className="text-gray-600">{error}</div>
      </div>
    );
  }

  if (!scheduleData) {
    return <div className="p-8 text-center">Завантаження...</div>;
  }

  const days = ['10000', '01000', '00100', '00010', '00001'];
  const schedule = view === 'classes'
    ? getClassSchedule(selectedClass)
    : view === 'teachers'
      ? getTeacherSchedule(selectedTeacher)
      : null;
  const allClassesSchedule = view === 'all' ? getAllClassesSchedule(selectedDay) : null;
  const fullClassesSchedule = view === 'fullClasses' ? getFullClassesSchedule() : null;
  const fullTeachersSchedule = view === 'fullTeachers' ? getFullTeachersSchedule() : null;
  const fullClassroomsSchedule = view === 'fullClassrooms' ? getFullClassroomsSchedule() : null;



  function exportScheduleClasses(scheduleData: ScheduleData): void {
    if (!scheduleData) {
      console.error('No schedule data to export');
      return;
    }

    try {
      console.log(scheduleData);
      const days = [
        { id: '10000', enName: 'mo', name: 'Понеділок' },
        { id: '01000', enName: 'tu', name: 'Вівторок' },
        { id: '00100', enName: 'we', name: 'Середа' },
        { id: '00010', enName: 'th', name: 'Четвер' },
        { id: '00001', enName: 'fr', name: "Пʼятниця" }
      ];
      const periods = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      let text = 'teach' + '\t';
      days.forEach((day) => {
        for (let i = 1; i < periods.length; i++) {
          text += day.enName + periods[i] + '\t';
        }
      });
      text += '\n';
      // Перший рядок - назви днів (з об'єднанням для кожного дня)
      text += '';
      days.forEach((day) => {
        text += `\t${day.name}`;
        // Додаємо порожні комірки для решти уроків цього дня (крім першого)
        for (let i = 1; i < periods.length; i++) {
          text += '\t';
        }
      });
      text += '\n';

      // Другий рядок - номери уроків
      text += '';
      days.forEach(() => {
        periods.forEach((period) => {
          text += `\t${period}`;
        });
      });
      text += '\n';

      // Перевірка наявності необхідних даних
      if (!scheduleData.classes || !Array.isArray(scheduleData.classes)) {
        console.error('No classes data available');
        return;
      }

      // Дані для кожного класу (два рядки на клас)
      scheduleData.classes.forEach((cls) => {
        // Перший рядок класу - з предметами та вчителями
        text += `${cls.name}`;

        days.forEach((day) => {
          periods.forEach((period) => {
            try {
              // Знаходимо уроки для цього класу, дня та періоду
              const cards = (scheduleData.cards || []).filter((card) => {
                const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
                return lesson &&
                  lesson.classIds &&
                  lesson.classIds.includes(cls.id) &&
                  card.days === day.id &&
                  card.period === period.toString();
              });

              if (cards.length > 0) {
                // Обробляємо всі картки для цієї комірки
                const cardTexts = cards.map((card) => {
                  const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
                  if (!lesson) return null;

                  // Отримуємо предмет
                  const subject = (scheduleData.subjects || []).find((s) => s.id === lesson.subjectId);
                  const subjectName = subject ? subject.short : 'Невідомий предмет';

                  // Отримуємо вчителів
                  const teacherIds = lesson.teacherIds || [];

                  if (teacherIds.length === 0) {
                    return `${subjectName} / Невідомий вчитель`;
                  }

                  const teacherNames = teacherIds.map((teacherId) => {
                    const teacher = (scheduleData.teachers || []).find((t) => t.id === teacherId);
                    return teacher ? teacher.name : 'Невідомий вчитель';
                  }).join(', ');

                  // Отримуємо групи
                  let groupInfo = '';
                  if (lesson.groupIds && lesson.groupIds.length > 0) {
                    const groups = lesson.groupIds.map((groupId) => {
                      const group = (scheduleData.groups || []).find((g) => g.id === groupId);
                      return group ? group.name : null;
                    }).filter(g => g !== null);

                    if (groups.length > 0) {
                      groupInfo = groups.join(', ');
                    }
                  }

                  // Отримуємо кабінети
                  let classroomInfo = '';
                  if (lesson.classroomIds && lesson.classroomIds.length > 0) {
                    const classrooms = lesson.classroomIds.map((classroomId) => {
                      const classroom = (scheduleData.classrooms || []).find((c) => c.id === classroomId);
                      return classroom ? classroom.name : null;
                    }).filter(c => c !== null);

                    if (classrooms.length > 0) {
                      classroomInfo = classrooms.join(', ');
                    }
                  }

                  // Формуємо додаткову інформацію (група та кабінет)
                  const additionalInfo = [groupInfo, classroomInfo].filter(info => info !== '').join(', ');
                  const additionalText = additionalInfo ? ` | ${additionalInfo}` : '';

                  return `${subjectName} / ${teacherNames}${additionalText}`;
                }).filter(t => t !== null); // Видаляємо null значення

                // З'єднуємо всі картки через ";"
                text += `\t${cardTexts.join('; ')}`;
              } else {
                text += '\t';
              }
            } catch (err) {
              console.error('Error processing cell:', err);
              text += '\t';
            }
          });
        });
        text += '\n';

        // Другий рядок класу - порожній
        text += '';
        days.forEach(() => {
          periods.forEach(() => {
            text += '\t';
          });
        });
        text += '\n';
      });

      console.log(text);

      // Завантаження файлу
      const blob = new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');

      const filename = `schedule_export_${new Date()
        .toISOString()
        .replace(/[:.]/g, '-')}.txt`;

      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export schedule:', err);
    }
  }

  function exportScheduleTeachers(scheduleData: ScheduleData): void {
    if (!scheduleData) {
      console.error('No schedule data to export');
      return;
    }

    try {
      console.log(scheduleData);
      const days = [
        { id: '10000', enName: 'mo', name: 'Понеділок' },
        { id: '01000', enName: 'tu', name: 'Вівторок' },
        { id: '00100', enName: 'we', name: 'Середа' },
        { id: '00010', enName: 'th', name: 'Четвер' },
        { id: '00001', enName: 'fr', name: "Пʼятниця" }
      ];
      const periods = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      let text = 'clas' + '\t';
      days.forEach((day) => {
        for (let i = 1; i < periods.length; i++) {
          text += day.enName + periods[i] + '\t';
        }
      });
      text += '\n';

      // Перший рядок - назви днів (з об'єднанням для кожного дня)
      text += '';
      days.forEach((day) => {
        text += `\t${day.name}`;
        // Додаємо порожні комірки для решти уроків цього дня (крім першого)
        for (let i = 1; i < periods.length; i++) {
          text += '\t';
        }
      });
      text += '\n';

      // Другий рядок - номери уроків
      text += '';
      days.forEach(() => {
        periods.forEach((period) => {
          text += `\t${period}`;
        });
      });
      text += '\n';

      // Перевірка наявності необхідних даних
      if (!scheduleData.classes || !Array.isArray(scheduleData.classes)) {
        console.error('No classes data available');
        return;
      }

      // Дані для кожного вчителя (два рядки на вчителя)
      scheduleData.teachers.forEach((teacher) => {
        let classRow = `${getFullName(teacher.name)}`;
        let subjectRow = '';

        days.forEach((day) => {
          periods.forEach((period) => {
            try {
              // Знаходимо уроки для цього вчителя, дня та періоду
              const cards = (scheduleData.cards || []).filter((card) => {
                const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
                return lesson &&
                  lesson.teacherIds &&
                  lesson.teacherIds.includes(teacher.id) &&
                  card.days === day.id &&
                  card.period === period.toString();
              });

              if (cards.length > 0) {
                // Обробляємо всі картки для цієї комірки
                const classNames: string[] = [];
                const subjectNames: string[] = [];

                cards.forEach((card) => {
                  const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
                  if (!lesson) return;

                  // Отримуємо предмет
                  const subject = (scheduleData.subjects || []).find((s) => s.id === lesson.subjectId);
                  const subjectName = subject ? subject.short : 'Невідомий предмет';

                  // Отримуємо класи
                  const classIds = lesson.classIds || [];

                  if (classIds.length === 0) {
                    classNames.push('Невідома група');
                  } else {
                    const currentClassNames = classIds.map((classId) => {
                      const cls = (scheduleData.classes || []).find((c) => c.id === classId);
                      return cls ? cls.name : 'Невідома група';
                    }).join(', ');
                    classNames.push(currentClassNames);
                  }

                  // Отримуємо групи
                  let groupInfo = '';
                  if (lesson.groupIds && lesson.groupIds.length > 0) {
                    const groups = lesson.groupIds.map((groupId) => {
                      const group = (scheduleData.groups || []).find((g) => g.id === groupId);
                      return group ? group.name : null;
                    }).filter(g => g !== null);

                    if (groups.length > 0) {
                      groupInfo = groups.join(', ');
                    }
                  }

                  // Отримуємо кабінети
                  let classroomInfo = '';
                  if (lesson.classroomIds && lesson.classroomIds.length > 0) {
                    const classrooms = lesson.classroomIds.map((classroomId) => {
                      const classroom = (scheduleData.classrooms || []).find((c) => c.id === classroomId);
                      return classroom ? classroom.name : null;
                    }).filter(c => c !== null);

                    if (classrooms.length > 0) {
                      classroomInfo = classrooms.join(', ');
                    }
                  }

                  // Формуємо додаткову інформацію (група та кабінет)
                  const additionalInfo = [groupInfo, classroomInfo].filter(info => info !== '').join(', ');
                  const additionalText = additionalInfo ? ` | ${additionalInfo}` : '';

                  // subjectNames.push(`${subjectName}${additionalText}`);
                  subjectNames.push(`${subjectName}`);
                });

                // З'єднуємо всі дані через ";"
                classRow += `\t${classNames.join('/')}`;
                subjectRow += `\t${subjectNames[0]}`;
                // subjectRow += `\t${subjectNames.join('; ')}`;
              } else {
                classRow += '\t';
                subjectRow += '\t';
              }
            } catch (err) {
              console.error('Error processing cell:', err);
              classRow += '\t';
              subjectRow += '\t';
            }
          });
        });

        // Додаємо два рядки для вчителя
        text += classRow + '\n';
        text += subjectRow + '\n';

        // Третій порожній рядок для розділення
        text += '';
        days.forEach(() => {
          periods.forEach(() => {
            text += '\t';
          });
        });
        text += '\n';
      });

      console.log(text);

      // Завантаження файлу
      const blob = new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');

      const filename = `schedule_export_${new Date()
        .toISOString()
        .replace(/[:.]/g, '-')}.txt`;

      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export schedule:', err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="w-8 h-8" />
          Розклад уроків
        </h1>

        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex gap-2 items-center flex-wrap">
            <button
              onClick={() => setView('classes')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'classes'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <Users className="w-4 h-4" />
              Розклад класу
            </button>
            <button
              onClick={() => setView('teachers')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'teachers'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <FileText className="w-4 h-4" />
              Розклад вчителя
            </button>
            <button
              onClick={() => setView('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <Table className="w-4 h-4" />
              Загальний (день)
            </button>
            <button
              onClick={() => setView('fullClasses')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'fullClasses'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <Grid className="w-4 h-4" />
              Повний розклад класів
            </button>
            <button
              onClick={() => setView('fullTeachers')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'fullTeachers'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <BookOpen className="w-4 h-4" />
              Повний розклад вчителів
            </button>
            <button
              onClick={() => setView('fullClassrooms')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'fullClassrooms'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <DoorOpen className="w-4 h-4" />

              Повний розклад кабінетів
            </button>
            {view === 'fullClasses' ? (
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition 
                 bg-blue-600 text-white hover:bg-blue-700`}
                onClick={() => exportScheduleClasses(scheduleData)}
              >
                <Download className="w-4 h-4" /> Експорт розкладу
              </button>
            ) : null}
            {view === 'fullTeachers' ? (
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition 
                 bg-blue-600 text-white hover:bg-blue-700`}
                onClick={() => exportScheduleTeachers(scheduleData)}
              >
                <Download className="w-4 h-4" /> Експорт розкладу
              </button>
            ) : null}
          </div>

          <div className="mt-4">
            {view === 'classes' ? (
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {scheduleData.classes.map(cls => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            ) : view === 'teachers' ? (
              <select
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {scheduleData.teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            ) : view === 'all' ? (
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {days.map(day => (
                  <option key={day} value={day}>
                    {getDayName(day)}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto max-h-[calc(100vh-250px)] overflow-y-auto">
            {view === 'all' ? (
              <table className="w-full">
                <thead className="bg-blue-600 text-white sticky top-0 z-20">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold sticky left-0 bg-blue-600 z-30">Урок</th>
                    {scheduleData.classes.map(cls => (
                      <th key={cls.id} className="px-4 py-3 text-left font-semibold min-w-[200px]">
                        {cls.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.periods.map((period, idx) => (
                    <tr key={period.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 border-b border-gray-200 sticky left-0 bg-inherit z-10">
                        <div className="font-semibold text-gray-800">{period.name} урок</div>
                        <div className="text-xs text-gray-600">
                          {period.startTime} - {period.endTime}
                        </div>
                      </td>
                      {scheduleData.classes.map(cls => (
                        <td key={`${period.id}-${cls.id}`} className="px-4 py-3 border-b border-gray-200 align-top">
                          {allClassesSchedule[cls.id]?.[period.id]?.map((lesson, lessonIdx) => (
                            <div key={lessonIdx} className="mb-2 last:mb-0 p-2 bg-blue-50 rounded">
                              <div className="text-sm font-semibold text-blue-700">
                                {lesson.subject}
                              </div>
                              {lesson.teachers.length > 0 && (
                                <div className="text-xs text-gray-600">
                                  👤 {lesson.teachers.join(', ')}
                                </div>
                              )}
                              {lesson.classrooms.length > 0 && (
                                <div className="text-xs text-gray-600">
                                  🚪 Каб. {lesson.classrooms.join(', ')}
                                </div>
                              )}
                              {lesson.groups.length > 0 && lesson.groups[0] !== 'Весь клас' && (
                                <div className="text-xs text-gray-500">
                                  👥 {lesson.groups.join(', ')}
                                </div>
                              )}
                            </div>
                          ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : view === 'fullClasses' ? (
              <table className="w-full text-sm">
                <thead className="bg-blue-600 text-white sticky top-0 z-20">
                  <tr>
                    <th className="px-2 py-2 text-left font-semibold sticky left-0 bg-blue-600 z-30 min-w-[120px]">Клас</th>
                    {days.map(day => (
                      scheduleData.periods.map(period => (
                        <th key={`${day}-${period.id}`} className="px-2 py-2 text-center font-semibold min-w-[150px] border-l border-blue-500">
                          <div>{getDayName(day)}</div>
                          <div className="text-xs">{period.name} урок</div>
                        </th>
                      ))
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.classes.map((cls, idx) => (
                    <tr key={cls.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 py-2 border-b border-gray-200 sticky left-0 bg-inherit z-10 font-semibold text-gray-800">
                        {cls.name}
                      </td>
                      {days.map(day => (
                        scheduleData.periods.map(period => (
                          <td key={`${cls.id}-${day}-${period.id}`} className="px-2 py-2 border-b border-l border-gray-200 align-top">
                            {fullClassesSchedule[cls.id]?.[day]?.[period.id]?.map((lesson, lessonIdx) => (
                              <div key={lessonIdx} className="mb-1 last:mb-0 p-1 bg-blue-50 rounded text-xs">
                                <div className="font-semibold text-blue-700">
                                  {lesson.subject}
                                </div>
                                {lesson.teachers.length > 0 && (
                                  <div className="text-gray-600">
                                    {lesson.teachers.join(', ')}
                                  </div>
                                )}
                                {lesson.classrooms.length > 0 && (
                                  <div className="text-gray-600">
                                    Каб. {lesson.classrooms.join(', ')}
                                  </div>
                                )}
                              </div>
                            ))}
                          </td>
                        ))
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : view === 'fullTeachers' ? (
              <table className="w-full text-sm">
                <thead className="bg-blue-600 text-white sticky top-0 z-20">
                  <tr>
                    <th className="px-2 py-2 text-left font-semibold sticky left-0 bg-blue-600 z-30 min-w-[150px]">Вчитель</th>
                    {days.map(day => (
                      scheduleData.periods.map(period => (
                        <th key={`${day}-${period.id}`} className="px-2 py-2 text-center font-semibold min-w-[150px] border-l border-blue-500">
                          <div>{getDayName(day)}</div>
                          <div className="text-xs">{period.name} урок</div>
                        </th>
                      ))
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.teachers.map((teacher, idx) => (
                    <tr key={teacher.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 py-2 border-b border-gray-200 sticky left-0 bg-inherit z-10 font-semibold text-gray-800">
                        {teacher.name}
                      </td>
                      {days.map(day => (
                        scheduleData.periods.map(period => (
                          <td key={`${teacher.id}-${day}-${period.id}`} className="px-2 py-2 border-b border-l border-gray-200 align-top">
                            {fullTeachersSchedule[teacher.id]?.[day]?.[period.id]?.map((lesson, lessonIdx) => (
                              <div key={lessonIdx} className="mb-1 last:mb-0 p-1 bg-blue-50 rounded text-xs">
                                <div className="font-semibold text-blue-700">
                                  {lesson.subject}
                                </div>
                                {lesson.classes.length > 0 && (
                                  <div className="text-gray-600">
                                    {lesson.classes.join(', ')}
                                  </div>
                                )}
                                {lesson.classrooms.length > 0 && (
                                  <div className="text-gray-600">
                                    Каб. {lesson.classrooms.join(', ')}
                                  </div>
                                )}
                              </div>
                            ))}
                          </td>
                        ))
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : view === 'fullClassrooms' ? (
              <table className="w-full text-sm">
                <thead className="bg-blue-600 text-white sticky top-0 z-20">
                  <tr>
                    <th className="px-2 py-2 text-left font-semibold sticky left-0 bg-blue-600 z-30 min-w-[120px]">Кабінет</th>
                    {days.map(day => (
                      scheduleData.periods.map(period => (
                        <th key={`${day}-${period.id}`} className="px-2 py-2 text-center font-semibold min-w-[150px] border-l border-blue-500">
                          <div>{getDayName(day)}</div>
                          <div className="text-xs">{period.name} урок</div>
                        </th>
                      ))
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.classrooms.map((classroom, idx) => (
                    <tr key={classroom.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 py-2 border-b border-gray-200 sticky left-0 bg-inherit z-10 font-semibold text-gray-800">
                        {classroom.name}
                      </td>
                      {days.map(day => (
                        scheduleData.periods.map(period => (
                          <td key={`${classroom.id}-${day}-${period.id}`} className="px-2 py-2 border-b border-l border-gray-200 align-top">
                            {fullClassroomsSchedule[classroom.id]?.[day]?.[period.id]?.map((lesson, lessonIdx) => (
                              <div key={lessonIdx} className="mb-1 last:mb-0 p-1 bg-blue-50 rounded text-xs">
                                <div className="font-semibold text-blue-700">
                                  {lesson.subject}
                                </div>
                                {lesson.classes.length > 0 && (
                                  <div className="text-gray-600">
                                    {lesson.classes.join(', ')}
                                  </div>
                                )}
                                {lesson.teachers.length > 0 && (
                                  <div className="text-gray-600">
                                    {lesson.teachers.join(', ')}
                                  </div>
                                )}
                              </div>
                            ))}
                          </td>
                        ))
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full">
                <thead className="bg-blue-600 text-white sticky top-0 z-20">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold sticky left-0 bg-blue-600 z-30">Урок / Час</th>
                    {days.map(day => (
                      <th key={day} className="px-4 py-3 text-left font-semibold">
                        {getDayName(day)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.periods.map((period, idx) => (
                    <tr key={period.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 border-b border-gray-200 sticky left-0 bg-inherit z-10">
                        <div className="font-semibold text-gray-800">{period.name} урок</div>
                        <div className="text-sm text-gray-600">
                          {period.startTime} - {period.endTime}
                        </div>
                      </td>
                      {days.map(day => (
                        <td key={`${period.id}-${day}`} className="px-4 py-3 border-b border-gray-200">
                          {schedule[day]?.[period.id]?.map((lesson, lessonIdx) => (
                            <div key={lessonIdx} className="mb-2 last:mb-0 p-2 bg-blue-50 rounded">
                              <div className="text-sm font-semibold text-blue-700">
                                {lesson.subject}
                              </div>
                              {view === 'classes' ? (
                                <>
                                  {lesson.teachers.length > 0 && (
                                    <div className="text-xs text-gray-600">
                                      👤 {lesson.teachers.join(', ')}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <>
                                  {lesson.classes.length > 0 && (
                                    <div className="text-xs text-gray-600">
                                      📚 {lesson.classes.join(', ')}
                                    </div>
                                  )}
                                </>
                              )}
                              {lesson.classrooms.length > 0 && (
                                <div className="text-xs text-gray-600">
                                  🚪 Каб. {lesson.classrooms.join(', ')}
                                </div>
                              )}
                              {lesson.groups.length > 0 && lesson.groups[0] !== 'Весь клас' && (
                                <div className="text-xs text-gray-500">
                                  👥 {lesson.groups.join(', ')}
                                </div>
                              )}
                            </div>
                          ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Позначення:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
            <div>👤 - Вчитель</div>
            <div>🚪 - Кабінет</div>
            <div>📚 - Клас</div>
            <div>👥 - Група</div>
          </div>
        </div>
      </div>
    </div>
  );
};
