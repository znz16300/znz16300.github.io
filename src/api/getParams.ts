import axios from 'axios';

export const params = {
  GOOGLE_TABLE_USE: true,
  TEACHERS: [''],
  GOLOVA: '',
  ZAKLAD: '',
};

export async function getParams() {
  const url = './assets/data/params.json';
  const response = await axios.get(url);
  const { data } = response;
  return data;
}

export default getParams;
