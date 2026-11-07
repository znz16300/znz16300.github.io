// Малювання арен, бійців і HUD на canvas (світ 800 × 450).
import { W, H, GROUND, ROUND_TIME, type Fighter, type World } from './engine';

type C = CanvasRenderingContext2D;

export const ARENAS = ['Степ над Дніпром', 'Нічний ліс', 'Острів Хортиця', 'Гора Змія'];

function limb(c: C, x1: number, y1: number, x2: number, y2: number, w: number, col: string) {
  c.strokeStyle = col; c.lineWidth = w; c.lineCap = 'round';
  c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
}

export function drawArena(c: C, arena: number, t: number) {
  const g = c.createLinearGradient(0, 0, 0, GROUND);
  if (arena === 0) { g.addColorStop(0, '#3b82f6'); g.addColorStop(0.7, '#fde68a'); g.addColorStop(1, '#fdba74'); }
  else if (arena === 1) { g.addColorStop(0, '#020617'); g.addColorStop(1, '#14532d'); }
  else if (arena === 2) { g.addColorStop(0, '#60a5fa'); g.addColorStop(1, '#bae6fd'); }
  else { g.addColorStop(0, '#450a0a'); g.addColorStop(0.6, '#b45309'); g.addColorStop(1, '#7c2d12'); }
  c.fillStyle = g; c.fillRect(0, 0, W, H);
  if (arena === 0) {
    c.fillStyle = '#fef08a'; c.beginPath(); c.arc(640, 120, 46, 0, 7); c.fill();
    c.fillStyle = '#65a30d'; c.beginPath(); c.moveTo(0, 330); c.quadraticCurveTo(200, 270, 420, 330); c.quadraticCurveTo(620, 380, 800, 300); c.lineTo(800, GROUND); c.lineTo(0, GROUND); c.fill();
    // вітряк
    c.fillStyle = '#e7d3a7'; c.beginPath(); c.moveTo(120, 340); c.lineTo(160, 340); c.lineTo(150, 270); c.lineTo(130, 270); c.fill();
    c.save(); c.translate(140, 268); c.rotate(t * 0.6); c.strokeStyle = '#7c4a21'; c.lineWidth = 5;
    for (let i = 0; i < 4; i++) { c.rotate(Math.PI / 2); c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -60); c.stroke(); c.fillStyle = 'rgba(255,255,255,.7)'; c.fillRect(-2, -58, 16, 34); }
    c.restore();
  } else if (arena === 1) {
    c.fillStyle = '#f1f5f9'; c.beginPath(); c.arc(150, 90, 34, 0, 7); c.fill();
    c.fillStyle = '#020617'; c.beginPath(); c.arc(164, 84, 30, 0, 7); c.fill();
    for (let i = 0; i < 9; i++) {
      const x = i * 100 + (i % 2) * 20; const h = 170 + (i * 37) % 70;
      c.fillStyle = i % 2 ? '#052e16' : '#064e3b';
      c.beginPath(); c.moveTo(x, GROUND); c.lineTo(x + 45, GROUND - h); c.lineTo(x + 90, GROUND); c.fill();
    }
    for (let i = 0; i < 12; i++) { // світлячки
      const x = (i * 83 + Math.sin(t + i) * 20) % W, y = 200 + ((i * 47) % 150) + Math.cos(t * 1.3 + i) * 12;
      c.fillStyle = `rgba(253,224,71,${0.5 + 0.5 * Math.sin(t * 3 + i)})`; c.beginPath(); c.arc(x, y, 2.5, 0, 7); c.fill();
    }
  } else if (arena === 2) {
    c.fillStyle = '#86efac'; c.beginPath(); c.moveTo(0, 300); c.quadraticCurveTo(250, 240, 500, 310); c.lineTo(500, GROUND); c.lineTo(0, GROUND); c.fill();
    c.fillStyle = '#38bdf8'; c.fillRect(0, 320, W, 70);
    c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = 2;
    for (let i = 0; i < 8; i++) { const x = ((i * 130 + t * 20) % (W + 60)) - 30; c.beginPath(); c.moveTo(x, 345 + (i % 3) * 14); c.quadraticCurveTo(x + 15, 338 + (i % 3) * 14, x + 30, 345 + (i % 3) * 14); c.stroke(); }
    c.fillStyle = '#fff'; c.fillRect(600, 250, 50, 70); c.fillStyle = '#facc15'; c.beginPath(); c.arc(625, 245, 22, Math.PI, 0); c.fill(); // церква
    c.fillStyle = '#92400e'; c.fillRect(0, GROUND - 10, W, 10);
  } else {
    c.fillStyle = '#57534e'; c.beginPath(); c.moveTo(0, GROUND); c.lineTo(180, 200); c.lineTo(260, 260); c.lineTo(420, 130); c.lineTo(600, 250); c.lineTo(680, 190); c.lineTo(800, GROUND); c.fill();
    c.fillStyle = `rgba(251,146,60,${0.25 + 0.15 * Math.sin(t * 2)})`; c.beginPath(); c.arc(420, 150, 80, 0, 7); c.fill();
  }
  // земля
  c.fillStyle = arena === 1 ? '#14532d' : arena === 3 ? '#44403c' : arena === 2 ? '#a16207' : '#a16207';
  c.fillRect(0, GROUND, W, H - GROUND);
  c.fillStyle = 'rgba(0,0,0,.18)'; c.fillRect(0, GROUND, W, 6);
}

