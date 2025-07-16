/* eslint-disable react-hooks/exhaustive-deps */
import { getPage } from '@/api/getPage';
import Header from '@/components/header';
import { Paginator } from '@/components/ui/paginator';
import { convertDriveLink, convertUrl, extractDriveFileId, updateImgSrcsInHtml } from '@/lib/utils';
import { PageItem } from '@/type/pageItem';
import { ArrowLeft, ArrowUpRight, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

interface PageProps {
  pageItemsData?: PageItem[];
  topicData?: string;
}

const Page = ({ pageItemsData, topicData }: PageProps) => {
  const itemsPerPage = 20;
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [contentType, setContentType] = useState('');
  const [topic, setTopic] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const location = useLocation();

  const searchTables = [
    {
      chapter: 'Новини',
      idTable: '1Dk0WYpOKeRoDATgzMkIkFjUcFwNAG5MRn4W7bEyzd0M',
    },
    {
      chapter: 'Сторінки',
      idTable: '1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI',
    },
    {
      chapter: 'Документи',
      idTable: '1O_bJjH8TAHww34uxA51rdyJoX4PaxMGOzL57N8G7H34',
    },
    {
      chapter: 'Сторінки',
      idTable: '12tqoeJpUs1qa9paI7YuMpZ17nynq44-qqmn0zgoEup4',
    },
    {
      chapter: 'Сторінки',
      idTable: '15D-n7O5AdsttUF3LfkOhRexS-Q4T78MfXDbUlmsPHRc',
    },
  ];

  const performSearch = async (searchTerm: string): Promise<PageItem[]> => {
    const allSearchData: PageItem[] = [];

    // Збираємо всі дані з усіх таблиць
    const promises = searchTables.map(async table => {
      try {
        const result = await getPage(table.idTable, 'all');
        if (result) {
          return result.map((item: PageItem) => ({
            ...item,
            chapter: table.chapter,
            idTable: table.idTable,
          }));
        }
        return result;
      } catch (error) {
        console.error(`Error fetching data from table ${table.idTable}:`, error);
        return [];
      }
    });

    const results = await Promise.all(promises);
    results.forEach(tableData => {
      allSearchData.push(...tableData);
    });

    // Фільтруємо результати за пошуковим терміном
    const searchTermLower = searchTerm.toLowerCase();
    const filteredResults = allSearchData.filter(item => {
      return (
        (item['Розділ'] &&
          item['Розділ'].toLowerCase().includes(searchTermLower) &&
          !item['Розділ'].endsWith('_')) ||
        (item['Назва новини'] &&
          item['Назва новини'].toLowerCase().includes(searchTermLower) &&
          !item['Назва новини'].endsWith('_')) ||
        (item['Назва документу'] &&
          item['Назва документу'].toLowerCase().includes(searchTermLower) &&
          !item['Назва документу'].endsWith('_')) ||
        // (item["Абзац"] &&
        //   item["Абзац"].toLowerCase().includes(searchTermLower) &&
        //   !item["Абзац"].endsWith("_")) ||
        (item['Ключові слова'] &&
          item['Ключові слова'].toLowerCase().includes(searchTermLower) &&
          !item['Ключові слова'].endsWith('_'))
      );
    });

    console.log('Search completed. Found results:', filteredResults.length);
    return filteredResults;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sheetId = searchParams.get('keyPages') || '';
    const topicParam = searchParams.get('titlePages') || '';
    const searchQuery = searchParams.get('search') || '';

    setLoading(true);
    setCurrentPage(1); // Reset to first page on new search/navigation

    const fetchData = async () => {
      try {
        if (pageItemsData && topicData) {
          // Using provided props
          setPageItems(pageItemsData);
          setContentType('1');
          setTopic(topicData);
          setIsSearchMode(false);
        } else if (searchQuery && searchQuery.trim() !== '') {
          // Search mode
          console.log('Performing search for:', searchQuery);
          setIsSearchMode(true);
          const searchResults = await performSearch(searchQuery.trim());
          setPageItems(searchResults);
          setTopic(`Результати пошуку: "${searchQuery}"`);
          setContentType('2'); // Show as text format for search results
        } else if (sheetId && topicParam) {
          // Regular page mode
          setIsSearchMode(false);
          const result = await getPage(sheetId, topicParam);
          if (result) {
            setPageItems(result);
            setContentType(result[0]?.['Тип (1 - картки, 2- абзаци)'] || '');
          }
          setTopic(topicParam);
        } else {
          // No valid parameters
          setPageItems([]);
          setTopic('Сторінка не знайдена');
          setIsSearchMode(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setPageItems([]);
        setTopic('Помилка завантаження');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search, pageItemsData, topicData]);

  const totalPages = Math.ceil(pageItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = pageItems.slice(startIndex, startIndex + itemsPerPage);

  const toggleExpanded = (id: string | number) => {
    const normalizedId = String(id);
    setExpandedId(expandedId === normalizedId ? null : normalizedId);
  };

  const renderSearchResult = (item: PageItem) => {
    return (
      <div className="mb-4 rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md dark:bg-gray-900">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-400">
              {item['Назва новини'] || item['Назва документу'] || item['Розділ'] || 'Без назви'}
            </h3>
            <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
              <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-800 dark:bg-gray-600 dark:text-gray-400">
                {item.chapter}
              </span>
              {item['Позначка часу'] && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {item['Позначка часу']}
                </span>
              )}
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden leading-relaxed text-gray-700 dark:text-gray-400"
          style={{ maxHeight: '200px' }}
        >
          {item['Абзац'] && (
            <div
              className="line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: updateImgSrcsInHtml(item['Абзац']),
              }}
            />
          )}
          {item['Текст новини'] &&
            (item['Текст новини'].startsWith('<') ? (
              <div
                className="line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: updateImgSrcsInHtml(item['Текст новини']),
                }}
              />
            ) : (
              <div className="flex gap-2">
                <img
                  className="h-auto w-1/4 object-contain"
                  src={item['Фото'].split(/(?:\n|, |,)/)[0]}
                  alt=""
                />
                <div className="line-clamp-3">{item['Текст новини']}</div>
              </div>
            ))}
        </div>

        <div className="mt-4">
          {item.chapter === 'Документи' ? (
            <Link
              to={(item['Посилання на документ'] || item['Файл(и) документу'] || '').replace(
                /^\.\//,
                '/'
              )}
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-gray-400"
              target="_blank"
            >
              Детальніше →
            </Link>
          ) : item.chapter === 'Новини' ? (
            // Тут твій компонент для новин
            <Link
              to={`/news?id=${item.id}`}
              className="text-blue-600 hover:underline dark:text-gray-400"
            >
              Читати новину →
            </Link>
          ) : item.chapter === 'Сторінки' ? (
            // Тут компонент для сторінок
            <Link
              to={`/page?titlePages=${encodeURIComponent(item.Розділ)}&keyPages=${item['idTable']}`}
              className="text-blue-600 hover:underline dark:text-gray-400"
            >
              Перейти →
            </Link>
          ) : (
            // Якщо нічого не підходить
            <span className="text-gray-500">Немає посилання</span>
          )}
        </div>
      </div>
    );
  };

  const article = (item: PageItem) => {
    return (
      <article
        className={
          item['Тип (1 - картки, 2- абзаци)'] === '1'
            ? 
              'flex h-full flex-col rounded-lg bg-white p-8 text-center shadow transition-all hover:font-bold hover:shadow-md dark:bg-gray-700 dark:text-gray-300'
            : ''
        }
      >
        {item['Тип (1 - картки, 2- абзаци)'] === '1' ? (
        // {contentType === '1' ? (
          <div className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg">
            <img
              src={item['Фото'] !== '' ? convertUrl(item['Фото']) : '/assets/icons/document.svg'}
              alt={item['Абзац']}
              className="h-full w-full rounded-lg object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        ) : (
          ''
        )}

        {item['Тип (1 - картки, 2- абзаци)'] !== '1' ? (
        // {contentType !== '1' ? (
          <div
            className="text-sm leading-snug"
            dangerouslySetInnerHTML={{
              __html: updateImgSrcsInHtml(item['Абзац']),
            }}
          />
        ) : (
          <div className="relative">
            <div className="text-sm">{item['Абзац']}</div>
            <ArrowUpRight
              className={`bottom absolute right-0 h-4 w-4 rotate-90 ${item['Кнопка з посиланням']?.startsWith('/page') || item['Кнопка з посиланням']?.startsWith('./page') ? '' : 'hidden'}`}
              // className="absolute bottom-1 right-1 w-4 h-4 text-red-500 group-hover:text-blue-600 transition"
            />
          </div>
        )}
      </article>
    );
  };

  return (
    <>
      {loading ? (
        <p className="py-10 text-center text-gray-500">Завантаження...</p>
      ) : (
        <div className="dark:bg-gray-70 min-h-screen bg-gray-50 bg-white dark:bg-gray-600">
          <Header
            title={topic}
            description={isSearchMode ? `Знайдено результатів: ${pageItems.length}` : ''}
            className="bg-emerald-600 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 py-8 text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:text-emerald-800"
          />

          {isSearchMode ? (
            // Search results layout
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
              {pageItems.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="mb-4 text-lg text-gray-500">
                    За вашим запитом нічого не знайдено
                  </div>
                  <Link to="/" className="font-medium text-blue-600 hover:text-blue-800">
                    Повернутися на головну
                  </Link>
                </div>
              ) : (
                visibleItems.map((item, index) => (
                  <div key={`${item.id}-${index}`}>{renderSearchResult(item)}</div>
                ))
              )}
            </div>
          ) : (
            // Regular page layout
            <div
              className={
                contentType === '1'
                  ? 'mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-8'
                  : 'm-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
              }
            >
              {visibleItems.map((item, index) =>
                item['Тип (1 - картки, 2- абзаци)'] === '1' ? (
                  <Link
                    key={item.id}
                    to={item['Кнопка з посиланням'].replace(/^\.\//, '/')}
                    className={`text-gray-900 no-underline transition-colors hover:text-blue-600`}
                  >
                    {article(item)}
                  </Link>
                ) : (
                  <div key={item.id}>{article(item)}</div>
                )
              )}
            </div>
          )}

          {pageItems.length > 0 && (
            <Paginator
              itemsPerPage={itemsPerPage}
              pageItems={pageItems}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Page;
