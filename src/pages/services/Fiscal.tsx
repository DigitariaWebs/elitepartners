import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import image11 from './11.png';
import image12 from './12.png';
import image13 from './13.png';
// Hero image
const heroImage = '/home images/a-professional-portrait-photograph-showc_T4WBGdZ8QHGxhxXJOCKFJw_w6Rmz9tRQBablPo2Mv7t2g.jpeg';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const FiscalPage: React.FC = () => {
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
              Optimisez votre fiscalité et vos données<br />avec notre expertise !
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              Bénéficiez d’un accompagnement sur-mesure pour la conformité réglementaire, l’optimisation fiscale et la valorisation de vos données. Nos experts vous aident à transformer vos obligations en véritables leviers de performance.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="primary" className="bg-white text-blue-800 font-bold px-8 py-3 shadow-md hover:bg-gray-100">
                Demander un diagnostic gratuit
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Conseil fiscal et data analytics"
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
          {/* Conseil fiscal et conformité réglementaire */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={1}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={image11} alt="Conseil fiscal et conformité réglementaire" className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">Conseil fiscal et conformité réglementaire</h1>
              <p className="text-gray-700 text-base md:text-lg mb-3">Nous vous aidons à naviguer dans les complexités fiscales et réglementaires grâce à des solutions adaptées :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                <li>Optimisation fiscale pour réduire vos charges tout en respectant les lois en vigueur.</li>
                <li>Gestion de la conformité selon les normes locales et internationales.</li>
                <li>Diagnostic fiscal pour identifier les risques et opportunités.</li>
              </ul>
             
            </div>
          </motion.div>

          {/* Conseil en Stratégie et Transformation d’Entreprise */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={2}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={image12} alt="Conseil en Stratégie et Transformation d’Entreprise" className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold font-montserrat mt-8 mb-2">Business Intelligence et Data Analytics</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">Nous exploitons vos données pour en faire un levier stratégique et améliorer votre prise de décision.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                <li>Conception et automatisation de rapports interactifs : Création de tableaux de bord dynamiques avec Microsoft Power BI et Excel pour une analyse rapide et visuelle des données.</li>
                <li>Reporting financier et analyse de performance : Suivi des indicateurs financiers et organisationnels pour une meilleure gestion.</li>
                <li>Modélisation et exploration des données : Identification des tendances et réalisation de prévisions pour guider les décisions stratégiques.</li>
                <li>Formation et accompagnement : Développement des compétences de vos équipes pour utiliser efficacement les outils d’analyse et de reporting.</li>
              </ul> </div>
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
            <p className="text-gray-600 mb-6 text-xl font-semibold">Vous êtes intéressés par ce service ?</p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                CLIQUEZ ICI
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FiscalPage; 