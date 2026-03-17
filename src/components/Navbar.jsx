import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/our-team' },
    { 
      name: 'Services', 
      dropdown: [
        { name: 'Services', path: '/services' }
      ]
    },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'International Patients', path: '/international' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-[#1b2a4e] text-white w-full fixed top-0 z-40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
           {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Samyak Drishti"
            className="h-8 object-contain"
          />
        </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group h-full flex items-center">
                
                {link.dropdown ? (
                  <div className="cursor-pointer text-sm font-light hover:text-gray-300 flex items-center">
                    {link.name}
                    <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm font-light hover:text-gray-300"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-[80px] left-0 w-60 bg-white text-[#1b2a4e] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#b4dfc4]">
                    <div className="py-2">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          className="block px-6 py-3 text-sm font-medium hover:bg-gray-50"
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
          <div className="md:hidden">
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
                  <div className="text-gray-400 text-xs uppercase px-3 py-2">
                    {link.name}
                  </div>

                  {link.dropdown.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-base hover:bg-[#25365e]"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base hover:bg-[#25365e]"
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