import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AIAndAutomation from "./pages/AIAndAutomation";
import AIMLIntegrations from "./pages/AIMLIntegrations";
import AIAutomationSolutions from "./pages/AIAutomationSolutions";
import ChatbotDevelopment from "./pages/ChatbotDevelopment";
import IntelligentDataProcessing from "./pages/IntelligentDataProcessing";
import StaffAugmentation from "./pages/StaffAugmentation";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import Consultation from "./pages/Consultation";
import DataEngineering from "./pages/DataEngineering";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/ui/CustomCursor";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BlogManagement from "./pages/admin/BlogManagement";
import BlogForm from "./pages/admin/BlogForm";
import CareerManagement from "./pages/admin/CareerManagement";
import CareerForm from "./pages/admin/CareerForm";
import JobApplicationsAdmin from "./pages/admin/JobApplicationsAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          {/* Custom Cursor */}
          <CustomCursor />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/ai" element={<AIAndAutomation />} />
            <Route path="/services/ai/integrations" element={<AIMLIntegrations />} />
            <Route path="/services/ai/automation" element={<AIAutomationSolutions />} />
            <Route path="/services/ai/chatbots" element={<ChatbotDevelopment />} />
            <Route path="/services/ai/data-processing" element={<IntelligentDataProcessing />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/services/development" element={<SoftwareDevelopment />} />
            <Route path="/services/data-engineering" element={<DataEngineering />} />
            <Route path="/services/mobile" element={<MobileDevelopment />} />
            <Route path="/services/cloud" element={<CloudSolutions />} />
            <Route path="/services/consultation" element={<Consultation />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/:slug" element={<BlogDetail />} />
            <Route path="/careers" element={<Careers />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/blogs" element={<ProtectedRoute><BlogManagement /></ProtectedRoute>} />
            <Route path="/admin/blogs/new" element={<ProtectedRoute><BlogForm /></ProtectedRoute>} />
            <Route path="/admin/blogs/edit/:id" element={<ProtectedRoute><BlogForm /></ProtectedRoute>} />
            <Route path="/admin/careers" element={<ProtectedRoute><CareerManagement /></ProtectedRoute>} />
            <Route path="/admin/careers/new" element={<ProtectedRoute><CareerForm /></ProtectedRoute>} />
            <Route path="/admin/careers/edit/:id" element={<ProtectedRoute><CareerForm /></ProtectedRoute>} />
            <Route path="/admin/applications" element={<ProtectedRoute><JobApplicationsAdmin /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
