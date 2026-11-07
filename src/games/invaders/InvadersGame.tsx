// «Захист галактики» - власна гра в жанрі фіксованого шутера: відбийте хвилі прибульців.
// Керування: кнопки ◀ ▶ та 🔥, або палець/миша по полю (корабель їде за пальцем, дотик - постріл),
//            клавіатура: ←/→ або A/D, Пробіл - постріл, P - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { GameLayout } from '../shared/GameLayout';
import { GameOverlay, GameButton } from '../shared/GameOverlay';
import { PressButton } from '../shared/PressButton';

const W = 480;
const H = 640;
const COLS = 8;
const ROWS = 5;
const SP_X = 44;
const SP_Y = 38;
const INV_W = 30;
const INV_H = 24;
const SHIP_W = 38;
const SHIP_H = 22;
const SHIP_Y = H - 64;
const SHIELD_CELL = 4;
const SHIELD_COLS = 14;
const SHIELD_ROWS = 9;
const START_LIVES = 3;

type Phase = 'ready' | 'playing' | 'paused' | 'over';

interface Bullet {
  x: number;
  y: number;
  vy: number;
}
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  t: number;
  color: string;
}
interface Ufo {
  x: number;
  dir: number;
  points: number;
}
interface World {
  alive: boolean[][];
  gx: number;
  gy: number;
  dir: number;
  anim: number;
  shipX: number;
  targetX: number | null;
  cooldown: number;
  bullets: Bullet[];
  enemyBullets: Bullet[];
  shields: boolean[][][];
  particles: Particle[];
  ufo: Ufo | null;
  ufoTimer: number;
  fireTimer: number;
  respawn: number;
  lives: number;
  score: number;
  level: number;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

const shieldMask = (): boolean[][] => {
  const m: boolean[][] = [];
  for (let r = 0; r < SHIELD_ROWS; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < SHIELD_COLS; c++) {
      let on = true;
      if (r < 2 && (c < 2 - r || c >= SHIELD_COLS - 2 + r)) on = false; // скошені верхні кути
      if (r >= SHIELD_ROWS - 3 && c >= 5 && c < SHIELD_COLS - 5) on = false; // арка знизу
      row.push(on);
    }
    m.push(row);
  }
  return m;
};

const shieldX = (i: number) => 40 + i * ((W - 80 - SHIELD_COLS * SHIELD_CELL) / 3);
const SHIELD_Y = SHIP_Y - 78;

const createWorld = (level: number, score = 0, lives = START_LIVES): World => ({
  alive: Array.from({ length: ROWS }, () => Array(COLS).fill(true)),
  gx: 60,
  gy: 70 + Math.min(5, level - 1) * 14,
  dir: 1,
  anim: 0,
  shipX: W / 2,
  targetX: null,
  cooldown: 0,
  bullets: [],
  enemyBullets: [],
  shields: [0, 1, 2, 3].map(() => shieldMask()),
  particles: [],
  ufo: null,
  ufoTimer: 12 + Math.random() * 10,
  fireTimer: 1,
  respawn: 0,
  lives,
  score,
  level,
});

const burst = (w: World, x: number, y: number, color: string, n = 14) => {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = 40 + Math.random() * 140;
    w.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, t: 0.5 + Math.random() * 0.4, color });
  }
};

const countAlive = (w: World) => w.alive.reduce((s, r) => s + r.filter(Boolean).length, 0);
const invPos = (w: World, r: number, c: number) => ({ x: w.gx + c * SP_X, y: w.gy + r * SP_Y });

// удар по щиту: прибирає клітинки навколо точки
const hitShield = (w: World, bx: number, by: number): boolean => {
  for (let i = 0; i < 4; i++) {
    const sx = shieldX(i);
    if (bx < sx || bx >= sx + SHIELD_COLS * SHIELD_CELL || by < SHIELD_Y || by >= SHIELD_Y + SHIELD_ROWS * SHIELD_CELL) continue;
    const c = Math.floor((bx - sx) / SHIELD_CELL);
    const r = Math.floor((by - SHIELD_Y) / SHIELD_CELL);
    if (!w.shields[i][r][c]) continue;
    for (let rr = r - 1; rr <= r + 1; rr++) {
      for (let cc = c - 1; cc <= c + 1; cc++) {
        if (rr >= 0 && rr < SHIELD_ROWS && cc >= 0 && cc < SHIELD_COLS && (Math.abs(rr - r) + Math.abs(cc - c) < 2 || Math.random() < 0.4)) {
          w.shields[i][rr][cc] = false;
        }
      }
    }
    return true;
  }
  return false;
};

