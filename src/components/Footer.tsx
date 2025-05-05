
import React from 'react';
import { Facebook, Instagram, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-brown text-white py-16 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair border-b border-white/20 pb-3">Marhaba Café</h3>
            <p className="text-white/80 mb-6 leading-relaxed">Authentic Moroccan cuisine made with love. Experience the taste of Morocco in every bite.</p>
            <Link 
              to="/menu" 
              className="text-cafe-beige hover:text-white transition-colors inline-flex items-center group"
            >
              View Our Menu <span className="ml-1 group-hover:ml-2 transition-all">→</span>
            </Link>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 group-hover:text-cafe-beige transition-colors" />
                <p className="text-white/80">123 Medina Street, Marrakech District, Morocco</p>
              </div>
              <div className="flex items-center group">
                <Phone size={18} className="mr-3 flex-shrink-0 group-hover:text-cafe-beige transition-colors" />
                <a href="tel:+21255555555" className="hover:text-cafe-beige transition-colors">+212 5XX-XXXXXX</a>
              </div>
              <div className="flex items-center group">
                <Mail size={18} className="mr-3 flex-shrink-0 group-hover:text-cafe-beige transition-colors" />
                <a href="mailto:info@marhabacafe.com" className="hover:text-cafe-beige transition-colors">info@marhabacafe.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">Opening Hours</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between"><span className="font-medium">Monday - Thursday:</span> <span>9:00 - 22:00</span></li>
              <li className="flex justify-between"><span className="font-medium">Friday - Saturday:</span> <span>9:00 - 23:00</span></li>
              <li className="flex justify-between"><span className="font-medium">Sunday:</span> <span>10:00 - 21:00</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">Follow Us</h4>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-cafe-beige transition-colors hover:scale-110 transform" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-cafe-beige transition-colors hover:scale-110 transform" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/123456789" className="hover:text-cafe-beige transition-colors hover:scale-110 transform" aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
            <div className="mt-8">
              <a 
                href="https://wa.me/123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] group"
              >
                <MessageCircle className="mr-2 group-hover:animate-bounce-small" size={18} />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">&copy; 2025 Marhaba Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
