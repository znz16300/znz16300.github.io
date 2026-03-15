import { getNews } from '@/api/getNews';
import Header from '@/components/header';
import { Paginator } from '@/components/ui/paginator';
import { NewsItem } from '@/type/newsItem';
import { PageItem } from '@/type/pageItem';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsRowCard from './NewsRowCard';
import NewsTileCard from './NewsTileCard';
import ViewToggle, { ViewMode } from './ViewToggle';

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const newsId = searchParams.get('id');

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    return (localStorage.getItem('newsViewMode') as ViewMode) || 'cards';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem('newsViewMode', mode);
    // Collapse any open article when switching view
    setExpandedId(null);
  };

  const filteredItems = newsId ? newsItems.filter(item => item.id === newsId) : newsItems;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = newsId
    ? filteredItems
    : filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const toggleExpanded = (id: string | number) => {
    const normalizedId = String(id);
    setExpandedId(expandedId === normalizedId ? null : normalizedId);
  };

  const handleCardClick = (id: string) => {
    setSearchParams({ id });
    setExpandedId(id);
  };

  const renderItem = (item: NewsItem, index: number) => {
    const commonProps = {
      item,
      index,
      expandedId,
      onCardClick: handleCardClick,
      onToggleExpanded: toggleExpanded,
    };

    switch (viewMode) {
      case 'rows':
        return <NewsRowCard key={`${item.id}-${item['Позначка часу']}`} {...commonProps} />;
      case 'tiles':
        return <NewsTileCard key={`${item.id}-${item['Позначка часу']}`} {...commonProps} />;
      case 'cards':
      default:
        return <NewsCard key={`${item.id}-${item['Позначка часу']}`} {...commonProps} />;
    }
  };

  const gridClass =
    viewMode === 'tiles'
      ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'
      : 'space-y-8';

  return (
    <>
      {loading ? (
        <p className="py-10 text-center text-gray-500">Завантаження новин...</p>
      ) : (
        <div className="min-h-screen bg-gray-50 bg-white dark:bg-gray-600">
          <Header
            title={'Новини ліцею'}
            description={'Останні події та оновлення'}
            className="bg-emerald-600 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 py-8 text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:text-emerald-800"
          />

          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            {/* View mode toggle — only show when not in single-article mode */}
            {!newsId && (
              <ViewToggle viewMode={viewMode} onChange={handleViewModeChange} />
            )}

            <div className={gridClass}>
              {visibleItems.length > 0 ? (
                visibleItems.map((item, index) => renderItem(item, index))
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

            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              У новинах використано малюнки з відкритих джерел, що перебувають у вільному доступі.
              Фотографії здобувачів освіти опубліковані за згодою їхніх батьків. Розміщення цих фото
              на інших ресурсах можливе лише за умови отримання попереднього дозволу адміністрації
              ліцею. Якщо ви бажаєте видалити фото, будь ласка, зверніться до адміністрації ліцею.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
