import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractDriveFileId(url: string): string {
  if (url.startsWith("https://drive.google.com/open?id=")) {
    return url.split("id=")[1];
  } else if (
    url.startsWith("https://drive.google.com/file/d/") &&
    url.includes("/view")
  ) {
    return url.split("/d/")[1].split("/view")[0];
  } else if (
    url.startsWith("https://drive.google.com/uc?export=download&id=")
  ) {
    return url.split("id=")[1];
  } else if (url.startsWith("http://drive.google.com/uc?export=view&id=")) {
    return url.split("id=")[1];
  } else if (url.startsWith("https://drive.google.com/drive/folders/")) {
    return url.split("folders/")[1];
  } else if (url.startsWith("https://docs.google.com/spreadsheets/d/e/")) {
    return url.split("d/e/")[1].split("/")[0];
  } else if (url.startsWith("https://docs.google.com/spreadsheets/d/")) {
    return url.split("d/")[1].split("/")[0];
  } else if (url.startsWith("https://docs.google.com/document/d/")) {
    return url.split("d/")[1].split("/")[0];
  } else if (url.startsWith("https://drive.google.com/file/d/")) {
    return url.split("d/")[1].split("/")[0];
  } else if (url.startsWith("https://drive.google.com/open?")) {
    const match = url.match(/id=([a-zA-Z0-9_-]+)/);
    if (match) {
      return match[1];
    }
  }

  return "";
}

// http://drive.google.com/uc?export=view&id=1d3DWFv3751KfuvplzkAT-IFyaN6XC83D

export function extractDriveFileId2(url: string): string {
  const match = url.match(
    /(?:\/d\/|id=|folders\/|spreadsheets\/d\/|document\/d\/)([a-zA-Z0-9_-]+)/,
  );
  return match ? match[1] : "";
}

export function convertUrl(link) {
  if (
    link.startsWith("https://drive.google.com") ||
    link.startsWith("http://drive.google.com")
  ) {
    const id = extractDriveFileId2(link);
    // console.log(`Extracted ID: ${id}`);

    const newUrl = `https://lh3.googleusercontent.com/d/${id}=w1000`;
    return newUrl;
  } else {
    return link;
  }
}
export function convertUrl2(link) {
  if (
    link.startsWith("https://drive.google.com") ||
    link.startsWith("http://drive.google.com")
  ) {
    const id = extractDriveFileId2(link);
    // console.log(`Extracted ID: ${id}`);

    const newUrl = `https://drive.google.com/thumbnail?id=${id}`;
    return newUrl;
  } else {
    return link;
  }
}
//const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
// export function convertDriveLink(link) {
//   const match = link.match(/[-\w]{25,}/);
//   return match ? `https://drive.google.com/thumbnail?id=${match[0]}` : link;
// }

export function convertDriveLink(link) {
  const match = link.match(/[-\w]{25,}/);
  return match ? `https://lh3.googleusercontent.com/d/${match[0]}=w1000` : link;
}

export function updateImgSrcsInHtml2(html) {
  return html.replace(
    /<img[^>]+src="([^"]+)"[^>]*>/g,
    (imgTag: string, src: string) => {
      const newSrc = convertUrl2(src);
      return imgTag.replace(src, newSrc);
    },
  );
}

export function updateImgSrcsInHtml(html) {
  return html.replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (imgTag, src) => {
    const newSrc = convertUrl(src);
    return imgTag.replace(src, newSrc);
  });
}

export function convertGoogleDriveUrls(text) {
  // Регулярний вираз для знаходження Google Drive URLs
  const driveUrlRegex =
    /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view\?usp=sharing/g;
  const driveUrlRegex2 =
    /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/g;
  const driveUrlRegex3 =
    /https:\/\/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)&usp=drive_fs/g;

  // Заміняємо URLs на download URLs
  let convertedText = text.replace(
    driveUrlRegex,
    "https://drive.google.com/uc?export=download&id=$1",
  );
  convertedText = convertedText.replace(
    driveUrlRegex2,
    "https://drive.google.com/uc?export=download&id=$1",
  );
  convertedText = convertedText.replace(
    driveUrlRegex3,
    "https://drive.google.com/uc?export=download&id=$1",
  );

  return convertedText;
}

export const parseDate = (dateStr: string): number => {
  if (!dateStr) return 0;
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const parseDate2 = (dateStr: string): number => {
  if (!dateStr) return 0;
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
};

export function getCurrentDateTime(): { date: Date; time: number } {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hours = parseInt(pad(now.getHours()));
  const minutes = parseInt(pad(now.getMinutes()));
  const seconds = parseInt(pad(now.getSeconds()));
  return {
    date: new Date(`${year}-${month}-${day}`),
    time: hours + minutes * 60 + seconds,
  };
}

export function getTime(time: string): number {
  const now = new Date();
  const hours = parseInt(time.split(":")[0] || "00");
  const minutes = parseInt(time.split(":")[1] || "00");
  const seconds = parseInt(time.split(":")[2] || "00");
  return hours * 3600 + minutes * 60 + seconds;
}

export function getCurentTime(): number {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  const hours = parseInt(pad(now.getHours()));
  const minutes = parseInt(pad(now.getMinutes()));
  const seconds = parseInt(pad(now.getSeconds()));
  return hours * 3600 + minutes * 60 + seconds;
}

export function inIntervalTime(t1: string, t2: string): boolean {
  return getTime(t1) <= getCurentTime() && getCurentTime() <= getTime(t2);
}

export function inIntervalTime2(t1: string): boolean {
  const currentTime = getCurentTime();
  const t = getTime(t1);
  return t <= currentTime && currentTime <= t + 45 * 60; // 45 хвилин
}

export function getCurentDate(): Date {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  return new Date(`${year}-${month}-${day}`);
}

export function shortenFullName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/); // розділяємо по пробілах

  if (parts.length < 2) return fullName; // якщо недостатньо частин — повертаємо як є

  const lastName = parts[0];
  const firstInitial = parts[1]?.[0] || "";
  const middleInitial = parts[2]?.[0] || "";

  return `${lastName} ${firstInitial}.${middleInitial}.`;
}
