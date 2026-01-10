// VideoViewer.tsx - компонент для відображення відео

import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface VideoViewerProps {
  title: string;
  videoUrl: string;
  poster?: string;
}

type SlideDirection = '' | 'left' | 'right' | 'down';

export const VideoViewer: React.FC<VideoViewerProps> = ({ 
  title, 
  videoUrl,
  poster
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
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

  // Функція для запуску таймера приховування
  const startHideTimer = (): void => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    setShowControls(true);
    
    hideTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Обробка подій для показу контролів
  const handleUserActivity = (): void => {
    startHideTimer();
  };

  // Ініціалізація
  React.useEffect(() => {
    startHideTimer();
    
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Оновлення таймера при зміні стану відтворення
  React.useEffect(() => {
    if (isPlaying) {
      startHideTimer();
    } else {
      setShowControls(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    }
  }, [isPlaying]);

  // Відео контроли
  const togglePlayPause = (): void => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = (): void => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = (): void => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const vol = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      setVolume(vol);
      setIsMuted(vol === 0);
    }
  };

  const toggleMute = (): void => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (): void => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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

  const isHomePage = location.pathname === '/mainmenu';

  return (
    <div 
      className="w-screen h-screen bg-black overflow-hidden relative"
      onTouchStart={handleUserActivity}
      onTouchMove={handleUserActivity}
      onMouseMove={handleUserActivity}
      onClick={handleUserActivity}
    >
      {/* Header - Fixed Position */}
      <div 
        className={`fixed top-0 left-0 right-0 z-20 px-8 pt-6 pb-4 bg-gradient-to-b from-black/80 to-transparent
                    transition-transform duration-300 ease-in-out ${showControls ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <h1 className="text-3xl font-bold text-white text-center mb-1">{title}</h1>
        <p className="text-center text-gray-300 text-sm">Інформаційний кіоск ліцею</p>
      </div>

      {/* Main Content - Full Screen */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`h-full w-full transition-transform duration-400 ease-in-out ${getSlideClass()}`}
        >
          <div className="h-full w-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={videoUrl}
              poster={poster}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-contain"
              playsInline
            />
            
            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlayPause}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 hover:bg-white/30 transition-all">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Controls - Fixed Position */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-20 px-8 pb-6 pt-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent
                    transition-transform duration-300 ease-in-out ${showControls ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-white text-sm mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between gap-4">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlayPause}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all"
              title={isPlaying ? "Пауза" : "Відтворити"}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-blue-400 transition-colors"
                title={isMuted ? "Увімкнути звук" : "Вимкнути звук"}
              >
                {isMuted || volume === 0 ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-24 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
                         [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-blue-400 transition-colors"
              title={isFullscreen ? "Вийти з повноекранного режиму" : "Повноекранний режим"}
            >
              {isFullscreen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div 
        className={`fixed bottom-24 left-0 right-0 z-20 px-8 flex justify-between items-center gap-4
                    transition-transform duration-300 ease-in-out ${showControls ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button
          onClick={handleBack}
          disabled={isAnimating}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl 
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200
                   flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>
        
        {!isHomePage && (
          <button
            onClick={handleHome}
            disabled={isAnimating}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 
                     text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 
                     transition-all duration-200 flex items-center gap-2 font-semibold 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Головне меню
          </button>
        )}
      </div>
    </div>
  );
};

// Приклад використання:

export const ExampleVideoPage: React.FC = () => (
  <VideoViewer
    title="Навчальне відео"
    videoUrl="/videos/example.mp4"
    poster="/images/video-poster.jpg"
  />
);
