// AlbumViewer.tsx - універсальна галерея малюнків для кіоску.
//
// Маршрут: /kiosk/album/:folder
// Дані:    /assets/albums/<folder>/album.json  ->  { "title": "...", "files": ["1.jpg", "2.png"] }
//
// Жести (як на звичайних сенсорних екранах):
//   - свайп вліво/вправо ........ наступний / попередній малюнок
//   - розведення/зведення пальців  масштабування
//   - один палець (при збільшенні)  прокрутка малюнка (перехід до іншого малюнка - лише свайпом при масштабі ≈100% або стрілками)
//   - подвійний тап ............. збільшити / повернути масштаб
//   - колесо миші, стрілки клавіатури - для комп'ютера

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface AlbumData {
  title: string;
  files: string[];
}

interface View {
  scale: number;
  tx: number;
  ty: number;
}

interface Pt {
  x: number;
  y: number;
}

const ALBUMS_BASE = '/assets/albums';
const MIN_SCALE = 0.5;
const PADDING = 32; // відступ малюнка від країв екрана, px
const MAX_SCALE = 5;
const DOUBLE_TAP_SCALE = 2.5;
const SLIDE_MS = 250;
const CONTROLS_HIDE_MS = 3000;
const IDENTITY: View = { scale: 1, tx: 0, ty: 0 };

const clamp = (v: number, min: number, max: number): number => Math.min(max, Math.max(min, v));

