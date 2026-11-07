// Спільна оболонка сторінки «Фізики»: заголовок, «Назад», «Головне меню» + сама сторінка.
import React, { Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findPhysicsPage } from './registry';

export const PhysicsPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();
  const page = findPhysicsPage(pageId);

  const navBtn =
    'text-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg font-semibold transition-all duration-200 active:scale-95 flex items-center gap-2';

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden select-none">
      <div className="px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-indigo-900/60 to-purple-900/50 flex items-center justify-between gap-3">
        <button onClick={() => navigate(-1)} className={`${navBtn} bg-gray-700 hover:bg-gray-600`}>
          ← <span className="hidden sm:inline">Назад</span>
        </button>
        <h1 className="text-xl md:text-3xl font-bold text-white truncate">
          {page ? `${page.icon} ${page.title}` : 'Сторінку не знайдено'}
        </h1>
        <button
          onClick={() => navigate('/mainmenu')}
          className={`${navBtn} bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800`}
        >
          🏠 <span className="hidden sm:inline">Головне меню</span>
        </button>
      </div>

      <div className="flex-1 min-h-0 relative">
        {page ? (
          <Suspense
            fallback={<div className="w-full h-full flex items-center justify-center text-white text-2xl">Завантаження...</div>}
          >
            <page.component key={page.id} />
          </Suspense>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl">Такої сторінки немає</div>
        )}
      </div>
    </div>
  );
};

export default PhysicsPage;
