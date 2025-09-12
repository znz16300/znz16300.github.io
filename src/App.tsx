import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OptionalAuthGuard } from '@/utils/authGuard';

// Існуючі сторінки
import Index from './pages/Index';
import News from './pages/News';
import Documents from './pages/Documents';
import NotFound from './pages/NotFound';
import Page from './pages/Page';
import Kursi from './pages/Kursi';
import Schedule from './pages/Schedule';

import { AuthProvider } from './context/authContext';
import AdminPanel from './pages/admin/adminPanel';
import EmailConfirmation from './pages/auth/emailConfirmation';
import Login from './pages/auth/login';
import Profile from './pages/auth/profile';
import Register from './pages/auth/register';
import UserDashboard from './pages/user/userDashboard';
import Logout from './pages/auth/logout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              {/* Публічні маршрути - доступні всім */}
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<News />} />
              <Route path="/page" element={<Page />} />
              <Route path="/kursi" element={<Kursi />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/documents" element={<Documents />} />

              {/* Авторизаційні маршрути */}
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/confirm-email/:token" element={<EmailConfirmation />} />

              {/* Маршрути для авторизованих користувачів */}
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

              {/* 404 сторінка */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
