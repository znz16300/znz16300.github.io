/* eslint-disable @typescript-eslint/no-explicit-any */
// types/auth.ts
export interface User {
  id: number;
  email: string;
  name: string;
  confirmed: boolean;
  roles: string[] | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface ApiResponse<T = any> {
  message?: string;
  error?: string;
  data?: T;
}
