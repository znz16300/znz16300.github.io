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
  AllTeachersPage 
} from './pages/Kiosk/kiosk_data';
import KioskGallery from './pages/Schedule/KioskGallery';
import TeacherAbsenceManager from './pages/Schedule/TeacherAbsenceManager';
import PZCreator from './pages/Schedule/PZCreator';
import { ZAMINI_TABLE } from './constants';

// Публічні маршрути
export const PublicRoutes = () => (
  <>
    <Route path="/" element={<Index />} />
    <Route path="/news" element={<News />} />
    <Route path="/page" element={<Page />} />
    
    {/* Редіректи */}
    <Route 
      path="/zakupivli" 
      element={<Navigate to="/page?titlePages=Закупівлі&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    <Route 
      path="/contracts" 
      element={<Navigate to="/page?titlePages=Контакти&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    <Route 
      path="/kiosk/announcements" 
      element={<Navigate to="/page?titlePages=Оголошення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    <Route 
      path="/feedback" 
      element={<Navigate to="https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header" replace />} 
    />

    {/* Редіректи на сторінки Google Docs */}
    <Route 
      path="/kiosk/about" 
      element={<Navigate to="/page?titlePages=Про ліцей&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    {/* <Route 
      path="/kiosk/education" 
      element={<Navigate to="/page?titlePages=Навчання&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    /> */}
    <Route 
      path="/kiosk/achievements" 
      element={<Navigate to="/page?titlePages=Досягнення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    <Route 
      path="/kiosk/gallery" 
      element={<KioskGallery />} 
    />
    {/* <Route 
      path="/kiosk/gallery" 
      element={<Navigate to="/page?titlePages=Фотоархів&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    /> */}
    <Route 
      path="/kiosk/navigation" 
      element={<Navigate to="/page?titlePages=Навігація&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    <Route 
      path="/kiosk/announcements" 
      element={<Navigate to="/page?titlePages=Оголошення&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />
    <Route 
      path="/feedback" 
      element={<Navigate to="https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header" replace />} 
    />
    <Route 
      path="/kiosk/education/presentations" 
      element={<Navigate to="/page?titlePages=Розробки вчителів&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" replace />} 
    />

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
    <Route path="/mainmenu" element={<MainMenu />} />
    <Route path="/kiosk" element={<MainMenu />} />
    <Route path="/kiosk/schedulepage" element={<SchedulePage />} />
    <Route path="/kiosk/schedule/lessons" element={<ScheduleLessons />} />
    <Route path="/kiosk/schedule/bells" element={<ScheduleBells />} />
    <Route path="/kiosk/schedule/holidays" element={<ScheduleHolidays />} />
    <Route path="/kiosk/about" element={<AboutPage />} />
    <Route path="/kiosk/education" element={<EducationPage />} />
    <Route path="/kiosk/navigator" element={<NavigatorPage />} />
    <Route path="/kiosk/teachers" element={<TeachersPage />} />
    <Route path="/kiosk/achievements" element={<AchievementsPage />} />
    <Route path="/kiosk/games" element={<GamesPage />} />
    <Route path="/kiosk/gallery" element={<GalleryPage />} />
    <Route path="/kiosk/navigation" element={<NavigationPage />} />
    <Route path="/kiosk/vseosvita" element={<VseosvitaPage />} />
    <Route path="/kiosk/naurok" element={<NaurokPage />} />
    <Route path="/kiosk/teachers/all" element={<AllTeachersPage />} />
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
  </>
);

// 404 маршрут
export const NotFoundRoute = () => (
  <Route path="*" element={<NotFound />} />
);
