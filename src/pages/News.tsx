import { getNews } from '@/api/getNews';
import Header from '@/components/header';
import { Paginator } from '@/components/ui/paginator';
import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { PageItem } from '@/type/pageItem';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const News = () => {
  // Отримання параметра id з URL
  const [searchParams, setSearchParams] = useSearchParams();
  const newsId = searchParams.get('id');

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

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
  const filteredItems = newsId ? newsItems.filter(item => item.id === newsId) : newsItems;

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
  const getPageNumbers = (totalPages: number, currentPage: number): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1); // Завжди показуємо першу сторінку

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);

    return pages;
  };

  // Компонент для відображення однієї новини
  const article = (item: NewsItem, index: number) => {
    return (
      <article
        key={`${item.id}-${item['Позначка часу']}`}
        className="animate-fade-in cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
        style={{ animationDelay: `${index * 150}ms` }}
        onClick={() => handleCardClick(String(item.id))}
      >
        <img
          src={item['Фото'].split(/(?:\n|, |,)/)[0]}
          alt={item['Назва новини']}
          className={`w-full transition-all duration-500 ${
            expandedId === item.id ? 'max-h-[600px] object-contain' : 'h-48 object-cover'
          }`}
          style={{
            maxHeight: expandedId === item.id ? '600px' : undefined,
          }}
        />
        <div className="p-6">
          <div className="mb-3 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{item['Позначка часу']}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{item['Електронна адреса']}</span>
            </div>
          </div>

          <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-400">
            {item['Назва новини']}
          </h2>

          {expandedId === String(item.id) ? (
            <>
              <div
                className="mb-4 whitespace-pre-wrap leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: item['Текст новини'],
                }}
              />
              <Slider item={item} />
            </>
          ) : (
            <p className="mb-4 line-clamp-2 whitespace-pre-wrap leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-400">
              {item['Текст новини'].replace(/<\/?[^>]+(>|$)/g, '')}
            </p>
          )}

          {item['Текст новини'].split('\n').length > 2 && (
            <button
              onClick={e => {
                e.stopPropagation(); // Запобігаємо виклику handleCardClick при натисканні на кнопку
                toggleExpanded(item.id);
              }}
              className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              {expandedId === String(item.id) ? 'Згорнути ↑' : 'Читати повністю →'}
            </button>
          )}
        </div>
      </article>
    );
  };

  return (
    <>
      {loading ? (
        <p className="py-10 text-center text-gray-500">Завантаження новин...</p>
      ) : (
        <div className="dark:bg-gray-70 min-h-screen bg-gray-50 bg-white dark:bg-gray-600">
          {/* Header */}
          <Header
            title={'Новини ліцею'}
            description={'Останні події та оновлення'}
            className="bg-emerald-600 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 py-8 text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:text-emerald-800"
          />

          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {visibleItems.length > 0 ? (
                visibleItems.map((item, index) => <>{article(item, index)}</>)
              ) : (
                <p className="text-center text-gray-600">Новину з id={newsId} не знайдено.</p>
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
