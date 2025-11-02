/* eslint-disable @typescript-eslint/no-explicit-any */
// // TimetableParser.tsx
// import React, { useState, useEffect } from 'react';
// import { Calendar } from 'lucide-react';
// import { xmlData } from './xmlData';
// import type { ScheduleData } from '@/type/scheduledata';
// import { parseXMLData } from './xmlParser';
// import { getClassSchedule, getTeacherSchedule } from './scheduleGenerators';
// import { getAllClassesSchedule, getFullClassesSchedule } from './fullScheduleGenerators';
// import { getFullTeachersSchedule, getFullClassroomsSchedule } from './fullScheduleGenerators2';
// import { exportScheduleClasses } from './exportScheduleClasses';
// import { exportScheduleTeachers } from './exportScheduleTeachers';
// import { ScheduleTable } from './ScheduleTable';
// import { AllClassesTable } from './AllClassesTable';
// import { FullScheduleTable } from './FullScheduleTable';
// import { ViewControls } from './ViewControls';
// import { SelectionControls } from './SelectionControls';
// import { Legend } from './Legend';
// import type { WeekType } from './distDataHelper';

// export const TimetableParser2: React.FC = () => {
//   const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
//   const [view, setView] = useState<string>('classes');
//   const [selectedClass, setSelectedClass] = useState<string>('');
//   const [selectedTeacher, setSelectedTeacher] = useState<string>('');
//   const [selectedDay, setSelectedDay] = useState<string>('10000');
//   const [weekType, setWeekType] = useState<WeekType>(0);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const data = parseXMLData(xmlData);
    
//     if (data) {
//       setScheduleData(data);
//       if (data.classes.length > 0) setSelectedClass(data.classes[0].id);
//       if (data.teachers.length > 0) setSelectedTeacher(data.teachers[0].id);
//     } else {
//       setError('Помилка парсингу XML');
//     }
//   }, []);

//   if (error) {
//     return (
//       <div className="p-8 text-center">
//         <div className="text-red-600 font-bold mb-2">Помилка завантаження</div>
//         <div className="text-gray-600">{error}</div>
//       </div>
//     );
//   }

//   if (!scheduleData) {
//     return <div className="p-8 text-center">Завантаження...</div>;
//   }

//   const schedule = view === 'classes'
//     ? getClassSchedule(scheduleData, selectedClass)
//     : view === 'teachers'
//       ? getTeacherSchedule(scheduleData, selectedTeacher)
//       : null;
  
//   const allClassesSchedule = view === 'all' 
//     ? getAllClassesSchedule(scheduleData, selectedDay) 
//     : null;
  
//   const fullClassesSchedule = view === 'fullClasses' 
//     ? getFullClassesSchedule(scheduleData) 
//     : null;
  
//   const fullTeachersSchedule = view === 'fullTeachers' 
//     ? getFullTeachersSchedule(scheduleData) 
//     : null;
  
//   const fullClassroomsSchedule = view === 'fullClassrooms' 
//     ? getFullClassroomsSchedule(scheduleData) 
//     : null;

//   const renderScheduleView = () => {
//     if (view === 'all' && allClassesSchedule) {
//       return (
//         <AllClassesTable 
//           scheduleData={scheduleData} 
//           allClassesSchedule={allClassesSchedule} 
//           weekType={weekType} 
//         />
//       );
//     }
    
//     if (view === 'fullClasses' && fullClassesSchedule) {
//       return (
//         <FullScheduleTable 
//           scheduleData={scheduleData}
//           fullSchedule={fullClassesSchedule}
//           view="fullClasses"
//           weekType={weekType} schedule={undefined}        />
//       );
//     }
    
//     if (view === 'fullTeachers' && fullTeachersSchedule) {
//       return (
//         <FullScheduleTable 
//           scheduleData={scheduleData}
//           fullSchedule={fullTeachersSchedule}
//           view="fullTeachers"
//           weekType={weekType} schedule={undefined}        />
//       );
//     }
    
//     if (view === 'fullClassrooms' && fullClassroomsSchedule) {
//       return (
//         <FullScheduleTable 
//           scheduleData={scheduleData}
//           fullSchedule={fullClassroomsSchedule}
//           view="fullClassrooms"
//           weekType={weekType} schedule={undefined}        />
//       );
//     }
    
//     if (schedule) {
//       return (
//         <ScheduleTable 
//           scheduleData={scheduleData} 
//           schedule={schedule} 
//           view={view} 
//           weekType={weekType} 
//         />
//       );
//     }
    
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//           <Calendar className="w-8 h-8" />
//           Розклад уроків
//         </h1>

//         <ViewControls 
//           view={view} 
//           setView={setView}
//           onExportClasses={() => exportScheduleClasses(scheduleData)}
//           onExportTeachers={() => exportScheduleTeachers(scheduleData)}
//         />

//         <SelectionControls
//           view={view}
//           scheduleData={scheduleData}
//           selectedClass={selectedClass}
//           setSelectedClass={setSelectedClass}
//           selectedTeacher={selectedTeacher}
//           setSelectedTeacher={setSelectedTeacher}
//           selectedDay={selectedDay}
//           setSelectedDay={setSelectedDay}
//           weekType={weekType}
//           setWeekType={setWeekType}
//         />

//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="overflow-x-auto max-h-[calc(100vh-250px)] overflow-y-auto">
//             {renderScheduleView()}
//           </div>
//         </div>

