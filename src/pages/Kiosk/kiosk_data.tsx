/* eslint-disable react-refresh/only-export-components */

import { Kiosk } from "./kiosk";


export interface KioskButton {
  label: string;
  image?: string;
  link: string;
  color?: string;
  disabled?: boolean; // Новий параметр для неактивних кнопок
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
    { label: 'Про ліцей', image: '🏫', link: '/kiosk/about', color: 'blue' },
    { label: 'Куликівська громада', image: '🏘️', link: '/kiosk/gromada', color: 'orange'},
    { label: 'Навчання', image: '📚', link: '/kiosk/education', color: 'purple' },
    { label: 'Розклад', image: '🗓️', link: '/kiosk/schedulepage', color: 'green' },
    { label: 'Психологічна підтримка', image: '🤗 ', link: '/kiosk/psypho', color: 'teal' },
    { label: 'Наші вчителі', image: '🧑‍🏫', link: '/kiosk/teachers', color: 'orange' },
    { label: 'Досягнення', image: '🏆', link: '/kiosk/achievements', color: 'red', disabled: true }, // Неактивна
    { label: 'Фотоархів', image: '📸', link: '/kiosk/gallery', color: 'teal',}, // Неактивна
    { label: 'Ігри та тести', image: '🎮', link: '/kiosk/games', color: 'pink', disabled: true }, // Неактивна
    { label: 'Навігація', image: '🧭', link: '/kiosk/navigation', color: 'indigo', disabled: true }, // Неактивна
    { label: 'Оголошення', image: '🔔', link: '/kiosk/announcements', color: 'blue', disabled: true }, // Неактивна
    { label: 'Цікаві факти', image: '✨', link: '/kiosk/facts', color: 'yellow', disabled: false }, // Неактивна
  ]
};

// Про ліцей
export const aboutConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Про ліцей',
  buttons: [
    { label: 'Історія ліцею', image: '📜', link: '/kiosk/about/history', color: 'blue', disabled: true  },
    { label: 'Сайт ліцею', image: '🌐', link: '/', color: 'indigo'},
    { label: 'Віртуальний музей', image: '🏛️', link: '/kiosk/about/museum', color: 'purple', disabled: true },
    { label: 'Наші традиції', image: '🎊', link: '/kiosk/about/traditions', color: 'orange', disabled: true  },
    { label: 'Стіна пошани', image: '⭐', link: '/kiosk/about/honor', color: 'red', disabled: true  },
    { label: 'Директори', image: '👔', link: '/kiosk/about/directors', color: 'indigo' , disabled: true },
    { label: 'Випускники', image: '🎓', link: '/kiosk/about/graduates', color: 'green' , disabled: true },
    { label: 'Документи', image: '📋', link: '/kiosk/about/documents', color: 'teal', disabled: true  },
    { label: 'Правила прийому', image: '📝', link: '/kiosk/about/admission', color: 'pink', disabled: true  },
  ]
};

// Навчання
export const educationConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Навчання',
  buttons: [
    { label: 'Освітній навігатор', image: '🎯', link: '/kiosk/education/navigator', color: 'purple' , disabled: true },
    { label: 'Корисні сайти', image: '🌐', link: '/kiosk/education/websites', color: 'blue' , disabled: true },
    { label: 'Презентації вчителів', image: '📊', link: '/kiosk/education/presentations', color: 'green' , disabled: true },
    { label: 'Підготовка до НМТ', image: '📖', link: '/kiosk/education/nmt', color: 'orange' },
    { label: 'Міні-тести', image: '✅', link: '/kiosk/education/tests', color: 'red' , disabled: true },
    { label: 'Навчальні відео', image: '🎬', link: '/kiosk/education/videos', color: 'teal'  },
  ]
};

