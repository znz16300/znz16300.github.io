// AllClassesTable.tsx
import React from 'react';
import { ScheduleData, DaySchedule } from '@/type/scheduledata';
import { WeekType, getCellBackgroundColor, getDistTypeBadge } from './distDataHelper';
import { getDistData } from './distData';

interface AllClassesTableProps {
  scheduleData: ScheduleData;
  allClassesSchedule: Record<string, DaySchedule>;
  weekType: WeekType;
}

export const AllClassesTable: React.FC<AllClassesTableProps> = ({ scheduleData, allClassesSchedule, weekType }) => {
  return (
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
              <td key={`${period.id}-${cls.id}`} className={`px-4 py-3 border-b border-gray-200 align-top ${getCellBackgroundColor(cls.name, weekType)}`}>
                {allClassesSchedule[cls.id]?.[period.id]?.map((lesson, lessonIdx) => {
                  const distType = getDistData(cls.name, weekType);
                  const badge = getDistTypeBadge(distType);
                  
                  return (
                    <div key={lessonIdx} className="mb-2 last:mb-0 p-2 bg-white bg-opacity-70 rounded border border-gray-200">
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
