/** Заглушка, поки підвантажується код сторінки (React.lazy + Suspense). */
export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600 dark:border-gray-700 dark:border-t-brand-400" />
      <span className="sr-only">Завантаження…</span>
    </div>
  );
}
