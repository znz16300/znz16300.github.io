// Legend.tsx
import React from 'react';

export const Legend: React.FC = () => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4">
      <h3 className="font-semibold text-gray-800 mb-2">Позначення:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        <div>👤 - Вчитель</div>
        <div>🚪 - Кабінет</div>
        <div>📚 - Клас</div>
        <div>👥 - Група</div>
      </div>
      
      <h3 className="font-semibold text-gray-800 mb-2 mt-4">Формат навчання:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm mb-3">
        <div className="flex items-center gap-2">
          <div className="w-12 h-8 bg-green-100 border border-green-200 rounded"></div>
          <span className="text-gray-700">🟢 Очне</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-12 h-8 bg-orange-100 border border-orange-200 rounded"></div>
          <span className="text-gray-700">🟠 Дистанційне</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-12 h-8 bg-yellow-100 border border-yellow-200 rounded"></div>
          <span className="text-gray-700">🟡 Змішане</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded text-xs font-bold bg-green-500 text-white">О</span>
          <span className="px-2 py-1 rounded text-xs font-bold bg-orange-500 text-white">Д</span>
          <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-500 text-white">З</span>
        </div>
      </div>
      
      <div className="text-xs text-gray-600 mt-2">
        <p><strong>Для класів:</strong> колір відповідає формату навчання класу на обраному тижні</p>
        <p><strong>Для вчителів:</strong> колір визначається за класами в уроці (якщо є дистанційний клас - урок дистанційний)</p>
      </div>
    </div>
  );
};
