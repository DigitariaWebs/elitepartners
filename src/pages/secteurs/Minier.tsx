import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const subsectors = [
  {
    key: 'mining_insurance',
    title: {
      fr: 'Assurance minière',
      en: 'Mining insurance',
    },
    description: {
      fr: "L'assurance minière est un pilier essentiel pour la gestion des risques dans l'industrie extractive. Elle protège les investissements contre les aléas naturels, les accidents et les imprévus liés à l'exploitation des ressources. Ce sous-secteur favorise la confiance des investisseurs, la pérennité des projets miniers et la conformité aux normes internationales en matière de sécurité et d'environnement.",
      en: "Mining insurance is a key pillar for risk management in the extractive industry. It protects investments against natural hazards, accidents, and unforeseen events related to resource extraction. This subsector fosters investor confidence, project sustainability, and compliance with international safety and environmental standards.",
    },
    image: '/imgsec/5.png',
  },
  {
    key: 'mining_taxation',
    title: {
      fr: 'Fiscalité et redevances minières',
      en: 'Mining taxation and royalties',
    },
    description: {
      fr: "La fiscalité et les redevances minières structurent la contribution du secteur minier à l'économie nationale. Ce sous-secteur englobe la gestion des taxes, des droits et des obligations financières des entreprises minières, tout en veillant à l'équilibre entre attractivité pour les investisseurs et retombées positives pour l'État et les communautés locales. Il joue un rôle crucial dans la transparence, la redistribution des richesses et le développement durable.",
      en: "Mining taxation and royalties structure the mining sector's contribution to the national economy. This subsector covers the management of taxes, duties, and financial obligations of mining companies, while ensuring a balance between investor attractiveness and positive outcomes for the state and local communities. It plays a crucial role in transparency, wealth redistribution, and sustainable development.",
    },
    image: '/imgsec/6.png',
  },
  {
    key: 'investment_banks',
    title: {
      fr: "Banques d'investissement spécialisées",
      en: 'Specialized investment banks',
    },
    description: {
      fr: "Les banques d'investissement spécialisées accompagnent le financement et la structuration des grands projets miniers. Elles offrent des solutions sur mesure pour lever des fonds, gérer les risques financiers et optimiser la rentabilité des opérations. Ce sous-secteur favorise l'innovation financière, l'accès aux marchés internationaux et la réalisation d'investissements stratégiques à long terme.",
      en: "Specialized investment banks support the financing and structuring of major mining projects. They offer tailored solutions to raise funds, manage financial risks, and optimize operational profitability. This subsector fosters financial innovation, access to international markets, and the realization of long-term strategic investments.",
    },
    image: '/imgsec/7.png',
  },
  {
    key: 'mining_audit',
    title: {
      fr: 'Audit et gestion financière minière',
      en: 'Mining audit and financial management',
    },
    description: {
      fr: "L'audit et la gestion financière minière garantissent la transparence, la conformité et la performance des entreprises du secteur. Ce sous-secteur englobe le contrôle des flux financiers, l'évaluation des risques, la mise en place de bonnes pratiques comptables et la production de rapports fiables pour les parties prenantes. Il contribue à renforcer la gouvernance, la crédibilité et la durabilité des activités minières.",
      en: "Mining audit and financial management ensure transparency, compliance, and performance for companies in the sector. This subsector covers the control of financial flows, risk assessment, implementation of sound accounting practices, and the production of reliable reports for stakeholders. It helps strengthen governance, credibility, and the sustainability of mining activities.",
    },
    image: '/imgsec/8.png',
  },
];

const MinierSubsectors: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            {language === 'fr' ? 'Sous-secteurs miniers' : 'Mining Subsectors'}
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{s.title[language]}</h2>
                  <div className="text-gray-700 text-base md:text-lg leading-relaxed">{s.description[language]}</div>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={s.image}
                    alt={s.title[language]}
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
              {language === 'fr' ? 'Retour aux secteurs' : 'Back to sectors'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MinierSubsectors; 