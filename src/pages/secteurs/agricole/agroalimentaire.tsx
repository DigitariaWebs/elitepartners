import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Professional African business images from Unsplash
const heroImage = 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2154&q=80';
const foodProcessingImage = 'https://images.unsplash.com/photo-1606914469841-e3678b46db6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80';
const qualityControlImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const distributionImage = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const AgroalimentairePage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-green-600 to-green-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              {t('sectors.agroalimentaire.hero.title')}
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              {t('sectors.agroalimentaire.hero.subtitle')}
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold px-8 py-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white hover:text-green-900">
                {t('sectors.agroalimentaire.hero.cta')}
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt={t('sectors.agroalimentaire.hero.title')}
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
          {/* Transformation et processing */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={1}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={foodProcessingImage} alt={t('sectors.agroalimentaire.transformation.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('sectors.agroalimentaire.transformation.title')}</h1>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('sectors.agroalimentaire.transformation.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {getTranslationArray('sectors.agroalimentaire.transformation.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contrôle qualité et certifications */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={2}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={qualityControlImage} alt={t('sectors.agroalimentaire.quality.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('sectors.agroalimentaire.quality.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('sectors.agroalimentaire.quality.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {getTranslationArray('sectors.agroalimentaire.quality.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Distribution et commercialisation */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={3}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={distributionImage} alt={t('sectors.agroalimentaire.distribution.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('sectors.agroalimentaire.distribution.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('sectors.agroalimentaire.distribution.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {getTranslationArray('sectors.agroalimentaire.distribution.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center py-8 border-t mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={4}
          >
            <p className="text-gray-600 mb-6 text-xl font-semibold">{t('sectors.agroalimentaire.cta.subtitle')}</p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                {t('sectors.agroalimentaire.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgroalimentairePage;