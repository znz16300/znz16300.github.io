// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import Header from "@/components/header";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Clock, Users, GraduationCap } from "lucide-react";

// type ScheduleData = {
//   templFile: string;
//   data: string[][];
//   header: string[][];
// };

// type DayInfo = {
//   chZn: number;
//   dWeek: number;
// };

// type LessonData = {
//   time: string;
//   lesson: string;
//   className?: string;
// };

// const SERVER = "https://schooltools.pythonanywhere.com/";
// const KEY = "1obSD_Q_w6ZXVAfMmJyXsGkf12VqDWjdhLDwARsd9Ujk";

// const Schedule = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [teachers, setTeachers] = useState<string[]>([]);
//   const [classes, setClasses] = useState<string[]>([]);
//   const [selectedTeacher, setSelectedTeacher] = useState<string>("");
//   const [selectedClass, setSelectedClass] = useState<string>("");
//   const [date, setDate] = useState<string>("");
//   const [glData, setGlData] = useState<ScheduleData[]>([]);
//   const [lessons, setLessons] = useState<LessonData[]>([]);
//   const [loader, setLoader] = useState<boolean>(true);
//   const [availableDates, setAvailableDates] = useState<string[]>([]);
//   const [currentDateIndex, setCurrentDateIndex] = useState<number>(0);
//   const [error, setError] = useState<string>("");

//   // Ініціалізація параметрів з URL
//   useEffect(() => {
//     const teacherFromUrl = searchParams.get("teacher") || "";
//     const classFromUrl = searchParams.get("class") || "";
//     const dateFromUrl = searchParams.get("date") || new Date().toISOString().split("T")[0];
    
//     setSelectedTeacher(teacherFromUrl);
//     setSelectedClass(classFromUrl);
//     setDate(dateFromUrl);
//     console.log("URL params loaded:", { teacherFromUrl, classFromUrl, dateFromUrl });
//   }, []);

//   // Завантаження даних
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setError("");
//         console.log("Fetching data from:", `${SERVER}getmultiblock/${KEY}`);
        
//         const res = await axios.get<ScheduleData[]>(
//           `${SERVER}getmultiblock/${KEY}`,
//                     { timeout: 10000 }
//         );
        
//         setGlData(res.data);
//         console.log("Дані завантажено успішно", res.data.length, "таблиць");
        
//         // Логування доступних таблиць
//         res.data.forEach(table => {
//           console.log("Таблиця:", table.templFile, "рядків:", table.data?.length || 0);
//         });
        
//       } catch (e: unknown) {
//         console.error("Помилка завантаження:", e);
//         let errorMessage = "Невідома помилка";
//         if (e && typeof e === "object" && "message" in e && typeof (e as { message?: unknown }).message === "string") {
//           errorMessage = (e as { message: string }).message;
//         }
//         setError(`Помилка завантаження даних: ${errorMessage}`);
        
//         // Використовуємо тестові дані для демонстрації
//         const mockData: ScheduleData[] = [
//           {
//             templFile: "week1",
//             data: [
//               ["Герасименко Марія Петрівна", "Математика", "Фізика", "Хімія", "Біологія", "Географія", "Історія", "Українська мова", "Англійська мова", "Фізкультура", "Музика", "Мистецтво", "Трудове навчання"],
//             ],
//             header: [[]]
//           },
//           {
//             templFile: "week1 (clas)",
//             data: [
//               ["5-А", "Математика", "Фізика", "Хімія", "Біологія", "Географія", "Історія", "Українська мова", "Англійська мова", "Фізкультура", "Музика", "Мистецтво", "Трудове навчання"],
//             ],
//             header: [[]]
//           },
//           {
//             templFile: "Час початку уроків",
//             data: [],
//             header: [["8:00", "8:45", "9:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "15:30", "16:15"]]
//           },
//           {
//             templFile: "workdays",
//             data: [
//               [date], // дати
//               ["1"], // день тижня
//               ["1"] // чергування
//             ],
//             header: [[]]
//           }
//         ];
//         setGlData(mockData);
//         console.log("Використовуємо тестові дані");
//       } finally {
//         setLoader(false);
//       }
//     };
    
//     fetchData();
//   }, [date]);

