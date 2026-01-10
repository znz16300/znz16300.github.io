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
      path="/kiosk/education/nmt"
      element={<ExternalRedirect url="https://zno.osvita.ua/" />}
    />
    <Route
      path="/kiosk/education/videos"
      element={<ExternalRedirect url="https://www.youtube.com/@ukrainian-online-school" />}
    />
    <Route
      path="/kiosk/games"
      element={<ExternalRedirect url="https://igru.com.ua/" />}
    />
    <Route
      path="/kiosk/feedback"
      element={<ExternalRedirect url="https://docs.google.com/forms/d/e/1FAIpQLSd3fmURo9ooxp05Sm_oYRW_WVplRu7bWmrIqHSsv6TjQ_TzqA/viewform?usp=header" />}
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
    <Route path="/kiosk/about" element={<AboutPage />} />
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
// ============================================
// ROUTES ДЛЯ ПСИХОЛОГІЧНОЇ ПІДТРИМКИ
// ============================================

// Головна сторінка психологічної підтримки
<Route path="/kiosk/psypho" element={<PsyphoPage />} />

// Що таке булінг
<Route path="/kiosk/psypho/buling" element={<BulingPage />} />

// Ти як?
<Route path="/kiosk/psypho/tiyak" element={<TiyakPage />} />
<Route path="/kiosk/psypho/tiyak/vpravy" element={<VpravyPage />} />

// Профілактика насильства
<Route path="/kiosk/psypho/profilaktika" element={<ProfilaktikaPage />} />

// Номери телефонів психологічної допомоги
<Route path="/kiosk/psypho/phones" element={<PhonesPage />} />

// Ментальне здоров'я
<Route path="/kiosk/psypho/mental" element={<MentalPage />} />

// Корисне для батьків
<Route path="/kiosk/psypho/parents" element={<ParentsPage />} />

// Конфлікти. Вирішення конфліктів
<Route path="/kiosk/psypho/conflicts" element={<ConflictsPage />} />

// Гендерна рівність
<Route path="/kiosk/psypho/gender" element={<GenderPage />} />

// Безпечний інтернет
<Route path="/kiosk/psypho/internet" element={<InternetPage />} />

// 10 правил доброти
<Route path="/kiosk/psypho/kindness" element={<KindnessPage />} />

// Соціально-психологічна служба

<Route path="/kiosk/psypho/kindness/rules" element={<ImageViewer
    title="10 правил доброти"
    imageUrl="/assets/images/kiosk/10-rules.jpg"
    alt="Явище булінгу в шкільному середовищі. Як з ним боротися" />} />

<Route path="/kiosk/psypho/service" element={<ImageViewer
    title="Соціально-психологічна служба"
    imageUrl="/assets/images/kiosk/soc-psyph.png"
    alt="" />} />
<Route path="/kiosk/psypho/profilaktika/domashnye" element={<ImageViewer
    title="Домашнє насильство"
    imageUrl="/assets/images/kiosk/home-violence.png"
    alt="" />} />
<Route path="/kiosk/psypho/profilaktika/pamiatka" element={<ImageViewer
    title="Памʼятка для батьків"
    imageUrl="/assets/images/kiosk/memo-for-parents.png"
    alt="" />} />

<Route path="/kiosk/psypho/profilaktika/porady-batkam" element={<ImageViewer
    title="Поради батькам"
    imageUrl="/assets/images/kiosk/advices.png"
    alt="" />} />

<Route path="kiosk/psypho/internet/pravyla" element={<ImageViewer
    title="Правила інтернет безпеки"
    imageUrl="/assets/images/kiosk/pravyla.jpg"
    alt="" />} />
<Route path="kiosk/psypho/internet/bezpechnyy" element={<ImageViewer
    title="Безпечний інтернет"
    imageUrl="/assets/images/kiosk/bezpechnyy.jpg"
    alt="" />} />
<Route path="kiosk/psypho/internet/dlia-batkiv" element={<ImageViewer
    title="Правила безпечного інтернету для батьків"
    imageUrl="/assets/images/kiosk/dlia-batkiv.jpg"
    alt="" />} />
<Route path="kiosk/psypho/internet/robota-v-merezhi" element={<ImageViewer
    title="Правила безпечної роботи в мережі"
    imageUrl="/assets/images/kiosk/robota-v-merezhi.jpg"
    alt="" />} />
<Route path="kiosk/psypho/internet/dlia-ditey" element={<ImageViewer
    title="Правила безпечного інтернету для дітей"
    imageUrl="/assets/images/kiosk/dlia-ditey.jpg"
    alt="" />} />
<Route path="kiosk/psypho/gender/shcho-take" element={<ImageViewer
    title="Що таке гендерна рівність"
    imageUrl="/assets/images/kiosk/shcho-take.jpg"
    alt="" />} />
<Route path="kiosk/psypho/gender/pryntsypy" element={<ImageViewer
    title="Принципи гендерної рівності"
    imageUrl="/assets/images/kiosk/pryntsypy.jpg"
    alt="" />} />
