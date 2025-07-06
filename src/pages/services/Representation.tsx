import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import image21 from '/public/21.png';
import image22 from '/public/22.png';
import image23 from '/public/23.png';

const RepresentationPage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const representations = [
    {
      titre: t('representation.admin.title'),
      description: (
        <>
          <p className="mb-3">{t('representation.admin.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('representation.admin.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image21,
    },
    {
      titre: t('representation.local.title'),
      description: (
        <>
          <p className="mb-3">{t('representation.local.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('representation.local.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image22,
    },
    {
      titre: t('representation.market.title'),
      description: (
        <>
          <p className="mb-3">{t('representation.market.description')}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('representation.market.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: image23,
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">{t('representation.title')}</h1>
        </div>
        <motion.div className="space-y-16">
          {representations.map((r, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={r.titre}
                className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-8 group`}
              >
                {/* Texte */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{r.titre}</h2>
                  <div className="text-gray-700 text-base md:text-lg leading-relaxed">{r.description}</div>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={r.image}
                    alt={r.titre}
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
            {t('representation.cta.text')}
          </p>
          <Link to="/#contact">
            <Button variant="primary" size="lg">
              {t('representation.cta.button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepresentationPage; 