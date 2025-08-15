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
  const isAboutPage = location.pathname === '/about' || location.pathname.startsWith('/about#');
  const isProjectPage = location.pathname.startsWith('/projects/');
  const isGradientPage = isServicesPage || isSectorsPage || isProjectPage;
  const isRepresentationServicePage = location.pathname.startsWith('/services/representation/');
  const isEtudesServicePage = location.pathname.startsWith('/services/etudes/');
  const isFiscalPage = location.pathname === '/services/conseil/fiscal';
  const isRHPage = location.pathname === '/services/conseil/rh';
  const isStrategiePage = location.pathname === '/services/conseil/strategie';
  const isSubsectorPage = location.pathname.startsWith('/secteurs/agricole/') || 
                          location.pathname.startsWith('/secteurs/minier/') || 
                          location.pathname.startsWith('/secteurs/financier/');

  // Détection spécifique des pages de secteurs
  const isAgricolePage = location.pathname.startsWith('/secteurs/agricole/');
  const isMinierPage = location.pathname.startsWith('/secteurs/minier/');
  const isFinancierPage = location.pathname.startsWith('/secteurs/financier/');

  // Détection spécifique des pages de services
  const isConseilPage = location.pathname.startsWith('/services/conseil/');
  const isRepresentationPage = location.pathname.startsWith('/services/representation/');
  const isEtudesPage = location.pathname.startsWith('/services/etudes/');

  // Ajout d'un état pour le survol du menu Services (desktop)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  // Sous-menus pour Services
  // Couleurs et icônes pour chaque colonne
  const servicesSubmenus = [
    {
      title: t('services.section.conseil.title'),
      color: 'text-orange-300',
      border: 'border-orange-300',
      icon: <Briefcase className="inline-block mr-2 text-orange-300" size={20} />,
      items: [
        { label: t('nav.services.conseil.fiscal'), path: '/services/conseil/fiscal' },
        { label: t('nav.services.conseil.rh'), path: '/services/conseil/rh' },
        { label: 'Conseil en Stratégie et Transformation d’Entreprise', path: '/services/conseil/strategie' },
      ],
    },
    {
      title: t('services.section.representation.title'),
      color: 'text-orange-300',
      border: 'border-orange-300',
      icon: <Users className="inline-block mr-2 text-orange-300" size={20} />,
      items: [
        { label: t('nav.services.representation.administratif'), path: '/services/representation/administratif' },
        { label: t('nav.services.representation.locale'), path: '/services/representation/locale' },
        { label: t('nav.services.representation.penetration'), path: '/services/representation/penetration-marche' },
      ],
    },
    {
      title: t('services.section.etudes.title'),
      color: 'text-orange-300',
      border: 'border-orange-300',
      icon: <BookOpen className="inline-block mr-2 text-orange-300" size={20} />,
      items: [
        { label: t('nav.services.etudes.marche'), path: '/services/etudes/marche' },
        { label: t('nav.services.etudes.economique'), path: '/services/etudes/economique' },
        { label: t('nav.services.etudes.strategique'), path: '/services/etudes/strategique' },
      ],
    },
  ];

  // Ajout d'un état pour le survol du menu Secteur (desktop)
  const [sectorsMenuOpen, setSectorsMenuOpen] = useState(false);

  const sectorsSubmenus = [
    {
      title: t('nav.sectors.agricole.title'),
      color: 'text-yellow-300',
      border: 'border-yellow-300',
      items: [
        { label: t('nav.sectors.agricole.agroalimentaire'), path: '/secteurs/agricole/agroalimentaire' },
        { label: t('nav.sectors.agricole.vivriere'), path: '/secteurs/agricole/vivriere' },
        { label: t('nav.sectors.agricole.peche'), path: '/secteurs/agricole/peche' },
        { label: t('nav.sectors.agricole.industrielle'), path: '/secteurs/agricole/industrielle' },
      ],
    },
    {
      title: t('nav.sectors.minier.title'),
      color: 'text-yellow-300',
      border: 'border-yellow-300',
      items: [
        { label: t('nav.sectors.minier.exploration'), path: '/secteurs/minier/exploration' },
        { label: t('nav.sectors.minier.exploitation'), path: '/secteurs/minier/exploitation' },
        { label: t('nav.sectors.minier.transformation'), path: '/secteurs/minier/transformation' },
        { label: t('nav.sectors.minier.commerce'), path: '/secteurs/minier/commerce' },
      ],
    },
    {
      title: t('nav.sectors.financier.title'),
      color: 'text-yellow-300',
      border: 'border-yellow-300',
      items: [
        { label: t('nav.sectors.financier.banques'), path: '/secteurs/financier/banques' },
        { label: t('nav.sectors.financier.assurance'), path: '/secteurs/financier/assurance' },
        { label: t('nav.sectors.financier.investissement'), path: '/secteurs/financier/investissement' },
        { label: t('nav.sectors.financier.fintech'), path: '/secteurs/financier/fintech' },
      ],
    },
  ];

  // Ajout d'un état pour le survol du menu À propos (desktop)
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const aboutSubmenus = [
    {
      title: t('nav.about.about.title'),
      color: 'text-purple-300',
      border: 'border-purple-300',
      items: [
        { label: t('nav.about.mission'), path: '/about#mission' },
        { label: t('nav.about.vision'), path: '/about#vision' },
        { label: t('nav.about.valeurs'), path: '/about#valeurs' },
      ],
    },
    {
      title: t('nav.about.projets.title'),
      color: 'text-purple-300',
      border: 'border-purple-300',
      items: [
                    { label: t('nav.about.projets.agrobusiness'), path: '/projects/agrobusiness' },
            { label: t('nav.about.projets.bi'), path: '/projects/business-intelligence' },
            { label: t('nav.about.projets.banques'), path: '/projects/specialized-investment-banks' },
      ],
    },
  ];

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.sectors'), path: '/secteurs' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.academy'), path: '/#academy' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Keep navbar always visible (fixed)
      setVisible(true);
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
    // Fonction pour obtenir la couleur du hero selon la page exacte
    const getHeroColor = () => {
      const path = location.pathname;
      
      // Page À propos (avec ou sans ancres) - Couleur adaptée à la section hero
      if (path === '/about' || path.startsWith('/about#')) return 'from-violet-600 to-violet-800';
      
      // Pages de secteurs agricole
      if (path === '/secteurs/agricole/agroalimentaire') return 'from-green-600 to-green-800';
      if (path === '/secteurs/agricole/vivriere') return 'from-amber-600 to-amber-800';
      if (path === '/secteurs/agricole/peche') return 'from-blue-600 to-cyan-700';
      if (path === '/secteurs/agricole/industrielle') return 'from-emerald-600 to-emerald-800';
      
      // Pages de secteurs minier
      if (path === '/secteurs/minier/exploration') return 'from-orange-600 to-orange-800';
      if (path === '/secteurs/minier/exploitation') return 'from-slate-700 to-slate-900';
      if (path === '/secteurs/minier/transformation') return 'from-indigo-600 to-indigo-800';
      if (path === '/secteurs/minier/commerce') return 'from-rose-600 to-rose-800';
      
      // Pages de secteurs financier
      if (path === '/secteurs/financier/banques') return 'from-blue-700 to-blue-900';
      if (path === '/secteurs/financier/assurance') return 'from-purple-700 to-purple-900';
      if (path === '/secteurs/financier/investissement') return 'from-emerald-700 to-emerald-900';
      if (path === '/secteurs/financier/fintech') return 'from-cyan-700 to-cyan-900';
      
      // Pages de services conseil
      if (path === '/services/conseil/fiscal') return 'from-blue-600 to-blue-800';
      if (path === '/services/conseil/rh') return 'from-blue-600 to-blue-800';
      if (path === '/services/conseil/strategie') return 'from-blue-600 to-blue-800';
      
      // Pages de services représentation
      if (path === '/services/representation/administratif') return 'from-blue-600 to-blue-800';
      if (path === '/services/representation/locale') return 'from-purple-600 to-purple-800';
      if (path === '/services/representation/penetration-marche') return 'from-teal-600 to-teal-800';
      
      // Pages de services études
      if (path === '/services/etudes/marche') return 'from-blue-600 to-blue-800';
      if (path === '/services/etudes/economique') return 'from-green-600 to-green-800';
      if (path === '/services/etudes/strategique') return 'from-purple-600 to-purple-800';
      
      // Pages de projets
      if (path === '/projects/agrobusiness') return 'from-green-600 to-green-800';
      if (path === '/projects/business-intelligence') return 'from-blue-600 to-blue-800';
      if (path === '/projects/specialized-investment-banks') return 'from-purple-600 to-purple-800';
      
      // Pages générales
      if (path === '/services') return 'transparent';
      if (path === '/secteurs') return 'transparent';
      if (path === '/') return 'transparent';
      
      // Par défaut
      return 'from-blue-600 to-blue-800';
    };

    const heroColor = getHeroColor();
    
    // Si c'est la page d'accueil et pas de scroll, transparent
    if (isHomePage && !isScrolled) {
      return 'bg-transparent';
    }
    
    // Si c'est la page des secteurs ou services, toujours transparent pour utiliser le hero comme background
    if (isSectorsPage || isServicesPage) {
      return 'bg-transparent';
    }
    
    // Sinon, utiliser la couleur du hero
    if (heroColor === 'transparent') {
      return isScrolled ? 'bg-blue-800 text-white shadow-lg border-b border-blue-900' : 'bg-transparent';
    }
    
    return `bg-gradient-to-r ${heroColor} text-white${isScrolled ? ' shadow-lg border-b border-gray-800' : ''}`;
  };

  // Get text and hover colors based on page
  const getItemStyles = (isItemActive: boolean) => {
    if (isAboutPage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/20 text-white font-bold'
          : 'text-white hover:bg-white/10 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-violet-900 text-white font-bold'
          : 'text-white hover:bg-violet-900 hover:text-white';
      }
    }
    if (isFiscalPage || isRHPage || isStrategiePage || isEtudesServicePage || isSubsectorPage || isProjectPage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/20 text-white font-bold'
          : 'text-white hover:bg-white/10 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-blue-900 text-white font-bold'
          : 'text-white hover:bg-blue-900 hover:text-white';
      }
    }
    if (isServicesPage || isSectorsPage || isRepresentationServicePage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/20 text-white font-bold'
          : 'text-white/90 hover:bg-white/10 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-blue-900 text-white font-bold'
          : 'text-white hover:bg-blue-900 hover:text-white';
      }
    } else if (isGradientPage) {
      return isItemActive
        ? 'bg-white/20 text-white font-bold'
        : 'text-white/90 hover:bg-white/10 hover:text-white';
    } else if (isHomePage && !isScrolled) {
      return isItemActive
        ? 'bg-white/20 text-white'
        : 'text-white/90 hover:bg-white/10 hover:text-white';
    } else if (isHomePage && isScrolled) {
      return isItemActive
        ? 'bg-blue-900 text-white font-bold'
        : 'text-white hover:bg-blue-900 hover:text-white';
    } else {
      return isItemActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-700 hover:bg-blue-50/50 hover:text-blue-600';
    }
  };

  // Get mobile-specific background styles for better visibility
  const getMobileBackground = () => {
    // Fonction pour obtenir la couleur du hero selon la page exacte (version mobile plus foncée)
    const getMobileHeroColor = () => {
      const path = location.pathname;
      
      // Page À propos (avec ou sans ancres) - Couleur adaptée à la section hero (version mobile plus foncée)
      if (path === '/about' || path.startsWith('/about#')) return 'from-violet-700 to-violet-900';
      
      // Pages de secteurs agricole
      if (path === '/secteurs/agricole/agroalimentaire') return 'from-green-700 to-green-900';
      if (path === '/secteurs/agricole/vivriere') return 'from-amber-700 to-amber-900';
      if (path === '/secteurs/agricole/peche') return 'from-blue-700 to-cyan-800';
      if (path === '/secteurs/agricole/industrielle') return 'from-emerald-700 to-emerald-900';
      
      // Pages de secteurs minier
      if (path === '/secteurs/minier/exploration') return 'from-orange-700 to-orange-900';
      if (path === '/secteurs/minier/exploitation') return 'from-slate-800 to-slate-950';
      if (path === '/secteurs/minier/transformation') return 'from-indigo-700 to-indigo-900';
      if (path === '/secteurs/minier/commerce') return 'from-rose-700 to-rose-900';
      
      // Pages de secteurs financier
      if (path === '/secteurs/financier/banques') return 'from-blue-800 to-blue-950';
      if (path === '/secteurs/financier/assurance') return 'from-purple-800 to-purple-950';
      if (path === '/secteurs/financier/investissement') return 'from-emerald-800 to-emerald-950';
      if (path === '/secteurs/financier/fintech') return 'from-cyan-800 to-cyan-950';
      
      // Pages de services conseil
      if (path === '/services/conseil/fiscal') return 'from-blue-700 to-blue-900';
      if (path === '/services/conseil/rh') return 'from-blue-700 to-blue-900';
      if (path === '/services/conseil/strategie') return 'from-blue-700 to-blue-900';
      
      // Pages de services représentation
      if (path === '/services/representation/administratif') return 'from-blue-700 to-blue-900';
      if (path === '/services/representation/locale') return 'from-purple-700 to-purple-900';
      if (path === '/services/representation/penetration-marche') return 'from-teal-700 to-teal-900';
      
      // Pages de services études
      if (path === '/services/etudes/marche') return 'from-blue-700 to-blue-900';
      if (path === '/services/etudes/economique') return 'from-green-700 to-green-900';
      if (path === '/services/etudes/strategique') return 'from-purple-700 to-purple-900';
      
      // Pages de projets
      if (path === '/projects/agrobusiness') return 'from-green-700 to-green-900';
      if (path === '/projects/business-intelligence') return 'from-blue-700 to-blue-900';
      if (path === '/projects/specialized-investment-banks') return 'from-purple-700 to-purple-900';
      
      // Pages générales
      if (path === '/services') return 'from-indigo-600 to-purple-600';
      if (path === '/secteurs') return 'transparent';
      if (path === '/') return 'transparent';
      
      // Par défaut
      return 'from-blue-700 to-blue-900';
    };

    const heroColor = getMobileHeroColor();
    
    // Si c'est la page d'accueil et pas de scroll, semi-transparent
    if (isHomePage && !isScrolled) {
      return 'bg-blue-800/90 backdrop-blur-lg text-white';
    }
    
    // Si c'est la page des secteurs, toujours transparent pour utiliser le hero comme background
    if (isSectorsPage) {
      return 'bg-transparent';
    }
    
    // Sinon, utiliser la couleur du hero
    if (heroColor === 'transparent') {
      return isScrolled ? 'bg-blue-900 text-white' : 'bg-blue-800/90 backdrop-blur-lg text-white';
    }
    
    return `bg-gradient-to-r ${heroColor} text-white shadow-lg border-gray-800`;
  };

  // Get mobile-specific item styles for better contrast
  const getMobileItemStyles = (isItemActive: boolean) => {
    if (isAboutPage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/25 text-white font-bold border-l-4 border-white'
          : 'text-white hover:bg-white/15 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-violet-800 text-white font-bold border-l-4 border-white'
          : 'text-white hover:bg-violet-800 hover:text-white';
      }
    }
    if (isFiscalPage || isRHPage || isStrategiePage || isEtudesServicePage || isSubsectorPage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/25 text-white font-bold border-l-4 border-white'
          : 'text-white hover:bg-white/15 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-blue-800 text-white font-bold border-l-4 border-white'
          : 'text-white hover:bg-blue-800 hover:text-white';
      }
    }
    if (isServicesPage || isSectorsPage || isRepresentationServicePage) {
      if (!isScrolled) {
        return isItemActive
          ? 'bg-white/25 text-white font-bold border-l-4 border-white'
          : 'text-white hover:bg-white/15 hover:text-white';
      } else {
        return isItemActive
          ? 'bg-blue-800 text-white font-bold border-l-4 border-white'
          : 'text-white hover:bg-blue-800 hover:text-white';
      }
    } else if (isGradientPage) {
      return isItemActive
        ? 'bg-white/25 text-white font-bold border-l-4 border-white'
        : 'text-white hover:bg-white/15 hover:text-white';
    } else if (isHomePage && !isScrolled) {
      return isItemActive
        ? 'bg-white/25 text-white font-bold border-l-4 border-white'
        : 'text-white hover:bg-white/15 hover:text-white';
    } else if (isHomePage && isScrolled) {
      return isItemActive
        ? 'bg-blue-800 text-white font-bold border-l-4 border-white'
        : 'text-white hover:bg-blue-800 hover:text-white';
    } else {
      return isItemActive
        ? 'bg-blue-100 text-blue-700 font-bold border-l-4 border-blue-600'
        : 'text-gray-800 hover:bg-blue-50 hover:text-blue-700';
    }
  };

  // Get mobile hamburger button styles based on hero section color
  const getMobileHamburgerButtonStyles = () => {
    const path = location.pathname;
    
    // Fonction pour obtenir la couleur du hero selon la page exacte
    const getHeroColor = () => {
      // Page À propos (avec ou sans ancres)
      if (path === '/about' || path.startsWith('/about#')) return 'violet';
      
      // Pages de secteurs agricole
      if (path === '/secteurs/agricole/agroalimentaire') return 'green';
      if (path === '/secteurs/agricole/vivriere') return 'amber';
      if (path === '/secteurs/agricole/peche') return 'blue';
      if (path === '/secteurs/agricole/industrielle') return 'emerald';
      
      // Pages de secteurs minier
      if (path === '/secteurs/minier/exploration') return 'orange';
      if (path === '/secteurs/minier/exploitation') return 'slate';
      if (path === '/secteurs/minier/transformation') return 'indigo';
      if (path === '/secteurs/minier/commerce') return 'rose';
      
      // Pages de secteurs financier
      if (path === '/secteurs/financier/banques') return 'blue';
      if (path === '/secteurs/financier/assurance') return 'purple';
      if (path === '/secteurs/financier/investissement') return 'emerald';
      if (path === '/secteurs/financier/fintech') return 'cyan';
      
      // Pages de services conseil
      if (path === '/services/conseil/fiscal') return 'blue';
      if (path === '/services/conseil/rh') return 'blue';
      if (path === '/services/conseil/strategie') return 'blue';
      
      // Pages de services représentation
      if (path === '/services/representation/administratif') return 'blue';
      if (path === '/services/representation/locale') return 'purple';
      if (path === '/services/representation/penetration-marche') return 'teal';
      
      // Pages de services études
      if (path === '/services/etudes/marche') return 'blue';
      if (path === '/services/etudes/economique') return 'green';
      if (path === '/services/etudes/strategique') return 'purple';
      
      // Pages générales
      if (path === '/services') return 'indigo';
      if (path === '/secteurs') return 'indigo';
      if (path === '/') return 'transparent';
      
      // Par défaut
      return 'blue';
    };

    const heroColor = getHeroColor();
    
    // Si c'est la page d'accueil et pas de scroll, semi-transparent
    if (isHomePage && !isScrolled) {
      return 'bg-white/20 text-white hover:bg-white/30';
    }
    
    // Sinon, utiliser la couleur du hero
    if (heroColor === 'transparent') {
      return isScrolled ? 'bg-blue-800 text-white hover:bg-blue-700' : 'bg-white/20 text-white hover:bg-white/30';
    }
    
    // Mapping des couleurs vers les classes Tailwind
    const colorMap: { [key: string]: string } = {
      violet: isScrolled ? 'bg-violet-800 text-white hover:bg-violet-700' : 'bg-white/20 text-white hover:bg-white/30',
      green: isScrolled ? 'bg-green-800 text-white hover:bg-green-700' : 'bg-white/20 text-white hover:bg-white/30',
      amber: isScrolled ? 'bg-amber-800 text-white hover:bg-amber-700' : 'bg-white/20 text-white hover:bg-white/30',
      blue: isScrolled ? 'bg-blue-800 text-white hover:bg-blue-700' : 'bg-white/20 text-white hover:bg-white/30',
      emerald: isScrolled ? 'bg-emerald-800 text-white hover:bg-emerald-700' : 'bg-white/20 text-white hover:bg-white/30',
      orange: isScrolled ? 'bg-orange-800 text-white hover:bg-orange-700' : 'bg-white/20 text-white hover:bg-white/30',
      slate: isScrolled ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white/20 text-white hover:bg-white/30',
      indigo: isScrolled ? 'bg-indigo-800 text-white hover:bg-indigo-700' : 'bg-white/20 text-white hover:bg-white/30',
      rose: isScrolled ? 'bg-rose-800 text-white hover:bg-rose-700' : 'bg-white/20 text-white hover:bg-white/30',
      purple: isScrolled ? 'bg-purple-800 text-white hover:bg-purple-700' : 'bg-white/20 text-white hover:bg-white/30',
      cyan: isScrolled ? 'bg-cyan-800 text-white hover:bg-cyan-700' : 'bg-white/20 text-white hover:bg-white/30',
      teal: isScrolled ? 'bg-teal-800 text-white hover:bg-teal-700' : 'bg-white/20 text-white hover:bg-white/30',
    };
    
    return colorMap[heroColor] || colorMap.blue;
  };

  // Get mobile-specific language button styles for better visibility
  const getMobileLanguageButtonStyles = () => {
    if (isAboutPage) {
      return 'text-white hover:bg-white/15 hover:text-white border-l-4 border-transparent hover:border-white/30';
    }
    if (isFiscalPage || isRHPage || isStrategiePage || isEtudesServicePage || isSubsectorPage) {
      if (!isScrolled) {
        return 'text-white hover:bg-white/15 hover:text-white border-l-4 border-transparent hover:border-white/30';
      } else {
        return 'text-white hover:bg-blue-800 hover:text-white border-l-4 border-transparent hover:border-white/30';
      }
    }
    if (isServicesPage || isSectorsPage || isRepresentationServicePage) {
      if (!isScrolled) {
        return 'text-white hover:bg-white/15 hover:text-white border-l-4 border-transparent hover:border-white/30';
      } else {
        return 'text-white hover:bg-blue-800 hover:text-white border-l-4 border-transparent hover:border-white/30';
      }
    } else if (isGradientPage) {
      return 'text-white hover:bg-white/15 hover:text-white border-l-4 border-transparent hover:border-white/30';
    } else if (isHomePage && !isScrolled) {
      return 'text-white hover:bg-white/15 hover:text-white border-l-4 border-transparent hover:border-white/30';
    } else if (isHomePage && isScrolled) {
      return 'text-white hover:bg-blue-800 hover:text-white border-l-4 border-transparent hover:border-white/30';
    } else {
      return 'text-gray-800 hover:bg-blue-50 hover:text-blue-700 border-l-4 border-transparent hover:border-blue-300';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBackground()} ${
        isScrolled ? "shadow-lg border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img
                src={CONTACT_INFO.logo}
                alt="Eliteparners Logo"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12"
                } ${
                  isGradientPage ||
                  ((isServicesPage ||
                    isSectorsPage ||
                    isRepresentationServicePage ||
                    isSubsectorPage) &&
                    !isScrolled)
                    ? "brightness-0 invert"
                    : ""
                }`}
              />
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationItems.map((item) =>
                item.name === t("nav.services") ? (
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
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center ${getItemStyles(
                        isActive(item.path)
                      )}`}
                    >
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                ) : item.name === t("nav.sectors") ? (
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
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center ${getItemStyles(
                        isActive(item.path)
                      )}`}
                    >
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                ) : item.name === t("nav.about") ? (
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
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center ${getItemStyles(
                        isActive(item.path)
                      )}`}
                    >
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat ${getItemStyles(
                      isActive(item.path)
                    )}`}
                  >
                    {item.name}
                  </motion.button>
                )
              )}
              <motion.button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-montserrat flex items-center space-x-1 ${
                  isAboutPage
                    ? "text-white hover:bg-white/10 hover:text-white" // always white on about
                    : isServicesPage ||
                      isSectorsPage ||
                      isRepresentationServicePage ||
                      isSubsectorPage
                    ? !isScrolled
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                    : isGradientPage
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : isHomePage && !isScrolled
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-gray-700 hover:bg-blue-50/50 hover:text-blue-600"
                }`}
              >
                <Globe size={16} />
                <span>{language === "fr" ? "EN" : "FR"}</span>
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${getMobileHamburgerButtonStyles()}`}
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
            className="hidden md:block absolute left-0 right-0 top-full w-screen max-w-none z-50
              bg-white text-gray-900 shadow-2xl border-b border-gray-100
              py-10"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {servicesSubmenus.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <div
                      className={`font-bold mb-2 text-lg ${col.color} md:text-gradient`}
                    >
                      {col.title}
                    </div>
                    <div
                      className={`h-1 w-10 mb-4 rounded ${col.border} bg-current`}
                    ></div>
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
            className="hidden md:block absolute left-0 right-0 top-full w-screen max-w-none z-50
              bg-white text-gray-900 shadow-2xl border-b border-gray-100
              py-10"
            onMouseEnter={() => setSectorsMenuOpen(true)}
            onMouseLeave={() => setSectorsMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {sectorsSubmenus.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <div
                      className={`font-bold mb-2 text-lg ${col.color} md:text-gradient`}
                    >
                      {col.title}
                    </div>
                    <div
                      className={`h-1 w-10 mb-4 rounded ${col.border} bg-current`}
                    ></div>
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
            className="hidden md:block absolute left-0 right-0 top-full w-screen max-w-none z-50
              bg-white text-gray-900 shadow-2xl border-b border-gray-100
              py-10"
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
          >
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {aboutSubmenus.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <div
                      className={`font-bold mb-2 text-lg ${col.color} md:text-gradient`}
                    >
                      {col.title}
                    </div>
                    <div
                      className={`h-1 w-10 mb-4 rounded ${col.border} bg-current`}
                    ></div>
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div
              className={`px-4 py-3 space-y-2 border-t transition-all duration-300 ${getMobileBackground()}`}
            >
              {navigationItems.map((item) =>
                item.name === t("nav.services") ? (
                  <div key={item.name} className="w-full">
                    <motion.button
                      onClick={() => setServicesMenuOpen((open) => !open)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center justify-between ${getMobileItemStyles(
                        isActive(item.path)
                      )}`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`ml-2 w-4 h-4 transform transition-transform ${
                          servicesMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                    <AnimatePresence>
                      {servicesMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="pl-4 pb-2"
                        >
                          <div className="flex flex-col gap-6">
                            {servicesSubmenus.map((col) => (
                              <div key={col.title} className="mb-2">
                                <div
                                  className={`flex items-center font-bold mb-1 text-base ${col.color}`}
                                >
                                  {col.icon}
                                  {col.title}
                                </div>
                                <div
                                  className={`h-1 w-10 mb-3 rounded ${col.border} bg-current`}
                                ></div>
                                <ul className="space-y-1">
                                  {col.items.map((sub) => (
                                    <li key={sub.label}>
                                      <Link
                                        to={sub.path}
                                        className="block px-0 py-1 text-sm text-white/90 hover:text-white hover:underline transition"
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
                ) : item.name === t("nav.sectors") ? (
                  <div key={item.name} className="w-full">
                    <motion.button
                      onClick={() => setSectorsMenuOpen((open) => !open)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center justify-between ${getMobileItemStyles(
                        isActive(item.path)
                      )}`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`ml-2 w-4 h-4 transform transition-transform ${
                          sectorsMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                    <AnimatePresence>
                      {sectorsMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="pl-4 pb-2"
                        >
                          <div className="flex flex-col gap-6">
                            {sectorsSubmenus.map((col) => (
                              <div key={col.title} className="mb-2">
                                <div
                                  className={`flex items-center font-bold mb-1 text-base ${col.color}`}
                                >
                                  {col.title}
                                </div>
                                <div
                                  className={`h-1 w-10 mb-3 rounded ${col.border} bg-current`}
                                ></div>
                                <ul className="space-y-1">
                                  {col.items.map((sub) => (
                                    <li key={sub.label}>
                                      <Link
                                        to={sub.path}
                                        className="block px-0 py-1 text-sm text-white/90 hover:text-white hover:underline transition"
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
                ) : item.name === t("nav.about") ? (
                  <div key={item.name} className="w-full">
                    <motion.button
                      onClick={() => setAboutMenuOpen((open) => !open)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center justify-between ${getMobileItemStyles(
                        isActive(item.path)
                      )}`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`ml-2 w-4 h-4 transform transition-transform ${
                          aboutMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                    <AnimatePresence>
                      {aboutMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="pl-4 pb-2"
                        >
                          <div className="flex flex-col gap-6">
                            {aboutSubmenus.map((col) => (
                              <div key={col.title} className="mb-2">
                                <div
                                  className={`flex items-center font-bold mb-1 text-base ${col.color}`}
                                >
                                  {col.title}
                                </div>
                                <div
                                  className={`h-1 w-10 mb-3 rounded ${col.border} bg-current`}
                                ></div>
                                <ul className="space-y-1">
                                  {col.items.map((sub) => (
                                    <li key={sub.label}>
                                      <Link
                                        to={sub.path}
                                        className="block px-0 py-1 text-sm text-white/90 hover:text-white hover:underline transition"
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat ${getMobileItemStyles(
                      isActive(item.path)
                    )}`}
                  >
                    <span>{item.name}</span>
                  </motion.button>
                )
              )}
              <motion.button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-montserrat flex items-center space-x-2 ${getMobileLanguageButtonStyles()}`}
              >
                <Globe size={16} />
                <span>{language === "fr" ? "English" : "Français"}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;