// Освітній навігатор
export const navigatorConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Освітній навігатор',
  buttons: [
    { label: 'Українська мова', image: '📝', link: '/kiosk/education/navigator/ukrainian', color: 'blue' , disabled: true },
    { label: 'Англійська мова', image: '🇬🇧', link: '/kiosk/education/navigator/english', color: 'red' , disabled: true },
    { label: 'Математика', image: '➗', link: '/kiosk/education/navigator/math', color: 'purple' , disabled: true },
    { label: 'Фізика', image: '⚛️', link: '/kiosk/education/navigator/physics', color: 'indigo' , disabled: true },
    { label: 'Хімія', image: '🧪', link: '/kiosk/education/navigator/chemistry', color: 'green' , disabled: true },
    { label: 'Біологія', image: '🧬', link: '/kiosk/education/navigator/biology', color: 'teal' , disabled: true },
    { label: 'Історія України', image: '🇺🇦', link: '/kiosk/education/navigator/history', color: 'orange' , disabled: true },
    { label: 'Географія', image: '🌍', link: '/kiosk/education/navigator/geography', color: 'blue' , disabled: true },
    { label: 'Інформатика', image: '💻', link: '/kiosk/education/navigator/informatics', color: 'purple' , disabled: true },
    { label: 'Література', image: '📚', link: '/kiosk/education/navigator/literature', color: 'pink' , disabled: true },
  ]
};

// Розклад
export const scheduleConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Розклад',
  buttons: [
    { label: 'Розклад уроків', image: '📅', link: '/kiosk/schedule/lessons', color: 'green' },
    { label: 'Розклад дзвінків', image: '🔔', link: '/kiosk/schedule/bells', color: 'blue' },
    { label: 'Чергові класи', image: '👥', link: '/kiosk/schedule/duty', color: 'orange' , disabled: true },
    { label: 'Позакласні заходи', image: '🎭', link: '/kiosk/schedule/events', color: 'purple', disabled: true  },
    { label: 'Графік канікул', image: '🏖️', link: '/kiosk/schedule/holidays', color: 'teal' },
  ]
};

// Вчителі
export const teachersConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Наші вчителі',
  buttons: [
    { label: 'Всі вчителі', image: '👨‍🏫', link: '/kiosk/teachers/all', color: 'blue' },
    { label: 'За предметами', image: '📚', link: '/kiosk/teachers/subjects', color: 'purple', disabled: true  },
    { label: 'Класні керівники', image: '👥', link: '/kiosk/teachers/class-heads', color: 'green', disabled: true  },
    { label: 'Адміністрація', image: '💼', link: '/kiosk/teachers/admin', color: 'orange', disabled: true  },
    { label: 'Ветерани праці', image: '🏅', link: '/kiosk/teachers/veterans', color: 'red', disabled: true  },
  ]
};

