import React, { useState } from "react"
import { NewsItem } from "@/type/newsItem"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Slider({ item }: { item: NewsItem }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const images = item["Фото"]
    .split(/(?:\n|, |,)/)
    .map((url) => url.trim())
    .filter(Boolean)

  const openModal = (index: number) => {
    setActiveIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="mb-4">
      <div className="flex overflow-x-auto gap-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 py-2">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`${item["Назва новини"]} фото ${i + 1}`}
            className="h-28 w-auto rounded-lg object-cover flex-shrink-0 border border-gray-200 cursor-pointer"
            loading="lazy"
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              key={activeIndex}
              className="relative max-w-4xl w-full px-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeIndex]}
                alt={`Перегляд зображення ${activeIndex + 1}`}
                className="rounded-lg mx-auto max-h-[80vh] object-contain"
              />
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
              >
                <X />
              </button>
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-r p-3"
              >
                <ChevronLeft />
              </button>
              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-l p-3"
              >
                <ChevronRight />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
