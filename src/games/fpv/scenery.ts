// Декорації траси: різні дерева та будівлі. Генерація детермінована (за насінням рівня).
export type TreeKind = 'spruce' | 'pine' | 'oak' | 'birch' | 'poplar';
export interface Tree {
  x: number;
  z: number;
  h: number;
  R: number;
  kind: TreeKind;
}
export type BuildingKind = 'house' | 'barn' | 'hut' | 'tower';
export interface Building {
  x: number;
  z: number;
  hx: number; // півширина по x
  hz: number; // півширина по z
  h: number; // висота стін
  rh: number; // висота даху (0 - плаский)
  kind: BuildingKind;
}

const distSeg = (px: number, pz: number, ax: number, az: number, bx: number, bz: number): number => {
  const dx = bx - ax;
  const dz = bz - az;
  const l2 = dx * dx + dz * dz || 1;
  const t = Math.min(1, Math.max(0, ((px - ax) * dx + (pz - az) * dz) / l2));
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
};
const distPath = (x: number, z: number, path: [number, number][]) => {
  let d = Infinity;
  for (let i = 0; i < path.length - 1; i++) d = Math.min(d, distSeg(x, z, path[i][0], path[i][1], path[i + 1][0], path[i + 1][1]));
  return d;
};

export function genScenery(path: [number, number][], rnd: () => number): { trees: Tree[]; buildings: Building[] } {
  const xs = path.map((q) => q[0]);
  const zs = path.map((q) => q[1]);
  const x0 = Math.min(...xs) - 120;
  const x1 = Math.max(...xs) + 120;
  const z0 = Math.min(...zs) - 120;
  const z1 = Math.max(...zs) + 120;

  // будівлі
  const buildings: Building[] = [];
  const kinds: BuildingKind[] = ['house', 'house', 'barn', 'hut', 'house', 'tower', 'barn', 'hut', 'house', 'house', 'tower', 'hut'];
  for (let tries = 0; tries < 800 && buildings.length < kinds.length; tries++) {
    const kind = kinds[buildings.length];
    const x = x0 + rnd() * (x1 - x0);
    const z = z0 + rnd() * (z1 - z0);
    if (distPath(x, z, path) < 30 || Math.hypot(x, z) < 28) continue;
    if (buildings.some((b) => Math.hypot(b.x - x, b.z - z) < 38)) continue;
    let b: Building;
    if (kind === 'house') b = { x, z, hx: 5 + rnd() * 1.5, hz: 3.5 + rnd(), h: 3.4, rh: 2.4, kind };
    else if (kind === 'barn') b = { x, z, hx: 7 + rnd() * 2, hz: 4.5 + rnd(), h: 5, rh: 3.2, kind };
    else if (kind === 'hut') b = { x, z, hx: 2.8, hz: 2.4, h: 2.6, rh: 1.8, kind };
    else b = { x, z, hx: 2.6, hz: 2.6, h: 28, rh: 0, kind };
    buildings.push(b);
  }

  // дерева різних видів
  const trees: Tree[] = [];
  for (let tries = 0; tries < 2000 && trees.length < 190; tries++) {
    const x = x0 + rnd() * (x1 - x0);
    const z = z0 + rnd() * (z1 - z0);
    if (distPath(x, z, path) < 18 || Math.hypot(x, z) < 16) continue;
    if (buildings.some((b) => Math.abs(x - b.x) < b.hx + 6 && Math.abs(z - b.z) < b.hz + 6)) continue;
    const r = rnd();
    let t: Tree;
    if (r < 0.32) t = { x, z, h: 7 + rnd() * 9, R: 2.2 + rnd() * 1.6, kind: 'spruce' };
    else if (r < 0.52) t = { x, z, h: 12 + rnd() * 8, R: 2 + rnd() * 1, kind: 'pine' };
    else if (r < 0.74) t = { x, z, h: 8 + rnd() * 4, R: 3.5 + rnd() * 1.5, kind: 'oak' };
    else if (r < 0.9) t = { x, z, h: 7 + rnd() * 4, R: 1.8 + rnd() * 0.8, kind: 'birch' };
    else t = { x, z, h: 12 + rnd() * 8, R: 1.3 + rnd() * 0.5, kind: 'poplar' };
    trees.push(t);
  }
  return { trees, buildings };
}

/** Радіус перешкоди дерева на висоті y (для зіткнень). */
export function treeRadiusAt(t: Tree, y: number): number {
  const k = y / t.h;
  switch (t.kind) {
    case 'spruce':
      return t.R * (1 - k);
    case 'pine':
      return k < 0.6 ? 0.6 : t.R * 0.85;
    case 'oak':
      return k < 0.35 ? 0.7 : t.R;
    case 'birch':
      return k < 0.4 ? 0.5 : t.R * 0.75;
    default:
      return k < 0.2 ? 0.5 : t.R * 0.7;
  }
}

export const buildingTop = (b: Building) => b.h + b.rh;
