// Рівні складності FPV-симулятора.
// Щоб додати рівень: допишіть id у LevelId та LEVEL_ORDER, і додайте запис у LEVELS.
//   mode     - режим польоту: 'angle' (самовирівнювання), 'horizon' (вирівнювання + перевороти при повному відхиленні), 'acro' (повний ручний контроль)
//   maxTilt  - максимальний нахил у режимах angle/horizon, градуси
//   rate     - швидкість обертання крен/тангаж, град/с
//   yawRate  - швидкість рискання, град/с
//   ratio    - відношення тяги до ваги (скільки g дає повний газ); чим більше, тим нижче положення газу для зависання
//   dampY    - гасіння вертикальної швидкості (допомога на легкому рівні)
//   tiltComp - компенсація падіння тяги при нахилі
//   gateR    - радіус воріт, м
//   camTilt  - нахил камери вгору, градуси (як на справжніх FPV)
//   crashV   - швидкість удару об землю, більша за яку - аварія, м/с
//   limit    - ліміт часу, с
//   beam     - світловий промінь над наступними воротами
//   gates    - ворота [x, z, висота центру]; політ починається в (0,0) у бік -z; напрям воріт обчислюється автоматично

export type LevelId = 'easy' | 'medium' | 'hard';
export const LEVEL_ORDER: LevelId[] = ['easy', 'medium', 'hard'];

export interface LevelCfg {
  id: LevelId;
  title: string;
  description: string;
  mode: 'angle' | 'horizon' | 'acro';
  modeLabel: string;
  maxTilt: number;
  rate: number;
  yawRate: number;
  ratio: number;
  dampY: number;
  tiltComp: boolean;
  gateR: number;
  camTilt: number;
  crashV: number;
  limit: number;
  beam: boolean;
  gates: [number, number, number][];
}

export const LEVELS: Record<LevelId, LevelCfg> = {
  easy: {
    id: 'easy',
    title: 'Новачок',
    description: 'Режим ANGLE: дрон сам вирівнюється, допомога з висотою, великі ворота, яскравий промінь над наступними воротами.',
    mode: 'angle',
    modeLabel: 'ANGLE',
    maxTilt: 32,
    rate: 200,
    yawRate: 100,
    ratio: 2.2,
    dampY: 1.4,
    tiltComp: true,
    gateR: 3.6,
    camTilt: 20,
    crashV: 7,
    limit: 240,
    beam: true,
    gates: [
      [0, -35, 4.4],
      [6, -75, 5],
      [22, -110, 5.5],
      [50, -135, 5.5],
      [85, -140, 5],
      [115, -120, 4.6],
      [130, -85, 5],
      [128, -45, 4.4],
    ],
  },
  medium: {
    id: 'medium',
    title: 'Любитель',
    description: 'Режим HORIZON: дрон вирівнюється, але при повному відхиленні стіка можна робити перевороти. Менші ворота, перепади висоти.',
    mode: 'horizon',
    modeLabel: 'HORIZON',
    maxTilt: 50,
    rate: 240,
    yawRate: 150,
    ratio: 3.0,
    dampY: 0.5,
    tiltComp: false,
    gateR: 2.7,
    camTilt: 28,
    crashV: 6,
    limit: 180,
    beam: true,
    gates: [
      [0, -40, 3.4],
      [-10, -80, 4.5],
      [-30, -115, 6],
      [-60, -140, 5],
      [-95, -145, 3.4],
      [-125, -125, 3.2],
      [-140, -90, 4.6],
      [-125, -55, 6.5],
      [-95, -35, 7],
      [-60, -30, 5],
    ],
  },
  hard: {
    id: 'hard',
    title: 'Пілот',
    description: 'Режим ACRO: повністю ручне керування кутовою швидкістю, без самовирівнювання. Вузькі ворота, швидка траса, без підказок-променів.',
    mode: 'acro',
    modeLabel: 'ACRO',
    maxTilt: 80,
    rate: 420,
    yawRate: 280,
    ratio: 3.6,
    dampY: 0,
    tiltComp: false,
    gateR: 2.1,
    camTilt: 35,
    crashV: 5,
    limit: 150,
    beam: false,
    gates: [
      [0, -32, 3],
      [6, -65, 6],
      [26, -92, 9],
      [58, -105, 12],
      [92, -95, 9],
      [112, -68, 5],
      [110, -35, 2.6],
      [88, -10, 2.6],
      [58, -2, 4],
      [30, 15, 7],
      [5, 35, 9],
      [-22, 58, 6],
      [-55, 62, 3.2],
      [-85, 45, 2.6],
    ],
  },
};