//   // Ініціалізація списків після завантаження даних
//   useEffect(() => {
//     if (glData.length > 0) {
//       const teacherData = getData("week1")?.data || [];
//       const classData = getData("week1 (clas)")?.data || [];

//       const teacherNames = teacherData.map((row) => row[0]).filter(Boolean);
//       const classNames = classData.map((row) => row[0]).filter(Boolean);

//       setTeachers([...new Set(teacherNames)]);
//       setClasses([...new Set(classNames)]);

//       console.log("Teachers loaded:", teacherNames.length);
//       console.log("Classes loaded:", classNames.length);

//       // Ініціалізація доступних дат
//       const workdays = getData("workdays")?.data || [];
//       if (workdays.length > 0 && workdays[0]) {
//         const dates = workdays[0].filter(Boolean);
//         setAvailableDates(dates);
        
//         // Знаходимо індекс поточної дати
//         const currentIndex = dates.indexOf(date);
//         if (currentIndex !== -1) {
//           setCurrentDateIndex(currentIndex);
//         }
//         console.log("Available dates:", dates.length);
//       } else {
//         // Якщо немає даних про робочі дні, створюємо тестові дати
//         const testDates = [];
//         for (let i = -7; i <= 7; i++) {
//           const testDate = new Date();
//           testDate.setDate(testDate.getDate() + i);
//           testDates.push(testDate.toISOString().split("T")[0]);
//         }
//         setAvailableDates(testDates);
//         const currentIndex = testDates.indexOf(date);
//         if (currentIndex !== -1) {
//           setCurrentDateIndex(currentIndex);
//         }
//         console.log("Using test dates:", testDates.length);
//       }
//     }
//   }, [glData, date]);

//   // Відслідковування змін URL та оновлення розкладу
//   useEffect(() => {
//     if (glData.length > 0) {
//       const teacherFromUrl = searchParams.get("teacher") || "";
//       const classFromUrl = searchParams.get("class") || "";
      
//       console.log("URL changed, updating schedule for:", { teacherFromUrl, classFromUrl, date });
      
//       if (teacherFromUrl && teacherFromUrl !== selectedTeacher) {
//         setSelectedTeacher(teacherFromUrl);
//         setSelectedClass("");
//         showSchedule(teacherFromUrl, "teacher");
//       } else if (classFromUrl && classFromUrl !== selectedClass) {
//         setSelectedClass(classFromUrl);
//         setSelectedTeacher("");
//         showSchedule(classFromUrl, "class");
//       } else if (selectedTeacher) {
//         showSchedule(selectedTeacher, "teacher");
//       } else if (selectedClass) {
//         showSchedule(selectedClass, "class");
//       }
//     }
//   }, [searchParams, glData, date]);

//   // Отримати таблицю з усіх
//   const getData = (tableName: string): ScheduleData | null => {
//     return glData.find((d) => d.templFile === tableName) || null;
//   };

//   // Оновлення URL параметрів
//   const updateUrl = (teacher: string, className: string, currentDate: string) => {
//     const params = new URLSearchParams();
//     if (teacher) params.set("teacher", teacher);
//     if (className) params.set("class", className);
//     if (currentDate) params.set("date", currentDate);
//     setSearchParams(params);
//   };

//   // Подія при зміні вчителя
//   const handleTeacherChange = (value: string) => {
//     setSelectedTeacher(value);
//     setSelectedClass("");
//     updateUrl(value, "", date);
//   };

//   // Подія при зміні класу
//   const handleClassChange = (value: string) => {
//     setSelectedClass(value);
//     setSelectedTeacher("");
//     updateUrl("", value, date);
//   };

//   // Подія при зміні дати
//   const handleChangeDate = (value: string) => {
//     setDate(value);
//     const newIndex = availableDates.indexOf(value);
//     if (newIndex !== -1) {
//       setCurrentDateIndex(newIndex);
//     }
//     updateUrl(selectedTeacher, selectedClass, value);
//   };

//   // Функція для зміни дати через слайдер
//   const handleSlideChange = (slideIndex: number) => {
//     if (slideIndex >= 0 && slideIndex < availableDates.length) {
//       const newDate = availableDates[slideIndex];
//       setDate(newDate);
//       setCurrentDateIndex(slideIndex);
//       updateUrl(selectedTeacher, selectedClass, newDate);
//     }
//   };

