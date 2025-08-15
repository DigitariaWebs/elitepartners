import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import image32 from '/32.png?url';
import { BarChart, DollarSign, TrendingUp, Briefcase, PieChart, Users, Shield, Lightbulb, Info } from 'lucide-react';

const icons = [
  BarChart, DollarSign, TrendingUp, Briefcase, PieChart, Users, Shield, Lightbulb
];

const EconomiquePage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Helper function to get translation as array
  const getTranslationArray = (key: string): string[] => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };

  const avantages = [
    { icon: Info, translationKey: 'services.economique.avantages.vision' },
    { icon: TrendingUp, translationKey: 'services.economique.avantages.croissance' },
    { icon: Shield, translationKey: 'services.economique.avantages.risques' },
    { icon: Users, translationKey: 'services.economique.avantages.impact' },
  ];

  const sections = [
    {
      translationKey: 'services.economique.sections.resume',
    },
    {
      translationKey: 'services.economique.sections.modele',
    },
    {
      translationKey: 'services.economique.sections.previsions',
    },
    {
      translationKey: 'services.economique.sections.financement',
    },
    {
      translationKey: 'services.economique.sections.viabilite',
    },
    {
      translationKey: 'services.economique.sections.retombees',
    },
    {
      translationKey: 'services.economique.sections.risques',
    },
    {
      translationKey: 'services.economique.sections.hypotheses',
    },
  ];

  return (
    <DefaultLayout>
      {/* Hero immersif */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={image32} alt={t('services.economique.title')} className="absolute inset-0 w-full h-full object-cover object-center blur-sm scale-105" style={{zIndex:1}} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/60 to-purple-900/80" style={{zIndex:2}} />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat drop-shadow-lg">{t('services.economique.title')}</motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">{t('services.economique.subtitle')}</p>
        </div>
      </section>

      {/* Pourquoi une étude économique ? */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 font-montserrat">{t('services.economique.why.title')}</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {avantages.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.translationKey} className="flex flex-col items-center bg-blue-50 rounded-2xl shadow p-6 h-full">
                <Icon className="w-10 h-10 text-blue-700 mb-3" />
                <h3 className="text-lg font-bold text-blue-900 mb-2">{t(`${a.translationKey}.title`)}</h3>
                <p className="text-gray-700 text-base">{t(`${a.translationKey}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Grille de 8 blocs premium */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={sec.translationKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="flex flex-col items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-200 group"
              >
                <div className="flex items-center mb-4">
                  <span className="mr-3 text-white bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">{idx + 1}</span>
                  <Icon className="w-8 h-8 text-blue-700 group-hover:text-purple-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 font-montserrat">{t(`${sec.translationKey}.title`)}</h3>
                <p className="text-gray-700 text-base mb-3 whitespace-pre-line">{t(`${sec.translationKey}.content`)}</p>
                {getTranslationArray(`${sec.translationKey}.list`).length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
                    {getTranslationArray(`${sec.translationKey}.list`).map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {t(`${sec.translationKey}.end`) && <p className="text-gray-700 text-base mt-3">{t(`${sec.translationKey}.end`)}</p>}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">{t('services.economique.cta.title')}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{t('services.economique.cta.subtitle')}</p>
        <a href="/#contact" className="inline-block bg-white text-blue-700 font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300">{t('services.economique.cta.button')}</a>
      </section>
    </DefaultLayout>
  );
};

export default EconomiquePage; 