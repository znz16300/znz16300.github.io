import React, { useState } from 'react';
import { NewsItem } from '@/type/newsItem';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <div className="mb-4">
      <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex gap-2 overflow-x-auto py-2">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`${item['Назва новини']} фото ${i + 1}`}
            className="h-28 w-auto flex-shrink-0 cursor-pointer rounded-lg border border-gray-200 object-cover"
            loading="lazy"
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              key={activeIndex}
              className="relative w-full max-w-4xl px-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[activeIndex]}
                alt={`Перегляд зображення ${activeIndex + 1}`}
                className="mx-auto max-h-[80vh] rounded-lg object-contain"
              />
              {/* Close Button */}
              <button
                onClick={closeModal}
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
                className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l bg-black/40 p-3 text-white hover:bg-black/60"
              >
                <ChevronRight />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
