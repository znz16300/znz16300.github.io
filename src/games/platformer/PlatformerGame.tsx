// «Лисик-стрибун» - власна гра-платформер (оригінальний герой і рівні).
// Керування: екранні кнопки ◀ ▶ та «стрибок» (можна одночасно, чим довше тримаєте - тим вищий стрибок);
//            клавіатура: ←/→ або A/D, Пробіл/↑/W - стрибок, P/Esc - пауза.
// Мета: збирати монети, стрибати ворогам на голову, дійти до прапорця. Падіння в прірву або дотик збоку - мінус життя.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { GameOverlay, GameButton } from '../shared/GameOverlay';
import { PressButton } from '../shared/PressButton';
import { LEVELS, TILE as T, ROWS, GROUND_ROW, LevelDef } from './levels';

const VIEW_W = 800;
const VIEW_H = ROWS * T; // 448

const MAX_SPEED = 215;
const ACCEL = 1500;
const FRICTION = 1700;
const GRAVITY = 1800;
const JUMP_V = -650;
const JUMP_CUT = -330;
const MAX_FALL = 900;
const COYOTE = 0.1;
const JUMP_BUFFER = 0.12;
const ENEMY_SPEED = 60;
const START_LIVES = 3;

type Phase = 'ready' | 'playing' | 'paused' | 'levelDone' | 'won' | 'over';

interface Body {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  onGround: boolean;
}
interface Enemy extends Body {
  dir: number;
  alive: boolean;
  squish: number;
}
interface Coin {
  x: number;
  y: number;
  got: boolean;
}
interface Popup {
  x: number;
  y: number;
  text: string;
  t: number;
}
interface Level {
  def: LevelDef;
  w: number;
  tiles: string[][];
}
interface World {
  L: Level;
  coins: Coin[];
  enemies: Enemy[];
  p: Body & { face: number };
  popups: Popup[];
  camX: number;
  t: number;
  invuln: number;
  coyote: number;
  jumpBuf: number;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

// ---------- Побудова рівня ----------
const buildLevel = (def: LevelDef): { L: Level; coins: Coin[] } => {
  const tiles: string[][] = Array.from({ length: ROWS }, () => Array(def.width).fill(' '));
  const inGap = (x: number) => def.gaps.some(([a, b]) => x >= a && x <= b);
  for (let x = 0; x < def.width; x++) {
    if (!inGap(x)) {
      tiles[GROUND_ROW][x] = '#';
      tiles[GROUND_ROW + 1][x] = '#';
    }
  }
  def.platforms.forEach((p) => {
    for (let i = 0; i < p.s.length; i++) if (p.s[i] !== ' ') tiles[p.y][p.x + i] = p.s[i];
  });

  const coins: Coin[] = [];
  const addCoin = (x: number, y: number) => {
    if (x >= 0 && x < def.width && tiles[y][x] === ' ') coins.push({ x: x * T + T / 2, y: y * T + T / 2, got: false });
  };
  // монети: над прірвами, над платформами, кілька на землі
  def.gaps.forEach(([a, b]) => {
    for (let x = a - 1; x <= b + 1; x++) addCoin(x, 10);
  });
  def.platforms.forEach((p) => {
    if (p.y === 8) return;
    for (let i = 0; i < p.s.length; i++) if (p.s[i] === 'B') addCoin(p.x + i, p.y - 1);
  });
  for (let x = 6; x < def.width - 8; x += 17) for (let i = 0; i < 3; i++) addCoin(x + i, 11);
  return { L: { def, w: def.width, tiles }, coins };
};

const isSolid = (c: string) => c === '#' || c === 'B' || c === '?' || c === 'U';
const tileAt = (L: Level, tx: number, ty: number): string => {
  if (tx < 0 || tx >= L.w) return '#';
  if (ty < 0 || ty >= ROWS) return ' ';
  return L.tiles[ty][tx];
};

// Рух тіла з розв'язанням зіткнень із плитками. Повертає true, якщо вдарилося збоку.
const moveBody = (L: Level, b: Body, dt: number, onBump?: (tx: number, ty: number) => void): boolean => {
  let hitX = false;
  b.x += b.vx * dt;
  let x0 = Math.floor(b.x / T);
  let x1 = Math.floor((b.x + b.w - 0.01) / T);
  let y0 = Math.floor(b.y / T);
  let y1 = Math.floor((b.y + b.h - 0.01) / T);
  for (let ty = y0; ty <= y1; ty++) {
    for (let tx = x0; tx <= x1; tx++) {
      if (!isSolid(tileAt(L, tx, ty))) continue;
      if (b.vx > 0) b.x = tx * T - b.w;
      else if (b.vx < 0) b.x = (tx + 1) * T;
      b.vx = 0;
      hitX = true;
    }
  }
  b.y += b.vy * dt;
  b.onGround = false;
  x0 = Math.floor(b.x / T);
  x1 = Math.floor((b.x + b.w - 0.01) / T);
  y0 = Math.floor(b.y / T);
  y1 = Math.floor((b.y + b.h - 0.01) / T);
  for (let ty = y0; ty <= y1; ty++) {
    for (let tx = x0; tx <= x1; tx++) {
      if (!isSolid(tileAt(L, tx, ty))) continue;
      if (b.vy > 0) {
        b.y = ty * T - b.h;
        b.vy = 0;
        b.onGround = true;
      } else if (b.vy < 0) {
        b.y = (ty + 1) * T;
        b.vy = 0;
        if (onBump) onBump(tx, ty);
      }
    }
  }
  return hitX;
};

const createWorld = (levelIdx: number): World => {
  const { L, coins } = buildLevel(LEVELS[levelIdx]);
  const enemies: Enemy[] = LEVELS[levelIdx].enemies.map((cx) => ({
    x: cx * T + 2,
    y: (GROUND_ROW - 1) * T + 8,
    w: 28,
    h: 24,
    vx: 0,
    vy: 0,
    onGround: false,
    dir: -1,
    alive: true,
    squish: 0,
  }));
  return {
    L,
    coins,
    enemies,
    p: { x: 2 * T, y: (GROUND_ROW - 1) * T, w: 24, h: 30, vx: 0, vy: 0, onGround: false, face: 1 },
    popups: [],
    camX: 0,
    t: 0,
    invuln: 0,
    coyote: 0,
    jumpBuf: 0,
  };
};

const PlatformerGame: React.FC = () => {
  const [boxRef, size] = useFitBox(VIEW_W / VIEW_H);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>('ready');
  const [phase, setPhaseState] = useState<Phase>('ready');
  const [levelIdx, setLevelIdx] = useState(0);
  const levelRef = useRef(0);
  const world = useRef<World>(createWorld(0));
  const stats = useRef({ score: 0, lives: START_LIVES, coins: 0 });
  const input = useRef({ left: false, right: false, jump: false });
  const [best, submitBest] = useHighScore('platformer');

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    input.current = { left: false, right: false, jump: false };
    setPhaseState(p);
  };

