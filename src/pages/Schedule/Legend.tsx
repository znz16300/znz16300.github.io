// Legend.tsx
import React from 'react';

export const Legend: React.FC = () => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4">
      <h3 className="font-semibold text-gray-800 mb-2">Формат навчання</h3>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-2 text-sm text-gray-600 mb-4">
        <div className="text-gray-700">🟢 Очне</div>
        <div className="text-gray-700">🟠 Дистанційне</div>
        <div className="text-gray-700">🟡 Змішане</div>
      </div>
      
      
      <div className="text-xs text-gray-600 mt-2">
        <p><strong>Для класів:</strong> колір відповідає формату навчання класу на обраному тижні</p>
        <p><strong>Для вчителів:</strong> колір визначається за класами в уроці (якщо є дистанційний клас - урок дистанційний)</p>
      </div>
    </div>
  );
};
