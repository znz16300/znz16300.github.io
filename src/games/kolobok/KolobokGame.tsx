// «Колобок у лабіринті» - власна гра в жанрі лабіринтної погоні за мотивами української казки.
// Збирайте зернята, а від Лисиці, Вовка, Ведмедя й Зайця тікайте. З'їли калину - звірі лякаються, і їх можна «спіймати».
// Керування: свайп по полю, екранні стрілки, клавіатура (стрілки / WASD), Пробіл - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { GameLayout } from '../shared/GameLayout';
import { GameOverlay, GameButton } from '../shared/GameOverlay';
import { HoldButton } from '../shared/HoldButton';
import { MAZE } from './maze';
import { createState, updateState, setDesired, posOf, State, Ghost, Dir, COLS, ROWS, UP, DOWN, LEFT, RIGHT, GHOST_NAMES } from './engine';

const T = 24;
const W = COLS * T;
const H = ROWS * T;
const SWIPE_MIN = 18;

type Phase = 'ready' | 'playing' | 'paused' | 'over';

const isWall = (c: number, r: number) => (MAZE[r]?.[c] ?? ' ') === '#';

const drawAnimal = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  g: Ghost,
  dir: Dir,
  fright: boolean,
  flash: boolean,
  time: number
) => {
  const R = 10.5;
  const eatenOnly = g.state === 'eaten';
  const body = fright ? (flash ? '#f8fafc' : '#3b5bdb') : ['#f97316', '#94a3b8', '#92400e', '#e5e7eb'][g.kind];
  const dark = fright ? '#1e3a8a' : ['#9a3412', '#475569', '#451a03', '#9ca3af'][g.kind];
  if (!eatenOnly) {
    ctx.fillStyle = body;
    // вуха
    if (g.kind === 3 && !fright) {
      ctx.beginPath();
      ctx.ellipse(cx - 4, cy - R - 3, 3, 9, -0.12, 0, Math.PI * 2);
      ctx.ellipse(cx + 4, cy - R - 3, 3, 9, 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f9a8d4';
      ctx.beginPath();
      ctx.ellipse(cx - 4, cy - R - 3, 1.3, 6, -0.12, 0, Math.PI * 2);
      ctx.ellipse(cx + 4, cy - R - 3, 1.3, 6, 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = body;
    } else if (g.kind === 2 && !fright) {
      ctx.beginPath();
      ctx.arc(cx - 8, cy - 8, 4.5, 0, Math.PI * 2);
      ctx.arc(cx + 8, cy - 8, 4.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(cx - 9, cy - 4);
      ctx.lineTo(cx - 6, cy - R - 5);
      ctx.lineTo(cx - 1, cy - 8);
      ctx.moveTo(cx + 9, cy - 4);
      ctx.lineTo(cx + 6, cy - R - 5);
      ctx.lineTo(cx + 1, cy - 8);
      ctx.fill();
    }
    // голова та «тіло» знизу, що погойдується
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = dark;
    ctx.fillRect(cx - R + 2, cy + R - 4 + Math.sin(time * 10 + g.kind) * 1, 4, 3);
    ctx.fillRect(cx + R - 6, cy + R - 4 - Math.sin(time * 10 + g.kind) * 1, 4, 3);
    // морда
    if (!fright) {
      ctx.fillStyle = g.kind === 0 ? '#fff7ed' : g.kind === 3 ? '#fff' : g.kind === 2 ? '#d6a77a' : '#e2e8f0';
      ctx.beginPath();
      ctx.ellipse(cx + dir[0] * 3, cy + 4 + dir[1] * 2, 6, 4.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.arc(cx + dir[0] * 4.5, cy + 3 + dir[1] * 2.5, 1.8, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = flash ? '#3b5bdb' : '#f8fafc';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(cx - 5, cy + 6);
      for (let i = 0; i < 4; i++) ctx.lineTo(cx - 5 + (i + 1) * 2.5, cy + (i % 2 === 0 ? 3.5 : 6.5));
      ctx.stroke();
    }
  }
  // очі
  const ex = dir[0] * 1.6;
  const ey = dir[1] * 1.6;
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(cx - 4, cy - 3, 3.2, 0, Math.PI * 2);
  ctx.arc(cx + 4, cy - 3, 3.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = fright && !eatenOnly ? '#ef4444' : '#111827';
  ctx.beginPath();
  ctx.arc(cx - 4 + ex, cy - 3 + ey, 1.6, 0, Math.PI * 2);
  ctx.arc(cx + 4 + ex, cy - 3 + ey, 1.6, 0, Math.PI * 2);
  ctx.fill();
};

const drawHero = (ctx: CanvasRenderingContext2D, s: State) => {
  const h = s.hero;
  const [px, py] = posOf(h);
  const cx = (px + 0.5) * T;
  const cy = (py + 0.5) * T;
  const dir: Dir = h.dx !== 0 || h.dy !== 0 ? [h.dx, h.dy] : h.desired;
  let R = 10.5;
  let alpha = 1;
  if (s.dying > 0) {
    const p = 1 - s.dying / 1.4;
    R *= Math.max(0.05, 1 - p);
    alpha = 1 - p * 0.6;
  }
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  if (s.dying > 0) ctx.rotate((1 - s.dying / 1.4) * 8);
  const squash = 1 + Math.sin(h.mouth) * 0.05;
  ctx.scale(squash, 2 - squash);
  const grad = ctx.createRadialGradient(-3, -4, 2, 0, 0, R);
  grad.addColorStop(0, '#fde68a');
  grad.addColorStop(1, '#d9892b');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fill();
  // обличчя
  const fx = dir[0] * 2.5;
  const fy = dir[1] * 2;
  ctx.fillStyle = '#111827';
  ctx.beginPath();
  ctx.arc(-3.5 + fx, -2 + fy, 1.7, 0, Math.PI * 2);
  ctx.arc(3.5 + fx, -2 + fy, 1.7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(244,114,182,0.7)';
  ctx.beginPath();
  ctx.arc(-6 + fx, 2 + fy, 2, 0, Math.PI * 2);
  ctx.arc(6 + fx, 2 + fy, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#7c2d12';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  const open = h.dx !== 0 || h.dy !== 0 ? Math.abs(Math.sin(h.mouth)) * 3 : 0;
  ctx.arc(fx, 3 + fy, 3 + open * 0.3, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();
  ctx.restore();
};

const KolobokGame: React.FC = () => {
  const [boxRef, size] = useFitBox(W / H);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const st = useRef<State>(createState(1));
  const phaseRef = useRef<Phase>('ready');
  const [phase, setPhaseState] = useState<Phase>('ready');
  const [hud, setHud] = useState({ score: 0, lives: 3, level: 1 });
  const [best, submitBest] = useHighScore('kolobok');
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };

  const start = () => {
    st.current = createState(1);
    setHud({ score: 0, lives: 3, level: 1 });
    setPhase('playing');
  };
  const togglePause = () => {
    if (phaseRef.current === 'playing') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('playing');
  };
  const go = (d: Dir) => setDesired(st.current, d);

  const actions = useRef({ togglePause, go });
  actions.current = { togglePause, go };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = {
        ArrowUp: UP, KeyW: UP, ArrowDown: DOWN, KeyS: DOWN, ArrowLeft: LEFT, KeyA: LEFT, ArrowRight: RIGHT, KeyD: RIGHT,
      };
      if (map[e.code]) {
        e.preventDefault();
        actions.current.go(map[e.code]);
      } else if (e.code === 'Space' || e.code === 'KeyP') {
        e.preventDefault();
        actions.current.togglePause();
      }
    };
    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, []);

  const draw = (time: number) => {
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const k = c.width / W;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    const s = st.current;

    ctx.fillStyle = '#0a0f24';
    ctx.fillRect(0, 0, W, H);

    // стіни
    for (let r = 0; r < ROWS; r++) {
      for (let col = 0; col < COLS; col++) {
        if (!isWall(col, r)) continue;
        ctx.fillStyle = '#12204f';
        ctx.fillRect(col * T, r * T, T, T);
      }
    }
    ctx.strokeStyle = '#5b86ff';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    for (let r = 0; r < ROWS; r++) {
      for (let col = 0; col < COLS; col++) {
        if (!isWall(col, r)) continue;
        const x = col * T;
        const y = r * T;
        if (r > 0 && !isWall(col, r - 1)) {
          ctx.moveTo(x + 1, y + 1);
          ctx.lineTo(x + T - 1, y + 1);
        }
        if (r < ROWS - 1 && !isWall(col, r + 1)) {
          ctx.moveTo(x + 1, y + T - 1);
          ctx.lineTo(x + T - 1, y + T - 1);
        }
        if (col > 0 && !isWall(col - 1, r)) {
          ctx.moveTo(x + 1, y + 1);
          ctx.lineTo(x + 1, y + T - 1);
        }
        if (col < COLS - 1 && !isWall(col + 1, r)) {
          ctx.moveTo(x + T - 1, y + 1);
          ctx.lineTo(x + T - 1, y + T - 1);
        }
      }
    }
    ctx.stroke();
    // двері хатинки
    for (let r = 0; r < ROWS; r++) for (let col = 0; col < COLS; col++) if (MAZE[r][col] === '-') {
      ctx.fillStyle = '#f9a8d4';
      ctx.fillRect(col * T, r * T + T / 2 - 2, T, 4);
    }

    // зернята та калина
    for (let r = 0; r < ROWS; r++) {
      for (let col = 0; col < COLS; col++) {
        const x = (col + 0.5) * T;
        const y = (r + 0.5) * T;
        if (s.dots[r][col]) {
          ctx.fillStyle = '#fcd34d';
          ctx.beginPath();
          ctx.ellipse(x, y, 2.4, 1.5, 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else if (s.pellets[r][col]) {
          const pulse = 1 + Math.sin(time * 6) * 0.12;
          ctx.fillStyle = '#16a34a';
          ctx.fillRect(x - 1, y - 9, 2, 4);
          ctx.fillStyle = '#dc2626';
          for (const [dx, dy] of [[-3, 0], [3, 0], [0, 4]]) {
            ctx.beginPath();
            ctx.arc(x + dx, y + dy - 1, 3.8 * pulse, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = 'rgba(255,255,255,0.6)';
          ctx.beginPath();
          ctx.arc(x - 4, y - 2, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // яблуко
    if (s.fruit) {
      const x = 9.5 * T;
      const y = 12.5 * T;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(x, y + 1, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#16a34a';
      ctx.fillRect(x - 1, y - 8, 2, 4);
      ctx.beginPath();
      ctx.ellipse(x + 4, y - 6, 4, 2, -0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // звірі
    for (const g of s.ghosts) {
      const [gx, gy] = posOf(g);
      const bob = g.state === 'house' ? Math.sin(g.bob * 6) * 2 : 0;
      const dir: Dir = g.dx !== 0 || g.dy !== 0 ? [g.dx, g.dy] : [0, 0];
      const flash = s.frightT > 0 && s.frightT < 2 && Math.floor(time * 6) % 2 === 0;
      drawAnimal(ctx, (gx + 0.5) * T, (gy + 0.5) * T + bob, g, dir, g.frightened, flash, time);
    }
    // Колобок
    drawHero(ctx, s);

    // очки
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px sans-serif';
    for (const p of s.popups) {
      ctx.globalAlpha = Math.min(1, p.t * 2);
      ctx.fillStyle = '#fff';
      ctx.fillText(p.text, (p.x + 0.5) * T, (p.y + 0.5) * T - (1 - p.t) * 14);
    }
    ctx.globalAlpha = 1;

    if (s.ready > 0 && phaseRef.current === 'playing') {
      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = '#fde68a';
      ctx.fillText('Готові?', W / 2, 12.5 * T);
    }
    if (s.levelEnd > 0) {
      ctx.font = 'bold 22px sans-serif';
      ctx.fillStyle = '#fde68a';
      ctx.fillText('Рівень пройдено!', W / 2, 12.5 * T);
    }
  };

  const clock = useRef(0);
  useGameLoop((dt) => {
    clock.current += dt;
    const s = st.current;
    if (phaseRef.current === 'playing') {
      updateState(s, dt);
      if (s.hudDirty) {
        s.hudDirty = false;
        setHud({ score: s.score, lives: s.lives, level: s.level });
      }
      if (s.event === 'over') {
        s.event = null;
        submitBest(s.score);
        setPhase('over');
      }
    }
    draw(clock.current);
  });

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    swipe.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const s0 = swipe.current;
    if (!s0) return;
    const dx = e.clientX - s0.x;
    const dy = e.clientY - s0.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_MIN) return;
    go(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? RIGHT : LEFT) : dy > 0 ? DOWN : UP);
    swipe.current = { x: e.clientX, y: e.clientY };
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
          <div className="text-xs text-slate-400">Рівень</div>
          <div className="text-xl font-bold">{hud.level}</div>
        </div>
        <div className={`${statBox} flex-1`}>
          <div className="text-xs text-slate-400">Життя</div>
          <div className="text-lg font-bold">{'🥯'.repeat(Math.max(0, hud.lives))}</div>
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

  const key = 'w-16 h-16 md:w-[4.5rem] md:h-[4.5rem]';
  const controls = (
    <div className="grid grid-cols-3 gap-2">
      <div />
      <HoldButton onAction={() => go(UP)} className={key} label="Вгору">▲</HoldButton>
      <div />
      <HoldButton onAction={() => go(LEFT)} className={key} label="Вліво">◀</HoldButton>
      <HoldButton onAction={() => go(DOWN)} className={key} label="Вниз">▼</HoldButton>
      <HoldButton onAction={() => go(RIGHT)} className={key} label="Вправо">▶</HoldButton>
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
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={() => (swipe.current = null)}
              onPointerCancel={() => (swipe.current = null)}
            />
          )}
        </div>
      </GameLayout>

      {phase === 'ready' && (
        <GameOverlay title="🥯 Колобок у лабіринті">
          <p className="text-slate-300 text-sm">
            Колобок утік від бабусі й дідуся, а в лісі його чекають {GHOST_NAMES.join(', ')}. Збирайте зернята, не потрапляйте звірам у лапи!
          </p>
          <p className="text-sm text-slate-400">
            Калина 🍒 лякає звірів — тоді їх можна «спіймати». Свайпайте по полю, користуйтеся стрілками або клавішами ← ↑ ↓ →.
          </p>
          <GameButton onClick={start}>▶ Грати</GameButton>
        </GameOverlay>
      )}
      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={togglePause}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={start}>
            🔁 Почати спочатку
          </GameButton>
        </GameOverlay>
      )}
      {phase === 'over' && (
        <GameOverlay title="Звірі зловили Колобка">
          <p className="text-2xl font-bold">Рахунок: {hud.score}</p>
          <p className="text-slate-300">Рівень: {hud.level} · Рекорд: {Math.max(best, hud.score)}</p>
          <GameButton onClick={start}>🔁 Ще раз</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default KolobokGame;
