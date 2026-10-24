import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { DataObject } from '@/type/kursi';
import {
  Check,
  ChevronDown,
  ChevronsUpDown,
  Copy,
  CopyPlus,
  Download,
  FilePlus2,
  FileText,
  Pencil,
  Save,
  Trash2,
} from 'lucide-react';
import {
  COMMISSION_PRESETS,
  DEFAULT_TEMPLATE,
  FIELDS,
  CommissionSettings,
  ProtocolData,
  SavedProtocol,
  buildProtocolText,
  copyToClipboard,
  formatShortDate,
  loadDraft,
  loadSavedProtocols,
  loadSettings,
  loadTemplate,
  newId,
  newProtocolData,
  saveDraft,
  saveSavedProtocols,
  saveSettings,
  sortCoursesDesc,
} from '@/lib/mkProtocol';
import { protocolToDocxBlob } from '@/lib/docxExport';

interface MKHeadModalProps {
  open: boolean;
  onClose: () => void;
  allTeachers: string[];
  allItems: DataObject[];
}

const CUSTOM = '__custom';

const HelpPanel = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1 text-sm leading-relaxed">
    <Button variant="outline" size="sm" onClick={onBack}>
      ← Повернутися до протоколу
    </Button>

    <section>
      <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">
        Алгоритм формування протоколу
      </h3>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <b>Комісія (один раз).</b> Оберіть назву методичної комісії зі списку (або «Інша
          назва…»), впишіть голову й секретаря у форматі «Прізвище Ім’я По батькові». Дані
          запам’ятовуються в браузері.
        </li>
        <li>
          <b>Засідання.</b> Вкажіть номер протоколу, дату проведення засідання та час початку. За
          потреби заповніть «Присутні» (за алфавітом) і «Відсутні».
        </li>
        <li>
          <b>Працівники.</b> Оберіть педагога (працює пошук за прізвищем) і позначте його курси,
          які розглядаються на засіданні. Потім оберіть наступного педагога й так далі. Усі вони
          потраплять в один пункт протоколу, відсортовані за ПІБ. Змінити курси чи видалити
          педагога можна у списку «У протоколі».
        </li>
        <li>
          <b>Перевірка.</b> Праворуч відображається готовий текст. Прапорець «Лише пункт порядку
          денного» залишає тільки блок СЛУХАЛИ / ВИРІШИЛИ, якщо протокол уже є й потрібно лише
          вставити цей пункт.
        </li>
        <li>
          <b>Вивантаження.</b> «Копіювати» – у буфер обміну; «.docx» – готовий файл Word з
          оформленням за Інструкцією; «.txt» – простий текст.
        </li>
        <li>
          <b>Дозаповнення.</b> У файлі залишено порожні місця (___): номер протоколу, час початку,
          присутні, результати голосування. Заповніть їх, перевірте текст.
        </li>
        <li>
          <b>Збереження.</b> Натисніть «Зберегти» – протокол з’явиться у вкладці «Збережені»
          (відкрити, змінити, дублювати, видалити). Чернетка зберігається автоматично.
        </li>
        <li>
          <b>Після засідання.</b> Роздрукуйте протокол, підпишіть (голова й секретар), зареєструйте
          та підшийте до справи згідно з номенклатурою справ закладу.
        </li>
      </ol>
    </section>

    <section>
      <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">
        Вимоги Інструкції з діловодства, які враховано
      </h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Стисла форма протоколу: СЛУХАЛИ – ВИРІШИЛИ, текст від третьої особи.</li>
        <li>
          Заголовок: вид документа та колегіальний орган («ПРОТОКОЛ № … засідання методичної
          комісії …»). Датою протоколу є дата проведення засідання.
        </li>
        <li>
          Вступна частина: голова, секретар, присутні, відсутні, порядок денний (питання
          починається з «Про»).
        </li>
        <li>Імена пишуться у форматі «Ім’я ПРІЗВИЩЕ»; присутні – за алфавітом.</li>
        <li>
          Якщо присутніх понад 15 осіб, у протоколі зазначається їх загальна кількість, а список
          додається окремо.
        </li>
        <li>Протокол підписують головуючий і секретар.</li>
        <li>
          Нумерація протоколів ведеться окремо за кожним колегіальним органом (для методичних
          комісій – як правило, у межах навчального року; уточніть порядок у діловодстві
          закладу).
        </li>
        <li>
          Файл .docx: Times New Roman 14 пт; поля: ліве 3 см, праве 1 см, верхнє й нижнє по 2 см;
          абзац 10 мм; інтервал 1,5 у тексті; СЛУХАЛИ / ВИРІШИЛИ – без відступу; нумерація
          сторінок зверху посередині, починаючи з другої.
        </li>
      </ul>
    </section>

    <section>
      <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">Шаблон</h3>
      <p>
        Текст протоколу формується за файлом <code>public/templates/protocol-mk.txt</code>. Його
        можна змінювати як звичайний текстовий файл (формулювання, місце проведення тощо) без
        зміни коду. Рядки з кількома пробільними проміжками (3 і більше) у файлі .docx
        розкладаються по колонках (дата / місце / початок; підписи).
      </p>
    </section>
  </div>
);

