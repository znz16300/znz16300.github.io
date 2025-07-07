import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import News from "./pages/News";
import Documents from "./pages/Documents";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Kursi from "./pages/Kursi";
import Schedule from "./pages/Schedule";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white text-black dark:bg-gray-900 dark:text-white transition-colors">
          <button
            onClick={toggleTheme}
            className="m-4 p-2 rounded bg-gray-200 dark:bg-gray-800"
          >
            {theme === "light" ? "🌞 Світла тема" : "🌙 Темна тема"}
          </button>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<News />} />
              <Route path="/page" element={<Page />} />
              <Route path="/kursi" element={<Kursi />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
