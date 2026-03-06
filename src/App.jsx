import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurImpact from "./pages/OurImpact";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;