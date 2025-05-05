
import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, MessageCircle } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useOrder } from '../contexts/OrderContext';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toggleOrderPanel, totalItems } = useOrder();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  // Close mobile menu when clicking a nav item
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      } fixed w-full z-40 transition-all duration-500`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-cafe-terracotta flex items-center justify-center">
                <span className="font-playfair font-bold text-xl text-white">M</span>
              </div>
              <span className={`font-playfair text-2xl md:text-3xl font-bold ${isScrolled ? 'text-cafe-brown' : 'text-white'} transition-colors duration-300`}>
                Marhaba
              </span>
            </RouterLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {isHomePage ? (
                <>
                  <ScrollLink 
                    to="home" 
                    smooth={true} 
                    duration={800}
                    className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink 
                    to="about" 
                    smooth={true} 
                    duration={800}
                    offset={-100}
                    className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                  >
                    About
                  </ScrollLink>
                  <ScrollLink 
                    to="features" 
                    smooth={true} 
                    duration={800}
                    offset={-100}
                    className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                  >
                    Why Us
                  </ScrollLink>
                  <ScrollLink 
                    to="menu" 
                    smooth={true} 
                    duration={800}
                    offset={-100}
                    className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                  >
                    Menu
                  </ScrollLink>
                  <ScrollLink 
                    to="gallery" 
                    smooth={true} 
                    duration={800}
                    offset={-100}
                    className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                  >
                    Gallery
                  </ScrollLink>
                  <ScrollLink 
                    to="location" 
                    smooth={true} 
                    duration={800}
                    offset={-100}
                    className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                  >
                    Location
                  </ScrollLink>
                </>
              ) : (
                <RouterLink 
                  to="/" 
                  className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-0 hover:after:w-full after:bg-cafe-terracotta after:transition-all`}
                >
                  Home
                </RouterLink>
              )}
              <RouterLink 
                to="/menu" 
                className={`${isScrolled ? 'text-cafe-brown' : 'text-white'} hover:text-cafe-terracotta font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 ${location.pathname === '/menu' ? 'text-cafe-terracotta after:w-full' : 'after:w-0 hover:after:w-full'} after:bg-cafe-terracotta after:transition-all`}
              >
                Full Menu
              </RouterLink>
              
              <button 
                onClick={toggleOrderPanel}
                className="relative px-4 py-1.5 bg-cafe-terracotta text-white font-medium rounded-full hover:bg-cafe-brown transition-all duration-300 flex items-center"
                aria-label="Your Order"
              >
                <ShoppingBag size={18} className="mr-2" />
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
                className="bg-green-600 text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-md transform hover:scale-[1.03] flex items-center"
              >
                <MessageCircle size={16} className="mr-2" /> Order Now
              </a>
            </div>
          </div>
          
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
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-cafe-beige/30 shadow-xl animate-scale-in" id="mobile-menu">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {isHomePage ? (
              <>
                <ScrollLink to="home" spy={true} smooth={true} duration={800} className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer" onClick={handleNavClick}>Home</ScrollLink>
                <ScrollLink to="about" spy={true} smooth={true} duration={800} offset={-100} className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer" onClick={handleNavClick}>About</ScrollLink>
                <ScrollLink to="features" spy={true} smooth={true} duration={800} offset={-100} className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer" onClick={handleNavClick}>Why Us</ScrollLink>
                <ScrollLink to="menu" spy={true} smooth={true} duration={800} offset={-100} className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer" onClick={handleNavClick}>Menu</ScrollLink>
                <ScrollLink to="gallery" spy={true} smooth={true} duration={800} offset={-100} className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer" onClick={handleNavClick}>Gallery</ScrollLink>
                <ScrollLink to="location" spy={true} smooth={true} duration={800} offset={-100} className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors cursor-pointer" onClick={handleNavClick}>Location</ScrollLink>
              </>
            ) : (
              <RouterLink to="/" className="block px-4 py-2 text-cafe-brown hover:bg-cafe-beige rounded-md font-medium transition-colors" onClick={handleNavClick}>Home</RouterLink>
            )}
            <RouterLink 
              to="/menu" 
              className={`block px-4 py-2 hover:bg-cafe-beige rounded-md font-medium transition-colors ${location.pathname === '/menu' ? 'text-cafe-terracotta bg-cafe-beige/50' : 'text-cafe-brown'}`}
              onClick={handleNavClick}
            >
              Full Menu
            </RouterLink>
            <div className="pt-2 mt-2 border-t border-cafe-beige/30 space-y-2">
              <a 
                href="https://wa.me/123456789" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block px-4 py-2.5 bg-green-600 text-white rounded-md text-center font-medium transition-colors flex items-center justify-center gap-2"
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
