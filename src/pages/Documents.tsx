import { getDocuments } from '@/api/getDocuments';
import Header from '@/components/header';
import { ArrowLeft, Download, FileText, FolderOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface GroupedDocument {
  name: string;
  documents: {
    title: string;
    name: string;
    url: string;
    type: string;
    size: string;
  }[];
}

const preferredCategoryOrder = [
  'Установчі документи',
  'Положення та регламенти',
  'Освітні програми',
  'Атестація',
  'Звіти та аналітика',
  'Фінансові документи',
  'Організаційні документи',
  'Харчування',
  'Інше',
];

const Documents = () => {
  const [documentCategories, setDocumentCategories] = useState<GroupedDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]); // 👈 нове

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  useEffect(() => {
    const fetchAndGroupDocuments = async () => {
      const rawDocs = await getDocuments();
      if (!rawDocs) {
        setLoading(false);
        return;
      }

      const map = new Map<string, GroupedDocument>();

      for (const doc of rawDocs) {
        const category = doc['Категорія']?.trim() || 'Інше';
        const url =
          doc['Файл(и) документу']?.trim() ||
          doc['Посилання на документ (якщо більше одного, то через кому)']?.split(',')[0].trim();

        if (!url) continue;

        const documentItem = {
          name: doc['Назва документу'],
          url,
          title: doc['info'],
          type: doc['type'],
          size: doc['size'] != '--' ? `${doc['size']} МБ` : '',
        };

        if (!map.has(category)) {
          map.set(category, { name: category, documents: [] });
        }
        map.get(category)!.documents.push(documentItem);
      }

      const grouped = Array.from(map.values());

      grouped.sort((a, b) => {
        const indexA = preferredCategoryOrder.indexOf(a.name);
        const indexB = preferredCategoryOrder.indexOf(b.name);
        return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
      });

      setDocumentCategories(grouped);
      setLoading(false);
    };

    fetchAndGroupDocuments();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-600">Завантаження документів…</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-700">
      <Header
        title={'Документи'}
        description={'Нормативна база та документація ліцею'}
        className="bg-emerald-600 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 py-8 text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:text-emerald-800"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 dark:bg-gray-700 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {documentCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.includes(category.name);
            const visibleDocuments = isExpanded
              ? category.documents
              : category.documents.slice(0, 3);

            return (
              <div
                key={category.name}
                className="animate-fade-in rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="mb-6 flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                    <FolderOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-400">
                    {category.name}
                  </h2>
                </div>

                <div className="mb-4 grid gap-4 dark:bg-gray-800">
                  {visibleDocuments.map(doc => (
                    <div
                      key={doc.name}
                      className="group flex flex-wrap items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                    >
                      <div
                        className="flex w-full items-center space-x-3 md:w-2/3"
                        title={doc.title}
                      >
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <h3 className="font-medium text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-400">
                            {doc.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {doc.type.toLocaleUpperCase()} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex-end flex flex-row flex-wrap gap-2">
                        {doc.url.split(', ').map(url => (
                          <a
                            href={url}
                            target="_blank"
                            title="Завантажити"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rounded-lg bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-700 dark:text-gray-300"
                          >
                            <Download className="h-4 w-4" />
                            <span>Завантажити</span>
                          </a>
                        ))}
                      </div>
                      {/* <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Завантажити</span>
                      </a> */}
                    </div>
                  ))}
                </div>

                {category.documents.length > 3 && (
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="text-sm font-medium text-emerald-600 hover:underline"
                  >
                    {isExpanded ? 'Згорнути ↑' : 'Більше…'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Documents;
