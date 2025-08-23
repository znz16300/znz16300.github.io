// hooks/useAuth.ts - React hook для роботи з авторизацією
import authService from '@/api/authService';
import { User, LoginCredentials, RegisterData } from '@/type/auth';
import { useState, useEffect, useCallback } from 'react';

export interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: Partial<User>) => Promise<void>;
  clearError: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      if (authService.isAuthenticated()) {
        const isValid = await authService.validateToken();
        if (isValid) {
          const profile = await authService.getProfile();
          setUser(profile);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await authService.login(credentials);
      const profile = await authService.getProfile();
      setUser(profile);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (userData: RegisterData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await authService.register(userData);
      // Після реєстрації користувач повинен підтвердити email
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    setError(null);
  }, []);

  const updateProfile = useCallback(async (profileData: Partial<User>) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await authService.updateProfile(profileData);
      const updatedProfile = await authService.getProfile();
      setUser(updatedProfile);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Profile update failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Перевіряємо авторизацію при завантаженні компонента
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Автоматичне оновлення токена
  useEffect(() => {
    if (!authService.isAuthenticated()) return;

    const interval = setInterval(() => {
      authService.autoRefreshToken();
    }, 4 * 60 * 1000); // Перевіряємо кожні 4 хвилини

    return () => clearInterval(interval);
  }, [user]);

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    updateProfile,
    clearError,
    checkAuth,
  };
};
