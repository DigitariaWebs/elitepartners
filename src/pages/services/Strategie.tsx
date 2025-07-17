import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import image12 from './12.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const StrategiePage: React.FC = () => {
  const { t } = useLanguage();
  
  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroImage = '/start.jpg';
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              {t('services.strategie.hero.title')}
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              {t('services.strategie.hero.subtitle')}
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold px-8 py-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white hover:text-blue-900">
                {t('services.strategie.hero.cta')}
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Conseil en stratégie et transformation"
              className="rounded-2xl shadow-xl object-cover w-full max-w-md h-64 md:h-80 lg:h-96"
              style={{ background: '#e5e7eb' }}
            />
          </div>
        </div>
        {/* WAVE SVG */}
        <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none" style={{lineHeight:0}}>
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44 lg:h-56" preserveAspectRatio="none">
            <path d="M0,60 C360,180 1080,0 1440,120 L1440,180 L0,180 Z" fill="#fff"/>
          </svg>
        </div>
      </section>
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section Stratégie principale */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={1}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={image12} alt={t('services.strategie.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('services.strategie.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('services.strategie.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {getTranslationArray('services.strategie.bullets').map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <h3 className="text-lg font-bold font-montserrat mt-6 mb-2">{t('services.strategie.risk.title')}</h3>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('services.strategie.risk.subtitle')}</p>
            </div>
          </motion.div>
          {/* CTA */}
          <motion.div
            className="text-center py-8 border-t mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={2}
          >
            <p className="text-gray-600 mb-6 text-xl font-semibold">{t('services.strategie.cta.title')}</p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                {t('services.strategie.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StrategiePage; 