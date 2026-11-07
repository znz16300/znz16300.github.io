// Спільна сцена грози для лабораторії й гри (малювання + математика).

export const SOUND_SPEED = 343; // м/с у повітрі при ≈20 °C
export const LIGHT_SPEED = 299_792_458; // м/с

/** Час, за який грім долітає з відстані d (км) */
export const thunderDelay = (distKm: number): number => (distKm * 1000) / SOUND_SPEED;
/** Відстань (км) за затримкою грому (с) */
export const distanceFromDelay = (sec: number): number => (sec * SOUND_SPEED) / 1000;

export interface Bolt {
  pts: { x: number; y: number }[];
  branch: { x: number; y: number }[];
}

/** Зигзаг блискавки у відносних координатах 0..1 (від хмари до землі) */
export const makeBolt = (): Bolt => {
  const pts: { x: number; y: number }[] = [];
  let x = 0;
  const n = 9;
  for (let i = 0; i <= n; i++) {
    pts.push({ x, y: i / n });
    x += (Math.random() - 0.5) * 0.12;
  }
  const k = 3 + Math.floor(Math.random() * 3);
  const base = pts[k];
  const branch = [base, { x: base.x + 0.08, y: base.y + 0.08 }, { x: base.x + 0.05, y: base.y + 0.18 }, { x: base.x + 0.12, y: base.y + 0.26 }];
  return { pts, branch };
};

export interface SceneState {
  /** 0..1 - яскравість спалаху (згасає) */
  flash: number;
  /** 0..1 - тремтіння від грому */
  shake: number;
  bolt: Bolt | null;
  /** 0..1 - де зараз звукова хвиля на шляху від грози до глядача (null - не показувати) */
  soundFrac: number | null;
  /** відстань, км (для підписів) */
  distKm: number;
  /** Показувати підписи "світло / звук" */
  showTrack: boolean;
  /** Темність неба 0..1 */
  dark: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function drawStorm(ctx: CanvasRenderingContext2D, w: number, h: number, s: SceneState): void {
  ctx.save();
  if (s.shake > 0) ctx.translate((Math.random() - 0.5) * 8 * s.shake, (Math.random() - 0.5) * 8 * s.shake);

  const groundY = h * 0.72;
  // небо
  const sky = ctx.createLinearGradient(0, 0, 0, groundY);
  const d = s.dark;
  sky.addColorStop(0, `rgb(${lerp(70, 15, d)},${lerp(90, 20, d)},${lerp(140, 40, d)})`);
  sky.addColorStop(1, `rgb(${lerp(150, 50, d)},${lerp(180, 60, d)},${lerp(220, 90, d)})`);
  ctx.fillStyle = sky;
  ctx.fillRect(-10, -10, w + 20, groundY + 10);
  // земля
  ctx.fillStyle = '#14532d';
  ctx.fillRect(-10, groundY, w + 20, h - groundY + 10);

  // грозова хмара справа (чим далі - тим менша)
  const near = Math.max(0.35, 1 - s.distKm / 12);
  const cx = w * 0.82;
  const cy = h * 0.2;
  const cr = h * 0.17 * (0.6 + near * 0.6);
  ctx.fillStyle = `rgba(${lerp(90, 40, d)},${lerp(95, 45, d)},${lerp(110, 60, d)},1)`;
  [[-1.4, 0.3, 0.9], [-0.5, -0.1, 1.1], [0.5, 0, 1.2], [1.4, 0.3, 0.9], [0, 0.35, 1.2]].forEach(([dx, dy, k]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * cr, cy + dy * cr, cr * k, 0, Math.PI * 2);
    ctx.fill();
  });

  // блискавка
  if (s.bolt && s.flash > 0) {
    const bx = cx;
    const by0 = cy + cr * 0.6;
    const len = groundY - by0;
    const draw = (pts: { x: number; y: number }[], lw: number) => {
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(bx + p.x * len, by0 + p.y * len) : ctx.moveTo(bx + p.x * len, by0 + p.y * len)));
      ctx.lineWidth = lw;
      ctx.stroke();
    };
    ctx.lineJoin = 'round';
    ctx.strokeStyle = `rgba(253,224,71,${s.flash * 0.6})`;
    draw(s.bolt.pts, 10);
    ctx.strokeStyle = `rgba(255,255,255,${Math.min(1, s.flash * 1.4)})`;
    draw(s.bolt.pts, 3.5);
    draw(s.bolt.branch, 2);
  }

  // спостерігач (ліворуч) та будиночок
  const ox = w * 0.1;
  ctx.fillStyle = '#7c2d12';
  ctx.fillRect(ox - 34, groundY - 38, 68, 38);
  ctx.fillStyle = '#b91c1c';
  ctx.beginPath();
  ctx.moveTo(ox - 42, groundY - 38);
  ctx.lineTo(ox, groundY - 70);
  ctx.lineTo(ox + 42, groundY - 38);
  ctx.fill();
  ctx.fillStyle = '#fde68a';
  ctx.fillRect(ox - 8, groundY - 28, 16, 16);
  ctx.font = `${Math.max(20, h * 0.08)}px system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('🧍', ox + 60, groundY);

  // шлях звуку
  const trackY = h * 0.86;
  const x0 = ox;
  const x1 = cx;
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(x0, trackY);
  ctx.lineTo(x1, trackY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#fff';
  ctx.font = `${Math.max(12, h * 0.045)}px system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(`${s.distKm.toLocaleString('uk-UA', { maximumFractionDigits: 1 })} км`, (x0 + x1) / 2, trackY - 10);
  if (s.showTrack) {
    ctx.fillStyle = 'rgba(253,224,71,0.95)';
    ctx.textAlign = 'left';
    ctx.fillText('⚡ світло - практично миттєво', x0, trackY + h * 0.07);
  }
  if (s.soundFrac != null) {
    const px = x1 - (x1 - x0) * s.soundFrac;
    ctx.strokeStyle = 'rgba(96,165,250,0.9)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(px, trackY, 6 + i * 7, -0.9, 0.9);
      ctx.stroke();
    }
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(px, trackY, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // спалах на весь екран
  if (s.flash > 0) {
    ctx.fillStyle = `rgba(255,255,255,${Math.min(0.55, s.flash * 0.55)})`;
    ctx.fillRect(-10, -10, w + 20, h + 20);
  }
  ctx.restore();
}
