import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

// Professional African fishing and aquaculture images from Unsplash
const heroImage = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const fishingTechniquesImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80';
const aquacultureImage = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80';
const fishProcessingImage = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const PechePage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const renderBulletList = (bullets: string[]) => (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
      {bullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-cyan-700 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              {t('sectors.agricole.peche.hero.title')}
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              {t('sectors.agricole.peche.hero.subtitle')}
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold px-8 py-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white hover:text-cyan-900">
                {t('sectors.agricole.peche.hero.cta')}
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt={t('sectors.agricole.peche.hero.title')}
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
          {/* Techniques de pêche durables */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={1}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={fishingTechniquesImage} alt={t('sectors.agricole.peche.techniques.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('sectors.agricole.peche.techniques.title')}</h1>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('sectors.agricole.peche.techniques.subtitle')}</p>
              {renderBulletList(t('sectors.agricole.peche.techniques.bullets'))}
            </div>
          </motion.div>

          {/* Développement de l'aquaculture */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={2}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={aquacultureImage} alt={t('sectors.agricole.peche.aquaculture.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('sectors.agricole.peche.aquaculture.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('sectors.agricole.peche.aquaculture.subtitle')}</p>
              {renderBulletList(t('sectors.agricole.peche.aquaculture.bullets'))}
            </div>
          </motion.div>

          {/* Transformation et valorisation */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={3}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={fishProcessingImage} alt={t('sectors.agricole.peche.transformation.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('sectors.agricole.peche.transformation.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('sectors.agricole.peche.transformation.subtitle')}</p>
              {renderBulletList(t('sectors.agricole.peche.transformation.bullets'))}
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
            <p className="text-gray-600 mb-6 text-xl font-semibold">{t('sectors.agricole.peche.cta.title')}</p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                {t('sectors.agricole.peche.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PechePage;