function stars(c: C, x: number, y: number, t: number) {
  c.fillStyle = '#fde047'; c.font = '20px sans-serif'; c.textAlign = 'center';
  for (let i = 0; i < 3; i++) { const a = t * 4 + i * 2.1; c.fillText('★', x + Math.cos(a) * 26, y + Math.sin(a) * 7); }
}

export function drawFighter(c: C, f: Fighter, t: number) {
  const d = f.def, col = d.c, s = d.scale;
  const act = f.act;
  c.save();
  // тінь
  c.fillStyle = 'rgba(0,0,0,.25)';
  const sh = 1 - Math.min(0.5, (GROUND - f.y) / 300);
  c.beginPath(); c.ellipse(f.x, GROUND + 4, 34 * s * sh, 7 * sh, 0, 0, 7); c.fill();
  c.translate(f.x, f.y); c.scale(f.face * s, s);
  if (f.flash > 0 && Math.floor(f.flash * 40) % 2 === 0) c.globalAlpha = 0.55;
  const air = f.y < GROUND - 2;
  const stunned = f.stun > 0 && !f.ko;
  let lean = 0;
  if (stunned) lean = -0.28;
  if (f.ko) { c.translate(-10, 0); c.rotate(-Math.PI / 2 * 0.95); c.translate(0, -8); }
  c.rotate(lean);

  // прогрес дії
  let ext = 0, kind = '';
  if (act) {
    kind = act.kind === 'special' ? d.special.kind : act.kind;
    ext = act.t < act.st ? -0.35 * (act.t / act.st) : act.t < act.st + act.ac ? 1 : Math.max(0, 1 - (act.t - act.st - act.ac) / Math.max(0.01, act.dur - act.st - act.ac));
  }
  const walk = Math.sin(f.walkT);
  const bob = air || f.stun > 0 ? 0 : Math.sin(t * 3 + f.idx) * 1.5;
  // ноги
  let fx = 14 * walk, bx = -14 * walk, fy = 0, by = 0;
  if (air) { fx = 14; bx = -10; fy = -18; by = -10; }
  if (kind === 'kick') { fx = 8 + ext * 60; fy = -ext * 40 - 6; bx = -12; }
  if (f.blocking) { fx = 16; bx = -14; }
  limb(c, -4, -50 + bob, bx - 4, by - 4, 11, col.main);
  limb(c, 4, -50 + bob, fx + 4, fy - 4, 11, col.main);
  c.fillStyle = col.accent; // взуття
  c.beginPath(); c.ellipse(bx, by - 2, 9, 5, 0, 0, 7); c.fill();
  c.beginPath(); c.ellipse(fx + 4, fy - 2, 10, 5, 0, 0, 7); c.fill();
  // тулуб
  c.fillStyle = col.main; c.beginPath(); c.roundRect(-15, -92 + bob, 30, 46, 8); c.fill();
  c.fillStyle = col.accent; c.fillRect(-15, -58 + bob, 30, 6); // пояс
  // голова
  const hx = kind === 'kick' ? -4 * ext : 0;
  drawHead(c, f, hx, -106 + bob, t);
  // руки
  const sy = -86 + bob;
  let fhx = 20, fhy = -62 + bob, bhx = -4, bhy = -58 + bob;
  if (kind === 'punch') { fhx = 14 + ext * 52; fhy = -86 + bob; }
  if (kind === 'slash') { fhx = 14 + ext * 40; fhy = -90 + bob; bhx = 20; bhy = -80; }
  if (kind === 'fireball' || kind === 'vine') { fhx = 18 + Math.max(0, ext) * 42; fhy = -80 + bob; bhx = 10 + Math.max(0, ext) * 36; bhy = -76 + bob; }
  if (kind === 'quake') { const up = act && act.t < act.st ? 1 : 0; fhx = up ? 6 : 26; fhy = up ? -140 : -30; bhx = up ? -6 : 18; bhy = up ? -140 : -28; }
  if (f.blocking) { fhx = 22; fhy = -96; bhx = 18; bhy = -80; }
  if (stunned) { fhx = -16; fhy = -70; bhx = -22; bhy = -60; }
  if (f.ko) { fhx = 30; fhy = -40; bhx = -20; bhy = -30; }
  limb(c, -6, sy, bhx, bhy, 9, col.skin);
  limb(c, 6, sy, fhx, fhy, 9, col.skin);
  c.fillStyle = col.skin; c.beginPath(); c.arc(fhx, fhy, 6, 0, 7); c.fill();
  c.beginPath(); c.arc(bhx, bhy, 5.5, 0, 7); c.fill();
  // зброя / ефекти
  if (d.id === 'cossack' && (kind === 'slash' || kind === 'punch' || !kind)) {
    const ang = kind === 'slash' ? -1.2 + ext * 2.4 : -0.5;
    c.save(); c.translate(fhx, fhy); c.rotate(ang);
    c.strokeStyle = '#e2e8f0'; c.lineWidth = 4; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(26, -4, 52, 6); c.stroke();
    c.strokeStyle = '#92400e'; c.lineWidth = 6; c.beginPath(); c.moveTo(-8, 0); c.lineTo(2, 0); c.stroke();
    c.restore();
    if (kind === 'slash' && ext > 0.5) { c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = 6; c.beginPath(); c.arc(10, -70, 62, -1.1, 0.9); c.stroke(); }
  }
  if (kind === 'fireball' && ext < 0.9) {
    c.fillStyle = d.id === 'mavka' ? '#4ade80' : '#fb923c'; c.beginPath(); c.arc(fhx + 6, fhy, 8 + (act ? act.t * 14 : 0), 0, 7); c.fill();
  }
  if (kind === 'vine') { c.fillStyle = '#4ade80'; c.beginPath(); c.arc(fhx + 6, fhy, 8 + (act ? act.t * 10 : 0), 0, 7); c.fill(); }
  if (kind === 'quake' && act && act.t > act.st && act.t < act.st + 0.45) {
    c.fillStyle = 'rgba(120,53,15,.6)';
    for (let i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(i * 36 - 10, 0); c.lineTo(i * 36, -30 - (3 - Math.abs(i)) * 8); c.lineTo(i * 36 + 10, 0); c.fill(); }
  }
  if (f.blocking) { // щит-сяйво
    c.strokeStyle = 'rgba(147,197,253,.85)'; c.lineWidth = 5; c.beginPath(); c.arc(8, -70, 48, -1.0, 1.0); c.stroke();
  }
  c.restore();
  if (f.ko) stars(c, f.x, f.y - 40, t);
  else if (stunned) stars(c, f.x, f.y - 130 * s, t);
}