//   // Показати розклад
//   const showSchedule = (name: string, mode: "teacher" | "class") => {
//     console.log("Показ розкладу для:", name, "режим:", mode, "дата:", date);
    
//     const weekData = getData(mode === "teacher" ? "week1" : "week1 (clas)")?.data || [];
    
//     if (weekData.length === 0) {
//       console.log("Немає даних для розкладу");
//       setLessons([]);
//       return;
//     }
//     const dayInfo = getDayInfo();
//     console.log("dayInfo:", dayInfo);
    
//     // Якщо немає даних про робочий день, показуємо вільні години
//     if (!hasWorkdayData()) {
//       console.log("Немає даних про робочий день - показуємо вільні години");
//       const timeSlots = getData("Час початку уроків")?.header?.[0] || [];
//       const freeHours: LessonData[] = timeSlots.map((time) => ({
//         time,
//         lesson: "-",
//         className: undefined,
//       }));
//       setLessons(freeHours);
//       return;
//     }
    
//     const offset = (dayInfo.dWeek - 1) * 12 + 1;
//     const numRow = weekData.findIndex((r) => r[0] === name);
//     const row = weekData[numRow];
//     console.log("Знайдено рядок:", numRow, "offset:", offset);

//     if (!row) {
//       console.log("Рядок не знайдено для:", name);
//       setLessons([]);
//       return;
//     }

//     const timeSlots = getData("Час початку уроків")?.header?.[0] || [];
    
//     if (mode === "teacher") {
//       // Для вчителя додаємо інформацію про клас
//       const lessonData: LessonData[] = timeSlots.map((time, i) => {
//         const subject = row[offset + i] || "-";
//         let className = "";

//         // Знаходимо клас для цього уроку
//         if (subject !== "-" && weekData[numRow + 1]) {
//           className = weekData[numRow + 1][offset + i] || "";
//         }

//         return {
//           time,
//           lesson: subject,
//           className: className || undefined,
//         };
//       });

//       setLessons(lessonData);
//     } else {
//       // Для класу залишаємо як було
//       const lessonData: LessonData[] = timeSlots.map((time, i) => ({
//         time,
//         lesson: row[offset + i] || "-",
//       }));

//       setLessons(lessonData);
//     }
//   };

//   // Перевірка наявності даних про робочий день
//   const hasWorkdayData = (): boolean => {
//     const wd = getData("workdays")?.data || [];
//     if (wd.length === 0 || !wd[0]) return false;
//     const dateIndex = wd[0].indexOf(date);
//     return dateIndex !== -1;
//   };

//   // Визначити день тижня та чергування (1/2 тиждень)
//   const getDayInfo = (): DayInfo => {
//     const wd = getData("workdays")?.data || [];
//     if (wd.length === 0 || !wd[0]) {
//       return { chZn: 1, dWeek: 1 };
//     }
    
//     const dateIndex = wd[0].indexOf(date);
//     if (dateIndex === -1) {
//       return { chZn: 1, dWeek: 1 };
//     }
    
