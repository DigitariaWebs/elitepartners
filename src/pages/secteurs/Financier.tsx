import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const subsectors = [
  {
    key: 'insurance',
    title: {
      fr: 'Assurance',
      en: 'Insurance',
    },
    description: {
      fr: "Le secteur de l'assurance joue un rôle fondamental dans la protection des personnes, des biens et des investissements. Il propose des solutions adaptées pour couvrir les risques liés à la vie, à la santé, à l'activité professionnelle ou aux biens matériels. Ce sous-secteur favorise la stabilité économique, la confiance des acteurs et l'accès à des services financiers innovants, tout en contribuant à la sécurité et à la sérénité des entreprises et des particuliers.",
      en: "The insurance sector plays a fundamental role in protecting people, property, and investments. It offers tailored solutions to cover risks related to life, health, professional activity, or material assets. This subsector fosters economic stability, stakeholder confidence, and access to innovative financial services, while contributing to the security and peace of mind of businesses and individuals.",
    },
    image: '/imgsec/9.png',
  },
  {
    key: 'asset_management',
    title: {
      fr: 'Gestion d\'actifs',
      en: 'Asset management',
    },
    description: {
      fr: "La gestion d'actifs consiste à optimiser la valorisation et la rentabilité des portefeuilles financiers, immobiliers ou industriels. Ce sous-secteur met en œuvre des stratégies personnalisées pour répondre aux objectifs de croissance, de sécurité et de diversification des investisseurs. Il favorise l'innovation, la transparence et la performance, tout en accompagnant les clients dans la réalisation de leurs ambitions patrimoniales.",
      en: "Asset management is about optimizing the value and profitability of financial, real estate, or industrial portfolios. This subsector implements personalized strategies to meet investors' growth, security, and diversification objectives. It promotes innovation, transparency, and performance, while supporting clients in achieving their wealth ambitions.",
    },
    image: '/imgsec/10.png',
  },
  {
    key: 'financial_audit',
    title: {
      fr: 'Audit et contrôle financier',
      en: 'Financial audit and control',
    },
    description: {
      fr: "L'audit et le contrôle financier garantissent la fiabilité, la conformité et la transparence des opérations économiques. Ce sous-secteur englobe l'analyse des flux financiers, la vérification des comptes, l'évaluation des risques et la mise en place de procédures rigoureuses. Il contribue à renforcer la gouvernance, la crédibilité et la confiance des parties prenantes dans la gestion des ressources.",
      en: "Financial audit and control ensure the reliability, compliance, and transparency of economic operations. This subsector covers the analysis of financial flows, account verification, risk assessment, and the implementation of rigorous procedures. It helps strengthen governance, credibility, and stakeholder confidence in resource management.",
    },
    image: '/imgsec/11.png',
  },
  {
    key: 'investment_banks',
    title: {
      fr: "Banques d'investissement",
      en: 'Investment banks',
    },
    description: {
      fr: "Les banques d'investissement accompagnent les entreprises et les institutions dans leurs opérations de financement, de fusion-acquisition et de développement stratégique. Ce sous-secteur propose des solutions sur mesure pour lever des fonds, structurer des transactions complexes et accéder aux marchés internationaux. Il favorise l'innovation financière, la croissance et la compétitivité à l'échelle mondiale.",
      en: "Investment banks support companies and institutions in their financing, mergers and acquisitions, and strategic development operations. This subsector offers tailored solutions to raise funds, structure complex transactions, and access international markets. It fosters financial innovation, growth, and global competitiveness.",
    },
    image: '/imgsec/12.png',
  },
];

const FinancierSubsectors: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            {language === 'fr' ? 'Sous-secteurs financiers' : 'Financial Subsectors'}
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

export default FinancierSubsectors; 