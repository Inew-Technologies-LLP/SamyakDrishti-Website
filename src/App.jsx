import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
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

function App() {
  return (
    <div className="min-h-screen ">
      
      {/* Global Components */}
      <ScrollToTop />
      <ScrollTopButton />
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/international" element={<International />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/main-service" element={<MainServicePage />} />
        <Route path="/rle" element={<RLEPage />} />
        <Route path="/cataract" element={<CataractPage />} />
        <Route path="/lasik" element={<LasikPage />} />

        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

    </div>
  );
}

export default App;