export const AlbumViewer: React.FC = () => {
  const { folder = '' } = useParams<{ folder: string }>();
  const navigate = useNavigate();

  const [album, setAlbum] = useState<AlbumData | null>(null);
  const [error, setError] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [view, setViewState] = useState<View>(IDENTITY);
  const [dragX, setDragX] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [smoothZoom, setSmoothZoom] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<number>(0);
  const countRef = useRef<number>(0);
  const viewRef = useRef<View>(IDENTITY);
  const dragRef = useRef<number>(0);
  const animatingRef = useRef<boolean>(false);
  const naturalRef = useRef<Record<number, { w: number; h: number }>>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const smoothRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // стан жестів
  const pointers = useRef<Map<number, Pt>>(new Map());
  const lastPt = useRef<Pt>({ x: 0, y: 0 });
  const startPt = useRef<Pt & { t: number }>({ x: 0, y: 0, t: 0 });
  const pinch = useRef<{ dist: number; mid: Pt }>({ dist: 0, mid: { x: 0, y: 0 } });
  const overscroll = useRef<number>(0);
  const multiTouch = useRef<boolean>(false);
  const lastTap = useRef<{ t: number; x: number; y: number }>({ t: 0, x: 0, y: 0 });

  indexRef.current = index;
  countRef.current = album ? album.files.length : 0;

  // ---------- Завантаження album.json ----------
  useEffect(() => {
    let cancelled = false;
    setAlbum(null);
    setError('');
    setIndex(0);
    fetch(`${ALBUMS_BASE}/${encodeURIComponent(folder)}/album.json`, { cache: 'no-cache' })
      .then((r) => {
        if (!r.ok) throw new Error('not found');
        return r.json();
      })
      .then((d) => {
        if (cancelled) return;
        if (!d || !Array.isArray(d.files) || d.files.length === 0) throw new Error('empty');
        setAlbum({ title: String(d.title || ''), files: d.files.map((f: unknown) => String(f)) });
      })
      .catch(() => {
        if (!cancelled) setError('Альбом не знайдено або він порожній');
      });
    return () => {
      cancelled = true;
    };
  }, [folder]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
      if (smoothRef.current) clearTimeout(smoothRef.current);
    },
    []
  );

  // ---------- Допоміжні функції ----------
  const wake = useCallback((): void => {
    setShowControls(true);
    if (hideRef.current) clearTimeout(hideRef.current);
    hideRef.current = setTimeout(() => setShowControls(false), CONTROLS_HIDE_MS);
  }, []);

  useEffect(() => {
    wake();
  }, [wake]);

  const getSize = (): { cw: number; ch: number; cx: number; cy: number } => {
    const el = containerRef.current;
    if (!el) return { cw: window.innerWidth, ch: window.innerHeight, cx: window.innerWidth / 2, cy: window.innerHeight / 2 };
    const r = el.getBoundingClientRect();
    return { cw: r.width, ch: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
  };

  // Обмежує масштаб і зсув так, щоб малюнок не виїжджав за межі екрана
  const clampView = (v: View): View => {
    const { cw, ch } = getSize();
    const nat = naturalRef.current[indexRef.current];
    const aw = Math.max(1, cw - PADDING * 2);
    const ah = Math.max(1, ch - PADDING * 2);
    let dw = aw;
    let dh = ah;
    if (nat) {
      const fit = Math.min(aw / nat.w, ah / nat.h);
      dw = nat.w * fit;
      dh = nat.h * fit;
    }
    const scale = clamp(v.scale, MIN_SCALE, MAX_SCALE);
    // зсув можливий лише доки малюнок більший за доступну область (з відступами)
    const maxX = Math.max(0, (dw * scale - aw) / 2);
    const maxY = Math.max(0, (dh * scale - ah) / 2);
    return { scale, tx: clamp(v.tx, -maxX, maxX), ty: clamp(v.ty, -maxY, maxY) };
  };

  const applyView = (v: View, smooth = false): View => {
    const next = clampView(v);
    viewRef.current = next;
    if (smooth) {
      setSmoothZoom(true);
      if (smoothRef.current) clearTimeout(smoothRef.current);
      smoothRef.current = setTimeout(() => setSmoothZoom(false), 220);
    }
    setViewState(next);
    return next;
  };

  // Масштабування відносно точки (px, py) в координатах екрана
  const zoomAt = (px: number, py: number, newScale: number, smooth = false): void => {
    const { cx, cy } = getSize();
    const v = viewRef.current;
    const s = clamp(newScale, MIN_SCALE, MAX_SCALE);
    const f = s / v.scale;
    applyView(
      {
        scale: s,
        tx: px - cx - (px - cx - v.tx) * f,
        ty: py - cy - (py - cy - v.ty) * f,
      },
      smooth
    );
  };

  const zoomCenter = (factor: number): void => {
    const { cx, cy } = getSize();
    zoomAt(cx, cy, viewRef.current.scale * factor, true);
    wake();
  };

  const setAnim = (v: boolean): void => {
    animatingRef.current = v;
    setAnimating(v);
  };

  const setDrag = (v: number): void => {
    dragRef.current = v;
    setDragX(v);
  };

  const snapBack = (): void => {
    setAnim(true);
    setDrag(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAnim(false), SLIDE_MS);
  };

  // dir: +1 - наступний, -1 - попередній
  const slide = (dir: number): void => {
    if (animatingRef.current) return;
    const next = indexRef.current + dir;
    if (dir === 0 || next < 0 || next >= countRef.current) {
      snapBack();
      return;
    }
    const { cw } = getSize();
    setAnim(true);
    setDrag(-dir * cw);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      indexRef.current = next;
      setIndex(next);
      viewRef.current = IDENTITY;
      setViewState(IDENTITY);
      setDrag(0);
      setAnim(false);
    }, SLIDE_MS);
  };

  // ---------- Жести ----------
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    wake();
    if (animatingRef.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 1) {
      multiTouch.current = false;
      overscroll.current = 0;
      startPt.current = { x: e.clientX, y: e.clientY, t: Date.now() };
      lastPt.current = { x: e.clientX, y: e.clientY };
    } else if (pointers.current.size === 2) {
      multiTouch.current = true;
      overscroll.current = 0;
      if (dragRef.current !== 0) setDrag(0);
      const [a, b] = Array.from(pointers.current.values());
      pinch.current = {
        dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
        mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (!pointers.current.has(e.pointerId)) {
      wake(); // наведення миші
      return;
    }
    wake();
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // --- Два пальці: масштабування + переміщення ---
    if (pointers.current.size >= 2) {
      const [a, b] = Array.from(pointers.current.values());
      const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const { cx, cy } = getSize();
      const v = viewRef.current;
      const s = clamp(v.scale * (dist / pinch.current.dist), MIN_SCALE, MAX_SCALE);
      const f = s / v.scale;
      applyView({
        scale: s,
        tx: mid.x - cx - (pinch.current.mid.x - cx - v.tx) * f,
        ty: mid.y - cy - (pinch.current.mid.y - cy - v.ty) * f,
      });
      pinch.current = { dist, mid };
      return;
    }

    // --- Один палець ---
    const dx = e.clientX - lastPt.current.x;
    const dy = e.clientY - lastPt.current.y;
    lastPt.current = { x: e.clientX, y: e.clientY };
    if (multiTouch.current) return; // після пінчу ігноруємо залишок жесту

    const atStart = indexRef.current === 0;
    const atEnd = indexRef.current === countRef.current - 1;

    const v = viewRef.current;
    if (v.scale > 1.001) {
      // прокрутка збільшеного малюнка одним пальцем (без переходу до іншого малюнка)
      applyView({ scale: v.scale, tx: v.tx + dx, ty: v.ty + dy });
    } else {
      // свайп між малюнками
      const cur = dragRef.current;
      const blocked = (cur + dx > 0 && atStart) || (cur + dx < 0 && atEnd);
      setDrag(cur + (blocked ? dx * 0.35 : dx));
    }
  };

  const endGesture = (e: React.PointerEvent<HTMLDivElement>, cancelled: boolean): void => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.delete(e.pointerId);

    if (pointers.current.size > 0) {
      // залишився один палець після пінчу - продовжуємо від його позиції
      const rest = Array.from(pointers.current.values())[0];
      lastPt.current = { ...rest };
      return;
    }

    if (Math.abs(viewRef.current.scale - 1) < 0.05 && viewRef.current.scale !== 1) applyView(IDENTITY, true);

    const now = Date.now();
    const { cw } = getSize();
    const drag = dragRef.current;
    const elapsed = Math.max(1, now - startPt.current.t);
    const velocity = drag / elapsed;
    const threshold = Math.min(cw * 0.15, 140);

    if (!cancelled && drag !== 0 && (Math.abs(drag) > threshold || (Math.abs(velocity) > 0.4 && Math.abs(drag) > 30))) {
      slide(drag < 0 ? 1 : -1);
      overscroll.current = 0;
      return;
    }
    if (drag !== 0) snapBack();
    overscroll.current = 0;

    // подвійний тап
    const moved = Math.hypot(e.clientX - startPt.current.x, e.clientY - startPt.current.y);
    if (!cancelled && !multiTouch.current && moved < 10 && elapsed < 300) {
      const lt = lastTap.current;
      if (now - lt.t < 350 && Math.hypot(e.clientX - lt.x, e.clientY - lt.y) < 40) {
        if (Math.abs(viewRef.current.scale - 1) > 0.01) applyView(IDENTITY, true);
        else zoomAt(e.clientX, e.clientY, DOUBLE_TAP_SCALE, true);
        lastTap.current = { t: 0, x: 0, y: 0 };
      } else {
        lastTap.current = { t: now, x: e.clientX, y: e.clientY };
      }
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>): void => {
    wake();
    zoomAt(e.clientX, e.clientY, viewRef.current.scale * Math.exp(-e.deltaY * 0.0015));
  };

  // клавіатура (для ПК)
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowRight') slide(1);
      else if (e.key === 'ArrowLeft') slide(-1);
      else if (e.key === '+' || e.key === '=') zoomCenter(1.25);
      else if (e.key === '-') zoomCenter(0.8);
      else if (e.key === '0') applyView(IDENTITY, true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- Рендер ----------
  if (error || !album) {
    return (
      <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center gap-6 text-white">
        <p className="text-2xl">{error || 'Завантаження...'}</p>
        {error && (
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Назад
          </button>
        )}
      </div>
    );
  }

  const count = album.files.length;
  const visible = [index - 1, index, index + 1].filter((i) => i >= 0 && i < count);
  const fileUrl = (name: string): string => `${ALBUMS_BASE}/${encodeURIComponent(folder)}/${encodeURIComponent(name)}`;
  const btn = 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed';
  const arrow = 'absolute top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-300 disabled:opacity-0';

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative select-none">
      {/* Область жестів */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{ touchAction: 'none' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endGesture(e, false)}
        onPointerCancel={(e) => endGesture(e, true)}
        onWheel={onWheel}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(${dragX}px)`,
            transition: animating ? `transform ${SLIDE_MS}ms ease-out` : 'none',
          }}
        >
          {visible.map((i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                padding: PADDING,
                boxSizing: 'border-box',
                transform: `translateX(${(i - index) * 100}%)`,
              }}
            >
              <img
                src={fileUrl(album.files[i])}
                alt={`${album.title} ${i + 1}`}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  naturalRef.current[i] = { w: img.naturalWidth, h: img.naturalHeight };
                }}
                className="w-full h-full object-contain pointer-events-none"
                style={
                  i === index
                    ? {
                        transform: `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`,
                        transition: smoothZoom ? 'transform 0.2s ease-out' : 'none',
                        willChange: 'transform',
                      }
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Стрілки (для миші / великих екранів) */}
      <button
        className={`${arrow} left-4 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => { wake(); slide(-1); }}
        disabled={index === 0}
        aria-label="Попередній"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className={`${arrow} right-4 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => { wake(); slide(1); }}
        disabled={index === count - 1}
        aria-label="Наступний"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Заголовок */}
      <div
        className={`fixed top-0 left-0 right-0 z-20 px-8 pt-4 pb-3 bg-gradient-to-r from-blue-900/70 to-purple-900/70 backdrop-blur-sm
                    flex items-center justify-between gap-4 transition-transform duration-300 ease-in-out
                    ${showControls ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white truncate">{album.title}</h1>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className={`${btn} p-3`} onClick={() => zoomCenter(0.8)} disabled={view.scale <= MIN_SCALE} title="Зменшити">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <button className={`${btn} px-3 py-3 min-w-[4.5rem] font-bold`} onClick={() => { applyView(IDENTITY, true); wake(); }} title="Скинути масштаб">
            {Math.round(view.scale * 100)}%
          </button>
          <button className={`${btn} p-3`} onClick={() => zoomCenter(1.25)} disabled={view.scale >= MAX_SCALE} title="Збільшити">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Нижня навігація */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-20 px-8 pb-6 pt-4 bg-gradient-to-t from-slate-900/80 to-transparent
                    flex justify-between items-center gap-4 transition-transform duration-300 ease-in-out
                    ${showControls ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 font-semibold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>

        <div className="bg-black/50 text-white px-5 py-2 rounded-full font-semibold text-lg">
          {index + 1} / {count}
        </div>

        <button
          onClick={() => navigate('/mainmenu')}
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 font-semibold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Головне меню
        </button>
      </div>
    </div>
  );
};

export default AlbumViewer;
