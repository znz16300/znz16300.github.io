// Малювання гри «Козак у підземеллі Змія» (все процедурно, без зображень).
import { World, Fighter, Hero, Guard, T, ROWS, solid } from './engine';
import { LEVELS } from './levels';

export const VIEW_W = 800;
export const VIEW_H = ROWS * T; // 480

const drawFigure = (ctx: CanvasRenderingContext2D, f: Fighter, kind: 'hero' | 'guard', time: number, camX: number, strong = false) => {
  const hero = kind === 'hero' ? (f as Hero) : null;
  const hang = !!hero && (hero.state === 'hang' || hero.state === 'climb');
  const running = f.onGround && Math.abs(f.vx) > 25;
  const phase = time * (kind === 'hero' && !hero?.swordOut ? 15 : 9);
  const air = !f.onGround && !hang && !f.dead;

  ctx.save();
  const bodyH = f.h;
  ctx.translate(Math.round(f.x + f.w / 2 - camX), Math.round(f.y));
  if (f.dead) {
    ctx.translate(0, bodyH);
    ctx.rotate((-Math.PI / 2) * (f.face >= 0 ? 1 : -1) * Math.min(1, f.deadT * 3));
    ctx.translate(0, -bodyH);
  }
  if (hero && hero.invuln > 0 && !f.dead && Math.floor(time * 18) % 2 === 0) ctx.globalAlpha = 0.45;
  ctx.scale(f.face >= 0 ? 1 : -1, 1);
  if (strong) {
    ctx.translate(0, bodyH);
    ctx.scale(1.0, 1.0);
    ctx.translate(0, -bodyH);
  }
  if (hero?.crouch) {
    ctx.translate(0, bodyH);
    ctx.scale(1, 0.72);
    ctx.translate(0, -bodyH);
  }

  const pal =
    kind === 'hero'
      ? { skin: '#f2c29b', shirt: '#f8fafc', trim: '#dc2626', pants: '#1e3a8a', boots: '#7f1d1d', hair: '#2b1d10', blade: '#e5e7eb' }
      : strong
      ? { skin: '#7a9a55', shirt: '#7f1d1d', trim: '#facc15', pants: '#1c1917', boots: '#0c0a09', hair: '#44403c', blade: '#facc15' }
      : { skin: '#7a9a55', shirt: '#3f3f46', trim: '#a855f7', pants: '#27272a', boots: '#18181b', hair: '#44403c', blade: '#cbd5e1' };

  // ноги
  const swing = running ? Math.sin(phase) * 6 : 0;
  const bodyBottom = bodyH;
  ctx.fillStyle = pal.pants;
  if (hang) {
    ctx.fillRect(-6, bodyBottom - 17, 5, 15);
    ctx.fillRect(1, bodyBottom - 15, 5, 13);
  } else if (air) {
    ctx.fillRect(-7, bodyBottom - 15, 6, 11);
    ctx.fillRect(2, bodyBottom - 13, 6, 9);
  } else {
    ctx.fillRect(-6 + swing, bodyBottom - 16, 6, 12);
    ctx.fillRect(1 - swing, bodyBottom - 16, 6, 12);
  }
  ctx.fillStyle = pal.boots;
  if (hang) {
    ctx.fillRect(-7, bodyBottom - 4, 7, 4);
    ctx.fillRect(1, bodyBottom - 4, 7, 4);
  } else if (!air) {
    ctx.fillRect(-7 + swing, bodyBottom - 5, 8, 5);
    ctx.fillRect(0 - swing, bodyBottom - 5, 8, 5);
  } else {
    ctx.fillRect(-8, bodyBottom - 7, 8, 4);
    ctx.fillRect(2, bodyBottom - 6, 8, 4);
  }

  // тулуб
  const torsoTop = 11 + (bodyH - 34) * 0.4;
  ctx.fillStyle = pal.shirt;
  ctx.fillRect(-8, torsoTop, 16, 14);
  ctx.fillStyle = pal.trim;
  if (kind === 'hero') {
    ctx.fillRect(-8, torsoTop, 16, 2); // вишивка біля коміра
    ctx.fillRect(-2, torsoTop + 2, 4, 5);
    ctx.fillRect(-8, torsoTop + 11, 16, 3); // червоний пояс
  } else {
    ctx.fillRect(-8, torsoTop + 11, 16, 3);
    ctx.fillRect(-8, torsoTop, 16, 2);
  }

  // голова
  ctx.fillStyle = pal.skin;
  ctx.beginPath();
  ctx.arc(1, 6, 6.5, 0, Math.PI * 2);
  ctx.fill();
  if (kind === 'hero') {
    // оселедець (чуб) і вуса
    ctx.fillStyle = pal.hair;
    ctx.beginPath();
    ctx.arc(1, 3.5, 6.6, Math.PI * 1.05, Math.PI * 1.95);
    ctx.fill();
    ctx.strokeStyle = pal.hair;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(2, -2);
    ctx.quadraticCurveTo(10, -3, 9, 5 + Math.sin(time * 6));
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(4, 9);
    ctx.quadraticCurveTo(9, 9, 10, 13);
    ctx.stroke();
    ctx.fillStyle = '#111827';
    ctx.fillRect(5, 5, 2, 2);
  } else {
    // шолом з рогами та червоні очі
    ctx.fillStyle = '#9ca3af';
    ctx.beginPath();
    ctx.arc(1, 5, 7, Math.PI, 0);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-6, 4);
    ctx.lineTo(-10, -4);
    ctx.lineTo(-3, 1);
    ctx.moveTo(8, 4);
    ctx.lineTo(12, -4);
    ctx.lineTo(5, 1);
    ctx.fill();
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(4, 6, 3, 2);
    ctx.fillStyle = '#111827';
    ctx.fillRect(2, 11, 6, 1.5);
  }

  // руки та шабля
  const armY = torsoTop + 3;
  const swordDrawn = kind === 'guard' ? (f as Guard).alert : !!hero?.swordOut;
  ctx.lineCap = 'round';
  ctx.strokeStyle = pal.skin;
  ctx.lineWidth = 3.5;
  if (hang) {
    ctx.beginPath();
    ctx.moveTo(-4, armY);
    ctx.lineTo(-3, -4);
    ctx.moveTo(4, armY);
    ctx.lineTo(4, -4);
    ctx.stroke();
  } else {
    let hx = 8;
    let hy = armY + 8;
    let angle = -0.9; // кут шаблі
    if (f.act === 'attack') {
      const p = f.actT / Math.max(0.01, f.actDur);
      const thrust = p < 0.25 ? -(p / 0.25) * 3 : p < 0.6 ? -3 + ((p - 0.25) / 0.35) * 22 : 19 - ((p - 0.6) / 0.4) * 17;
      hx = 8 + thrust;
      hy = armY + 6;
      angle = -0.15;
    } else if (f.act === 'parry') {
      hx = 9;
      hy = armY + 4;
      angle = -1.45;
    } else if (running && !swordDrawn) {
      hy += Math.sin(phase) * 2;
    }
    ctx.beginPath();
    ctx.moveTo(3, armY);
    ctx.lineTo(hx, hy);
    ctx.stroke();
    if (swordDrawn || f.act === 'attack' || f.act === 'parry') {
      const len = kind === 'guard' && strong ? 26 : 24;
      const ex = hx + Math.cos(angle) * len;
      const ey = hy + Math.sin(angle) * len;
      ctx.strokeStyle = pal.blade;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(hx, hy);
      ctx.quadraticCurveTo((hx + ex) / 2 + 2, (hy + ey) / 2 - 3, ex, ey);
      ctx.stroke();
      ctx.strokeStyle = '#a16207';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(hx - 1, hy + 2.5);
      ctx.lineTo(hx + 1, hy - 2.5);
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#9ca3af';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(-6, torsoTop + 10);
      ctx.lineTo(-12, torsoTop + 20);
      ctx.stroke();
    }
  }
  ctx.restore();
};

