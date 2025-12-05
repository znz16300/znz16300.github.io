/* eslint-disable react-refresh/only-export-components */

import { Kiosk } from "./kiosk";


export interface KioskButton {
  label: string;
  image?: string;
  link: string;
  color?: string;
}

export interface KioskPageConfig {
  type: 'menu' | 'iframe';
  title?: string;
  buttons?: KioskButton[];
  url?: string;
}

export interface KioskProps {
  config: KioskPageConfig;
}


// ============================================
// КОНФІГУРАЦІЇ СТОРІНОК
// ============================================

// Конфігурація для головного меню
export const mainMenuConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Головне меню',
  buttons: [
    { label: 'Про ліцей', image: '🏫', link: '/', color: 'blue' },
    { label: 'Навчання', image: '📚', link: '/kiosk/education', color: 'purple' },
    { label: 'Розклад', image: '🗓️', link: '/kiosk/schedulepage', color: 'green' },
    { label: 'Наші вчителі', image: '🧑‍🏫', link: '/kiosk/teachers', color: 'orange' },
    { label: 'Досягнення', image: '🏆', link: '/kiosk/achievements', color: 'red' },
    { label: 'Фотоархів', image: '📸', link: '/kiosk/gallery', color: 'teal' },
    { label: 'Ігри та тести', image: '🎮', link: '/kiosk/games', color: 'pink' },
    { label: 'Навігація', image: '🧭', link: '/kiosk/navigation', color: 'indigo' },
    { label: 'Оголошення', image: '🔔', link: '/kiosk/announcements', color: 'blue' },
    { label: 'Зворотний зв\'язок', image: '💬', link: '/feedback', color: 'purple' },
  ]
};

// Про ліцей
export const aboutConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Про ліцей',
  buttons: [
    { label: 'Історія ліцею', image: '📜', link: '/kiosk/about/history', color: 'blue' },
    { label: 'Віртуальний музей', image: '🏛️', link: '/kiosk/about/museum', color: 'purple' },
    { label: 'Наші традиції', image: '🎊', link: '/kiosk/about/traditions', color: 'orange' },
    { label: 'Стіна пошани', image: '⭐', link: '/kiosk/about/honor', color: 'red' },
    { label: 'Директори', image: '👔', link: '/kiosk/about/directors', color: 'indigo' },
    { label: 'Випускники', image: '🎓', link: '/kiosk/about/graduates', color: 'green' },
    { label: 'Документи', image: '📋', link: '/kiosk/about/documents', color: 'teal' },
    { label: 'Правила прийому', image: '📝', link: '/kiosk/about/admission', color: 'pink' },
  ]
};

// Навчання
export const educationConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Навчання',
  buttons: [
    { label: 'Освітній навігатор', image: '🎯', link: '/kiosk/education/navigator', color: 'purple' },
    { label: 'Корисні сайти', image: '🌐', link: '/kiosk/education/websites', color: 'blue' },
    { label: 'Презентації вчителів', image: '📊', link: '/kiosk/education/presentations', color: 'green' },
    { label: 'Підготовка до НМТ', image: '📖', link: '/kiosk/education/nmt', color: 'orange' },
    { label: 'Міні-тести', image: '✅', link: '/kiosk/education/tests', color: 'red' },
    { label: 'Навчальні відео', image: '🎬', link: '/kiosk/education/videos', color: 'teal' },
  ]
};

// Освітній навігатор
export const navigatorConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Освітній навігатор',
  buttons: [
    { label: 'Українська мова', image: '📝', link: '/kiosk/education/navigator/ukrainian', color: 'blue' },
    { label: 'Англійська мова', image: '🇬🇧', link: '/kiosk/education/navigator/english', color: 'red' },
    { label: 'Математика', image: '➗', link: '/kiosk/education/navigator/math', color: 'purple' },
    { label: 'Фізика', image: '⚛️', link: '/kiosk/education/navigator/physics', color: 'indigo' },
    { label: 'Хімія', image: '🧪', link: '/kiosk/education/navigator/chemistry', color: 'green' },
    { label: 'Біологія', image: '🧬', link: '/kiosk/education/navigator/biology', color: 'teal' },
    { label: 'Історія України', image: '🇺🇦', link: '/kiosk/education/navigator/history', color: 'orange' },
    { label: 'Географія', image: '🌍', link: '/kiosk/education/navigator/geography', color: 'blue' },
    { label: 'Інформатика', image: '💻', link: '/kiosk/education/navigator/informatics', color: 'purple' },
    { label: 'Література', image: '📚', link: '/kiosk/education/navigator/literature', color: 'pink' },
  ]
};

