// Шаблон сторінки з вкладками: 🔬 Дослідити · 🎯 Виклик · 💡 Чи знаєте ви? · ✅ Перевір себе.
// Кожна сторінка передає свій набір вкладок (можна менше або інші). Неактивні вкладки не рендеряться,
// тому їхні симуляції не працюють у фоні.
import React, { useState } from 'react';

export interface LessonTab {
  id: string;
  icon: string;
  label: string;
  content: React.ReactNode;
}

export const Lesson: React.FC<{ tabs: LessonTab[] }> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="shrink-0 flex gap-2 px-2 pt-2 md:px-4 md:pt-3 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex-1 min-w-[5.5rem] px-2 md:px-3 py-2 md:py-3 rounded-xl font-bold text-xs md:text-lg whitespace-nowrap transition-all active:scale-95 ${
              t.id === current.id
                ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-300'
                : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600'
            }`}
          >
            <span className="mr-1">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-0">{current?.content}</div>
    </div>
  );
};
