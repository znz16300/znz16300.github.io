// ImageViewer.tsx - компонент для відображення графічних зображень

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ImageViewerProps {
  title: string;
  imageUrl: string;
  alt?: string;
}

type SlideDirection = '' | 'left' | 'right' | 'down';

export const ImageViewer: React.FC<ImageViewerProps> = ({ 
  title, 
  imageUrl, 
  alt 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [showControls, setShowControls] = useState<boolean>(true);
  const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

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

  const handleZoomIn = (): void => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (): void => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleZoomReset = (): void => {
    setZoom(1);
  };

  // Функція для запуску таймера приховування
  const startHideTimer = (): void => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    setShowControls(true);
    
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };

  // Обробка подій для показу контролів
  const handleUserActivity = (): void => {
    startHideTimer();
  };

  // Ініціалізація та очищення
  React.useEffect(() => {
    startHideTimer();
    
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const getSlideClass = (): string => {
    if (!slideDirection) return '';
    
    const animations: Record<Exclude<SlideDirection, ''>, string> = {
      left: '-translate-x-full',
      right: 'translate-x-full',
      down: 'translate-y-full'
    };
    
    return animations[slideDirection] || '';
  };

  const isHomePage = location.pathname === '/mainmenu';

  return (
    <div 
      className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative"
      onTouchStart={handleUserActivity}
      onTouchMove={handleUserActivity}
      onMouseMove={handleUserActivity}
      onScroll={handleUserActivity}
    >
      {/* Header - Fixed Position */}
      <div 
        className={`fixed top-0 left-0 right-0 z-20 px-8 pt-6 pb-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm
                    transition-transform duration-300 ease-in-out ${showControls ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <h1 className="text-4xl font-bold text-white text-center mb-2">{title}</h1>
        <p className="text-center text-blue-200 text-sm">Інформаційний кіоск ліцею</p>
      </div>

      {/* Main Content - Full Screen */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`h-full transition-transform duration-400 ease-in-out ${getSlideClass()}`}
        >
          <div className="h-full w-full bg-white overflow-auto relative">
            {/* Zoom Controls - Fixed Position */}
            <div className="fixed top-4 right-4 z-10 flex gap-2">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                title="Зменшити"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={handleZoomReset}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all"
                title="Скинути масштаб"
              >
                <span className="font-bold">{Math.round(zoom * 100)}%</span>
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                title="Збільшити"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Image Container */}
            <div className="flex items-center justify-center min-h-full p-4">
              <img
                src={imageUrl}
                alt={alt || title}
                style={{ 
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.3s ease-in-out'
                }}
                className="max-w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed Position */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-20 px-8 pb-6 pt-4 bg-gradient-to-t from-slate-900/80 to-transparent backdrop-blur-sm
                    flex justify-between items-center gap-4
                    transition-transform duration-300 ease-in-out ${showControls ? 'translate-y-0' : 'translate-y-full'}`}
      >
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

