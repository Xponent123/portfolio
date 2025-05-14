import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Add states for scroll behavior
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Make navbar visible when scrolling up or at the top
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (  
    <header 
      className={`fixed w-full top-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/70'} 
        backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} 
        shadow-sm z-50 transition-all duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="relative">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Jal Parikh
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} border-b-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'} pb-1 transform transition-all duration-200`
                : `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:scale-110 transform transition-all duration-200`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? `font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} border-b-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'} pb-1 transform transition-all duration-200`
                : `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:scale-110 transform transition-all duration-200`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} border-b-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'} pb-1 transform transition-all duration-200`
                : `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:scale-110 transform transition-all duration-200`
            }
          >
            Contact
          </NavLink>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Section with Theme Toggle and Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className={`mr-3 p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} focus:outline-none p-2 rounded-md hover:${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition`}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/90'} backdrop-blur-md`}>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `block px-6 py-4 ${isActive 
                ? (isDarkMode ? 'text-blue-400 bg-gray-800/50' : 'text-blue-600 bg-blue-50') 
                : (isDarkMode ? 'text-gray-300 hover:bg-gray-800/50' : 'text-gray-700 hover:bg-gray-50')} 
                hover:scale-105 transform transition-all duration-200`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `block px-6 py-4 ${isActive 
                ? (isDarkMode ? 'text-blue-400 bg-gray-800/50' : 'text-blue-600 bg-blue-50') 
                : (isDarkMode ? 'text-gray-300 hover:bg-gray-800/50' : 'text-gray-700 hover:bg-gray-50')} 
                hover:scale-105 transform transition-all duration-200`
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `block px-6 py-4 ${isActive 
                ? (isDarkMode ? 'text-blue-400 bg-gray-800/50' : 'text-blue-600 bg-blue-50') 
                : (isDarkMode ? 'text-gray-300 hover:bg-gray-800/50' : 'text-gray-700 hover:bg-gray-50')} 
                hover:scale-105 transform transition-all duration-200`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
