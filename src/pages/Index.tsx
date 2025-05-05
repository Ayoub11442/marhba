
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import MenuSection from '../components/MenuSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import OrderPanel from '../components/OrderPanel';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuSection />
      <TestimonialsSection />
      <GallerySection />
      <LocationSection />
      <Footer />
      <OrderPanel />
    </div>
  );
};

export default Index;
