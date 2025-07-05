import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DefaultLayout from '@/layouts/DefaultLayout';
import ServicesGrid from '@/sections/ServicesGrid';

const heroImages = [
  'https://elitepartners-rdc.com/wp-content/uploads/2025/06/2151937275-2.jpg',
  'https://elitepartners-rdc.com/wp-content/uploads/2025/06/443-1.jpg',
  'https://elitepartners-rdc.com/wp-content/uploads/2025/06/2151915149-1.jpg',
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

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
      {/* Hero identique à Secteurs, avec 3 images externes */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Background Images */}
        <motion.div
          variants={imageHeroVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0 flex w-full h-full"
        >
          <div className="flex w-full h-full">
            <img src={heroImages[0]} alt="Service 1" className="w-1/3 h-full object-cover" />
            <img src={heroImages[1]} alt="Service 2" className="w-1/3 h-full object-cover" />
            <img src={heroImages[2]} alt="Service 3" className="w-1/3 h-full object-cover" />
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
                 Nos services, votre réussite
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
              Découvrez comment nos solutions sur-mesure transforment vos défis en opportunités de croissance durable, dans tous les secteurs clés.
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

      <div className="py-16">
        <ServicesGrid />
      </div>
    </DefaultLayout>
  );
};

export default Services;