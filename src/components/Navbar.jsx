import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-white text-2xl font-extrabold">
          <Link to="/">InKind</Link>
        </div>

        {/*Desktop nav*/}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            {['/', '/donate', '/about', '/contact'].map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="text-white hover:text-gray-300 font-medium transition duration-300 text-lg"
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop button */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/donate"
            className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* MobileToggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none relative w-8 h-8">
            <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-white transform transition duration-300 ease-in-out"
              style={{
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(0)' : 'translateY(-6px)'
              }}
            ></div>
            <div className={`absolute left-0 w-8 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ top: '50%' }}></div>
            <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-white transform transition duration-300 ease-in-out"
              style={{
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(6px)'
              }}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Nav*/}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-start p-5 space-y-4 bg-gradient-to-r from-purple-600 to-indigo-600">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 text-lg font-medium transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="text-white hover:text-gray-300 text-lg font-medium transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 text-lg font-medium transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 text-lg font-medium transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/donate"
              className="block w-full bg-gray-900 text-white text-center font-semibold py-2 rounded-full hover:bg-gray-800 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