// Розклад
export const scheduleConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Розклад',
  buttons: [
    { label: 'Розклад уроків', image: '📅', link: '/kiosk/schedule/lessons', color: 'green' },
    { label: 'Розклад дзвінків', image: '🔔', link: '/kiosk/schedule/bells', color: 'blue' },
    { label: 'Чергові класи', image: '👥', link: '/kiosk/schedule/duty', color: 'orange' },
    { label: 'Позакласні заходи', image: '🎭', link: '/kiosk/schedule/events', color: 'purple' },
    { label: 'Графік канікул', image: '🏖️', link: '/kiosk/schedule/holidays', color: 'teal' },
  ]
};

// Вчителі
export const teachersConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Наші вчителі',
  buttons: [
    { label: 'Всі вчителі', image: '👨‍🏫', link: '/kiosk/teachers/all', color: 'blue' },
    { label: 'За предметами', image: '📚', link: '/kiosk/teachers/subjects', color: 'purple' },
    { label: 'Класні керівники', image: '👥', link: '/kiosk/teachers/class-heads', color: 'green' },
    { label: 'Адміністрація', image: '💼', link: '/kiosk/teachers/admin', color: 'orange' },
    { label: 'Ветерани праці', image: '🏅', link: '/kiosk/teachers/veterans', color: 'red' },
  ]
};

// Досягнення
export const achievementsConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Наші досягнення',
  buttons: [
    { label: 'Олімпіади', image: '🥇', link: '/kiosk/achievements/olympiads', color: 'red' },
    { label: 'Конкурси', image: '🎖️', link: '/kiosk/achievements/contests', color: 'orange' },
    { label: 'Спортивні перемоги', image: '⚽', link: '/kiosk/achievements/sports', color: 'green' },
    { label: 'Мистецтво', image: '🎨', link: '/kiosk/achievements/arts', color: 'purple' },
    { label: 'Наукові проекти', image: '🔬', link: '/kiosk/achievements/science', color: 'blue' },
    { label: 'Громадська діяльність', image: '🤝', link: '/kiosk/achievements/community', color: 'teal' },
  ]
};

// Ігри
export const gamesConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Ігри та тести',
  buttons: [
    { label: 'Квіз дня', image: '❓', link: '/kiosk/games/quiz', color: 'pink' },
    { label: 'Загадка тижня', image: '🧩', link: '/kiosk/games/riddle', color: 'purple' },
    { label: 'Цікаві факти', image: '💡', link: '/kiosk/games/facts', color: 'blue' },
    { label: 'Фізика навколо нас', image: '⚛️', link: '/kiosk/games/physics', color: 'indigo' },
    { label: 'Цікава мова', image: '📝', link: '/kiosk/games/language', color: 'orange' },
    { label: 'Історія України', image: '🇺🇦', link: '/kiosk/games/history', color: 'teal' },
    { label: 'Тест настрою', image: '😊', link: '/kiosk/games/mood', color: 'pink' },
    { label: 'Логічні задачі', image: '🧠', link: '/kiosk/games/logic', color: 'green' },
  ]
};

