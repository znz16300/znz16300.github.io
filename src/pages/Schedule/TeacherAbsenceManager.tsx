import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Edit2, Trash2, X, FileText } from 'lucide-react';
import { xmlData } from './xmlData';
import type { ScheduleData } from '@/type/scheduledata';
import { parseXMLData } from './xmlParser';

interface AbsentTeacher {
  id: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  reason: string;
}

const TeacherAbsenceManager = () => {
  const [absentTeachers, setAbsentTeachers] = useState<AbsentTeacher[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    dateFrom: '',
    dateTo: '',
    reason: ''
  });

  const [replacementDateFrom, setReplacementDateFrom] = useState('');
  const [replacementDateTo, setReplacementDateTo] = useState('');
  const [useWeekParity, setUseWeekParity] = useState(true);
  const [replacementList, setReplacementList] = useState('');

  const daysArray = ['10000', '01000', '00100', '00010', '00001'];
  const dayNames = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця"];

  // Масиви класів для визначення типу навчання
  const oddWeekInPersonClasses = [
    '2-А', '2-Б', '2-В',
    '4-А', '4-Б', '4-В',
    '6-В', '6-Г',
    '7-А', '7-Б',
    '8-А', '8-Г',
    '9-Б', '9-В',
    '10-А', '10-Б'
  ];

  const evenWeekInPersonClasses = [
    '3-А', '3-Б', '3-В',
    '5-А', '5-Б', '5-В',
    '6-А', '6-Б',
    '7-В', '7-Г',
    '8-Б', '8-В',
    '9-А',
    '11-А', '11-Б'
  ];

  useEffect(() => {
    const saved = localStorage.getItem('absentTeachers');
    if (saved) {
      try {
        setAbsentTeachers(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading data:', e);
      }
    }

    // Завантаження scheduleData через parseXMLData
    const data = parseXMLData(xmlData);
    if (data) {
      setScheduleData(data);
    } else {
      console.error('Помилка завантаження розкладу');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('absentTeachers', JSON.stringify(absentTeachers));
  }, [absentTeachers]);

  const handleAdd = () => {
    if (!formData.name || !formData.dateFrom || !formData.dateTo || !formData.reason) {
      alert('Заповніть всі поля');
      return;
    }

    if (editingId) {
      setAbsentTeachers(prev => prev.map(teacher => 
        teacher.id === editingId 
          ? { ...formData, id: editingId }
          : teacher
      ));
      setEditingId(null);
    } else {
      const newTeacher: AbsentTeacher = {
        id: Date.now().toString(),
        ...formData
      };
      setAbsentTeachers(prev => [...prev, newTeacher]);
    }

    setFormData({ name: '', dateFrom: '', dateTo: '', reason: '' });
  };

  const handleEdit = (teacher: AbsentTeacher) => {
    setFormData({
      name: teacher.name,
      dateFrom: teacher.dateFrom,
      dateTo: teacher.dateTo,
      reason: teacher.reason
    });
    setEditingId(teacher.id);
  };

  const handleCancel = () => {
    setFormData({ name: '', dateFrom: '', dateTo: '', reason: '' });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Видалити запис?')) {
      setAbsentTeachers(prev => prev.filter(t => t.id !== id));
    }
  };

  const getWeekNumber = (date: Date): number => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfMonth = date.getDate();
    return Math.ceil((dayOfMonth + firstDayOfMonth.getDay()) / 7);
  };

  const getDistType = (className: string, isOddWeek: boolean): string => {
    // 1-ші класи завжди очні
    if (className.startsWith('1-')) return 'о';
    
    // Перевіряємо чи клас очний у непарний тиждень
    if (isOddWeek && oddWeekInPersonClasses.includes(className)) return 'о';
    
    // Перевіряємо чи клас очний у парний тиждень
    if (!isOddWeek && evenWeekInPersonClasses.includes(className)) return 'о';
    
    // Інакше - дистанційний
    return 'д';
  };

  const findById = <T extends { id: string }>(array: T[], id: string): T | undefined => {
    return array.find(item => item.id === id);
  };

  const getTeacherLessons = (teacherName: string, dayBinary: string, scheduleData: ScheduleData) => {
    // Знаходимо вчителя за ім'ям
    const teacher = scheduleData.teachers.find(t => t.name === teacherName);
    if (!teacher) return [];

    const lessons: Array<{
      period: string;
      periodName: string;
      subject: string;
      classes: string[];
      classrooms: string[];
    }> = [];

    // Проходимо по всіх картках
    scheduleData.cards.forEach(card => {
      // Перевіряємо чи це потрібний день
      if (card.days !== dayBinary) return;

      const lesson = findById(scheduleData.lessons, card.lessonId);
      if (!lesson || !lesson.teacherIds.includes(teacher.id)) return;

      const subject = findById(scheduleData.subjects, lesson.subjectId);
      const classes = lesson.classIds
        .map(cid => findById(scheduleData.classes, cid))
        .filter(Boolean)
        .map(c => c!.name);
      const classrooms = card.classroomIds
        .map(cid => findById(scheduleData.classrooms, cid))
        .filter(Boolean)
        .map(c => c!.name);
      const period = findById(scheduleData.periods, card.period);

      lessons.push({
        period: card.period,
        periodName: period?.name || '',
        subject: subject?.short || subject?.name || 'Невідомий предмет',
        classes: classes,
        classrooms: classrooms
      });
    });

    // Сортуємо по періодах
    lessons.sort((a, b) => a.period.localeCompare(b.period));

    return lessons;
  };

  const generateReplacementList = () => {
    if (!replacementDateFrom || !replacementDateTo) {
      alert('Оберіть дати');
      return;
    }

    if (!scheduleData) {
      alert('Розклад не завантажено');
      return;
    }

    const startDate = new Date(replacementDateFrom);
    const endDate = new Date(replacementDateTo);
    const result: string[] = [];

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const currentDate = new Date(d);
      const dayOfWeek = currentDate.getDay();
      
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;

      const dateStr = currentDate.toLocaleDateString('uk-UA');
      const dayBinary = daysArray[dayOfWeek - 1];
      const weekNum = getWeekNumber(currentDate);
      const isOddWeek = weekNum % 2 === 1;

      const absentsForDate = absentTeachers.filter(teacher => {
        const from = new Date(teacher.dateFrom);
        const to = new Date(teacher.dateTo);
        return currentDate >= from && currentDate <= to;
      });

      absentsForDate.forEach(teacher => {
        const lessons = getTeacherLessons(teacher.name, dayBinary, scheduleData);
        
        lessons.forEach(lesson => {
          const distType = useWeekParity && lesson.classes.length > 0
            ? getDistType(lesson.classes[0], isOddWeek)
            : '';
          
          result.push(
            `${dateStr}\t${teacher.name}\t${teacher.reason}\t${lesson.subject}\t${lesson.classes.join(', ')}\t\t\t\t${lesson.periodName} ${distType}`
          );
        });
      });
    }

    setReplacementList(result.join('\n'));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="w-8 h-8" />
          Система заміни відсутніх вчителів
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Відсутні вчителі</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <select
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Оберіть вчителя</option>
              {scheduleData?.teachers.map(teacher => (
                <option key={teacher.id} value={teacher.name}>
                  {teacher.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              placeholder="Дата з"
              value={formData.dateFrom}
              onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              placeholder="Дата по"
              value={formData.dateTo}
              onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Причина відсутності"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editingId ? (
                <React.Fragment>
                  <Edit2 className="w-4 h-4" />
                  Оновити
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Plus className="w-4 h-4" />
                  Додати
                </React.Fragment>
              )}
            </button>
            {editingId && (
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                <X className="w-4 h-4" />
                Скасувати
              </button>
            )}
          </div>

          {absentTeachers.length > 0 && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">ПІБ</th>
                    <th className="px-4 py-2 text-left font-semibold">Дата з</th>
                    <th className="px-4 py-2 text-left font-semibold">Дата по</th>
                    <th className="px-4 py-2 text-left font-semibold">Причина</th>
                    <th className="px-4 py-2 text-center font-semibold">Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {absentTeachers.map((teacher, idx) => (
                    <tr key={teacher.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-2 border-b">{teacher.name}</td>
                      <td className="px-4 py-2 border-b">{new Date(teacher.dateFrom).toLocaleDateString('uk-UA')}</td>
                      <td className="px-4 py-2 border-b">{new Date(teacher.dateTo).toLocaleDateString('uk-UA')}</td>
                      <td className="px-4 py-2 border-b">{teacher.reason}</td>
                      <td className="px-4 py-2 border-b text-center">
                        <button
                          onClick={() => handleEdit(teacher)}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition mr-2"
                        >
                          <Edit2 className="w-3 h-3" />
                          Редагувати
                        </button>
                        <button
                          onClick={() => handleDelete(teacher.id)}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                          <Trash2 className="w-3 h-3" />
                          Видалити
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Формування списку замін</h2>
          
          {!scheduleData && (
            <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
              <p className="text-yellow-800">
                Увага: Розклад не завантажено.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Дата початку заміни
              </label>
              <input
                type="date"
                value={replacementDateFrom}
                onChange={(e) => setReplacementDateFrom(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Дата кінця заміни
              </label>
              <input
                type="date"
                value={replacementDateTo}
                onChange={(e) => setReplacementDateTo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useWeekParity}
                  onChange={(e) => setUseWeekParity(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Враховувати парність тижня
                </span>
              </label>
            </div>
          </div>

          <button
            onClick={generateReplacementList}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mb-4"
          >
            <FileText className="w-4 h-4" />
            Вивести
          </button>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Список замін
            </label>
            <textarea
              value={replacementList}
              readOnly
              rows={15}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="Натисніть 'Вивести' для генерації списку замін..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAbsenceManager;
