// Полотно для симуляцій: саме підлаштовується під доступне місце (зберігаючи пропорції),
// враховує щільність пікселів і викликає draw() кожен кадр.
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface SimCanvasProps {
  /** Співвідношення сторін w/h */
  aspect: number;
  /** Малює кадр. w, h - розмір у CSS-пікселях, dt - секунди (не більше 0.05) */
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => void;
  className?: string;
}

export const SimCanvas: React.FC<SimCanvasProps> = ({ aspect, draw, className = '' }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const drawRef = useRef(draw);
  drawRef.current = draw;
  const sizeRef = useRef(size);
  sizeRef.current = size;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      let w = cw;
      let h = cw / aspect;
      if (h > ch) {
        h = ch;
        w = ch * aspect;
      }
      setSize({ w: Math.max(0, Math.floor(w)), h: Math.max(0, Math.floor(h)) });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [aspect]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      const c = canvasRef.current;
      const { w, h } = sizeRef.current;
      if (c && w > 0 && c.width > 0) {
        const ctx = c.getContext('2d');
        if (ctx) {
          ctx.setTransform(c.width / w, 0, 0, c.height / h, 0, 0);
          drawRef.current(ctx, w, h, dt);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={boxRef} className={`w-full h-full flex items-center justify-center ${className}`}>
      {size.w > 0 && (
        <canvas
          ref={canvasRef}
          width={Math.round(size.w * dpr)}
          height={Math.round(size.h * dpr)}
          style={{ width: size.w, height: size.h }}
          className="rounded-2xl shadow-2xl border border-white/10"
        />
      )}
    </div>
  );
};
