import { publicUrl } from '@/constants';
import { http } from '@/api/http';

export const params = {
  GOOGLE_TABLE_USE: true,
  TEACHERS: [''],
  GOLOVA: '',
  ZAKLAD: '',
};

export async function getParams() {
  const url = publicUrl('assets/data/params.json'); // раніше відносний шлях ламався на вкладених адресах
  const response = await http.get(url);
  const { data } = response;
  return data;
}

export default getParams;
