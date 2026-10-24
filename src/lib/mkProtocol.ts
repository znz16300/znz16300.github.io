import type { DataObject } from '@/type/kursi';

/* ───────────── Константи ───────────── */

export const COMMISSION_PRESETS: string[] = [
  'класних керівників',
  'вчителів української мови, української та зарубіжної літератури',
  'учителів історії, правознавства, курсу «Громадянська освіта» та географії',
  'вчителів іноземних мов',
  'вчителів початкових класів та вихователів груп продовженого дня',
  'вчителів біології та хімії',
  'вчителів математики, фізики та інформатики',
  'вчителів художньо-естетичного напрямку та технологій, керівників гуртків ЦПО',
  'вчителів фізичної культури та захисту України, вчителів-тренерів ДЮСШ',
];

const F = {
  teacher: 'Працівник, який пройшов курсову підготовку',
  title: 'Назва курсів, семінару, вебінару тощо',
  org: 'Назва організації чи платформи, на базі якої проходила підготовка, навчання',
  date: 'Дата видачі документа',
  hours: 'Кількість годин',
  incl: 'З них з інклюзії',
  support: 'З них з надання психологічної підтримки учасникам освітнього процесу',
} as const;

export const FIELDS = F;

/* ───────────── Типи ───────────── */

export interface CommissionSettings {
  name: string;
  head: string;
  secretary: string;
}

export interface ProtocolData {
  number: string;
  date: string; // yyyy-mm-dd
  start: string; // hh:mm
  present: string;
  absent: string;
  /** ПІБ вчителя → id обраних курсів */
  entries: Record<string, string[]>;
}

export interface SavedProtocol extends ProtocolData {
  id: string;
  settings: CommissionSettings;
  savedAt: number;
}

/* ───────────── localStorage ───────────── */

const KEY_SETTINGS = 'mk_commission_settings';
const KEY_DRAFT = 'mk_protocol_draft';
const KEY_SAVED = 'mk_protocols';

function readLS<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLS(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('localStorage error', e);
  }
}

export const loadSettings = (): CommissionSettings => ({
  name: '',
  head: '',
  secretary: '',
  ...readLS<Partial<CommissionSettings>>(KEY_SETTINGS, {}),
});
export const saveSettings = (s: CommissionSettings) => writeLS(KEY_SETTINGS, s);

export const loadDraft = (): { data: ProtocolData; currentId: string | null } | null =>
  readLS<{ data: ProtocolData; currentId: string | null } | null>(KEY_DRAFT, null);
export const saveDraft = (data: ProtocolData, currentId: string | null) =>
  writeLS(KEY_DRAFT, { data, currentId });

export const loadSavedProtocols = (): SavedProtocol[] => readLS<SavedProtocol[]>(KEY_SAVED, []);
export const saveSavedProtocols = (list: SavedProtocol[]) => writeLS(KEY_SAVED, list);