function drawHead(c: C, f: Fighter, x: number, y: number, t: number) {
  const d = f.def, col = d.c;
  const boss = d.id === 'zmiy';
  if (boss) { // крила
    c.fillStyle = '#14532d'; c.beginPath(); c.moveTo(-8, -88); c.lineTo(-48, -130 + Math.sin(t * 5) * 8); c.lineTo(-30, -80); c.lineTo(-52, -60); c.lineTo(-8, -66); c.fill();
  }
  if (d.id === 'witch' || d.id === 'mavka') { // довге волосся ззаду
    c.fillStyle = col.hair; c.beginPath(); c.roundRect(x - 18, y - 6, 16, 52, 8); c.fill();
  }
  c.fillStyle = col.skin; c.beginPath(); c.arc(x, y, 15, 0, 7); c.fill();
  // обличчя
  c.fillStyle = '#111827'; c.beginPath(); c.arc(x + 6, y - 2, 2.4, 0, 7); c.fill();
  c.strokeStyle = '#7f1d1d'; c.lineWidth = 2; c.beginPath();
  if (f.ko || f.stun > 0) { c.arc(x + 8, y + 8, 3, 0, 7); } else c.arc(x + 7, y + 5, 4, 0.2, Math.PI - 0.5);
  c.stroke();
  if (d.id === 'cossack') {
    c.fillStyle = col.hair; c.beginPath(); c.arc(x, y - 4, 15, Math.PI, 0); c.fill(); // чуб
    c.fillStyle = '#7f1d1d'; c.beginPath(); c.roundRect(x - 12, y - 24, 24, 14, 5); c.fill(); // шапка
    c.fillStyle = '#facc15'; c.fillRect(x - 12, y - 14, 24, 3);
    c.strokeStyle = '#0f172a'; c.lineWidth = 5; c.beginPath(); c.moveTo(x + 7, y + 8); c.quadraticCurveTo(x + 14, y + 10, x + 22, y + 6); c.stroke(); // вуса
  } else if (d.id === 'witch') {
    c.fillStyle = '#3b0764'; c.beginPath(); c.moveTo(x - 24, y - 10); c.lineTo(x + 24, y - 10); c.lineTo(x + 4, y - 20); c.lineTo(x + 8, y - 54); c.lineTo(x - 12, y - 20); c.fill();
    c.fillStyle = col.accent; c.fillRect(x - 12, y - 20, 18, 4);
  } else if (d.id === 'leshy') {
    c.fillStyle = col.hair; c.beginPath(); c.arc(x, y - 10, 16, Math.PI, 0); c.fill();
    c.beginPath(); c.moveTo(x - 6, y + 12); c.lineTo(x + 6, y + 12); c.lineTo(x + 2, y + 32); c.fill(); // борода-мох
    for (let i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(x + i * 8 - 4, y - 18); c.lineTo(x + i * 8, y - 36); c.lineTo(x + i * 8 + 4, y - 18); c.fill(); } // листя
  } else if (d.id === 'mavka') {
    c.fillStyle = col.hair; c.beginPath(); c.arc(x, y - 3, 15, Math.PI, 0); c.fill();
    c.fillStyle = col.accent; for (let i = 0; i < 5; i++) { c.beginPath(); c.arc(x - 12 + i * 6, y - 15, 4, 0, 7); c.fill(); } // вінок
  } else { // Змій
    c.fillStyle = col.accent; c.beginPath(); c.moveTo(x - 8, y - 12); c.lineTo(x - 4, y - 32); c.lineTo(x, y - 12); c.moveTo(x + 4, y - 12); c.lineTo(x + 10, y - 32); c.lineTo(x + 14, y - 10); c.fill();
  }
}

