import { getKursi, getKursiFromServ } from '@/api/getKursi';
import { getPage } from '@/api/getPage';
import { Paginator } from '@/components/ui/paginator';
import {
  convertDriveLink,
  convertUrl,
  convertUrl2,
  extractDriveFileId,
  updateImgSrcsInHtml,
  updateImgSrcsInHtml2,
} from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PageItem } from '@/type/pageItem';
import { ArrowLeft, Calendar, Download, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { DataObject, TrainingItem } from '@/type/kursi';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import getClopot from '@/api/getClopot';
import Header from '@/components/header';

const Kursi = () => {
  const itemsPerPage = 5;
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pageItems, setPageItems] = useState<TrainingItem[] | PageItem[] | DataObject[]>([]);
  const [allTeachers, setAllTeachers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log('Page component loaded');

  const location = useLocation();
  const navigate = useNavigate();

  // Функція для завантаження даних
  const fetchData = async (sheetId: string, selectedTopic: string) => {
    setLoading(true);
    try {
      const result = await getKursiFromServ(sheetId, selectedTopic);
      const { data, all } = result || { data: [], all: [] };
      if (result) {
        setPageItems(data || []);
        setAllTeachers(all || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Єдиний ефект для завантаження даних
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sheetId = searchParams.get('keyPages') || '1W6zD4eXSqCFW2iObVuNUyjj_hyS1aPi_tWe7Ce8dxWU';
    const topicParam = searchParams.get('titlePages') || 'all';
    const offsetParam = searchParams.get('offset') || '1';

    // Синхронізуємо стан з URL параметрами
    setTopic(topicParam);
    setCurrentPage(parseInt(offsetParam, 10));

    // Завантажуємо дані
    fetchData(sheetId, topicParam);
  }, [location.search]);

  const totalPages = Math.ceil(pageItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = pageItems.slice(startIndex, startIndex + itemsPerPage);

  const toggleExpanded = (id: string | number) => {
    const normalizedId = String(id);
    setExpandedId(expandedId === normalizedId ? null : normalizedId);
  };

  // Функції для роботи з чекбоксами
  const handleItemToggle = (itemId: string, checked: boolean) => {
    const newSelected = checked
      ? [...selectedItems, itemId]
      : selectedItems.filter(id => id !== itemId);

    setSelectedItems(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked
      ? visibleItems.map(item => String(item.id ?? visibleItems.indexOf(item)))
      : [];
    setSelectedItems(newSelected);
  };

  const isAllSelected = visibleItems.length > 0 && selectedItems.length === visibleItems.length;
  const isPartiallySelected =
    selectedItems.length > 0 && selectedItems.length < visibleItems.length;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header
          title={topic === 'all' ? 'Всі працівники' : topic}
          description={'Перегляд підвищення кваліфікації, формування клопотань'}
        />
        {loading ? (
          <p className="py-10 text-center text-gray-500">Завантаження...</p>
        ) : (
          <>
            <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
              <label>Педагогічний працівник:</label>
              <Select
                value={topic}
                onValueChange={value => {
                  console.log('Selected topic:', value);

                  // Оновлюємо URL з новими параметрами
                  const params = new URLSearchParams(location.search);
                  if (value && value !== 'all') {
                    params.set('titlePages', value);
                  } else {
                    params.delete('titlePages');
                  }
                  params.set('offset', '1'); // Скидаємо на першу сторінку в URL
                  setSelectedItems([]); // Скидаємо вибрані елементи
                  // Використовуємо navigate для оновлення URL
                  navigate(`${location.pathname}?${params.toString()}`, {
                    replace: true,
                  });
                }}
              >
                <SelectTrigger className="w-full md:w-96">
                  <SelectValue placeholder="Оберіть працівника" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Всі працівники</SelectItem>
                  {allTeachers.map(name => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
                {selectedItems.length > 0 && (
                  <Button
                    className="ml-4"
                    onClick={() => {
                      console.log('Forming request for selected items:', selectedItems);
                      getClopot(
                        Array.from(
                          new Set(pageItems.filter(item => selectedItems.includes(String(item.id))))
                        ) as DataObject[]
                      );
                    }}
                  >
                    Сформувати клопотання ({selectedItems.length})
                  </Button>
                )}
              </Select>
            </div>

            <TooltipProvider>
              <div className={'m-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">Вибір ({selectedItems.length})</TableHead>
                      {topic === 'all' && (
                        <TableHead className="min-w-[200px]">Працівник</TableHead>
                      )}

                      <TableHead className="min-w-[250px]">Назва курсів</TableHead>
                      <TableHead className="w-[100px]">Всього, інкл., підтр.</TableHead>
                      <TableHead className="w-[120px]">Тип документа</TableHead>
                      <TableHead className="min-w-[200px]">Номер документа</TableHead>
                      <TableHead className="w-[120px]">Дата видачі</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {visibleItems.map((item, index) => {
                      const itemId = item.id || String(index);
                      return (
                        <Tooltip key={item.id}>
                          <TooltipTrigger asChild>
                            <TableRow key={index}>
                              <TableCell>
                                <Checkbox
                                  checked={selectedItems.includes(String(itemId))}
                                  onCheckedChange={checked =>
                                    handleItemToggle(String(itemId), checked as boolean)
                                  }
                                  onClick={e => e.stopPropagation()}
                                />
                              </TableCell>
                              {topic === 'all' && (
                                <TableCell className="font-medium">
                                  {item['Працівник, який пройшов курсову підготовку']}
                                </TableCell>
                              )}

                              <TableCell>{item['Назва курсів, семінару, вебінару тощо']}</TableCell>
                              <TableCell className="text-center">
                                {item['Кількість годин']},{item['З них з інклюзії'] || '0'},
                                {item[
                                  'З них з надання психологічної підтримки учасникам освітнього процесу'
                                ] || '0'}
                              </TableCell>
                              <TableCell>
                                <Link
                                  to={item['Фотокопія сертифікату, свідоцтва тощо'].split(', ')[0]}
                                  className="hover:underline"
                                  target="_blank"
                                >
                                  {item['Тип документа']}
                                </Link>
                              </TableCell>
                              <TableCell>
                                {
                                  item[
                                    'Номер документа (якщо номера немає, вкажіть "бн" без лапок)'
                                  ]
                                }
                              </TableCell>
                              <TableCell>{item['Дата видачі документа']}</TableCell>
                            </TableRow>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-md p-4">
                            <div className="space-y-2 text-sm">
                              <div>
                                <strong>Час уведення:</strong> {item['Позначка часу']}
                              </div>
                              <div>
                                <strong>Працівник:</strong>{' '}
                                {item['Працівник, який пройшов курсову підготовку']}
                              </div>
                              <div>
                                <strong>Курс:</strong>{' '}
                                {item['Назва курсів, семінару, вебінару тощо']}
                              </div>
                              <div>
                                <strong>Загальна кількість годин:</strong> {item['Кількість годин']}
                              </div>

                              <div>
                                <strong>Документ:</strong> {item['Тип документа']} №
                                {
                                  item[
                                    'Номер документа (якщо номера немає, вкажіть "бн" без лапок)'
                                  ]
                                }
                              </div>
                              <div>
                                <strong>Дата видачі:</strong> {item['Дата видачі документа']}
                              </div>
                              <div>
                                <strong>Організація:</strong>{' '}
                                {
                                  item[
                                    'Назва організації чи платформи, на базі якої проходила підготовка, навчання'
                                  ]
                                }
                              </div>

                              <div className="flex items-center justify-between gap-1">
                                <div className="max-w-sm">
                                  <img
                                    src={convertUrl2(item['Фотокопія сертифікату, свідоцтва тощо'])}
                                    alt={item['Тип документа']}
                                    onError={e => {
                                      (e.currentTarget as HTMLImageElement).src =
                                        '/assets/images/no-image.png';
                                    }}
                                  />
                                </div>
                                <Button
                                  asChild
                                  className="flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"
                                >
                                  <Link
                                    to={item['Фотокопія сертифікату, свідоцтва тощо']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Download className="h-4 w-4" />
                                    Завантажити
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </TooltipProvider>
            <Paginator
              itemsPerPage={itemsPerPage}
              pageItems={pageItems}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Kursi;
