// FullScheduleTable.tsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ScheduleData, WeekSchedule } from '@/type/scheduledata';
import { getDayName, daysArray } from './scheduleHelpers';
import { WeekType, getCellBackgroundColor, getDistTypeBadge } from './distDataHelper';
import { getDistData, getLessonDistType } from './distData';

interface FullScheduleTableProps {
  scheduleData: ScheduleData;
  schedule: ScheduleData;
  fullSchedule: Record<string, WeekSchedule>;
  view: 'fullClasses' | 'fullTeachers' | 'fullClassrooms';
  weekType: WeekType;
  selectedDay: string;
}

// ─── Preset types ─────────────────────────────────────────────────────────────

interface FilterPreset {
  name: string;
  rowIds: string[];      // item IDs
  subjects: string[];    // subject names (subjects have no IDs, names are unique)
}

// ─── URL / localStorage helpers ───────────────────────────────────────────────

const PARAM_ROWS = 'filterRows';
const PARAM_SUBJ = 'filterSubjects';
const LS_FILTER_PREFIX = 'scheduleFilter_';
const LS_PRESETS_PREFIX = 'scheduleFilterPresets_';

/** Read raw IDs/subjects from URL. Returns null if param absent. */
function readUrlFilter(): { rowIds: string[] | null; subjects: string[] | null } {
  const sp = new URLSearchParams(window.location.search);
  const rowIds = sp.has(PARAM_ROWS)
    ? sp.get(PARAM_ROWS)!.split(',').map(s => s.trim()).filter(Boolean)
    : null;
  const subjects = sp.has(PARAM_SUBJ)
    ? sp.get(PARAM_SUBJ)!.split(',').map(s => s.trim()).filter(Boolean)
    : null;
  return { rowIds, subjects };
}

function writeUrlFilter(rowIds: string[] | null, subjects: string[] | null) {
  const sp = new URLSearchParams(window.location.search);
  if (rowIds === null) { sp.delete(PARAM_ROWS); } else { sp.set(PARAM_ROWS, rowIds.join(',')); }
  if (subjects === null) { sp.delete(PARAM_SUBJ); } else { sp.set(PARAM_SUBJ, subjects.join(',')); }
  window.history.replaceState(null, '', `${window.location.pathname}?${sp.toString()}`);
}

function readLsFilter(view: string): { rowIds: string[] | null; subjects: string[] | null } {
  try {
    const raw = localStorage.getItem(`${LS_FILTER_PREFIX}${view}`);
    if (!raw) return { rowIds: null, subjects: null };
    const parsed = JSON.parse(raw);
    // support old format that stored names in `rows`
    return { rowIds: parsed.rowIds ?? parsed.rows ?? null, subjects: parsed.subjects ?? null };
  } catch {
    return { rowIds: null, subjects: null };
  }
}

function writeLsFilter(view: string, rowIds: string[] | null, subjects: string[] | null) {
  try {
    localStorage.setItem(`${LS_FILTER_PREFIX}${view}`, JSON.stringify({ rowIds, subjects }));
  } catch { /* quota / private mode */ }
}

