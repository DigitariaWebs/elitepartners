import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const isHomePage = location.pathname === '/';
  const isServicesPage = location.pathname === '/services';
  const isSectorsPage = location.pathname === '/secteurs';
  const isGradientPage = isServicesPage || isSectorsPage;

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.sectors'), path: '/secteurs' },
    { name: t('nav.about'), path: '/#about' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

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

  // Determine background styles based on page and scroll state
  const getNavbarBackground = () => {
    if (isServicesPage || isSectorsPage) {
      if (!isScrolled) {
        // Transparent, flou, texte blanc tant qu'on est sur le hero
        return 'backdrop-blur-lg bg-transparent text-white';
      } else {
        // Dès qu'on scroll, fond blanc, texte foncé, ombre
        return 'backdrop-blur-lg bg-white/90 text-gray-900 shadow-lg border-b border-gray-200';
      }
    } else if (isGradientPage) {
      return isScrolled 
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
        : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white';
    } else if (isHomePage) {
      return isScrolled 
        ? 'bg-white/90 backdrop-blur-md' 
        : 'bg-transparent';
    } else {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-md' 
        : 'bg-white';
    }
  };

  // Get text and hover colors based on page
  const getItemStyles = (isItemActive: boolean) => {
    if (isServicesPage || isSectorsPage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/20 text-white font-bold'
          : 'text-white/90 hover:bg-white/10 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-gray-100 text-blue-700 font-bold'
          : 'text-gray-900 hover:bg-gray-100 hover:text-blue-700';
      }
    } else if (isGradientPage) {
      return isItemActive
        ? 'bg-white/20 text-white font-bold'
        : 'text-white/90 hover:bg-white/10 hover:text-white';
    } else if (isHomePage && !isScrolled) {
      return isItemActive
        ? 'bg-white/20 text-white'
        : 'text-white/90 hover:bg-white/10 hover:text-white';
    } else {
      return isItemActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-700 hover:bg-blue-50/50 hover:text-blue-600';
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ 
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        getNavbarBackground()
      } ${
        isScrolled 
          ? 'shadow-lg border-b border-white/10' 
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
                } ${(isGradientPage || ((isServicesPage || isSectorsPage) && !isScrolled)) ? 'brightness-0 invert' : ''}`}
              />
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat ${
                    getItemStyles(isActive(item.path))
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center space-x-1 ${
                  isServicesPage || isSectorsPage
                    ? !isScrolled
                      ? 'text-white/90 hover:bg-white/10 hover:text-white'
                      : 'text-gray-900 hover:bg-gray-100 hover:text-blue-700'
                    : isGradientPage
                      ? 'text-white/90 hover:bg-white/10 hover:text-white'
                      : isHomePage && !isScrolled
                        ? 'text-white/90 hover:bg-white/10 hover:text-white'
                        : 'text-gray-700 hover:bg-blue-50/50 hover:text-blue-600'
                }`}
              >
                <Globe size={16} />
                <span>{language === 'fr' ? 'EN' : 'FR'}</span>
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isGradientPage
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : isScrolled
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
            isGradientPage
              ? 'bg-gradient-to-r from-indigo-600/95 to-purple-600/95 backdrop-blur-lg border-white/10'
              : isScrolled
                ? 'bg-white/95 backdrop-blur-lg border-gray-100'
                : isHomePage
                  ? 'bg-white/10 backdrop-blur-md border-white/20'
                  : 'bg-white border-gray-100'
          }`}>
            {navigationItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat ${
                  getItemStyles(isActive(item.path))
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center space-x-2 ${
                isServicesPage || isSectorsPage
                  ? !isScrolled
                    ? 'text-white/90 hover:bg-white/10 hover:text-white'
                    : 'text-gray-900 hover:bg-gray-100 hover:text-blue-700'
                  : isGradientPage
                    ? 'text-white/90 hover:bg-white/10 hover:text-white'
                    : isHomePage && !isScrolled
                      ? 'text-white/90 hover:bg-white/10 hover:text-white'
                      : 'text-gray-700 hover:bg-blue-50/50 hover:text-blue-600'
              }`}
            >
              <Globe size={16} />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </motion.button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;