  const startLevel = (idx: number) => {
    levelRef.current = idx;
    setLevelIdx(idx);
    world.current = createWorld(idx);
    setPhase('playing');
  };

  const newGame = () => {
    stats.current = { score: 0, lives: START_LIVES, coins: 0 };
    startLevel(0);
  };

  const nextLevel = () => startLevel(levelRef.current + 1);

  const pressJump = () => {
    if (phaseRef.current !== 'playing') return;
    input.current.jump = true;
    world.current.jumpBuf = JUMP_BUFFER;
  };
  const releaseJump = () => {
    input.current.jump = false;
  };
  const togglePause = () => {
    if (phaseRef.current === 'playing') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('playing');
  };

  const actions = useRef({ pressJump, togglePause });
  actions.current = { pressJump, togglePause };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.current.left = true;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') input.current.right = true;
      else if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        if (!e.repeat) actions.current.pressJump();
        input.current.jump = true;
      } else if (e.code === 'KeyP' || e.code === 'Escape') actions.current.togglePause();
    };
    const up = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.current.left = false;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') input.current.right = false;
      else if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') input.current.jump = false;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // ---------- Логіка ----------
  const loseLife = () => {
    const w = world.current;
    stats.current.lives -= 1;
    if (stats.current.lives <= 0) {
      submitBest(stats.current.score);
      setPhase('over');
      return;
    }
    w.p.x = 2 * T;
    w.p.y = (GROUND_ROW - 1) * T;
    w.p.vx = 0;
    w.p.vy = 0;
    w.invuln = 1.6;
    w.camX = 0;
  };

  const update = (dt: number) => {
    const w = world.current;
    const p = w.p;
    const inp = input.current;
    w.t += dt;
    w.invuln = Math.max(0, w.invuln - dt);
    w.jumpBuf = Math.max(0, w.jumpBuf - dt);

    // горизонтальний рух
    const dir = (inp.right ? 1 : 0) - (inp.left ? 1 : 0);
    const control = p.onGround ? 1 : 0.75;
    if (dir !== 0) {
      p.face = dir;
      if (Math.sign(p.vx) !== dir) p.vx += dir * ACCEL * 1.6 * control * dt;
      else p.vx += dir * ACCEL * control * dt;
      p.vx = clamp(p.vx, -MAX_SPEED, MAX_SPEED);
    } else {
      const f = FRICTION * dt;
      p.vx = Math.abs(p.vx) <= f ? 0 : p.vx - Math.sign(p.vx) * f;
    }

    // стрибок (coyote time + буфер натискання)
    if (p.onGround) w.coyote = COYOTE;
    else w.coyote = Math.max(0, w.coyote - dt);
    if (w.jumpBuf > 0 && w.coyote > 0) {
      p.vy = JUMP_V;
      w.coyote = 0;
      w.jumpBuf = 0;
    }
    if (!inp.jump && p.vy < JUMP_CUT) p.vy = JUMP_CUT; // коротке натискання - низький стрибок

    p.vy = Math.min(MAX_FALL, p.vy + GRAVITY * dt);

    moveBody(w.L, p, dt, (tx, ty) => {
      if (w.L.tiles[ty][tx] === '?') {
        w.L.tiles[ty][tx] = 'U';
        stats.current.coins += 1;
        stats.current.score += 100;
        w.popups.push({ x: tx * T + T / 2, y: ty * T - 4, text: '+100', t: 0 });
      }
    });

    // падіння в прірву
    if (p.y > ROWS * T + 80) {
      loseLife();
      return;
    }

    // камера
    const target = clamp(p.x + p.w / 2 - VIEW_W * 0.4, 0, w.L.w * T - VIEW_W);
    w.camX += (target - w.camX) * Math.min(1, dt * 8);

    // монети
    for (const c of w.coins) {
      if (c.got) continue;
      if (Math.abs(c.x - (p.x + p.w / 2)) < 18 && Math.abs(c.y - (p.y + p.h / 2)) < 22) {
        c.got = true;
        stats.current.coins += 1;
        stats.current.score += 100;
        w.popups.push({ x: c.x, y: c.y - 10, text: '+100', t: 0 });
      }
    }

    // вороги
    const camCenter = w.camX + VIEW_W / 2;
    for (const e of w.enemies) {
      if (!e.alive) {
        e.squish += dt;
        continue;
      }
      if (Math.abs(e.x - camCenter) > 560) continue; // далекі вороги «сплять»
      if (e.onGround) {
        const fx = e.dir > 0 ? e.x + e.w + 1 : e.x - 1;
        if (!isSolid(tileAt(w.L, Math.floor(fx / T), Math.floor((e.y + e.h + 2) / T)))) e.dir *= -1;
      }
      e.vx = e.dir * ENEMY_SPEED;
      e.vy = Math.min(MAX_FALL, e.vy + GRAVITY * dt);
      if (moveBody(w.L, e, dt)) e.dir *= -1;
      if (e.y > ROWS * T + 80) e.alive = false;

      // зіткнення з гравцем
      if (p.x < e.x + e.w && p.x + p.w > e.x && p.y < e.y + e.h && p.y + p.h > e.y) {
        if (p.vy > 0 && p.y + p.h - e.y < 18) {
          e.alive = false;
          e.squish = 0;
          p.vy = inp.jump ? -560 : -380;
          stats.current.score += 200;
          w.popups.push({ x: e.x + e.w / 2, y: e.y - 6, text: '+200', t: 0 });
        } else if (w.invuln <= 0) {
          loseLife();
          return;
        }
      }
    }

    // фініш
    const fx = w.L.def.flag * T;
    if (p.x + p.w > fx && p.x < fx + 16 && p.y + p.h > (GROUND_ROW - 5) * T) {
      stats.current.score += 500;
      if (levelRef.current >= LEVELS.length - 1) {
        submitBest(stats.current.score);
        setPhase('won');
      } else setPhase('levelDone');
      return;
    }

    w.popups.forEach((q) => {
      q.t += dt;
      q.y -= 40 * dt;
    });
    w.popups = w.popups.filter((q) => q.t < 0.8);
  };

  // ---------- Малювання ----------
  const draw = () => {
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const k = c.width / VIEW_W;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    const w = world.current;
    const cam = Math.round(w.camX);

    // небо
    const sky = ctx.createLinearGradient(0, 0, 0, VIEW_H);
    sky.addColorStop(0, '#60a5fa');
    sky.addColorStop(1, '#dbeafe');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, VIEW_W, VIEW_H);

    // пагорби (паралакс)
    ctx.fillStyle = '#86efac';
    for (let i = 0; i < 10; i++) {
      const x = ((((i * 420 - cam * 0.5) % 4200) + 4200) % 4200) - 300;
      ctx.beginPath();
      ctx.ellipse(x, GROUND_ROW * T, 200, 90 + (i % 3) * 30, 0, Math.PI, 0);
      ctx.fill();
    }
    // хмари
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    for (let i = 0; i < 12; i++) {
      const x = ((((i * 300 - cam * 0.3) % 3600) + 3600) % 3600) - 200;
      const y = 40 + (i % 3) * 45;
      ctx.beginPath();
      ctx.ellipse(x, y, 46, 16, 0, 0, Math.PI * 2);
      ctx.ellipse(x + 26, y - 10, 30, 14, 0, 0, Math.PI * 2);
      ctx.ellipse(x - 24, y - 6, 26, 12, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // плитки
    const tx0 = Math.max(0, Math.floor(cam / T));
    const tx1 = Math.min(w.L.w - 1, Math.floor((cam + VIEW_W) / T));
    for (let ty = 0; ty < ROWS; ty++) {
      for (let tx = tx0; tx <= tx1; tx++) {
        const ch = w.L.tiles[ty][tx];
        if (ch === ' ') continue;
        const x = tx * T - cam;
        const y = ty * T;
        if (ch === '#') {
          ctx.fillStyle = '#a16207';
          ctx.fillRect(x, y, T, T);
          ctx.fillStyle = '#854d0e';
          ctx.fillRect(x + 6, y + 14, 6, 6);
          ctx.fillRect(x + 20, y + 22, 6, 5);
          if (!isSolid(tileAt(w.L, tx, ty - 1))) {
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(x, y, T, 9);
            ctx.fillStyle = '#16a34a';
            ctx.fillRect(x, y + 9, T, 3);
          }
        } else if (ch === 'B') {
          ctx.fillStyle = '#c2410c';
          ctx.fillRect(x, y, T, T);
          ctx.strokeStyle = '#7c2d12';
          ctx.lineWidth = 2;
          ctx.strokeRect(x + 1, y + 1, T - 2, T - 2);
          ctx.beginPath();
          ctx.moveTo(x, y + T / 2);
          ctx.lineTo(x + T, y + T / 2);
          ctx.moveTo(x + T / 2, y);
          ctx.lineTo(x + T / 2, y + T / 2);
          ctx.moveTo(x + T / 4, y + T / 2);
          ctx.lineTo(x + T / 4, y + T);
          ctx.moveTo(x + (T * 3) / 4, y + T / 2);
          ctx.lineTo(x + (T * 3) / 4, y + T);
          ctx.stroke();
        } else if (ch === '?' || ch === 'U') {
          ctx.fillStyle = ch === '?' ? '#facc15' : '#78716c';
          ctx.fillRect(x, y, T, T);
          ctx.strokeStyle = ch === '?' ? '#a16207' : '#44403c';
          ctx.lineWidth = 2;
          ctx.strokeRect(x + 1, y + 1, T - 2, T - 2);
          if (ch === '?') {
            ctx.fillStyle = '#7c2d12';
            ctx.font = 'bold 22px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('?', x + T / 2, y + 24);
          }
        }
      }
    }

    // фініш: прапорець
    const fx = w.L.def.flag * T - cam;
    const fyTop = (GROUND_ROW - 5) * T;
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(fx + 6, fyTop, 4, 5 * T);
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(fx + 8, fyTop, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ef4444';
    const wave = Math.sin(w.t * 5) * 3;
    ctx.beginPath();
    ctx.moveTo(fx + 10, fyTop + 6);
    ctx.lineTo(fx + 44, fyTop + 20 + wave);
    ctx.lineTo(fx + 10, fyTop + 34);
    ctx.fill();

    // монети
    for (const co of w.coins) {
      if (co.got) continue;
      const x = co.x - cam;
      if (x < -20 || x > VIEW_W + 20) continue;
      const sx = Math.abs(Math.cos(w.t * 5 + co.x * 0.05));
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.ellipse(x, co.y, 9 * Math.max(0.2, sx), 11, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // вороги
    for (const e of w.enemies) {
      const x = e.x - cam;
      if (x < -40 || x > VIEW_W + 40) continue;
      if (!e.alive) {
        if (e.squish < 0.5) {
          ctx.fillStyle = '#7c3aed';
          ctx.fillRect(x, e.y + e.h - 8, e.w, 8);
        }
        continue;
      }
      const step = Math.sin(w.t * 12 + e.x) * 2;
      ctx.fillStyle = '#4c1d95';
      ctx.fillRect(x + 3, e.y + e.h - 4, 8, 4 + step);
      ctx.fillRect(x + e.w - 11, e.y + e.h - 4, 8, 4 - step);
      ctx.fillStyle = '#7c3aed';
      ctx.beginPath();
      ctx.ellipse(x + e.w / 2, e.y + e.h / 2 - 1, e.w / 2, e.h / 2 - 1, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x + 9, e.y + 9, 4.5, 0, Math.PI * 2);
      ctx.arc(x + e.w - 9, e.y + 9, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.arc(x + 9 + e.dir * 1.5, e.y + 10, 2, 0, Math.PI * 2);
      ctx.arc(x + e.w - 9 + e.dir * 1.5, e.y + 10, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#111827';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + 4, e.y + 3);
      ctx.lineTo(x + 12, e.y + 6);
      ctx.moveTo(x + e.w - 4, e.y + 3);
      ctx.lineTo(x + e.w - 12, e.y + 6);
      ctx.stroke();
    }

    // гравець - лисик
    const p = w.p;
    const blink = w.invuln > 0 && Math.floor(w.t * 14) % 2 === 0;
    if (!blink) {
      const swing = p.onGround && Math.abs(p.vx) > 20 ? Math.sin(w.t * 18) * 4 : 0;
      ctx.save();
      ctx.translate(Math.round(p.x - cam + p.w / 2), Math.round(p.y));
      ctx.scale(p.face, 1);
      // хвіст
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.ellipse(-14, 18 + Math.sin(w.t * 8) * 1.5, 9, 5, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-20, 14 + Math.sin(w.t * 8) * 1.5, 4, 3, -0.5, 0, Math.PI * 2);
      ctx.fill();
      // ноги
      ctx.fillStyle = '#7c2d12';
      ctx.fillRect(-8 + swing, 25, 6, 5);
      ctx.fillRect(3 - swing, 25, 6, 5);
      // тулуб
      ctx.fillStyle = '#f97316';
      ctx.fillRect(-10, 13, 20, 14);
      ctx.fillStyle = '#fff7ed';
      ctx.fillRect(1, 17, 8, 9);
      // вуха
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.moveTo(-9, 6);
      ctx.lineTo(-6, -6);
      ctx.lineTo(-1, 4);
      ctx.moveTo(3, 4);
      ctx.lineTo(8, -6);
      ctx.lineTo(11, 6);
      ctx.fill();
      // голова
      ctx.beginPath();
      ctx.ellipse(1, 11, 12, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff7ed';
      ctx.beginPath();
      ctx.ellipse(8, 14, 6, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.arc(12, 12, 2, 0, Math.PI * 2);
      ctx.arc(5, 8, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // спливаючі очки
    ctx.textAlign = 'center';
    ctx.font = 'bold 16px sans-serif';
    for (const q of w.popups) {
      ctx.globalAlpha = 1 - q.t / 0.8;
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 3;
      ctx.strokeText(q.text, q.x - cam, q.y);
      ctx.fillText(q.text, q.x - cam, q.y);
    }
    ctx.globalAlpha = 1;

    // HUD
    const s = stats.current;
    ctx.fillStyle = 'rgba(15,23,42,0.55)';
    ctx.fillRect(8, 8, 330, 34);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`🪙 ${s.coins}   ⭐ ${s.score}   ${'❤️'.repeat(Math.max(0, s.lives))}`, 18, 32);
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(15,23,42,0.55)';
    ctx.fillRect(VIEW_W - 218, 8, 210, 34);
    ctx.fillStyle = '#fff';
    ctx.fillText(`Рівень ${levelRef.current + 1}/${LEVELS.length}`, VIEW_W - 18, 32);
  };

  useGameLoop((dt) => {
    if (phaseRef.current === 'playing') update(dt);
    draw();
  });

  const dpr = getDpr();
  const padBtn = 'bg-white/25 hover:bg-white/35 active:bg-white/50 backdrop-blur-sm border border-white/30';

  return (
    <div className="relative w-full h-full p-2">
      <div ref={boxRef} className="w-full h-full flex items-center justify-center">
        {size.w > 0 && (
          <canvas
            ref={canvasRef}
            width={size.w * dpr}
            height={size.h * dpr}
            style={{ width: size.w, height: size.h }}
            className="rounded-xl shadow-2xl border border-white/10"
          />
        )}
      </div>

      {/* Сенсорне керування */}
      {(phase === 'playing' || phase === 'paused') && (
        <>
          <div className="absolute bottom-4 left-4 z-20 flex gap-3">
            <PressButton
              onDown={() => (input.current.left = true)}
              onUp={() => (input.current.left = false)}
              className={`${padBtn} w-20 h-20 rounded-2xl text-4xl`}
              label="Вліво"
            >
              ◀
            </PressButton>
            <PressButton
              onDown={() => (input.current.right = true)}
              onUp={() => (input.current.right = false)}
              className={`${padBtn} w-20 h-20 rounded-2xl text-4xl`}
              label="Вправо"
            >
              ▶
            </PressButton>
          </div>
          <div className="absolute bottom-4 right-4 z-20">
            <PressButton onDown={pressJump} onUp={releaseJump} className={`${padBtn} w-24 h-24 rounded-full text-4xl`} label="Стрибок">
              ⤒
            </PressButton>
          </div>
          <button
            onClick={togglePause}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white text-lg"
            aria-label="Пауза"
          >
            ⏸
          </button>
        </>
      )}

      {phase === 'ready' && (
        <GameOverlay title="🦊 Лисик-стрибун">
          <p className="text-slate-300">
            Біжіть вправо, збирайте монети, стрибайте ворогам на голову й дійдіть до прапорця. Рівнів: {LEVELS.length}.
          </p>
          <p className="text-sm text-slate-400">
            Кнопки ◀ ▶ та ⤒ (стрибок: чим довше тримаєте, тим вище). Клавіатура: ← → та Пробіл.
          </p>
          <p className="text-sm text-slate-400">Рекорд: {best}</p>
          <GameButton onClick={newGame}>▶ Грати</GameButton>
        </GameOverlay>
      )}
      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={togglePause}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={newGame}>
            🔁 Почати спочатку
          </GameButton>
        </GameOverlay>
      )}
      {phase === 'levelDone' && (
        <GameOverlay title="🎉 Рівень пройдено!">
          <p className="text-slate-300">«{LEVELS[levelIdx].name}»</p>
          <p className="text-2xl font-bold">Рахунок: {stats.current.score}</p>
          <GameButton onClick={nextLevel}>Далі ▶</GameButton>
        </GameOverlay>
      )}
      {phase === 'won' && (
        <GameOverlay title="🏆 Перемога!">
          <p className="text-2xl font-bold">Рахунок: {stats.current.score}</p>
          <p className="text-slate-300">Монет: {stats.current.coins} · Рекорд: {Math.max(best, stats.current.score)}</p>
          <GameButton onClick={newGame}>🔁 Грати знову</GameButton>
        </GameOverlay>
      )}
      {phase === 'over' && (
        <GameOverlay title="Гру завершено">
          <p className="text-2xl font-bold">Рахунок: {stats.current.score}</p>
          <p className="text-slate-300">Рекорд: {Math.max(best, stats.current.score)}</p>
          <GameButton onClick={newGame}>🔁 Ще раз</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default PlatformerGame;
