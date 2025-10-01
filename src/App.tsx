import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Devis from "./pages/Devis";
import Deratisation from "./pages/Deratisation";
import Desinsectisation from "./pages/Desinsectisation";
import Desinfection from "./pages/Desinfection";
import DevisRapide from "./pages/DevisRapide";
import DevisDeratisation from "./pages/DevisDeratisation";
import NuisiblePerpignan from "./pages/NuisiblePerpignan";
import DevisRapidePerpignan from "./pages/DevisRapidePerpignan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/deratisation" element={<Deratisation />} />
          <Route path="/devis-deratisation" element={<DevisDeratisation />} />
          <Route path="/nuisible-perpignan" element={<NuisiblePerpignan />} />
          <Route path="/devis-rapide-perpignan" element={<DevisRapidePerpignan />} />
          <Route path="/desinsectisation" element={<Desinsectisation />} />
          <Route path="/desinfection" element={<Desinfection />} />
          <Route path="/devis-rapide" element={<DevisRapide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
