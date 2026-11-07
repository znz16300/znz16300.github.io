// Тетріс. Керування:
//   екранні кнопки (◀ ▶ ▼ ⟳ ⤓), клавіатура: ←/→ рух, ↑ поворот, ↓ швидше, Пробіл - скинути, P/Esc - пауза.
import React, { useEffect, useRef, useState } from 'react';
import { useFitBox, getDpr } from '../shared/useFitBox';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { GameLayout } from '../shared/GameLayout';
import { GameOverlay, GameButton } from '../shared/GameOverlay';
import { HoldButton } from '../shared/HoldButton';

const COLS = 10;
const ROWS = 20;
const COLORS = ['', '#22d3ee', '#facc15', '#a855f7', '#22c55e', '#ef4444', '#3b82f6', '#fb923c'];

// 1=I 2=O 3=T 4=S 5=Z 6=J 7=L
const SHAPES: Record<number, number[][]> = {
  1: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  2: [[1, 1], [1, 1]],
  3: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  4: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  5: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  6: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  7: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
};

type Phase = 'ready' | 'playing' | 'paused' | 'over';

interface Piece {
  type: number;
  m: number[][];
  x: number;
  y: number;
}

interface Engine {
  board: number[][];
  piece: Piece;
  next: number;
  bag: number[];
  score: number;
  lines: number;
  level: number;
  timer: number;
}

const emptyBoard = (): number[][] => Array.from({ length: ROWS }, () => Array(COLS).fill(0));
const rotateCW = (m: number[][]): number[][] => m[0].map((_, i) => m.map((r) => r[i]).reverse());

const collides = (board: number[][], m: number[][], x: number, y: number): boolean => {
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      if (!m[r][c]) continue;
      const nx = x + c;
      const ny = y + r;
      if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
      if (ny >= 0 && board[ny][nx]) return true;
    }
  }
  return false;
};

const newPiece = (type: number): Piece => {
  const m = SHAPES[type].map((r) => [...r]);
  return { type, m, x: Math.floor((COLS - m[0].length) / 2), y: 0 };
};

const drawFromBag = (bag: number[]): number => {
  if (bag.length === 0) {
    const a = [1, 2, 3, 4, 5, 6, 7];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    bag.push(...a);
  }
  return bag.pop() as number;
};

const createEngine = (): Engine => {
  const bag: number[] = [];
  const first = drawFromBag(bag);
  const next = drawFromBag(bag);
  return { board: emptyBoard(), piece: newPiece(first), next, bag, score: 0, lines: 0, level: 1, timer: 0 };
};

const dropInterval = (level: number) => Math.max(90, 800 - (level - 1) * 70);

const NextPreview: React.FC<{ type: number }> = ({ type }) => {
  const m = SHAPES[type];
  return (
    <div className="grid grid-cols-4 gap-[3px] w-24 h-24 mx-auto">
      {Array.from({ length: 16 }, (_, i) => {
        const r = Math.floor(i / 4);
        const c = i % 4;
        const on = m[r]?.[c];
        return <div key={i} className="rounded-sm" style={{ background: on ? COLORS[type] : 'rgba(255,255,255,0.05)' }} />;
      })}
    </div>
  );
};

