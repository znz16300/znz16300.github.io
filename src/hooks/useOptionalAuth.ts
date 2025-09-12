// hooks/useOptionalAuth.ts - Hook для компонентів з необов'язковою авторизацією

import { useAuthContext } from '@/context/authContext';
import { User } from '@/type/auth';

export interface UseOptionalAuthReturn {
  isAuthenticated: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  canAccess: (feature: string) => boolean;
  showAuthPrompt: boolean;
  authPromptMessage: string;
}

export const useOptionalAuth = (features: string[] = []): UseOptionalAuthReturn => {
  const { isAuthenticated, user } = useAuthContext();

  const canAccess = (feature: string): boolean => {
    if (!features.includes(feature)) return true;
    return isAuthenticated;
  };

  const showAuthPrompt = features.length > 0 && !isAuthenticated;

  const authPromptMessage =
    features.length > 0 ? `Увійдіть в систему для доступу до: ${features.join(', ')}` : '';

  return {
    isAuthenticated,
    user,
    canAccess,
    showAuthPrompt,
    authPromptMessage,
  };
};
