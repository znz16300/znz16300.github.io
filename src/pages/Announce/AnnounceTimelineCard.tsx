import { Slider } from '@/components/ui/prevslider';
import { NewsItem } from '@/type/newsItem';
import { containsHtml } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AnnounceTimelineCardProps {
  item: NewsItem;
  index: number;
  expandedId: string | null;
  isLast: boolean;
  onCardClick: (id: string) => void;
  onToggleExpanded: (id: string | number) => void;
}

// Parse date to extract day and month for display
const parseDate = (dateStr: string) => {
  // Expected format like "24.03.2025 14:32:11" or similar
  const parts = dateStr.split(/[.\s/]/);
  if (parts.length >= 2) {
    return { day: parts[0], month: parts[1], raw: dateStr };
  }
  return { day: '—', month: '—', raw: dateStr };
};

// Convert HTML content to clean, readable plain text:
// - inserts whitespace where block-level/line-break tags were, so words
//   from neighbouring tags don't get glued together
// - strips remaining tags
// - decodes common HTML entities (&nbsp;, &amp;, &quot;, ...)
// - collapses extra whitespace left behind
const htmlToPlainText = (html: string) => {
  // Drop tags whose *content* is not meant to be visible text at all
  // (CSS, JS, document metadata) — removing only the tags themselves
  // would leak raw CSS/JS into the preview.
  const withoutNonContent = html.replace(
    /<\s*(style|script|head)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,
    ''
  );

  const withBreaks = withoutNonContent
    // block-ish tags become a space/newline boundary before we strip them
    .replace(/<\s*(br|\/p|\/div|\/li|\/h[1-6]|\/tr)\s*\/?>/gi, '\n')
    .replace(/<\s*(p|div|li|h[1-6]|tr)\b[^>]*>/gi, '\n');

  const withoutTags = withBreaks.replace(/<\/?[^>]+(>|$)/g, '');

  const decoded = withoutTags
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&mdash;/gi, '—')
    .replace(/&ndash;/gi, '–')
    .replace(/&hellip;/gi, '…')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));

  return decoded
    .split('\n')
    .map(line => line.replace(/[ \t]+/g, ' ').trim())
    .filter(Boolean)
    .join('\n')
    .trim();
};

const monthNames: Record<string, string> = {
  '01': 'Січ',
  '02': 'Лют',
  '03': 'Бер',
  '04': 'Кві',
  '05': 'Тра',
  '06': 'Чер',
  '07': 'Лип',
  '08': 'Сер',
  '09': 'Вер',
  '10': 'Жов',
  '11': 'Лис',
  '12': 'Гру',
};

const AnnounceTimelineCard = ({
  item,
  index,
  expandedId,
  isLast,
  onCardClick,
  onToggleExpanded,
}: AnnounceTimelineCardProps) => {
  const isExpanded = expandedId === String(item.id);
  const firstImage = item['Фото'].split(/(?:\n|, |,)/)[0];
  const { day, month } = parseDate(item['Позначка часу']);
  const monthLabel = monthNames[month] ?? month;
  const isHtml = containsHtml(item['Текст новини']);
  const plainText = isHtml
    ? htmlToPlainText(item['Текст новини'])
    : item['Текст новини'];

  return (
    <div
      className="animate-fade-in flex gap-4"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-700">
          <span className="text-sm font-bold leading-none">{day}</span>
          <span className="text-[10px] leading-none opacity-80">{monthLabel}</span>
        </div>
        {!isLast && (
          <div className="mt-1 flex-1 w-px bg-gray-200 dark:bg-gray-700" />
        )}
      </div>

      {/* Card */}
      <article
        className="mb-4 flex-1 cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
        onClick={() => onCardClick(String(item.id))}
      >
        {isExpanded ? (
          <div className="p-5">
            <img
              src={firstImage}
              alt={item['Назва новини']}
              className="mb-4 w-full max-h-[400px] rounded-lg object-contain"
            />
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-300">
              {item['Назва новини']}
            </h2>
            {isHtml ? (
              <div
                className="leading-relaxed text-sm text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: item['Текст новини'] }}
              />
            ) : (
              <div className="whitespace-pre-wrap leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                {item['Текст новини']}
              </div>
            )}
            <Slider item={item} />
          </div>
        ) : (
          <div className="flex gap-3 p-4">
            <img
              src={firstImage}
              alt={item['Назва новини']}
              className="hidden h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:block"
            />
            <div className="flex-1 min-w-0">
              <h2 className="mb-1 text-sm font-bold leading-snug text-gray-900 hover:text-blue-600 transition-colors dark:text-gray-300">
                {item['Назва новини']}
              </h2>
              <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {plainText}
              </p>
            </div>
          </div>
          
        )}

        {item['Текст новини'].split('\n').length > 2 && (
          <div className="border-t border-gray-100 px-4 py-2 dark:border-gray-700">
            <button
              onClick={e => {
                e.stopPropagation();
                onToggleExpanded(item.id);
              }}
              className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              {isExpanded ? (
                <><ChevronUp className="h-3.5 w-3.5" /> Згорнути</>
              ) : (
                <><ChevronDown className="h-3.5 w-3.5" /> Читати повністю</>
              )}
            </button>
          </div>
        )}
      </article>
    </div>
  );
};

export default AnnounceTimelineCard;
