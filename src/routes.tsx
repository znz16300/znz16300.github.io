import { Route, Navigate } from 'react-router-dom';
import { OptionalAuthGuard } from '@/utils/authGuard';

// Імпорти сторінок
import Index from './pages/Index';
import News from './pages/News';
import Documents from './pages/Documents';
import NotFound from './pages/NotFound';
import Page from './pages/Page';
import Kursi from './pages/Kursi';
import Schedule from './pages/Schedule';
import AdminPanel from './pages/admin/adminPanel';
import EmailConfirmation from './pages/auth/emailConfirmation';
import Login from './pages/auth/login';
import Profile from './pages/auth/profile';
import Register from './pages/auth/register';
import UserDashboard from './pages/user/userDashboard';
import Logout from './pages/auth/logout';
import { TimetableParser } from './pages/timetable';
import { TimetableParser2 } from './pages/Schedule/TimetableParser';
import {
  MainMenu,
  SchedulePage,
  ScheduleLessons,
  ScheduleBells,
  ScheduleHolidays,
  AboutPage,
  EducationPage,
  NavigatorPage,
  TeachersPage,
  AchievementsPage,
  GamesPage,
  GalleryPage,
  NavigationPage,
  VseosvitaPage,
  NaurokPage,
  AllTeachersPage,
  BulingPage,
  TiyakPage,
  ProfilaktikaPage,
  ConflictsPage,
  GenderPage,
  InternetPage,
  KindnessPage,
  MentalPage,
  ParentsPage,
  PhonesPage,
  ServicePage,
  VpravyPage,
  PsyphoPage
} from './pages/Kiosk/kiosk_data';
import KioskGallery from './pages/Schedule/KioskGallery';
import TeacherAbsenceManager from './pages/Schedule/TeacherAbsenceManager';
import PZCreator from './pages/Schedule/PZCreator';
import { ZAMINI_TABLE } from './constants';
import ExternalRedirect from './pages/Kiosk/ExternalRedirect';
import { ImageViewer } from './pages/Kiosk/ImageViewer';
import { VideoViewer } from './pages/Kiosk/VideoViewer';
import { UniversalKiosk } from './pages/Kiosk/UniversalKiosk';
import { KioskData } from './pages/Kiosk/kiosk-types';

import kioskData from './pages/Kiosk/kulikivka-data.json';

const data: KioskData = kioskData as unknown as KioskData;

// ============================================
// КОНФІГУРАЦІЇ МАРШРУТІВ
// ============================================

