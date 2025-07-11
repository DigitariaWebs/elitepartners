import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import DefaultLayout from '@/layouts/DefaultLayout';
import image31 from '/public/31.png';
import image32 from '/public/32.png';
import image33 from '/public/33.png';

const EtudesPage: React.FC = () => {
  const { t } = useLanguage();
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const current = window.scrollY;
    setScroll((current / total) * 100);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const etudes = [
    {
      titre: t('etudes.market.title'),
      description: (
        <>
          <p className="mb-3">{t('etudes.market.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('etudes.market.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image31,
    },
    {
      titre: t('etudes.economic.title'),
      description: (
        <>
          <p className="mb-3">{t('etudes.economic.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('etudes.economic.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image32,
    },
    {
      titre: t('etudes.strategic.title'),
      description: (
        <>
          <p className="mb-3">{t('etudes.strategic.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('etudes.strategic.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image33,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div style={{ width: `${scroll}%` }} className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-500 transition-all duration-200" />
      </div>
      <DefaultLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-200 via-white to-purple-200 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Mesh SVG premium */}
          <svg className="absolute left-0 top-0 w-full h-full opacity-30" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mesh1" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a5b4fc" />
                <stop offset="1" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
            <ellipse cx="600" cy="100" rx="180" ry="80" fill="url(#mesh1)" />
            <ellipse cx="200" cy="300" rx="120" ry="60" fill="#a5b4fc" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
              {t('etudes.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('etudes.subtitle') || 'Des études approfondies pour des décisions éclairées'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {etudes.map((e, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={e.titre}
                  variants={itemVariants}
                  className={`flex flex-col-reverse lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 group`}
                >
                  {/* Texte */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat"
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {e.titre}
                    </motion.h2>
                    <motion.div 
                      className="text-gray-700 text-lg leading-relaxed space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {e.description}
                    </motion.div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div
                      variants={imageVariants}
                      className="relative group"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <img
                        src={e.image}
                        alt={e.titre}
                        className="rounded-2xl shadow-2xl object-cover w-full max-w-lg h-80 lg:h-96 transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-80 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/3 w-32 h-32 bg-white/10 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/10 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
              {t('etudes.cta.title') || 'Prêt à démarrer votre projet ?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('etudes.cta.text')}
            </p>
            <Link to="/#contact">
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg hover:shadow-2xl transition-all duration-300 ring-0 focus:ring-4 focus:ring-blue-300"
              >
                {t('etudes.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      </DefaultLayout>
    </>
  );
};

export default EtudesPage; 