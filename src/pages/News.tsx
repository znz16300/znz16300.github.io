import { getNews } from "@/api/getNews";
import Header from "@/components/header";
import { Paginator } from "@/components/ui/paginator";
import { Slider } from "@/components/ui/prevslider";
import { NewsItem } from "@/type/newsItem";
import { PageItem } from "@/type/pageItem";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const News = () => {
  // Отримання параметра id з URL
  const [searchParams, setSearchParams] = useSearchParams();
  const newsId = searchParams.get("id");

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);

  // Завантаження новин з API
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNews();
      if (result) {
        setNewsItems(result);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Фільтрація новин: якщо є newsId, показуємо тільки новину з відповідним id
  const filteredItems = newsId
    ? newsItems.filter((item) => item.id === newsId)
    : newsItems;

  // Визначення елементів для відображення з урахуванням пагінації
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = newsId
    ? filteredItems
    : filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // Перемикання стану розгортання/згортання новини
  const toggleExpanded = (id: string | number) => {
    const normalizedId = String(id);
    setExpandedId(expandedId === normalizedId ? null : normalizedId);
  };

  // Обробка кліку на картку для переходу до окремої новини
  const handleCardClick = (id: string) => {
    setSearchParams({ id });
    setExpandedId(id);
  };

  // Генерація номерів сторінок для пагінації
  const getPageNumbers = (
    totalPages: number,
    currentPage: number,
  ): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1); // Завжди показуємо першу сторінку

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  // Компонент для відображення однієї новини
  const article = (item: NewsItem, index: number) => {
    return (
      <article
        key={`${item.id}-${item["Позначка часу"]}`}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in cursor-pointer"
        style={{ animationDelay: `${index * 150}ms` }}
        onClick={() => handleCardClick(String(item.id))}
      >
        <img
          src={item["Фото"].split(/(?:\n|, |,)/)[0]}
          alt={item["Назва новини"]}
          className={`w-full transition-all duration-500 ${
            expandedId === item.id
              ? "object-contain max-h-[600px]"
              : "h-48 object-cover"
          }`}
          style={{
            maxHeight: expandedId === item.id ? "600px" : undefined,
          }}
        />
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{item["Позначка часу"]}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{item["Електронна адреса"]}</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {item["Назва новини"]}
          </h2>

          {expandedId === String(item.id) ? (
            <>
              <div
                className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap transition-all duration-300"
                dangerouslySetInnerHTML={{
                  __html: item["Текст новини"],
                }}
              />
              <Slider item={item} />
            </>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap line-clamp-2 transition-all duration-300">
              {item["Текст новини"].replace(/<\/?[^>]+(>|$)/g, "")}
            </p>
          )}

          {item["Текст новини"].split("\n").length > 2 && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Запобігаємо виклику handleCardClick при натисканні на кнопку
                toggleExpanded(item.id);
              }}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {expandedId === String(item.id)
                ? "Згорнути ↑"
                : "Читати повністю →"}
            </button>
          )}
        </div>
      </article>
    );
  };

  return (
    <>
      {loading ? (
        <p className="text-center py-10 text-gray-500">Завантаження новин...</p>
      ) : (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <Header
            title={"Новини ліцею"}
            description={"Останні події та оновлення"}
            className="bg-lime-600 text-white py-8"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
              {visibleItems.length > 0 ? (
                visibleItems.map((item, index) => <>{article(item, index)}</>)
              ) : (
                <p className="text-center text-gray-600">
                  Новину з id={newsId} не знайдено.
                </p>
              )}
            </div>
            {!newsId && (
              <Paginator
                itemsPerPage={itemsPerPage}
                pageItems={pageItems}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
