import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PatientDashboard from "./components/Dashboard/PatientDashboard.jsx";
import DoctorDashboard from "./components/Dashboard/DoctorDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import LoginForm from "./components/Auth/LoginForm.jsx";
import RegisterForm from "./components/Auth/RegisterForm.jsx";
import AppointmentBooking from "./components/Appointments/AppointmentBooking.jsx";
import PrescriptionViewer from "./components/Prescriptions/PrescriptionViewer.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/appointments" element={<AppointmentBooking />} />
          <Route path="/prescriptions" element={<PrescriptionViewer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
