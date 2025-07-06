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
    /(?:\/d\/|id=|folders\/|spreadsheets\/d\/|document\/d\/)([a-zA-Z0-9_-]+)/
  );
  return match ? match[1] : "";
}

export function convertUrl(link) {
  if (
    link.startsWith("https://drive.google.com") ||
    link.startsWith("http://drive.google.com")
  ) {
    const id = extractDriveFileId2(link);
    console.log(`Extracted ID: ${id}`);

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
    console.log(`Extracted ID: ${id}`);

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
    }
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
    "https://drive.google.com/uc?export=download&id=$1"
  );
  convertedText = convertedText.replace(
    driveUrlRegex2,
    "https://drive.google.com/uc?export=download&id=$1"
  );
  convertedText = convertedText.replace(
    driveUrlRegex3,
    "https://drive.google.com/uc?export=download&id=$1"
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

export function shortenFullName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/); // розділяємо по пробілах

  if (parts.length < 2) return fullName; // якщо недостатньо частин — повертаємо як є

  const lastName = parts[0];
  const firstInitial = parts[1]?.[0] || "";
  const middleInitial = parts[2]?.[0] || "";

  return `${lastName} ${firstInitial}.${middleInitial}.`;
}

