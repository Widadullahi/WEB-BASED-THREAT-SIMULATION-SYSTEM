import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Simulations from "./pages/Simulations";
import PhishingSim from "./pages/PhishingSim";
import PasswordSim from "./pages/PasswordSim";
import UrlSim from "./pages/UrlSim";
import SocialEngSim from "./pages/SocialEngSim";
import Resources from "./pages/Resources";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/sim/phishing" element={<PhishingSim />} />
            <Route path="/sim/password" element={<PasswordSim />} />
            <Route path="/sim/url" element={<UrlSim />} />
            <Route path="/sim/social" element={<SocialEngSim />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
