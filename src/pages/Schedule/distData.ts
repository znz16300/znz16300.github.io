// distData.ts
const distClasses = [
    { "name": "1-А", "week": [ "о", "о"] },
    { "name": "1-Б", "week": [ "о", "о"] },
    { "name": "2-А", "week": [ "д", "о"] },
    { "name": "2-Б", "week": [ "д", "о"] },
    { "name": "2-В", "week": [ "д", "о"] },
    { "name": "3-А", "week": [ "о", "д"] },
    { "name": "3-Б", "week": [ "о", "д"] },
    { "name": "3-В", "week": [ "о", "д"] },
    { "name": "4-А", "week": [ "д", "о"] },
    { "name": "4-Б", "week": [ "д", "о"] },
    { "name": "4-В", "week": [ "д", "о"] },
    { "name": "5-А", "week": [ "о", "д"] },
    { "name": "5-Б", "week": [ "о", "д"] },
    { "name": "5-В", "week": [ "о", "д"] },
    { "name": "6-А", "week": [ "о", "д"] },
    { "name": "6-Б", "week": [ "о", "д"] },
    { "name": "6-В", "week": [ "д", "о"] },
    { "name": "6-Г", "week": [ "д", "о"] },
    { "name": "7-А", "week": [ "д", "о"] },
    { "name": "7-Б", "week": [ "д", "о"] },
    { "name": "7-В", "week": [ "о", "д"] },
    { "name": "7-Г", "week": [ "о", "д"] },
    { "name": "8-А", "week": [ "д", "о"] },
    { "name": "8-Б", "week": [ "о", "д"] },
    { "name": "8-В", "week": [ "о", "д"] },
    { "name": "8-Г", "week": [ "д", "о"] },
    { "name": "9-А", "week": [ "о", "д"] },
    { "name": "9-Б", "week": [ "д", "о"] },
    { "name": "9-В", "week": [ "д", "о"] },
    { "name": "10-А", "week": [ "д", "о"] },
    { "name": "10-Б", "week": [ "д", "о"] },
    { "name": "11-А", "week": [ "о", "д"] },
    { "name": "11-Б", "week": [ "о", "д"] }
];

export const getDistData = (name: string, week: number): string => {
    // повертає "о" або "д" в залежності від назви класу та тижня
    const classInfo = distClasses.find(cls => cls.name === name);
    if (classInfo && classInfo.week[week]) {
        return classInfo.week[week];
    }
    return "н/д"; // "н/д" - не доступно, якщо клас не знайдено
};

// // Функція для визначення типу навчання на основі класів в уроці
// export const getLessonDistType = (classes: string[], week: number): string => {
//     if (classes.length === 0) return "н/д";
    
//     // Отримуємо типи навчання для всіх класів
//     const distTypes = classes.map(cls => getDistData(cls, week));
    
//     // Якщо є хоча б один дистанційний - урок дистанційний
//     if (distTypes.includes("д")) return "д";
    
//     // Якщо всі очні - урок очний
//     if (distTypes.every(type => type === "о")) return "о";
    
//     // Змішаний формат (не повинно бути в нормальному розкладі)
//     return "змішаний";
// };

// Функція для визначення типу навчання на основі класів в уроці
export const getLessonDistType = (classes: string[], week: number): string => {
    if (classes.length === 0) return "н/д";
    
    // Отримуємо типи навчання для всіх класів
    const distTypes = classes.map(cls => getDistData(cls, week));
    
    // Перевіряємо чи є і дистанційні і очні одночасно
    const hasDistant = distTypes.includes("д");
    const hasInPerson = distTypes.includes("о");
    
    // Якщо є і дистанційні і очні - змішаний формат
    if (hasDistant && hasInPerson) return "змішаний";
    
    // Якщо є хоча б один дистанційний (і немає очних) - урок дистанційний
    if (hasDistant) return "д";
    
    // Якщо всі очні - урок очний
    if (hasInPerson) return "о";
    
    // Інші випадки (н/д)
    return "н/д";
};

