// Конструктор: клади гірки, доміно й м'ячі, тисни «Старт» і дивись, як спрацює ланцюг.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { canvasPoint } from '../shared/canvasPointer';
import { ActionButton, Chip, LabLayout } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { playBeep, unlockAudio } from '../shared/sound';
import {
  BALL_R, DOM_H, DOM_W, FLOOR, H, W, buildWorld, domTop, moving, rampSeg, step,
  type Item, type LevelDef, type World,
} from './engine';

type Tool = 'ramp1' | 'ramp-1' | 'domino' | 'ball' | 'erase';

interface Props {
  level: LevelDef | null;
  onWin?: () => void;
  /** кнопка «Далі» після виграшу */
  onNext?: () => void;
  nextLabel?: string;
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const INF = 999;

export const Builder: React.FC<Props> = ({ level, onWin, onNext, nextLabel }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [tool, setTool] = useState<Tool>(level ? (level.inv.domino ? 'domino' : 'ramp1') : 'ramp1');
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<'idle' | 'win' | 'fail'>('idle');
  const world = useRef<World>(buildWorld(level, []));
  const sim = useRef({ running: false, still: 0, done: false });

  const inv = level ? level.inv : { ramp: INF, domino: INF, ball: INF };
  const used = {
    ramp: items.filter((i) => i.kind === 'ramp').length,
    domino: items.filter((i) => i.kind === 'domino').length,
    ball: items.filter((i) => i.kind === 'ball').length,
  };

  const apply = (next: Item[]) => {
    setItems(next);
    world.current = buildWorld(level, next);
  };

  const reset = () => {
    sim.current = { running: false, still: 0, done: false };
    setRunning(false);
    setResult('idle');
    world.current = buildWorld(level, items);
  };
  const clearAll = () => {
    sim.current = { running: false, still: 0, done: false };
    setRunning(false);
    setResult('idle');
    apply([]);
  };
  const start = () => {
    unlockAudio();
    world.current = buildWorld(level, items);
    sim.current = { running: true, still: 0, done: false };
    setRunning(true);
    setResult('idle');
  };

  const onDown = (e: React.PointerEvent) => {
    if (sim.current.running) return;
    const p = canvasPoint(e);
    if (!p) return;
    const x = (p.x / p.w) * W, y = (p.y / p.h) * H;
    if (tool === 'erase') {
      let bi = -1, bd = 9;
      items.forEach((it, i) => {
        let d = 1e9;
        if (it.kind === 'ramp') d = Math.hypot(it.cx - x, it.cy - y);
        else if (it.kind === 'domino') d = Math.abs(it.x - x) < 5 && y > FLOOR - DOM_H - 4 ? Math.abs(it.x - x) : 1e9;
        else d = Math.hypot(it.x - x, it.y - y);
        if (d < bd) { bd = d; bi = i; }
      });
      if (bi >= 0) apply(items.filter((_, i) => i !== bi));
      return;
    }
    if (tool === 'ramp1' || tool === 'ramp-1') {
      if (used.ramp >= inv.ramp) return;
      apply([...items, { kind: 'ramp', dir: tool === 'ramp1' ? 1 : -1, cx: clamp(x, 14, W - 14), cy: clamp(y, 8, FLOOR - 8) }]);
    } else if (tool === 'domino') {
      if (used.domino >= inv.domino) return;
      const dx = clamp(Math.round(x), 5, W - 5);
      const taken = [...(level ? level.doms : []), ...items.filter((i): i is Extract<Item, { kind: 'domino' }> => i.kind === 'domino').map((i) => i.x)];
      if (taken.some((t) => Math.abs(t - dx) < DOM_W + 1.5)) return;
      apply([...items, { kind: 'domino', x: dx }]);
    } else if (tool === 'ball') {
      if (used.ball >= inv.ball) return;
      apply([...items, { kind: 'ball', x: clamp(x, 6, W - 6), y: clamp(y, 4, FLOOR - BALL_R) }]);
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, cw: number, ch: number, dt: number) => {
    const w = world.current;
    const s = sim.current;
    if (s.running && !s.done) {
      step(w, dt);
      if (w.bell?.rung) {
        s.done = true;
        s.running = false;
        setResult('win');
        setRunning(false);
        playBeep(true);
        onWin?.();
      } else if (!moving(w) && w.t > 1) {
        s.still += dt;
        if (s.still > 1.2) {
          s.done = true;
          s.running = false;
          setResult('fail');
          setRunning(false);
          playBeep(false);
        }
      } else s.still = 0;
    }
    const k = cw / W;
    const bg = ctx.createLinearGradient(0, 0, 0, ch);
    bg.addColorStop(0, '#dbeafe');
    bg.addColorStop(1, '#e0f2fe');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = '#84cc16';
    ctx.fillRect(0, FLOOR * k, cw, ch - FLOOR * k);
    ctx.fillStyle = '#4d7c0f';
    ctx.fillRect(0, FLOOR * k, cw, 3);

    // відрізки рівня (ті, що не є підлогою/стінами)
    const extra = level ? level.segs : [];
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = Math.max(4, 2.2 * k);
    extra.forEach((sg) => { ctx.beginPath(); ctx.moveTo(sg.x1 * k, sg.y1 * k); ctx.lineTo(sg.x2 * k, sg.y2 * k); ctx.stroke(); });
    // гірки гравця
    ctx.strokeStyle = '#f97316';
    items.forEach((it) => {
      if (it.kind !== 'ramp') return;
      const sg = rampSeg(it);
      ctx.beginPath(); ctx.moveTo(sg.x1 * k, sg.y1 * k); ctx.lineTo(sg.x2 * k, sg.y2 * k); ctx.stroke();
    });
    // дзвоник
    if (w.bell) {
      const b = w.bell;
      ctx.font = `${b.r * 2.6 * k}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const shake = b.rung ? Math.sin(w.t * 40) * 0.2 : 0;
      ctx.save();
      ctx.translate(b.x * k, b.y * k);
      ctx.rotate(shake);
      ctx.fillText('🔔', 0, 0);
      ctx.restore();
      if (b.rung) {
        ctx.font = `bold ${Math.max(14, 6 * k)}px system-ui, sans-serif`;
        ctx.fillStyle = '#16a34a';
        ctx.fillText('Дзінь!', b.x * k, (b.y - b.r - 4) * k);
      }
    }
    // доміно
    const lvDoms = level ? level.doms.length : 0;
    w.doms.forEach((d, i) => {
      ctx.save();
      ctx.translate(d.x * k, FLOOR * k);
      ctx.rotate(d.dir * d.th);
      ctx.fillStyle = i < lvDoms ? '#6366f1' : '#f43f5e';
      ctx.fillRect((-DOM_W / 2) * k, -DOM_H * k, DOM_W * k, DOM_H * k);
      ctx.strokeStyle = 'rgba(15,23,42,0.6)';
      ctx.lineWidth = 1;
      ctx.strokeRect((-DOM_W / 2) * k, -DOM_H * k, DOM_W * k, DOM_H * k);
      ctx.restore();
    });
    // м'ячі
    w.balls.forEach((b) => {
      const g = ctx.createRadialGradient((b.x - 0.8) * k, (b.y - 0.8) * k, 0.3 * k, b.x * k, b.y * k, BALL_R * k);
      g.addColorStop(0, '#fde68a');
      g.addColorStop(1, '#d97706');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x * k, b.y * k, BALL_R * k, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(15,23,42,0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    void domTop;
  };

  const left = (kind: 'ramp' | 'domino' | 'ball') => (inv[kind] >= INF ? '' : ` ${inv[kind] - used[kind]}`);
  const panel = (
    <>
      {level && <div className="bg-slate-800/80 rounded-xl p-3 text-white text-base md:text-lg">{level.hint}</div>}
      <div className="flex gap-2 flex-wrap">
        {inv.ramp > 0 && <Chip selected={tool === 'ramp1'} onClick={() => setTool('ramp1')}>↘ Гірка{left('ramp')}</Chip>}
        {inv.ramp > 0 && <Chip selected={tool === 'ramp-1'} onClick={() => setTool('ramp-1')}>↙ Гірка{left('ramp')}</Chip>}
        {inv.domino > 0 && <Chip selected={tool === 'domino'} onClick={() => setTool('domino')}>▮ Доміно{left('domino')}</Chip>}
        {inv.ball > 0 && <Chip selected={tool === 'ball'} onClick={() => setTool('ball')}>⚪ М'яч{left('ball')}</Chip>}
        <Chip selected={tool === 'erase'} onClick={() => setTool('erase')}>🗑 Прибрати</Chip>
      </div>
      <div className="text-slate-300 text-sm px-1">
        {level ? 'Торкнись сцени — деталь з\'явиться там. Старт — щоб запустити.' : 'Торкайся сцени, щоб класти деталі. Став м\'яч над гіркою — і дай йому покотитись!'}
      </div>
      {result === 'win' && (
        <div className="bg-green-900/60 border border-green-400/50 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-2">🔔 Дзвоник задзвенів! Ланцюг спрацював!</div>
          {onNext && <ActionButton onClick={onNext}>{nextLabel ?? 'Далі ▶'}</ActionButton>}
        </div>
      )}
      {result === 'fail' && (
        <div className="bg-red-900/60 border border-red-400/50 rounded-xl p-3 text-white">
          <div className="font-bold">Ланцюг обірвався 😕</div>
          <div className="text-sm">Щось не дотягується. Спробуй змінити розташування деталей.</div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2">
        {running ? (
          <ActionButton onClick={reset} variant="warn">⏹ Стоп</ActionButton>
        ) : (
          <ActionButton onClick={start}>▶ Старт</ActionButton>
        )}
        <ActionButton onClick={reset} variant="secondary">↺ Спочатку</ActionButton>
      </div>
      <ActionButton onClick={clearAll} variant="secondary">🧹 Прибрати все</ActionButton>
      <SoundToggle />
    </>
  );
  const scene = (
    <div className="w-full h-full" style={{ touchAction: 'none' }} onPointerDown={onDown}>
      <SimCanvas aspect={W / H} draw={draw} />
    </div>
  );
  return <LabLayout scene={scene} panel={panel} />;
};
