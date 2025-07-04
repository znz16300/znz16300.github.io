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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
