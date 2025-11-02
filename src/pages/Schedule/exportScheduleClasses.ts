// exportScheduleClasses.ts
import { ScheduleData } from '@/type/scheduledata';
import { days } from './scheduleHelpers';

export function exportScheduleClasses(scheduleData: ScheduleData): void {
  if (!scheduleData || !scheduleData.classes || !Array.isArray(scheduleData.classes)) {
    console.error('No schedule data to export');
    return;
  }

  try {
    const periods = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    let text = 'teach\t';
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

    // Дані для кожного класу
    scheduleData.classes.forEach((cls) => {
      text += `${cls.name}`;
      
      days.forEach((day) => {
        periods.forEach((period) => {
          try {
            const cards = (scheduleData.cards || []).filter((card) => {
              const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
              return lesson && 
                     lesson.classIds && 
                     lesson.classIds.includes(cls.id) && 
                     card.days === day.id && 
                     card.period === period.toString();
            });

            if (cards.length > 0) {
              const cardTexts = cards.map((card) => {
                const lesson = (scheduleData.lessons || []).find((l) => l.id === card.lessonId);
                if (!lesson) return null;

                const subject = (scheduleData.subjects || []).find((s) => s.id === lesson.subjectId);
                const subjectName = subject ? subject.short : 'Невідомий предмет';

                const teacherIds = lesson.teacherIds || [];
                if (teacherIds.length === 0) {
                  return `${subjectName} / Невідомий вчитель`;
                }

                const teacherNames = teacherIds.map((teacherId) => {
                  const teacher = (scheduleData.teachers || []).find((t) => t.id === teacherId);
                  return teacher ? teacher.name : 'Невідомий вчитель';
                }).join(', ');

                return `${subjectName} / ${teacherNames}`;
              }).filter(t => t !== null);

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
      text += '\n\n';
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