//         <Legend />
//       </div>
//     </div>
//   );
// };


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

  // Завантаження з localStorage
  const loadFromLocalStorage = () => {
    try {
      const saved = localStorage.getItem('scheduleSettings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e);
    }
    return null;
  };

  // Збереження в localStorage
  const saveToLocalStorage = (settings: any) => {
    try {
      localStorage.setItem('scheduleSettings', JSON.stringify(settings));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  };

  // Отримання параметрів з URL
  const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      view: params.get('view'),
      class: params.get('class'),
      teacher: params.get('teacher'),
      day: params.get('day'),
      week: params.get('week')
    };
  };

  // Оновлення URL параметрів
  const updateUrlParams = (settings: any) => {
    const params = new URLSearchParams();
    if (settings.view) params.set('view', settings.view);
    if (settings.selectedClass) params.set('class', settings.selectedClass);
    if (settings.selectedTeacher) params.set('teacher', settings.selectedTeacher);
    if (settings.selectedDay) params.set('day', settings.selectedDay);
    if (settings.weekType !== undefined) params.set('week', settings.weekType.toString());
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  };

  useEffect(() => {
    const data = parseXMLData(xmlData);
    
    if (data) {
      setScheduleData(data);
      
      // Спочатку намагаємось завантажити з URL
      const urlParams = getUrlParams();
      const savedSettings = loadFromLocalStorage();
      
      // Визначаємо початкові значення
      const initialView = urlParams.view || savedSettings?.view || 'classes';
      const initialWeek = urlParams.week ? Number(urlParams.week) as WeekType : (savedSettings?.weekType ?? 0);
      const initialDay = urlParams.day || savedSettings?.selectedDay || '10000';
      
      let initialClass = '';
      let initialTeacher = '';
      
      // Для класу
      if (urlParams.class) {
        const classExists = data.classes.find(c => c.id === urlParams.class);
        initialClass = classExists ? urlParams.class : (data.classes[0]?.id || '');
      } else if (savedSettings?.selectedClass) {
        const classExists = data.classes.find(c => c.id === savedSettings.selectedClass);
        initialClass = classExists ? savedSettings.selectedClass : (data.classes[0]?.id || '');
      } else {
        initialClass = data.classes[0]?.id || '';
      }
      
      // Для вчителя
      if (urlParams.teacher) {
        const teacherExists = data.teachers.find(t => t.id === urlParams.teacher);
        initialTeacher = teacherExists ? urlParams.teacher : (data.teachers[0]?.id || '');
      } else if (savedSettings?.selectedTeacher) {
        const teacherExists = data.teachers.find(t => t.id === savedSettings.selectedTeacher);
        initialTeacher = teacherExists ? savedSettings.selectedTeacher : (data.teachers[0]?.id || '');
      } else {
        initialTeacher = data.teachers[0]?.id || '';
      }
      
      // Встановлюємо стан
      setView(initialView);
      setWeekType(initialWeek);
      setSelectedDay(initialDay);
      setSelectedClass(initialClass);
      setSelectedTeacher(initialTeacher);
      
      // Оновлюємо URL та localStorage
      const settings = {
        view: initialView,
        weekType: initialWeek,
        selectedDay: initialDay,
        selectedClass: initialClass,
        selectedTeacher: initialTeacher
      };
      updateUrlParams(settings);
      saveToLocalStorage(settings);
    } else {
      setError('Помилка парсингу XML');
    }
  }, []);

  // Обробники зміни налаштувань з автоматичним збереженням
  const handleViewChange = (newView: string) => {
    setView(newView);
    const settings = {
      view: newView,
      weekType,
      selectedDay,
      selectedClass,
      selectedTeacher
    };
    updateUrlParams(settings);
    saveToLocalStorage(settings);
  };

  const handleClassChange = (classId: string) => {
    setSelectedClass(classId);
    const settings = {
      view,
      weekType,
      selectedDay,
      selectedClass: classId,
      selectedTeacher
    };
    updateUrlParams(settings);
    saveToLocalStorage(settings);
  };

  const handleTeacherChange = (teacherId: string) => {
    setSelectedTeacher(teacherId);
    const settings = {
      view,
      weekType,
      selectedDay,
      selectedClass,
      selectedTeacher: teacherId
    };
    updateUrlParams(settings);
    saveToLocalStorage(settings);
  };

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    const settings = {
      view,
      weekType,
      selectedDay: day,
      selectedClass,
      selectedTeacher
    };
    updateUrlParams(settings);
    saveToLocalStorage(settings);
  };

  const handleWeekTypeChange = (week: WeekType) => {
    setWeekType(week);
    const settings = {
      view,
      weekType: week,
      selectedDay,
      selectedClass,
      selectedTeacher
    };
    updateUrlParams(settings);
    saveToLocalStorage(settings);
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
          weekType={weekType} schedule={undefined}        />
      );
    }
    
    if (view === 'fullTeachers' && fullTeachersSchedule) {
      return (
        <FullScheduleTable 
          scheduleData={scheduleData}
          fullSchedule={fullTeachersSchedule}
          view="fullTeachers"
          weekType={weekType} schedule={undefined}        />
      );
    }
    
    if (view === 'fullClassrooms' && fullClassroomsSchedule) {
      return (
        <FullScheduleTable 
          scheduleData={scheduleData}
          fullSchedule={fullClassroomsSchedule}
          view="fullClassrooms"
          weekType={weekType} schedule={undefined}        />
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
          setView={handleViewChange}
          onExportClasses={() => exportScheduleClasses(scheduleData)}
          onExportTeachers={() => exportScheduleTeachers(scheduleData)}
        />

        <SelectionControls
          view={view}
          scheduleData={scheduleData}
          selectedClass={selectedClass}
          setSelectedClass={handleClassChange}
          selectedTeacher={selectedTeacher}
          setSelectedTeacher={handleTeacherChange}
          selectedDay={selectedDay}
          setSelectedDay={handleDayChange}
          weekType={weekType}
          setWeekType={handleWeekTypeChange}
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

