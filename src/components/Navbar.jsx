import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // 1. Updated Data Structure to support dropdowns
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/our-team' },
    { 
      name: 'Services', 
      // Instead of a direct path, we provide a dropdown array
      dropdown: [
        { name: 'Comprehensive Eye Care Services', path: '/services' },
        { name: 'Main service', path: '/main-service' }, // We will build this later!
      ]
    },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'International Patients', path: '/international-patients' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    // Fixed at the top, dark blue background
    <nav className="bg-[#1b2a4e] text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="flex flex-col items-start">
              {/* Approximating the 3 dots above the 'I' in the logo */}
              <div className="flex gap-1 mb-0.5 ml-[132px]">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase">
                Samyak Drishti
              </span>
            </div>
          </Link>

          {/* Navigation Links (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            {navLinks.map((link, index) => (
              // 2. Added 'group' to the parent div and made it take full height 'h-full'
              // This ensures the hover state stays active while moving the mouse down to the menu
              <div key={index} className="relative group h-full flex items-center">
                
                {/* 3. Conditional rendering: Is it a dropdown or a normal link? */}
                {link.dropdown ? (
                  <div className="cursor-pointer text-sm font-light hover:text-gray-300 transition duration-200 flex items-center h-full">
                    {link.name}
                    {/* Tiny dropdown arrow icon */}
                    <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm font-light hover:text-gray-300 transition duration-200"
                  >
                    {link.name}
                  </Link>
                )}

                {/* 4. The Dropdown Box */}
                {link.dropdown && (
                  // Uses group-hover:opacity-100 to reveal the box when the parent is hovered
                  // top-[80px] perfectly matches the h-20 of the navbar
                  <div className="absolute top-[80px] left-0 w-72 bg-white text-[#1b2a4e] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#b4dfc4]">
                    <div className="py-2">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          className="block px-6 py-3 text-sm font-medium hover:bg-gray-50 hover:text-[#1b2a4e] transition-colors"
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

        </div>
      </div>
    </nav>
  );
};

export default Navbar;