import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

// 🔥 Lazy imports
const Index = lazy(() => import("./pages/Index.tsx"));
const NovelPage = lazy(() => import("./pages/NovelPage.tsx"));
const PoetryPage = lazy(() => import("./pages/PoetryPage.tsx"));
const AuthorPage = lazy(() => import("./pages/AuthorPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/thilyki-skia-mou" element={<NovelPage />} />
            <Route path="/an-fygo" element={<PoetryPage />} />
            <Route path="/ioannis-kallas" element={<AuthorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;