import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';

// Тип для фото
interface Photo {
  id: string;
  url: string;
  title: string;
}

interface KioskGalleryProps {
  galleryJson?: string; // шлях до json файлу галереї
}

const KioskGallery: React.FC<KioskGalleryProps> = ({ 
  galleryJson = 'photogallery.json' // За замовчуванням папка 1
}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Завантаження списку фото з папки
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        const basePath = `https://znz16300.github.io/sitedata`;

        const manifestResponse = await fetch(`${basePath}/data/${galleryJson}`);
        
        if (!manifestResponse.ok) {
          throw new Error(`Не вдалося завантажити список фото. Переконайтеся, що файл ${basePath}/data/${galleryJson} існує.`);
        }

        const manifest = await manifestResponse.json();
        
        if (!manifest.photos || !Array.isArray(manifest.photos)) {
          throw new Error('Невірний формат photogallery.json');
        }

        const photosList: Photo[] = manifest.photos.map((filename: string, index: number) => ({
          id: `${galleryJson}-${index}`,
          url: `${basePath}/${filename}`,
          title: filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
        }));

        setPhotos(photosList);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Невідома помилка');
        console.error('Помилка завантаження фото:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [galleryJson]);

  const photosPerPage = 24; // 6 стовпців × 4 ряди
  const totalPages = Math.ceil(photos.length / photosPerPage);
  
  const currentPhotos = photos.slice(
    currentPage * photosPerPage,
    (currentPage + 1) * photosPerPage
  );

  // Обробка свайпу для галереї
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
    if (isRightSwipe && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Обробка свайпу для попапу
  const handlePopupSwipe = (direction: 'left' | 'right') => {
    if (selectedPhoto === null) return;
    
    if (direction === 'left' && selectedPhoto < photos.length - 1) {
      setSelectedPhoto(prev => prev! + 1);
    }
    if (direction === 'right' && selectedPhoto > 0) {
      setSelectedPhoto(prev => prev! - 1);
    }
  };

  const handlePopupTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handlePopupSwipe('left');
    if (isRightSwipe) handlePopupSwipe('right');
  };

  // Клавіатурна навігація
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedPhoto !== null) {
        if (e.key === 'ArrowLeft') handlePopupSwipe('right');
        if (e.key === 'ArrowRight') handlePopupSwipe('left');
        if (e.key === 'Escape') setSelectedPhoto(null);
      } else {
        if (e.key === 'ArrowLeft' && currentPage > 0) {
          setCurrentPage(prev => prev - 1);
        }
        if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
          setCurrentPage(prev => prev + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhoto, currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">📸 Фотоархів</h1>
        {!loading && !error && (
          <p className="text-xl text-gray-600">
            Сторінка {currentPage + 1} з {totalPages} • Всього фото: {photos.length}
          </p>
        )}
      </div>

      {/* Завантаження */}
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-4" />
          <p className="text-2xl text-gray-600">Завантаження фото...</p>
        </div>
      )}

      {/* Помилка */}
      {error && (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="bg-red-100 border-2 border-red-400 rounded-lg p-8 max-w-md">
            <p className="text-2xl text-red-700 font-semibold mb-2">❌ Помилка</p>
            <p className="text-lg text-red-600">{error}</p>
          </div>
        </div>
      )}

      {/* Галерея */}
      {!loading && !error && photos.length > 0 && (
        <>
          <div className="relative max-w-[1400px] mx-auto">
            {/* Кнопка вліво */}
            {currentPage > 0 && (
              <button
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white hover:bg-gray-100 rounded-full p-6 shadow-2xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-12 h-12 text-gray-700" />
              </button>
            )}

            {/* Сітка фото */}
            <div
              className="grid grid-cols-6 gap-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {currentPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(currentPage * photosPerPage + index)}
                  className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Кнопка вправо */}
            {currentPage < totalPages - 1 && (
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white hover:bg-gray-100 rounded-full p-6 shadow-2xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-12 h-12 text-gray-700" />
              </button>
            )}
          </div>

          {/* Індикатори сторінок */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Порожня галерея */}
      {!loading && !error && photos.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <p className="text-3xl text-gray-500 mb-2">📭</p>
          <p className="text-2xl text-gray-600">Фото не знайдено</p>
        </div>
      )}

      {/* Попап з повним зображенням */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handlePopupTouchEnd}
        >
          {/* Кнопка закриття */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-8 right-8 bg-white hover:bg-gray-100 rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-8 h-8 text-gray-700" />
          </button>

          {/* Кнопка попереднього фото */}
          {selectedPhoto > 0 && (
            <button
              onClick={() => handlePopupSwipe('right')}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-6 shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-10 h-10 text-gray-700" />
            </button>
          )}

          {/* Зображення */}
          <div className="max-w-[90vw] max-h-[90vh] flex flex-col items-center">
            <img
              src={photos[selectedPhoto].url}
              alt={photos[selectedPhoto].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-2xl mt-6 font-medium">
              {photos[selectedPhoto].title} ({selectedPhoto + 1} / {photos.length})
            </p>
          </div>

          {/* Кнопка наступного фото */}
          {selectedPhoto < photos.length - 1 && (
            <button
              onClick={() => handlePopupSwipe('left')}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-6 shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-10 h-10 text-gray-700" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default KioskGallery;