function readPresets(view: string): FilterPreset[] {
  try {
    const raw = localStorage.getItem(`${LS_PRESETS_PREFIX}${view}`);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function writePresets(view: string, presets: FilterPreset[]) {
  try {
    localStorage.setItem(`${LS_PRESETS_PREFIX}${view}`, JSON.stringify(presets));
  } catch { /* ignore */ }
}

// ─── Reusable filter dropdown ────────────────────────────────────────────────

interface FilterDropdownProps {
  icon: React.ReactNode;
  isPartial: boolean;
  title: string;
  children: React.ReactNode;
  width?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ icon, isPartial, title, children, width = 'w-52' }) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen(p => !p)}
        title={title}
        className={`flex items-center justify-center w-5 h-5 rounded transition-colors
          ${isPartial ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300' : 'bg-blue-500 text-white hover:bg-blue-400'}`}
      >
        {icon}
      </button>
      {open && (
        <div
          ref={panelRef}
          className={`absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-xl rounded-lg border border-gray-200 z-50 ${width} max-h-80 flex flex-col`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// ─── Generic checklist panel ─────────────────────────────────────────────────

interface ChecklistPanelProps {
  items: { id: string; name: string }[];
  selected: Set<string>;
  onToggle: (id: string) => void;
  onToggleAll: () => void;
  label: string;
  enableCtrlA: boolean;
}

const ChecklistPanel: React.FC<ChecklistPanelProps> = ({ items, selected, onToggle, onToggleAll, label, enableCtrlA }) => {
  const allSelected = selected.size === items.length;
  const partiallySelected = !allSelected && selected.size > 0;

  useEffect(() => {
    if (!enableCtrlA) return;
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
        onToggleAll();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [enableCtrlA, onToggleAll]);

  return (
    <>
      <div className="px-3 py-2 border-b border-gray-100 flex items-center gap-2 bg-gray-50 rounded-t-lg">
        <input
          type="checkbox"
          checked={allSelected}
          ref={el => { if (el) el.indeterminate = partiallySelected; }}
          onChange={onToggleAll}
          className="w-3.5 h-3.5 accent-blue-600 cursor-pointer"
        />
        <span className="text-xs font-semibold text-gray-600 flex-1 select-none">{label} ({items.length})</span>
        <span className="text-[10px] text-gray-400">Ctrl+A</span>
      </div>
      <div className="overflow-y-auto flex-1">
        {items.map(item => (
          <label key={item.id} className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-50 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={selected.has(item.id)}
              onChange={() => onToggle(item.id)}
              className="w-3.5 h-3.5 accent-blue-600 cursor-pointer"
            />
            <span className="text-xs text-gray-700">{item.name}</span>
          </label>
        ))}
      </div>
      <div className="px-3 py-1.5 border-t border-gray-100 bg-gray-50 rounded-b-lg">
        <span className="text-[10px] text-gray-400">Відмічено: {selected.size} / {items.length}</span>
      </div>
    </>
  );
};

// ─── Presets panel ────────────────────────────────────────────────────────────

interface PresetsPanelProps {
  view: string;
  currentRowIds: Set<string>;
  currentSubjects: Set<string>;
  allIds: string[];
  allSubjectNames: string[];
  onLoad: (rowIds: string[], subjects: string[]) => void;
}

const PresetsPanel: React.FC<PresetsPanelProps> = ({
  view, currentRowIds, currentSubjects, allIds, allSubjectNames, onLoad,
}) => {
  const [presets, setPresets] = useState<FilterPreset[]>(() => readPresets(view));
  const [newName, setNewName] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  useEffect(() => {
    setPresets(readPresets(view));
    setNewName('');
    setConfirmDelete(null);
  }, [view]);

  const savePreset = () => {
    const name = newName.trim();
    if (!name) return;
    // empty array = "all selected" sentinel
    const rowIds = currentRowIds.size === allIds.length ? [] : Array.from(currentRowIds);
    const subjects = currentSubjects.size === allSubjectNames.length ? [] : Array.from(currentSubjects);
    const updated = [...presets.filter(p => p.name !== name), { name, rowIds, subjects }];
    setPresets(updated);
    writePresets(view, updated);
    setNewName('');
  };

  const deletePreset = (name: string) => {
    const updated = presets.filter(p => p.name !== name);
    setPresets(updated);
    writePresets(view, updated);
    setConfirmDelete(null);
  };

  const loadPreset = (preset: FilterPreset) => {
    const rowIds = preset.rowIds.length === 0 ? allIds : preset.rowIds;
    const subjects = preset.subjects.length === 0 ? allSubjectNames : preset.subjects;
    onLoad(rowIds, subjects);
  };

  return (
    <div className="flex flex-col overflow-hidden max-h-80">
      <div className="px-3 py-2 border-b border-gray-100 bg-gray-50 rounded-t-lg">
        <div className="text-[10px] font-semibold text-gray-500 uppercase mb-1.5">Зберегти поточний фільтр</div>
        <div className="flex gap-1">
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') savePreset(); }}
            placeholder="Назва пресету…"
            className="flex-1 text-xs border border-gray-300 rounded px-2 py-1 outline-none focus:border-blue-400"
          />
          <button
            onClick={savePreset}
            disabled={!newName.trim()}
            className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ✓
          </button>
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {presets.length === 0 && (
          <div className="px-3 py-4 text-center text-xs text-gray-400">Немає збережених пресетів</div>
        )}
        {presets.map(preset => (
          <div key={preset.name} className="flex items-center gap-1 px-3 py-1.5 hover:bg-blue-50 group">
            <button
              onClick={() => loadPreset(preset)}
              className="flex-1 text-left text-xs text-gray-700 hover:text-blue-700 truncate"
              title={preset.name}
            >
              {preset.name}
            </button>
            {confirmDelete === preset.name ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-400">Видалити?</span>
                <button onClick={() => deletePreset(preset.name)} className="text-[10px] text-red-500 hover:text-red-700 font-bold">Так</button>
                <button onClick={() => setConfirmDelete(null)} className="text-[10px] text-gray-400 hover:text-gray-600">Ні</button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmDelete(preset.name)}
                className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 text-xs transition-opacity"
                title="Видалити"
              >✕</button>
            )}
          </div>
        ))}
      </div>
      <div className="px-3 py-1.5 border-t border-gray-100 bg-gray-50 rounded-b-lg">
        <span className="text-[10px] text-gray-400">Пресетів: {presets.length}</span>
      </div>
    </div>
  );
};

// ─── SVG icons ───────────────────────────────────────────────────────────────

const FunnelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
    <path d="M1.5 2.5A.5.5 0 0 1 2 2h12a.5.5 0 0 1 .354.854l-4.5 4.5A.5.5 0 0 1 9.5 7.7V13a.5.5 0 0 1-.276.447l-3 1.5A.5.5 0 0 1 5.5 14.5V7.7a.5.5 0 0 1-.146-.346L1 2.854A.5.5 0 0 1 1.5 2.5z"/>
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h8.75a.75.75 0 0 1 0 1.5H2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h8.75a.75.75 0 0 1 0 1.5H2.5A1.5 1.5 0 0 1 1 13.5zm4.25 4.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0-3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm7.75-8.5h.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-.5V2.75z"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
);

// ─── Helper: collect all lessons for an item ──────────────────────────────────

function getLessonsForItem(
  itemId: string,
  itemName: string,
  view: string,
  fullSchedule: Record<string, WeekSchedule>,
  scheduleData: ScheduleData,
  days: string[],
) {
  const lessons: { subject: string }[] = [];
  for (const day of days) {
    for (const period of scheduleData.periods) {
      lessons.push(...(fullSchedule[itemId]?.[day]?.[period.id] || []));
      if (view === 'fullClassrooms') {
        const twin = scheduleData.classrooms.find(c => c.name === `${itemName}_`);
        if (twin) lessons.push(...(fullSchedule[twin.id]?.[day]?.[period.id] || []));
      }
    }
  }
  return lessons;
}

// ─── Main component ───────────────────────────────────────────────────────────

export const FullScheduleTable: React.FC<FullScheduleTableProps> = ({
  scheduleData, schedule, fullSchedule, view, weekType, selectedDay,
}) => {
  const getItems = () => {
    if (view === 'fullClasses') return scheduleData.classes;
    if (view === 'fullTeachers') return scheduleData.teachers;
    return scheduleData.classrooms;
  };

  const getHeaderLabel = () => {
    if (view === 'fullClasses') return 'Клас';
    if (view === 'fullTeachers') return 'Вчитель';
    return 'Кабінет';
  };

  const items = getItems();
  const days = selectedDay === '11111' ? daysArray : [selectedDay];

  const visibleItems = useMemo(() => items.filter(item => {
    if (view === 'fullClassrooms' && item.name.endsWith('_')) {
      if (scheduleData.classrooms.some(c => c.name === item.name.slice(0, -1))) return false;
    }
    return true;
  }), [items, view, scheduleData.classrooms]);

  const allIds = useMemo(() => visibleItems.map(i => i.id), [visibleItems]);

  const allSubjects = useMemo(() => {
    const set = new Set<string>();
    for (const item of visibleItems) {
      for (const l of getLessonsForItem(item.id, item.name, view, fullSchedule, scheduleData, days)) {
        if (l.subject) set.add(l.subject);
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'uk'));
  }, [visibleItems, view, fullSchedule, scheduleData, days.join()]);

  // ── Read initial filter from URL → localStorage → "all" ────────────────────
  // We read URL/LS raw values once on mount (via ref) and reconcile with actual
  // data once visibleItems/allSubjects are known. This ensures that even on a
  // fresh tab the filter is applied correctly as soon as data is ready.

  const rawUrlFilter = useRef(readUrlFilter());
  const rawLsFilter = useRef(readLsFilter(view));
  // track whether we have already applied the stored filter for this view
  const appliedForView = useRef<string | null>(null);

  const resolveInitialIds = useCallback((ids: string[]): Set<string> => {
    // keep only IDs that actually exist in current data
    const valid = new Set(ids.filter(id => allIds.includes(id)));
    return valid.size > 0 ? valid : new Set(allIds);
  }, [allIds]);

  const resolveInitialSubjects = useCallback((subjects: string[]): Set<string> => {
    const valid = new Set(subjects.filter(s => allSubjects.includes(s)));
    return valid.size > 0 ? valid : new Set(allSubjects);
  }, [allSubjects]);

  // Start with all selected; will be overridden in effect below once data ready
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set(allIds));
  const [selectedSubjects, setSelectedSubjects] = useState<Set<string>>(() => new Set(allSubjects));

  // Apply stored filter once data (allIds, allSubjects) is populated
  useEffect(() => {
    if (allIds.length === 0 && allSubjects.length === 0) return;
    if (appliedForView.current === view) return; // already applied for this view
    appliedForView.current = view;

    // Re-read from LS in case view changed
    const lsFilter = readLsFilter(view);
    const urlFilter = rawUrlFilter.current;

    // URL takes priority; fall back to LS; fall back to "all"
    const sourceRowIds = urlFilter.rowIds ?? lsFilter.rowIds;
    const sourceSubjects = urlFilter.subjects ?? lsFilter.subjects;

    const nextIds = sourceRowIds ? resolveInitialIds(sourceRowIds) : new Set(allIds);
    const nextSubjects = sourceSubjects ? resolveInitialSubjects(sourceSubjects) : new Set(allSubjects);

    setSelectedIds(nextIds);
    setSelectedSubjects(nextSubjects);

    // Sync URL and LS to reflect resolved state
    const idsParam = nextIds.size === allIds.length ? null : Array.from(nextIds);
    const subjParam = nextSubjects.size === allSubjects.length ? null : Array.from(nextSubjects);
    writeUrlFilter(idsParam, subjParam);
    writeLsFilter(view, idsParam, subjParam);
  }, [view, allIds.join(), allSubjects.join('|')]);

  // When view changes reset appliedForView so it re-applies for new view
  useEffect(() => {
    appliedForView.current = null;
    rawLsFilter.current = readLsFilter(view);
  }, [view]);

  // ── Persist helper ──────────────────────────────────────────────────────────

  const persist = useCallback((ids: Set<string>, subjects: Set<string>) => {
    const idsParam = ids.size === allIds.length ? null : Array.from(ids);
    const subjParam = subjects.size === allSubjects.length ? null : Array.from(subjects);
    writeUrlFilter(idsParam, subjParam);
    writeLsFilter(view, idsParam, subjParam);
  }, [view, allIds, allSubjects]);

  // ── Row filter ──────────────────────────────────────────────────────────────

  const rowAllSelected = selectedIds.size === allIds.length;
  const rowPartial = !rowAllSelected && selectedIds.size > 0;

  const rowChecklistItems = useMemo(
    () => visibleItems.map(i => ({ id: i.id, name: i.name })),
    [visibleItems]
  );

  const toggleRowItem = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      persist(next, selectedSubjects);
      return next;
    });
  };

  const toggleRowAll = useCallback(() => {
    const next = rowAllSelected ? new Set<string>() : new Set(allIds);
    setSelectedIds(next);
    persist(next, selectedSubjects);
  }, [rowAllSelected, allIds, selectedSubjects, persist]);

  // ── Subject filter ──────────────────────────────────────────────────────────

  const subjAllSelected = selectedSubjects.size === allSubjects.length;
  const subjPartial = !subjAllSelected && selectedSubjects.size > 0;

  const toggleSubjectItem = (name: string) => {
    setSelectedSubjects(prev => {
      const next = new Set(prev);
      if (next.has(name)) { next.delete(name); } else { next.add(name); }
      persist(selectedIds, next);
      return next;
    });
  };

  const toggleSubjectAll = useCallback(() => {
    const next = subjAllSelected ? new Set<string>() : new Set(allSubjects);
    setSelectedSubjects(next);
    persist(selectedIds, next);
  }, [subjAllSelected, allSubjects, selectedIds, persist]);

  const subjectFilterActive = !subjAllSelected;

  // ── Preset loader ───────────────────────────────────────────────────────────

  const handleLoadPreset = useCallback((rowIds: string[], subjects: string[]) => {
    const idSet = new Set(rowIds.filter(id => allIds.includes(id)));
    const sSet = new Set(subjects.filter(s => allSubjects.includes(s)));
    const finalIds = idSet.size > 0 ? idSet : new Set(allIds);
    const finalSubj = sSet.size > 0 ? sSet : new Set(allSubjects);
    setSelectedIds(finalIds);
    setSelectedSubjects(finalSubj);
    persist(finalIds, finalSubj);
  }, [allIds, allSubjects, persist]);

  // ── Filtered rows ───────────────────────────────────────────────────────────

  const filteredItems = useMemo(() => visibleItems.filter(item => {
    if (!selectedIds.has(item.id)) return false;
    if (subjectFilterActive) {
      const lessons = getLessonsForItem(item.id, item.name, view, fullSchedule, scheduleData, days);
      return lessons.some(l => selectedSubjects.has(l.subject));
    }
    return true;
  }), [visibleItems, selectedIds, subjectFilterActive, selectedSubjects, view, fullSchedule, scheduleData, days.join()]);

  const headerLabel = getHeaderLabel();

  return (
    <table className="w-full text-sm min-h-[300px]">
      <thead className="bg-blue-600 text-white sticky top-0 z-20">
        <tr>
          <th className="px-2 py-2 text-left font-semibold sticky left-0 bg-blue-600 z-30 min-w-[120px]">
            <div className="flex items-center gap-1.5">
              <span>{headerLabel}</span>

              {/* Row filter */}
              <FilterDropdown icon={<FunnelIcon />} isPartial={rowPartial} title="Фільтр рядків">
                <ChecklistPanel
                  items={rowChecklistItems}
                  selected={selectedIds}
                  onToggle={toggleRowItem}
                  onToggleAll={toggleRowAll}
                  label="Всі"
                  enableCtrlA={true}
                />
              </FilterDropdown>

              {/* Subject filter */}
              <FilterDropdown icon={<BookIcon />} isPartial={subjPartial} title="Фільтр предметів">
                <ChecklistPanel
                  items={allSubjects.map(s => ({ id: s, name: s }))}
                  selected={selectedSubjects}
                  onToggle={toggleSubjectItem}
                  onToggleAll={toggleSubjectAll}
                  label="Всі предмети"
                  enableCtrlA={false}
                />
              </FilterDropdown>

              {/* Presets */}
              <FilterDropdown icon={<StarIcon />} isPartial={false} title="Пресети фільтрів" width="w-60">
                <PresetsPanel
                  view={view}
                  currentRowIds={selectedIds}
                  currentSubjects={selectedSubjects}
                  allIds={allIds}
                  allSubjectNames={allSubjects}
                  onLoad={handleLoadPreset}
                />
              </FilterDropdown>
            </div>
          </th>

          {days.map(day => (
            scheduleData.periods.map(period => (
              <th key={`${day}-${period.id}`} className="px-2 py-2 text-center font-semibold min-w-[150px] border-l border-blue-500">
                <div>{getDayName(day)}</div>
                <div className="text-xs">{period.name} урок</div>
              </th>
            ))
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((item, idx) => (
          <tr key={item.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-2 py-2 border-b border-gray-200 sticky left-0 bg-inherit z-10 font-semibold text-gray-800">
              {item.name}
            </td>
            {days.map(day => (
              scheduleData.periods.map(period => {
                const cellBgColor = view === 'fullClasses' ? getCellBackgroundColor(item.name, weekType) : '';
                return (
                  <td key={`${item.id}-${day}-${period.id}`} className={`px-2 py-2 border-b border-l border-gray-200 align-top ${cellBgColor}`}>
                    {(() => {
                      const mainLessons = fullSchedule[item.id]?.[day]?.[period.id] || [];
                      let allLessons = [...mainLessons];
                      if (view === 'fullClassrooms') {
                        const twin = scheduleData.classrooms.find(c => c.name === `${item.name}_`);
                        if (twin && fullSchedule[twin.id]) {
                          allLessons = [...allLessons, ...(fullSchedule[twin.id]?.[day]?.[period.id] || [])];
                        }
                      }
                      const lessonsToShow = subjectFilterActive
                        ? allLessons.filter(l => selectedSubjects.has(l.subject))
                        : allLessons;
                      return lessonsToShow.map((lesson, lessonIdx) => {
                        let distType = null;
                        let cardBgColor = 'bg-white bg-opacity-70';
                        if (view === 'fullClasses') {
                          distType = getDistData(item.name, weekType);
                        } else if ((view === 'fullTeachers' || view === 'fullClassrooms') && lesson.classes && lesson.classes.length > 0) {
                          distType = getLessonDistType(lesson.classes, weekType);
                          if (distType === 'д') cardBgColor = 'bg-orange-100 bg-opacity-70';
                          else if (distType === 'о') cardBgColor = 'bg-green-100 bg-opacity-70';
                          else if (distType === 'змішаний') cardBgColor = 'bg-yellow-100 bg-opacity-70';
                        }
                        const badge = distType ? getDistTypeBadge(distType) : null;
                        return (
                          <div key={lessonIdx} className={`mb-1 last:mb-0 p-1 ${cardBgColor} rounded text-xs border border-gray-200`}>
                            <div className="flex items-center gap-1 mb-0.5">
                              <div className="font-semibold text-blue-700 flex-1">{lesson.subject}</div>
                              {badge && (
                                <span className={`px-1 py-0.5 rounded text-[10px] font-bold ${badge.color}`}>
                                  {badge.label}
                                </span>
                              )}
                            </div>
                            {lesson.teachers && lesson.teachers.length > 0 && (
                              <div className="text-gray-600">{lesson.teachers.join(', ')}</div>
                            )}
                            {lesson.classes && lesson.classes.length > 0 && (
                              <div className="text-gray-600">{lesson.classes.join(', ')}</div>
                            )}
                            {lesson.classrooms.length > 0 && (
                              <div className="text-gray-600">Каб. {lesson.classrooms.join(', ')}</div>
                            )}
                          </div>
                        );
                      });
                    })()}
                  </td>
                );
              })
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
