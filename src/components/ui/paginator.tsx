import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { PageItem } from "@/type/pageItem"
import { DataObject, TrainingItem } from "@/type/kursi"

interface PaginatorProps {
  itemsPerPage: number
  pageItems: PageItem[] | TrainingItem[] | DataObject[]
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

const getPageNumbers = (totalPages: number, currentPage: number): (number | string)[] => {
  const pages: (number | string)[] = []

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
    return pages
  }

  pages.push(1)

  if (currentPage > 3) pages.push("...")

  const start = Math.max(2, currentPage - 2)
  const end = Math.min(totalPages - 1, currentPage + 2)

  for (let i = start; i <= end; i++) pages.push(i)

  if (currentPage < totalPages - 2) pages.push("...")

  pages.push(totalPages)
  return pages
}

export function Paginator({
  itemsPerPage,
  pageItems,
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginatorProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  // 1. Синхронізуємо currentPage з offset в URL
  useEffect(() => {
    const offset = Number(searchParams.get("offset")) || 1
    if (offset !== currentPage) {
      setCurrentPage(offset)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2. Оновлюємо offset у URL при зміні сторінки
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev)
      newParams.set("offset", String(page))
      return newParams
    })
  }

  return (
    <>
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-1 flex-wrap">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded disabled:opacity-50"
          >
            Попередня
          </button>

          {getPageNumbers(totalPages, currentPage).map((page, i) =>
            typeof page === "number" ? (
              <button
                key={i}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-300"
                }`}
              >
                {page}
              </button>
            ) : (
              <span key={i} className="px-4 py-2 text-gray-500">
                …
              </span>
            )
          )}

          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded disabled:opacity-50"
          >
            Наступна
          </button>
        </div>
      )}
    </>
  )
}
