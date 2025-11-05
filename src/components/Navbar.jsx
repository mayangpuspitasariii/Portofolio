import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-gray-900/80 font-semibold px-4 md:px-16 py-4 text-lg border-b border-gray-700 sticky top-0 z-20">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-white text-2xl tracking-wide">
          May<span className="text-blue-300">ang.</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-gray-300 md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } md:opacity-100 md:max-h-full overflow-hidden transition-all duration-500 ease-in-out md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-gray-900/95 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-6 p-4 md:p-0 text-gray-300 text-center md:text-left">
            {[
              'home',
              'about',
              'skill',
              'project',
              'certificate',
              'contact',
            ].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item}`}
                  className="transition-colors hover:text-blue-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
                {/* Underline effect */}
                <span className="block absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

