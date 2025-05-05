import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, MessageCircle, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useOrder } from '../contexts/OrderContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toggleOrderPanel, totalItems } = useOrder();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHomePage = location.pathname === '/';

  // Close mobile menu when clicking a nav item
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Shared classes for nav links
  const navLinkClasses = `${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`;
  
  // Mobile nav link classes
  const mobileNavLinkClasses = "block px-4 py-3 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer";

  return (
    <nav 
      className={`${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      } fixed w-full z-40 transition-all duration-500`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cafe-terracotta flex items-center justify-center">
                <span className="font-playfair font-bold text-lg sm:text-xl text-white">M</span>
              </div>
              <span className={`font-playfair text-xl sm:text-2xl md:text-3xl font-bold ${isScrolled ? 'text-cafe-brown' : 'text-white'} transition-colors duration-300`}>
                Marhaba
              </span>
            </RouterLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4 xl:space-x-6">
              {isHomePage ? (
                <>
                  <ScrollLink to="home" smooth={true} duration={800} className={navLinkClasses}>
                    Home
                  </ScrollLink>
                  <ScrollLink to="about" smooth={true} duration={800} offset={-100} className={navLinkClasses}>
                    About
                  </ScrollLink>
                  <ScrollLink to="features" smooth={true} duration={800} offset={-100} className={navLinkClasses}>
                    Why Us
                  </ScrollLink>
                  <ScrollLink to="menu" smooth={true} duration={800} offset={-100} className={navLinkClasses}>
                    Menu
                  </ScrollLink>
                  <ScrollLink to="gallery" smooth={true} duration={800} offset={-100} className={navLinkClasses}>
                    Gallery
                  </ScrollLink>
                  <ScrollLink to="location" smooth={true} duration={800} offset={-100} className={navLinkClasses}>
                    Location
                  </ScrollLink>
                </>
              ) : (
                <RouterLink to="/" className={navLinkClasses}>
                  Home
                </RouterLink>
              )}
              <RouterLink 
                to="/menu" 
                className={`${navLinkClasses} ${location.pathname === '/menu' ? 'text-cafe-terracotta after:w-full' : ''}`}
              >
                Full Menu
              </RouterLink>
              
              <button 
                onClick={toggleOrderPanel}
                className="relative px-3 py-1.5 bg-cafe-terracotta text-white font-medium rounded-full hover:bg-cafe-brown transition-all duration-300 flex items-center"
                aria-label="Your Order"
              >
                <ShoppingBag size={18} className="mr-1.5" />
                Your Order
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <a 
                href="https://wa.me/123456789" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-md transform hover:scale-[1.03] flex items-center text-sm"
              >
                <MessageCircle size={16} className="mr-1.5" /> Order Now
              </a>
            </div>
          </div>
          
          {/* Tablet Navigation (medium screens) */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <button
              onClick={toggleOrderPanel}
              className="relative p-2 flex items-center gap-1.5 bg-cafe-terracotta text-white rounded-full px-3 py-1.5 hover:bg-cafe-brown transition-all duration-300"
              aria-label="Your Order"
            >
              <ShoppingBag size={18} />
              <span className="text-sm">Order</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-1 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            
            <a 
              href="https://wa.me/123456789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition-all duration-300 flex items-center text-sm"
            >
              <MessageCircle size={16} className="mr-1" /> WhatsApp
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-cafe-brown hover:text-cafe-terracotta hover:bg-cafe-beige/30' : 'text-white hover:text-white/80 hover:bg-white/10'} transition-colors`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleOrderPanel}
              className="relative p-2 text-cafe-brown"
              aria-label="View order"
            >
              <ShoppingBag size={22} className={isScrolled ? 'text-cafe-brown' : 'text-white'} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-cafe-terracotta text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-cafe-brown hover:text-cafe-terracotta hover:bg-cafe-beige/30' : 'text-white hover:text-white/80 hover:bg-white/10'} transition-colors`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with overlay */}
      {isOpen && (
        <>
          {/* Dark overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={handleNavClick}
            aria-hidden="true"
          />
          
          {/* Menu content */}
          <div 
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-xl z-50 md:hidden transform transition-all duration-300 ease-in-out overflow-y-auto"
            id="mobile-menu"
          >
            <div className="flex justify-between items-center p-4 border-b border-cafe-beige/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cafe-terracotta flex items-center justify-center">
                  <span className="font-playfair font-bold text-lg text-white">M</span>
                </div>
                <span className="font-playfair text-xl font-bold text-cafe-brown">Marhaba</span>
              </div>
              <button 
                onClick={handleNavClick}
                className="p-2 text-cafe-brown hover:text-cafe-terracotta"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="py-2 space-y-1">
              {isHomePage ? (
                <>
                  <ScrollLink to="home" spy={true} smooth={true} duration={800} className={mobileNavLinkClasses} onClick={handleNavClick}>Home</ScrollLink>
                  <ScrollLink to="about" spy={true} smooth={true} duration={800} offset={-100} className={mobileNavLinkClasses} onClick={handleNavClick}>About</ScrollLink>
                  <ScrollLink to="features" spy={true} smooth={true} duration={800} offset={-100} className={mobileNavLinkClasses} onClick={handleNavClick}>Why Us</ScrollLink>
                  <ScrollLink to="menu" spy={true} smooth={true} duration={800} offset={-100} className={mobileNavLinkClasses} onClick={handleNavClick}>Menu</ScrollLink>
                  <ScrollLink to="gallery" spy={true} smooth={true} duration={800} offset={-100} className={mobileNavLinkClasses} onClick={handleNavClick}>Gallery</ScrollLink>
                  <ScrollLink to="location" spy={true} smooth={true} duration={800} offset={-100} className={mobileNavLinkClasses} onClick={handleNavClick}>Location</ScrollLink>
                </>
              ) : (
                <RouterLink to="/" className={mobileNavLinkClasses} onClick={handleNavClick}>Home</RouterLink>
              )}
              <RouterLink 
                to="/menu" 
                className={`${mobileNavLinkClasses} ${location.pathname === '/menu' ? 'text-cafe-terracotta bg-cafe-beige/50' : 'text-cafe-brown'}`}
                onClick={handleNavClick}
              >
                Full Menu
              </RouterLink>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cafe-beige/30 bg-white">
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    toggleOrderPanel();
                    handleNavClick();
                  }}
                  className="w-full py-2.5 bg-cafe-terracotta text-white rounded-md text-center font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} /> View Your Order
                  {totalItems > 0 && (
                    <span className="ml-1 bg-white text-cafe-terracotta text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </button>
                <a 
                  href="https://wa.me/123456789" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-2.5 bg-green-600 text-white rounded-md text-center font-medium transition-colors flex items-center justify-center gap-2"
                  onClick={handleNavClick}
                >
                  <MessageCircle size={18} /> Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