// Досягнення
export const achievementsConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Наші досягнення',
  buttons: [
    { label: 'Олімпіади', image: '🥇', link: '/kiosk/achievements/olympiads', color: 'red', disabled: true  },
    { label: 'Конкурси', image: '🎖️', link: '/kiosk/achievements/contests', color: 'orange', disabled: true  },
    { label: 'Спортивні перемоги', image: '⚽', link: '/kiosk/achievements/sports', color: 'green', disabled: true  },
    { label: 'Мистецтво', image: '🎨', link: '/kiosk/achievements/arts', color: 'purple' },
    { label: 'Наукові проекти', image: '🔬', link: '/kiosk/achievements/science', color: 'blue', disabled: true  },
    { label: 'Громадська діяльність', image: '🤝', link: '/kiosk/achievements/community', color: 'teal', disabled: true  },
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

// Психологічна підтримка
export const psyphoConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Психологічна підтримка',
  buttons: [
    { label: 'Що таке булінг', image: '🚫', link: '/kiosk/psypho/buling', color: 'blue' },
    { label: 'Ти як?', image: '💭', link: '/kiosk/psypho/tiyak', color: 'purple' },
    { label: 'Профілактика насильства', image: '🛡️', link: '/kiosk/psypho/profilaktika', color: 'green' },
    { label: 'Номери телефонів психологічної допомоги', image: '📞', link: '/kiosk/psypho/phones', color: 'orange' },
    { label: 'Ментальне здоров\'я', image: '🧠', link: '/kiosk/psypho/mental', color: 'red' },
    { label: 'Корисне для батьків', image: '👨‍👩‍👧‍👦', link: '/kiosk/psypho/parents', color: 'teal' },
    { label: 'Конфлікти. Вирішення конфліктів', image: '🤝', link: '/kiosk/psypho/conflicts', color: 'pink' },
    { label: 'Гендерна рівність', image: '⚖️', link: '/kiosk/psypho/gender', color: 'indigo' },
    { label: 'Безпечний інтернет', image: '🔒', link: '/kiosk/psypho/internet', color: 'blue' },
    { label: '10 правил доброти', image: '❤️', link: '/kiosk/psypho/kindness/rules', color: 'purple' },
    { label: 'Соціально-психологічна служба', image: '🏥', link: '/kiosk/psypho/service', color: 'green' }
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
// ПСИХОЛОГІЧНА ПІДТРИМКА - ВСІ ПІДМЕНЮ
// ============================================

// 1. Що таке булінг
export const bulingConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Що таке булінг',
  buttons: [
    { 
      label: 'Явище булінгу в шкільному середовищі', 
      image: '🏫', 
      link: '/kiosk/psypho/buling/yavyshche', 
      color: 'blue' 
    },
    { 
      label: 'Рекомендації батькам', 
      image: '👨‍👩‍👧', 
      link: '/kiosk/psypho/buling/rekomendatsii-batkam', 
      color: 'purple' 
    },
    { 
      label: 'Алгоритм дій педагогічних працівників', 
      image: '👨‍🏫', 
      link: '/kiosk/psypho/buling/algorytm-pedahohiv', 
      color: 'green' 
    },
    { 
      label: 'Поради учням як боротися з булінгом', 
      image: '🎓', 
      link: '/kiosk/psypho/buling/porady-uchnyam', 
      color: 'orange' 
    },
    // { 
    //   label: 'Повідомити про булінг', 
    //   image: '📢', 
    //   link: '/kiosk/psypho/buling/povidomyty', 
    //   color: 'red' 
    // },
    { 
      label: 'Зупини булінг', 
      image: '🚫', 
      link: '/kiosk/psypho/buling/buling-info', 
      color: 'teal' 
    },
    { 
      label: 'Як допомогти дитині впоратися', 
      image: '🤝', 
      link: '/kiosk/psypho/buling/dopomohty-dytyni', 
      color: 'indigo' 
    },
    { 
      label: 'Як реагувати на цькування', 
      image: '🛡️', 
      link: '/kiosk/psypho/buling/yak-reahuvaty', 
      color: 'pink' 
    },
    { 
      label: 'Буклет. Булінг', 
      image: '📄', 
      link: '/kiosk/psypho/buling/buklet', 
      color: 'blue' 
    },
    { 
      label: 'Поради психологічної служби', 
      image: '💙', 
      link: '/kiosk/psypho/buling/porady-psykholoha', 
      color: 'purple' 
    },
  ]
};

// 2. Ти як?
export const tiyakConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Ти як?',
  buttons: [
    { 
      label: 'Карта "Ти як"', 
      image: '🗺️', 
      link: '/kiosk/psypho/tiyak/karta', 
      color: 'blue' 
    },
    { 
      label: 'Вправи для заспокоєння', 
      image: '🧘', 
      link: '/kiosk/psypho/tiyak/vpravy', 
      color: 'green' 
    },
    { 
      label: 'Скажи чесно "Ти як"', 
      image: '💬', 
      link: '/kiosk/psypho/tiyak/skazhy-chesno', 
      color: 'purple' 
    },
    { 
      label: 'Емоційний стан 1', 
      image: '😩', 
      link: '/kiosk/psypho/tiyak/emotsii-1', 
      color: 'orange' 
    },
    { 
      label: 'Емоційний стан 2', 
      image: '🫠', 
      link: '/kiosk/psypho/tiyak/emotsii-2', 
      color: 'teal' 
    },
    { 
      label: 'Емоційний стан 3', 
      image: '😭', 
      link: '/kiosk/psypho/tiyak/emotsii-3', 
      color: 'pink' 
    },
  ]
};

