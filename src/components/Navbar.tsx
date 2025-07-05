import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_ITEMS } from '@/constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      if (isHomePage) {
        // Si on est sur la page d'accueil, on défile vers la section
        scrollToSection(sectionId);
      } else {
        // Si on n'est pas sur la page d'accueil, on navigue vers la page d'accueil puis on défile
        navigate('/', { state: { scrollTo: sectionId } });
      }
    } else {
      // Pour les autres liens (comme /services), on utilise simplement la navigation
      navigate(path);
    }
  };

  useEffect(() => {
    // Gestion du défilement après la navigation
    if (isHomePage) {
      const state = location.state as { scrollTo?: string };
      const scrollTarget = state?.scrollTo || sessionStorage.getItem('scrollTarget');
      
      if (scrollTarget) {
        setTimeout(() => {
          scrollToSection(scrollTarget);
          sessionStorage.removeItem('scrollTarget');
          // Nettoyer l'état de navigation
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [isHomePage, location.state]);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      if (!isHomePage) return false;
      const sectionId = path.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    }
    return location.pathname === path;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ 
        y: visible ? 0 : -100,
        backgroundColor: isScrolled 
          ? isHomePage 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'rgba(255, 255, 255, 0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'shadow-lg border-b border-gray-100/20' 
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img 
                src={CONTACT_INFO.logo}
                alt="Elite Partners Logo"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-12'
                }`}
              />
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path)
                      ? isScrolled
                        ? 'bg-blue-50 text-blue-600'
                        : isHomePage
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-50 text-blue-600'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                        : isHomePage
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : isHomePage
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
        >
            <div className={`px-4 py-3 space-y-2 border-t transition-all duration-300 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-lg border-gray-100'
                : isHomePage
                  ? 'bg-white/10 backdrop-blur-md border-white/20'
                  : 'bg-white border-gray-100'
          }`}>
            {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActive(item.path)
                      ? isScrolled
                        ? 'bg-blue-50 text-blue-600'
                        : isHomePage
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-50 text-blue-600'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                        : isHomePage
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
                </motion.button>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;