const MKHeadModal = ({ open, onClose, allTeachers, allItems }: MKHeadModalProps) => {
  const [settings, setSettings] = useState<CommissionSettings>(loadSettings);
  const [customMode, setCustomMode] = useState<boolean>(() => {
    const s = loadSettings();
    return !!s.name && !COMMISSION_PRESETS.includes(s.name);
  });
  const [settingsOpen, setSettingsOpen] = useState<boolean>(() => {
    const s = loadSettings();
    return !(s.name && s.head && s.secretary);
  });

  const [data, setData] = useState<ProtocolData>(() => loadDraft()?.data ?? newProtocolData());
  const [currentId, setCurrentId] = useState<string | null>(() => loadDraft()?.currentId ?? null);
  const [saved, setSaved] = useState<SavedProtocol[]>(loadSavedProtocols);

  const [tab, setTab] = useState('editor');
  const [activeTeacher, setActiveTeacher] = useState('');
  const [comboOpen, setComboOpen] = useState(false);
  const [itemOnly, setItemOnly] = useState(false);
  const [copied, setCopied] = useState<'idle' | 'ok' | 'error'>('idle');
  const [helpOpen, setHelpOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [savedFlash, setSavedFlash] = useState(false);
  const [template, setTemplate] = useState(DEFAULT_TEMPLATE);
  const [templateFromFile, setTemplateFromFile] = useState(true);

  /* ── збереження в localStorage ── */
  useEffect(() => saveSettings(settings), [settings]);
  useEffect(() => saveDraft(data, currentId), [data, currentId]);
  useEffect(() => saveSavedProtocols(saved), [saved]);

  /* ── завантаження шаблону при відкритті ── */
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    loadTemplate(true).then(t => {
      if (cancelled) return;
      setTemplate(t.text);
      setTemplateFromFile(t.fromFile);
    });
    return () => {
      cancelled = true;
    };
  }, [open]);

  /* ── похідні дані ── */
  const teacherCourses = useMemo(() => {
    if (!activeTeacher) return [];
    return sortCoursesDesc(allItems.filter(i => i[FIELDS.teacher] === activeTeacher));
  }, [activeTeacher, allItems]);

  const addedTeachers = useMemo(
    () =>
      Object.keys(data.entries).sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' })),
    [data.entries]
  );

  const text = useMemo(
    () => buildProtocolText({ template, itemOnly, data, settings, allItems }),
    [template, itemOnly, data, settings, allItems]
  );

  const presetValue = customMode
    ? CUSTOM
    : COMMISSION_PRESETS.includes(settings.name)
      ? settings.name
      : '';

  /* ── зміни даних ── */
  const patchData = (patch: Partial<ProtocolData>) => {
    setData(d => ({ ...d, ...patch }));
    setCopied('idle');
  };

  const setTeacherCourses = (teacher: string, ids: string[]) => {
    setData(d => {
      const entries = { ...d.entries };
      if (ids.length) entries[teacher] = ids;
      else delete entries[teacher];
      return { ...d, entries };
    });
    setCopied('idle');
  };

  const toggleCourse = (id: string) => {
    const cur = data.entries[activeTeacher] ?? [];
    setTeacherCourses(
      activeTeacher,
      cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id]
    );
  };

  const selectedForActive = data.entries[activeTeacher] ?? [];
  const allCoursesSelected =
    teacherCourses.length > 0 && selectedForActive.length === teacherCourses.length;

  /* ── дії ── */
  const handleCopy = async () => {
    if (!text) return;
    const ok = await copyToClipboard(text, dialogRef.current);
    setCopied(ok ? 'ok' : 'error');
    if (ok) setTimeout(() => setCopied('idle'), 2000);
  };

  const fileBase = `Протокол_МК_${data.number || 'б-н'}_${data.date || ''}`;

  const saveBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleDownloadTxt = () => {
    if (!text) return;
    saveBlob(
      new Blob(['\uFEFF' + text.replace(/\n/g, '\r\n')], { type: 'text/plain;charset=utf-8' }),
      `${fileBase}.txt`
    );
  };

  const handleDownloadDocx = () => {
    if (!text) return;
    saveBlob(protocolToDocxBlob(text), `${fileBase}.docx`);
  };

  const handleSave = (asNew = false) => {
    const id = asNew || !currentId ? newId() : currentId;
    const rec: SavedProtocol = { ...data, id, settings, savedAt: Date.now() };
    setSaved(list => [rec, ...list.filter(p => p.id !== id)]);
    setCurrentId(id);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  };

  const handleNew = () => {
    const hasUnsaved = !currentId && Object.keys(data.entries).length > 0;
    if (hasUnsaved && !window.confirm('Поточний протокол не збережено. Почати новий?')) return;
    setData(newProtocolData());
    setCurrentId(null);
    setActiveTeacher('');
    setTab('editor');
  };

  const handleOpenSaved = (p: SavedProtocol) => {
    const { id, settings: s, savedAt: _savedAt, ...rest } = p;
    void _savedAt;
    setData(rest);
    setSettings(s);
    setCustomMode(!!s.name && !COMMISSION_PRESETS.includes(s.name));
    setCurrentId(id);
    setActiveTeacher('');
    setTab('editor');
  };

  const handleDuplicate = (p: SavedProtocol) => {
    setSaved(list => [{ ...p, id: newId(), number: '', savedAt: Date.now() }, ...list]);
  };

  const handleDeleteSaved = (p: SavedProtocol) => {
    if (!window.confirm(`Видалити протокол № ${p.number || 'б/н'} від ${formatShortDate(p.date)}?`))
      return;
    setSaved(list => list.filter(x => x.id !== p.id));
    if (currentId === p.id) setCurrentId(null);
  };

  const settingsSummary = [settings.name, settings.head && `Голова: ${settings.head}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <Dialog open={open} onOpenChange={o => !o && onClose()}>
      <DialogContent
        ref={dialogRef}
        className="flex max-h-[92vh] max-w-5xl flex-col overflow-hidden"
      >
        <button
          type="button"
          title="Як сформувати протокол"
          aria-label="Довідка"
          onClick={() => setHelpOpen(h => !h)}
          className={cn(
            'absolute right-12 top-3.5 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-bold',
            helpOpen
              ? 'border-blue-700 bg-blue-700 text-white'
              : 'border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700'
          )}
        >
          ?
        </button>
        <DialogHeader>
          <DialogTitle className="pr-14 text-lg font-semibold text-blue-800 dark:text-blue-300">
            Протокол засідання методичної комісії (підвищення кваліфікації)
          </DialogTitle>
        </DialogHeader>

        {helpOpen && <HelpPanel onBack={() => setHelpOpen(false)} />}

        <Tabs
          value={tab}
          onValueChange={setTab}
          className={cn('min-h-0 flex-1 flex-col', helpOpen ? 'hidden' : 'flex')}
        >
          <div className="flex items-center justify-between gap-2">
            <TabsList>
              <TabsTrigger value="editor">Протокол</TabsTrigger>
              <TabsTrigger value="saved">Збережені ({saved.length})</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" onClick={handleNew} className="gap-1">
              <FilePlus2 className="h-4 w-4" />
              Новий
            </Button>
          </div>

          {/* ───────── Редактор ───────── */}
          <TabsContent
            value="editor"
            className="mt-3 min-h-0 flex-1 overflow-y-auto data-[state=active]:flex md:overflow-hidden"
          >
            <div className="grid w-full gap-4 md:grid-cols-2">
              {/* Ліва колонка */}
              <div className="space-y-4 md:min-h-0 md:overflow-y-auto md:pr-1">
                {/* Комісія */}
                <div className="rounded-md border p-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 text-left"
                    onClick={() => setSettingsOpen(o => !o)}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">Комісія</p>
                      {!settingsOpen && (
                        <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                          {settingsSummary || 'Не заповнено'}
                        </p>
                      )}
                    </div>
                    <ChevronDown
                      className={cn('h-4 w-4 shrink-0 transition', settingsOpen && 'rotate-180')}
                    />
                  </button>

                  {settingsOpen && (
                    <div className="mt-3 space-y-3">
                      <div className="space-y-1">
                        <Label className="text-xs">Методична комісія</Label>
                        <Select
                          value={presetValue}
                          onValueChange={v => {
                            if (v === CUSTOM) {
                              setCustomMode(true);
                            } else {
                              setCustomMode(false);
                              setSettings(s => ({ ...s, name: v }));
                            }
                          }}
                        >
                          <SelectTrigger className="h-auto min-h-10 whitespace-normal py-2 text-left">
                            <SelectValue placeholder="Оберіть комісію" />
                          </SelectTrigger>
                          <SelectContent>
                            {COMMISSION_PRESETS.map(n => (
                              <SelectItem key={n} value={n}>
                                {n}
                              </SelectItem>
                            ))}
                            <SelectItem value={CUSTOM}>Інша назва…</SelectItem>
                          </SelectContent>
                        </Select>
                        {customMode && (
                          <Input
                            placeholder="Назва комісії (у родовому відмінку)"
                            value={settings.name}
                            onChange={e => setSettings(s => ({ ...s, name: e.target.value }))}
                          />
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Голова (Прізвище Ім’я По батькові)</Label>
                        <Input
                          value={settings.head}
                          onChange={e => setSettings(s => ({ ...s, head: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Секретар (Прізвище Ім’я По батькові)</Label>
                        <Input
                          value={settings.secretary}
                          onChange={e => setSettings(s => ({ ...s, secretary: e.target.value }))}
                        />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Зберігається у браузері й підставляється автоматично.
                      </p>
                    </div>
                  )}
                </div>

                {/* Дані засідання */}
                <div className="rounded-md border p-3">
                  <p className="mb-3 text-sm font-semibold">Засідання</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">№ протоколу</Label>
                      <Input
                        value={data.number}
                        onChange={e => patchData({ number: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Дата</Label>
                      <Input
                        type="date"
                        value={data.date}
                        onChange={e => patchData({ date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Початок</Label>
                      <Input
                        type="time"
                        value={data.start}
                        onChange={e => patchData({ start: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="mt-2 grid gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Присутні (за алфавітом; необов’язково)</Label>
                      <Textarea
                        rows={2}
                        value={data.present}
                        onChange={e => patchData({ present: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Відсутні (необов’язково)</Label>
                      <Input
                        value={data.absent}
                        onChange={e => patchData({ absent: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Працівники */}
                <div className="rounded-md border p-3">
                  <p className="mb-3 text-sm font-semibold">Педагогічні працівники</p>

                  <Popover open={comboOpen} onOpenChange={setComboOpen} modal>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between font-normal"
                      >
                        <span className="truncate">{activeTeacher || 'Оберіть працівника…'}</span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-[--radix-popover-trigger-width] p-0"
                      align="start"
                    >
                      <Command>
                        <CommandInput placeholder="Пошук за прізвищем…" />
                        <CommandList>
                          <CommandEmpty>Нікого не знайдено</CommandEmpty>
                          <CommandGroup>
                            {allTeachers.map(name => {
                              const n = data.entries[name]?.length ?? 0;
                              return (
                                <CommandItem
                                  key={name}
                                  value={name}
                                  onSelect={() => {
                                    setActiveTeacher(name);
                                    setComboOpen(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4 text-green-600',
                                      n ? 'opacity-100' : 'opacity-0'
                                    )}
                                  />
                                  <span className="flex-1">{name}</span>
                                  {n > 0 && <Badge variant="secondary">{n}</Badge>}
                                </CommandItem>
                              );
                            })}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  {activeTeacher && (
                    <div className="mt-3">
                      {teacherCourses.length === 0 ? (
                        <p className="py-3 text-center text-sm text-gray-500">Курси не знайдено</p>
                      ) : (
                        <>
                          <div className="mb-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>
                              Обрано {selectedForActive.length} з {teacherCourses.length}
                            </span>
                            <button
                              type="button"
                              className="text-blue-700 hover:underline dark:text-blue-400"
                              onClick={() =>
                                setTeacherCourses(
                                  activeTeacher,
                                  allCoursesSelected ? [] : teacherCourses.map(c => String(c.id))
                                )
                              }
                            >
                              {allCoursesSelected ? 'Зняти всі' : 'Обрати всі'}
                            </button>
                          </div>
                          <div className="divide-y rounded-md border">
                            {teacherCourses.map(item => {
                              const id = String(item.id);
                              return (
                                <label
                                  key={id}
                                  className="flex cursor-pointer items-start gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                  <Checkbox
                                    checked={selectedForActive.includes(id)}
                                    onCheckedChange={() => toggleCourse(id)}
                                    className="mt-0.5 shrink-0"
                                  />
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium leading-snug">
                                      {item[FIELDS.title]}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                                      {item[FIELDS.org]} · {item[FIELDS.date]} ·{' '}
                                      {item[FIELDS.hours]} год.
                                    </p>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                            Зміни додаються до протоколу одразу. Оберіть наступного працівника
                            вище.
                          </p>
                        </>
                      )}
                    </div>
                  )}

                  {addedTeachers.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        У протоколі ({addedTeachers.length}):
                      </p>
                      <ul className="divide-y rounded-md border">
                        {addedTeachers.map(name => (
                          <li
                            key={name}
                            className={cn(
                              'flex items-center gap-2 px-3 py-1.5 text-sm',
                              name === activeTeacher && 'bg-blue-50 dark:bg-gray-700'
                            )}
                          >
                            <span className="min-w-0 flex-1 truncate">{name}</span>
                            <Badge variant="secondary">{data.entries[name].length}</Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              title="Змінити курси"
                              onClick={() => setActiveTeacher(name)}
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-red-600"
                              title="Видалити з протоколу"
                              onClick={() => setTeacherCourses(name, [])}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Права колонка: перегляд */}
              <div className="flex min-h-[16rem] flex-col gap-2 md:min-h-0">
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <Checkbox
                    checked={itemOnly}
                    onCheckedChange={c => setItemOnly(c === true)}
                  />
                  Лише пункт порядку денного (СЛУХАЛИ / ВИРІШИЛИ)
                </label>

                <div className="min-h-0 flex-1 overflow-y-auto rounded-md border bg-gray-50 dark:bg-gray-800">
                  {text ? (
                    <pre className="whitespace-pre-wrap p-4 font-sans text-sm leading-relaxed">
                      {text}
                    </pre>
                  ) : (
                    <p className="p-6 text-center text-sm text-gray-500">
                      Оберіть працівника та його курси — текст протоколу з’явиться тут.
                    </p>
                  )}
                </div>

                {!templateFromFile && (
                  <p className="text-xs text-amber-600">
                    Файл шаблону public/templates/protocol-mk.txt не знайдено — використано
                    вбудований шаблон.
                  </p>
                )}

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" onClick={handleCopy} disabled={!text} className="gap-1.5 px-2">
                    {copied === 'ok' ? (
                      <>
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-green-600">Готово</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Копіювати
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDownloadTxt}
                    disabled={!text}
                    className="gap-1.5 px-2"
                  >
                    <Download className="h-4 w-4" />
                    .txt
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDownloadDocx}
                    disabled={!text}
                    className="gap-1.5 px-2"
                  >
                    <FileText className="h-4 w-4" />
                    .docx
                  </Button>
                </div>
                {copied === 'error' && (
                  <p className="text-xs text-red-600">
                    Браузер заблокував копіювання. Виділіть текст у вікні вище та натисніть Ctrl+C
                    (на Mac – Cmd+C) або завантажте файл .docx.
                  </p>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => handleSave(false)}
                    disabled={!addedTeachers.length}
                    className="gap-2 bg-blue-700 text-white hover:bg-blue-800"
                  >
                    {savedFlash ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                    {savedFlash ? 'Збережено' : currentId ? 'Оновити збережений' : 'Зберегти'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSave(true)}
                    disabled={!addedTeachers.length || !currentId}
                    className="gap-2"
                  >
                    <CopyPlus className="h-4 w-4" />
                    Зберегти як новий
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ───────── Збережені ───────── */}
          <TabsContent value="saved" className="mt-3 min-h-0 flex-1 overflow-y-auto">
            {saved.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                Збережених протоколів ще немає.
              </p>
            ) : (
              <ul className="space-y-2">
                {[...saved]
                  .sort((a, b) => b.savedAt - a.savedAt)
                  .map(p => {
                    const names = Object.keys(p.entries).sort((a, b) =>
                      a.localeCompare(b, 'uk', { sensitivity: 'base' })
                    );
                    return (
                      <li
                        key={p.id}
                        className={cn(
                          'rounded-md border p-3',
                          p.id === currentId && 'border-blue-600'
                        )}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold">
                              Протокол № {p.number || 'б/н'} від {formatShortDate(p.date)}
                              {p.id === currentId && (
                                <Badge className="ml-2" variant="secondary">
                                  відкрито
                                </Badge>
                              )}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              МК {p.settings.name || '—'}
                            </p>
                            <p className="mt-1 text-xs">
                              {names.length} працівн.: {names.join('; ')}
                            </p>
                          </div>
                          <div className="flex shrink-0 gap-1">
                            <Button size="sm" onClick={() => handleOpenSaved(p)} className="gap-1">
                              <Pencil className="h-3.5 w-3.5" />
                              Відкрити
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              title="Дублювати"
                              onClick={() => handleDuplicate(p)}
                            >
                              <CopyPlus className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              title="Видалити"
                              className="text-red-600"
                              onClick={() => handleDeleteSaved(p)}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default MKHeadModal;
