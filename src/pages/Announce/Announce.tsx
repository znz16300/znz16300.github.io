import { getAnnounce } from '@/api/getAnnounce';
import Header from '@/components/header';
import { Paginator } from '@/components/ui/paginator';
import { NewsItem } from '@/type/newsItem';
import { PageItem } from '@/type/pageItem';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnnounceCard from './AnnounceCard';
import AnnounceBulletinCard from './AnnounceBulletinCard';
import AnnounceTimelineCard from './AnnounceTimelineCard';
import AnnounceViewToggle, { AnnounceViewMode } from './AnnounceViewToggle';

const Announce = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const newsId = searchParams.get('id');

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);
  const [viewMode, setViewMode] = useState<AnnounceViewMode>(() => {
    return (localStorage.getItem('announceViewMode') as AnnounceViewMode) || 'bulletin';
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
      const result = await getAnnounce();
      if (result) setNewsItems(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleViewModeChange = (mode: AnnounceViewMode) => {
    setViewMode(mode);
    localStorage.setItem('announceViewMode', mode);
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

  const commonProps = (item: NewsItem, index: number) => ({
    item,
    index,
    expandedId,
    onCardClick: handleCardClick,
    onToggleExpanded: toggleExpanded,
  });

  const renderItem = (item: NewsItem, index: number) => {
    switch (viewMode) {
      case 'bulletin':
        return (
          <AnnounceBulletinCard
            key={`${item.id}-${item['Позначка часу']}`}
            {...commonProps(item, index)}
          />
        );
      case 'timeline':
        return (
          <AnnounceTimelineCard
            key={`${item.id}-${item['Позначка часу']}`}
            {...commonProps(item, index)}
            isLast={index === visibleItems.length - 1}
          />
        );
      case 'cards':
      default:
        return (
          <AnnounceCard
            key={`${item.id}-${item['Позначка часу']}`}
            {...commonProps(item, index)}
          />
        );
    }
  };

  return (
    <>
      {loading ? (
        <p className="py-10 text-center text-gray-500">Завантаження...</p>
      ) : (
        <div className="min-h-screen bg-gray-50 bg-white dark:bg-gray-600">
          <Header
            title={'Оголошення ліцею'}
            description={'Останні оголошення та важлива інформація'}
            className="bg-emerald-600 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 py-8 text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:text-emerald-800"
          />

          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            {!newsId && (
              <AnnounceViewToggle viewMode={viewMode} onChange={handleViewModeChange} />
            )}

            <div className={viewMode === 'timeline' ? 'space-y-0' : 'space-y-6'}>
              {visibleItems.length > 0 ? (
                visibleItems.map((item, index) => renderItem(item, index))
              ) : (
                <p className="text-center text-gray-600">
                  Оголошення з id={newsId} не знайдено.
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
              На сторінці використано малюнки з відкритих джерел, що перебувають у вільному доступі.
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

export default Announce;
