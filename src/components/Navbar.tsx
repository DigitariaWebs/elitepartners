import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Briefcase, Users, BookOpen } from 'lucide-react';
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

  // Ajout d'un état pour le survol du menu Services (desktop)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  // Sous-menus pour Services
  // Couleurs et icônes pour chaque colonne
  const servicesSubmenus = [
    {
      title: t('services.section.conseil.title'),
      color: 'text-blue-700',
      border: 'border-blue-700',
      icon: <Briefcase className="inline-block mr-2 text-blue-700" size={20} />,
      items: [
        { label: 'Conseil fiscal et conformité réglementaire', path: '/services/conseil/fiscal' },
        { label: 'Conseil en Gestion des Ressources humaines', path: '/services/conseil/rh' },
        { label: 'Conseil en Stratégie et Transformation d’Entreprise', path: '/services/conseil/strategie' },
      ],
    },
    {
      title: t('services.section.representation.title'),
      color: 'text-purple-700',
      border: 'border-purple-700',
      icon: <Users className="inline-block mr-2 text-purple-700" size={20} />,
      items: [
        { label: 'Accompagnement administratif et légal', path: '/services/representation#admin' },
        { label: 'Représentation locale', path: '/services/representation#locale' },
        { label: 'Stratégies de pénétration de marché', path: '/services/representation#marche' },
      ],
    },
    {
      title: t('services.section.etudes.title'),
      color: 'text-cyan-800',
      border: 'border-cyan-800',
      icon: <BookOpen className="inline-block mr-2 text-cyan-800" size={20} />,
      items: [
        { label: 'Études de marché', path: '/services/etudes#marche' },
        { label: 'Études économiques', path: '/services/etudes#eco' },
        { label: 'Évaluations stratégiques', path: '/services/etudes#eval' },
      ],
    },
  ];

  // Ajout d'un état pour le survol du menu Secteur (desktop)
  const [sectorsMenuOpen, setSectorsMenuOpen] = useState(false);

  const sectorsSubmenus = [
    {
      title: 'Agricole',
      color: 'text-green-700',
      border: 'border-green-700',
      items: [
        { label: 'Agroalimentaire', path: '/secteurs/agricole/agroalimentaire' },
        { label: 'Agriculture vivrière', path: '/secteurs/agricole/vivriere' },
        { label: 'Pêche et aquaculture', path: '/secteurs/agricole/peche' },
        { label: 'Agriculture industrielle', path: '/secteurs/agricole/industrielle' },
      ],
    },
    {
      title: 'Minier',
      color: 'text-yellow-700',
      border: 'border-yellow-700',
      items: [
        { label: 'Assurance minière', path: '/secteurs/minier/assurance' },
        { label: 'Fiscalité et redevances minières', path: '/secteurs/minier/fiscalite' },
        { label: 'Banques d’investissement spécialisées', path: '/secteurs/minier/banques' },
        { label: 'Audit et gestion financière minière', path: '/secteurs/minier/audit' },
      ],
    },
    {
      title: 'Financier',
      color: 'text-blue-900',
      border: 'border-blue-900',
      items: [
        { label: 'Assurance', path: '/secteurs/financier/assurance' },
        { label: 'Gestion d’actifs', path: '/secteurs/financier/actifs' },
        { label: 'Audit et contrôle financier', path: '/secteurs/financier/audit' },
        { label: 'Banques d’inv', path: '/secteurs/financier/banques' },
      ],
    },
  ];

  // Ajout d'un état pour le survol du menu À propos (desktop)
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const aboutSubmenus = [
    {
      title: 'À propos',
      color: 'text-blue-700',
      border: 'border-blue-700',
      items: [
        { label: 'Mission', path: '/about/mission' },
        { label: 'Vision', path: '/about/vision' },
        { label: 'Valeurs', path: '/about/valeurs' },
      ],
    },
    {
      title: 'Projets',
      color: 'text-purple-700',
      border: 'border-purple-700',
      items: [
        { label: 'AgroBusiness', path: '/about/projets/agrobusiness' },
        { label: 'Business Intelligence', path: '/about/projets/bi' },
        { label: 'Banques d’investissement spécialisées', path: '/about/projets/banques' },
      ],
    },
  ];

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
              {navigationItems.map((item) =>
                item.name === t('nav.services') ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <motion.button
                      onClick={() => handleNavigation(item.path)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center ${getItemStyles(isActive(item.path))}`}
                    >
                      {item.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </motion.button>
                  </div>
                ) : (
                  item.name === t('nav.sectors') ? (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setSectorsMenuOpen(true)}
                      onMouseLeave={() => setSectorsMenuOpen(false)}
                    >
                      <motion.button
                        onClick={() => handleNavigation(item.path)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center ${getItemStyles(isActive(item.path))}`}
                      >
                        {item.name}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </motion.button>
                    </div>
                  ) : (
                    item.name === t('nav.about') ? (
                      <div
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => setAboutMenuOpen(true)}
                        onMouseLeave={() => setAboutMenuOpen(false)}
                      >
                        <motion.button
                          onClick={() => handleNavigation(item.path)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center ${getItemStyles(isActive(item.path))}`}
                        >
                          {item.name}
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </motion.button>
                      </div>
                    ) : (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavigation(item.path)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat ${getItemStyles(isActive(item.path))}`}
                      >
                        {item.name}
                      </motion.button>
                    )
                  )
                )
              )}
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

      {/* MEGA MENU ENFANT DIRECT DU NAV */}
      <AnimatePresence>
        {servicesMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full w-screen max-w-none z-50
              bg-white text-gray-900 shadow-2xl border-b border-gray-100
              py-10"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {servicesSubmenus.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <div className={`font-bold mb-2 text-lg ${col.color}`}>{col.title}</div>
                    <div className={`h-1 w-10 mb-4 rounded ${col.border} bg-current`}></div>
                    <ul className="space-y-2">
                      {col.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.path}
                            className="block px-0 py-1 text-base text-gray-700 hover:text-blue-700 hover:underline transition"
                            onClick={() => setServicesMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEGA MENU SECTEUR ENFANT DIRECT DU NAV */}
      <AnimatePresence>
        {sectorsMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full w-screen max-w-none z-50
              bg-white text-gray-900 shadow-2xl border-b border-gray-100
              py-10"
            onMouseEnter={() => setSectorsMenuOpen(true)}
            onMouseLeave={() => setSectorsMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {sectorsSubmenus.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <div className={`font-bold mb-2 text-lg ${col.color}`}>{col.title}</div>
                    <div className={`h-1 w-10 mb-4 rounded ${col.border} bg-current`}></div>
                    <ul className="space-y-2">
                      {col.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.path}
                            className="block px-0 py-1 text-base text-gray-700 hover:text-blue-700 hover:underline transition"
                            onClick={() => setSectorsMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEGA MENU ABOUT ENFANT DIRECT DU NAV */}
      <AnimatePresence>
        {aboutMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full w-screen max-w-none z-50
              bg-white text-gray-900 shadow-2xl border-b border-gray-100
              py-10"
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
          >
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {aboutSubmenus.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <div className={`font-bold mb-2 text-lg ${col.color}`}>{col.title}</div>
                    <div className={`h-1 w-10 mb-4 rounded ${col.border} bg-current`}></div>
                    <ul className="space-y-2">
                      {col.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.path}
                            className="block px-0 py-1 text-base text-gray-700 hover:text-blue-700 hover:underline transition"
                            onClick={() => setAboutMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            {navigationItems.map((item) =>
              item.name === t('nav.services') ? (
                <div key={item.name} className="w-full">
                  <motion.button
                    onClick={() => setServicesMenuOpen((open) => !open)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center justify-between ${getItemStyles(isActive(item.path))}`}
                  >
                    <span>{item.name}</span>
                    <svg className={`ml-2 w-4 h-4 transform transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </motion.button>
                  <AnimatePresence>
                    {servicesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="pl-4 pb-2"
                      >
                        <div className="flex flex-col gap-6">
                          {servicesSubmenus.map((col) => (
                            <div key={col.title} className="mb-2">
                              <div className={`flex items-center font-bold mb-1 text-base ${col.color}`}>{col.icon}{col.title}</div>
                              <div className={`h-1 w-10 mb-3 rounded ${col.border} bg-current`}></div>
                              <ul className="space-y-1">
                                {col.items.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      to={sub.path}
                                      className="block px-0 py-1 text-sm text-gray-700 hover:text-blue-700 hover:underline transition"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.name === t('nav.sectors') ? (
                <div key={item.name} className="w-full">
                  <motion.button
                    onClick={() => setSectorsMenuOpen((open) => !open)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center justify-between ${getItemStyles(isActive(item.path))}`}
                  >
                    <span>{item.name}</span>
                    <svg className={`ml-2 w-4 h-4 transform transition-transform ${sectorsMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </motion.button>
                  <AnimatePresence>
                    {sectorsMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="pl-4 pb-2"
                      >
                        <div className="flex flex-col gap-6">
                          {sectorsSubmenus.map((col) => (
                            <div key={col.title} className="mb-2">
                              <div className={`flex items-center font-bold mb-1 text-base ${col.color}`}>{col.title}</div>
                              <div className={`h-1 w-10 mb-3 rounded ${col.border} bg-current`}></div>
                              <ul className="space-y-1">
                                {col.items.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      to={sub.path}
                                      className="block px-0 py-1 text-sm text-gray-700 hover:text-blue-700 hover:underline transition"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.name === t('nav.about') ? (
                <div key={item.name} className="w-full">
                  <motion.button
                    onClick={() => setAboutMenuOpen((open) => !open)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center justify-between ${getItemStyles(isActive(item.path))}`}
                  >
                    <span>{item.name}</span>
                    <svg className={`ml-2 w-4 h-4 transform transition-transform ${aboutMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </motion.button>
                  <AnimatePresence>
                    {aboutMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="pl-4 pb-2"
                      >
                        <div className="flex flex-col gap-6">
                          {aboutSubmenus.map((col) => (
                            <div key={col.title} className="mb-2">
                              <div className={`flex items-center font-bold mb-1 text-base ${col.color}`}>{col.title}</div>
                              <div className={`h-1 w-10 mb-3 rounded ${col.border} bg-current`}></div>
                              <ul className="space-y-1">
                                {col.items.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      to={sub.path}
                                      className="block px-0 py-1 text-sm text-gray-700 hover:text-blue-700 hover:underline transition"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat ${getItemStyles(isActive(item.path))}`}
                >
                  {item.name}
                </motion.button>
              )
            )}
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