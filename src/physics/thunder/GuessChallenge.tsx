// 🎯 Виклик: поміть час між спалахом і громом і обчисли, як далеко вдарила блискавка.
import React, { useRef, useState } from 'react';
import { SimCanvas } from '../shared/SimCanvas';
import { BigSlider } from '../shared/BigSlider';
import { ActionButton, LabLayout, StatBox, fmt } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, playThunder, unlockAudio } from '../shared/sound';
import { distanceFromDelay, drawStorm, makeBolt, thunderDelay, type SceneState } from './scene';

const ROUNDS = 5;
type Phase = 'intro' | 'ready' | 'waiting' | 'timing' | 'guess' | 'result' | 'end';

/** Бали за точність: 100 при майже ідеальній відповіді, 0 при великій помилці */
export const scoreGuess = (guessKm: number, trueKm: number): number => {
  const err = Math.abs(guessKm - trueKm);
  return Math.max(0, Math.round(100 * (1 - err / (0.3 * trueKm + 0.15))));
};

const newDistance = () => Math.round((0.5 + Math.random() * 6) * 10) / 10;

export const GuessChallenge: React.FC = () => {
  const [best, submitBest] = useBest('thunder-guess');
  const [phase, setPhase] = useState<Phase>('intro');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState(2);
  const [delay, setDelay] = useState(0);
  const [trueKm, setTrueKm] = useState(0);
  const [gained, setGained] = useState(0);
  const [record, setRecord] = useState(false);

  const sim = useRef({
    phase: 'intro' as Phase,
    t: 0,
    wait: 0,
    dist: 2,
    scene: { flash: 0, shake: 0, bolt: null, soundFrac: null, distKm: 2, showTrack: false, dark: 0.35 } as SceneState,
  });

  const setP = (p: Phase) => {
    sim.current.phase = p;
    setPhase(p);
  };

  const startRound = () => {
    unlockAudio();
    const d = newDistance();
    const s = sim.current;
    s.dist = d;
    s.scene.distKm = d;
    s.t = 0;
    s.wait = 1.2 + Math.random() * 1.6;
    s.scene.soundFrac = null;
    s.scene.dark = 0.5;
    setTrueKm(d);
    setGuess(2);
    setP('waiting');
  };

  const startGame = () => {
    setRound(0);
    setScore(0);
    setRecord(false);
    startRound();
  };

  const submit = () => {
    const pts = scoreGuess(guess, trueKm);
    playBeep(pts >= 60);
    setGained(pts);
    setScore((v) => v + pts);
    setP('result');
  };

  const next = () => {
    if (round + 1 >= ROUNDS) {
      setRecord(submitBest(score));
      setP('end');
    } else {
      setRound(round + 1);
      startRound();
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number) => {
    const s = sim.current;
    const sc = s.scene;
    if (s.phase === 'waiting') {
      s.wait -= dt;
      if (s.wait <= 0) {
        sc.bolt = makeBolt();
        sc.flash = 1;
        sc.dark = 0.8;
        sc.soundFrac = 0;
        s.t = 0;
        setP('timing');
      }
    } else if (s.phase === 'timing') {
      s.t += dt;
      const tArr = thunderDelay(s.dist);
      if (s.t >= tArr) {
        sc.shake = 1;
        sc.soundFrac = 1;
        playThunder(s.dist);
        setDelay(tArr);
        setP('guess');
      }
    }
    sc.flash = Math.max(0, sc.flash - dt * 2.5);
    sc.shake = Math.max(0, sc.shake - dt * 1.5);
    if (s.phase === 'intro' || s.phase === 'ready') {
      sc.dark = 0.35;
      sc.soundFrac = null;
    }
    // в грі відстань не показуємо до відповіді
    const hidden = s.phase === 'waiting' || s.phase === 'timing' || s.phase === 'guess';
    drawStorm(ctx, w, h, { ...sc, distKm: hidden ? 0 : s.dist, showTrack: false, soundFrac: null });
    if (hidden) {
      // замість підпису відстані - знак питання над шляхом
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.font = `bold ${Math.max(14, h * 0.05)}px system-ui, sans-serif`;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(w * 0.4, h * 0.86 - h * 0.075, w * 0.22, h * 0.065);
      ctx.fillStyle = '#fff';
      ctx.fillText('відстань: ? км', w * 0.51, h * 0.86 - h * 0.025);
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(16, h * 0.07)}px system-ui, sans-serif`;
    if (s.phase === 'waiting') ctx.fillText('☁️ Чекаємо блискавку…', 14, h * 0.1);
    if (s.phase === 'timing') ctx.fillText(`⏱ ${fmt(s.t, 1)} с`, 14, h * 0.1);
    if (s.phase === 'guess' || s.phase === 'result') ctx.fillText(`⏱ грім через ${fmt(thunderDelay(s.dist), 1)} с`, 14, h * 0.1);
  };

  const panel = (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${Math.min(round + 1, ROUNDS)}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
        <StatBox label="Рекорд" value={best} />
      </div>

      {phase === 'intro' && (
        <div className="bg-slate-800/80 rounded-xl p-4 text-white text-base md:text-lg flex flex-col gap-3">
          <p>
            Блискавка вдарить десь далеко. Стеж за секундоміром: скільки секунд мине між <b>спалахом</b> і <b>громом</b>?
            Потім обчисли відстань: <b>звук долітає за 343 м/с</b> (≈ 3 секунди на кілометр).
          </p>
          <ActionButton onClick={startGame}>▶ Почати</ActionButton>
        </div>
      )}

      {phase === 'waiting' && <div className="bg-slate-800/80 rounded-xl p-4 text-white text-lg">Дивись на небо… ⚡</div>}
      {phase === 'timing' && <div className="bg-slate-800/80 rounded-xl p-4 text-white text-lg">Спалах був! Слухай, коли прийде грім… 👂</div>}

      {phase === 'guess' && (
        <>
          <div className="bg-slate-800/80 rounded-xl p-3 text-white text-lg">
            Грім прийшов через <b>{fmt(delay, 1)} с</b>. Як далеко вдарила блискавка?
          </div>
          <BigSlider label="Твоя відповідь" value={guess} min={0} max={8} step={0.1} unit="км" format={(v) => fmt(v, 1)} onChange={setGuess} />
          <ActionButton onClick={submit}>✔ Відповісти</ActionButton>
        </>
      )}

      {phase === 'result' && (
        <div className="bg-slate-800/80 rounded-xl p-4 text-white text-lg flex flex-col gap-2">
          <div>
            Справжня відстань: <b>{fmt(trueKm, 1)} км</b>
          </div>
          <div>
            Твоя відповідь: <b>{fmt(guess, 1)} км</b> → <b className={gained >= 60 ? 'text-green-300' : 'text-orange-300'}>+{gained}</b>
          </div>
          <div className="text-sm text-slate-300">
            Перевірка: {fmt(delay, 1)} с × 343 м/с = {fmt(delay * 343, 0)} м = {fmt(distanceFromDelay(delay), 1)} км
          </div>
          <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Наступна блискавка ▶'}</ActionButton>
        </div>
      )}

      {phase === 'end' && (
        <div className="bg-slate-800/80 rounded-xl p-4 text-white text-lg flex flex-col gap-3">
          <div className="text-3xl font-extrabold">Підсумок: {score} з {ROUNDS * 100}</div>
          {record && <div className="text-yellow-300 font-bold">🏆 Новий рекорд!</div>}
          <p className="text-slate-300">Якщо між спалахом і громом менше 30 секунд - гроза поруч. Час шукати укриття в будівлі!</p>
          <ActionButton onClick={startGame}>🔁 Ще раз</ActionButton>
        </div>
      )}
      <SoundToggle />
    </>
  );

  return <LabLayout scene={<SimCanvas aspect={16 / 10} draw={draw} />} panel={panel} />;
};
