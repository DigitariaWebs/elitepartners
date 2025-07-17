import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectBySlug } from '@/data/projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const ProjectPage: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const { language } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const project = getProjectBySlug(projectSlug || '');

  if (!project) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
            <Link to="/about">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                Retour aux projets
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
      <section className={`relative w-full bg-gradient-to-r ${project.color} py-20 md:py-32 lg:py-40 px-4 overflow-hidden`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat"
            >
              {project.title[language]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-lg md:text-xl font-semibold"
            >
              {project.subtitle[language]}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-base md:text-lg font-normal opacity-90"
            >
              {project.description[language]}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/#contact">
                <Button size="lg" variant="primary" className="bg-white text-gray-900 font-bold px-8 py-3 shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 border-2 border-white/20">
                  En savoir plus
                </Button>
              </Link>
            </motion.div>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src={project.heroImage}
              alt={project.title[language]}
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
      <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              À propos du projet
            </h2>
          </motion.div>
          
          <motion.div className="space-y-12">
            {project.content[language].map((paragraph, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                custom={index + 1}
              >
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              </motion.div>
            ))}
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
              Intéressé par ce projet ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  NOUS CONTACTER
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-bold transition-all duration-300">
                  Retour aux projets
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

export default ProjectPage; 