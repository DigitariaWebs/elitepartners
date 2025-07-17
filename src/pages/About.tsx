import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Professional African business images from Unsplash
const heroImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const missionImage = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const visionImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const valuesImage = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const aboutSections = [
    {
      id: 'mission',
      titre: t('about.mission.title'),
      description: (
        <>
          <p className="mb-3">{t('about.mission.subtitle')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('about.mission.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
      image: missionImage,
    },
    {
      id: 'vision',
      titre: t('about.vision.title'),
      description: (
        <>
          <p className="mb-3">{t('about.vision.subtitle')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('about.vision.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
      image: visionImage,
    },
    {
      id: 'valeurs',
      titre: t('about.values.title'),
      description: (
        <>
          <p className="mb-3">{t('about.values.subtitle')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('about.values.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
      image: valuesImage,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-violet-600 to-violet-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              {t('about.hero.title')}
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              {t('about.hero.subtitle')}
            </p>
            <div className="flex justify-center sm:justify-start">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-violet-800 transition-all duration-300"
                onClick={scrollToAbout}
              >
                {t('about.hero.cta')}
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt={t('about.hero.title')}
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

      {/* CONTENT SECTIONS */}
      <div id="about-content" className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">{t('about.content.title')}</h1>
          </div>
          <motion.div className="space-y-16">
            {aboutSections.map((section, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-8 group`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                  custom={i + 1}
                >
                  {/* Texte */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{section.titre}</h2>
                    <div className="text-gray-700 text-base md:text-lg leading-relaxed">{section.description}</div>
                  </div>
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={section.image}
                      alt={section.titre}
                      className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          {/* CTA */}
          <div className="text-center py-8 border-t mt-16">
            <p className="text-gray-600 mb-6">
              {t('about.cta.subtitle')}
            </p>
            <Link to="/#contact">
              <Button variant="primary" size="lg">
                {t('about.cta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 