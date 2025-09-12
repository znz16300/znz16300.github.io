import { SERVER, TOKEN_LIFETIME_SECONDS } from '@/constants';
import { ApiResponse, AuthTokens, LoginCredentials, RegisterData, User } from '@/type/auth';

// services/authService.ts
class AuthService {
  private baseURL: string;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(baseURL: string = SERVER) {
    this.baseURL = baseURL;
    this.loadTokensFromStorage();
  }

  // Завантаження токенів з localStorage
  private loadTokensFromStorage(): void {
    this.accessToken = localStorage.getItem('access_token');
    this.refreshToken = localStorage.getItem('refresh_token');
  }

  // Збереження токенів в localStorage
  private saveTokensToStorage(tokens: AuthTokens): void {
    this.accessToken = tokens.access_token;
    this.refreshToken = tokens.refresh_token;
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  }

  // Видалення токенів з localStorage
  private clearTokensFromStorage(): void {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  // Базовий метод для HTTP запитів
  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Додаємо Authorization header якщо є access token
    if (this.accessToken && !endpoint.includes('/auth/refresh')) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.accessToken}`,
      };
    }

    try {
      const response = await fetch(url, config);

      // Якщо токен застарів, спробуємо оновити його
      if (response.status === 401 && this.refreshToken && !endpoint.includes('/auth/refresh')) {
        const newTokens = await this.refreshAccessToken();
        if (newTokens) {
          // Повторюємо запит з новим токеном
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${this.accessToken}`,
          };
          return this.makeRequest<T>(endpoint, options);
        }
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Реєстрація користувача
  async register(userData: RegisterData): Promise<ApiResponse> {
    try {
      const response = await this.makeRequest<ApiResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      return response;
    } catch (error) {
      throw new Error(
        `Registration failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  // Авторизація користувача
  async login(credentials: LoginCredentials): Promise<AuthTokens> {
    try {
      const response = await this.makeRequest<AuthTokens>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      this.saveTokensToStorage(response);
      return response;
    } catch (error) {
      throw new Error(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Вихід користувача
  logout(): void {
    this.clearTokensFromStorage();
  }

  // Оновлення access токена
  async refreshAccessToken(): Promise<AuthTokens | null> {
    if (!this.refreshToken) {
      this.logout();
      return null;
    }

    try {
      const response = await this.makeRequest<{ access_token: string }>('/auth/refresh', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.refreshToken}`,
        },
      });

      const tokens: AuthTokens = {
        access_token: response.access_token,
        refresh_token: this.refreshToken,
      };

      this.saveTokensToStorage(tokens);
      return tokens;
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.logout();
      return null;
    }
  }

  // Отримання профілю користувача
  async getProfile(): Promise<User> {
    try {
      const response = await this.makeRequest<User>('/auth/profile', {
        method: 'GET',
      });
      return response;
    } catch (error) {
      throw new Error(
        `Failed to get profile: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  // Оновлення профілю користувача
  async updateProfile(profileData: Partial<User>): Promise<ApiResponse> {
    try {
      const response = await this.makeRequest<ApiResponse>('/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData),
      });
      return response;
    } catch (error) {
      throw new Error(
        `Failed to update profile: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  // Перевірка чи користувач авторизований
  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  // Отримання поточного access токена
  getAccessToken(): string | null {
    return this.accessToken;
  }

  // Отримання поточного refresh токена
  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  // Підтвердження email (якщо потрібно робити це програмно)
  async confirmEmail(token: string): Promise<ApiResponse> {
    try {
      const response = await this.makeRequest<ApiResponse>(`/auth/confirm/${token}`, {
        method: 'GET',
      });
      return response;
    } catch (error) {
      throw new Error(
        `Email confirmation failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  // Перевірка валідності токена
  async validateToken(): Promise<boolean> {
    if (!this.accessToken) {
      return false;
    }

    try {
      await this.getProfile();
      return true;
    } catch (error) {
      // Спробуємо оновити токен
      const refreshed = await this.refreshAccessToken();
      return !!refreshed;
    }
  }

  // Декодування JWT токена (без верифікації)
  private decodeJWT(token: string): Record<string, unknown> | null {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload) as Record<string, unknown>;
    } catch (error) {
      return null;
    }
  }

  // Перевірка чи токен скоро закінчиться (за 5 хвилин)
  isTokenExpiringSoon(): boolean {
    if (!this.accessToken) return false;

    const decoded = this.decodeJWT(this.accessToken);
    if (!decoded || !decoded.exp) return false;

    const now = Date.now() / 1000;
    const expiryTime = Number(decoded.exp);
    const lifeTime = TOKEN_LIFETIME_SECONDS - 300; // 5 хвилин в секундах

    return expiryTime - now < lifeTime;
  }

  // Автоматичне оновлення токена якщо він скоро закінчиться
  async autoRefreshToken(): Promise<void> {
    if (this.isTokenExpiringSoon()) {
      await this.refreshAccessToken();
    }
  }
}

// Створюємо єдиний екземпляр сервісу
const authService = new AuthService();

export default authService;
