import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  // ✅ ADDED: State to track which mobile dropdown is open
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(""); 
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/our-team' },
    { 
      name: 'Services', 
      dropdown: [
        { name: 'Comprehensive Eye Care', path: '/services' },
        { name: 'Vision Correction', path: '/main-service' }
      ]
    },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'International Patients', path: '/international' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (dropdown) => dropdown.some(subLink => location.pathname === subLink.path);

  // Helper to toggle main mobile menu and reset dropdowns
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdownOpen(""); // Close dropdowns when closing main menu
  };

  return (
    <nav className="bg-[#1b2a4e] text-white w-full fixed top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Samyak Drishti"
              className="h-55 object-contain" // Standardized sizing
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center h-full ml-auto">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group h-full flex items-center">
                
                {link.dropdown ? (
                  <div className={`cursor-pointer text-sm hover:text-gray-300 flex items-center relative py-1 ${
                    isDropdownActive(link.dropdown) 
                      ? 'font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#b4dfc4]' 
                      : 'font-light'
                  }`}>
                    {link.name}
                    <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm hover:text-gray-300 relative py-1 ${
                      isActive(link.path) 
                        ? 'font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#b4dfc4]' 
                        : 'font-light'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Box */}
                {link.dropdown && (
                  <div className="absolute top-[80px] left-0 w-60 bg-white text-[#1b2a4e] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#b4dfc4]">
                    <div className="py-2">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          className={`block px-6 py-3 text-sm hover:bg-gray-50 ${isActive(subLink.path) ? 'font-bold text-[#2c7a51]' : 'font-medium'}`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
            
            {/* BOOK CONSULTATION BUTTON (DESKTOP) */}
            <button 
              onClick={onBookClick} 
              className="ml-4 bg-[#b4dfc4] text-[#1b2a4e] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#9cccae] transition-colors shadow-sm cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="p-2 cursor-pointer"
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#1b2a4e] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[600px] border-t border-white/10' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link, index) => (
            <div key={index}>
              
              {link.dropdown ? (
                <div className="space-y-1">
                  
                  {/* ✅ FIX: Made the category name an interactive button with identical styling to normal links */}
                  <button 
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? "" : link.name)}
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base hover:bg-[#25365e] transition-colors ${
                      isDropdownActive(link.dropdown) ? 'text-[#b4dfc4] font-semibold bg-[#25365e]' : 'text-white'
                    }`}
                  >
                    {link.name}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen === link.name ? 'rotate-180' : ''}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* ✅ FIX: The smoothly expanding sub-menu */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === link.name ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="pl-6 pr-3 py-1 mb-2 space-y-1 border-l-2 border-[#b4dfc4]/30 ml-4">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm hover:bg-[#25365e] ${isActive(subLink.path) ? 'text-[#b4dfc4] font-semibold' : 'text-gray-300'}`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base hover:bg-[#25365e] ${isActive(link.path) ? 'text-[#b4dfc4] font-semibold border-l-4 border-[#b4dfc4] bg-[#25365e]' : ''}`}
                >
                  {link.name}
                </Link>
              )}

            </div>
          ))}

          {/* BOOK CONSULTATION BUTTON (MOBILE) */}
          <div className="pt-4 mt-2 border-t border-white/10">
            <button 
              onClick={() => {
                setIsOpen(false);
                if (onBookClick) onBookClick(); 
              }} 
              className="w-full bg-[#b4dfc4] text-[#1b2a4e] px-4 py-3 rounded-md text-base font-bold hover:bg-[#9cccae] transition-colors shadow-sm cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;