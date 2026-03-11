import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurImpact from "./pages/OurImpact";
import OurTeam from "./pages/OurTeam";
import ScrollToTop from "./scrolltotop";
import ScrollTopButton from "./scrolltotopbutton";
import International from "./pages/International";

function App() {
  return (
    <BrowserRouter>
          <ScrollToTop />
          <ScrollTopButton />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/international" element={<International />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;