import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#162249] text-white">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Samyak Drishti"
            className="h-8 object-contain"
          />
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-[Open_Sans] text-[12px] font-normal leading-[100%] tracking-[0%]">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/our-team">Our Team</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/our-impact">Our Impact</Link>
          </li>

          <li>
            <Link to="/international">International Patients</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}