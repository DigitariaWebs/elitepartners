import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import image11 from './11.png';
import image12 from './12.png';
import image13 from './13.png';

const conseils = [
  {
    titre: 'Conseil fiscal et conformité réglementaire',
    description: (
      <>
        <p className="mb-3">Nous vous aidons à naviguer dans les complexités fiscales et réglementaires grâce à des solutions adaptées :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Optimisation fiscale pour réduire vos charges tout en respectant les lois en vigueur.</li>
          <li>Gestion de la conformité selon les normes locales et internationales.</li>
          <li>Diagnostic fiscal pour identifier les risques et opportunités.</li>
        </ul>
        <p className="mt-6 font-montserrat text-xl font-bold">Business Intelligence et Data Analytics</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Conception et automatisation de rapports interactifs : Création de tableaux de bord dynamiques avec Microsoft Power BI et Excel pour une analyse rapide et visuelle des données.</li>
          <li>Reporting financier et analyse de performance : Suivi des indicateurs financiers et organisationnels pour une meilleure gestion.</li>
          <li>Modélisation et exploration des données : Identification des tendances et réalisation de prévisions pour guider les décisions stratégiques.</li>
          <li>Formation et accompagnement : Développement des compétences de vos équipes pour utiliser efficacement les outils d'analyse et de reporting.</li>
        </ul>
      </>
    ),
    image: image11,
  },
  {
    titre: "Conseil en Stratégie et Transformation d'Entreprise",
    description: (
      <>
        <p className="mb-3">Nous aidons les entreprises à définir leur vision stratégique et à la traduire en actions concrètes. Nos services incluent :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Élaboration de stratégies de croissance, d'expansion ou de diversification.</li>
          <li>Optimisation des processus opérationnels pour améliorer l'efficacité.</li>
          <li>Transformation organisationnelle pour s'adapter aux défis économiques et technologiques.</li>
        </ul>
        <p className="mt-6 font-montserrat text-xl font-bold">Gestion des risques</p>
        <span>Nous identifions, évaluons et élaborons des plans de gestion pour les risques financiers, stratégiques et opérationnels afin de garantir la pérennité et la résilience de votre entreprise.</span>
      </>
    ),
    image: image12,
  },
  {
    titre: 'Conseil en Gestion des Ressources humaines',
    description: (
      <>
        <p className="mb-3">Nous développons des stratégies RH pour attirer, fidéliser et développer les talents, tout en alignant les équipes sur les objectifs stratégiques de l'entreprise.</p>
        <span>Pour une organisation agile, performante et résiliente, capable de s'adapter aux défis économiques et technologiques.</span>
      </>
    ),
    image: image13,
  },
];

const ConseilPage: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">Services-Conseils</h1>
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
            Besoin d'accompagnement pour optimiser votre gestion fiscale ou améliorer votre business intelligence ?
          </p>
          <Link to="/#contact">
            <Button variant="primary" size="lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConseilPage; 