export function drawProjectiles(c: C, w: World, t: number) {
  for (const p of w.proj) {
    if (p.kind === 'fire') {
      const g = c.createRadialGradient(p.x, p.y, 2, p.x, p.y, p.r + 8);
      g.addColorStop(0, '#fff7ed'); g.addColorStop(0.5, w.f[p.owner].def.id === 'mavka' ? '#4ade80' : '#fb923c'); g.addColorStop(1, 'rgba(239,68,68,0)');
      c.fillStyle = g; c.beginPath(); c.arc(p.x, p.y, p.r + 8, 0, 7); c.fill();
    } else {
      c.strokeStyle = '#16a34a'; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath();
      for (let i = 0; i < 6; i++) { const x = p.x - Math.sign(p.vx) * i * 10; const y = p.y + Math.sin(t * 14 + i) * 5; if (i) c.lineTo(x, y); else c.moveTo(x, y); }
      c.stroke();
      c.fillStyle = '#ec4899'; c.beginPath(); c.arc(p.x, p.y, 7, 0, 7); c.fill();
    }
  }
  for (const s of w.sparks) {
    const k = s.t / 0.35, r = (s.big ? 40 : 26) * (0.4 + k);
    c.strokeStyle = s.color; c.globalAlpha = 1 - k; c.lineWidth = 4;
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; c.beginPath(); c.moveTo(s.x + Math.cos(a) * r * 0.5, s.y + Math.sin(a) * r * 0.5); c.lineTo(s.x + Math.cos(a) * r, s.y + Math.sin(a) * r); c.stroke(); }
    c.globalAlpha = 1;
  }
}