// Редіректи на внутрішні сторінки
const internalRedirects = [
  { from: '/zakupivli', to: '/page?titlePages=Закупівлі&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/contracts', to: '/page?titlePages=Контакти&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/kiosk/announcements', to: '/page?titlePages=Оголошення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/kiosk/achievements', to: '/page?titlePages=Досягнення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/kiosk/navigation', to: '/page?titlePages=Навігація&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
];

// Редіректи на зовнішні URL
const externalRedirects = [
  { path: '/feedback', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header' },
  { path: '/kiosk/education/nmt', url: 'https://zno.osvita.ua/' },
  { path: '/kiosk/education/videos', url: 'https://www.youtube.com/@ukrainian-online-school' },
  { path: '/kiosk/games', url: 'https://igru.com.ua/' },
  { path: '/kiosk/feedback', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header' },
];

// Основні маршрути кіоску
const kioskMainRoutes = [
  { path: '/mainmenu', component: MainMenu },
  { path: '/kiosk', component: MainMenu },
  { path: '/kiosk/about', component: AboutPage },
  { path: '/kiosk/schedulepage', component: SchedulePage },
  { path: '/kiosk/schedule/lessons', component: ScheduleLessons },
  { path: '/kiosk/schedule/bells', component: ScheduleBells },
  { path: '/kiosk/schedule/holidays', component: ScheduleHolidays },
  { path: '/kiosk/education', component: EducationPage },
  { path: '/kiosk/navigator', component: NavigatorPage },
  { path: '/kiosk/teachers', component: TeachersPage },
  { path: '/kiosk/teachers/all', component: AllTeachersPage },
  { path: '/kiosk/achievements', component: AchievementsPage },
  { path: '/kiosk/games', component: GamesPage },
  { path: '/kiosk/gallery', component: KioskGallery },
  { path: '/kiosk/navigation', component: NavigationPage },
  { path: '/kiosk/vseosvita', component: VseosvitaPage },
  { path: '/kiosk/naurok', component: NaurokPage },
];

// Маршрути психологічної підтримки (меню)
const psychoMenuRoutes = [
  { path: '/kiosk/psypho', component: PsyphoPage },
  { path: '/kiosk/psypho/buling', component: BulingPage },
  { path: '/kiosk/psypho/tiyak', component: TiyakPage },
  { path: '/kiosk/psypho/tiyak/vpravy', component: VpravyPage },
  { path: '/kiosk/psypho/profilaktika', component: ProfilaktikaPage },
  { path: '/kiosk/psypho/phones', component: PhonesPage },
  { path: '/kiosk/psypho/mental', component: MentalPage },
  { path: '/kiosk/psypho/parents', component: ParentsPage },
  { path: '/kiosk/psypho/conflicts', component: ConflictsPage },
  { path: '/kiosk/psypho/gender', component: GenderPage },
  { path: '/kiosk/psypho/internet', component: InternetPage },
  { path: '/kiosk/psypho/kindness', component: KindnessPage },
];

// Зображення для психологічної підтримки
const psychoImageRoutes = [
  // Загальні
  { path: '/kiosk/psypho/kindness/rules', title: '10 правил доброти', image: '10-rules.jpg' },
  { path: '/kiosk/psypho/service', title: 'Соціально-психологічна служба', image: 'soc-psyph.png' },

  // Профілактика насильства
  { path: '/kiosk/psypho/profilaktika/domashnye', title: 'Домашнє насильство', image: 'home-violence.png' },
  { path: '/kiosk/psypho/profilaktika/pamiatka', title: 'Пам\'ятка для батьків', image: 'memo-for-parents.png' },
  { path: '/kiosk/psypho/profilaktika/porady-batkam', title: 'Поради батькам', image: 'advices.png' },

  // Безпечний інтернет
  { path: '/kiosk/psypho/internet/pravyla', title: 'Правила інтернет безпеки', image: 'pravyla.jpg' },
  { path: '/kiosk/psypho/internet/bezpechnyy', title: 'Безпечний інтернет', image: 'bezpechnyy.jpg' },
  { path: '/kiosk/psypho/internet/dlia-batkiv', title: 'Правила безпечного інтернету для батьків', image: 'dlia-batkiv.jpg' },
  { path: '/kiosk/psypho/internet/robota-v-merezhi', title: 'Правила безпечної роботи в мережі', image: 'robota-v-merezhi.jpg' },
  { path: '/kiosk/psypho/internet/dlia-ditey', title: 'Правила безпечного інтернету для дітей', image: 'dlia-ditey.jpg' },

  // Гендерна рівність
  { path: '/kiosk/psypho/gender/shcho-take', title: 'Що таке гендерна рівність', image: 'shcho-take.jpg' },
  { path: '/kiosk/psypho/gender/pryntsypy', title: 'Принципи гендерної рівності', image: 'pryntsypy.jpg' },

  // Конфлікти
  { path: '/kiosk/psypho/conflicts/shcho-take', title: 'Що таке конфлікт', image: 'conflict-shcho-take.jpg' },
  { path: '/kiosk/psypho/conflicts/typy', title: 'Типи конфліктів', image: 'typy.jpg' },
  { path: '/kiosk/psypho/conflicts/druzi', title: 'Конфлікти з друзями - як зберегти дружбу', image: 'druzi.jpg' },
  { path: '/kiosk/psypho/conflicts/sposoby', title: 'Способи вирішення конфліктів', image: 'sposoby.jpg' },

  // Корисне для батьків
  { path: '/kiosk/psypho/parents/praktychnyy', title: 'Практичний блок для батьків', image: 'praktychnyy.jpg' },
  { path: '/kiosk/psypho/parents/chomu-bulyty', title: 'Чому діти починають булити', image: 'chomu-bulyty.jpg' },
  { path: '/kiosk/psypho/parents/perevantazhenist', title: 'Чи не перевантажена ваша дитина', image: 'perevantazhenist.jpg' },
  { path: '/kiosk/psypho/parents/vplyv-simi', title: 'Вплив сім\'ї на профілактику булінгу', image: 'vplyv-simi.jpg' },
  { path: '/kiosk/psypho/parents/pershoklasnyk', title: 'Пам\'ятка для батьків першокласника', image: 'pershoklasnyk.jpg' },
  { path: '/kiosk/psypho/parents/pidlitky', title: 'Поради батькам підлітків', image: 'pidlitky.jpg' },
  { path: '/kiosk/psypho/parents/suitsyd', title: 'Профілактика суїциду', image: 'suitsyd.png' },
  { path: '/kiosk/psypho/parents/agresiia', title: 'Роль сім\'ї у формуванні агресії', image: 'agresiia.jpg' },
  { path: '/kiosk/psypho/parents/test', title: 'Тест. Чи не перевантажена дитина', image: 'test.jpg' },
  { path: '/kiosk/psypho/parents/pidtrymka', title: 'Поради щодо підтримки дитини', image: 'pidtrymka.jpg' },
  { path: '/kiosk/psypho/parents/piatyy-klas', title: 'Пам\'ятка для батьків п\'ятих класів', image: 'piatyy-klas.jpg' },

  // Ментальне здоров'я
  { path: '/kiosk/psypho/mental/zazemlennia', title: 'Техніки заземлення', image: 'zazemlennia.jpg' },
  { path: '/kiosk/psypho/mental/den', title: 'День ментального здоров\'я', image: 'den.png' },
  { path: '/kiosk/psypho/mental/pokrashchennia', title: 'Що я можу зробити для покращення', image: 'pokrashchennia.jpg' },
  { path: '/kiosk/psypho/mental/tryvozhist', title: 'Техніки для зняття тривожності', image: 'tryvozhist.jpg' },
  { path: '/kiosk/psypho/mental/rivnovaha', title: 'Як зберегти рівновагу під тиском', image: 'rivnovaha.jpg' },
  { path: '/kiosk/psypho/mental/stress', title: 'Техніки для подолання стресу', image: 'stress.png' },
  { path: '/kiosk/psypho/mental/info', title: 'Ментальне здоров\'я', image: 'info.png' },
  { path: '/kiosk/psypho/mental/pamiatka', title: 'Пам\'ятка для батьків', image: 'pamiatka.png' },
  { path: '/kiosk/psypho/mental/yak-pokrashchyty', title: 'Як покращити ментальне здоров\'я', image: 'yak-pokrashchyty.jpg' },

  // Номери телефонів
  { path: '/kiosk/psypho/phones/hotline-1', title: 'Безкоштовна психологічна допомога для українців', image: 'hotline-1.jpg' },
  { path: '/kiosk/psypho/phones/hotline-2', title: 'Гарячі лінії психологічної допомоги', image: 'hotline-2.jpg' },
  { path: '/kiosk/psypho/phones/contacts', title: 'Контакти служб підтримки', image: 'hotline-3.jpg' },

  // Ти як?
  { path: '/kiosk/psypho/tiyak/karta', title: 'Карта "Ти як"', image: 'karta.jpg' },
  { path: '/kiosk/psypho/tiyak/skazhy-chesno', title: 'Скажи чесно "Ти як"', image: 'skazhy-chesno.png' },
  { path: '/kiosk/psypho/tiyak/emotsii-1', title: 'Емоційний стан 1', image: 'emotsii-1.jpg' },
  { path: '/kiosk/psypho/tiyak/emotsii-2', title: 'Емоційний стан 2', image: 'emotsii-2.jpg' },
  { path: '/kiosk/psypho/tiyak/emotsii-3', title: 'Емоційний стан 3', image: 'emotsii-3.jpg' },

  // Булінг
  { path: '/kiosk/psypho/buling/yavyshche', title: 'Явище булінгу в шкільному середовищі', image: 'yavyshche.png' },
  { path: '/kiosk/psypho/buling/rekomendatsii-batkam', title: 'Рекомендації батькам', image: 'rekomendatsii-batkam.png' },
  { path: '/kiosk/psypho/buling/algorytm-pedahohiv', title: 'Алгоритм дій педагогічних працівників', image: 'algorytm-pedahohiv.jpg' },
  { path: '/kiosk/psypho/buling/porady-uchnyam', title: 'Поради учням як боротися з булінгом', image: 'porady-uchnyam.png' },
  { path: '/kiosk/psypho/buling/povidomyty', title: 'Повідомити про булінг', image: 'povidomyty.jpg' },
  { path: '/kiosk/psypho/buling/buling-info', title: 'Зупини булінг', image: 'buling-info.png' },
  { path: '/kiosk/psypho/buling/dopomohty-dytyni', title: 'Як допомогти дитині впоратися', image: 'dopomohty-dytyni.png' },
  { path: '/kiosk/psypho/buling/yak-reahuvaty', title: 'Як реагувати на цькування', image: 'yak-reahuvaty.jpg' },
  { path: '/kiosk/psypho/buling/buklet', title: 'Буклет. Булінг', image: 'buklet.jpg' },
  { path: '/kiosk/psypho/buling/porady-psykholoha', title: 'Поради психологічної служби', image: 'porady-psykholoha.png' },
];

// Відео для психологічної підтримки
const psychoVideoRoutes = [
  { path: '/kiosk/psypho/tiyak/vpravy/zlata', title: 'Скажи чесно, ти як_ Злата Огнєвіч', video: 'v1.mp4' },
  { path: '/kiosk/psypho/tiyak/vpravy/olha', title: 'Скажи чесно, ти як_ Ольга Бутко', video: 'v2.mp4' },
  { path: '/kiosk/psypho/tiyak/vpravy/solomiia', title: 'Скажи чесно, ти як_ Проста вправа для заспокоєння від Соломії Вітвіцької', video: 'v3.mp4' },
  { path: '/kiosk/psypho/tiyak/vpravy/roksolana', title: 'Скажи чесно, ти як_ Роксолана Сирота (ROXOLANA)', video: 'v4.mp4' },
  { path: '/kiosk/psypho/tiyak/vpravy/oleksandra', title: 'Щоб заспокоїтись у важку мить, забирайте прості вправи від Олександри Заріцької', video: 'v5.mp4' },
];

// ============================================
// РЕНДЕР МАРШРУТІВ
// ============================================

// Публічні маршрути
export const PublicRoutes = () => (
  <>
    <Route path="/" element={<Index />} />
    <Route path="/news" element={<News />} />
    <Route path="/page" element={<Page />} />

    {/* Редіректи на внутрішні сторінки */}
    {internalRedirects.map(({ from, to }) => (
      <Route key={from} path={from} element={<Navigate to={to} replace />} />
    ))}

    {/* Редіректи на зовнішні URL */}
    {externalRedirects.map(({ path, url }) => (
      <Route key={path} path={path} element={<ExternalRedirect url={url} />} />
    ))}

    <Route path="/kursi" element={<Kursi />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/documents" element={<Documents />} />
    <Route path="/timetable" element={<TimetableParser />} />
    <Route path="/schedule2" element={<TimetableParser2 />} />
    <Route path="/zamini" element={<TeacherAbsenceManager />} />
    <Route path="/pz" element={<PZCreator keyZamini={ZAMINI_TABLE} />} />
  </>
);

// Маршрути кіоску
export const KioskRoutes = () => (
  <>
    {/* Основні маршрути кіоску */}
    {kioskMainRoutes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}

    {/* Маршрути психологічної підтримки (меню) */}
    {psychoMenuRoutes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}

    {/* Зображення для психологічної підтримки */}
    {psychoImageRoutes.map(({ path, title, image }) => (
      <Route
        key={path}
        path={path}
        element={
          <ImageViewer
            title={title}
            imageUrl={`/assets/images/kiosk/${image}`}
            alt=""
          />
        }
      />
    ))}

    {/* Відео для психологічної підтримки */}
    {psychoVideoRoutes.map(({ path, title, video }) => (
      <Route
        key={path}
        path={path}
        element={
          <VideoViewer
            title={title}
            videoUrl={`/assets/videos/kiosk/${video}`}
            poster="/images/video-poster.jpg"
          />
        }
      />
    ))}
  </>
);

// Авторизаційні маршрути
export const AuthRoutes = () => (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/register" element={<Register />} />
    <Route path="/confirm-email/:token" element={<EmailConfirmation />} />
  </>
);

// Захищені маршрути
export const ProtectedRoutes = () => (
  <>
    <Route
      path="/profile"
      element={
        <OptionalAuthGuard requireAuth={true} redirectTo="/login">
          <Profile />
        </OptionalAuthGuard>
      }
    />
    <Route
      path="/dashboard"
      element={
        <OptionalAuthGuard requireAuth={true} redirectTo="/login">
          <UserDashboard />
        </OptionalAuthGuard>
      }
    />
    <Route
      path="/admin"
      element={
        <OptionalAuthGuard requireAuth={true} requireRole="admin" redirectTo="/login">
          <AdminPanel />
        </OptionalAuthGuard>
      }
    />
    <Route path="/" element={<Navigate to="/mainmenu" replace />} />

    {/* Головне меню */}
    <Route
      path="kiosk/gromada"
      element={<UniversalKiosk config={data.mainMenu} />}
    />

    {/* Історична довідка */}
    <Route
      path="kiosk/gromada/history"
      element={<UniversalKiosk config={data.history} />}
    />

    {/* Географія */}
    <Route
      path="kiosk/gromada/geography"
      element={<UniversalKiosk config={data.geography} />}
    />

    {/* Паспорт громади */}
    <Route
      path="kiosk/gromada/passport"
      element={<UniversalKiosk config={data.passport} />}
    />

    {/* Населені пункти */}
    <Route
      path="kiosk/gromada/settlements"
      element={<UniversalKiosk config={data.settlements} />}
    />

    {/* Освіта */}
    <Route
      path="kiosk/gromada/education"
      element={<UniversalKiosk config={data.education} />}
    />
    {/* Відомі земляки */}
    <Route
      path="/kiosk/gromada/famous"
      element={<UniversalKiosk config={data.famousPeople} />}
    />
    {/* Пам'ятки історії та архітектури */}
    <Route
      path="/kiosk/gromada/monuments"
      element={<UniversalKiosk config={data.monuments} />}
    />
    {/* Цікаві факти */}
    <Route
      path="/kiosk/facts"
      element={<UniversalKiosk config={data.interestingFacts} />}
    />
    <Route
      path="/kiosk/facts/ukraine"
      element={<UniversalKiosk config={data.factsUkraine} />}
    />
    <Route
      path="/kiosk/facts/water"
      element={<UniversalKiosk config={data.factsWater} />}
    />

    <Route
      path="/kiosk/facts/antarctica"
      element={<UniversalKiosk config={data.factsAntarctica} />}
    />

    <Route
      path="/kiosk/facts/world"
      element={<UniversalKiosk config={data.factsWorld} />}
    />

    <Route
      path="/kiosk/facts/physical"
      element={<UniversalKiosk config={data.factsPhysicalGeography} />}
    />
    <Route
      path="/kiosk/facts/geographical-records"
      element={<UniversalKiosk config={data.factsGeographyRecords} />}
    />


    {/* Культура */}
    <Route
      path="kiosk/gromada/culture"
      element={<UniversalKiosk config={data.culture} />}
    />

    {/* Охорона здоров'я */}
    <Route
      path="kiosk/gromada/healthcare"
      element={<UniversalKiosk config={data.healthcare} />}
    />

    {/* Державні органи */}
    <Route
      path="kiosk/gromada/authorities"
      element={<UniversalKiosk config={data.authorities} />}
    />
  </>
);

// 404 маршрут
export const NotFoundRoute = () => (
  <Route path="*" element={<NotFound />} />
);
