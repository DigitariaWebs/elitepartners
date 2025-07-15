import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import image31 from '/public/31.png';
import image32 from '/public/32.png';
import image33 from '/public/33.png';

const EtudesPage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const etudes = [
    {
      titre: t('etudes.market.title') || 'Études de Marché',
      description: (
        <>
          <p className="mb-3">{t('etudes.market.description') || 'Comprenez votre marché, identifiez les opportunités et prenez des décisions éclairées grâce à nos études de marché approfondies.'}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('etudes.market.bullets').length > 0 ? 
              getTranslationArray('etudes.market.bullets').map((bullet: string, index: number) => (
                <li key={index}>{bullet}</li>
              )) : 
              <>
                <li>Analyse de la concurrence et positionnement stratégique</li>
                <li>Identification des segments de clientèle porteurs</li>
                <li>Étude des tendances et évolutions du secteur</li>
              </>
            }
          </ul>
        </>
      ),
      image: image31,
      link: '/services/etudes/marche'
    },
    {
      titre: t('etudes.economic.title') || 'Études Économiques et Financières',
      description: (
        <>
          <p className="mb-3">{t('etudes.economic.description') || 'Analysez la viabilité économique de vos projets et optimisez vos performances financières.'}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('etudes.economic.bullets').length > 0 ?
              getTranslationArray('etudes.economic.bullets').map((bullet: string, index: number) => (
                <li key={index}>{bullet}</li>
              )) :
              <>
                <li>Études de rentabilité et calcul du ROI</li>
                <li>Modélisation financière et projections</li>
                <li>Valorisation d'entreprise et due diligence</li>
              </>
            }
          </ul>
        </>
      ),
      image: image32,
      link: '/services/etudes/economique'
    },
    {
      titre: t('etudes.strategic.title') || 'Études Stratégiques et Organisationnelles',
      description: (
        <>
          <p className="mb-3">{t('etudes.strategic.description') || 'Transformez votre vision en stratégie gagnante et optimisez votre organisation.'}</p>
          <ul className="list-disc pl-5 space-y-2">
            {getTranslationArray('etudes.strategic.bullets').length > 0 ?
              getTranslationArray('etudes.strategic.bullets').map((bullet: string, index: number) => (
                <li key={index}>{bullet}</li>
              )) :
              <>
                <li>Planification stratégique et vision d'entreprise</li>
                <li>Transformation organisationnelle</li>
                <li>Intelligence stratégique et veille concurrentielle</li>
              </>
            }
          </ul>
        </>
      ),
      image: image33,
      link: '/services/etudes/strategique'
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">{t('etudes.title')}</h1>
        </div>
        <motion.div className="space-y-16">
          {etudes.map((e, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={e.titre}
                className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-8 group`}
              >
                {/* Texte */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{e.titre}</h2>
                  <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{e.description}</div>
                  <Link to={e.link}>
                    <Button variant="primary" size="md" className="transition-transform duration-200 hover:scale-105">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <Link to={e.link}>
                    <img
                      src={e.image}
                      alt={e.titre}
                      className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* CTA */}
        <div className="text-center py-8 border-t mt-16">
          <p className="text-gray-600 mb-6">
            {t('etudes.cta.text')}
          </p>
          <Link to="/#contact">
            <Button variant="primary" size="lg">
              {t('etudes.cta.button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EtudesPage; 