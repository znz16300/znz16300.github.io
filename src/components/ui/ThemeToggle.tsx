import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 transition-colors duration-300 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      title={theme === "light" ? "Увімкнути темну тему" : "Увімкнути світлу тему"}
    >
      {theme === "light" ? <Moon size={20}  stroke="white" /> : <Sun size={20}  stroke="#9CA3AF" />}
    </button>
  );
};
