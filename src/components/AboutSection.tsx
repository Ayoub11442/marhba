
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  // Use the custom hook for scroll animations
  useScrollAnimation();
  
  return (
    <section id="about" className="cafe-pattern py-20 sm:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-on-scroll">
            <h2 className="section-title">Notre Histoire</h2>
            <p className="text-lg mb-6 text-cafe-brown leading-relaxed">
              Bienvenue à Marhaba Café, votre destination culinaire marocaine au cœur de la ville. 
              Depuis 2010, nous servons des plats authentiques préparés avec des ingrédients locaux et des épices importées directement du Maroc.
            </p>
            <div className="bg-cafe-brown/5 border-l-4 border-cafe-terracotta p-6 mb-6 rounded-r-lg relative overflow-hidden">
              <div className="absolute -top-6 -left-2 text-5xl text-cafe-terracotta/20 font-bold">"</div>
              <p className="text-lg text-cafe-brown italic relative z-10">
                كل طبق نقدمه يروي قصة تقاليدنا وثقافتنا. نحن فخورون بتقديم تجربة طعام أصيلة تنقلك إلى شوارع مراكش ومقاهي فاس.
              </p>
              <div className="absolute -bottom-6 -right-2 text-5xl text-cafe-terracotta/20 font-bold">"</div>
            </div>
            <p className="text-lg text-cafe-brown leading-relaxed">
              Notre mission est simple : vous offrir un voyage culinaire inoubliable dans une ambiance chaleureuse et accueillante, 
              comme on le fait depuis des générations dans les familles marocaines.
            </p>
          </div>
          
          <div className="order-1 md:order-2 animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-xl p-2 bg-white transform md:translate-y-4 hover:scale-[1.03] transition-all duration-700 relative after:absolute after:inset-0 after:bg-gradient-to-tr after:from-cafe-terracotta/20 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700">
              <img 
                src="https://epicureandculture.com/wp-content/uploads/2021/04/Moroccan-Breakfast-Dishes.jpg"
                alt="Moroccan Traditional Setting" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
