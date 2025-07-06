import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const subsectors = [
  {
    key: 'agri_food',
    title: {
      fr: 'Agroalimentaire',
      en: 'Agri-food',
    },
    description: {
      fr: "L'agroalimentaire occupe une place centrale dans la chaîne de valeur agricole. Il s'agit de la transformation, du conditionnement et de la valorisation des produits issus de l'agriculture pour répondre aux besoins alimentaires croissants de la population. Ce sous-secteur favorise l'innovation, la création d'emplois et le développement de filières locales compétitives, tout en garantissant la sécurité alimentaire et la qualité des produits destinés à la consommation humaine et animale.",
      en: "Agri-food is at the heart of the agricultural value chain. It involves the processing, packaging, and enhancement of agricultural products to meet the growing food needs of the population. This subsector fosters innovation, job creation, and the development of competitive local industries, while ensuring food security and the quality of products for both human and animal consumption.",
    },
    image: '/imgsec/1.png',
  },
  {
    key: 'subsistence',
    title: {
      fr: 'Agriculture vivrière',
      en: 'Subsistence agriculture',
    },
    description: {
      fr: "L'agriculture vivrière est le pilier de la sécurité alimentaire dans de nombreuses régions. Elle se concentre sur la production de cultures destinées principalement à l'autoconsommation et à l'approvisionnement des marchés locaux. Ce sous-secteur valorise les savoir-faire traditionnels, la diversité des cultures et la résilience des communautés rurales, tout en contribuant à la lutte contre la pauvreté et à la préservation de l'environnement.",
      en: "Subsistence agriculture is the backbone of food security in many regions. It focuses on the production of crops mainly for self-consumption and local market supply. This subsector values traditional know-how, crop diversity, and the resilience of rural communities, while contributing to poverty reduction and environmental preservation.",
    },
    image: '/imgsec/2.png',
  },
  {
    key: 'fishing',
    title: {
      fr: 'Pêche et aquaculture',
      en: 'Fishing and aquaculture',
    },
    description: {
      fr: "La pêche et l'aquaculture représentent des opportunités majeures pour la diversification alimentaire et le développement économique. Ce sous-secteur mise sur l'exploitation durable des ressources halieutiques, la modernisation des techniques de pêche et l'essor de l'aquaculture pour répondre à la demande croissante en protéines animales. Il favorise également la création d'emplois, la valorisation des produits locaux et la préservation des écosystèmes aquatiques.",
      en: "Fishing and aquaculture offer major opportunities for food diversification and economic development. This subsector focuses on the sustainable exploitation of fishery resources, the modernization of fishing techniques, and the growth of aquaculture to meet the increasing demand for animal protein. It also promotes job creation, the enhancement of local products, and the preservation of aquatic ecosystems.",
    },
    image: '/imgsec/3.png',
  },
  {
    key: 'industrial',
    title: {
      fr: 'Agriculture industrielle',
      en: 'Industrial agriculture',
    },
    description: {
      fr: "L'agriculture industrielle se caractérise par une production à grande échelle, hautement mécanisée et orientée vers l'exportation ou l'approvisionnement des industries agroalimentaires. Ce sous-secteur favorise l'intégration de technologies avancées, l'optimisation des rendements et la compétitivité sur les marchés internationaux. Il joue un rôle clé dans la modernisation du secteur agricole, la création de valeur ajoutée et l'attraction d'investissements.",
      en: "Industrial agriculture is characterized by large-scale, highly mechanized production aimed at export or supplying the agri-food industries. This subsector promotes the integration of advanced technologies, yield optimization, and competitiveness in international markets. It plays a key role in modernizing the agricultural sector, creating added value, and attracting investments.",
    },
    image: '/imgsec/4.png',
  },
];

const AgricoleSubsectors: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            {language === 'fr' ? 'Sous-secteurs agricoles' : 'Agricultural Subsectors'}
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

export default AgricoleSubsectors; 