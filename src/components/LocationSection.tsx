
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LocationSection: React.FC = () => {
  // Use the custom hook for scroll animations
  useScrollAnimation();
  
  return (
    <section id="location" className="py-20 sm:py-28 bg-cafe-beige">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="section-title mx-auto w-max">Visit Us</h2>
          <p className="section-subtitle mx-auto">Come experience the warmth and flavors of Morocco</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[450px] animate-on-scroll">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.646232429057!2d-7.992452324890854!3d31.631086574391126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d069b3383%3A0xf5cd61b1fc7bb58a!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1651283670924!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Marhaba Café Location"
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Info */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-cafe-brown font-playfair border-b border-cafe-beige/60 pb-4">
              Find Us
            </h3>
            
            <div className="mb-10 space-y-6">
              <div className="flex items-start group">
                <div className="p-3 rounded-full bg-cafe-terracotta/10 text-cafe-terracotta mr-4 flex-shrink-0 mt-1 group-hover:bg-cafe-terracotta group-hover:text-white transition-colors duration-300">
                  <MapPin className="group-hover:animate-bounce-small" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-brown text-lg mb-1">Address</h4>
                  <p className="text-gray-600">123 Medina Street, Marrakech District<br />Morocco, 40000</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 inline-block text-cafe-terracotta hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 rounded-full bg-cafe-terracotta/10 text-cafe-terracotta mr-4 flex-shrink-0 mt-1 group-hover:bg-cafe-terracotta group-hover:text-white transition-colors duration-300">
                  <Clock className="group-hover:animate-bounce-small" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-brown text-lg mb-1">Opening Hours</h4>
                  <ul className="text-gray-600 space-y-1.5">
                    <li className="flex justify-between"><span className="font-medium">Monday - Thursday:</span> <span>9:00 AM - 10:00 PM</span></li>
                    <li className="flex justify-between"><span className="font-medium">Friday - Saturday:</span> <span>9:00 AM - 11:00 PM</span></li>
                    <li className="flex justify-between"><span className="font-medium">Sunday:</span> <span>10:00 AM - 9:00 PM</span></li>
                  </ul>
                </div>
              </div>
            </div>
              
            <div className="space-y-6 border-t border-cafe-beige/60 pt-6">
              <div className="flex items-start group">
                <div className="p-3 rounded-full bg-cafe-terracotta/10 text-cafe-terracotta mr-4 flex-shrink-0 mt-1 group-hover:bg-cafe-terracotta group-hover:text-white transition-colors duration-300">
                  <Phone className="group-hover:animate-bounce-small" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-brown text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">+212 5XX-XXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 rounded-full bg-cafe-terracotta/10 text-cafe-terracotta mr-4 flex-shrink-0 mt-1 group-hover:bg-cafe-terracotta group-hover:text-white transition-colors duration-300">
                  <Mail className="group-hover:animate-bounce-small" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-brown text-lg mb-1">Email</h4>
                  <p className="text-gray-600">info@marhabacafe.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