function bar(c: C, x: number, y: number, wd: number, h: number, v: number, col: string, right: boolean) {
  c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(x - 2, y - 2, wd + 4, h + 4);
  c.fillStyle = col; const bw = wd * Math.max(0, Math.min(1, v));
  c.fillRect(right ? x + wd - bw : x, y, bw, h);
}

export function drawHud(c: C, w: World, names: [string, string]) {
  for (const i of [0, 1] as const) {
    const f = w.f[i], right = i === 1, x = right ? W - 20 - 330 : 20;
    const v = f.hp / f.maxHp;
    bar(c, x, 16, 330, 22, v, v > 0.5 ? '#22c55e' : v > 0.25 ? '#eab308' : '#ef4444', right);
    bar(c, x, 44, 330, 8, f.en / 100, f.en >= f.def.special.cost ? '#38bdf8' : '#64748b', right);
    c.font = 'bold 16px sans-serif'; c.textAlign = right ? 'right' : 'left'; c.fillStyle = '#fff';
    c.fillText(`${f.def.emoji} ${names[i]}`, right ? x + 330 : x, 72);
    for (let k = 0; k < 2; k++) { // зірки перемог
      c.fillStyle = k < w.wins[i] ? '#facc15' : 'rgba(255,255,255,.25)'; c.font = '20px sans-serif';
      c.fillText('★', right ? x + 330 - 10 - k * 24 : x + 10 + k * 24, 98);
    }
    if (f.combo >= 2 && f.comboT > 0) {
      c.font = 'bold 26px sans-serif'; c.fillStyle = '#fde047'; c.textAlign = 'center';
      c.fillText(`Комбо ×${f.combo}!`, W * (right ? 0.78 : 0.22), 140);
    }
  }
  c.textAlign = 'center'; c.fillStyle = 'rgba(0,0,0,.55)'; c.beginPath(); c.roundRect(W / 2 - 32, 12, 64, 46, 10); c.fill();
  c.fillStyle = w.timer < 10 ? '#f87171' : '#fff'; c.font = 'bold 34px sans-serif';
  c.fillText(String(Math.ceil(Math.min(ROUND_TIME, w.timer))), W / 2, 48);
  if (w.phase === 'intro' || w.phase === 'ko') {
    const text = w.phase === 'ko' && w.banner !== 'Час вийшов!' ? 'Нокаут!' : w.banner;
    c.font = 'bold 72px sans-serif'; c.lineWidth = 8; c.strokeStyle = '#7f1d1d'; c.fillStyle = '#fde047';
    c.strokeText(text, W / 2, 230); c.fillText(text, W / 2, 230);
  }
}