//     return { 
//       chZn: Number(wd[2]?.[dateIndex]) || 1, 
//       dWeek: Number(wd[1]?.[dateIndex]) || 1 
//     };
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("uk-UA", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   const ScheduleTable = () => (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//       <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
//         <h3 className="text-xl font-bold flex items-center">
//           <GraduationCap className="w-6 h-6 mr-2" />
//           Розклад для: {selectedTeacher || selectedClass}
//         </h3>
//         <p className="text-sm opacity-90 mt-1">{formatDate(date)}</p>
//       </div>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-32">Час</TableHead>
//             <TableHead className="w-16">Урок</TableHead>
//             <TableHead>Предмет</TableHead>
//             {selectedTeacher && (
//               <TableHead className="w-32">Клас</TableHead>
//             )}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {lessons.map((lesson, index) => (
//             <TableRow key={index} className="hover:bg-gray-50">
//               <TableCell className="font-medium text-blue-600">
//                 <div className="flex items-center">
//                   <Clock className="w-4 h-4 mr-2" />
//                   {lesson.time}
//                 </div>
//               </TableCell>
//               <TableCell className="font-medium text-blue-600">
//                 <div className="flex items-center">{index + 1}</div>
//               </TableCell>
//               <TableCell
//                 className={
//                   lesson.lesson === "-" ? "text-gray-400 italic" : ""
//                 }
//               >
//                 {lesson.lesson === "-"
//                   ? "Вільна година"
//                   : lesson.lesson}
//               </TableCell>
//               {selectedTeacher && (
//                 <TableCell className="text-sm text-gray-600">
//                   {lesson.className || "-"}
//                 </TableCell>
//               )}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header
//         title="Розклад уроків"
//         description="Перегляд розкладу занять для вчителів та класів"
//         className="bg-blue-600 text-white py-8"
//       />

//       {loader ? (
//         <div className="text-center py-20 text-gray-500">
//           <Clock className="w-12 h-12 mx-auto mb-4 animate-spin" />
//           <p className="text-lg">Завантаження розкладу...</p>
//         </div>
//       ) : (
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {error && (
//             <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//               <p className="text-red-700">{error}</p>
//               <p className="text-sm text-red-600 mt-2">Використовуємо тестові дані для демонстрації</p>
//             </div>
//           )}

//           {/* Фільтри */}
//           <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//               <Users className="w-6 h-6 mr-2 text-blue-600" />
//               Оберіть параметри перегляду
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="space-y-2">
//                 <Label
//                   htmlFor="teacher-select"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Вчитель
//                 </Label>
//                 <Select
//                   value={selectedTeacher}
//                   onValueChange={handleTeacherChange}
//                 >
//                   <SelectTrigger id="teacher-select" className="w-full">
//                     <SelectValue placeholder="Оберіть вчителя" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {teachers.map((name) => (
//                       <SelectItem key={name} value={name}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="class-select"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Клас
//                 </Label>
//                 <Select value={selectedClass} onValueChange={handleClassChange}>
//                   <SelectTrigger id="class-select" className="w-full">
//                     <SelectValue placeholder="Оберіть клас" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {classes.map((name) => (
//                       <SelectItem key={name} value={name}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="date-input"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Дата
//                 </Label>
//                 <Input
//                   id="date-input"
//                   type="date"
//                   value={date}
//                   onChange={(e) => handleChangeDate(e.target.value)}
//                   className="w-full"
//                 />
//               </div>
//             </div>

//             {date && (
//               <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                 <p className="text-sm text-blue-700 font-medium">
//                   Обрана дата: {formatDate(date)}
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Розклад з Carousel */}
//           {lessons.length > 0 && availableDates.length > 0 && (
//             <Carousel
//               className="w-full"
//               opts={{
//                 align: "start",
//                 loop: false,
//               }}
//             >
//               <CarouselContent>
//                 {availableDates.map((availableDate, index) => (
//                   <CarouselItem key={availableDate}>
//                     {index === currentDateIndex && <ScheduleTable />}
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <CarouselPrevious
//                 onClick={() => {
//                   if (currentDateIndex > 0) {
//                     handleSlideChange(currentDateIndex - 1);
//                   }
//                 }}
//                 className="left-4"
//               />
//               <CarouselNext
//                 onClick={() => {
//                   if (currentDateIndex < availableDates.length - 1) {
//                     handleSlideChange(currentDateIndex + 1);
//                   }
//                 }}
//                 className="right-4"
//               />
//             </Carousel>
//           )}

//           {lessons.length === 0 && (selectedTeacher || selectedClass) && (
//             <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//               <Clock className="w-16 h-16 mx-auto mb-4 text-gray-300" />
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">
//                 Розклад не знайдено
//               </h3>
//               <p className="text-gray-500">
//                 Для обраного {selectedTeacher ? "вчителя" : "класу"} на цю дату
//                 розклад відсутній.
//               </p>
//             </div>
//           )}

//           {!selectedTeacher && !selectedClass && (
//             <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//               <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">
//                 Оберіть параметри
//               </h3>
//               <p className="text-gray-500">
//                 Для перегляду розкладу оберіть вчителя або клас
//               </p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Schedule;






import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "@/components/header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Users, GraduationCap } from "lucide-react";

type ScheduleData = {
  templFile: string;
  data: string[][];
  header: string[][];
};

type DayInfo = {
  chZn: number;
  dWeek: number;
};

type LessonData = {
  time: string;
  lesson: string;
  className?: string;
};

const SERVER = "https://schooltools.pythonanywhere.com/";
const KEY = "1obSD_Q_w6ZXVAfMmJyXsGkf12VqDWjdhLDwARsd9Ujk";

const Schedule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [teachers, setTeachers] = useState<string[]>([]);
  const [classes, setClasses] = useState<string[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [glData, setGlData] = useState<ScheduleData[]>([]);
  const [lessons, setLessons] = useState<LessonData[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  // Ініціалізація параметрів з URL
  useEffect(() => {
    const teacherFromUrl = searchParams.get("teacher") || "";
    const classFromUrl = searchParams.get("class") || "";
    const dateFromUrl = searchParams.get("date") || new Date().toISOString().split("T")[0];
    
    setSelectedTeacher(teacherFromUrl);
    setSelectedClass(classFromUrl);
    setDate(dateFromUrl);
  }, []);

  // Завантаження даних
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ScheduleData[]>(
          `${SERVER}getmultiblock/${KEY}`,
        );
        setGlData(res.data);
        console.log("Дані завантажено", res.data);
      } catch (e) {
        console.error("Помилка завантаження:", e);
      } finally {
        setLoader(false);
      }
    };
    
    fetchData();
  }, []);

  // Ініціалізація списків після завантаження даних
  useEffect(() => {
    if (glData.length > 0) {
      const teacherData = getData("week1")?.data || [];
      const classData = getData("week1 (clas)")?.data || [];

      const teacherNames = teacherData.map((row) => row[0]).filter(Boolean);
      const classNames = classData.map((row) => row[0]).filter(Boolean);

      setTeachers([...new Set(teacherNames)]);
      setClasses([...new Set(classNames)]);
    }
  }, [glData]);

  // Відслідковування змін URL та оновлення розкладу
  useEffect(() => {
    if (glData.length > 0) {
      const teacherFromUrl = searchParams.get("teacher") || "";
      const classFromUrl = searchParams.get("class") || "";
      
      if (teacherFromUrl && teacherFromUrl !== selectedTeacher) {
        setSelectedTeacher(teacherFromUrl);
        setSelectedClass("");
        showSchedule(teacherFromUrl, "teacher");
      } else if (classFromUrl && classFromUrl !== selectedClass) {
        setSelectedClass(classFromUrl);
        setSelectedTeacher("");
        showSchedule(classFromUrl, "class");
      } else if (selectedTeacher) {
        showSchedule(selectedTeacher, "teacher");
      } else if (selectedClass) {
        showSchedule(selectedClass, "class");
      }
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [searchParams, glData, date]);

  // Отримати таблицю з усіх
  const getData = (tableName: string): ScheduleData | null => {
    return glData.find((d) => d.templFile === tableName) || null;
  };

  // Оновлення URL параметрів
  const updateUrl = (teacher: string, className: string, currentDate: string) => {
    const params = new URLSearchParams();
    if (teacher) params.set("teacher", teacher);
    if (className) params.set("class", className);
    if (currentDate) params.set("date", currentDate);
    setSearchParams(params);
  };

  // Подія при зміні вчителя
  const handleTeacherChange = (value: string) => {
    setSelectedTeacher(value);
    setSelectedClass("");
    updateUrl(value, "", date);
  };

  // Подія при зміні класу
  const handleClassChange = (value: string) => {
    setSelectedClass(value);
    setSelectedTeacher("");
    updateUrl("", value, date);
  };

  // Подія при зміні дати
  const handleChangeDate = (value: string) => {
    setDate(value);
    updateUrl(selectedTeacher, selectedClass, value);
  };

  

  // Показати розклад
  const showSchedule = (name: string, mode: "teacher" | "class") => {
    const weekData =
      getData(mode === "teacher" ? "week1" : "week1 (clas)")?.data || [];
    
    const dayInfo = getDayInfo();
    console.log("dayInfo:", dayInfo);
    
    // Якщо немає даних про робочий день, показуємо вільні години
    if (dayInfo.chZn === 1 && dayInfo.dWeek === 1 && !hasWorkdayData()) {
      const timeSlots = getData("Час початку уроків")?.header?.[0] || [];
      const freeHours: LessonData[] = timeSlots.map((time) => ({
        time,
        lesson: "-",
        className: undefined,
      }));
      setLessons(freeHours);
      return;
    }
    
    const offset = (dayInfo.dWeek - 1) * 12 + 1;
    const numRow = weekData.findIndex((r) => r[0] === name);
    const row = weekData[numRow];

    if (!row) return;

    const timeSlots = getData("Час початку уроків")?.header?.[0] || [];
    
    if (mode === "teacher") {
      // Для вчителя додаємо інформацію про клас
      const lessonData: LessonData[] = timeSlots.map((time, i) => {
        const subject = row[offset + i + 1] || "-";
        let className = "";

        // Знаходимо клас для цього уроку
        if (subject !== "-") {
          className = weekData[numRow + 1]?.[offset + i + 1] || "";
        }

        return {
          time,
          lesson: subject,
          className: className || undefined,
        };
      });

      setLessons(lessonData);
    } else {
      // Для класу залишаємо як було
      const lessonData: LessonData[] = timeSlots.map((time, i) => ({
        time,
        lesson: row[offset + i + 1] || "-",
      }));

      setLessons(lessonData);
    }
  };

  // Перевірка наявності даних про робочий день
  const hasWorkdayData = (): boolean => {
    const wd = getData("workdays")?.data || [];
    const dateIndex = wd[0]?.indexOf(date);
    return dateIndex !== -1;
  };

  // Визначити день тижня та чергування (1/2 тиждень)
  const getDayInfo = (): DayInfo => {
    const wd = getData("workdays")?.data || [];
    const dateIndex = wd[0]?.indexOf(date);
    return dateIndex === -1
      ? { chZn: 1, dWeek: 1 }
      : { chZn: Number(wd[2][dateIndex]), dWeek: Number(wd[1][dateIndex]) };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Розклад уроків"
        description="Перегляд розкладу занять для вчителів та класів"
        className="bg-blue-600 text-white py-8"
      />

      {loader ? (
        <div className="text-center py-20 text-gray-500">
          <Clock className="w-12 h-12 mx-auto mb-4 animate-spin" />
          <p className="text-lg">Завантаження розкладу...</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Фільтри */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600" />
              Оберіть параметри перегляду
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="teacher-select"
                  className="text-sm font-medium text-gray-700"
                >
                  Вчитель
                </Label>
                <Select
                  value={selectedTeacher}
                  onValueChange={handleTeacherChange}
                >
                  <SelectTrigger id="teacher-select" className="w-full">
                    <SelectValue placeholder="Оберіть вчителя" />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="class-select"
                  className="text-sm font-medium text-gray-700"
                >
                  Клас
                </Label>
                <Select value={selectedClass} onValueChange={handleClassChange}>
                  <SelectTrigger id="class-select" className="w-full">
                    <SelectValue placeholder="Оберіть клас" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="date-input"
                  className="text-sm font-medium text-gray-700"
                >
                  Дата
                </Label>
                <Input
                  id="date-input"
                  type="date"
                  value={date}
                  onChange={(e) => handleChangeDate(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {date && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  Обрана дата: {formatDate(date)}
                </p>
              </div>
            )}
          </div>

          {/* Розклад */}
          {lessons.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="text-xl font-bold flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Розклад для: {selectedTeacher || selectedClass}
                </h3>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Час</TableHead>
                    <TableHead className="w-16">Урок</TableHead>
                    <TableHead>Предмет</TableHead>
                    {selectedTeacher && (
                      <TableHead className="w-32">Клас</TableHead>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lessons.map((lesson, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-blue-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {lesson.time}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-blue-600">
                        <div className="flex items-center">{index + 1}</div>
                      </TableCell>
                      <TableCell
                        className={
                          lesson.lesson === "-" ? "text-gray-400 italic" : ""
                        }
                      >
                        {lesson.lesson === "-"
                          ? "Вільна година"
                          : lesson.lesson}
                      </TableCell>
                      {selectedTeacher && (
                        <TableCell className="text-sm text-gray-600">
                          {lesson.className || "-"}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {lessons.length === 0 && (selectedTeacher || selectedClass) && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <Clock className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Розклад не знайдено
              </h3>
              <p className="text-gray-500">
                Для обраного {selectedTeacher ? "вчителя" : "класу"} на цю дату
                розклад відсутній.
              </p>
            </div>
          )}

          {!selectedTeacher && !selectedClass && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Оберіть параметри
              </h3>
              <p className="text-gray-500">
                Для перегляду розкладу оберіть вчителя або клас
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Schedule;
