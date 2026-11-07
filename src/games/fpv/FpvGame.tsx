// FPV-симулятор польоту: політ за трасою з воріт від першої особи.
// Керування як на пульті (Mode 2), віртуальні стіки:
//   лівий стік:  вгору/вниз - газ (залишається в положенні), вліво/вправо - рискання (YAW)
//   правий стік: вгору/вниз - тангаж (вперед/назад), вліво/вправо - крен
// Запуск моторів: лівий стік до упору ВНИЗ, потім назад ВГОРУ.
// Клавіатура (для ПК): W/S - газ, A/D - рискання, стрілки - тангаж/крен, P/Esc - пауза. Стіки на екрані рухаються і від клавіатури.
// Під час польоту верхня панель сторінки ховається (useImmersive), поле займає весь екран.
// Перед грою: вибір рівня, якості дрона та налаштування стіків (чутливість, експонента, мертва зона, інверсія, розмір; зберігаються в localStorage).
import React, { useEffect, useRef, useState } from 'react';
import { getDpr } from '../shared/useFitBox';
import { useImmersive } from '../shared/GameChrome';
import { Slider } from './Slider';
import { DRONES, DRONE_ORDER, DroneId } from './drone';
import { StickSettings, DEFAULT_SETTINGS, loadSettings, saveSettings, shape } from './settings';
import { useGameLoop } from '../shared/useGameLoop';
import { useHighScore } from '../shared/useHighScore';
import { Stick, StickHandle } from '../shared/Stick';
import { GameOverlay, GameButton, GameChip } from '../shared/GameOverlay';
import { LEVELS, LEVEL_ORDER, LevelId } from './levels';
import { createSim, stepSim, Sim, Input } from './sim';
import { render } from './render';

const VIEW_H = 540;

type Phase = 'menu' | 'settings' | 'flying' | 'paused' | 'finished' | 'timeout';

interface Result {
  gates: number;
  total: number;
  time: number;
  score: number;
  finished: boolean;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

const loadDrone = (): DroneId => {
  try {
    const v = localStorage.getItem('kiosk-fpv-drone');
    if (v && v in DRONES) return v as DroneId;
  } catch {
    /* ignore */
  }
  return 'standard';
};

const Stars: React.FC<{ n: number }> = ({ n }) => (
  <span className="text-yellow-400 tracking-tighter">
    {'★'.repeat(n)}
    <span className="text-slate-600">{'★'.repeat(5 - n)}</span>
  </span>
);

const FpvGame: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const upd = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    upd();
    const ro = new ResizeObserver(upd);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [phase, setPhaseState] = useState<Phase>('menu');
  const phaseRef = useRef<Phase>('menu');
  const [level, setLevel] = useState<LevelId>('easy');
  const [result, setResult] = useState<Result | null>(null);
  const [stickSize, setStickSize] = useState(170);
  const [drone, setDrone] = useState<DroneId>(loadDrone);
  const [settings, setSettingsState] = useState<StickSettings>(loadSettings);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  const setSettings = (patch: Partial<StickSettings>) => {
    const n = { ...settingsRef.current, ...patch };
    settingsRef.current = n;
    setSettingsState(n);
    saveSettings(n);
  };
  const [prevL, setPrevL] = useState({ x: 0, y: 0 });
  const [prevR, setPrevR] = useState({ x: 0, y: 0 });
  const shown = useRef({ lx: 9, ly: 9, rx: 9, ry: 9 });
  const droneRef = useRef(drone);
  droneRef.current = drone;

  const sim = useRef<Sim>(createSim('easy', loadDrone()));
  const input = useRef<Input>({ yaw: 0, thr: 0.5, pitch: 0, roll: 0 });
  const keys = useRef<Set<string>>(new Set());
  const leftRef = useRef<StickHandle>(null);
  const rightRef = useRef<StickHandle>(null);
  const clock = useRef(0);

