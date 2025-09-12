// utils/authGuard.tsx - Оновлений AuthGuard для гнучкої авторизації
import { useAuthContext } from '@/context/authContext';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface OptionalAuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string;
  redirectTo?: string;
  fallbackComponent?: React.ComponentType;
}

export const OptionalAuthGuard: React.FC<OptionalAuthGuardProps> = ({
  children,
  requireAuth = false,
  requireRole,
  redirectTo = '/login',
  fallbackComponent: FallbackComponent,
}) => {
  const { isAuthenticated, user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse">Завантаження...</div>
      </div>
    );
  }

  // Якщо авторизація не обов'язкова, показуємо контент
  if (!requireAuth) {
    return <>{children}</>;
  }

  // Якщо потрібна авторизація, але користувач не авторизований
  if (requireAuth && !isAuthenticated) {
    if (FallbackComponent) {
      return <FallbackComponent />;
    }
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Перевірка ролі, якщо вказана
  if (requireRole && user && !user.roles?.includes(requireRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
