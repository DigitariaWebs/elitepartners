import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import image13 from './13.png';
// Hero image RH
const heroImage = '/rh.jpg';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const RHPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              Développez votre capital humain<br />avec notre expertise RH !
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              Attirez, fidélisez et faites grandir vos talents grâce à des stratégies RH innovantes et personnalisées. Nous accompagnons vos équipes pour une organisation agile, performante et résiliente.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="primary" className="bg-white text-blue-800 font-bold px-8 py-3 shadow-md hover:bg-gray-100">
                Demander un diagnostic RH gratuit
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Conseil RH et gestion des talents"
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
          {/* Section RH principale */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={1}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={image13} alt="Conseil RH et gestion des talents" className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">Conseil RH et gestion des talents</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">Nous vous accompagnons dans la structuration et l’optimisation de votre politique RH :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                <li>Stratégies d’attraction et de fidélisation des talents.</li>
                <li>Développement des compétences et gestion des carrières.</li>
                <li>Optimisation de l’organisation et de la performance RH.</li>
                <li>Accompagnement au changement et transformation culturelle.</li>
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
            custom={2}
          >
            <p className="text-gray-600 mb-6 text-xl font-semibold">Vous souhaitez booster votre capital humain ?</p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                Contactez-nous
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RHPage; 