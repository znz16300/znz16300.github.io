export type Comp = 'iron' | 'sand' | 'salt' | 'oil' | 'water' | 'alcohol' | 'buckwheat' | 'flour';
export type Method = 'magnet' | 'dissolve' | 'filter' | 'evaporate' | 'settle' | 'distill' | 'sieve';

export const COMP: Record<Comp, { emoji: string; name: string }> = {
  iron: { emoji: '🔩', name: 'залізні ошурки' },
  sand: { emoji: '🏖️', name: 'пісок' },
  salt: { emoji: '🧂', name: 'сіль' },
  oil: { emoji: '🫒', name: 'олія' },
  water: { emoji: '💧', name: 'вода' },
  alcohol: { emoji: '🍷', name: 'спирт' },
  buckwheat: { emoji: '🌾', name: 'гречка' },
  flour: { emoji: '🥣', name: 'борошно' },
};

export const METHODS: { id: Method; emoji: string; name: string }[] = [
  { id: 'magnet', emoji: '🧲', name: 'Магніт' },
  { id: 'dissolve', emoji: '🫗', name: 'Розчинити у воді' },
  { id: 'filter', emoji: '🧻', name: 'Фільтрування' },
  { id: 'evaporate', emoji: '♨️', name: 'Випарювання' },
  { id: 'settle', emoji: '🧪', name: 'Відстоювання' },
  { id: 'distill', emoji: '⚗️', name: 'Перегонка' },
  { id: 'sieve', emoji: '🌀', name: 'Просіювання' },
];

export interface Task { id: string; title: string; comps: Comp[]; solution: Method[]; wet: boolean }

export const TASKS: Task[] = [
  { id: 'iron-sand', title: 'Залізні ошурки розсипали в пісок', comps: ['iron', 'sand'], solution: ['magnet'], wet: false },
  { id: 'sand-water', title: 'Каламутна вода з піском', comps: ['sand', 'water'], solution: ['filter'], wet: true },
  { id: 'salt-water', title: 'Солона вода — треба отримати сіль', comps: ['salt', 'water'], solution: ['evaporate'], wet: true },
  { id: 'oil-water', title: 'Олія в воді', comps: ['oil', 'water'], solution: ['settle'], wet: true },
  { id: 'sand-salt', title: 'Пісок змішали з сіллю', comps: ['sand', 'salt'], solution: ['dissolve', 'filter', 'evaporate'], wet: false },
  { id: 'iron-sand-salt', title: 'Залізо, пісок і сіль разом', comps: ['iron', 'sand', 'salt'], solution: ['magnet', 'dissolve', 'filter', 'evaporate'], wet: false },
  { id: 'alcohol-water', title: 'Спирт і вода (розчин)', comps: ['alcohol', 'water'], solution: ['distill'], wet: true },
  { id: 'grain-flour', title: 'Гречка з борошном', comps: ['buckwheat', 'flour'], solution: ['sieve'], wet: false },
];

export interface Result { log: string[]; collected: Comp[][]; ok: boolean; leftover: Comp[] }

/** Виконує план розділення. Усе діє на «головну» суміш. */
export function run(task: Task, plan: Method[]): Result {
  let main: Comp[] = [...task.comps];
  let wet = task.wet;
  const dissolved = new Set<Comp>(task.wet && main.includes('salt') ? ['salt'] : []);
  const collected: Comp[][] = [];
  const log: string[] = [];
  let waterLost = false;
  const has = (c: Comp) => main.includes(c);
  const ins = (): Comp[] => main.filter((c) => c === 'sand' || c === 'iron');
  const drop = (...cs: Comp[]) => { main = main.filter((m) => !cs.includes(m)); };

  plan.forEach((m) => {
    const name = METHODS.find((x) => x.id === m)!.name;
    if (main.length <= 1 && !(m === 'evaporate' && has('water'))) { log.push(`${name}: суміші вже немає — зайвий крок.`); return; }
    switch (m) {
      case 'magnet':
        if (wet) log.push('Магніт: у воді магнітити незручно — спочатку треба сухе.');
        else if (has('iron')) { collected.push(['iron']); drop('iron'); log.push('Магніт: залізо притягнулося й відділилося.'); }
        else log.push('Магніт: нічого не притягнулося — тут немає заліза.');
        break;
      case 'dissolve':
        if (wet) log.push('Розчинити: уже є вода.');
        else { wet = true; main.push('water'); if (has('salt')) dissolved.add('salt'); log.push(has('salt') ? 'Розчинити: сіль розчинилась у воді, пісок лишився на дні.' : 'Розчинити: додали воду.'); }
        break;
      case 'filter':
        if (!wet) log.push('Фільтрування: спершу треба розчинити суміш у воді.');
        else if (ins().length) {
          const g = ins();
          collected.push(g); drop(...g);
          log.push(g.length > 1 ? 'Фільтрування: на фільтрі лишилася суміш заліза й піску — їх треба було відокремити магнітом раніше.' : 'Фільтрування: тверда речовина залишилась на фільтрі, розчин пройшов.');
        }
        else log.push('Фільтрування: на фільтрі нічого не залишилося.');
        break;
      case 'evaporate':
        if (!wet || !has('water')) log.push('Випарювання: тут нема що випарювати.');
        else if (has('alcohol')) { log.push('Випарювання: випарувалось усе — і спирт, і вода. Результату нема.'); main = []; waterLost = true; }
        else if (has('oil')) log.push('Випарювання: олія не випаровується разом з водою — шлях помилковий.');
        else if (ins().length && dissolved.has('salt')) { collected.push([...ins(), 'salt']); main = []; waterLost = true; log.push('Випарювання: вода зникла, але сіль змішалась із твердим осадом — результат не чистий.'); }
        else if (dissolved.has('salt')) { collected.push(['salt']); drop('salt', 'water'); waterLost = true; wet = false; log.push('Випарювання: вода випарувалась, у чашці — кристали солі.'); }
        else { drop('water'); waterLost = true; wet = false; log.push('Випарювання: вода випарувалась.'); }
        break;
      case 'settle':
        if (has('oil') && has('water')) { collected.push(['oil'], ['water']); main = []; log.push('Відстоювання: олія зібралась зверху — її злили окремо.'); }
        else log.push('Відстоювання: ці речовини не розшаровуються.');
        break;
      case 'distill':
        if (has('alcohol') && has('water')) { collected.push(['alcohol'], ['water']); main = []; log.push('Перегонка: спирт закипає раніше (78 °C) — його зібрали окремо.'); }
        else log.push('Перегонка: це не розчин рідин із різною температурою кипіння.');
        break;
      case 'sieve':
        if (wet) log.push('Просіювання: мокру суміш просіювати не вийде.');
        else if (has('buckwheat') && has('flour')) { collected.push(['buckwheat'], ['flour']); main = []; log.push('Просіювання: борошно пройшло через сито, а гречка лишилась.'); }
        else log.push('Просіювання: частинки за розміром не відрізняються.');
        break;
    }
  });
  const leftover = main.filter((c) => !(c === 'water' && waterLost));
  const pure = collected.every((g) => g.length === 1);
  const got = new Set<Comp>([...collected.flat(), ...leftover]);
  const allGot = task.comps.every((c) => got.has(c) || (c === 'water' && waterLost));
  return { log, collected, leftover, ok: pure && leftover.length <= 1 && allGot };
}
