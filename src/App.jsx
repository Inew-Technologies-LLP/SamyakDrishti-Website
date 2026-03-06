import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ServicesPage from "./pages/Services"; 
import MainServicePage from "./pages/MainServicePage"; 
import RLEPage from "./pages/RLEPage"; // 1. IMPORT YOUR NEW RLE PAGE HERE

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
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
        {/* 2. ADD YOUR NEW RLE ROUTE HERE */}
        <Route
          path="/rle"
          element={
            <>
              <Navbar />
              <RLEPage />
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