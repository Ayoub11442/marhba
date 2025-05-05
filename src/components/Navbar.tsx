import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, MessageCircle } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useOrder } from '../contexts/OrderContext';

// Navigation links configuration
const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About", offset: -100 },
  { to: "features", label: "Why Us", offset: -100 },
  { to: "menu", label: "Menu", offset: -100 },
  { to: "gallery", label: "Gallery", offset: -100 },
  { to: "location", label: "Location", offset: -100 }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toggleOrderPanel, totalItems } = useOrder();
  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  // Dynamic classes based on scroll state
  const textColor = isScrolled ? 'text-cafe-brown' : 'text-white';
  const navClasses = `${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4'} 
                      fixed w-full z-40 transition-all duration-500`;

  // Link style classes
  const linkBaseClasses = `${textColor} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer 
                         after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 
                         hover:after:w-full after:bg-cafe-terracotta after:transition-all`;

  // Render scroll or router links based on homepage status
  const renderNavLinks = () => {
    if (isHomePage) {
      return NAV_LINKS.map(link => (
        <ScrollLink
          key={link.to}
          to={link.to}
          smooth={true}
          duration={800}
          offset={link.offset || 0}
          className={linkBaseClasses}
          onClick={handleNavClick}
        >
          {link.label}
        </ScrollLink>
      ));
    }
    return (
      <RouterLink
        to="/"
        className={linkBaseClasses}
        onClick={handleNavClick}
      >
        Home
      </RouterLink>
    );
  };

  // Render mobile scroll or router links
  const renderMobileLinks = () => {
    if (isHomePage) {
      return NAV_LINKS.map(link => (
        <ScrollLink
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          duration={800}
          offset={link.offset || 0}
          className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer"
          onClick={handleNavClick}
        >
          {link.label}
        </ScrollLink>
      ));
    }
    return (
      <RouterLink
        to="/"
        className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors"
        onClick={handleNavClick}
      >
        Home
      </RouterLink>
    );
  };

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cafe-terracotta flex items-center justify-center">
              <span className="font-playfair font-bold text-lg text-white">M</span>
            </div>
            <span className={`font-playfair text-xl sm:text-2xl font-bold ${textColor} transition-colors duration-300`}>
              Marhaba
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 flex items-center space-x-4 xl:space-x-6">
              {renderNavLinks()}

              <RouterLink
                to="/menu"
                className={`${textColor} hover:text-cafe-terracotta font-medium transition-colors relative 
                          after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 
                          ${location.pathname === '/menu' ? 'text-cafe-terracotta after:w-full' : 'after:w-0 hover:after:w-full'} 
                          after:bg-cafe-terracotta after:transition-all`}
              >
                Full Menu
              </RouterLink>

              {/* Order Button */}
              <button
                onClick={toggleOrderPanel}
                className="relative px-3 py-1.5 bg-cafe-terracotta text-white font-medium rounded-full hover:bg-cafe-brown transition-all duration-300 flex items-center"
                aria-label="Your Order"
              >
                <ShoppingBag size={16} className="mr-1.5" />
                <span className="hidden sm:inline">Your Order</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition-all duration-300 flex items-center text-sm"
              >
                <MessageCircle size={16} className="mr-1.5" />
                Order Now
              </a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleOrderPanel}
              className="relative p-2"
              aria-label="View order"
            >
              <ShoppingBag size={20} className={textColor} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-cafe-terracotta text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
              aria-label="Order via WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-cafe-brown hover:text-cafe-terracotta' : 'text-white hover:text-white/80'} transition-colors`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-cafe-beige/30 shadow-xl animate-scale-in" id="mobile-menu">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {renderMobileLinks()}

            <RouterLink
              to="/menu"
              className={`block px-4 py-2 hover:bg-cafe-beige rounded-md font-medium transition-colors ${location.pathname === '/menu' ? 'text-cafe-terracotta bg-cafe-beige/50' : 'text-cafe-brown'}`}
              onClick={handleNavClick}
            >
              Full Menu
            </RouterLink>

            <div className="pt-2 mt-2 border-t border-cafe-beige/30">
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-green-600 text-white rounded-md text-center font-medium transition-colors flex items-center justify-center gap-2"
                onClick={handleNavClick}
              >
                <MessageCircle size={16} /> Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
