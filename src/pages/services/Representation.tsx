import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const representations = [
  {
    titre: 'Accompagnement administratif et légal',
    description: (
      <>
        <p className="mb-3">Nous gérons les démarches administratives et juridiques nécessaires pour établir votre entreprise en toute conformité :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Création d'entités légales : Assistance dans l'établissement de votre entreprise en conformité avec les réglementations locales.</li>
          <li>Gestion des autorisations : Obtention des licences et permis nécessaires pour vos activités.</li>
        </ul>
      </>
    ),
    image: '/public/21.png',
  },
  {
    titre: 'Représentation locale',
    description: (
      <>
        <p className="mb-3">Nous agissons en tant que représentant local pour défendre vos intérêts auprès des parties prenantes :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gestion des relations commerciales et institutionnelles publiques et privées : Agir en tant que représentant local pour défendre vos intérêts auprès des parties prenantes.</li>
          <li>Soutien logistique : Coordination des opérations administratives et organisationnelles pour simplifier vos démarches.</li>
        </ul>
      </>
    ),
    image: '/public/22.png',
  },
  {
    titre: 'Stratégies de pénétration de marché',
    description: (
      <>
        <p className="mb-3">Nous élaborons des stratégies adaptées pour maximiser vos chances de succès sur le marché congolais :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Études de faisabilité : Analyse des opportunités de marché et des risques liés à votre implantation.</li>
          <li>Développement de plans d'action : Élaboration de stratégies pour conquérir de nouveaux marchés et segments.</li>
        </ul>
      </>
    ),
    image: '/public/23.png',
  },
];

const RepresentationPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">Représentation & Accompagnement</h1>
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
            Prêt à développer votre entreprise en République Démocratique du Congo ?
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

export default RepresentationPage; 