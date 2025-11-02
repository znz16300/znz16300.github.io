// ViewControls.tsx
import React from 'react';
import { Table, FileText, Users, Grid, BookOpen, DoorOpen, Download } from 'lucide-react';

interface ViewControlsProps {
  view: string;
  setView: (view: string) => void;
  onExportClasses: () => void;
  onExportTeachers: () => void;
}

export const ViewControls: React.FC<ViewControlsProps> = ({ 
  view, 
  setView, 
  onExportClasses, 
  onExportTeachers 
}) => {
  const buttonClass = (isActive: boolean) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex gap-2 items-center flex-wrap">
        <button onClick={() => setView('classes')} className={buttonClass(view === 'classes')}>
          <Users className="w-4 h-4" />
          Розклад класу
        </button>
        <button onClick={() => setView('teachers')} className={buttonClass(view === 'teachers')}>
          <FileText className="w-4 h-4" />
          Розклад вчителя
        </button>
        <button onClick={() => setView('all')} className={buttonClass(view === 'all')}>
          <Table className="w-4 h-4" />
          Загальний (день)
        </button>
        <button onClick={() => setView('fullClasses')} className={buttonClass(view === 'fullClasses')}>
          <Grid className="w-4 h-4" />
          Повний розклад класів
        </button>
        <button onClick={() => setView('fullTeachers')} className={buttonClass(view === 'fullTeachers')}>
          <BookOpen className="w-4 h-4" />
          Повний розклад вчителів
        </button>
        <button onClick={() => setView('fullClassrooms')} className={buttonClass(view === 'fullClassrooms')}>
          <DoorOpen className="w-4 h-4" />
          Повний розклад кабінетів
        </button>
        {view === 'fullClasses' && (
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition bg-blue-600 text-white hover:bg-blue-700"
            onClick={onExportClasses}
          >
            <Download className="w-4 h-4" /> Експорт розкладу
          </button>
        )}
        {view === 'fullTeachers' && (
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition bg-blue-600 text-white hover:bg-blue-700"
            onClick={onExportTeachers}
          >
            <Download className="w-4 h-4" /> Експорт розкладу
          </button>
        )}
      </div>
    </div>
  );
};
