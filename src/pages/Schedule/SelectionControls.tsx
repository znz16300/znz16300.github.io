// SelectionControls.tsx
import React from 'react';
import { ScheduleData } from '@/type/scheduledata';
import { getDayName, daysArray } from './scheduleHelpers';
import { WeekType, getWeekTypeLabel } from './distDataHelper';

interface SelectionControlsProps {
  view: string;
  scheduleData: ScheduleData;
  selectedClass: string;
  setSelectedClass: (id: string) => void;
  selectedTeacher: string;
  setSelectedTeacher: (id: string) => void;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  weekType: WeekType;
  setWeekType: (week: WeekType) => void;
}

export const SelectionControls: React.FC<SelectionControlsProps> = ({
  view,
  scheduleData,
  selectedClass,
  setSelectedClass,
  selectedTeacher,
  setSelectedTeacher,
  selectedDay,
  setSelectedDay,
  weekType,
  setWeekType
}) => {
  const selectClass = "w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const showWeekSelector = ['fullClasses', 'fullTeachers', 'teachers', 'classes', 'all'].includes(view);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-wrap gap-4">
        {view === 'classes' ? (
          <><select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className={selectClass}
          >
            {scheduleData.classes.map(cls => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select><div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Тип тижня: {weekType === 0 ? 'Д' : 'О'}</span>
            </div></>
        ) : view === 'teachers' ? (
          <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className={selectClass}
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
            className={selectClass}
          >
            {daysArray.map(day => (
              <option key={day} value={day}>
                {getDayName(day)}
              </option>
            ))}
          </select>
        ) : null}

        {showWeekSelector && (
          <select
            value={weekType}
            onChange={(e) => setWeekType(Number(e.target.value) as WeekType)}
            className={selectClass}
          >
            <option value={0}>{getWeekTypeLabel(0)}</option>
            <option value={1}>{getWeekTypeLabel(1)}</option>
          </select>
        )}
      </div>
    </div>
  );
};
