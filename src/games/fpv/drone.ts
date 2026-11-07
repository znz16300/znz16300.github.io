// Якість (клас) дрона: впливає на потужність, швидкість реакції, стійкість до ударів і чистоту картинки.
export type DroneId = 'basic' | 'standard' | 'pro';
export const DRONE_ORDER: DroneId[] = ['basic', 'standard', 'pro'];

export interface DroneCfg {
  id: DroneId;
  title: string;
  icon: string;
  description: string;
  power: number; // множник тяги
  rate: number; // множник швидкості обертання
  yaw: number; // множник рискання
  tough: number; // множник допустимої швидкості приземлення
  resp: number; // час реакції на стіки, с (менше - різкіше)
  noise: number; // шум аналогового відео 0..1
  stars: { power: number; agility: number; tough: number; video: number };
}

export const DRONES: Record<DroneId, DroneCfg> = {
  basic: {
    id: 'basic', title: 'Навчальний', icon: '🛸',
    description: 'Слабший мотор, плавні реакції, міцний корпус. Аналогове відео з шумом.',
    power: 0.9, rate: 0.85, yaw: 0.9, tough: 1.25, resp: 0.085, noise: 1,
    stars: { power: 2, agility: 2, tough: 5, video: 2 },
  },
  standard: {
    id: 'standard', title: 'Стандартний', icon: '🚁',
    description: 'Збалансований дрон: добра тяга й керованість, чітке відео.',
    power: 1, rate: 1, yaw: 1, tough: 1, resp: 0.05, noise: 0.35,
    stars: { power: 3, agility: 3, tough: 3, video: 3 },
  },
  pro: {
    id: 'pro', title: 'Професійний', icon: '🏎️',
    description: 'Потужний і дуже різкий гоночний дрон з чистим цифровим відео, але крихкий.',
    power: 1.25, rate: 1.2, yaw: 1.15, tough: 0.85, resp: 0.03, noise: 0,
    stars: { power: 5, agility: 5, tough: 2, video: 5 },
  },
};
