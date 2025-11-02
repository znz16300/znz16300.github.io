// TimetableParser.tsx
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { xmlData } from './xmlData';
import type { ScheduleData } from '@/type/scheduledata';
import { parseXMLData } from './xmlParser';
import { getClassSchedule, getTeacherSchedule } from './scheduleGenerators';
import { getAllClassesSchedule, getFullClassesSchedule } from './fullScheduleGenerators';
import { getFullTeachersSchedule, getFullClassroomsSchedule } from './fullScheduleGenerators2';
import { exportScheduleClasses } from './exportScheduleClasses';
import { exportScheduleTeachers } from './exportScheduleTeachers';
import { ScheduleTable } from './ScheduleTable';
import { AllClassesTable } from './AllClassesTable';
import { FullScheduleTable } from './FullScheduleTable';
import { ViewControls } from './ViewControls';
import { SelectionControls } from './SelectionControls';
import { Legend } from './Legend';
import type { WeekType } from './distDataHelper';

export const TimetableParser2: React.FC = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [view, setView] = useState<string>('classes');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('10000');
  const [weekType, setWeekType] = useState<WeekType>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const data = parseXMLData(xmlData);
    
    if (data) {
      setScheduleData(data);
      if (data.classes.length > 0) setSelectedClass(data.classes[0].id);
      if (data.teachers.length > 0) setSelectedTeacher(data.teachers[0].id);
    } else {
      setError('Помилка парсингу XML');
    }
  }, []);

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

  const schedule = view === 'classes'
    ? getClassSchedule(scheduleData, selectedClass)
    : view === 'teachers'
      ? getTeacherSchedule(scheduleData, selectedTeacher)
      : null;
  
  const allClassesSchedule = view === 'all' 
    ? getAllClassesSchedule(scheduleData, selectedDay) 
    : null;
  
  const fullClassesSchedule = view === 'fullClasses' 
    ? getFullClassesSchedule(scheduleData) 
    : null;
  
  const fullTeachersSchedule = view === 'fullTeachers' 
    ? getFullTeachersSchedule(scheduleData) 
    : null;
  
  const fullClassroomsSchedule = view === 'fullClassrooms' 
    ? getFullClassroomsSchedule(scheduleData) 
    : null;

  const renderScheduleView = () => {
    if (view === 'all' && allClassesSchedule) {
      return (
        <AllClassesTable 
          scheduleData={scheduleData} 
          allClassesSchedule={allClassesSchedule} 
          weekType={weekType} 
        />
      );
    }
    
    if (view === 'fullClasses' && fullClassesSchedule) {
      return (
        <FullScheduleTable 
          scheduleData={scheduleData} 
          fullSchedule={fullClassesSchedule} 
          view="fullClasses" 
          weekType={weekType} 
        />
      );
    }
    
    if (view === 'fullTeachers' && fullTeachersSchedule) {
      return (
        <FullScheduleTable 
          scheduleData={scheduleData} 
          fullSchedule={fullTeachersSchedule} 
          view="fullTeachers" 
          weekType={weekType} 
        />
      );
    }
    
    if (view === 'fullClassrooms' && fullClassroomsSchedule) {
      return (
        <FullScheduleTable 
          scheduleData={scheduleData} 
          fullSchedule={fullClassroomsSchedule} 
          view="fullClassrooms" 
          weekType={weekType} 
        />
      );
    }
    
    if (schedule) {
      return (
        <ScheduleTable 
          scheduleData={scheduleData} 
          schedule={schedule} 
          view={view} 
          weekType={weekType} 
        />
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="w-8 h-8" />
          Розклад уроків
        </h1>

        <ViewControls 
          view={view} 
          setView={setView}
          onExportClasses={() => exportScheduleClasses(scheduleData)}
          onExportTeachers={() => exportScheduleTeachers(scheduleData)}
        />

        <SelectionControls
          view={view}
          scheduleData={scheduleData}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedTeacher={selectedTeacher}
          setSelectedTeacher={setSelectedTeacher}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          weekType={weekType}
          setWeekType={setWeekType}
        />

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto max-h-[calc(100vh-250px)] overflow-y-auto">
            {renderScheduleView()}
          </div>
        </div>

        <Legend />
      </div>
    </div>
  );
};
