import React, { useState } from 'react';
import { FileText, Loader } from 'lucide-react';
import { SERVER_2 } from '@/constants';

interface PZCreatorProps {
  keyZamini: string;
}

const PZCreator: React.FC<PZCreatorProps> = ({ keyZamini }) => {
  const [datePzStart, setDatePzStart] = useState('');
  const [datePzFinish, setDatePzFinish] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const idSheetMissTable = "missingbook";
  const server = SERVER_2;

  // Завантаження налаштувань з localStorage
  React.useEffect(() => {
    const d5 = window.localStorage.getItem('d5');
    const d6 = window.localStorage.getItem('d6');
    
    if (d5) setDatePzStart(d5);
    if (d6) setDatePzFinish(d6);
  }, []);

  // Збереження налаштувань
  React.useEffect(() => {
    if (datePzStart) {
      window.localStorage.setItem('d5', datePzStart);
    }
    if (datePzFinish) {
      window.localStorage.setItem('d6', datePzFinish);
    }
  }, [datePzStart, datePzFinish]);

  const handleCreatePZ = async () => {
    if (!datePzStart || !datePzFinish) {
      setError('Оберіть дати');
      return;
    }

    if (!keyZamini) {
      setError('Ключ таблиці не вказано');
      return;
    }

    setError(null);
    setIsLoading(true);

    const url = server + 'pz/';
    const data = {
      date_start: datePzStart,
      date_finish: datePzFinish,
      idmisstable: keyZamini,
      namesheetmisstable: idSheetMissTable
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`Помилка в запиті для ${url}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.link) {
        setLinks(prev => [...prev, responseData.link]);
      }
    } catch (error) {
      console.error(`Помилка виконання запиту для ${url}`, error);
      setError('Помилка створення пояснювальної записки');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Формування пояснювальної записки
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Дата початку
          </label>
          <input
            type="date"
            value={datePzStart}
            onChange={(e) => setDatePzStart(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Дата кінця
          </label>
          <input
            type="date"
            value={datePzFinish}
            onChange={(e) => setDatePzFinish(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <button
        onClick={handleCreatePZ}
        disabled={isLoading}
        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <React.Fragment>
            <Loader className="w-4 h-4 animate-spin" />
            Створюється...
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FileText className="w-4 h-4" />
            Створити ПЗ
          </React.Fragment>
        )}
      </button>

      {links.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Створені пояснювальні записки:
          </h3>
          <div className="space-y-2">
            {links.map((link, index) => (
              <div key={index} className="p-3 bg-green-50 border border-green-300 rounded-lg">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Таблиця #{index + 1}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Ключ таблиці:</strong> {keyZamini || 'Не вказано'}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <strong>Аркуш:</strong> {idSheetMissTable}
        </p>
      </div>
    </div>
  );
};

export default PZCreator;
