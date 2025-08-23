// components/auth/AuthStatus.tsx - Компонент для показу статусу авторизації
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, User } from 'lucide-react';
import { useAuthContext } from '@/context/authContext';
import { Link } from 'react-router-dom';

interface AuthStatusProps {
  showForGuests?: boolean;
  showForUsers?: boolean;
}

export const AuthStatus: React.FC<AuthStatusProps> = ({
  showForGuests = true,
  showForUsers = true,
}) => {
  const { isAuthenticated, user } = useAuthContext();

  if (isAuthenticated && !showForUsers) return null;
  if (!isAuthenticated && !showForGuests) return null;

  return (
    <Alert className={isAuthenticated ? "border-green-200" : "border-blue-200"}>
      {isAuthenticated ? (
        <CheckCircle className="h-4 w-4 text-green-600" />
      ) : (
        <User className="h-4 w-4 text-blue-600" />
      )}
      <AlertDescription>
        {isAuthenticated ? (
          <span>
            Ви увійшли як <strong>{user?.name || user?.email}</strong>
          </span>
        ) : (
          <span>
            Ви не авторизовані. <Link to="/login" className="underline">Увійти</Link> або{' '}
            <Link to="/register" className="underline">зареєструватися</Link> для додаткових можливостей.
          </span>
        )}
      </AlertDescription>
    </Alert>
  );
};

