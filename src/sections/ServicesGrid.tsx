import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Globe, 
  BarChart3, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  FileText, 
  MapPin, 
  Target,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesGrid: React.FC = () => {
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

  const cardVariants = {
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

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: t('services.grid.conseil.title'),
      description: t('services.grid.conseil.description'),
      features: getTranslationArray('services.grid.conseil.features'),
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
      path: "/services/conseil"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: t('services.grid.representation.title'),
      description: t('services.grid.representation.description'),
      features: getTranslationArray('services.grid.representation.features'),
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      path: "/services/representation"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: t('services.grid.etudes.title'),
      description: t('services.grid.etudes.description'),
      features: getTranslationArray('services.grid.etudes.features'),
      color: "violet",
      gradient: "from-violet-500 to-purple-500",
      path: "/services/etudes"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        iconBg: "bg-indigo-100 group-hover:bg-indigo-200",
        iconText: "text-indigo-600",
        accent: "text-indigo-600",
        border: "group-hover:border-indigo-200"
      },
      purple: {
        iconBg: "bg-purple-100 group-hover:bg-purple-200", 
        iconText: "text-purple-600",
        accent: "text-purple-600",
        border: "group-hover:border-purple-200"
      },
      violet: {
        iconBg: "bg-violet-100 group-hover:bg-violet-200",
        iconText: "text-violet-600", 
        accent: "text-violet-600",
        border: "group-hover:border-violet-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section ref={ref} className="py-12 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-50 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-20 sm:w-24 h-20 sm:h-24 bg-purple-50 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-violet-50 rounded-full opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-10 sm:mb-16">
            <SectionTitle
              title={t('services.grid.title')}
              subtitle={t('services.grid.subtitle')}
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              
              return (
                <Link key={index} to={service.path}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                    className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-opacity-50 relative overflow-hidden h-full cursor-pointer"
                >
                  {/* Subtle solid overlay on hover (replacing gradient) */}
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110`}>
                        <div className={`${colors.iconText} transition-colors duration-300 transform scale-75 sm:scale-100`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300 font-montserrat">
                      {service.title}
                    </h3>

                    {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      <Link to={service.path} className="block">
                        <button
                          className="mt-2 mb-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-200 px-5 py-2 text-sm sm:text-base border-0"
                          type="button"
                        >
                          <span>{t('common.learnMore')}</span>
                          <ArrowRight className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </Link>

                    {/* Features List */}
                      <div className="space-y-2 sm:space-y-3">
                        <h4 className={`font-semibold ${colors.accent} text-xs sm:text-sm uppercase tracking-wide`}>
                        {t('services.grid.features.title')}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: (index * 0.2) + (featureIndex * 0.1) 
                            }}
                              className="flex items-start gap-2 sm:gap-3 text-sm"
                          >
                            <CheckCircle className={`w-4 h-4 ${colors.iconText} mt-0.5 flex-shrink-0`} />
                              <span className="text-gray-700 leading-relaxed text-xs sm:text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.iconBg} rounded-full flex items-center justify-center`}>
                          <TrendingUp className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.iconText}`} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div 
            variants={cardVariants}
            className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('services.grid.cta.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              {t('services.grid.cta.description')}
            </p>
            <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('services.grid.cta.button')}
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;