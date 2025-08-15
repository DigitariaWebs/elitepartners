import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Award, Shield, Heart, Target, Eye } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

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
    // Order updated: Excellence before Leadership per client request
    {
      icon: <Award className="w-6 h-6" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: t('about.values.leadership.title'),
      description: t('about.values.leadership.description')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('about.values.commitment.title'),
      description: t('about.values.commitment.description')
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTitle
              title={t('about.title')}
              subtitle={t('about.subtitle')}
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
            
            {/* Left Column - Company Overview */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('about.who.title')}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('about.who.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Notre Expertise</h4>
                    <p className="text-gray-600">Plus de 15 ans d'expérience dans le conseil stratégique et l'accompagnement des entreprises vers l'excellence opérationnelle.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Notre Approche</h4>
                    <p className="text-gray-600">Une méthodologie éprouvée basée sur l'analyse rigoureuse et la mise en œuvre pragmatique de solutions sur mesure.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Metrics */}
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">En Chiffres</h4>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Clients Accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Secteurs d'Activité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Taux de Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {/* Mission */}
            <motion.div
              variants={cardVariants}
              className="border-l-4 border-blue-600 pl-8"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('about.mission.title')}</h3>
                  <div className="w-16 h-1 bg-blue-600 rounded"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={cardVariants}
              className="border-l-4 border-blue-600 pl-8"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('about.vision.title')}</h3>
                  <div className="w-16 h-1 bg-blue-600 rounded"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.values.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {valeur.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{valeur.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{valeur.description}</p>
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