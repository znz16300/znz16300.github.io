import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { getMaterials } from "@/api/getMaterials";
import { MaterialItem } from "@/type/material";
import { Button } from "@/components/ui/button";
import fixKeyboardLayout from "@/lib/fixKeyboardLayout";
import { PAGE_TABLE_1, PAGE_TABLE_2 } from "@/constants";

const Index = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigationItems = [
    // { title: "Головна", href: "/", icon: Home },
    { id: 1, title: "Новини", href: "/news", icon: Newspaper },
    { id: 2,title: "Документи", href: "/documents", icon: FileText },
    {
      id: 3,title: "Діяльність",
      href: `/page?titlePages=Діяльність&keyPages=${PAGE_TABLE_1}`,
      icon: Activity,
    },
    {
      id: 4,title: "Контакти",
      href: `/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    {
      id: 5,title: "Сторінки",
      href: `/page?titlePages=Більше>&keyPages=${PAGE_TABLE_2}`,
      icon: Phone,
    },
    {
      id: 6,title: "Учням, батькам",
      href:  `/page?titlePages=Учням%20та%20батькам&keyPages=${PAGE_TABLE_2}`,
      icon: Phone,
    },
    {
      id: 7,title: "Курси",
      href: `/page?titlePages=Курси&keyPages=${PAGE_TABLE_2}`,
      icon: Phone,
    },
    {
      id: 7,title: "Положення, порядки, інструкції",
      href: `/page?titlePages=Положення%20та%20порядки&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    {
      id: 7,title: "Харчування",
      href: `/page?titlePages=Харчування&keyPages=${PAGE_TABLE_1}`,
      icon: Phone,
    },
    // {
    //   id: 5,title: "",
    //   icon: Search,
    //   seachPopup: async () => {
    //     // отримуємо дані з API для пошуку

    //     id: 6,setSearchValue("");
    //     // відкриваємо поповер для пошуку
    //     setIsSearchOpen(true);
    //   },
    // },
  ];

  const seachPopupClick = async () => {
    // отримуємо дані з API для пошуку

    setSearchValue("");
    // відкриваємо поповер для пошуку
    setIsSearchOpen(true);
  };

  const [products, setProducts] = useState<MaterialItem[]>([]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      const isMac = navigator.platform.includes("Mac");
      const isShortcut =
        (isMac && e.metaKey && e.key === "f") ||
        (!isMac && e.ctrlKey && e.key === "f");

      if (isShortcut) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMaterials({ type: "products", limit: 100 });
      if (result) {
        setProducts(result || []);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const infoBlocks = [
    {
      title: "Вітаємо",
      description:
        "Куликівський ліцей - сучасний навчальний заклад, що забезпечує якісну освіту та всебічний розвиток особистості",
      icon: GraduationCap,
      gradient: "from-blue-500 to-blue-600",
      link: `/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`,
    },
    {
      title: "Документація",
      description:
        "Повний перелік установчих документів, положень та нормативних актів ліцею",
      icon: FileText,
      gradient: "from-emerald-500 to-emerald-600",
      link: "/documents",
    },
    {
      title: "Матеріально-технічна база",
      description:
        "Сучасне обладнання, комп'ютерні класи, лабораторії та спортивні споруди",
      icon: Building,
      gradient: "from-purple-500 to-purple-600",
      link: `/page?titlePages=Матеріально-технічна%20база&keyPages=${PAGE_TABLE_2}`,
    },
    {
      title: "Діяльність",
      description:
        "Освітня, виховна та науково-методична діяльність нашого навчального закладу",
      icon: Activity,
      gradient: "from-orange-500 to-orange-600",
      link: `/page?titlePages=Діяльність&keyPages=${PAGE_TABLE_1}`,
    },
    {
      title: "Публічна інформація",
      description:
        "Відкрита звітність, результати діяльності та публічні документи ліцею",
      icon: Eye,
      gradient: "from-teal-500 to-teal-600",
      link: `/page?titlePages=Відкритість%20та%20прозорість&keyPages=${PAGE_TABLE_1}`,
    },
    {
      title: "Більше",
      description:
        "Додаткова інформація, корисні посилання та інші матеріали про наш ліцей",
      icon: MoreHorizontal,
      gradient: "from-pink-500 to-pink-600",
      link: `/page?titlePages=Більше&keyPages=${PAGE_TABLE_2}`,
    },
  ];

  const handleSearch = (
    e?:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e) e.preventDefault();
    setIsSearchOpen(false);
    setSearchValue("");
    // Зберігаємо результати пошуку в стейті та переходимо на /page через навігацію з параметрами
    window.location.href = `/page?search=${encodeURIComponent(fixKeyboardLayout(searchValue))}`;
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      {loading ? (
        <p className="text-center py-10 text-gray-500">Завантаження...</p>
      ) : (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="./assets/icons/logo_black.svg" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">
                      Куликівський ліцей
                    </h1>
                    <p className="text-sm text-gray-600">
                      Якісна освіта для майбутнього
                    </p>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-1">
                  {navigationItems.filter(i => i.id < 5).map(
                    (item) =>
                      item.href && (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      ),
                  )}
                    <div className="flex gap-4 p-2" style={{ marginLeft: "16px" }}>
                    <input
                      type="text"
                      placeholder="Пошук..."
                      className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 text-black w-full"
                      value={searchValue}
                      onChange={handleSearchInput}
                      onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                      }}
                      autoFocus
                    />

                    <button
                      onClick={handleSearch}
                      className="flex items-center justify-center 
                  hover:text-blue-600 transition-colors duration-200 
                  "
                    >
                      <Search className="w-5 h-5" />
                      <span className="ml-2" />
                    </button>
                    </div>
                </nav>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden fixed bg-white  py-4 border-t animate-fade-in w-full">
                  <nav className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-blue-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    ))}
                    <div className="flex gap-2 p-2" style={{ width: "95%" }}>
                      <input
                        type="text"
                        placeholder="Пошук..."
                        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 text-black w-full"
                        value={searchValue}
                        onChange={handleSearchInput}
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleSearch();
                          }
                        }}

                      />
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
            {/* панель пошуку */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Куликівський ліцей
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
                Сучасна освіта для успішного майбутнього
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
                  <button
                    style={{ boxSizing: "border-box", minHeight: "52px" }}
                    className="bg-white text-blue-700 px-8 py-3 rounded-lg 
                font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Дізнатися більше
                  </button>
                </Link>
                <Link to={`/page?titlePages=Контакти&keyPages=${PAGE_TABLE_1}`}>
                  <button
                    style={{ boxSizing: "border-box", minHeight: "52px" }}
                    className="border-2 border-white text-white px-8 py-3 
                  rounded-lg font-semibold hover:bg-white hover:text-blue-700 
                  transition-all duration-300 hover:scale-105"
                  >
                    Контакти
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* New School Showcase Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* School Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/assets/images/school_summer.jpg"
                      // src="/assets/images/school.png"
                      alt="Куликівський ліцей"
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          вул. Шевченка, 4, Куликівка
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          25+
                        </div>
                        <div className="text-sm text-gray-600">
                          Років досвіду
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Наш навчальний заклад
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Куликівський ліцей - це місце, де традиції поєднуються з
                      інноваціями. Ми пишаємося нашою історією та прагнемо до
                      постійного розвитку.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to={`/page?titlePages=Учні&keyPages=${PAGE_TABLE_1}`}
                      className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">
                        750+
                      </div>
                      <div className="text-sm text-gray-600">Учнів</div>
                    </Link>
                    <Link
                      to={`/page?titlePages=Учительська&keyPages=${PAGE_TABLE_1}`}
                      className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors cursor-pointer"
                    >
                      <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">
                        80+
                      </div>
                      <div className="text-sm text-gray-600">Викладачів</div>
                    </Link>
                  </div>

                  {/* Interactive Highlights */}
                  <div className="space-y-3">
                    <Link
                      to={`/page?titlePages=Розклад%20дзвінків&keyPages=${PAGE_TABLE_1}`}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Режим роботи
                          </div>
                          <div className="text-sm text-gray-600">
                            Пн-Пт: 8:00 - 17:00
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </Link>

                    <Link
                      to="/schedule"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Star className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Розклад уроків
                          </div>
                          <div className="text-sm text-gray-600">
                            Доступний онлайн зі змінами
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </Link>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Star className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Рейтинг успішності
                          </div>
                          <div className="text-sm text-gray-600">
                            95% випускників вступають до ВНЗ
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link to={`/page?titlePages=Про%20ліцей&keyPages=${PAGE_TABLE_2}`}>
                        Дізнатися про ліцей детальніше
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Blocks */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Про наш ліцей
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ознайомтеся з основними напрямками діяльності та інформацією
                  про Куликівський ліцей
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {infoBlocks.map((block, index) => (
                  <div
                    key={block.title}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`h-2 bg-gradient-to-r ${block.gradient}`}
                    ></div>
                    <div className="p-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${block.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <block.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {block.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {block.description}
                      </p>
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center space-x-2 group">
                        <Link
                          to={block.link}
                          className="flex items-center space-x-2"
                        >
                          <span>Детальніше</span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Carousel Section */}
          <section className="text-center py-16 mb-12 overflow-x-hidden w-full p-10 bg-white">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Навчальний простір
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Навчальні кабінети, лабораторії та інші ресурси, які ми пропонуємо
              для забезпечення якісної освіти
            </p>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {products.map((product) => (
                    <CarouselItem
                      key={`${product.id}-${product.name}`}
                      className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="font-semibold text-lg mb-2">
                              {product.name}
                            </h3>
                            <p className="text-xl font-bold text-primary">
                              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105"> */}
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
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "750+", label: "Учнів" },
                  { number: "80+", label: "Викладачів" },
                  { number: "25", label: "Років досвіду" },
                  { number: "95%", label: "Успішність" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Куликівський ліцей</h3>
                  </div>
                  <p className="text-gray-400">
                    Забезпечуємо якісну освіту та всебічний розвиток особистості
                    кожного учня.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Швидкі посилання
                  </h4>
                  <ul className="space-y-2 flex flex-col flex-wrap">
                    {navigationItems.slice(1).map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Контакти</h4>
                  <div className="space-y-2 text-gray-400">
                    <p>📍 вул. Шевченка, 4, Куликівка</p>
                    <p>📞 +38 (046) 432-12-08</p>
                    <p>📞 +38 (046) 432-12-91</p>
                    <p>✉️ znz16300@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
