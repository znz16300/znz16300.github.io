const enToUaMap: Record<string, string> = {
  "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г", "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ї",
  "a": "ф", "s": "і", "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д", ";": "ж", "'": "є",
  "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и", "n": "т", "m": "ь", ",": "б", ".": "ю", "/": ".",
  "`": "ʼ", "~": "ʼ",
};

const englishWords = new Set([
  "hello", "world", "test", "function", "keyboard", "language", "input", "switch", "translate", "text", "example", "code"
  // Додай сюди потрібні справжні англійські слова
]);

/**
 * Перевіряє, чи рядок містить хоча б один український символ
 */
function containsUkrainian(text: string): boolean {
  return /[а-щА-ЩЬьЮюЯяІіЇїЄєҐґ]/.test(text);
}

function fixKeyboardLayout(text: string): string {
  if (containsUkrainian(text)) {
    return text; // вже українською — нічого не змінюємо
  }

  const lowerText = text.toLowerCase();
  if (englishWords.has(lowerText)) {
    return text; // справжнє англійське слово — залишаємо
  }

  return text.split("").map(char => {
    const isUpper = char === char.toUpperCase();
    const mapped = enToUaMap[char.toLowerCase()] || char;
    return isUpper ? mapped.toUpperCase() : mapped;
  }).join("");
}
export default fixKeyboardLayout;
