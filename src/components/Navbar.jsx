import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#162249] fixed top-0 left-0 z-40 text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Samyak Drishti"
            className="h-8 object-contain"
          />
        </Link>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-[Open_Sans] text-[12px] font-normal leading-[100%] tracking-[0%]">

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


        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[4px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>

        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-[#162249] border-t border-white/10">

          <ul className="flex flex-col items-center gap-6 py-6 font-[Open_Sans] text-[14px]">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            <li>
              <Link to="/our-team" onClick={() => setMenuOpen(false)}>Our Team</Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>

            <li>
              <Link to="/our-impact" onClick={() => setMenuOpen(false)}>Our Impact</Link>
            </li>

            <li>
              <Link to="/international" onClick={() => setMenuOpen(false)}>International Patients</Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>

          </ul>

        </div>

      )}

    </nav>
  );
}