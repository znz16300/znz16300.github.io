/* eslint-disable react-hooks/exhaustive-deps */
import { getPage } from "@/api/getPage";
import Header from "@/components/header";
import { Paginator } from "@/components/ui/paginator";
import {
  convertDriveLink,
  convertUrl,
  extractDriveFileId,
  updateImgSrcsInHtml,
} from "@/lib/utils";
import { PageItem } from "@/type/pageItem";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

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
  const [contentType, setContentType] = useState("");
  const [topic, setTopic] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);

  const location = useLocation();

  const searchTables = [
    {
      chapter: "Новини",
      idTable: "1Dk0WYpOKeRoDATgzMkIkFjUcFwNAG5MRn4W7bEyzd0M",
    },
    {
      chapter: "Сторінки",
      idTable: "1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI",
    },
    {
      chapter: "Документи",
      idTable: "1O_bJjH8TAHww34uxA51rdyJoX4PaxMGOzL57N8G7H34",
    },
    {
      chapter: "Сторінки",
      idTable: "12tqoeJpUs1qa9paI7YuMpZ17nynq44-qqmn0zgoEup4",
    },
    {
      chapter: "Сторінки",
      idTable: "15D-n7O5AdsttUF3LfkOhRexS-Q4T78MfXDbUlmsPHRc",
    },
  ];

  const performSearch = async (searchTerm: string): Promise<PageItem[]> => {
    const allSearchData: PageItem[] = [];

    // Збираємо всі дані з усіх таблиць
    const promises = searchTables.map(async (table) => {
      try {
        const result = await getPage(table.idTable, "all");
        if (result) {
          return result.map((item: PageItem) => ({
            ...item,
            chapter: table.chapter,
            idTable: table.idTable,
          }));
        }
        return result;
      } catch (error) {
        console.error(
          `Error fetching data from table ${table.idTable}:`,
          error,
        );
        return [];
      }
    });

    const results = await Promise.all(promises);
    results.forEach((tableData) => {
      allSearchData.push(...tableData);
    });

    // Фільтруємо результати за пошуковим терміном
    const searchTermLower = searchTerm.toLowerCase();
    const filteredResults = allSearchData.filter((item) => {
      return (
        (item["Розділ"] &&
          item["Розділ"].toLowerCase().includes(searchTermLower) &&
          !item["Розділ"].endsWith("_")) ||
        (item["Назва новини"] &&
          item["Назва новини"].toLowerCase().includes(searchTermLower) &&
          !item["Назва новини"].endsWith("_")) ||
        (item["Назва документу"] &&
          item["Назва документу"].toLowerCase().includes(searchTermLower) &&
          !item["Назва документу"].endsWith("_")) ||
        (item["Абзац"] &&
          item["Абзац"].toLowerCase().includes(searchTermLower) &&
          !item["Абзац"].endsWith("_")) ||
        (item["Ключові слова"] &&
          item["Ключові слова"].toLowerCase().includes(searchTermLower) &&
          !item["Ключові слова"].endsWith("_"))
      );
    });

    console.log("Search completed. Found results:", filteredResults.length);
    return filteredResults;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sheetId = searchParams.get("keyPages") || "";
    const topicParam = searchParams.get("titlePages") || "";
    const searchQuery = searchParams.get("search") || "";

    setLoading(true);
    setCurrentPage(1); // Reset to first page on new search/navigation

    const fetchData = async () => {
      try {
        if (pageItemsData && topicData) {
          // Using provided props
          setPageItems(pageItemsData);
          setContentType("1");
          setTopic(topicData);
          setIsSearchMode(false);
        } else if (searchQuery && searchQuery.trim() !== "") {
          // Search mode
          console.log("Performing search for:", searchQuery);
          setIsSearchMode(true);
          const searchResults = await performSearch(searchQuery.trim());
          setPageItems(searchResults);
          setTopic(`Результати пошуку: "${searchQuery}"`);
          setContentType("2"); // Show as text format for search results
        } else if (sheetId && topicParam) {
          // Regular page mode
          setIsSearchMode(false);
          const result = await getPage(sheetId, topicParam);
          if (result) {
            setPageItems(result);
            setContentType(result[0]?.["Тип (1 - картки, 2- абзаци)"] || "");
          }
          setTopic(topicParam);
        } else {
          // No valid parameters
          setPageItems([]);
          setTopic("Сторінка не знайдена");
          setIsSearchMode(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPageItems([]);
        setTopic("Помилка завантаження");
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
      <div className="bg-white rounded-lg shadow p-6 mb-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item["Назва новини"] ||
                item["Назва документу"] ||
                item["Розділ"] ||
                "Без назви"}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {item.chapter}
              </span>
              {item["Позначка часу"] && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item["Позначка часу"]}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          {item["Абзац"] && (
            <div
              className="line-clamp-3"
              dangerouslySetInnerHTML={{
                __html:
                  updateImgSrcsInHtml(item["Абзац"]).substring(0, 300) + "...",
              }}
            />
          )}
          {item["Текст новини"] &&
            (item["Текст новини"].startsWith("<") ? (
              <div
                className="line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: updateImgSrcsInHtml(item["Текст новини"]),
                }}
              />
            ) : (
              <div className="line-clamp-3">{item["Текст новини"]}</div>
            ))}
        </div>

        <div className="mt-4">
          {item.chapter === "Документи" ? (
            <Link
              to={(
                item["Посилання на документ"] ||
                item["Файл(и) документу"] ||
                ""
              ).replace(/^\.\//, "/")}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
            >
              Детальніше →
            </Link>
          ) : item.chapter === "Новини" ? (
            // Тут твій компонент для новин
            <Link
              to={`/news?id=${item.id}`}
              className="text-blue-600 hover:underline"
            >
              Читати новину →
            </Link>
          ) : item.chapter === "Сторінки" ? (
            // Тут компонент для сторінок
            <Link
              to={`/page?titlePages=${encodeURIComponent(
                item.Розділ,
              )}&keyPages=${item["idTable"]}`}
              className="text-blue-600 hover:underline"
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
          item["Тип (1 - картки, 2- абзаци)"] === "1"
            ? "bg-white text-center rounded-lg shadow p-8 flex flex-col h-full hover:shadow-md hover:font-bold transition-all"
            : ""
        }
      >
        {contentType === "1" ? (
          <div className="mb-4 rounded-lg overflow-hidden w-full h-40 flex items-center justify-center ">
            <img
              src={
                item["Фото"] !== ""
                  ? convertUrl(item["Фото"])
                  : "/assets/icons/document.svg"
              }
              alt={item["Абзац"]}
              className="object-contain w-full h-full rounded-lg"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        ) : (
          ""
        )}

        {contentType !== "1" ? (
          <div
            className="text-sm text-gray-700 leading-snug"
            dangerouslySetInnerHTML={{
              __html: updateImgSrcsInHtml(item["Абзац"]),
            }}
          />
        ) : (
          <div className="text-sm text-gray-700">{item["Абзац"]}</div>
        )}
      </article>
    );
  };

  return (
    <>
      {loading ? (
        <p className="text-center py-10 text-gray-500">Завантаження...</p>
      ) : (
        <div className="min-h-screen bg-gray-50">
          <Header
            title={topic}
            description={
              isSearchMode ? `Знайдено результатів: ${pageItems.length}` : ""
            }
            className="bg-blue-600 text-white py-8"
          />

          {isSearchMode ? (
            // Search results layout
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {pageItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg mb-4">
                    За вашим запитом нічого не знайдено
                  </div>
                  <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Повернутися на головну
                  </Link>
                </div>
              ) : (
                visibleItems.map((item, index) => (
                  <div key={`${item.id}-${index}`}>
                    {renderSearchResult(item)}
                  </div>
                ))
              )}
            </div>
          ) : (
            // Regular page layout
            <div
              className={
                contentType === "1"
                  ? "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                  : "m-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              }
            >
              {visibleItems.map((item, index) =>
                item["Тип (1 - картки, 2- абзаци)"] === "1" ? (
                  <Link
                    key={item.id}
                    to={item["Кнопка з посиланням"].replace(/^\.\//, "/")}
                    className="text-gray-900 hover:text-blue-600 transition-colors no-underline "
                  >
                    {article(item)}
                  </Link>
                ) : (
                  <div key={item.id}>{article(item)}</div>
                ),
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