// 2.1. Вправи для заспокоєння (вкладене меню)
export const vpravyConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Вправи для заспокоєння',
  buttons: [
    { 
      label: 'Вправа від Соломії Вітвіцької', 
      image: '🎬', 
      link: '/kiosk/psypho/tiyak/vpravy/solomiia', 
      color: 'purple' 
    },
    { 
      label: 'Вправа від Роксолани Сирота', 
      image: '🎬', 
      link: '/kiosk/psypho/tiyak/vpravy/roksolana', 
      color: 'blue' 
    },
    { 
      label: 'Вправа від Злати Огнєвіч', 
      image: '🎬', 
      link: '/kiosk/psypho/tiyak/vpravy/zlata', 
      color: 'pink' 
    },
    { 
      label: 'Вправа від Олександри Заріцької', 
      image: '🎬', 
      link: '/kiosk/psypho/tiyak/vpravy/oleksandra', 
      color: 'teal' 
    },
    { 
      label: 'Вправа від Ольги Бутко', 
      image: '🎬', 
      link: '/kiosk/psypho/tiyak/vpravy/olha', 
      color: 'orange' 
    },
  ]
};

// 3. Профілактика насильства
export const profilaktikaConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Профілактика насильства',
  buttons: [
    { 
      label: 'Домашнє насильство', 
      image: '🏠', 
      link: '/kiosk/psypho/profilaktika/domashnye', 
      color: 'red' 
    },
    { 
      label: 'Поради батькам', 
      image: '👨‍👩‍👧‍👦', 
      link: '/kiosk/psypho/profilaktika/porady-batkam', 
      color: 'purple' 
    },
    { 
      label: 'Пам\'ятка для батьків', 
      image: '📋', 
      link: '/kiosk/psypho/profilaktika/pamiatka', 
      color: 'blue' 
    },
  ]
};

// 4. Номери телефонів психологічної допомоги
export const phonesConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Номери психологічної допомоги',
  buttons: [
    { 
      label: 'Безконтовна психологічна допомога для українців', 
      image: '📞', 
      link: '/kiosk/psypho/phones/hotline-1', 
      color: 'red' 
    },
    { 
      label: 'Гарячі лінії психологічної допомоги', 
      image: '📞', 
      link: '/kiosk/psypho/phones/hotline-2', 
      color: 'orange' 
    },
    { 
      label: 'Контакти служб підтримки', 
      image: '☎️', 
      link: '/kiosk/psypho/phones/contacts', 
      color: 'blue' 
    },
  ]
};

// 5. Ментальне здоров'я
export const mentalConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Ментальне здоров\'я',
  buttons: [
    { 
      label: 'Техніки заземлення', 
      image: '🌍', 
      link: '/kiosk/psypho/mental/zazemlennia', 
      color: 'green' 
    },
    { 
      label: 'День ментального здоров\'я', 
      image: '🎗️', 
      link: '/kiosk/psypho/mental/den', 
      color: 'teal' 
    },
    { 
      label: 'Що я можу зробити для покращення', 
      image: '💡', 
      link: '/kiosk/psypho/mental/pokrashchennia', 
      color: 'blue' 
    },
    { 
      label: 'Техніки для зняття тривожності', 
      image: '😌', 
      link: '/kiosk/psypho/mental/tryvozhist', 
      color: 'purple' 
    },
    { 
      label: 'Як зберегти рівновагу під тиском', 
      image: '⚖️', 
      link: '/kiosk/psypho/mental/rivnovaha', 
      color: 'indigo' 
    },
    { 
      label: 'Техніки для подолання стресу', 
      image: '🧘', 
      link: '/kiosk/psypho/mental/stress', 
      color: 'pink' 
    },
    { 
      label: 'Ментальне здоров\'я', 
      image: '🧠', 
      link: '/kiosk/psypho/mental/info', 
      color: 'blue' 
    },
    { 
      label: 'Пам\'ятка для батьків', 
      image: '📋', 
      link: '/kiosk/psypho/mental/pamiatka', 
      color: 'orange' 
    },
    { 
      label: 'Як покращити ментальне здоров\'я', 
      image: '✨', 
      link: '/kiosk/psypho/mental/yak-pokrashchyty', 
      color: 'green' 
    },
  ]
};