<Route path="kiosk/psypho/conflicts/shcho-take" element={<ImageViewer
    title="Що таке конфлікт"
    imageUrl="/assets/images/kiosk/conflict-shcho-take.jpg"
    alt="" />} />
<Route path="kiosk/psypho/conflicts/typy" element={<ImageViewer
    title="Типи конфліктів"
    imageUrl="/assets/images/kiosk/typy.jpg"
    alt="" />} />
<Route path="kiosk/psypho/conflicts/druzi" element={<ImageViewer
    title="Конфлікти з друзями - як зберегти дружбу"
    imageUrl="/assets/images/kiosk/druzi.jpg"
    alt="" />} />
<Route path="kiosk/psypho/conflicts/sposoby" element={<ImageViewer
    title="Способи вирішення конфліктів"
    imageUrl="/assets/images/kiosk/sposoby.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/praktychnyy" element={<ImageViewer
    title="Практичний блок для батьків"
    imageUrl="/assets/images/kiosk/praktychnyy.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/chomu-bulyty" element={<ImageViewer
    title="Чому діти починають булити"
    imageUrl="/assets/images/kiosk/chomu-bulyty.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/perevantazhenist" element={<ImageViewer
    title="Чи не перевантажена ваша дитина"
    imageUrl="/assets/images/kiosk/perevantazhenist.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/vplyv-simi" element={<ImageViewer
    title="Вплив сім\'ї на профілактику булінгу"
    imageUrl="/assets/images/kiosk/vplyv-simi.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/pershoklasnyk" element={<ImageViewer
    title="Пам\'ятка для батьків першокласника"
    imageUrl="/assets/images/kiosk/pershoklasnyk.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/pidlitky" element={<ImageViewer
    title="Поради батькам підлітків"
    imageUrl="/assets/images/kiosk/pidlitky.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/suitsyd" element={<ImageViewer
    title="Профілактика суїциду"
    imageUrl="/assets/images/kiosk/suitsyd.png"
    alt="" />} />
<Route path="kiosk/psypho/parents/agresiia" element={<ImageViewer
    title="Роль сім\'ї у формуванні агресії"
    imageUrl="/assets/images/kiosk/agresiia.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/test" element={<ImageViewer
    title="Тест. Чи не перевантажена дитина"
    imageUrl="/assets/images/kiosk/test.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/pidtrymka" element={<ImageViewer
    title="Поради щодо підтримки дитини"
    imageUrl="/assets/images/kiosk/pidtrymka.jpg"
    alt="" />} />
<Route path="kiosk/psypho/parents/piatyy-klas" element={<ImageViewer
    title="Пам\'ятка для батьків п\'ятих класів"
    imageUrl="/assets/images/kiosk/piatyy-klas.jpg"
    alt="" />} />
<Route path="kiosk/psypho/mental/zazemlennia" element={<ImageViewer
    title="Техніки заземлення"
    imageUrl="/assets/images/kiosk/zazemlennia.jpg"
    alt="" />} />
<Route path="kiosk/psypho/mental/den" element={<ImageViewer
    title="День ментального здоров\'я"
    imageUrl="/assets/images/kiosk/den.png"
    alt="" />} />
<Route path="kiosk/psypho/mental/pokrashchennia" element={<ImageViewer
    title="Що я можу зробити для покращення"
    imageUrl="/assets/images/kiosk/pokrashchennia.jpg"
    alt="" />} />
<Route path="kiosk/psypho/mental/tryvozhist" element={<ImageViewer
    title="Техніки для зняття тривожності"
    imageUrl="/assets/images/kiosk/tryvozhist.jpg"
    alt="" />} />
<Route path="kiosk/psypho/mental/rivnovaha" element={<ImageViewer
    title="Як зберегти рівновагу під тиском"
    imageUrl="/assets/images/kiosk/rivnovaha.jpg"
    alt="" />} />
<Route path="kiosk/psypho/mental/stress" element={<ImageViewer
    title="Техніки для подолання стресу"
    imageUrl="/assets/images/kiosk/stress.png"
    alt="" />} />
<Route path="kiosk/psypho/mental/info" element={<ImageViewer
    title="Ментальне здоров\'я"
    imageUrl="/assets/images/kiosk/info.png"
    alt="" />} />
<Route path="kiosk/psypho/mental/pamiatka" element={<ImageViewer
    title="Пам\'ятка для батьків"
    imageUrl="/assets/images/kiosk/pamiatka.png"
    alt="" />} />
<Route path="kiosk/psypho/mental/yak-pokrashchyty" element={<ImageViewer
    title="Як покращити ментальне здоров\'я"
    imageUrl="/assets/images/kiosk/yak-pokrashchyty.jpg"
    alt="" />} />
<Route path="kiosk/psypho/phones/hotline-1" element={<ImageViewer
    title="Безконтовна психологічна допомога для українців"
    imageUrl="/assets/images/kiosk/hotline-1.jpg"
    alt="" />} />
<Route path="kiosk/psypho/phones/hotline-2" element={<ImageViewer
    title="Гарячі лінії психологічної допомоги"
    imageUrl="/assets/images/kiosk/hotline-2.jpg"
    alt="" />} />
<Route path="kiosk/psypho/phones/contacts" element={<ImageViewer
    title="Контакти служб підтримки"
    imageUrl="/assets/images/kiosk/hotline-3.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/tiyak/karta" element={<ImageViewer
    title='Карта "Ти як"'
    imageUrl="/assets/images/kiosk/karta.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/tiyak/skazhy-chesno" element={<ImageViewer
    title='Скажи чесно "Ти як"'
    imageUrl="/assets/images/kiosk/skazhy-chesno.png"
    alt="" />} />
<Route path="/kiosk/psypho/tiyak/emotsii-1" element={<ImageViewer
    title='Емоційний стан 1'
    imageUrl="/assets/images/kiosk/emotsii-1.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/tiyak/emotsii-2" element={<ImageViewer
    title='Емоційний стан 2'
    imageUrl="/assets/images/kiosk/emotsii-2.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/tiyak/emotsii-3" element={<ImageViewer
    title='Емоційний стан 3'
    imageUrl="/assets/images/kiosk/emotsii-3.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/buling/yavyshche" element={<ImageViewer
    title='Явище булінгу в шкільному середовищі'
    imageUrl="/assets/images/kiosk/yavyshche.png"
    alt="" />} />
<Route path="/kiosk/psypho/buling/rekomendatsii-batkam" element={<ImageViewer
    title='Рекомендації батькам'
    imageUrl="/assets/images/kiosk/rekomendatsii-batkam.png"
    alt="" />} />
<Route path="/kiosk/psypho/buling/algorytm-pedahohiv" element={<ImageViewer
    title='Алгоритм дій педагогічних працівників'
    imageUrl="/assets/images/kiosk/algorytm-pedahohiv.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/buling/porady-uchnyam" element={<ImageViewer
    title='Поради учням як боротися з булінгом'
    imageUrl="/assets/images/kiosk/porady-uchnyam.png"
    alt="" />} />
<Route path="/kiosk/psypho/buling/povidomyty" element={<ImageViewer
    title='Повідомити про булінг'
    imageUrl="/assets/images/kiosk/povidomyty.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/buling/buling-info" element={<ImageViewer
    title='Зупини булінг'
    imageUrl="/assets/images/kiosk/buling-info.png"
    alt="" />} />
<Route path="/kiosk/psypho/buling/dopomohty-dytyni" element={<ImageViewer
    title='Як допомогти дитині впоратися'
    imageUrl="/assets/images/kiosk/dopomohty-dytyni.png"
    alt="" />} />
<Route path="/kiosk/psypho/buling/yak-reahuvaty" element={<ImageViewer
    title='Як реагувати на цькування'
    imageUrl="/assets/images/kiosk/yak-reahuvaty.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/buling/buklet" element={<ImageViewer
    title='Буклет. Булінг'
    imageUrl="/assets/images/kiosk/buklet.jpg"
    alt="" />} />
<Route path="/kiosk/psypho/buling/porady-psykholoha" element={<ImageViewer
    title='Поради психологічної служби'
    imageUrl="/assets/images/kiosk/porady-psykholoha.png"
    alt="" />} />




<Route path="/kiosk/psypho/tiyak/vpravy/zlata" element={<VideoViewer
    title="Скажи чесно, ти як_ Злата Огнєвіч"
    videoUrl="/assets/videos/kiosk/v1.mp4"
    poster="/images/video-poster.jpg"
  />} />
  
<Route path="/kiosk/psypho/tiyak/vpravy/olha" element={<VideoViewer
    title="Скажи чесно, ти як_ Ольга Бутко"
    videoUrl="/assets/videos/kiosk/v2.mp4"
    poster="/images/video-poster.jpg"
  />} />
<Route path="/kiosk/psypho/tiyak/vpravy/solomiia" element={<VideoViewer
    title="Скажи чесно, ти як_ Проста вправа для заспокоєння від Соломії Вітвіцької"
    videoUrl="/assets/videos/kiosk/v3.mp4"
    poster="/images/video-poster.jpg"
  />} />
<Route path="/kiosk/psypho/tiyak/vpravy/roksolana" element={<VideoViewer
    title="Скажи чесно, ти як_ Роксолана Сирота (ROXOLANA)"
    videoUrl="/assets/videos/kiosk/v4.mp4"
    poster="/images/video-poster.jpg"
  />} />
<Route path="/kiosk/psypho/tiyak/vpravy/oleksandra" element={<VideoViewer
    title="Щоб заспокоїтись у важку мить, забирайте прості вправи від Олександри Заріцької"
    videoUrl="/assets/videos/kiosk/v5.mp4"
    poster="/images/video-poster.jpg"
  />} />



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