const ROW_COLORS = ['#fde047', '#fde047', '#22d3ee', '#22d3ee', '#f472b6'];

const drawInvader = (ctx: CanvasRenderingContext2D, x: number, y: number, row: number, frame: number) => {
  const type = row < 2 ? 0 : row < 4 ? 1 : 2;
  ctx.fillStyle = ROW_COLORS[row];
  const cx = x + INV_W / 2;
  const sw = frame ? 3 : -3;
  if (type === 0) {
    // жук-квадроцикл: округле тіло, вусики, лапки
    ctx.beginPath();
    ctx.ellipse(cx, y + 11, 13, 9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = ROW_COLORS[row];
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 6, y + 4);
    ctx.lineTo(cx - 10, y - 1 + sw / 3);
    ctx.moveTo(cx + 6, y + 4);
    ctx.lineTo(cx + 10, y - 1 - sw / 3);
    for (let i = -1; i <= 1; i += 2) {
      ctx.moveTo(cx + i * 7, y + 18);
      ctx.lineTo(cx + i * (11 + sw / 2), y + 24);
    }
    ctx.stroke();
  } else if (type === 1) {
    // медуза: купол і щупальця, що хитаються
    ctx.beginPath();
    ctx.arc(cx, y + 11, 13, Math.PI, 0);
    ctx.lineTo(cx + 13, y + 15);
    ctx.lineTo(cx - 13, y + 15);
    ctx.fill();
    ctx.strokeStyle = ROW_COLORS[row];
    ctx.lineWidth = 2.5;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * 5.5, y + 15);
      ctx.quadraticCurveTo(cx + i * 5.5 + sw, y + 20, cx + i * 5.5, y + 24);
      ctx.stroke();
    }
  } else {
    // робот: прямокутна голова, антена, ноги
    ctx.fillRect(x + 3, y + 5, INV_W - 6, 14);
    ctx.fillRect(cx - 1.5, y - 1, 3, 6);
    ctx.beginPath();
    ctx.arc(cx, y - 2, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(x + 6 - sw / 3, y + 19, 5, 5);
    ctx.fillRect(x + INV_W - 11 + sw / 3, y + 19, 5, 5);
  }
  // очі
  ctx.fillStyle = '#0b1220';
  ctx.beginPath();
  ctx.arc(cx - 5, y + 11, 2.4, 0, Math.PI * 2);
  ctx.arc(cx + 5, y + 11, 2.4, 0, Math.PI * 2);
  ctx.fill();
};

