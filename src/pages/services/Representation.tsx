import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

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
      titre: t('representation.administrative.title') || 'Accompagnement Administratif & Légal',
      description: (
        <>
          <p className="mb-3">{t('representation.administrative.description') || 'Assurez votre conformité et naviguez sereinement dans le paysage réglementaire congolais.'}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('representation.administrative.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: '/imgsec/10.png',
    },
    {
      titre: t('representation.locale.title') || 'Représentation Locale',
      description: (
        <>
          <p className="mb-3">{t('representation.locale.description') || 'Devenez un acteur local fort grâce à notre présence et notre réseau sur le terrain.'}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('representation.locale.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: '/imgsec/6.png',
    },
    {
      titre: t('representation.market.title') || 'Pénétration de Marché',
      description: (
        <>
          <p className="mb-3">{t('representation.market.description') || 'Entrez sur le marché avec une stratégie gagnante, de l\'étude à la première vente.'}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('representation.market.bullets').map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
      image: '/imgsec/12.png',
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">{t('representation.title') || 'Représentation & Accompagnement'}</h1>
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
            {t('representation.cta.text') || 'Notre équipe d\'experts est prête à vous accompagner. Planifions ensemble votre succès.'}
          </p>
          <Link to="/#contact">
            <Button variant="primary" size="lg">
              {t('representation.cta.button') || 'Contactez-nous'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepresentationPage; 