import React, { useState } from 'react';
// 1. IMPORT useLocation HERE
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 2. GET THE CURRENT URL LOCATION
  const location = useLocation();
  
  // 3. CREATE A RULE: Is this an admin page? (True or False)
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen ">
      
      {/* Global Components */}
      <ScrollToTop />
      
      {/* 4. CONDITIONALLY RENDER: Only show if NOT an admin route */}
      {!isAdminRoute && <ScrollTopButton />}
      {!isAdminRoute && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/international" element={<International />} />

        <Route 
          path="/services" 
          element={<ServicesPage onBookClick={() => setIsModalOpen(true)} />} 
        />

        <Route 
          path="/main-service" 
          element={<MainServicePage onBookClick={() => setIsModalOpen(true)} />} 
        />

        <Route 
          path="/rle" 
          element={<RLEPage onBookClick={() => setIsModalOpen(true)} />} 
        />

        <Route 
          path="/cataract" 
          element={<CataractPage onBookClick={() => setIsModalOpen(true)}/>} 
        />

        <Route 
          path="/lasik" 
          element={<LasikPage onBookClick={() => setIsModalOpen(true)} />} 
        />

        <Route path="/contact" element={<ContactUsPage />} />
        
        {/* Admin Route */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
        
      </Routes>

      {/* 5. CONDITIONALLY RENDER THE FOOTER & MODAL TOO */}
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