// 6. Корисне для батьків
export const parentsConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Корисне для батьків',
  buttons: [
    { 
      label: 'Практичний блок для батьків', 
      image: '📚', 
      link: '/kiosk/psypho/parents/praktychnyy', 
      color: 'blue' 
    },
    { 
      label: 'Чому діти починають булити', 
      image: '❓', 
      link: '/kiosk/psypho/parents/chomu-bulyty', 
      color: 'red' 
    },
    // { 
    //   label: 'Чи не перевантажена ваша дитина', 
    //   image: '⚠️', 
    //   link: '/kiosk/psypho/parents/perevantazhenist', 
    //   color: 'orange' 
    // },
    { 
      label: 'Вплив сім\'ї на профілактику булінгу', 
      image: '👨‍👩‍👧‍👦', 
      link: '/kiosk/psypho/parents/vplyv-simi', 
      color: 'purple' 
    },
    { 
      label: 'Пам\'ятка для батьків першокласника', 
      image: '1️⃣', 
      link: '/kiosk/psypho/parents/pershoklasnyk', 
      color: 'green' 
    },
    { 
      label: 'Поради батькам підлітків', 
      image: '👦', 
      link: '/kiosk/psypho/parents/pidlitky', 
      color: 'teal' 
    },
    { 
      label: 'Профілактика суїциду', 
      image: '🆘', 
      link: '/kiosk/psypho/parents/suitsyd', 
      color: 'red' 
    },
    { 
      label: 'Роль сім\'ї у формуванні агресії', 
      image: '⚡', 
      link: '/kiosk/psypho/parents/agresiia', 
      color: 'orange' 
    },
    // { 
    //   label: 'Тест. Чи не перевантажена дитина', 
    //   image: '📝', 
    //   link: '/kiosk/psypho/parents/test', 
    //   color: 'blue' 
    // },
    { 
      label: 'Поради щодо підтримки дитини', 
      image: '🤗', 
      link: '/kiosk/psypho/parents/pidtrymka', 
      color: 'pink' 
    },
    { 
      label: 'Пам\'ятка для батьків п\'ятих класів', 
      image: '5️⃣', 
      link: '/kiosk/psypho/parents/piatyy-klas', 
      color: 'indigo' 
    },
  ]
};

// 7. Конфлікти. Вирішення конфліктів
export const conflictsConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Конфлікти. Вирішення',
  buttons: [
    { 
      label: 'Що таке конфлікт', 
      image: '❓', 
      link: '/kiosk/psypho/conflicts/shcho-take', 
      color: 'blue' 
    },
    { 
      label: 'Типи конфліктів', 
      image: '📊', 
      link: '/kiosk/psypho/conflicts/typy', 
      color: 'purple' 
    },
    { 
      label: 'Конфлікти з друзями - як зберегти дружбу', 
      image: '🤝', 
      link: '/kiosk/psypho/conflicts/druzi', 
      color: 'pink' 
    },
    { 
      label: 'Способи вирішення конфліктів', 
      image: '✅', 
      link: '/kiosk/psypho/conflicts/sposoby', 
      color: 'green' 
    },
  ]
};

