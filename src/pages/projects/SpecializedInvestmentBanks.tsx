import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const SpecializedInvestmentBanksPage: React.FC = () => {
  const { language, t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
    })
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-purple-600 to-purple-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat"
            >
              {t('projects.banques.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-lg md:text-xl font-semibold"
            >
              {t('projects.banques.subtitle')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-base md:text-lg font-normal opacity-90"
            >
              {t('projects.banques.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center sm:justify-start"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-purple-800 transition-all duration-300"
                onClick={scrollToAbout}
              >
                {t('common.learnMore')}
              </Button>
            </motion.div>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('projects.banques.title')}
              className="rounded-2xl shadow-xl object-cover w-full max-w-md h-64 md:h-80 lg:h-96"
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
      <div id="about-project" className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              {t('projects.banques.about.title')}
            </h2>
          </motion.div>
          
          <motion.div className="space-y-12">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-purple-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              custom={1}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t('projects.banques.about.paragraph1')}
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-purple-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              custom={2}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t('projects.banques.about.paragraph2')}
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-purple-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              custom={3}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t('projects.banques.about.paragraph3')}
              </p>
            </motion.div>
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            className="text-center py-8 border-t mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={4}
          >
            <p className="text-gray-600 mb-6">
              {t('projects.banques.cta.interested')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="primary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
                  {t('common.contact')}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 font-bold transition-all duration-300">
                  {t('sectors.back.button')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SpecializedInvestmentBanksPage; 