// Розклад у форматі aSc Timetables XML лежить у public/data/timetable.xml.
// Щоб оновити розклад — замініть цей файл новим експортом з aSc і задеплойте.
// Раніше XML (≈390 КБ) був вшитий у JS-код; тепер він завантажується лише на сторінках розкладу.
import { useEffect, useState } from 'react';

const TIMETABLE_URL = `${import.meta.env.BASE_URL}data/timetable.xml`;

let cache: Promise<string> | null = null;

export function loadTimetableXml(): Promise<string> {
  if (!cache) {
    cache = fetch(TIMETABLE_URL).then((r) => {
      if (!r.ok) throw new Error(`Не вдалося завантажити розклад (${r.status})`);
      return r.text();
    });
    cache.catch(() => (cache = null)); // дозволити повторну спробу
  }
  return cache;
}

/** XML розкладу або null, поки вантажиться. */
export function useTimetableXml(): { xml: string | null; error: string | null } {
  const [xml, setXml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    loadTimetableXml()
      .then((x) => alive && setXml(x))
      .catch((e: Error) => alive && setError(e.message));
    return () => {
      alive = false;
    };
  }, []);
  return { xml, error };
}
