// FullScheduleTable.tsx
import React from 'react';
import { ScheduleData, WeekSchedule } from '@/type/scheduledata';
import { getDayName, daysArray } from './scheduleHelpers';
import { WeekType, getCellBackgroundColor, getDistTypeBadge } from './distDataHelper';
import { getDistData, getLessonDistType } from './distData';

interface FullScheduleTableProps {
  scheduleData: ScheduleData;
  schedule: ScheduleData;
  fullSchedule: Record<string, WeekSchedule>;
  view: 'fullClasses' | 'fullTeachers' | 'fullClassrooms';
  weekType: WeekType;
}

export const FullScheduleTable: React.FC<FullScheduleTableProps> = ({ scheduleData, schedule, fullSchedule, view, weekType }) => {
  const getItems = () => {
    if (view === 'fullClasses') return scheduleData.classes;
    if (view === 'fullTeachers') return scheduleData.teachers;
    
    return scheduleData.classrooms;
  };

  const getHeaderLabel = () => {
    if (view === 'fullClasses') return 'Клас';
    if (view === 'fullTeachers') return 'Вчитель';
    return 'Кабінет';
  };

  const items = getItems();

  return (
    <table className="w-full text-sm">
      <thead className="bg-blue-600 text-white sticky top-0 z-20">
        <tr>
          <th className="px-2 py-2 text-left font-semibold sticky left-0 bg-blue-600 z-30 min-w-[120px]">
            {getHeaderLabel()}
          </th>
          {daysArray.map(day => (
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
        {items.map((item, idx) => {
          // Пропускаємо кабінети з _, якщо є основний кабінет
          if (view === 'fullClassrooms' && item.name.endsWith('_')) {
            const baseName = item.name.slice(0, -1);
            const hasBaseClassroom = scheduleData.classrooms.some(c => c.name === baseName);
            if (hasBaseClassroom) {
              return null;
            }
          }
          
          return (
            <tr key={item.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-2 py-2 border-b border-gray-200 sticky left-0 bg-inherit z-10 font-semibold text-gray-800">
                {item.name}
              </td>
              {daysArray.map(day => (
                scheduleData.periods.map(period => {
                  // Для класів - фон комірки залежить від класу
                  const cellBgColor = view === 'fullClasses' ? getCellBackgroundColor(item.name, weekType) : '';
                  
                  return (
                    <td key={`${item.id}-${day}-${period.id}`} className={`px-2 py-2 border-b border-l border-gray-200 align-top ${cellBgColor}`}>
                      {(() => {
                        // Збираємо уроки з поточного елементу
                        const mainLessons = fullSchedule[item.id]?.[day]?.[period.id] || [];
                        let allLessons = [...mainLessons];
                        
                        // Якщо це кабінети, додаємо уроки з кабінету з _
                        if (view === 'fullClassrooms') {
                          const classroomWithUnderscore = scheduleData.classrooms.find(c => c.name === `${item.name}_`);
                          if (classroomWithUnderscore && fullSchedule[classroomWithUnderscore.id]) {
                            const underscoreLessons = fullSchedule[classroomWithUnderscore.id]?.[day]?.[period.id] || [];
                            allLessons = [...allLessons, ...underscoreLessons];
                          }
                        }
                        
                        return allLessons.map((lesson, lessonIdx) => {
                          // Визначаємо тип уроку та бейдж
                          let distType = null;
                          let cardBgColor = 'bg-white bg-opacity-70';
                          
                          if (view === 'fullClasses') {
                            // Для класів - беремо тип навчання класу
                            distType = getDistData(item.name, weekType);
                          } else if ((view === 'fullTeachers' || view === 'fullClassrooms') && lesson.classes && lesson.classes.length > 0) {
                            // Для вчителів та кабінетів - визначаємо за класами в уроці
                            distType = getLessonDistType(lesson.classes, weekType);
                            // Колір картки залежить від типу уроку
                            if (distType === 'д') {
                              cardBgColor = 'bg-orange-100 bg-opacity-70';
                            } else if (distType === 'о') {
                              cardBgColor = 'bg-green-100 bg-opacity-70';
                            } else if (distType === 'змішаний') {
                              cardBgColor = 'bg-yellow-100 bg-opacity-70';
                            }
                          }
                          
                          const badge = distType ? getDistTypeBadge(distType) : null;
                          
                          return (
                            <div key={lessonIdx} className={`mb-1 last:mb-0 p-1 ${cardBgColor} rounded text-xs border border-gray-200`}>
                              <div className="flex items-center gap-1 mb-0.5">
                                <div className="font-semibold text-blue-700 flex-1">
                                  {lesson.subject}
                                </div>
                                {badge && (
                                  <span className={`px-1 py-0.5 rounded text-[10px] font-bold ${badge.color}`}>
                                    {badge.label}
                                  </span>
                                )}
                              </div>
                              {lesson.teachers && lesson.teachers.length > 0 && (
                                <div className="text-gray-600">
                                  {lesson.teachers.join(', ')}
                                </div>
                              )}
                              {lesson.classes && lesson.classes.length > 0 && (
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
                          );
                        });
                      })()}
                    </td>
                  );
                })
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
