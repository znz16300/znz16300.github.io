// ============================================================
//  МАРШРУТИ САЙТУ
//  Кожна сторінка підвантажується окремим файлом (React.lazy), тому
//  відвідувач новин не завантажує код розкладу, кіоску чи ігор.
// ============================================================
import { Fragment, Suspense, lazy, type ComponentType } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { OptionalAuthGuard } from '@/utils/authGuard';
import { PageLoader } from '@/components/common/PageLoader';
import { ZAMINI_TABLE } from './constants';
import { funSections } from './fun/sections';
import psychoMedia from './pages/Kiosk/psycho-media.json';

/** lazy() для іменованого експорту: lazyNamed(() => import('./x'), 'Foo') */
function lazyNamed<M extends Record<string, unknown>, K extends keyof M>(loader: () => Promise<M>, name: K) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- пропси перевіряються в місці використання
  return lazy(() => loader().then((m) => ({ default: m[name] as ComponentType<any> })));
}

// ---------- Сторінки сайту ----------
const Index = lazy(() => import('./pages/Index/Index'));
const News = lazy(() => import('./pages/News/News'));
const Announce = lazy(() => import('./pages/Announce/Announce'));
const Page = lazy(() => import('./pages/Page'));
const Documents = lazy(() => import('./pages/Documents'));
const Kursi = lazy(() => import('./pages/Kursi'));
const Schedule = lazy(() => import('./pages/Schedule'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TimetableParser = lazyNamed(() => import('./pages/timetable'), 'TimetableParser');
const TimetableParser2 = lazyNamed(() => import('./pages/Schedule/TimetableParser'), 'TimetableParser2');
const TeacherAbsenceManager = lazy(() => import('./pages/Schedule/TeacherAbsenceManager'));
const PZCreator = lazy(() => import('./pages/Schedule/PZCreator'));

// ---------- Авторизація ----------
const Login = lazy(() => import('./pages/auth/login'));
const Logout = lazy(() => import('./pages/auth/logout'));
const Register = lazy(() => import('./pages/auth/register'));
const EmailConfirmation = lazy(() => import('./pages/auth/emailConfirmation'));
const Profile = lazy(() => import('./pages/auth/profile'));
const UserDashboard = lazy(() => import('./pages/user/userDashboard'));
const AdminPanel = lazy(() => import('./pages/admin/adminPanel'));

// ---------- Кіоск ----------
const loadKioskData = () => import('./pages/Kiosk/kiosk_data');
type KioskPageName = Exclude<keyof Awaited<ReturnType<typeof loadKioskData>>, `${string}Config` | 'default'>;
const kioskPages = new Map<string, ComponentType>();
const kioskPage = (name: KioskPageName) => {
  if (!kioskPages.has(name)) kioskPages.set(name, lazyNamed(loadKioskData, name));
  return kioskPages.get(name)!;
};
const KioskGallery = lazy(() => import('./pages/Kiosk/KioskGallery'));
const ImageViewer = lazyNamed(() => import('./pages/Kiosk/ImageViewer'), 'ImageViewer');
const VideoViewer = lazyNamed(() => import('./pages/Kiosk/VideoViewer'), 'VideoViewer');
const AlbumViewer = lazy(() => import('./pages/Kiosk/AlbumViewer'));
const ExternalRedirect = lazy(() => import('./pages/Kiosk/ExternalRedirect'));
const GromadaKiosk = lazy(() => import('./pages/Kiosk/GromadaKiosk'));
const GamesMenuPage = lazyNamed(() => import('./games'), 'GamesMenuPage');
const GamePage = lazyNamed(() => import('./games'), 'GamePage');
const PhysicsHubPage = lazyNamed(() => import('./physics'), 'PhysicsHubPage');
const PhysicsPage = lazyNamed(() => import('./physics'), 'PhysicsPage');
const FunHubPage = lazyNamed(() => import('./fun/FunHubPage'), 'FunHubPage');
const FunPage = lazyNamed(() => import('./fun/FunPage'), 'FunPage');

// Сторінка порівняння палітр — лише в dev (або якщо зібрати з VITE_THEME_PREVIEW=true)
const ThemePreviewPage =
  import.meta.env.DEV || import.meta.env.VITE_THEME_PREVIEW === 'true'
    ? lazy(() => import('./theme/ThemePreviewPage'))
    : null;

// ============================================
// КОНФІГУРАЦІЇ МАРШРУТІВ
// ============================================

const internalRedirects = [
  { from: '/zakupivli', to: '/page?titlePages=Закупівлі&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/contracts', to: '/page?titlePages=Контакти&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/kiosk/announcements', to: '/page?titlePages=Оголошення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/kiosk/achievements', to: '/page?titlePages=Досягнення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
  { from: '/kiosk/navigation', to: '/page?titlePages=Навігація&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI' },
];

const externalRedirects = [
  { path: '/feedback', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header' },
  { path: '/kiosk/education/nmt', url: 'https://zno.osvita.ua/' },
  { path: '/kiosk/education/videos', url: 'https://www.youtube.com/@ukrainian-online-school' },
  { path: '/kiosk/feedback', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header' },
];

const kioskMainRoutes: { path: string; page: KioskPageName }[] = [
  { path: '/mainmenu', page: 'MainMenu' },
  { path: '/kiosk', page: 'MainMenu' },
  { path: '/kiosk/about', page: 'AboutPage' },
  { path: '/kiosk/schedulepage', page: 'SchedulePage' },
  { path: '/kiosk/schedule/lessons', page: 'ScheduleLessons' },
  { path: '/kiosk/schedule/bells', page: 'ScheduleBells' },
  { path: '/kiosk/schedule/holidays', page: 'ScheduleHolidays' },
  { path: '/kiosk/education', page: 'EducationPage' },
  { path: '/kiosk/navigator', page: 'NavigatorPage' },
  { path: '/kiosk/teachers', page: 'TeachersPage' },
  { path: '/kiosk/teachers/all', page: 'AllTeachersPage' },
  { path: '/kiosk/achievements', page: 'AchievementsPage' },
  { path: '/kiosk/games', page: 'GamesPage' },
  { path: '/kiosk/navigation', page: 'NavigationPage' },
  { path: '/kiosk/vseosvita', page: 'VseosvitaPage' },
  { path: '/kiosk/naurok', page: 'NaurokPage' },
];

const psychoMenuRoutes: { path: string; page: KioskPageName }[] = [
  { path: '/kiosk/psypho', page: 'PsyphoPage' },
  { path: '/kiosk/psypho/buling', page: 'BulingPage' },
  { path: '/kiosk/psypho/tiyak', page: 'TiyakPage' },
  { path: '/kiosk/psypho/tiyak/vpravy', page: 'VpravyPage' },
  { path: '/kiosk/psypho/profilaktika', page: 'ProfilaktikaPage' },
  { path: '/kiosk/psypho/phones', page: 'PhonesPage' },
  { path: '/kiosk/psypho/mental', page: 'MentalPage' },
  { path: '/kiosk/psypho/parents', page: 'ParentsPage' },
  { path: '/kiosk/psypho/conflicts', page: 'ConflictsPage' },
  { path: '/kiosk/psypho/gender', page: 'GenderPage' },
  { path: '/kiosk/psypho/internet', page: 'InternetPage' },
  { path: '/kiosk/psypho/kindness', page: 'KindnessPage' },
];

// Сторінки «Куликівська громада» / «Цікаві факти»: path → ключ у kulikivka-data.json
const gromadaRoutes: { path: string; section: string }[] = [
  { path: '/kiosk/gromada', section: 'mainMenu' },
  { path: '/kiosk/gromada/history', section: 'history' },
  { path: '/kiosk/gromada/geography', section: 'geography' },
  { path: '/kiosk/gromada/passport', section: 'passport' },
  { path: '/kiosk/gromada/settlements', section: 'settlements' },
  { path: '/kiosk/gromada/education', section: 'education' },
  { path: '/kiosk/gromada/famous', section: 'famousPeople' },
  { path: '/kiosk/gromada/monuments', section: 'monuments' },
  { path: '/kiosk/gromada/culture', section: 'culture' },
  { path: '/kiosk/gromada/healthcare', section: 'healthcare' },
  { path: '/kiosk/gromada/authorities', section: 'authorities' },
  { path: '/kiosk/facts', section: 'interestingFacts' },
  { path: '/kiosk/facts/ukraine', section: 'factsUkraine' },
  { path: '/kiosk/facts/water', section: 'factsWater' },
  { path: '/kiosk/facts/antarctica', section: 'factsAntarctica' },
  { path: '/kiosk/facts/world', section: 'factsWorld' },
  { path: '/kiosk/facts/physical', section: 'factsPhysicalGeography' },
  { path: '/kiosk/facts/geographical-records', section: 'factsGeographyRecords' },
];

// Захищені сторінки
const protectedRoutes: { path: string; element: JSX.Element; role?: string }[] = [
  { path: '/profile', element: <Profile /> },
  { path: '/dashboard', element: <UserDashboard /> },
  { path: '/admin', element: <AdminPanel />, role: 'admin' },
];

// ============================================
// РЕНДЕР
// ============================================

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ---------- Публічні ---------- */}
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<News />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/page" element={<Page />} />
        <Route path="/kursi" element={<Kursi />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/timetable" element={<TimetableParser />} />
        <Route path="/schedule2" element={<TimetableParser2 />} />
        <Route path="/zamini" element={<TeacherAbsenceManager />} />
        <Route path="/pz" element={<PZCreator keyZamini={ZAMINI_TABLE} />} />

        {internalRedirects.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        {externalRedirects.map(({ path, url }) => (
          <Route key={path} path={path} element={<ExternalRedirect url={url} />} />
        ))}

        {/* ---------- Кіоск ---------- */}
        {[...kioskMainRoutes, ...psychoMenuRoutes].map(({ path, page }) => {
          const Component = kioskPage(page);
          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="/kiosk/gallery" element={<KioskGallery />} />

        {/* Пам'ятки та відео психологічної служби — список у pages/Kiosk/psycho-media.json */}
        {psychoMedia.images.map(({ path, title, image }) => (
          <Route
            key={path}
            path={path}
            element={<ImageViewer title={title} imageUrl={`/assets/images/kiosk/${image}`} alt={title} />}
          />
        ))}
        {psychoMedia.videos.map(({ path, title, video }) => (
          <Route key={path} path={path} element={<VideoViewer title={title} videoUrl={`/assets/videos/kiosk/${video}`} />} />
        ))}

        {/* Громада та цікаві факти — дані в pages/Kiosk/kulikivka-data.json */}
        {gromadaRoutes.map(({ path, section }) => (
          <Route key={path} path={path} element={<GromadaKiosk section={section} />} />
        ))}

        {/* Ігри (див. src/games/README.md) */}
        <Route path="/kiosk/games/arcade" element={<GamesMenuPage />} />
        <Route path="/kiosk/games/play/:gameId" element={<GamePage />} />

        {/* Фізика навколо нас (див. src/physics/README.md) */}
        <Route path="/kiosk/games/physics" element={<PhysicsHubPage />} />
        <Route path="/kiosk/games/physics/:pageId" element={<PhysicsPage />} />

        {/* Квізи, загадки, факти, мова, історія, настрій, логіка, хімія (див. src/fun/README.md) */}
        {funSections.map((section) => (
          <Fragment key={section.id}>
            <Route path={section.base} element={<FunHubPage section={section} />} />
            <Route path={`${section.base}/:pageId`} element={<FunPage section={section} />} />
          </Fragment>
        ))}

        {/* Альбоми малюнків: /kiosk/album/<папка> */}
        <Route path="/kiosk/album/:folder" element={<AlbumViewer />} />

        {/* ---------- Авторизація ---------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm-email/:token" element={<EmailConfirmation />} />
        {protectedRoutes.map(({ path, element, role }) => (
          <Route
            key={path}
            path={path}
            element={
              <OptionalAuthGuard requireAuth requireRole={role} redirectTo="/login">
                {element}
              </OptionalAuthGuard>
            }
          />
        ))}

        {ThemePreviewPage && <Route path="/theme-preview" element={<ThemePreviewPage />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
