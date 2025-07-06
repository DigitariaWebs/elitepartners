import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import { Settings, Globe, BarChart3 } from 'lucide-react';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('services.section.conseil.title'),
      description: t('services.section.conseil.description'),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('services.section.representation.title'),
      description: t('services.section.representation.description'),
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('services.section.etudes.title'),
      description: t('services.section.etudes.description'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('services.section.title')}
          subtitle={t('services.section.subtitle')}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg">
              {t('services.section.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;