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
import { inIntervalTime, inIntervalTime2, parseDate, parseDate2, shortenFullName } from "@/lib/utils";

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
  substitute: string;
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
    const dateFromUrl =
      searchParams.get("date") || new Date().toISOString().split("T")[0];

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
  const updateUrl = (
    teacher: string,
    className: string,
    currentDate: string,
  ) => {
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
    const missingData =
      getData("missingbook").data.filter(
        (data) => parseDate(data[1]) === parseDate2(date),
      ) || [];
    console.log("missingData:", missingData);

    const dayInfo = getDayInfo();
    console.log("dayInfo:", dayInfo);

    // Якщо немає даних про робочий день, показуємо вільні години
    if (dayInfo.chZn === 1 && dayInfo.dWeek === 1 && !hasWorkdayData()) {
      const timeSlots = getData("Час початку уроків")?.header?.[0] || [];
      const freeHours: LessonData[] = timeSlots.map((time) => ({
        substitute: "",
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
        let substitute = "";
        let className = "";
        const substituteTeacher = missingData.find(
          (data) =>
            data[6] === shortenFullName(selectedTeacher) &&
            String(data[9]) === String(i + 1),
        );
        if (substituteTeacher) {
          substitute = `${substituteTeacher[5]}/${substituteTeacher[8]}`;
        }

        // Знаходимо клас для цього уроку
        if (subject !== "-") {
          className = weekData[numRow + 1]?.[offset + i + 1] || "";
        }

        return {
          time,
          lesson: subject,
          substitute: substitute || "-",
          className: className || "",
        };
      });

      setLessons(lessonData);
    } else {
      // Для класу залишаємо як було

      const lessonData: LessonData[] = timeSlots.map((time, i) => {
        const substitute =
          missingData.find(
            (data) =>
              data[5].trim() === selectedClass.trim() &&
              String(data[9]) === String(i + 1),
          ) || "-";
        console.log("substitute:", substitute);

        const lesson = row[offset + i + 1] || "-";
        const substituteReport = substitute[8] + "/" + substitute[6] || "-";
        return {
          time,
          lesson: lesson,
          substitute: substituteReport,
          className: selectedClass,
        };
      });

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
                    <TableHead className="w-16">Час</TableHead>
                    <TableHead className="w-8">Урок</TableHead>
                    {selectedTeacher ? (
                      <TableHead className="w-64">Предмет/Клас</TableHead>
                    ) : (
                      <TableHead className="w-64">Предмет/Вчитель</TableHead>
                    )}
                    <TableHead className="w-32">Заміна</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lessons.map((lesson, index) => (
                    <TableRow 
                    key={index} 
                    className={`hover:bg-gray-50 border ${
                    inIntervalTime2(lesson.time) ? "bg-red-200" : ""
                      }`}>  
                      <TableCell className="font-medium text-blue-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {lesson.time}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-blue-600">
                        <div className="flex items-center">{index + 1}</div>
                      </TableCell>

                      {selectedTeacher ? (
                        <TableCell
                          className={
                            lesson.lesson === "-" ? "text-gray-400 italic" : ""
                          }
                        >
                          {lesson.lesson === "-" ? (
                            "Вільна година"
                          ) : (
                            <>
                              <p>{lesson.className}</p>
                              <p style={{fontSize: "10px"}}>{lesson.lesson}</p>
                            </>
                          )}
                        </TableCell>
                      ) : (
                        <TableCell
                          className={
                            lesson.lesson === "-" ? "text-gray-400 italic" : ""
                          }
                        >
                          {lesson.lesson === "-"
                            ? "Вільна година"
                            : lesson.lesson
                                .split(/\/|\|/)
                                .map((item: string, index: number) => (
                                  <p key={index} style={index % 2 === 1 ? { fontSize: "10px" } : undefined}>{item}</p>
                                ))}
                        </TableCell>
                      )}
                      <TableCell className="font-medium text-blue-600">
                        <div className="text-red-600">
                          {lesson.substitute
                            .split(/\/|\|/)
                            .map((item: string, index: number) => (
                              <p key={index} style={index % 2 === 1 ? { fontSize: "10px" } : undefined}>
                                {item !== "undefined" ? item : ""}
                              </p>
                            ))}
                        </div>
                      </TableCell>
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
