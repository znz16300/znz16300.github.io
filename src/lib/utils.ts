import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractDriveFileId(url: string): string {
  if (url.startsWith("https://drive.google.com/open?id=")) {
    return url.split("id=")[1];
  } else if (url.startsWith("https://drive.google.com/file/d/") && url.includes("/view")) {
    return url.split("/d/")[1].split("/view")[0];
  } else if (url.startsWith("https://drive.google.com/uc?export=download&id=")) {
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
  if (link.startsWith('https://drive.google.com') || link.startsWith('http://drive.google.com')){
    const id =  extractDriveFileId2(link);
    console.log(`Extracted ID: ${id}`);
    
    const newUrl = `https://lh3.googleusercontent.com/d/${id}=w1000`;
    return newUrl;
  } else {
    return link;
  }
  
}

export function convertDriveLink(link) {
  const match = link.match(/[-\w]{25,}/);
  return match ? `https://lh3.googleusercontent.com/d/${match[0]}=w1000` : link;
}

export function updateImgSrcsInHtml(html) {
  return html.replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (imgTag, src) => {
    const newSrc = convertUrl(src);
    return imgTag.replace(src, newSrc);
  });
}

export function convertGoogleDriveUrls(text) {
    // Регулярний вираз для знаходження Google Drive URLs
    const driveUrlRegex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view\?usp=sharing/g;
    const driveUrlRegex2 = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/g;
    const driveUrlRegex3 = /https:\/\/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)&usp=drive_fs/g;
    
    // Заміняємо URLs на download URLs
    let convertedText = text.replace(driveUrlRegex, 'https://drive.google.com/uc?export=download&id=$1');
    convertedText = convertedText.replace(driveUrlRegex2, 'https://drive.google.com/uc?export=download&id=$1');
    convertedText = convertedText.replace(driveUrlRegex3, 'https://drive.google.com/uc?export=download&id=$1');
    
    return convertedText;
}

