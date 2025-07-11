import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import image13 from './13.png';

const RHPage: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={image13}
              alt={t('conseil.hr.title')}
              className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96"
            />
          </div>
          {/* Texte */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('conseil.hr.title')}</h1>
            <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              <p className="mb-3">{t('conseil.hr.description')}</p>
              <span>{t('conseil.hr.subtitle')}</span>
            </div>
            <div className="mt-8">
              <p className="text-gray-600 mb-6">{t('conseil.cta.text')}</p>
              <Link to="/#contact">
                <Button variant="primary" size="lg">
                  {t('conseil.cta.button')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RHPage; 