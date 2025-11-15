import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

// Імпорт маршрутів
import { 
  PublicRoutes, 
  KioskRoutes, 
  AuthRoutes, 
  ProtectedRoutes, 
  NotFoundRoute 
} from './routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              {/* Публічні маршрути */}
              {PublicRoutes()}
              
              {/* Маршрути кіоску */}
              {KioskRoutes()}
              
              {/* Авторизаційні маршрути */}
              {AuthRoutes()}
              
              {/* Захищені маршрути */}
              {ProtectedRoutes()}
              
              {/* 404 сторінка */}
              {NotFoundRoute()}
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
