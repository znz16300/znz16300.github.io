// ScheduleTable.tsx
import React from 'react';
import { ScheduleData, WeekSchedule } from '@/type/scheduledata';
import { getDayName, daysArray } from './scheduleHelpers';
import { WeekType, getLessonBackgroundColor, getDistTypeBadge } from './distDataHelper';
import { getLessonDistType } from './distData';

interface ScheduleTableProps {
  className: string;
  scheduleData: ScheduleData;
  schedule: WeekSchedule;
  view: string;
  weekType: WeekType;
}

export const ScheduleTable: React.FC<ScheduleTableProps> = ({ className, scheduleData, schedule, view, weekType }) => {
  console.log('view--', view);
  
  return (
    <table className="w-full table-fixed">
      <thead className="bg-blue-600 text-white sticky top-0 z-20">
        <tr>
          <th className="px-4 py-3 text-left font-semibold sticky left-0 bg-blue-600 z-30 w-40">Урок / Час</th>
          {daysArray.map(day => (
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
            {daysArray.map(day => (
              <td key={`${period.id}-${day}`} className="px-4 py-3 border-b border-gray-200">
                {schedule[day]?.[period.id]?.map((lesson, lessonIdx) => {
                  // Визначаємо колір фону для картки уроку
                  console.log('Class--', className);
                  
                  const bgColor = (view === 'teachers' || view === 'classes') && lesson.classes
                    ? getLessonBackgroundColor(lesson.classes, weekType)
                    : 'bg-blue-50';
                  
                  // Визначаємо бейдж для вчителів
                  const distType = view === 'teachers' && lesson.classes
                    ? getLessonDistType(lesson.classes, weekType)
                    : null;
                  const badge = distType ? getDistTypeBadge(distType) : null;
                  
                  return (
                    <div key={lessonIdx} className={`mb-2 last:mb-0 p-2 rounded border ${bgColor} ${bgColor !== 'bg-blue-50' ? 'border-current' : 'border-gray-200'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-sm font-semibold text-blue-700 flex-1">
                          {lesson.subject}
                        </div>
                        {badge && (
                          <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${badge.color}`}>
                            {badge.label}
                          </span>
                        )}
                      </div>
                      {view === 'classes' ? (
                        <>
                          {lesson.teachers && lesson.teachers.length > 0 && (
                            <div className="text-xs text-gray-600">
                              👤 {lesson.teachers.join(', ')}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {lesson.classes && lesson.classes.length > 0 && (
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
                  );
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