// Фотоархів
export const galleryConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Фотоархів',
  buttons: [
    { label: 'Шкільні свята', image: '🎉', link: '/kiosk/gallery/holidays', color: 'orange' },
    { label: 'Спортивні події', image: '🏃', link: '/kiosk/gallery/sports', color: 'green' },
    { label: 'Екскурсії', image: '🚌', link: '/kiosk/gallery/trips', color: 'blue' },
    { label: 'Випускні', image: '🎓', link: '/kiosk/gallery/graduation', color: 'purple' },
    { label: 'Конкурси', image: '🏆', link: '/kiosk/gallery/competitions', color: 'red' },
    { label: 'Благодійність', image: '❤️', link: '/kiosk/gallery/charity', color: 'pink' },
    { label: 'Шкільне життя', image: '📚', link: '/kiosk/gallery/school-life', color: 'teal' },
  ]
};

// Навігація
export const navigationConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Навігація ліцеєм',
  buttons: [
    { label: 'Карта 1 поверх', image: '1️⃣', link: '/kiosk/navigation/floor1', color: 'blue' },
    { label: 'Карта 2 поверх', image: '2️⃣', link: '/kiosk/navigation/floor2', color: 'purple' },
    { label: 'Карта 3 поверх', image: '3️⃣', link: '/kiosk/navigation/floor3', color: 'green' },
    { label: 'Спортзал', image: '🏀', link: '/kiosk/navigation/gym', color: 'orange' },
    { label: 'Їдальня', image: '🍽️', link: '/kiosk/navigation/cafeteria', color: 'red' },
    { label: 'Бібліотека', image: '📚', link: '/kiosk/navigation/library', color: 'teal' },
    { label: 'Актова зала', image: '🎭', link: '/kiosk/navigation/hall', color: 'pink' },
  ]
};

// ============================================
// ПРИКЛАДИ IFRAME СТОРІНОК
// ============================================

// Google
export const googleConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Google Пошук',
  url: 'https://www.google.com'
};

// Всеосвіта
export const vseosvitaConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Всеосвіта',
  url: 'https://vseosvita.ua'
};

// На урок
export const naurokConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'На Урок',
  url: 'https://naurok.com.ua'
};
// Всі вчителі
export const allTeachersConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Всі вчителі',
  url: '/page?titlePages=Учительська&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI'
};
// Розклад уроків
export const scheduleLessonsConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Розклад уроків',
  url: '/schedule2'
};
// Розклад дзвінків
export const scheduleBellsConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Розклад дзвінків',
  url: '/page?titlePages=Розклад%20дзвінків&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI'
};

// Розклад канікул
export const scheduleHolidaysConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Графік канікул',
  url: '/page?titlePages=Графік%20канікул&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI'
};


// ============================================
// КОМПОНЕНТИ ДЛЯ РОУТЕРА
// ============================================

export const MainMenu: React.FC = () => <Kiosk config={mainMenuConfig} />;
export const AboutPage: React.FC = () => <Kiosk config={aboutConfig} />;
export const EducationPage: React.FC = () => <Kiosk config={educationConfig} />;
export const NavigatorPage: React.FC = () => <Kiosk config={navigatorConfig} />;
export const SchedulePage: React.FC = () => <Kiosk config={scheduleConfig} />;
export const TeachersPage: React.FC = () => <Kiosk config={teachersConfig} />;
export const AchievementsPage: React.FC = () => <Kiosk config={achievementsConfig} />;
export const GamesPage: React.FC = () => <Kiosk config={gamesConfig} />;
export const GalleryPage: React.FC = () => <Kiosk config={galleryConfig} />;
export const NavigationPage: React.FC = () => <Kiosk config={navigationConfig} />;

// Приклади iframe сторінок
export const GooglePage: React.FC = () => <Kiosk config={googleConfig} />;
export const VseosvitaPage: React.FC = () => <Kiosk config={vseosvitaConfig} />;
export const NaurokPage: React.FC = () => <Kiosk config={naurokConfig} />;
export const AllTeachersPage: React.FC = () => <Kiosk config={allTeachersConfig} />;
export const ScheduleLessons: React.FC = () => <Kiosk config={scheduleLessonsConfig} />;
export const ScheduleBells: React.FC = () => <Kiosk config={scheduleBellsConfig} />;
export const ScheduleHolidays: React.FC = () => <Kiosk config={scheduleHolidaysConfig} />;



