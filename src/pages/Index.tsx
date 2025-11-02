import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Newspaper,
  FileText,
  Activity,
  Phone,
  Menu,
  X,
  GraduationCap,
  Users,
  Building,
  Award,
  Eye,
  ScanSearch,
  Search,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  MoreHorizontal,
  Mail,
  UserIcon,
  LogOutIcon,
  LogInIcon,
  MessageSquare,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { getMaterials } from '@/api/getMaterials';
import { MaterialItem } from '@/type/material';
import { Button } from '@/components/ui/button';
import fixKeyboardLayout from '@/lib/fixKeyboardLayout';
import { PAGE_TABLE_1, PAGE_TABLE_2 } from '@/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { User } from '@/type/auth';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigationItems = [
    // { title: "Головна", href: "/", icon: Home },
    { id: 1, title: 'Новини', href: '/news', icon: Newspaper },
    { id: 2, title: 'Документи', href: '/documents', icon: FileText },
    {
      id: 3,
      title: 'Діяльність',
      href: `/page?titlePages=Діяльність&keyPages=${PAGE_TABLE_1}`,
      icon: Activity,
    },
    {
      id: 4,
      title: 'Контакти',
      href: `/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    {
      id: 5,
      title: 'Сторінки',
      href: `/page?titlePages=Більше&keyPages=${PAGE_TABLE_2}`,
      icon: Phone,
    },
    {
      id: 6,
      title: 'Учням, батькам',
      href: `/page?titlePages=Учням,%20батькам&keyPages=${PAGE_TABLE_2}`,
      icon: Phone,
    },
    {
      id: 7,
      title: 'Курси',
      href: `/page?titlePages=Курси&keyPages=${PAGE_TABLE_2}`,
      icon: Phone,
    },
    {
      id: 7,
      title: 'Положення, порядки, інструкції',
      href: `/page?titlePages=Положення%20та%20порядки&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    {
      id: 7,
      title: 'Харчування',
      href: `/page?titlePages=Харчування&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    {
      id: 7,
      title: 'Закупівлі',
      href: `/page?titlePages=Закупівлі&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    {
      id: 8,
      title: 'Розклад уроків',
      href: '/schedule2',
      icon: Phone,
    },
    {
      id: 9,
      title: 'Зворотній зв’язок',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header',
      icon: MessageSquare,
    },
  ];

  const seachPopupClick = async () => {
    // отримуємо дані з API для пошуку

    setSearchValue('');
    // відкриваємо поповер для пошуку
    setIsSearchOpen(true);
  };

  const [products, setProducts] = useState<MaterialItem[]>([]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      const isMac = navigator.platform.includes('Mac');
      const isShortcut =
        (isMac && e.metaKey && e.key === 'f') || (!isMac && e.ctrlKey && e.key === 'f');

      if (isShortcut) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMaterials({ type: 'products', limit: 100 });
      if (result) {
        setProducts(result || []);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const authService = await import('../api/authService');
      setIsAuthenticated(authService.default.isAuthenticated());
    };
    checkAuth();
  }, []);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (isAuthenticated) {
        const authService = await import('../api/authService');
        const userProfile = await authService.default.getProfile();
        setUser(userProfile);
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  const infoBlocks = [
    {
      title: 'Вітаємо',
      description:
        'Куликівський ліцей - сучасний навчальний заклад, що забезпечує якісну освіту та всебічний розвиток особистості',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-blue-600',
      link: `/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`,
    },
    {
      title: 'Документація',
      description: 'Повний перелік установчих документів, положень та нормативних актів ліцею',
      icon: FileText,
      gradient: 'from-emerald-500 to-emerald-600',
      link: '/documents',
    },
    {
      title: 'Матеріально-технічна база',
      description: "Сучасне обладнання, комп'ютерні класи, лабораторії та спортивні споруди",
      icon: Building,
      gradient: 'from-purple-500 to-purple-600',
      link: `/page?titlePages=Матеріально-технічна%20база&keyPages=${PAGE_TABLE_2}`,
    },
    {
      title: 'Діяльність',
      description: 'Освітня, виховна та науково-методична діяльність нашого навчального закладу',
      icon: Activity,
      gradient: 'from-orange-500 to-orange-600',
      link: `/page?titlePages=Діяльність&keyPages=${PAGE_TABLE_1}`,
    },
    {
      title: 'Публічна інформація',
      description: 'Відкрита звітність, результати діяльності та публічні документи ліцею',
      icon: Eye,
      gradient: 'from-teal-500 to-teal-600',
      link: `/page?titlePages=Відкритість%20та%20прозорість&keyPages=${PAGE_TABLE_1}`,
    },
    {
      title: 'Більше',
      description: 'Додаткова інформація, корисні посилання та інші матеріали про наш ліцей',
      icon: MoreHorizontal,
      gradient: 'from-pink-500 to-pink-600',
      link: `/page?titlePages=Більше&keyPages=${PAGE_TABLE_2}`,
    },
  ];

  const handleSearch = (
    e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e) e.preventDefault();
    setIsSearchOpen(false);
    setSearchValue('');
    window.location.href = `/page?search=${encodeURIComponent(fixKeyboardLayout(searchValue))}`;
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const authSection = () => {
    {
      /* Auth section */
    }
    return (
      <div className="my-4">
        {isAuthenticated ? (
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2">
              <Link
                to="/profile"
                className="text-white-400 flex-row font-semibold hover:text-white"
                title="Особистий кабінет"
              >
                <UserIcon />
              </Link>
              <Link
                to="/profile"
                className="text-white-400 flex-row font-semibold hover:text-white"
                title="Особистий кабінет"
              >
                {user?.name || ''}
              </Link>
            </div>
            <Link to="/logout" className="text-white-400 font-semibold hover:text-white">
              <LogOutIcon />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Link
              to="/login"
              className="text-white-400 flex flex-row gap-2 font-semibold hover:text-white"
            >
              <LogInIcon />
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <p className="py-10 text-center text-gray-500">Завантаження...</p>
      ) : (
        <div className="min-h-screen bg-gray-50 bg-white dark:bg-gray-900">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white shadow-lg dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg">
                    <img src="./assets/icons/logo_black.svg" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-gray-400">
                      Куликівський ліцей
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-500">
                      Якісна освіта для майбутнього
                    </p>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden space-x-1 md:flex">
                  {navigationItems
                    .filter(i => i.id < 5)
                    .map(
                      item =>
                        item.href && (
                          <Link
                            key={item.title}
                            to={item.href}
                            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700"
                          >
                            <item.icon className="h-4 w-4" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        )
                    )}
                  <div className="flex gap-4 p-2" style={{ marginLeft: '16px' }}>
                    <input
                      type="text"
                      placeholder="Пошук..."
                      className="w-full flex-1 rounded border bg-white px-3 py-2 text-black focus:border-blue-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-900"
                      value={searchValue}
                      onChange={handleSearchInput}
                      onKeyUp={e => {
                        if (e.key === 'Enter') {
                          handleSearch();
                        }
                      }}
                    />

                    <button
                      onClick={handleSearch}
                      className="flex items-center justify-center transition-colors duration-200 hover:text-blue-600"
                    >
                      <Search className="h-5 w-5 stroke-gray-800 dark:stroke-gray-400" />
                      <span className="ml-2" />
                      {authSection()}
                    </button>
                  </div>
                </nav>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="animate-fade-in fixed w-full border-t bg-white py-4 dark:bg-gray-900 md:hidden">
                  <nav className="space-y-2">
                    {navigationItems
                      .filter(i => i.id < 7)
                      .map(item => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      ))}
                    <div className="flex gap-2 p-2" style={{ width: '95%' }}>
                      <input
                        type="text"
                        placeholder="Пошук..."
                        className="w-full flex-1 rounded border px-3 py-2 text-black focus:border-blue-400 focus:outline-none focus:ring dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-900"
                        value={searchValue}
                        onChange={handleSearchInput}
                        onKeyUp={e => {
                          if (e.key === 'Enter') {
                            handleSearch();
                          }
                        }}
                      />
                    </div>
                    {authSection()}
                  </nav>
                </div>
              )}
            </div>
          </header>

          {/* Hero Section */}
          <section className="dark:via-gray-750 relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 text-white dark:from-gray-700 dark:to-gray-800">
            <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="animate-fade-in mb-6 text-4xl font-bold dark:text-gray-400 md:text-6xl">
                Куликівський ліцей
              </h2>
              <p className="animate-fade-in mb-8 text-xl text-blue-100 dark:text-gray-500 md:text-2xl">
                Сучасна освіта для успішного майбутнього
              </p>
              <div className="animate-scale-in flex flex-col justify-center gap-4 sm:flex-row">
                <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
                  <button
                    style={{ boxSizing: 'border-box', minHeight: '52px' }}
                    className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:bg-gray-900 dark:text-gray-400"
                  >
                    Дізнатися більше
                  </button>
                </Link>
                <Link to={`/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`}>
                  <button
                    style={{ boxSizing: 'border-box', minHeight: '52px' }}
                    className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-700 dark:border-none dark:bg-gray-900 dark:text-gray-400"
                  >
                    Контакти
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* New School Showcase Section */}
          <section className="bg-white py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                {/* School Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/assets/images/school_summer.jpg"
                      // src="/assets/images/school.png"
                      alt="Куликівський ліцей"
                      className="h-96 w-full transform object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5" />
                        <span className="text-sm font-medium dark:text-gray-400">
                          вул. Шевченка, 4, Куликівка
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -right-6 rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <Award className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                          25+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-500">
                          Років досвіду
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-400">
                      Наш навчальний заклад
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                      Куликівський ліцей - це місце, де традиції поєднуються з інноваціями. Ми
                      пишаємося нашою історією та прагнемо до постійного розвитку.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to={`/page?titlePages=Учні&keyPages=${PAGE_TABLE_1}`}
                      className="cursor-pointer rounded-lg bg-blue-50 p-4 text-center transition-colors hover:bg-blue-100 dark:bg-gray-700"
                    >
                      <Users className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                      <div className="text-2xl font-bold text-green-600">750+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-500">Учнів</div>
                    </Link>
                    <Link
                      to={`/page?titlePages=Учительська&keyPages=${PAGE_TABLE_1}`}
                      className="cursor-pointer rounded-lg bg-green-50 p-4 text-center transition-colors hover:bg-green-100 dark:bg-gray-700"
                    >
                      <GraduationCap className="mx-auto mb-2 h-8 w-8 text-green-600" />
                      <div className="text-2xl font-bold text-green-600">80+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-500">Викладачів</div>
                    </Link>
                  </div>

                  {/* Interactive Highlights */}
                  <div className="space-y-3">
                    <Link
                      to={`/page?titlePages=Розклад%20дзвінків&keyPages=${PAGE_TABLE_1}`}
                      className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-300">
                          <Clock className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-400">
                            Режим роботи
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-500">
                            Пн-Пт: 8:00 - 17:00
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
                    </Link>

                    <Link
                      to="/schedule"
                      className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="dark: flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 bg-purple-300">
                          <Star className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-400">
                            Розклад уроків
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-500">
                            Доступний онлайн зі змінами
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
                    </Link>

                    <div className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-500">
                          <Star className="text- -600 h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-400">
                            Рейтинг успішності
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-500">
                            95% випускників вступають до ВНЗ
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600" />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-gray-600 dark:to-gray-700 dark:text-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-700"
                    >
                      <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
                        Дізнатися про ліцей детальніше
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Blocks */}
          <section className="bg-gray-50 py-16 dark:bg-gray-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-400 md:text-4xl">
                  Про наш ліцей
                </h3>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                  Ознайомтеся з основними напрямками діяльності та інформацією про Куликівський
                  ліцей
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {infoBlocks.map((block, index) => (
                  <div
                    key={block.title}
                    className="animate-fade-in group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-600"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${block.gradient}`}></div>
                    <div className="p-6 dark:bg-gray-600">
                      <div
                        className={`h-16 w-16 bg-gradient-to-br ${block.gradient} mb-4 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <block.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-400">
                        {block.title}
                      </h4>
                      <p className="mb-4 leading-relaxed text-gray-600">{block.description}</p>
                      <button className="group flex items-center space-x-2 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-gray-400">
                        <Link to={block.link} className="flex items-center space-x-2">
                          <span>Детальніше</span>
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Carousel Section */}
          <section className="mb-12 w-full overflow-x-hidden bg-white p-10 py-16 text-center dark:bg-gray-600">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-400">
              Навчальний простір
            </h3>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Навчальні кабінети, лабораторії та інші ресурси, які ми пропонуємо для забезпечення
              якісної освіти
            </p>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {products.map(product => (
                    <CarouselItem
                      key={`${product.id}-${product.name}`}
                      className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="transition-shadow hover:shadow-lg">
                          <CardContent className="p-4 dark:bg-gray-700 dark:text-gray-400">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="mb-4 h-48 w-full rounded-md object-cover"
                            />
                            <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                            <p className="text-xl font-bold text-primary">
                              {product.price}
                              {/* </button> */}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { number: '750+', label: 'Учнів' },
                  { number: '80+', label: 'Викладачів' },
                  { number: '25', label: 'Років досвіду' },
                  { number: '95%', label: 'Успішність' },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="animate-scale-in text-center"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="font-medium text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-blue-500 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 text-gray-100 text-white dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 dark:text-gray-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Куликівський ліцей</h3>
                  </div>
                  <p className="text-black-400">
                    Забезпечуємо якісну освіту та всебічний розвиток особистості кожного учня.
                  </p>
                  {authSection()}

                  <ThemeToggle />
                </div>

                <div>
                  <h4 className="mb-4 text-lg font-semibold">Швидкі посилання</h4>
                  <ul className="columns-2 space-y-2">
                    {navigationItems.slice(1).map(item => (
                      <li key={item.title}>
                        <Link
                          to={item.href}
                          className="text-white-400 transition-colors hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-lg font-semibold">Контакти</h4>
                  <div className="space-y-2 text-gray-200 dark:text-gray-400">
                    <p className="flex items-center gap-2">
                      <MapPin size={18} /> вул. Шевченка, 4, Куликівка
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={18} /> +38 (046) 432-12-08
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={18} /> +38 (046) 432-12-91
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={18} /> znz16300@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-white-500 mt-8 border-t border-gray-800 pt-8 text-center">
                <p>&copy; 2025 Куликівський ліцей. Всі права захищені.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
