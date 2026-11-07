// Спільна оболонка для будь-якої гри: заголовок, кнопки «Назад» / «Головне меню» + сама гра.
import React, { Suspense, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findGame } from './registry';
import { GameChromeContext } from './shared/GameChrome';

export const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const game = findGame(gameId);
  const [immersive, setImmersive] = useState(false);

  const navBtn =
    'text-white px-5 py-3 rounded-xl shadow-lg font-semibold transition-all duration-200 active:scale-95 flex items-center gap-2';

  return (
    <div
      className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden select-none"
      style={{ touchAction: 'none' }}
    >
      {!immersive && (
      <div className="px-4 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 flex items-center justify-between gap-3">
        <button onClick={() => navigate(-1)} className={`${navBtn} bg-gray-700 hover:bg-gray-600`}>
          ← Назад
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-white truncate">
          {game ? `${game.icon} ${game.title}` : 'Гру не знайдено'}
        </h1>
        <button
          onClick={() => navigate('/mainmenu')}
          className={`${navBtn} bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800`}
        >
          🏠 <span className="hidden sm:inline">Головне меню</span>
        </button>
      </div>
      )}

      <div className="flex-1 min-h-0 relative">
        {game ? (
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white text-2xl">Завантаження...</div>}>
            <GameChromeContext.Provider value={{ setImmersive }}>
              <game.component key={game.id} />
            </GameChromeContext.Provider>
          </Suspense>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl">
            Такої гри немає
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
