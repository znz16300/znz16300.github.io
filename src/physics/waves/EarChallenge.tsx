// 🎯 Виклик: прослухай загадану ноту й знайди таку саму. Хвиля прихована, поки не відповіси.
import React, { useState } from 'react';
import { ActionButton, LabLayout, StatBox } from '../shared/ui';
import { SoundToggle } from '../shared/SoundToggle';
import { useBest } from '../shared/useBest';
import { playBeep, unlockAudio } from '../shared/sound';
import { NOTES, playNote } from './tone';
import { WaveScope } from './WaveScope';

const ROUNDS = 6;
const pickTarget = () => Math.floor(Math.random() * NOTES.length);

export const EarChallenge: React.FC = () => {
  const [best, submit] = useBest('waves-ear');
  const [target, setTarget] = useState(pickTarget);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [tried, setTried] = useState<number | null>(null);
  const [answer, setAnswer] = useState<null | boolean>(null);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState(false);
  const [listens, setListens] = useState(0);

  const listen = () => {
    unlockAudio();
    playNote(NOTES[target].freq, 1.1);
    setListens((l) => l + 1);
  };
  const tryNote = (i: number) => {
    if (answer != null) return;
    unlockAudio();
    setTried(i);
    playNote(NOTES[i].freq, 0.8);
  };
  const commit = () => {
    if (tried == null) return;
    const ok = tried === target;
    setAnswer(ok);
    playBeep(ok);
    if (ok) setScore((s) => s + (listens <= 3 ? 100 : 60));
  };
  const next = () => {
    if (round + 1 >= ROUNDS) {
      setDone(true);
      setRecord(submit(score));
      return;
    }
    setRound(round + 1);
    setTarget(pickTarget());
    setTried(null);
    setAnswer(null);
    setListens(0);
  };
  const restart = () => {
    setRound(0);
    setScore(0);
    setTarget(pickTarget());
    setTried(null);
    setAnswer(null);
    setDone(false);
    setListens(0);
    setRecord(false);
  };

  const panel = done ? (
    <div className="bg-slate-800/90 rounded-xl p-4 text-white text-center">
      <div className="text-5xl">{record ? '🏆' : '🎧'}</div>
      <div className="text-2xl font-bold">Бали: {score}</div>
      <div className="text-slate-300 mb-3">{record ? 'Новий рекорд!' : `Рекорд: ${best}`}</div>
      <ActionButton onClick={restart}>🔁 Ще раз</ActionButton>
    </div>
  ) : (
    <>
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Раунд" value={`${round + 1}/${ROUNDS}`} />
        <StatBox label="Бали" value={score} />
        <StatBox label="Рекорд" value={best || '—'} />
      </div>
      <ActionButton onClick={listen} variant="warn">
        🔊 Прослухати загадану ноту
      </ActionButton>
      <div className="text-slate-300 text-sm">Торкайся нот і порівнюй на слух, потім натисни «Це вона!».</div>
      <div className="grid grid-cols-4 gap-2">
        {NOTES.map((n, i) => (
          <button
            key={n.name}
            onClick={() => tryNote(i)}
            className={`px-2 py-3 rounded-xl text-lg font-bold text-white active:scale-95 ${
              answer != null && i === target ? 'bg-green-600' : tried === i ? (answer === false ? 'bg-red-600' : 'bg-indigo-600 ring-2 ring-indigo-300') : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            {n.name}
          </button>
        ))}
      </div>
      {answer == null ? (
        <ActionButton onClick={commit} disabled={tried == null}>
          ✔ Це вона!
        </ActionButton>
      ) : (
        <div className="bg-slate-800/90 rounded-xl p-3 text-white">
          <div className="text-xl font-bold mb-2">{answer ? '✅ Чудовий слух!' : `❌ Це була нота «${NOTES[target].name}»`}</div>
          <ActionButton onClick={next}>{round + 1 >= ROUNDS ? 'Результат' : 'Далі ▶'}</ActionButton>
        </div>
      )}
      <SoundToggle />
    </>
  );

  return (
    <LabLayout
      scene={<WaveScope freq={answer != null || tried == null ? NOTES[target].freq : NOTES[tried].freq} volume={0.8} type="triangle" hidden={answer == null && tried == null} label={tried != null && answer == null ? NOTES[tried].name : answer != null ? NOTES[target].name : undefined} />}
      panel={panel}
    />
  );
};
