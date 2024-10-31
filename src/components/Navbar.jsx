import { useState, useRef, useEffect } from 'react';
import bercLogo from '../assets/logo/berc-logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toolsMenuRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsToolsOpen(false); // Close the tools menu if open
      setIsMobileMenuOpen(false); // Close the mobile menu if open
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent body scrolling when dropdown or mobile menu is open
  useEffect(() => {
    if (isToolsOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isToolsOpen, isMobileMenuOpen]);

  // Close the tools dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toolsMenuRef.current &&
        !toolsMenuRef.current.contains(event.target) &&
        !event.target.closest('.tools-button')
      ) {
        setIsToolsOpen(false);
      }
    };

    if (isToolsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToolsOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 py-2">
        <img src={bercLogo} alt="BERC Logo" className="h-10 w-auto" />
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {['Home', 'About Us', 'Services'].map((link) => (
            <button
              key={link}
              className="text-gray-700 hover:text-blue-500 font-bold"
              onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
            >
              {link}
            </button>
          ))}
          <button
            className="text-gray-700 hover:text-blue-500 font-bold tools-button flex items-center"
            onClick={() => setIsToolsOpen(!isToolsOpen)}
          >
            Tools
            <FontAwesomeIcon
              icon={isToolsOpen ? faChevronUp : faChevronDown}
              className="ml-1"
            />
          </button>
          {['Our Impact', 'News Events', 'Team', 'Gallery'].map((link) => (
            <button
              key={link}
              className="text-gray-700 hover:text-blue-500 font-bold"
              onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
            >
              {link}
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col space-y-2 p-4">
            {['Home', 'About Us', 'Services', 'Tools', 'Our Impact', 'News Events', 'Team', 'Gallery'].map((link) => (
              <li key={link}>
                <button
                  className="text-gray-700 hover:text-blue-500 w-full text-left font-bold"
                  onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools Dropdown Menu */}
      {isToolsOpen && (
        <div
          ref={toolsMenuRef}
          className="fixed top-16 left-0 w-full h-auto bg-white z-60 flex"
        >
          {/* Left Div */}
          <div className="border-r border-gray-300 p-8" style={{ width: '30%' }}>
            <ul>
              {['Life Cycle Assessment (LCA)', 'Building Performance Database (BPD)', 'Residential Load Factor (RLF)'].map((item) => (
                <li
                  key={item}
                  className="mb-4 text-xl cursor-pointer hover:text-blue-500"
                  onMouseEnter={() => setHoveredItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Right Div */}
          <div className="p-8" style={{ width: '70%' }}>
            {/* Carousel or Images based on hoveredItem */}
            <div className="h-full flex items-center justify-center">
              {hoveredItem ? (
                <p className="text-2xl">{`Images for ${hoveredItem}`}</p>
                // Implement your carousel here
              ) : (
                <p className="text-2xl">Hover over a tool to see images</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
