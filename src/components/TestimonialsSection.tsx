
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  // Use the custom hook for scroll animations
  useScrollAnimation();
  
  const testimonials = [
    {
      text: "The Moroccan tagine was absolutely divine! The flavors transported me straight to Marrakech. The staff was friendly and attentive. Will definitely be coming back!",
      name: "Sarah Johnson",
      role: "Food Blogger",
      rating: 5
    },
    {
      text: "Marhaba Café has become our favorite weekend spot. The mint tea service is exceptional and the atmosphere is so authentic. It feels like a little piece of Morocco in our city.",
      name: "Michael Rodriguez",
      role: "Regular Customer",
      rating: 5
    },
    {
      text: "I hosted a business lunch here and everyone was impressed. The couscous royal was a hit! Clean, welcoming environment and excellent service. Highly recommended!",
      name: "Amina Khalid",
      role: "Business Executive",
      rating: 4
    }
  ];
  
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="section-title mx-auto w-max">What Our Guests Say</h2>
          <p className="section-subtitle mx-auto">
            Read what our satisfied customers have to say about their experience at Marhaba Café
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-card animate-on-scroll" 
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              
              <div className="mt-auto">
                <p className="font-semibold text-cafe-brown">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