export function todayIso(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export const newProtocolData = (): ProtocolData => ({
  number: '',
  date: todayIso(),
  start: '',
  present: '',
  absent: '',
  entries: {},
});

export const newId = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

/* ───────────── Шаблон ───────────── */

export const TEMPLATE_URL = `${import.meta.env.BASE_URL}templates/protocol-mk.txt`;

/** Запасний шаблон, якщо файл у public/templates недоступний */
export const DEFAULT_TEMPLATE = `ПРОТОКОЛ № {{number}}
засідання методичної комісії {{commission}}

{{date}}                    селище Куликівка                    Початок {{start}}

Голова – {{head}}
Секретар – {{secretary}}

Присутні: {{present}}
Відсутні – {{absent}}

Порядок денний:
1. Про підвищення кваліфікації педагогічних працівників.

{{#point}}
1. СЛУХАЛИ:
{{#teachers}}
{{name}} – {{#courses}}{{povidomyv}} про підвищення кваліфікації, яке було пройдено від {{org}} з теми «{{title}}» {{date}} ({{hours}}){{sep}}{{/courses}}
Коротко {{oznaiomyv}} із змістом і результатами навчання. {{zaznachyv}}, що отримані знання та практичні матеріали планує використовувати у своїй педагогічній діяльності для підвищення ефективності освітнього процесу.

{{/teachers}}
ВИРІШИЛИ:
1.1. Подати на розгляд педагогічної ради пропозицію про визнання результатів підвищення кваліфікації педагогічних працівників, здобутих поза закладом освіти в установах, що мають ліцензію на підвищення кваліфікації або провадять освітню діяльність за акредитованими освітніми програмами.

ГОЛОСУВАЛИ: «за» – ; «проти» – ; «утрималися» – .
{{/point}}

Голова методичної комісії        ______________        {{head}}
Секретар методичної комісії      ______________        {{secretary}}
`;

let templatePromise: Promise<{ text: string; fromFile: boolean }> | null = null;

export function loadTemplate(force = false): Promise<{ text: string; fromFile: boolean }> {
  if (!templatePromise || force) {
    templatePromise = fetch(`${TEMPLATE_URL}?t=${Date.now()}`)
      .then(r => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      // у dev-режимі відсутній файл може повернути index.html – перевіряємо вміст
      .then(text =>
        text.includes('{{teachers}}') || text.includes('{{#teachers}}')
          ? { text, fromFile: true }
          : { text: DEFAULT_TEMPLATE, fromFile: false }
      )
      .catch(() => ({ text: DEFAULT_TEMPLATE, fromFile: false }));
  }
  return templatePromise;
}

/* ───────────── Рендер шаблону ───────────── */

type Ctx = { [key: string]: string | Ctx[] };

const TAG_RE = /\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}|\{\{(\w+)\}\}/g;

function render(tpl: string, ctx: Ctx): string {
  return tpl.replace(
    TAG_RE,
    (_m: string, loop: string | undefined, inner: string | undefined, name: string | undefined) => {
      if (loop) {
        const list = ctx[loop];
        if (!Array.isArray(list)) return '';
        return list.map(item => render(inner ?? '', { ...ctx, ...item })).join('');
      }
      const v = name ? ctx[name] : '';
      return typeof v === 'string' ? v : '';
    }
  );
}

/** Рядки, на яких є лише тег циклу, не залишають порожніх рядків у результаті */
function normalizeTemplate(t: string): string {
  return t.replace(/\r\n?/g, '\n').replace(/^[ \t]*(\{\{[#/]\w+\}\})[ \t]*\n/gm, '$1');
}

/* ───────────── Допоміжні функції ───────────── */

const MONTHS = [
  'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
  'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня',
];

/** yyyy-mm-dd → «24» жовтня 2026 року */
export function formatLongDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return '«___» _________ 20__ року';
  return `«${m[3]}» ${MONTHS[Number(m[2]) - 1]} ${m[1]} року`;
}

/** yyyy-mm-dd → dd.mm.yyyy */
export function formatShortDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  return m ? `${m[3]}.${m[2]}.${m[1]}` : '';
}

/** «Прізвище Ім'я По-батькові» → «Ім'я ПРІЗВИЩЕ» */
export function formatNameForProtocol(fullName: string): string {
  const parts = (fullName || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].toUpperCase();
  return `${parts[1]} ${parts[0].toUpperCase()}`;
}

function isFemale(fullName: string): boolean {
  const patronymic = (fullName.trim().split(/\s+/)[2] || '').toLowerCase();
  return /(івна|ївна|овна|євна)$/.test(patronymic);
}

function parseCourseDate(s: string): number {
  const m = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec((s || '').trim());
  if (m) return Date.UTC(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  const t = Date.parse(s || '');
  return Number.isNaN(t) ? 0 : t;
}

export const sortCoursesDesc = (items: DataObject[]) =>
  [...items].sort((a, b) => parseCourseDate(b[F.date]) - parseCourseDate(a[F.date]));

const toNum = (v: string | undefined) => parseFloat((v || '').replace(',', '.'));

function hoursWord(n: number): string {
  const m100 = n % 100;
  const m10 = n % 10;
  if (m100 >= 11 && m100 <= 14) return 'годин';
  if (m10 === 1) return 'година';
  if (m10 >= 2 && m10 <= 4) return 'години';
  return 'годин';
}

function formatHours(v: string): string {
  const n = toNum(v);
  if (!Number.isFinite(n)) return `${v} годин`;
  if (!Number.isInteger(n)) return `${v} години`;
  return `${n} ${hoursWord(n)}`;
}

function courseHoursText(item: DataObject): string {
  const total = item[F.hours] || '0';
  let text = formatHours(total);
  const extras: string[] = [];
  if (toNum(item[F.incl]) > 0) extras.push(`${formatHours(item[F.incl])} з інклюзії`);
  if (toNum(item[F.support]) > 0)
    extras.push(
      `${formatHours(item[F.support])} з надання психологічної підтримки учасникам освітнього процесу`
    );
  if (extras.length) text += `, з них ${extras.join(', ')}`;
  return text;
}

/* ───────────── Побудова протоколу ───────────── */

const BLANK = '______';

export function buildProtocolText(args: {
  template: string;
  itemOnly: boolean;
  data: ProtocolData;
  settings: CommissionSettings;
  allItems: DataObject[];
}): string {
  const { template, itemOnly, data, settings, allItems } = args;

  const teachers: Ctx[] = Object.keys(data.entries)
    .sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' })) // за ПІБ
    .map(name => {
      const ids = new Set(data.entries[name]);
      const items = allItems
        .filter(i => i[F.teacher] === name && ids.has(String(i.id)))
        .sort((a, b) => parseCourseDate(a[F.date]) - parseCourseDate(b[F.date])); // від давніших
      if (!items.length) return null;
      const female = isFemale(name);
      return {
        name: formatNameForProtocol(name),
        povidomyv: female ? 'повідомила' : 'повідомив',
        oznaiomyv: female ? 'ознайомила' : 'ознайомив',
        zaznachyv: female ? 'Зазначила' : 'Зазначив',
        courses: items.map((it, idx) => ({
          org: it[F.org] || '',
          title: it[F.title] || '',
          date: it[F.date] || '',
          hours: courseHoursText(it),
          sep: idx < items.length - 1 ? ';\n' : '.',
        })),
      } as Ctx;
    })
    .filter((t): t is Ctx => t !== null);

  if (!teachers.length) return '';

  const ctx: Ctx = {
    number: data.number.trim() || '___',
    commission: settings.name.trim() || BLANK,
    head: formatNameForProtocol(settings.head) || BLANK,
    secretary: formatNameForProtocol(settings.secretary) || BLANK,
    date: formatLongDate(data.date),
    start: data.start || BLANK,
    present: data.present.trim() || BLANK,
    absent: data.absent.trim() || BLANK,
    point: [{}],
    teachers,
  };

  let tpl = normalizeTemplate(template);
  if (itemOnly) {
    const m = /\{\{#point\}\}([\s\S]*?)\{\{\/point\}\}/.exec(tpl);
    if (m) tpl = m[1];
  }
  return render(tpl, ctx)
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/* ───────────── Буфер обміну ───────────── */

/**
 * Копіює текст у буфер обміну.
 * 1) Clipboard API (потрібен https/localhost);
 * 2) запасний варіант через execCommand – textarea додається ВСЕРЕДИНУ модального вікна
 *    (інакше фокус-трап Radix Dialog забирає фокус, і копіювання не спрацьовує).
 */
export async function copyToClipboard(text: string, container?: HTMLElement | null): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* переходимо до запасного варіанта */
  }
  const prev = document.activeElement as HTMLElement | null;
  const ta = document.createElement('textarea');
  try {
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
    (container ?? document.body).appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, text.length);
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    ta.remove();
    prev?.focus?.();
  }
}