  const [bestEasy, submitEasy] = useHighScore('fpv-easy');
  const [bestMedium, submitMedium] = useHighScore('fpv-medium');
  const [bestHard, submitHard] = useHighScore('fpv-hard');
  const bests: Record<LevelId, number> = { easy: bestEasy, medium: bestMedium, hard: bestHard };
  const submits: Record<LevelId, (n: number) => void> = { easy: submitEasy, medium: submitMedium, hard: submitHard };

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };
  useImmersive(phase === 'flying' || phase === 'paused');

  // розмір стіків залежить від висоти екрана
  useEffect(() => {
    const update = () => setStickSize(Math.round(clamp(window.innerHeight * 0.27, 120, 200)));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const startRun = (id: LevelId) => {
    sim.current = createSim(id, droneRef.current);
    shown.current = { lx: 9, ly: 9, rx: 9, ry: 9 };
    input.current = { yaw: 0, thr: 0.5, pitch: 0, roll: 0 };
    leftRef.current?.setY(0);
    rightRef.current?.reset();
    setResult(null);
    setPhase('flying');
  };

  const togglePause = () => {
    if (phaseRef.current === 'flying') setPhase('paused');
    else if (phaseRef.current === 'paused') setPhase('flying');
  };

  const actions = useRef({ togglePause });
  actions.current = { togglePause };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
      keys.current.add(e.code);
      if (e.code === 'KeyP' || e.code === 'Escape') actions.current.togglePause();
    };
    const up = (e: KeyboardEvent) => keys.current.delete(e.code);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  const finishRun = (s: Sim, ev: 'finished' | 'timeout') => {
    const finished = ev === 'finished';
    const gates = finished ? s.gates.length : s.next;
    const bonus = finished ? 500 + Math.round(Math.max(0, s.cfg.limit - s.time) * 5) : 0;
    const score = gates * 100 + bonus;
    submits[s.cfg.id](score);
    setResult({ gates, total: s.gates.length, time: s.time, score, finished });
    setPhase(finished ? 'finished' : 'timeout');
  };

  useGameLoop((dt) => {
    const s = sim.current;
    clock.current += dt;

    if (phaseRef.current === 'flying') {
      const k = keys.current;
      const raw = { ...input.current };
      if (k.has('KeyA')) raw.yaw = -1;
      if (k.has('KeyD')) raw.yaw = 1;
      if (k.has('ArrowUp')) raw.pitch = 1;
      if (k.has('ArrowDown')) raw.pitch = -1;
      if (k.has('ArrowLeft')) raw.roll = -1;
      if (k.has('ArrowRight')) raw.roll = 1;
      if (k.has('KeyW') || k.has('KeyS')) {
        const nt = clamp(input.current.thr + ((k.has('KeyW') ? 1 : 0) - (k.has('KeyS') ? 1 : 0)) * 0.7 * dt, 0, 1);
        input.current.thr = nt;
        raw.thr = nt;
      }
      // стіки на екрані повторюють і керування з клавіатури
      const sh = shown.current;
      const ly = raw.thr * 2 - 1;
      if (sh.lx !== raw.yaw || sh.ly !== ly) {
        sh.lx = raw.yaw;
        sh.ly = ly;
        leftRef.current?.show(raw.yaw, ly);
      }
      if (sh.rx !== raw.roll || sh.ry !== raw.pitch) {
        sh.rx = raw.roll;
        sh.ry = raw.pitch;
        rightRef.current?.show(raw.roll, raw.pitch);
      }
      const st = settingsRef.current;
      const inp: Input = {
        yaw: shape(raw.yaw, st.yawSens, st.expo, st.dead),
        thr: raw.thr,
        roll: shape(raw.roll, st.rollSens, st.expo, st.dead),
        pitch: shape(raw.pitch, st.pitchSens, st.expo, st.dead) * (st.invertPitch ? -1 : 1),
      };

      stepSim(s, dt, inp);

      if (s.hoverRequest !== null) {
        leftRef.current?.setY(s.hoverRequest * 2 - 1);
        shown.current.ly = 9;
        input.current.thr = s.hoverRequest;
        s.hoverRequest = null;
      }
      if (s.event) {
        const ev = s.event;
        s.event = null;
        finishRun(s, ev);
      }
    }

    const c = canvasRef.current;
    if (!c || c.width === 0) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const asp = clamp(c.width / Math.max(1, c.height), 1.2, 2.3);
    const vw = Math.round(VIEW_H * asp);
    ctx.setTransform(c.width / vw, 0, 0, c.height / VIEW_H, 0, 0);
    render(ctx, vw, VIEW_H, s, clock.current);
  });

  const dpr = getDpr();
  const sticksVisible = phase === 'flying' || phase === 'paused';
  const immersive = sticksVisible;
  const cfg = LEVELS[level];
  const ss = Math.round(stickSize * settings.size);
  const pct = (v: number) => `${Math.round(v * 100)}%`;
  const prevSize = Math.round(130 * settings.size);

  return (
    <div className={`relative w-full h-full ${immersive ? '' : 'p-2'}`}>
      <div ref={boxRef} className="w-full h-full">
        {size.w > 0 && (
          <canvas
            ref={canvasRef}
            width={Math.round(size.w * dpr)}
            height={Math.round(size.h * dpr)}
            style={{ width: size.w, height: size.h }}
            className={immersive ? '' : 'rounded-xl shadow-2xl border border-white/10'}
          />
        )}
      </div>

      {/* Віртуальні стіки */}
      <div className={sticksVisible ? '' : 'hidden'}>
        <div className="absolute bottom-3 left-4 md:left-8 z-20">
          <Stick
            ref={leftRef}
            size={ss}
            holdY
            trail
            travel={0.3}
            label="ГАЗ ↕ / РИСКАННЯ ↔"
            onChange={(x, y) => {
              input.current.yaw = x;
              input.current.thr = (y + 1) / 2;
            }}
          />
        </div>
        <div className="absolute bottom-3 right-4 md:right-8 z-20">
          <Stick
            ref={rightRef}
            size={ss}
            trail
            travel={0.3}
            label="ТАНГАЖ ↕ / КРЕН ↔"
            onChange={(x, y) => {
              input.current.roll = x;
              input.current.pitch = y;
            }}
          />
        </div>
        {phase === 'flying' && (
          <button
            onClick={togglePause}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white text-lg"
            aria-label="Пауза"
          >
            ⏸
          </button>
        )}
      </div>

      {phase === 'menu' && (
        <GameOverlay title="🚁 FPV-симулятор">
          <p className="text-slate-300 text-sm">Пролітайте крізь ворота по трасі. Керування як на пульті: два віртуальні стіки.</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {LEVEL_ORDER.map((id) => (
              <GameChip key={id} selected={level === id} onClick={() => setLevel(id)}>
                {LEVELS[id].title}
              </GameChip>
            ))}
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 text-sm text-slate-200 text-left">
            <div className="font-bold mb-1">
              {cfg.modeLabel} · {cfg.gates.length} воріт · ліміт {fmt(cfg.limit)}
            </div>
            {cfg.description}
            <div className="mt-1 text-slate-400">Рекорд: {bests[level]}</div>
          </div>

          <div>
            <div className="font-semibold mb-1">Якість дрона</div>
            <div className="flex gap-2 justify-center flex-wrap">
              {DRONE_ORDER.map((id) => (
                <GameChip
                  key={id}
                  selected={drone === id}
                  onClick={() => {
                    setDrone(id);
                    try {
                      localStorage.setItem('kiosk-fpv-drone', id);
                    } catch {
                      /* ignore */
                    }
                  }}
                >
                  {DRONES[id].icon} {DRONES[id].title}
                </GameChip>
              ))}
            </div>
            <div className="bg-slate-900/60 rounded-xl p-3 mt-2 text-sm text-slate-200 text-left">
              {DRONES[drone].description}
              <div className="grid grid-cols-2 gap-x-4 mt-1 text-slate-300">
                <div>Тяга <Stars n={DRONES[drone].stars.power} /></div>
                <div>Спритність <Stars n={DRONES[drone].stars.agility} /></div>
                <div>Міцність <Stars n={DRONES[drone].stars.tough} /></div>
                <div>Відео <Stars n={DRONES[drone].stars.video} /></div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 text-left leading-relaxed">
            <b>Лівий стік:</b> вгору/вниз — газ (лишається де відпустили), вліво/вправо — рискання.
            <br />
            <b>Правий стік:</b> вгору — нахил вперед, вниз — назад, вліво/вправо — крен.
            <br />
            <b>Запуск моторів:</b> лівий стік до упору ВНИЗ, потім назад ВГОРУ.
          </div>
          <GameButton variant="secondary" onClick={() => setPhase('settings')}>
            🎮 Налаштування стіків
          </GameButton>
          <GameButton onClick={() => startRun(level)}>▶ Вилетіти</GameButton>
        </GameOverlay>
      )}

      {phase === 'settings' && (
        <GameOverlay title="🎮 Налаштування стіків">
          <div className="flex justify-center gap-6 items-end">
            <div className="flex flex-col items-center">
              <Stick size={prevSize} holdY trail travel={0.3} label="ЛІВИЙ" onChange={(x, y) => setPrevL({ x, y })} />
              <div className="text-xs font-mono text-slate-300 mt-1">
                рискання {shape(prevL.x, settings.yawSens, settings.expo, settings.dead).toFixed(2)}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Stick size={prevSize} trail travel={0.3} label="ПРАВИЙ" onChange={(x, y) => setPrevR({ x, y })} />
              <div className="text-xs font-mono text-slate-300 mt-1">
                крен {shape(prevR.x, settings.rollSens, settings.expo, settings.dead).toFixed(2)} · тангаж{' '}
                {(shape(prevR.y, settings.pitchSens, settings.expo, settings.dead) * (settings.invertPitch ? -1 : 1)).toFixed(2)}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400">Покрутіть стіки тут і подивіться, як змінюється результат. Налаштування зберігаються автоматично.</p>
          <div className="flex flex-col gap-1">
            <Slider label="Чутливість рискання" value={settings.yawSens} min={0.4} max={1.6} step={0.05} onChange={(v) => setSettings({ yawSens: v })} format={pct} />
            <Slider label="Чутливість крену" value={settings.rollSens} min={0.4} max={1.6} step={0.05} onChange={(v) => setSettings({ rollSens: v })} format={pct} />
            <Slider label="Чутливість тангажу" value={settings.pitchSens} min={0.4} max={1.6} step={0.05} onChange={(v) => setSettings({ pitchSens: v })} format={pct} />
            <Slider label="М'якість біля центру" value={settings.expo} min={0} max={1} step={0.05} onChange={(v) => setSettings({ expo: v })} format={pct} />
            <Slider label="Мертва зона" value={settings.dead} min={0} max={0.3} step={0.01} onChange={(v) => setSettings({ dead: v })} format={pct} />
            <Slider label="Розмір стіків" value={settings.size} min={0.7} max={1.4} step={0.05} onChange={(v) => setSettings({ size: v })} format={pct} />
          </div>
          <div className="flex justify-center">
            <GameChip selected={settings.invertPitch} onClick={() => setSettings({ invertPitch: !settings.invertPitch })}>
              ↕ Інверсія тангажу: {settings.invertPitch ? 'так' : 'ні'}
            </GameChip>
          </div>
          <GameButton variant="secondary" onClick={() => setSettings({ ...DEFAULT_SETTINGS })}>
            Скинути
          </GameButton>
          <GameButton onClick={() => setPhase('menu')}>✔ Готово</GameButton>
        </GameOverlay>
      )}

      {phase === 'paused' && (
        <GameOverlay title="Пауза">
          <GameButton onClick={togglePause}>▶ Продовжити</GameButton>
          <GameButton variant="secondary" onClick={() => startRun(level)}>
            🔁 Спочатку
          </GameButton>
          <GameButton variant="secondary" onClick={() => setPhase('menu')}>
            Змінити рівень
          </GameButton>
        </GameOverlay>
      )}

      {(phase === 'finished' || phase === 'timeout') && result && (
        <GameOverlay title={result.finished ? '🏁 Фініш!' : '⏱ Час вичерпано'}>
          <p className="text-slate-300">
            Рівень «{cfg.title}» · ворота {result.gates}/{result.total} · час {fmt(result.time)}
          </p>
          <p className="text-3xl font-bold">Очки: {result.score}</p>
          <p className="text-slate-300">Рекорд: {Math.max(bests[level], result.score)}</p>
          <GameButton onClick={() => startRun(level)}>🔁 Ще раз</GameButton>
          <GameButton variant="secondary" onClick={() => setPhase('menu')}>
            Змінити рівень
          </GameButton>
        </GameOverlay>
      )}
    </div>
  );
};

export default FpvGame;
