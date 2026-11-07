// Малювання лампочки зі «світінням» + допоміжні функції для плоских схем.
export const drawBulb = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, brightness: number, broken = false, unscrewed = false) => {
  if (brightness > 0.01) {
    const g = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * (2 + brightness * 2.5));
    g.addColorStop(0, `rgba(253,224,71,${0.65 * Math.min(1, brightness + 0.2)})`);
    g.addColorStop(1, 'rgba(253,224,71,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r * (2 + brightness * 2.5), 0, Math.PI * 2);
    ctx.fill();
  }
  // цоколь
  ctx.fillStyle = '#94a3b8';
  ctx.fillRect(x - r * 0.45, y + r * 0.75, r * 0.9, r * 0.6);
  // колба
  ctx.fillStyle = brightness > 0.01 ? `rgba(254,240,138,${0.35 + 0.65 * Math.min(1, brightness)})` : 'rgba(148,163,184,0.25)';
  ctx.strokeStyle = unscrewed ? '#f87171' : '#e2e8f0';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // нитка розжарення
  ctx.strokeStyle = brightness > 0.01 ? '#f59e0b' : broken ? '#475569' : '#64748b';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  if (broken) {
    ctx.moveTo(x - r * 0.4, y + r * 0.2);
    ctx.lineTo(x - r * 0.1, y - r * 0.2);
    ctx.moveTo(x + r * 0.1, y - r * 0.1);
    ctx.lineTo(x + r * 0.4, y + r * 0.2);
  } else {
    ctx.moveTo(x - r * 0.4, y + r * 0.3);
    ctx.lineTo(x - r * 0.2, y - r * 0.2);
    ctx.lineTo(x, y + r * 0.2);
    ctx.lineTo(x + r * 0.2, y - r * 0.2);
    ctx.lineTo(x + r * 0.4, y + r * 0.3);
  }
  ctx.stroke();
  if (unscrewed) {
    ctx.fillStyle = '#f87171';
    ctx.font = `bold ${r}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('✖', x, y - r * 1.3);
  }
};

export type Pt = { x: number; y: number };

/** Точка на ламаній на відстані s (0..1) від початку */
export const along = (path: Pt[], s: number): Pt => {
  const lens: number[] = [];
  let total = 0;
  for (let i = 1; i < path.length; i++) {
    const l = Math.hypot(path[i].x - path[i - 1].x, path[i].y - path[i - 1].y);
    lens.push(l);
    total += l;
  }
  let d = (((s % 1) + 1) % 1) * total;
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i]) {
      const k = d / lens[i];
      return { x: path[i].x + (path[i + 1].x - path[i].x) * k, y: path[i].y + (path[i + 1].y - path[i].y) * k };
    }
    d -= lens[i];
  }
  return path[path.length - 1];
};
