import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import image11 from './11.png';
import image12 from './12.png';
import image13 from './13.png';

const ConseilPage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const conseils = [
    {
      titre: t('conseil.fiscal.title'),
      description: (
        <>
          <p className="mb-3">{t('conseil.fiscal.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('conseil.fiscal.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <p className="mt-6 font-montserrat text-xl font-bold">{t('conseil.bi.title')}</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {getTranslationArray('conseil.bi.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image11,
    },
    {
      titre: t('conseil.strategy.title'),
      description: (
        <>
          <p className="mb-3">{t('conseil.strategy.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('conseil.strategy.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <p className="mt-6 font-montserrat text-xl font-bold">{t('conseil.risk.title')}</p>
          <span>{t('conseil.risk.description')}</span>
        </>
      ),
      image: image12,
    },
    {
      titre: t('conseil.hr.title'),
      description: (
        <>
          <p className="mb-3">{t('conseil.hr.description')}</p>
          <span>{t('conseil.hr.subtitle')}</span>
        </>
      ),
      image: image13,
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">{t('conseil.title')}</h1>
        </div>
        <motion.div className="space-y-16">
          {conseils.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={c.titre}
                className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-8 group`}
              >
                {/* Texte */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{c.titre}</h2>
                  <div className="text-gray-700 text-base md:text-lg leading-relaxed">{c.description}</div>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={c.image}
                    alt={c.titre}
                    className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* CTA */}
        <div className="text-center py-8 border-t mt-16">
          <p className="text-gray-600 mb-6">
            {t('conseil.cta.text')}
          </p>
          <Link to="/#contact">
            <Button variant="primary" size="lg">
              {t('conseil.cta.button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConseilPage; 