import axios from 'axios';

import { fullNameToInic, fullNameToParts } from '@/lib/nameUtils';
import { COURSES_TABLE_COLLS, SERVER } from '@/constants';
import getParams, { params } from './getParams';
import { getGenitiveAll } from '@/lib/getPatronymic';
import { DataObject, TrainingItem } from '@/type/kursi';

interface Context {
  teacher: string;
  teacherINIC: string;
  golova: string;
  zaklad: string;
  date: string;
  file: string;
  [key: string]: string;
}

function formatDate(date: Date): string {
  let dd: number | string = date.getDate();
  if (dd < 10) dd = `0${dd}`;
  let mm: number | string = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;
  let yy: number | string = date.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;
  return `${dd}.${mm}.20${yy}`;
}

function createContext(records: DataObject[], golova: string, zaklad: string): Context {
  const currentDate = new Date();
  const teacher = records[0][COURSES_TABLE_COLLS[2].field];
  const teacherParts = fullNameToParts(teacher);
  const teacherRod = getGenitiveAll(
    `${teacherParts.lastName} ${teacherParts.firstName} ${teacherParts.middleName}`
  );

  const teacherINIC = fullNameToInic(teacher);
  const formattedDate = formatDate(currentDate);

  const context: Context = {
    teacher: teacherRod,
    teacherINIC,
    golova,
    zaklad,
    date: formattedDate,
    file: 'klopot.docx',
  };

  let list = '';
  records.forEach((record, index) => {
    context[`title${index}`] = record.title;
    const sym = index === records.length - 1 ? '.' : ';';
    const long = records[index][COURSES_TABLE_COLLS[4].field];
    const title = records[index][COURSES_TABLE_COLLS[3].field];
    const date = records[index][COURSES_TABLE_COLLS[9].field];
    const num = records[index][COURSES_TABLE_COLLS[8].field];
    const forma = records[index][COURSES_TABLE_COLLS[11].field];
    const subj = records[index][COURSES_TABLE_COLLS[10].field];
    list += `-${'\t'} "${title}" від ${date}, реєстраційний номер - ${num}, кількість годин - ${long}, форма підвищення кваліфікації - інституційна (${forma}), навчання за програмою підвищення кваліфікації (${subj})${sym}\n`;
  });

  const s1 = records.length === 1 ? '' : 'и';
  const s2 = records.length === 1 ? 'у' : 'ів';
  const p1 = records.length === 1 ? 'а' : 'и';
  const p2 = records.length === 1 ? 'у' : 'ів';

  context.list = list;
  context.s1 = s1;
  context.s2 = s2;
  context.p1 = p1;
  context.p2 = p2;
  context.dateInput = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  return context;
}

async function getClopot(courses: DataObject[]) {
  if (courses.length > 0) {
    const param = await getParams();
    console.log('params.GOLOVA', param.GOLOVA);
    const context = createContext(courses, param.GOLOVA, param.ZAKLAD);
    const url = `${SERVER}getFileKursi`;
    const formData = new URLSearchParams();
    for (const key in context) {
      // eslint-disable-next-line no-prototype-builtins
      if (context.hasOwnProperty(key)) {
        formData.append(key, context[key]);
      }
    }
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = response.data;
      document.location.href = `${SERVER}test/${data}`;
    } catch (error) {
      console.error('Error fetching file:', error);
    }
  } else {
    console.log('Ви нічого не вибрали');
  }
}

export default getClopot;
