import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { KioskProps } from './kiosk_data';


type SlideDirection = '' | 'left' | 'right' | 'down';

export const Kiosk: React.FC<KioskProps> = ({ config }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleButtonClick = (link: string): void => {
    if (isAnimating) return;
    
    setSlideDirection('left');
    setIsAnimating(true);
    
    setTimeout(() => {
      navigate(link);
      setSlideDirection('');
      setIsAnimating(false);
    }, 400);
  };

  const handleBack = (): void => {
    if (isAnimating) return;
    
    setSlideDirection('right');
    setIsAnimating(true);
    
    setTimeout(() => {
      navigate(-1);
      setSlideDirection('');
      setIsAnimating(false);
    }, 400);
  };

  const handleHome = (): void => {
    if (isAnimating) return;
    
    setSlideDirection('down');
    setIsAnimating(true);
    
    setTimeout(() => {
      navigate('/mainmenu');
      setSlideDirection('');
      setIsAnimating(false);
    }, 400);
  };

  const getSlideClass = (): string => {
    if (!slideDirection) return '';
    
    const animations: Record<Exclude<SlideDirection, ''>, string> = {
      left: '-translate-x-full',
      right: 'translate-x-full',
      down: 'translate-y-full'
    };
    
    return animations[slideDirection] || '';
  };

  const getButtonColor = (color?: string): string => {
    const colors: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
    };
    
    return colors[color || 'blue'] || colors.blue;
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-6 pb-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
        {config.title && (
          <h1 className="text-4xl font-bold text-white text-center mb-2">{config.title}</h1>
        )}
        <p className="text-center text-blue-200 text-sm">Інформаційний кіоск ліцею</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-hidden">
        {config.type === 'menu' && config.buttons ? (
          <div 
            className={`h-full transition-transform duration-400 ease-in-out ${getSlideClass()}`}
          >
            <div className="grid grid-cols-4 grid-rows-3 gap-6 h-full">
              {config.buttons.slice(0, 18).map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => handleButtonClick(btn.link)}
                  disabled={isAnimating}
                  className={`bg-gradient-to-br ${getButtonColor(btn.color)}
                           text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 
                           transition-all duration-200 flex flex-col items-center justify-center p-4 
                           disabled:opacity-50 disabled:cursor-not-allowed group`}
                >
                  {btn.image && (
                    <div className="w-20 h-20 mb-3 flex items-center justify-center text-5xl">
                      {btn.image.startsWith('http') ? (
                        <img 
                          src={btn.image} 
                          alt={btn.label}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                        />
                      ) : (
                        <span className="group-hover:scale-110 transition-transform">{btn.image}</span>
                      )}
                    </div>
                  )}
                  <span className="text-lg font-semibold text-center leading-tight">
                    {btn.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : config.type === 'iframe' && config.url ? (
          <div className="h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src={config.url}
              className="w-full h-full border-0"
              title={config.title || 'External Content'}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        ) : null}
      </div>

      {/* Bottom Navigation */}
      <div className="px-8 pb-6 flex justify-between items-center gap-4">
        <button
          onClick={handleBack}
          disabled={isAnimating}
          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl 
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200
                   flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>
        
        {!isHomePage && (
          <button
            onClick={handleHome}
            disabled={isAnimating}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 
                     text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 
                     transition-all duration-200 flex items-center gap-2 font-semibold 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Головне меню
          </button>
        )}
      </div>
    </div>
  );
};

