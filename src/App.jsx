import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ScrollTopButton from "./scrolltotopbutton";

// ===== Pages =====
import Home from "./pages/Home";
import OurImpact from "./pages/OurImpact";
import OurTeam from "./pages/OurTeam";
import International from "./pages/International";

import ServicesPage from "./pages/Services";
import MainServicePage from "./pages/MainServicePage";
import RLEPage from "./pages/RLEPage";
import CataractPage from "./pages/CataractPage";
import LasikPage from "./pages/LasikPage";
import ContactUsPage from "./pages/ContactUsPage";
import BookingModal from "./components/BookingModal";

// ===== Admin Pages =====
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Import Guard

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const location = useLocation();
  // Check if we are on any page that starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      
      {/* Only show website-wide UI elements if NOT on an admin page */}
      {!isAdminRoute && <ScrollTopButton />}
      {!isAdminRoute && <Navbar onBookClick={() => setIsModalOpen(true)} />}

      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home onBookClick={() => setIsModalOpen(true)} />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/international" element={<International />} />
        <Route path="/services" element={<ServicesPage onBookClick={() => setIsModalOpen(true)} />} />
        <Route path="/main-service" element={<MainServicePage onBookClick={() => setIsModalOpen(true)} />} />
        <Route path="/rle" element={<RLEPage onBookClick={() => setIsModalOpen(true)} />} />
        <Route path="/cataract" element={<CataractPage onBookClick={() => setIsModalOpen(true)}/>} />
        <Route path="/lasik" element={<LasikPage onBookClick={() => setIsModalOpen(true)} />} />
        <Route path="/contact" element={<ContactUsPage />} />

        {/* Admin Login - Always accessible */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* ✅ Admin Dashboard - PROTECTED 🔒 */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        /> 
      </Routes>

      {/* Only show footer/modal if NOT on an admin page */}
      {!isAdminRoute && <Footer onBookClick={() => setIsModalOpen(true)} />}

      {!isAdminRoute && (
        <BookingModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      <Analytics />
    </div>
  );
}

export default App;