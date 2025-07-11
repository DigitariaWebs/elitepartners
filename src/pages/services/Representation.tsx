import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    }
  }
};

const ServiceCard = ({ title, description, link, imageUrl, bgColorClass, textColorClass, buttonBgClass, buttonTextColorClass }) => (
  <motion.div 
    className={`rounded-xl shadow-lg overflow-hidden h-full flex flex-col ${bgColorClass}`}
    variants={cardVariants}
    whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
  >
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className={`text-xl font-bold mb-2 ${textColorClass}`}>{title}</h3>
      <p className={`mb-4 flex-grow ${textColorClass} opacity-90`}>{description}</p>
      <Link to={link} className="mt-auto">
        <button className={`font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 ${buttonBgClass} ${buttonTextColorClass} hover:opacity-90`}>
          En savoir plus <FaArrowRight />
        </button>
      </Link>
    </div>
  </motion.div>
);

const RepresentationIndexPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="bg-gray-50">
        {/* Header */}
        <header className="text-center py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-800"
            >
              Représentation & Accompagnement
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto"
            >
              Votre partenaire de confiance pour établir et développer votre présence en République Démocratique du Congo. Nous transformons les défis en opportunités.
            </motion.p>
          </div>
        </header>

        {/* Services Grid */}
        <main className="py-16 md:py-20">
          <motion.div 
            className="container mx-auto px-4"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <ServiceCard 
                title="Accompagnement Administratif & Légal"
                description="Assurez votre conformité et naviguez sereinement dans le paysage réglementaire congolais."
                link="/services/representation/administratif"
                imageUrl="/imgsec/10.png"
                bgColorClass="bg-blue-900"
                textColorClass="text-white"
                buttonBgClass="bg-white"
                buttonTextColorClass="text-blue-600"
              />
              <ServiceCard 
                title="Représentation Locale"
                description="Devenez un acteur local fort grâce à notre présence et notre réseau sur le terrain."
                link="/services/representation/locale"
                imageUrl="/imgsec/6.png"
                bgColorClass="bg-purple-900"
                textColorClass="text-white"
                buttonBgClass="bg-white"
                buttonTextColorClass="text-purple-600"
              />
              <ServiceCard 
                title="Pénétration de Marché"
                description="Entrez sur le marché avec une stratégie gagnante, de l'étude à la première vente."
                link="/services/representation/penetration-marche"
                imageUrl="/imgsec/12.png"
                bgColorClass="bg-teal-900"
                textColorClass="text-white"
                buttonBgClass="bg-white"
                buttonTextColorClass="text-teal-600"
              />
            </div>
          </motion.div>
        </main>

        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Prêt à développer votre entreprise en République Démocratique du Congo ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à vous accompagner. Planifions ensemble votre succès.
            </p>
            <Link to="/#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-shadow duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-nous
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default RepresentationIndexPage; 