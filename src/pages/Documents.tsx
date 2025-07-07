import { getDocuments } from "@/api/getDocuments";
import Header from "@/components/header";
import { ArrowLeft, Download, FileText, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  "Установчі документи",
  "Положення та регламенти",
  "Освітні програми",
  "Атестація",
  "Звіти та аналітика",
  "Фінансові документи",
  "Організаційні документи",
  "Харчування",
  "Інше",
];

const Documents = () => {
  const [documentCategories, setDocumentCategories] = useState<
    GroupedDocument[]
  >([]);
  const [loading, setLoading] = useState(true);

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]); // 👈 нове

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName],
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
        const category = doc["Категорія"]?.trim() || "Інше";
        const url =
          doc["Файл(и) документу"]?.trim() ||
          doc["Посилання на документ (якщо більше одного, то через кому)"]
            ?.split(",")[0]
            .trim();

        if (!url) continue;

        const documentItem = {
          name: doc["Назва документу"],
          url,
          title: doc["info"],
          type: doc["type"],
          size: doc["size"] != "--" ? `${doc["size"]} МБ` : "",
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
        return (
          (indexA === -1 ? Infinity : indexA) -
          (indexB === -1 ? Infinity : indexB)
        );
      });

      setDocumentCategories(grouped);
      setLoading(false);
    };

    fetchAndGroupDocuments();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-600">
        Завантаження документів…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header
        title={"Документи"}
        description={"Нормативна база та документація ліцею"}
        className="bg-emerald-600 text-white py-8"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {documentCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.includes(category.name);
            const visibleDocuments = isExpanded
              ? category.documents
              : category.documents.slice(0, 3);

            return (
              <div
                key={category.name}
                className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-lg p-6 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FolderOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h2>
                </div>

                <div className="grid gap-4 mb-4">
                  {visibleDocuments.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex flex-wrap items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-white dark:bg-gray-900 text-black dark:text-white transition-colors group"
                    >
                      <div
                        className="flex items-center space-x-3"
                        title={doc.title}
                      >
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                            {doc.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {doc.type.toLocaleUpperCase()} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Завантажити</span>
                      </a>
                    </div>
                  ))}
                </div>

                {category.documents.length > 3 && (
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="text-emerald-600 hover:underline font-medium text-sm"
                  >
                    {isExpanded ? "Згорнути ↑" : "Більше…"}
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