export const drawWorld = (ctx: CanvasRenderingContext2D, w: World, time: number, hud: { time: number; deaths: number; level: number }): void => {
  const cam = Math.round(w.camX);
  // тло - стіна з цегли
  ctx.fillStyle = '#1b1426';
  ctx.fillRect(0, 0, VIEW_W, VIEW_H);
  const c0 = Math.max(0, Math.floor(cam / T));
  const c1 = Math.min(w.cols - 1, Math.floor((cam + VIEW_W) / T));
  for (let r = 0; r < ROWS; r++) {
    for (let c = c0; c <= c1; c++) {
      const x = c * T - cam;
      const y = r * T;
      if (!solid(w, c, r)) {
        ctx.fillStyle = (c + r) % 2 === 0 ? '#2a2036' : '#272032';
        ctx.fillRect(x, y, T, T);
        ctx.strokeStyle = 'rgba(0,0,0,0.28)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y + T - 0.5);
        ctx.lineTo(x + T, y + T - 0.5);
        const off = r % 2 === 0 ? 0 : T / 2;
        ctx.moveTo(x + off + 0.5, y);
        ctx.lineTo(x + off + 0.5, y + T);
        ctx.stroke();
      }
    }
  }

  // смолоскипи (свічення)
  for (const tc of w.torches) {
    const x = tc.x - cam;
    if (x < -80 || x > VIEW_W + 80) continue;
    const g = ctx.createRadialGradient(x, tc.y, 4, x, tc.y, 110);
    g.addColorStop(0, 'rgba(255,170,60,0.32)');
    g.addColorStop(1, 'rgba(255,170,60,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - 110, tc.y - 110, 220, 220);
  }

  // плитки
  for (let r = 0; r < ROWS; r++) {
    for (let c = c0; c <= c1; c++) {
      const ch = w.map[r][c];
      let x = c * T - cam;
      const y = r * T;
      if (ch === '#' || ch === 'F') {
        if (ch === 'F') {
          const lt = w.loose[`${r},${c}`] ?? 0;
          if (lt > 0) x += Math.sin(time * 70) * Math.min(2.5, lt * 8);
        }
        const open = !solid(w, c, r - 1);
        ctx.fillStyle = ch === 'F' ? '#7a6b86' : open ? '#6f6380' : '#554b63';
        ctx.fillRect(x, y, T, T);
        ctx.strokeStyle = 'rgba(0,0,0,0.35)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 1, y + 1, T - 2, T - 2);
        if (open) {
          ctx.fillStyle = '#9288a6';
          ctx.fillRect(x + 2, y + 2, T - 4, 4);
        }
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + 2, y + T / 2);
        ctx.lineTo(x + T - 2, y + T / 2);
        ctx.moveTo(x + ((c + r) % 2 ? 12 : 26), y + 2);
        ctx.lineTo(x + ((c + r) % 2 ? 12 : 26), y + T / 2);
        ctx.stroke();
        if (ch === 'F') {
          ctx.strokeStyle = 'rgba(0,0,0,0.55)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x + 8, y + 3);
          ctx.lineTo(x + 14, y + 14);
          ctx.lineTo(x + 10, y + 24);
          ctx.moveTo(x + 28, y + 6);
          ctx.lineTo(x + 24, y + 18);
          ctx.stroke();
        }
      } else if (ch === 'A' || ch === 'B') {
        const amt = w.gateAmt[ch] ?? 0;
        const hgt = T * (1 - amt);
        if (hgt > 1) {
          ctx.fillStyle = '#9ca3af';
          for (let i = 0; i < 4; i++) ctx.fillRect(x + 4 + i * 9, y, 4, hgt);
          ctx.fillStyle = '#d4a017';
          ctx.fillRect(x, y + hgt - 4, T, 4);
        }
      } else if (ch === 'a' || ch === 'b') {
        const pl = w.plates.find((p) => p.c === c && p.r === r);
        const hh = pl?.pressed ? 2 : 6;
        ctx.fillStyle = '#b45309';
        ctx.fillRect(x + 6, y + T - hh, T - 12, hh);
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(x + 6, y + T - hh, T - 12, 2);
      }
    }
  }

  // шипи
  for (const s of w.spikes) {
    const x = s.c * T - cam;
    if (x < -T || x > VIEW_W) continue;
    ctx.fillStyle = '#d1d5db';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(x + i * 8, s.r * T + T);
      ctx.lineTo(x + i * 8 + 4, s.r * T + T - 17);
      ctx.lineTo(x + i * 8 + 8, s.r * T + T);
      ctx.fill();
    }
  }

  // смолоскипи (полум'я)
  for (const tc of w.torches) {
    const x = tc.x - cam;
    ctx.fillStyle = '#78350f';
    ctx.fillRect(x - 2, tc.y, 4, 14);
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.ellipse(x, tc.y - 2, 5 + Math.sin(time * 14 + tc.x) * 1.2, 9 + Math.sin(time * 9 + tc.x) * 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.ellipse(x, tc.y, 2.5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // вихід
  if (w.exit) {
    const e = w.exit;
    const x = e.x - cam;
    ctx.fillStyle = '#d4a017';
    ctx.fillRect(x - 3, e.y - 4, e.w + 6, e.h + 4);
    const g = ctx.createLinearGradient(0, e.y, 0, e.y + e.h);
    g.addColorStop(0, '#fef3c7');
    g.addColorStop(1, '#f59e0b');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x, e.y + e.h);
    ctx.lineTo(x, e.y + 16);
    ctx.arc(x + e.w / 2, e.y + 16, e.w / 2, Math.PI, 0);
    ctx.lineTo(x + e.w, e.y + e.h);
    ctx.fill();
    ctx.fillStyle = '#7c2d12';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ВИХІД', x + e.w / 2, e.y - 10);
  }

  // настійки
  for (const it of w.items) {
    if (it.taken) continue;
    const x = it.c * T + T / 2 - cam;
    const y = it.r * T + T / 2 + Math.sin(time * 3 + it.c) * 3;
    const big = it.kind === 'H';
    const rad = big ? 9 : 7;
    ctx.fillStyle = big ? '#3b82f6' : '#ef4444';
    ctx.beginPath();
    ctx.arc(x, y + 4, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(x - 3, y - rad + 1, 6, 7);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.beginPath();
    ctx.arc(x - 3, y + 2, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // уламки плит
  for (const d of w.debris) {
    ctx.save();
    ctx.translate(d.x - cam + T / 2, d.y + T / 2);
    ctx.rotate(d.rot);
    ctx.fillStyle = '#7a6b86';
    ctx.fillRect(-T / 2, -T / 2, T, T);
    ctx.restore();
  }

  // вартові та герой
  for (const g of w.guards) drawFigure(ctx, g, 'guard', time, cam, g.strong);
  drawFigure(ctx, w.hero, 'hero', time, cam);

  // іскри
  for (const s of w.sparks) {
    ctx.globalAlpha = Math.min(1, s.t * 3);
    ctx.fillStyle = s.color;
    ctx.fillRect(s.x - cam - 1.5, s.y - 1.5, 3, 3);
  }
  ctx.globalAlpha = 1;

  // віньєтка
  const vg = ctx.createRadialGradient(VIEW_W / 2, VIEW_H / 2, VIEW_H * 0.4, VIEW_W / 2, VIEW_H / 2, VIEW_W * 0.65);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, VIEW_W, VIEW_H);

  // інтерфейс
  const h = w.hero;
  ctx.textAlign = 'left';
  ctx.font = '22px sans-serif';
  for (let i = 0; i < h.maxHp; i++) {
    ctx.globalAlpha = i < h.hp ? 1 : 0.25;
    ctx.fillText('❤️', 12 + i * 28, 34);
  }
  ctx.globalAlpha = 1;
  const eng = w.guards.filter((g) => !g.dead && g.alert);
  if (eng.length) {
    const g = eng[0];
    ctx.textAlign = 'right';
    for (let i = 0; i < g.maxHp; i++) {
      ctx.globalAlpha = i < g.hp ? 1 : 0.25;
      ctx.fillText('💚', VIEW_W - 12 - (g.maxHp - 1 - i) * 28 + 10, 34);
    }
    ctx.globalAlpha = 1;
  }
  ctx.textAlign = 'center';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillStyle = '#e5e7eb';
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.lineWidth = 3;
  const label = `${LEVELS[hud.level].name} · ${Math.floor(hud.time / 60)}:${String(Math.floor(hud.time % 60)).padStart(2, '0')} · загибелі: ${hud.deaths}`;
  ctx.strokeText(label, VIEW_W / 2, 22);
  ctx.fillText(label, VIEW_W / 2, 22);

  if (w.msg.t > 0) {
    ctx.globalAlpha = Math.min(1, w.msg.t * 2);
    ctx.font = 'bold 18px sans-serif';
    ctx.strokeText(w.msg.text, VIEW_W / 2, 70);
    ctx.fillStyle = '#fde68a';
    ctx.fillText(w.msg.text, VIEW_W / 2, 70);
    ctx.globalAlpha = 1;
  }
  if (h.dead) {
    ctx.fillStyle = `rgba(127,29,29,${Math.min(0.5, h.deadT * 0.6)})`;
    ctx.fillRect(0, 0, VIEW_W, VIEW_H);
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#fff';
    ctx.strokeText(w.deathReason, VIEW_W / 2, VIEW_H / 2);
    ctx.fillText(w.deathReason, VIEW_W / 2, VIEW_H / 2);
  }
};