const InvadersGame: React.FC = () => {
  const [boxRef, size] = useFitBox(W / H);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const world = useRef<World>(createWorld(1));
  const phaseRef = useRef<Phase>('ready');
  const [phase, setPhaseState] = useState<Phase>('ready');
  const [hud, setHud] = useState({ score: 0, lives: START_LIVES, level: 1 });
  const [best, submitBest] = useHighScore('invaders');
  const input = useRef({ left: false, right: false, fire: false });
  const stars = useRef(
    Array.from({ length: 70 }, (_, i) => ({ x: (i * 97) % W, y: (i * 61) % H, r: 0.5 + ((i * 7) % 10) / 9, a: 0.3 + ((i * 13) % 7) / 10 }))
  );

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    input.current = { left: false, right: false, fire: false };
    setPhaseState(p);
  };
  const syncHud = () => {
    const w = world.current;
    setHud({ score: w.score, lives: w.lives, level: w.level });
  };

  const startGame = () => {
    world.current = createWorld(1);
    syncHud();
    setPhase('playing');
  };

  const togglePause = () => {
    if (phaseRef.current === 'playing') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('playing');
  };

  const shoot = () => {
    const w = world.current;
    if (phaseRef.current !== 'playing' || w.respawn > 0) return;
    if (w.cooldown > 0 || w.bullets.length >= 2) return;
    w.bullets.push({ x: w.shipX, y: SHIP_Y - 8, vy: -540 });
    w.cooldown = 0.32;
  };

  const actions = useRef({ shoot, togglePause });
  actions.current = { shoot, togglePause };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.current.left = true;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') input.current.right = true;
      else if (e.code === 'Space') input.current.fire = true;
      else if (e.code === 'KeyP' || e.code === 'Escape') actions.current.togglePause();
    };
    const up = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.current.left = false;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') input.current.right = false;
      else if (e.code === 'Space') input.current.fire = false;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // ---------- Логіка ----------
  const gameOver = () => {
    submitBest(world.current.score);
    setPhase('over');
  };

  const update = (dt: number) => {
    const w = world.current;
    w.cooldown = Math.max(0, w.cooldown - dt);
    w.respawn = Math.max(0, w.respawn - dt);

    // корабель
    const inp = input.current;
    if (inp.left || inp.right) {
      w.targetX = null;
      w.shipX += ((inp.right ? 1 : 0) - (inp.left ? 1 : 0)) * 280 * dt;
    } else if (w.targetX !== null) {
      const d = w.targetX - w.shipX;
      w.shipX += clamp(d, -420 * dt, 420 * dt);
    }
    w.shipX = clamp(w.shipX, SHIP_W / 2 + 6, W - SHIP_W / 2 - 6);
    if (inp.fire) shoot();

    // формація прибульців
    const total = ROWS * COLS;
    const alive = countAlive(w);
    const speed = 28 + (1 - alive / total) * 130 + (w.level - 1) * 14;
    w.anim += dt * (1.5 + speed / 40);
    w.gx += w.dir * speed * dt;
    let minX = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!w.alive[r][c]) continue;
        const p = invPos(w, r, c);
        minX = Math.min(minX, p.x);
        maxX = Math.max(maxX, p.x + INV_W);
        maxY = Math.max(maxY, p.y + INV_H);
      }
    }
    if ((w.dir > 0 && maxX > W - 8) || (w.dir < 0 && minX < 8)) {
      w.dir *= -1;
      w.gy += 16;
      w.gx += w.dir * 2;
    }
    if (maxY >= SHIP_Y - 4) {
      w.lives = 0;
      syncHud();
      gameOver();
      return;
    }

    // постріли прибульців
    w.fireTimer -= dt;
    const maxBullets = 2 + Math.floor(w.level / 2);
    if (w.fireTimer <= 0 && w.enemyBullets.length < maxBullets && alive > 0) {
      w.fireTimer = Math.max(0.35, 1.1 - w.level * 0.07) * (0.6 + Math.random() * 0.8);
      const col = Math.floor(Math.random() * COLS);
      for (let r = ROWS - 1; r >= 0; r--) {
        if (w.alive[r][col]) {
          const p = invPos(w, r, col);
          w.enemyBullets.push({ x: p.x + INV_W / 2, y: p.y + INV_H, vy: 190 + w.level * 14 });
          break;
        }
      }
    }

    // НЛО
    if (w.ufo) {
      w.ufo.x += w.ufo.dir * 90 * dt;
      if (w.ufo.x < -50 || w.ufo.x > W + 50) w.ufo = null;
    } else {
      w.ufoTimer -= dt;
      if (w.ufoTimer <= 0) {
        const dir = Math.random() < 0.5 ? 1 : -1;
        w.ufo = { x: dir > 0 ? -40 : W + 40, dir, points: [50, 100, 150, 300][Math.floor(Math.random() * 4)] };
        w.ufoTimer = 18 + Math.random() * 12;
      }
    }

    // кулі гравця
    for (const b of w.bullets) b.y += b.vy * dt;
    for (const b of w.bullets) {
      if (b.y < 0) {
        b.y = -999;
        continue;
      }
      if (hitShield(w, b.x, b.y)) {
        b.y = -999;
        continue;
      }
      if (w.ufo && Math.abs(b.x - w.ufo.x) < 20 && Math.abs(b.y - 34) < 12) {
        w.score += w.ufo.points;
        burst(w, w.ufo.x, 34, '#f87171', 22);
        w.ufo = null;
        b.y = -999;
        syncHud();
        continue;
      }
      let hit = false;
      for (let r = 0; r < ROWS && !hit; r++) {
        for (let c = 0; c < COLS && !hit; c++) {
          if (!w.alive[r][c]) continue;
          const p = invPos(w, r, c);
          if (b.x > p.x && b.x < p.x + INV_W && b.y > p.y && b.y < p.y + INV_H) {
            w.alive[r][c] = false;
            w.score += (ROWS - r) * 10;
            burst(w, p.x + INV_W / 2, p.y + INV_H / 2, ROW_COLORS[r]);
            hit = true;
          }
        }
      }
      if (hit) {
        b.y = -999;
        syncHud();
      }
    }
    w.bullets = w.bullets.filter((b) => b.y > -900);

    // кулі прибульців
    for (const b of w.enemyBullets) b.y += b.vy * dt;
    for (const b of w.enemyBullets) {
      if (b.y > H) {
        b.y = 9999;
        continue;
      }
      if (hitShield(w, b.x, b.y + 6)) {
        b.y = 9999;
        continue;
      }
      if (w.respawn <= 0 && Math.abs(b.x - w.shipX) < SHIP_W / 2 && b.y > SHIP_Y - 6 && b.y < SHIP_Y + SHIP_H) {
        b.y = 9999;
        burst(w, w.shipX, SHIP_Y, '#60a5fa', 26);
        w.lives -= 1;
        w.respawn = 1.6;
        w.shipX = W / 2;
        w.enemyBullets = [];
        syncHud();
        if (w.lives <= 0) {
          gameOver();
          return;
        }
        break;
      }
    }
    w.enemyBullets = w.enemyBullets.filter((b) => b.y < 9000);

    // частинки
    for (const p of w.particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.t -= dt;
    }
    w.particles = w.particles.filter((p) => p.t > 0);

    // наступна хвиля
    if (countAlive(w) === 0) {
      world.current = createWorld(w.level + 1, w.score + 100 * w.level, w.lives);
      world.current.shields = w.shields.map((s) => s); // щити зберігаються
      syncHud();
    }
  };

  // ---------- Малювання ----------
  const draw = () => {
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const k = c.width / W;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    const w = world.current;

    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#05081a');
    bg.addColorStop(1, '#16123a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    for (const s of stars.current) {
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fillRect(s.x, s.y, s.r, s.r);
    }

    // щити
    ctx.fillStyle = '#4ade80';
    for (let i = 0; i < 4; i++) {
      const sx = shieldX(i);
      for (let r = 0; r < SHIELD_ROWS; r++) {
        for (let cc = 0; cc < SHIELD_COLS; cc++) {
          if (w.shields[i][r][cc]) ctx.fillRect(sx + cc * SHIELD_CELL, SHIELD_Y + r * SHIELD_CELL, SHIELD_CELL, SHIELD_CELL);
        }
      }
    }

    // прибульці
    const frame = Math.floor(w.anim) % 2;
    for (let r = 0; r < ROWS; r++) {
      for (let cc = 0; cc < COLS; cc++) {
        if (!w.alive[r][cc]) continue;
        const p = invPos(w, r, cc);
        drawInvader(ctx, p.x, p.y, r, frame);
      }
    }

    // НЛО
    if (w.ufo) {
      ctx.fillStyle = '#f87171';
      ctx.beginPath();
      ctx.ellipse(w.ufo.x, 36, 20, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fecaca';
      ctx.beginPath();
      ctx.arc(w.ufo.x, 31, 8, Math.PI, 0);
      ctx.fill();
    }

    // корабель (синьо-жовтий)
    if (w.respawn <= 0 || Math.floor(w.respawn * 10) % 2 === 0) {
      const x = w.shipX;
      ctx.fillStyle = '#2563eb';
      ctx.beginPath();
      ctx.moveTo(x, SHIP_Y - 10);
      ctx.lineTo(x + SHIP_W / 2, SHIP_Y + SHIP_H - 8);
      ctx.lineTo(x + SHIP_W / 2 - 4, SHIP_Y + SHIP_H);
      ctx.lineTo(x - SHIP_W / 2 + 4, SHIP_Y + SHIP_H);
      ctx.lineTo(x - SHIP_W / 2, SHIP_Y + SHIP_H - 8);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#facc15';
      ctx.fillRect(x - SHIP_W / 2 + 4, SHIP_Y + SHIP_H - 9, SHIP_W - 8, 6);
      ctx.fillStyle = '#bfdbfe';
      ctx.beginPath();
      ctx.arc(x, SHIP_Y + 4, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // кулі
    ctx.fillStyle = '#fef08a';
    for (const b of w.bullets) ctx.fillRect(b.x - 1.5, b.y - 8, 3, 12);
    ctx.fillStyle = '#fb7185';
    for (const b of w.enemyBullets) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const p of w.particles) {
      ctx.globalAlpha = Math.min(1, p.t * 2);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
    }
    ctx.globalAlpha = 1;

    // лінія землі
    ctx.fillStyle = 'rgba(96,165,250,0.5)';
    ctx.fillRect(0, SHIP_Y + SHIP_H + 8, W, 2);
  };

  useGameLoop((dt) => {
    if (phaseRef.current === 'playing') update(dt);
    draw();
  });

  // ---------- Палець / миша ----------
  const pointerToX = (e: React.PointerEvent<HTMLCanvasElement>): number => {
    const r = e.currentTarget.getBoundingClientRect();
    return ((e.clientX - r.left) / r.width) * W;
  };

  const dpr = getDpr();
  const statBox = 'bg-slate-800/80 rounded-xl px-4 py-2 text-white';
  const info = (
    <div className="flex flex-col gap-2 w-full min-w-[9rem]">
      <div className={statBox}>
        <div className="text-xs text-slate-400">Рахунок</div>
        <div className="text-2xl font-bold">{hud.score}</div>
      </div>
      <div className="flex gap-2">
        <div className={`${statBox} flex-1`}>
          <div className="text-xs text-slate-400">Хвиля</div>
          <div className="text-xl font-bold">{hud.level}</div>
        </div>
        <div className={`${statBox} flex-1`}>
          <div className="text-xs text-slate-400">Життя</div>
          <div className="text-xl font-bold">{'❤️'.repeat(Math.max(0, hud.lives))}</div>
        </div>
      </div>
      <div className={statBox}>
        <div className="text-xs text-slate-400">Рекорд</div>
        <div className="text-xl font-bold">{best}</div>
      </div>
      {phase === 'playing' && (
        <button onClick={togglePause} className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-2 font-semibold">
          ⏸ Пауза
        </button>
      )}
    </div>
  );

  const btn = 'bg-blue-600 hover:bg-blue-500 active:bg-blue-800 rounded-2xl text-3xl';
  const controls = (
    <div className="flex flex-col items-center gap-3">
      <PressButton onDown={() => (input.current.fire = true)} onUp={() => (input.current.fire = false)} className="bg-orange-500 hover:bg-orange-400 active:bg-orange-700 rounded-full w-24 h-24 text-4xl" label="Вогонь">
        🔥
      </PressButton>
      <div className="flex gap-3">
        <PressButton onDown={() => (input.current.left = true)} onUp={() => (input.current.left = false)} className={`${btn} w-[4.5rem] h-[4.5rem]`} label="Вліво">
          ◀
        </PressButton>
        <PressButton onDown={() => (input.current.right = true)} onUp={() => (input.current.right = false)} className={`${btn} w-[4.5rem] h-[4.5rem]`} label="Вправо">
          ▶
        </PressButton>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full">
      <GameLayout info={info} controls={controls}>
        <div ref={boxRef} className="w-full h-full flex items-center justify-center">
          {size.w > 0 && (
            <canvas
              ref={canvasRef}
              width={size.w * dpr}
              height={size.h * dpr}
              style={{ width: size.w, height: size.h, touchAction: 'none' }}
              className="rounded-xl shadow-2xl border border-white/10"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                world.current.targetX = pointerToX(e);
                shoot();
              }}
              onPointerMove={(e) => {
                if (e.buttons > 0 || e.pointerType === 'touch') world.current.targetX = pointerToX(e);
              }}
            />
          )}
        </div>
      </GameLayout>

      {phase === 'ready' && (
        <GameOverlay title="👾 Захист галактики">
          <p className="text-slate-300">Прибульці вторгаються! Збивайте їх, ховайтеся за щитами й не пропустіть до землі.</p>
          <p className="text-sm text-slate-400">Кнопки ◀ ▶ 🔥, або ведіть пальцем по полю. Клавіатура: ← → та Пробіл.</p>
          <GameButton onClick={startGame}>▶ Грати</GameButton>
        </GameOverlay>
      )}
      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={togglePause}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={startGame}>
            🔁 Почати спочатку
          </GameButton>
        </GameOverlay>
      )}
      {phase === 'over' && (
        <GameOverlay title="Гру завершено">
          <p className="text-2xl font-bold">Рахунок: {hud.score}</p>
          <p className="text-slate-300">Хвиля: {hud.level} · Рекорд: {Math.max(best, hud.score)}</p>
          <GameButton onClick={startGame}>🔁 Ще раз</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default InvadersGame;
