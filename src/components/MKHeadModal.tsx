import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DataObject } from '@/type/kursi';
import { Copy, Check } from 'lucide-react';

interface MKHeadModalProps {
  open: boolean;
  onClose: () => void;
  allTeachers: string[];
  allItems: DataObject[];
}

// Визначає стать за по батькові (третє слово ПІБ: Прізвище Ім'я По-батькові)
function detectGender(fullName: string): 'male' | 'female' {
  const parts = fullName.trim().split(/\s+/);
  const patronymic = parts[2] || '';
  const lower = patronymic.toLowerCase();
  if (lower.endsWith('івна') || lower.endsWith('ївна') || lower.endsWith('овна') || lower.endsWith('євна')) {
    return 'female';
  }
  return 'male';
}

// Форматує ПІБ: Ім'я ПРІЗВИЩЕ (формат вхідних даних: Прізвище Ім'я По-батькові)
function formatNameForProtocol(fullName: string): string {
  if (!fullName) return '';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].toUpperCase();
  const [lastName, firstName] = parts;
  return `${firstName} ${lastName.toUpperCase()}`;
}

function parseDate(dateStr: string): Date {
  if (!dateStr) return new Date(0);
  // підтримуємо dd.mm.yyyy
  const parts = dateStr.split('.');
  if (parts.length === 3) {
    return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
  }
  return new Date(dateStr);
}

function buildProtocolText(items: DataObject[], teacherName: string): string {
  if (!items.length) return '';

  const formattedName = formatNameForProtocol(teacherName);
  const gender = detectGender(teacherName);
  const povid = gender === 'female' ? 'повідомила' : 'повідомив';
  const oznaiomyla = gender === 'female' ? 'ознайомила' : 'ознайомив';
  const zaznachyla = gender === 'female' ? 'Зазначила' : 'Зазначив';

  const courseDescriptions = items.map(item => {
    const org = item['Назва організації чи платформи, на базі якої проходила підготовка, навчання'] || '';
    const courseName = item['Назва курсів, семінару, вебінару тощо'] || '';
    const date = item['Дата видачі документа'] || '';
    const hours = item['Кількість годин'] || '0';
    const inclHours = item['З них з інклюзії'] || '0';
    const supportHours = item['З них з надання психологічної підтримки учасникам освітнього процесу'] || '0';

    let desc = `${povid} про підвищення кваліфікації, яке було пройдено від ${org} з теми «${courseName}» ${date} (${hours} годин`;

    const extras: string[] = [];
    if (inclHours && inclHours !== '0') {
      extras.push(`${inclHours} година з інклюзії`);
    }
    if (supportHours && supportHours !== '0') {
      extras.push(`${supportHours} година з надання психологічної підтримки учасникам освітнього процесу`);
    }
    if (extras.length > 0) {
      desc += `, з них ${extras.join(', ')}`;
    }
    desc += `)`;
    return desc;
  });

  const tail = `${povid} про проходження підвищення кваліфікації та коротко ${oznaiomyla} із його змістом і результатами. ${zaznachyla}, що отримані знання та практичні матеріали планує використовувати у своїй педагогічній діяльності для підвищення ефективності освітнього процесу.`;

  let slukhalyText: string;
  if (courseDescriptions.length === 1) {
    slukhalyText = `${formattedName} – ${courseDescriptions[0]}. ${tail}`;
  } else {
    const listed = courseDescriptions.join(';\n');
    slukhalyText = `${formattedName} – ${listed}.\n${tail}`;
  }

  return `СЛУХАЛИ:\n${slukhalyText}\n\nВИРІШИЛИ:\n\nПодати на розгляд педагогічної ради пропозицію про визнання результатів підвищення кваліфікації педагогічних працівників, здобутих поза закладом освіти в установах, що мають ліцензію на підвищення кваліфікації або провадять освітню діяльність за акредитованими освітніми програмами.`;
}

const MKHeadModal = ({ open, onClose, allTeachers, allItems }: MKHeadModalProps) => {
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');
  const [selectedCourseIds, setSelectedCourseIds] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);
  const [protocolText, setProtocolText] = useState('');

  const teacherCourses = useMemo(() => {
    if (!selectedTeacher) return [];
    return allItems
      .filter(item => item['Працівник, який пройшов курсову підготовку'] === selectedTeacher)
      .sort((a, b) => parseDate(b['Дата видачі документа']).getTime() - parseDate(a['Дата видачі документа']).getTime());
  }, [selectedTeacher, allItems]);

  const handleTeacherChange = (value: string) => {
    setSelectedTeacher(value);
    setSelectedCourseIds(new Set());
    setProtocolText('');
    setCopied(false);
  };

  const handleCourseToggle = (id: string) => {
    const next = new Set(selectedCourseIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedCourseIds(next);
    setProtocolText('');
    setCopied(false);
  };

  const handleGenerate = () => {
    const selected = teacherCourses.filter(item => selectedCourseIds.has(String(item.id)));
    if (!selected.length) return;
    const text = buildProtocolText(selected, selectedTeacher);
    setProtocolText(text);
  };

  const handleCopy = async () => {
    if (!protocolText) return;
    await navigator.clipboard.writeText(protocolText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setSelectedTeacher('');
    setSelectedCourseIds(new Set());
    setProtocolText('');
    setCopied(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="flex max-h-[90vh] max-w-3xl flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-blue-800 dark:text-blue-300">
            Формування тексту для протоколу МК
          </DialogTitle>
        </DialogHeader>

        {/* Teacher selector */}
        <div className="flex items-center gap-3">
          <label className="shrink-0 text-sm font-medium">Педагогічний працівник:</label>
          <Select value={selectedTeacher} onValueChange={handleTeacherChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Оберіть працівника" />
            </SelectTrigger>
            <SelectContent>
              {allTeachers.map(name => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Course list */}
        {selectedTeacher && (
          <div className="flex-1 overflow-y-auto">
            {teacherCourses.length === 0 ? (
              <p className="py-4 text-center text-sm text-gray-500">Курси не знайдено</p>
            ) : (
              <div className="divide-y rounded-md border">
                {teacherCourses.map(item => {
                  const id = String(item.id);
                  const courseName = item['Назва курсів, семінару, вебінару тощо'];
                  const date = item['Дата видачі документа'];
                  const org = item['Назва організації чи платформи, на базі якої проходила підготовка, навчання'];
                  const hours = item['Кількість годин'];

                  return (
                    <label
                      key={id}
                      className="flex cursor-pointer items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Checkbox
                        checked={selectedCourseIds.has(id)}
                        onCheckedChange={() => handleCourseToggle(id)}
                        className="mt-0.5 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug">{courseName}</p>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                          {org} · {date} · {hours} год.
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Generate button */}
        {selectedTeacher && selectedCourseIds.size > 0 && (
          <Button
            onClick={handleGenerate}
            className="bg-blue-700 text-white hover:bg-blue-800"
          >
            Сформувати текст для протоколу ({selectedCourseIds.size})
          </Button>
        )}

        {/* Protocol text output */}
        {protocolText && (
          <div className="space-y-2">
            <div className="relative rounded-md border bg-gray-50 dark:bg-gray-800">
              <pre className="max-h-56 overflow-y-auto whitespace-pre-wrap p-4 text-sm leading-relaxed">
                {protocolText}
              </pre>
            </div>
            <Button
              variant="outline"
              onClick={handleCopy}
              className="flex w-full items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">Скопійовано!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Копіювати до буфера обміну
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MKHeadModal;
