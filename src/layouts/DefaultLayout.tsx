import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { scrollToHashSection } from '@/utils';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const location = useLocation();

  // Effect to handle navigation and scrolling
  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      scrollToHashSection();
    } else {
      // Otherwise, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]); // Re-run when pathname or hash changes

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;