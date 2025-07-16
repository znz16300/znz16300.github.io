import * as React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

interface CustomCalendarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCalendar = React.forwardRef<HTMLInputElement, CustomCalendarProps>(
  ({ value, onChange, id, type, className, placeholder }, ref) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
    const [touchStart, setTouchStart] = React.useState<number | null>(null);
    const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

    const months = [
      'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
      'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ];

    const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const firstDayOfWeek = firstDay.getDay();
      const daysInMonth = lastDay.getDate();

      const days: (Date | null)[] = [];
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(null);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
      }
      return days;
    };

    const parseDate = (dateString: string): Date | null => {
      if (!dateString) return null;
      if (dateString.includes('.')) {
        const [day, month, year] = dateString.split('.');
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      } else if (dateString.includes('-')) {
        return new Date(dateString);
      }
      return null;
    };

    const formatDate = (date: Date | null): string => {
      if (!date) return '';
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`; // формат для input[type="date"]
    };

    const selectedDate = parseDate(value);

    const handlePrevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateSelect = (date: Date) => {
      const formatted = formatDate(date);
      onChange?.({ target: { value: formatted } } as React.ChangeEvent<HTMLInputElement>);
      setIsCalendarOpen(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
      setTouchEnd(null);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      if (distance > 50) handleNextMonth();
      if (distance < -50) handlePrevMonth();
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      setTouchStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (touchStart) setTouchEnd(e.clientX);
    };

    const handleMouseUp = () => {
      if (touchStart !== null && touchEnd !== null) {
        const distance = touchStart - touchEnd;
        if (distance > 50) handleNextMonth();
        if (distance < -50) handlePrevMonth();
      }
      setTouchStart(null);
      setTouchEnd(null);
    };

    const isToday = (date: Date | null): boolean => {
      const today = new Date();
      return date !== null &&
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date: Date | null): boolean => {
      return selectedDate !== null && date !== null &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
    };

    const days = getDaysInMonth(currentDate);

    return (
      <div className="relative w-full dark:bg-gray-600 dark:text-gray-400">
        <div className="relative">
          <Input
            ref={ref}
            id={id}
            type="text"
            value={formatDate(selectedDate)}
            placeholder={placeholder}
            readOnly
            className={cn("pr-10 cursor-pointer", className)}
            onClick={() => setIsCalendarOpen(prev => !prev)}
          />
          <button
            type="button"
            onClick={() => setIsCalendarOpen(prev => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <Calendar size={16} />
          </button>
        </div>

        {isCalendarOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-600 dark:text-gray-400 border border-gray-300 rounded-lg shadow-lg z-10">
            <div className="flex items-center justify-between p-3 border-b border-gray-200">
              <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={16} />
              </button>
              <h3 className="text-sm font-semibold">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={16} />
              </button>
            </div>

            <div
              className="p-3 select-none cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day, i) => (
                  <div key={i} className="text-center text-xs font-medium text-gray-500 py-1">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((date, i) => (
                  <div
                    key={i}
                    className={cn(
                      'text-center text-sm py-1 cursor-pointer rounded transition-colors',
                      date ? 'hover:bg-gray-100' : '',
                      isToday(date) ? 'bg-blue-100 text-blue-600 font-semibold' : '',
                      isSelected(date) ? 'bg-blue-500 text-white font-semibold' : '',
                      !date ? 'cursor-default' : ''
                    )}
                    onClick={() => date && handleDateSelect(date)}
                  >
                    {date?.getDate() || ''}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setIsCalendarOpen(false)}
                className="w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors dark:bg-gray-600 dark:text-gray-400"
              >
                Закрити
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

CustomCalendar.displayName = 'CustomCalendar';
export default CustomCalendar;
