import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Connectivity from "./pages/Connectivity";
import DataCentres from "./pages/DataCentres";
import CloudServices from "./pages/CloudServices";
import Cybersecurity from "./pages/Cybersecurity";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import CustomerService from "./pages/CustomerService";
import Resources from "./pages/Resources";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pt-16 lg:pt-20">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/connectivity" element={<Connectivity />} />
            <Route path="/data-centres" element={<DataCentres />} />
            <Route path="/cloud-services" element={<CloudServices />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/media" element={<Media />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
