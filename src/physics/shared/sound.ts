// Прості звуки на WebAudio (без файлів). Працює лише після дотику користувача (вимога браузера) -
// усі виклики відбуваються з обробників кліків/таймерів, запущених дотиком, тому це не проблема.
let ctx: AudioContext | null = null;
let muted = false;

const getCtx = (): AudioContext | null => {
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
};

export const isMuted = () => muted;
export const setMuted = (m: boolean) => {
  muted = m;
};
/** Викликати з обробника дотику, щоб «розбудити» звук. */
export const unlockAudio = () => {
  getCtx();
};

/** Гуркіт грому. Чим далі гроза, тим тихіше й нижче звук. */
export function playThunder(distanceKm: number): void {
  if (muted) return;
  const ac = getCtx();
  if (!ac) return;
  const dur = 2.2 + Math.min(3, distanceKm * 0.5);
  const len = Math.floor(ac.sampleRate * dur);
  const buf = ac.createBuffer(1, len, ac.sampleRate);
  const data = buf.getChannelData(0);
  let last = 0;
  for (let k = 0; k < len; k++) {
    // коричневий шум: низькі частоти, схожі на гуркіт
    last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
    const t = k / ac.sampleRate;
    const rolls = 0.65 + 0.35 * Math.sin(t * 9 + Math.sin(t * 3.1) * 2); // «перекоти»
    data[k] = last * 3.5 * rolls;
  }
  const src = ac.createBufferSource();
  src.buffer = buf;
  const lp = ac.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = Math.max(180, 900 - distanceKm * 90);
  const gain = ac.createGain();
  const vol = Math.max(0.25, 1 - distanceKm * 0.09);
  gain.gain.setValueAtTime(0.0001, ac.currentTime);
  gain.gain.exponentialRampToValueAtTime(vol, ac.currentTime + 0.06);
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + dur);
  src.connect(lp).connect(gain).connect(ac.destination);
  src.start();
}

/** Короткий сигнал: ok - приємний, інакше - низький. */
export function playBeep(ok: boolean): void {
  if (muted) return;
  const ac = getCtx();
  if (!ac) return;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = ok ? 'triangle' : 'sawtooth';
  o.frequency.setValueAtTime(ok ? 660 : 160, ac.currentTime);
  if (ok) o.frequency.exponentialRampToValueAtTime(990, ac.currentTime + 0.12);
  g.gain.setValueAtTime(0.15, ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.25);
  o.connect(g).connect(ac.destination);
  o.start();
  o.stop(ac.currentTime + 0.26);
}
