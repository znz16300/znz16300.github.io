import { sitedataUrl, DOCUMENTS_TABLE } from '@/constants';
import { RawDocument } from '@/type/rawDocument';
import { http } from '@/api/http';

export async function getDocuments(): Promise<RawDocument[] | null> {
  try {
    const response = await http.get(
      sitedataUrl(DOCUMENTS_TABLE)
    );
    const data = response.data;
    const filtered = Array.isArray(data)
      ? data.filter(item => item.show === '1' || item.show === 1 || item.show === true)
      : [];

    return filtered.reverse();
  } catch (error) {
    console.error('Помилка при завантаженні документа:', error);
    return null;
  }
}
