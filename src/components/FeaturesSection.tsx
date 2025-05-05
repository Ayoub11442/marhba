
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Users, Clock, Heart } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  // Use the custom hook for scroll animations
  useScrollAnimation();
  
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Authentic Recipes",
      description: "Our dishes are prepared using traditional family recipes passed down through generations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Welcoming Atmosphere",
      description: "Experience the warmth and hospitality of Morocco in our cozy, beautifully decorated café."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "We source only the freshest local ingredients and import authentic spices directly from Morocco."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made With Love",
      description: "Every dish is crafted with care, attention to detail, and passion for our cultural heritage."
    }
  ];
  
  return (
    <section id="features" className="terracotta-pattern py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="section-title mx-auto w-max">Why Choose Us</h2>
          <p className="section-subtitle mx-auto">
            Discover what makes our café special and why our customers keep coming back
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              className="feature-card animate-on-scroll" 
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-circle">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cafe-brown">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
