import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

//* Pages 
import ServicesPage from "./pages/Services"; 
import MainServicePage from "./pages/MainServicePage"; 
import RLEPage from "./pages/RLEPage"; 
import CataractPage from "./pages/CataractPage";
import LasikPage from "./pages/LasikPage";
import ContactUsPage from "./pages/ContactUsPage";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop/>
      <Routes>
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                {/* Temporary placeholder until you build the Home page */}
                <div className="pt-32 text-center px-4">
                  <h1 className="text-3xl font-serif text-[#1b2a4e] mb-4">Welcome to Samyak Drishti</h1>
                  <p className="text-gray-600">
                    Hover over "Services" in the Navbar to see your dropdown menus!
                  </p>
                </div>
              </main>
            </>
          }
        />

        {/* ================= COMPREHENSIVE SERVICES PAGE ================= */}
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <ServicesPage />
            </>
          }
        />

        {/* ================= MAIN SERVICE OVERVIEW PAGE ================= */}
        <Route
          path="/main-service"
          element={
            <>
              <Navbar />
              <MainServicePage />
            </>
          }
        />
        
        {/* ================= RLE PAGE ================= */}
        <Route
          path="/rle"
          element={
            <>
              <Navbar />
              <RLEPage />
            </>
          }
        />

        {/* ================= CATARACT PAGE ================= */}
        <Route
          path="/cataract"
          element={
            <>
              <Navbar />
              <CataractPage />
            </>
          }
        />

        {/* ================= LASIK PAGE ================= */}
        <Route
          path="/lasik"
          element={
            <>
              <Navbar />
              <LasikPage />
            </>
          }
        />

        {/* ================= CONTACT US PAGE ================= */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUsPage />
            </>
          }
        />

        {/* ================= CATCH-ALL ROUTE ================= 
            This ensures the Navbar stays visible if you click 
            other links before those pages are created */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="pt-32 text-center">
                <h2 className="text-2xl font-serif text-[#1b2a4e]">Page Under Construction</h2>
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;