// 8. Гендерна рівність
export const genderConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Гендерна рівність',
  buttons: [
    { 
      label: 'Що таке гендерна рівність', 
      image: '⚖️', 
      link: '/kiosk/psypho/gender/shcho-take', 
      color: 'purple' 
    },
    { 
      label: 'Принципи гендерної рівності', 
      image: '📋', 
      link: '/kiosk/psypho/gender/pryntsypy', 
      color: 'blue' 
    },
  ]
};

// 9. Безпечний інтернет
export const internetConfig: KioskPageConfig = {
  type: 'menu',
  title: 'Безпечний інтернет',
  buttons: [
    { 
      label: 'Правила інтернет безпеки', 
      image: '🔐', 
      link: '/kiosk/psypho/internet/pravyla', 
      color: 'blue' 
    },
    { 
      label: 'Безпечний інтернет', 
      image: '🌐', 
      link: '/kiosk/psypho/internet/bezpechnyy', 
      color: 'green' 
    },
    { 
      label: 'Правила безпечного інтернету для батьків', 
      image: '👨‍👩‍👧‍👦', 
      link: '/kiosk/psypho/internet/dlia-batkiv', 
      color: 'purple' 
    },
    { 
      label: 'Правила безпечної роботи в мережі', 
      image: '💻', 
      link: '/kiosk/psypho/internet/robota-v-merezhi', 
      color: 'teal' 
    },
    { 
      label: 'Правила безпечного інтернету для дітей', 
      image: '👶', 
      link: '/kiosk/psypho/internet/dlia-ditey', 
      color: 'orange' 
    },
  ]
};

// 10. 10 правил доброти (одна сторінка)
export const kindnessConfig: KioskPageConfig = {
  type: 'iframe',
  title: '10 правил доброти',
  url: '/kiosk/psypho/kindness/rules'
};

// 11. Соціально-психологічна служба (одна сторінка)
export const serviceConfig: KioskPageConfig = {
  type: 'iframe',
  title: 'Соціально-психологічна служба',
  url: '/kiosk/psypho/service/info'
};

// ============================================
// КОМПОНЕНТИ ДЛЯ РОУТЕРА
// ============================================

export const BulingPage: React.FC = () => <Kiosk config={bulingConfig} />;
export const TiyakPage: React.FC = () => <Kiosk config={tiyakConfig} />;
export const VpravyPage: React.FC = () => <Kiosk config={vpravyConfig} />;
export const ProfilaktikaPage: React.FC = () => <Kiosk config={profilaktikaConfig} />;
export const PhonesPage: React.FC = () => <Kiosk config={phonesConfig} />;
export const MentalPage: React.FC = () => <Kiosk config={mentalConfig} />;
export const ParentsPage: React.FC = () => <Kiosk config={parentsConfig} />;
export const ConflictsPage: React.FC = () => <Kiosk config={conflictsConfig} />;
export const GenderPage: React.FC = () => <Kiosk config={genderConfig} />;
export const InternetPage: React.FC = () => <Kiosk config={internetConfig} />;
export const KindnessPage: React.FC = () => <Kiosk config={kindnessConfig} />;
export const ServicePage: React.FC = () => <Kiosk config={serviceConfig} />;


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
export const PsyphoPage: React.FC = () => <Kiosk config={psyphoConfig} />;




// Приклади iframe сторінок
export const GooglePage: React.FC = () => <Kiosk config={googleConfig} />;
export const VseosvitaPage: React.FC = () => <Kiosk config={vseosvitaConfig} />;
export const NaurokPage: React.FC = () => <Kiosk config={naurokConfig} />;
export const AllTeachersPage: React.FC = () => <Kiosk config={allTeachersConfig} />;
export const ScheduleLessons: React.FC = () => <Kiosk config={scheduleLessonsConfig} />;
export const ScheduleBells: React.FC = () => <Kiosk config={scheduleBellsConfig} />;
export const ScheduleHolidays: React.FC = () => <Kiosk config={scheduleHolidaysConfig} />;



