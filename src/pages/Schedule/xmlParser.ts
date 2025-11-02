// xmlParser.ts
import { ScheduleData } from '@/type/scheduledata';

export const parseXMLData = (xmlData: string): ScheduleData | null => {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

    const parseError = xmlDoc.querySelector('parsererror');
    if (parseError) {
      throw new Error('XML parsing error: ' + parseError.textContent);
    }

    const periods = Array.from(xmlDoc.querySelectorAll('period')).map(p => ({
      id: p.getAttribute('period') || '',
      name: p.getAttribute('name') || '',
      short: p.getAttribute('short') || '',
      startTime: p.getAttribute('starttime') || '',
      endTime: p.getAttribute('endtime') || ''
    }));

    const subjects = Array.from(xmlDoc.querySelectorAll('subject')).map(s => ({
      id: s.getAttribute('id') || '',
      name: s.getAttribute('name') || '',
      short: s.getAttribute('short') || ''
    }));

    const teachers = Array.from(xmlDoc.querySelectorAll('teacher')).map(t => ({
      id: t.getAttribute('id') || '',
      name: t.getAttribute('name') || '',
      short: t.getAttribute('short') || '',
      firstname: t.getAttribute('firstname') || '',
      lastname: t.getAttribute('lastname') || '',
      gender: t.getAttribute('gender') || '',
      color: t.getAttribute('color') || '',
      email: t.getAttribute('email') || '',
      mobile: t.getAttribute('mobile') || '',
      partnerId: t.getAttribute('partnerid') || undefined
    }));

    const classrooms = Array.from(xmlDoc.querySelectorAll('classroom')).map(c => ({
      id: c.getAttribute('id') || '',
      name: c.getAttribute('name') || '',
      short: c.getAttribute('short') || '',
      capacity: c.getAttribute('capacity') || '',
      buildingId: c.getAttribute('buildingid') || undefined,
      partnerId: c.getAttribute('partnerid') || undefined
    }));

    const classes = Array.from(xmlDoc.querySelectorAll('class')).map(c => ({
      id: c.getAttribute('id') || '',
      name: c.getAttribute('name') || '',
      short: c.getAttribute('short') || '',
      teacherId: c.getAttribute('teacherid') || undefined,
      classroomIds: c.getAttribute('classroomids') || undefined,
      grade: c.getAttribute('grade') || undefined,
      partnerId: c.getAttribute('partnerid') || undefined
    }));

    const groups = Array.from(xmlDoc.querySelectorAll('group')).map(g => ({
      id: g.getAttribute('id') || '',
      name: g.getAttribute('name') || '',
      classId: g.getAttribute('classid') || '',
      studentIds: g.getAttribute('studentids') || undefined,
      entireClass: g.getAttribute('entireclass') || '0',
      divisionTag: g.getAttribute('divisiontag') || '',
      studentCount: g.getAttribute('studentcount') || undefined
    }));

    const lessons = Array.from(xmlDoc.querySelectorAll('lesson')).map(l => ({
      id: l.getAttribute('id') || '',
      subjectId: l.getAttribute('subjectid') || '',
      classIds: (l.getAttribute('classids') || '').split(',').filter(Boolean),
      teacherIds: (l.getAttribute('teacherids') || '').split(',').filter(Boolean),
      classroomIds: (l.getAttribute('classroomids') || '').split(',').filter(Boolean),
      groupIds: (l.getAttribute('groupids') || '').split(',').filter(Boolean),
      periodsPerCard: l.getAttribute('durationperiods') || '1',
      periodsPerWeek: l.getAttribute('periodsperweek') || '1',
      capacity: l.getAttribute('capacity') || undefined,
      seminarGroup: l.getAttribute('seminargroup') || undefined,
      termsDefId: l.getAttribute('termsdefid') || undefined,
      weeksDefId: l.getAttribute('weeksdefid') || undefined,
      daysDefId: l.getAttribute('daysdefid') || undefined,
      partnerId: l.getAttribute('partnerid') || undefined
    }));

    const cards = Array.from(xmlDoc.querySelectorAll('card')).map(c => ({
      teacherIds: (c.getAttribute('teacherids') || '').split(',').filter(Boolean),
      lessonId: c.getAttribute('lessonid') || '',
      period: c.getAttribute('period') || '',
      days: c.getAttribute('days') || '',
      weeks: c.getAttribute('weeks') || '',
      terms: c.getAttribute('terms') || '',
      classroomIds: (c.getAttribute('classroomids') || '').split(',').filter(Boolean)
    }));

    const daysDefs = Array.from(xmlDoc.querySelectorAll('daysdef')).map(d => ({
      id: d.getAttribute('id') || '',
      name: d.getAttribute('name') || '',
      short: d.getAttribute('short') || '',
      days: d.getAttribute('days') || ''
    }));

    const weeksDefs = Array.from(xmlDoc.querySelectorAll('weeksdef')).map(w => ({
      id: w.getAttribute('id') || '',
      name: w.getAttribute('name') || '',
      short: w.getAttribute('short') || '',
      weeks: w.getAttribute('weeks') || ''
    }));

    const termsDefs = Array.from(xmlDoc.querySelectorAll('termsdef')).map(t => ({
      id: t.getAttribute('id') || '',
      name: t.getAttribute('name') || '',
      short: t.getAttribute('short') || '',
      terms: t.getAttribute('terms') || ''
    }));

    const grades = Array.from(xmlDoc.querySelectorAll('grade')).map(g => ({
      grade: g.getAttribute('grade') || '',
      name: g.getAttribute('name') || '',
      short: g.getAttribute('short') || ''
    }));

    const buildings = Array.from(xmlDoc.querySelectorAll('building')).map(b => ({
      id: b.getAttribute('id') || undefined,
      name: b.getAttribute('name') || undefined,
      partnerId: b.getAttribute('partnerid') || undefined
    }));

    return {
      periods,
      subjects,
      teachers,
      classrooms,
      classes,
      groups,
      lessons,
      cards
    };
  } catch (err) {
    console.error('Parse error:', err);
    return null;
  }
};
