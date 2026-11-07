import { http } from '@/api/http';

export async function getPublicGoogleDriveFileSize(fileId: string): Promise<number | null> {
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  try {
    const response = await http.head(url);
    const contentLength = response.headers['content-length'];
    return contentLength ? Number(contentLength) : null;
  } catch (error) {
    console.error('Не вдалося отримати розмір файлу:', error);
    return null;
  }
}
