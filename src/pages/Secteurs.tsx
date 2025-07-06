import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Hammer, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const secteurImages = [
  '/agricole.png',
  '/minier.png',
  '/finance.png',
];

const Secteurs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  useEffect(() => { setIsVisible(true); }, []);

  const secteurs = [
    {
      id: 'agricole',
      title: t('sectors.agricultural.title'),
      icon: <Sprout className="w-8 h-8 sm:w-10 sm:h-10" />,
      color: 'green',
      description: t('sectors.agricultural.description'),
      sousSecteurs: t('sectors.agricultural.subsectors'),
      link: '/secteurs/agricole',
    },
    {
      id: 'minier',
      title: t('sectors.mining.title'),
      icon: <Hammer className="w-8 h-8 sm:w-10 sm:h-10" />,
      color: 'indigo',
      description: t('sectors.mining.description'),
      sousSecteurs: t('sectors.mining.subsectors'),
      link: '/secteurs/minier',
    },
    {
      id: 'financier',
      title: t('sectors.financial.title'),
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />,
      color: 'purple',
      description: t('sectors.financial.description'),
      sousSecteurs: t('sectors.financial.subsectors'),
      link: '/secteurs/financier',
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-100',
        text: 'text-green-600',
        hover: 'group-hover:bg-green-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        text: 'text-indigo-600',
        hover: 'group-hover:bg-indigo-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        text: 'text-purple-600',
        hover: 'group-hover:bg-purple-100'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Animation variants pour le hero
  const containerHeroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };
  const itemHeroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const imageHeroVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <DefaultLayout>
      {/* Hero identique à Home, mais avec 3 images côte à côte */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Background Images */}
        <motion.div
          variants={imageHeroVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0 flex w-full h-full"
        >
          <div className="flex w-full h-full">
            <img src="/hero secterus/image.png" alt="Secteur 1" className="w-1/3 h-full object-cover" />
            <img src="/hero secterus/image copy.png" alt="Secteur 2" className="w-1/3 h-full object-cover" />
            <img src="/hero secterus/image copy 2.png" alt="Secteur 3" className="w-1/3 h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Content Hero */}
        <motion.div
          variants={containerHeroVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={itemHeroVariants} className="mb-6 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight font-montserrat"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('sectors.hero.title')}
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemHeroVariants} className="mb-8 sm:mb-12">
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {t('sectors.hero.subtitle')}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="hidden sm:block">
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-16 h-16 border border-white/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Sectors Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {secteurs.map((secteur, index) => {
              const colorClasses = getColorClasses(secteur.color);
              return (
                <motion.div
                  key={secteur.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border ${colorClasses.border} group cursor-pointer`}
                  onClick={() => secteur.link && navigate(secteur.link)}
                  style={{ pointerEvents: secteur.link ? 'auto' : 'none', opacity: secteur.link ? 1 : 0.6 }}
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:${colorClasses.hover} transition-colors duration-300`}>
                      <div className={colorClasses.text}>
                        {secteur.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{secteur.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{secteur.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('common.subsectors')}</h4>
                    <ul className="space-y-2">
                      {Array.isArray(secteur.sousSecteurs) ? secteur.sousSecteurs.map((subSecteur, subIndex) => (
                        <li key={subIndex} className="flex items-center text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{subSecteur}</span>
                        </li>
                      )) : null}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button
                      variant="primary"
                      size="md"
                      className={`w-full mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 hover:scale-105 transition-all duration-200 border-0`}
                    >
                      <span>{t('common.learnMore')}</span>
                      <ArrowRight className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Secteurs; 