// exportScheduleTeachers.ts
import { ScheduleData } from '@/type/scheduledata';
import { days } from './scheduleHelpers';
import { getFullName } from './teacherData';

export function exportScheduleTeachers(scheduleData: ScheduleData): void {
  if (!scheduleData || !scheduleData.classes || !Array.isArray(scheduleData.classes)) {
    console.error('No schedule data to export');
    return;
  }

  try {
    const periods = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    let text = 'clas\t';
    days.forEach((day) => {
      for (let i = 1; i < periods.length; i++) {
        text += day.enName + periods[i] + '\t';
      }
    });
    text += '\n';
    
    // Перший рядок - назви днів
    text += '';
    days.forEach((day) => {
      text += `\t${day.name}`;
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

    // Дані для кожного вчителя (два рядки на вчителя)
    scheduleData.teachers.forEach((teacher) => {
      let classRow = `${getFullName(teacher.name)}`;
      let subjectRow = '';

      days.forEach((day) => {
        periods.forEach((period) => {
          try {
            const cards = (scheduleData.cards || []).filter((card) => {
              const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
              return lesson && 
                     lesson.teacherIds && 
                     lesson.teacherIds.includes(teacher.id) && 
                     card.days === day.id && 
                     card.period === period.toString();
            });

            if (cards.length > 0) {
              const classNames: string[] = [];
              const subjectNames: string[] = [];

              cards.forEach((card) => {
                const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
                if (!lesson) return;

                const subject = (scheduleData.subjects || []).find((s) => s.id === lesson.subjectId);
                const subjectName = subject ? subject.short : 'Невідомий предмет';

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

                subjectNames.push(`${subjectName}`);
              });

              classRow += `\t${classNames.join('/')}`;
              subjectRow += `\t${subjectNames[0]}`;
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
      
      text += classRow + '\n';
      text += subjectRow + '\n\n';
    });

    downloadFile(text);
  } catch (err) {
    console.error('Failed to export schedule:', err);
  }
}

function downloadFile(text: string): void {
  const blob = new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const filename = `schedule_export_${new Date().toISOString().replace(/[:.]/g, '-')}.txt`;
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
