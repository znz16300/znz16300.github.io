import { useEffect, useState } from 'react';
import { NewsItem } from '@/type/newsItem';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Slider({ item }: { item: NewsItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = item['Фото']
    .split(/(?:\n|, |,)/)
    .map(url => url.trim())
    .filter(Boolean);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setActiveIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length);
  };

  // Клавіатура: Esc — закрити, стрілки — гортати
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') setActiveIndex(prev => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIndex(prev => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, images.length]);

  return (
    <div className="mb-4">
      <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex gap-2 overflow-x-auto py-2">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`${item['Назва новини']} фото ${i + 1}`}
            className="h-28 w-auto flex-shrink-0 cursor-pointer rounded-lg border border-gray-200 object-cover dark:border-gray-700"
            loading="lazy"
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm duration-200 animate-in fade-in"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Перегляд фото"
          >
            {/* key перезапускає CSS-анімацію при зміні фото (замість framer-motion) */}
            <div
              key={activeIndex}
              className="relative w-full max-w-4xl px-4 duration-300 animate-in fade-in slide-in-from-right-8"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[activeIndex]}
                alt={`Перегляд зображення ${activeIndex + 1}`}
                className="no-dim mx-auto max-h-[80vh] rounded-lg object-contain"
              />
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Закрити"
                className="absolute right-2 top-2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
              >
                <X />
              </button>
              {/* Prev Button */}
              <button
                onClick={e => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Попереднє фото"
                className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-r bg-black/40 p-3 text-white hover:bg-black/60"
              >
                <ChevronLeft />
              </button>
              {/* Next Button */}
              <button
                onClick={e => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Наступне фото"
                className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l bg-black/40 p-3 text-white hover:bg-black/60"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
