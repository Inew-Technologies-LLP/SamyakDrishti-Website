import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ ADDED useLocation
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ GET CURRENT URL PATH

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

  // ✅ HELPER FUNCTIONS TO CHECK IF LINK IS ACTIVE
  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (dropdown) => dropdown.some(subLink => location.pathname === subLink.path);

  return (
    <nav className="bg-[#1b2a4e] text-white w-full fixed top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added standard padding container */}
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Samyak Drishti"
              className="h-12 md:h-14 object-contain" // Adjusted for better sizing
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center h-full ml-auto">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group h-full flex items-center">
                
                {link.dropdown ? (
                  <div className={`cursor-pointer text-sm hover:text-gray-300 flex items-center relative py-1 ${
                    isDropdownActive(link.dropdown) 
                      ? 'font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#b4dfc4]' // ✅ ACTIVE DROPDOWN UNDERLINE
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
                        ? 'font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#b4dfc4]' // ✅ ACTIVE LINK UNDERLINE
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
          </div>

          {/* Mobile Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
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
      <div className={`md:hidden bg-[#1b2a4e] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link, index) => (
            <div key={index}>
              
              {link.dropdown ? (
                <div className="space-y-2">
                  <div className={`text-xs uppercase px-3 py-2 ${isDropdownActive(link.dropdown) ? 'text-[#b4dfc4] font-bold' : 'text-gray-400'}`}>
                    {link.name}
                  </div>

                  {link.dropdown.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base hover:bg-[#25365e] ${isActive(subLink.path) ? 'text-[#b4dfc4] font-semibold bg-[#25365e]' : ''}`}
                    >
                      {subLink.name}
                    </Link>
                  ))}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;