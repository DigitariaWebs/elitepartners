import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const etudes = [
  {
    titre: 'Études de marché',
    description: (
      <>
        <p className="mb-3">Nous analysons les dynamiques du marché pour vous aider à comprendre votre environnement et à identifier les opportunités :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Analyse de la demande pour évaluer les besoins des consommateurs.</li>
          <li>Études concurrentielles pour comprendre les forces et faiblesses des acteurs du marché.</li>
        </ul>
      </>
    ),
    image: '/public/31.png',
  },
  {
    titre: 'Études économiques',
    description: (
      <>
        <p className="mb-3">Nous vous fournissons des analyses économiques détaillées pour guider vos projets à court, moyen et long terme :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Analyse des tendances sectorielles et macroéconomiques.</li>
          <li>Études d'impact pour évaluer les effets économiques et sociaux de vos projets.</li>
        </ul>
      </>
    ),
    image: '/public/32.png',
  },
  {
    titre: 'Évaluations stratégiques',
    description: (
      <>
        <p className="mb-3">Nous réalisons des études approfondies pour évaluer la viabilité de vos projets et initiatives :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Études de faisabilité technique, financière et opérationnelle.</li>
          <li>Analyses sectorielles pour identifier les opportunités de croissance et les défis à relever.</li>
        </ul>
      </>
    ),
    image: '/public/33.png',
  },
];

const EtudesPage: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">Études & Recherches</h1>
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
                  <div className="text-gray-700 text-base md:text-lg leading-relaxed">{e.description}</div>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={e.image}
                    alt={e.titre}
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
            Besoin d'une étude de marché ou d'une analyse approfondie pour votre entreprise ?
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

export default EtudesPage; 