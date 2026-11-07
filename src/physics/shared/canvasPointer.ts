// Перетворює подію вказівника над <canvas> (усередині SimCanvas) на координати в тих самих CSS-пікселях,
// в яких малює draw(ctx, w, h): повертає { x, y, w, h } або null, якщо подія не над полотном.
import type React from 'react';

export interface CanvasPoint {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const canvasPoint = (e: React.PointerEvent | PointerEvent): CanvasPoint | null => {
  const t = e.target as Element | null;
  if (!t || !(t instanceof HTMLCanvasElement)) return null;
  const r = t.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height };
};
