import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const subsectors = [
  {
    key: 'assurance',
    translationKey: 'sectors.minier.assurance',
    image: '/imgsec/5.png',
  },
  {
    key: 'fiscal',
    translationKey: 'sectors.minier.fiscal',
    image: '/imgsec/6.png',
  },
  {
    key: 'banques',
    translationKey: 'sectors.minier.banques',
    image: '/imgsec/7.png',
  },
  {
    key: 'audit',
    translationKey: 'sectors.minier.audit',
    image: '/imgsec/8.png',
  },
];

const MinierSubsectors: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            {t('sectors.minier.title')}
          </h1>
        </div>
        <motion.div className="space-y-16">
          {subsectors.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={s.key}
                className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-8 group`}
              >
                {/* Texte */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                    {t(`${s.translationKey}.title`)}
                  </h2>
                  <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {t(`${s.translationKey}.description`)}
                  </div>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={s.image}
                    alt={t(`${s.translationKey}.title`)}
                    className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* CTA */}
        <div className="text-center py-8 border-t mt-16">
          <Link to="/secteurs">
            <Button variant="primary" size="lg">
              {t('sectors.back.button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MinierSubsectors; 