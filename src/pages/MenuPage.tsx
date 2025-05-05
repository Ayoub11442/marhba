
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuFullDisplay from '../components/MenuFullDisplay';
import OrderPanel from '../components/OrderPanel';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MenuPage = () => {
  // Use scroll animation
  useScrollAnimation();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cafe-offWhite">
      <Navbar />
      <div className="pt-16 sm:pt-20"> {/* Add padding top to account for fixed navbar */}
        <MenuFullDisplay />
      </div>
      <Footer />
      <OrderPanel />
    </div>
  );
};

export default MenuPage;
