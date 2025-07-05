import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Heart, ArrowRight, Target, Eye, Compass } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { CONTACT_INFO } from '@/constants';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const valeurs = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Leadership",
      description: "Nous cultivons un leadership éthique qui inspire confiance et respect."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Nous nous efforçons constamment d'atteindre l'excellence dans tous nos services et interactions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intégrité",
      description: "Nous maintenons une intégrité inébranlable dans toutes nos actions."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Engagement",
      description: "Nous nous engageons à surpasser les attentes en fournissant des services de qualité supérieure."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTitle
              title="À propos de nous"
              subtitle="Découvrez ElitePartners Group SARL, votre partenaire stratégique pour l'excellence en République Démocratique du Congo"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Left Column - Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 h-96 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Logo image from footer */}
                  <img 
                    src={CONTACT_INFO.logo}
                    alt="Elite Partners Logo"
                    className="h-40 w-auto"
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Qui sommes-nous ?
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ElitePartners Group SARL est un cabinet de conseil spécialisé dans l'accompagnement 
                  des entreprises à chaque étape de leur développement. Que ce soit pour optimiser vos 
                  opérations, pénétrer un nouveau marché ou sécuriser vos activités, nous vous apportons 
                  une expertise locale combinée à des standards internationaux.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Mission Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Notre Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Créer de la valeur durable pour nos clients en leur permettant de relever leurs 
                  défis les plus complexes et de transformer leurs ambitions en réalisations concrètes. 
                  ElitePartners Group SARL : votre partenaire pour l'excellence stratégique, 
                  opérationnelle et financière.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Notre Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  ElitePartners aspire à devenir le leader incontesté dans la facilitation des 
                  investissements canadiens en RDC. Nous nous engageons à développer des solutions 
                  intégrées qui maximisent la rentabilité de nos clients tout en assurant la 
                  conformité et le respect des meilleures pratiques éthiques.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
              <p className="text-lg text-gray-600">
                Les principes qui guident chacune de nos actions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-100 text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                      {valeur.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{valeur.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{valeur.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;