const TetrisGame: React.FC = () => {
  const [boxRef, size] = useFitBox(COLS / ROWS);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const eng = useRef<Engine>(createEngine());
  const phaseRef = useRef<Phase>('ready');
  const [phase, setPhaseState] = useState<Phase>('ready');
  const [stats, setStats] = useState({ score: 0, lines: 0, level: 1, next: eng.current.next });
  const [best, submitBest] = useHighScore('tetris');

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };
  const syncStats = () => {
    const e = eng.current;
    setStats({ score: e.score, lines: e.lines, level: e.level, next: e.next });
  };

  const startGame = () => {
    eng.current = createEngine();
    syncStats();
    setPhase('playing');
  };

  const gameOver = () => {
    submitBest(eng.current.score);
    setPhase('over');
  };

  const lockPiece = () => {
    const e = eng.current;
    const p = e.piece;
    p.m.forEach((row, r) =>
      row.forEach((v, c) => {
        const y = p.y + r;
        if (v && y >= 0) e.board[y][p.x + c] = p.type;
      })
    );
    let cleared = 0;
    e.board = e.board.filter((row) => {
      const full = row.every((v) => v !== 0);
      if (full) cleared++;
      return !full;
    });
    while (e.board.length < ROWS) e.board.unshift(Array(COLS).fill(0));
    if (cleared) {
      e.lines += cleared;
      e.score += [0, 100, 300, 500, 800][cleared] * e.level;
      e.level = Math.floor(e.lines / 10) + 1;
    }
    e.piece = newPiece(e.next);
    e.next = drawFromBag(e.bag);
    e.timer = 0;
    syncStats();
    if (collides(e.board, e.piece.m, e.piece.x, e.piece.y)) gameOver();
  };

  // ---------- Дії гравця ----------
  const playing = () => phaseRef.current === 'playing';

  const move = (dx: number) => {
    if (!playing()) return;
    const e = eng.current;
    if (!collides(e.board, e.piece.m, e.piece.x + dx, e.piece.y)) e.piece.x += dx;
  };

  const rotate = () => {
    if (!playing()) return;
    const e = eng.current;
    const rotated = rotateCW(e.piece.m);
    for (const kick of [0, -1, 1, -2, 2]) {
      if (!collides(e.board, rotated, e.piece.x + kick, e.piece.y)) {
        e.piece.m = rotated;
        e.piece.x += kick;
        return;
      }
    }
  };

  const softDrop = () => {
    if (!playing()) return;
    const e = eng.current;
    if (!collides(e.board, e.piece.m, e.piece.x, e.piece.y + 1)) {
      e.piece.y += 1;
      e.score += 1;
      e.timer = 0;
      syncStats();
    } else lockPiece();
  };

  const hardDrop = () => {
    if (!playing()) return;
    const e = eng.current;
    let n = 0;
    while (!collides(e.board, e.piece.m, e.piece.x, e.piece.y + 1)) {
      e.piece.y += 1;
      n++;
    }
    e.score += n * 2;
    lockPiece();
  };

  const togglePause = () => {
    if (phaseRef.current === 'playing') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('playing');
  };

  // Актуальні версії дій для обробника клавіатури
  const actions = useRef({ move, rotate, softDrop, hardDrop, togglePause });
  actions.current = { move, rotate, softDrop, hardDrop, togglePause };

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      const a = actions.current;
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(ev.code)) ev.preventDefault();
      if (ev.code === 'ArrowLeft') a.move(-1);
      else if (ev.code === 'ArrowRight') a.move(1);
      else if (ev.code === 'ArrowUp') a.rotate();
      else if (ev.code === 'ArrowDown') a.softDrop();
      else if (ev.code === 'Space') a.hardDrop();
      else if (ev.code === 'KeyP' || ev.code === 'Escape') a.togglePause();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // ---------- Малювання ----------
  const drawCell = (ctx: CanvasRenderingContext2D, x: number, y: number, cell: number, color: string, alpha = 1) => {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, Math.max(2, cell * 0.16));
    ctx.globalAlpha = 1;
  };

  const draw = () => {
    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const e = eng.current;
    const cell = c.width / COLS;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#0b1220';
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let x = 1; x < COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cell, 0);
      ctx.lineTo(x * cell, c.height);
      ctx.stroke();
    }
    for (let y = 1; y < ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cell);
      ctx.lineTo(c.width, y * cell);
      ctx.stroke();
    }

    e.board.forEach((row, y) =>
      row.forEach((v, x) => {
        if (v) drawCell(ctx, x, y, cell, COLORS[v]);
      })
    );

    const p = e.piece;
    let gy = p.y;
    while (!collides(e.board, p.m, p.x, gy + 1)) gy++;
    p.m.forEach((row, r) =>
      row.forEach((v, cc) => {
        if (!v) return;
        if (gy !== p.y) drawCell(ctx, p.x + cc, gy + r, cell, COLORS[p.type], 0.22);
      })
    );
    p.m.forEach((row, r) =>
      row.forEach((v, cc) => {
        if (v && p.y + r >= 0) drawCell(ctx, p.x + cc, p.y + r, cell, COLORS[p.type]);
      })
    );
  };

  useGameLoop((dt) => {
    if (phaseRef.current === 'playing') {
      const e = eng.current;
      e.timer += dt * 1000;
      if (e.timer >= dropInterval(e.level)) {
        e.timer = 0;
        if (!collides(e.board, e.piece.m, e.piece.x, e.piece.y + 1)) e.piece.y += 1;
        else lockPiece();
      }
    }
    draw();
  });

  const dpr = getDpr();
  const statBox = 'bg-slate-800/80 rounded-xl px-4 py-2 text-white';

  const info = (
    <div className="flex flex-col gap-2 w-full min-w-[9rem]">
      <div className={statBox}>
        <div className="text-xs text-slate-400">Рахунок</div>
        <div className="text-2xl font-bold">{stats.score}</div>
      </div>
      <div className="flex gap-2">
        <div className={`${statBox} flex-1`}>
          <div className="text-xs text-slate-400">Рівень</div>
          <div className="text-xl font-bold">{stats.level}</div>
        </div>
        <div className={`${statBox} flex-1`}>
          <div className="text-xs text-slate-400">Лінії</div>
          <div className="text-xl font-bold">{stats.lines}</div>
        </div>
      </div>
      <div className={statBox}>
        <div className="text-xs text-slate-400">Рекорд</div>
        <div className="text-xl font-bold">{best}</div>
      </div>
      <div className={`${statBox} hidden sm:block`}>
        <div className="text-xs text-slate-400 mb-1">Далі</div>
        <NextPreview type={stats.next} />
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
      <HoldButton onAction={rotate} className={key} label="Повернути">⟳</HoldButton>
      <div />
      <HoldButton onAction={() => move(-1)} repeat className={key} label="Вліво">◀</HoldButton>
      <HoldButton onAction={softDrop} repeat className={key} label="Вниз">▼</HoldButton>
      <HoldButton onAction={() => move(1)} repeat className={key} label="Вправо">▶</HoldButton>
      <div />
      <HoldButton onAction={hardDrop} className={`${key} bg-orange-600 hover:bg-orange-500`} label="Скинути">⤓</HoldButton>
      <div />
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
              style={{ width: size.w, height: size.h }}
              className="rounded-xl shadow-2xl border border-white/10"
            />
          )}
        </div>
      </GameLayout>

      {phase === 'ready' && (
        <GameOverlay title="🧱 Тетріс">
          <p className="text-slate-300">Складайте фігури в суцільні лінії. Чим більше ліній одразу — тим більше очок.</p>
          <p className="text-sm text-slate-400">Кнопки праворуч або клавіші ← → ↑ ↓ та Пробіл.</p>
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
          <p className="text-2xl font-bold">Рахунок: {stats.score}</p>
          <p className="text-slate-300">Рекорд: {Math.max(best, stats.score)} · Лінії: {stats.lines}</p>
          <GameButton onClick={startGame}>🔁 Ще раз</GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default TetrisGame;
