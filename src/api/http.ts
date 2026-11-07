// Мінімальна заміна axios на вбудованому fetch (≈0 КБ замість ~14 КБ gzip).
// Повертає { data, headers, status } — як axios, тож решта коду майже не змінилась.

export interface HttpResponse<T> {
  data: T;
  status: number;
  headers: Record<string, string>;
}

export class HttpError extends Error {
  constructor(
    public status: number,
    public url: string
  ) {
    super(`HTTP ${status}: ${url}`);
  }
}

/** Як і axios, пробує розібрати відповідь як JSON, інакше повертає текст. */
async function parse(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text) return text;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function request<T>(url: string, init: RequestInit = {}): Promise<HttpResponse<T>> {
  const res = await fetch(url, init);
  if (!res.ok) throw new HttpError(res.status, url);
  const headers: Record<string, string> = {};
  res.headers.forEach((v, k) => (headers[k] = v));
  const data = (init.method === 'HEAD' ? null : await parse(res)) as T;
  return { data, status: res.status, headers };
}

/* eslint-disable @typescript-eslint/no-explicit-any -- дані з таблиць без схеми, як і з axios */
export const http = {
  get: <T = any>(url: string, init?: RequestInit) => request<T>(url, { ...init, method: 'GET' }),
  head: (url: string, init?: RequestInit) => request<null>(url, { ...init, method: 'HEAD' }),
  /** FormData відправляється як application/x-www-form-urlencoded (як робив axios у getClopot) */
  postForm: <T = any>(url: string, form: FormData | URLSearchParams | Record<string, string>, init?: RequestInit) =>
    request<T>(url, {
      ...init,
      method: 'POST',
      body: new URLSearchParams(form as Record<string, string>),
    }),
};
/* eslint-enable @typescript-eslint/no-explicit-any */
