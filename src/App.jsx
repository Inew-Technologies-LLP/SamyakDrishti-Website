import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./scrolltotopbutton";

// ===== Existing Pages (HEAD) =====
import Home from "./pages/Home";
import OurImpact from "./pages/OurImpact";
import OurTeam from "./pages/OurTeam";
import International from "./pages/International";

// ===== Krishna Pages =====
import ServicesPage from "./pages/Services";
import MainServicePage from "./pages/MainServicePage";
import RLEPage from "./pages/RLEPage";
import CataractPage from "./pages/CataractPage";
import LasikPage from "./pages/LasikPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <ScrollTopButton />

        <Routes>

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />

          {/* ================= OUR PAGES ================= */}
          <Route
            path="/our-impact"
            element={
              <>
                <Navbar />
                <OurImpact />
              </>
            }
          />

          <Route
            path="/our-team"
            element={
              <>
                <Navbar />
                <OurTeam />
              </>
            }
          />

          <Route
            path="/international"
            element={
              <>
                <Navbar />
                <International />
              </>
            }
          />

          {/* ================= SERVICES ================= */}
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <ServicesPage />
              </>
            }
          />

          <Route
            path="/main-service"
            element={
              <>
                <Navbar />
                <MainServicePage />
              </>
            }
          />

          <Route
            path="/rle"
            element={
              <>
                <Navbar />
                <RLEPage />
              </>
            }
          />

          <Route
            path="/cataract"
            element={
              <>
                <Navbar />
                <CataractPage />
              </>
            }
          />

          <Route
            path="/lasik"
            element={
              <>
                <Navbar />
                <LasikPage />
              </>
            }
          />

          {/* ================= CONTACT ================= */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactUsPage />
              </>
            }
          />

          {/* ================= FALLBACK ================= */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="pt-32 text-center">
                  <h2 className="text-2xl font-serif text-[#1b2a4e]">
                    Page Under Construction
                  </h2>
                </main>
              </>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;