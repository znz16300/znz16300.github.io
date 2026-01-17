// UniversalKiosk.tsx - універсальний компонент для інформаційного кіоску

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  PageConfig, 
  isMenuConfig, 
  isContentConfig, 
  isIframeConfig,
  ContentConfig,
  FacilityCategory,
  HealthcareFacility
} from './kiosk-types';

type SlideDirection = '' | 'left' | 'right' | 'down';

interface UniversalKioskProps {
  config: PageConfig;
}

export const UniversalKiosk: React.FC<UniversalKioskProps> = ({ config }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleButtonClick = (link: string, disabled?: boolean): void => {
    if (isAnimating || disabled) return;
    
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
      navigate('/kiosk');
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

  const getButtonColor = (color?: string, disabled?: boolean): string => {
    if (disabled) {
      return 'from-gray-600 to-gray-700';
    }
    
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

  const isHomePage = location.pathname === '/kiosk' || location.pathname === '/mainmenu';

  const renderContent = () => {
    if (isMenuConfig(config)) {
      return (
        <div className={`grid ${isMobile ? 'grid-cols-2 grid-rows-6' : 'grid-cols-4 grid-rows-3'} ${isMobile ? 'gap-3' : 'gap-6'} h-full`}>
          {config.buttons.slice(0, 12).map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handleButtonClick(btn.link, btn.disabled)}
              disabled={isAnimating || btn.disabled}
              className={`bg-gradient-to-br ${getButtonColor(btn.color, btn.disabled)}
                       text-white rounded-2xl shadow-xl 
                       ${btn.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl transform hover:scale-105 active:scale-95'}
                       transition-all duration-200 flex flex-col items-center justify-center 
                       ${isMobile ? 'p-2' : 'p-4'}
                       group relative`}
            >
              {btn.disabled && (
                <div className={`absolute ${isMobile ? 'top-1 right-1 text-xs px-1.5 py-0.5' : 'top-2 right-2 text-xs px-2 py-1'} bg-yellow-500 font-bold rounded`}>
                  Скоро
                </div>
              )}
              
              {btn.image && (
                <div className={`${isMobile ? 'w-12 h-12 mb-1 text-3xl' : 'w-20 h-20 mb-3 text-5xl'} flex items-center justify-center ${btn.disabled ? 'opacity-60' : ''}`}>
                  {btn.image.startsWith('http') ? (
                    <img 
                      src={btn.image} 
                      alt={btn.label}
                      className={`max-w-full max-h-full object-contain ${!btn.disabled && 'group-hover:scale-110 group-active:scale-110'} transition-transform`}
                    />
                  ) : (
                    <span className={`${!btn.disabled && 'group-hover:scale-110 group-active:scale-110'} transition-transform`}>
                      {btn.image}
                    </span>
                  )}
                </div>
              )}
              <span className={`${isMobile ? 'text-xs' : 'text-lg'} font-semibold text-center leading-tight ${btn.disabled ? 'opacity-80' : ''}`}>
                {btn.label}
              </span>
            </button>
          ))}
        </div>
      );
    }

    if (isContentConfig(config)) {
      const contentConfig = config as ContentConfig;
      
      return (
        <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-auto p-8">
          <div className="max-w-5xl mx-auto">
            {/* Секції з текстом */}
            {contentConfig.sections?.map((section, idx) => (
              <div key={idx} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl font-bold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">
                    {section.heading}
                  </h2>
                )}
                
                {/* Зображення секції */}
                {section.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={section.image} 
                      alt={section.heading || 'Зображення'}
                      className="w-full h-auto max-h-96 object-cover"
                    />
                  </div>
                )}
                
                {section.content && (
                  <p className="text-white/90 text-lg leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}
                
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-white/80 text-lg flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Список з деталями та зображеннями */}
                {section.list && (
                  <div className="space-y-4 mt-4">
                    {section.list.map((item, i) => (
                      <div key={i} className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-4 border border-blue-500/20">
                        <div className="flex gap-4">
                          {item.image && (
                            <div className="flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-32 h-32 object-cover rounded-lg"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-blue-300 mb-2">{item.name}</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{item.details}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Статистика */}
            {contentConfig.statistics && (
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {contentConfig.statistics.map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="text-blue-300 text-sm mb-2">{stat.label}</div>
                    <div className="text-white text-3xl font-bold">{stat.value}</div>
                    {stat.date && <div className="text-white/60 text-xs mt-2">{stat.date}</div>}
                  </div>
                ))}
              </div>
            )}

            {/* Заклади (категорії) */}
            {contentConfig.facilities && (
              <div className="space-y-6">
                {(contentConfig.facilities as FacilityCategory[]).map((facility, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-xl font-bold text-purple-300 mb-4">{facility.category}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {facility.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                          <span className="text-white/90">{item.name}</span>
                          <span className="text-blue-300 font-semibold">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Заклади охорони здоров'я */}
            {contentConfig.facilities && (
              <div className="grid md:grid-cols-2 gap-4">
                {(contentConfig.facilities as HealthcareFacility[]).map((facility, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl p-6 border border-red-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-red-300 text-sm mb-1">{facility.name}</div>
                        <div className="text-white text-2xl font-bold">{facility.count}</div>
                      </div>
                      {facility.icon && (
                        <div className="text-4xl opacity-50">{facility.icon}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Населені пункти */}
            {contentConfig.districts && (
              <div className="space-y-4">
                
                {contentConfig.totalPopulation && (
                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-green-500/30 mb-6">
                    <div className="text-green-300 text-lg">Загальна чисельність населення</div>
                    <div className="text-white text-4xl font-bold mt-2">{contentConfig.totalPopulation}</div>
                  </div>
                )}
                {contentConfig.districts.map((district, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-orange-600/10 to-yellow-600/10 rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-orange-300 mb-3">{district.name}</h3>
                    <div className="text-white/70 mb-4">Населення: {district.population} осіб</div>
                    <div className="space-y-2">
                      {district.settlements.map((settlement, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg p-3 text-sm">
                          <span className="text-white/90">{settlement.name}</span>
                          <div className="flex gap-4">
                            <span className="text-blue-300">{settlement.population} осіб</span>
                            <span className="text-green-300">{settlement.distance} км</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {contentConfig.image && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={contentConfig.image} 
                      alt="Населені пункти"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (isIframeConfig(config)) {
      return (
        <div className="h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src={config.url}
            className="w-full h-full border-0"
            title={config.title || 'External Content'}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className={`${isMobile ? 'px-4 pt-4 pb-2' : 'px-8 pt-6 pb-4'} bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm`}>
        <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-white text-center mb-2`}>
          {config.title || 'Інформаційний кіоск'}
        </h1>
        {isMenuConfig(config) && config.subtitle && (
          <p className={`text-center text-blue-200 ${isMobile ? 'text-xs' : 'text-sm'}`}>
            {config.subtitle}
          </p>
        )}
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'p-3' : 'p-8'} overflow-hidden`}>
        <div className={`h-full transition-transform duration-400 ease-in-out ${getSlideClass()}`}>
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={`${isMobile ? 'px-3 pb-3' : 'px-8 pb-6'} flex justify-between items-center gap-2`}>
        <button
          onClick={handleBack}
          disabled={isAnimating}
          className={`bg-gray-700 hover:bg-gray-600 active:bg-gray-600 text-white 
                   ${isMobile ? 'px-4 py-2 text-sm' : 'px-8 py-4'} rounded-xl 
                   shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200
                   flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <svg className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {!isMobile && 'Назад'}
        </button>
        
        {!isHomePage && (
          <button
            onClick={handleHome}
            disabled={isAnimating}
            className={`bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:from-purple-800 active:to-purple-900
                     text-white ${isMobile ? 'px-4 py-2 text-sm' : 'px-8 py-4'} rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95
                     transition-all duration-200 flex items-center gap-2 font-semibold 
                     disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <svg className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {!isMobile && 'Головне меню'}
          </button>
        )}
      </div>
    </div>
  );
};
