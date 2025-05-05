
import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { useOrder } from '../contexts/OrderContext';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toggleOrderPanel } = useOrder();
  
  useEffect(() => {
    // Add a small delay for entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://www.stokedtotravel.com/wp-content/uploads/2018/02/DSC_0148-1-1440x960.jpg"
          alt="Moroccan Cuisine" 
          className="w-full h-full object-cover scale-110 filter brightness-90"
        />
        {/* Enhanced Gradient with more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Circle with enhanced style */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cafe-terracotta/70">
            <span className="font-playfair font-bold text-5xl text-white drop-shadow-xl">M</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-playfair drop-shadow-xl tracking-tight">
            <span className="text-gradient-gold">Marhaba</span> <span className="text-white">Café</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 font-inter tracking-wide max-w-2xl mx-auto">
            <span className="block mb-2">Authentic Moroccan Cuisine</span>
            <span className="text-lg md:text-xl text-cafe-terracotta italic font-medium">Fresh. Local. Delicious.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://wa.me/123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-medium group"
              aria-label="Order via WhatsApp"
            >
              <MessageCircle className="mr-3 group-hover:animate-bounce-small" size={24} />
              <span>Order via WhatsApp</span>
            </a>
            
            <button 
              onClick={toggleOrderPanel}
              className="inline-flex items-center bg-cafe-terracotta text-white px-8 py-4 rounded-full hover:bg-cafe-brown transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-medium"
              aria-label="View Menu"
            >
              <span>View Our Menu</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cafe-terracotta/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cafe-brown/10 rounded-full blur-3xl z-0"></div>
      
   
    </section>
  );
};

export default HeroSection;
