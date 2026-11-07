import { publicUrl } from '@/constants';
import { MaterialItem } from '@/type/material';
import { http } from '@/api/http';

export async function getMaterials(p0: {
  type: string;
  limit: number;
}): Promise<MaterialItem[] | null> {
  try {
    const response = await http.get(publicUrl('assets/data/materials.json'));
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Помилка при завантаженні новин:', error);
    return null;
  }
}
