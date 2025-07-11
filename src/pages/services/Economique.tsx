import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import DefaultLayout from '@/layouts/DefaultLayout';
import image32 from '/public/32.png';
import { BarChart, DollarSign, TrendingUp, Briefcase, PieChart, Users, Shield, Lightbulb, Info } from 'lucide-react';

const icons = [
  BarChart, DollarSign, TrendingUp, Briefcase, PieChart, Users, Shield, Lightbulb
];

const sections = [
  {
    title: 'Résumé économique',
    content: `Cette étude économique vise à démontrer la solidité et la viabilité du modèle d’affaires envisagé. En s’appuyant sur les données issues de l’étude de marché, elle évalue la structure des coûts, les sources de revenus, ainsi que les conditions nécessaires à l’atteinte de la rentabilité.`
  },
  {
    title: 'Modèle économique',
    content: `Le modèle économique repose sur un équilibre entre coûts de développement, efforts d’acquisition client et génération de revenus à travers une offre claire et évolutive. Il prend en compte :`,
    list: [
      'Une ou plusieurs sources de revenus définies en fonction du positionnement stratégique.',
      'Une structure de coûts optimisée combinant charges fixes et variables.',
      'Des marges prévues permettant une exploitation durable et un potentiel de croissance à moyen terme.',
      'Un seuil de rentabilité atteignable en fonction de l’évolution naturelle de la clientèle et des efforts commerciaux.'
    ]
  },
  {
    title: 'Prévisions financières',
    content: `Des prévisions financières ont été établies sur un horizon pluriannuel, avec une attention particulière portée à :`,
    list: [
      'L’évolution progressive du chiffre d’affaires.',
      'La maîtrise des charges opérationnelles.',
      'La constitution d’une trésorerie suffisante pour soutenir la croissance.',
      'La mise en place d’indicateurs de suivi (résultat, flux de trésorerie, rentabilité).'
    ]
  },
  {
    title: 'Besoins en financement',
    content: `Le projet nécessite un apport initial afin de couvrir les premières phases critiques, incluant le développement, la mise en marché et le recrutement des ressources essentielles. Un plan de financement a été conçu pour répartir les besoins entre les fonds propres, les aides disponibles et les partenaires financiers potentiels.`
  },
  {
    title: 'Viabilité et rentabilité',
    content: `L'analyse économique met en évidence un retour sur investissement réaliste à moyen terme, reposant sur :`,
    list: [
      'Une montée en charge progressive et maîtrisée.',
      'Une fidélisation efficace de la clientèle.',
      'Une stratégie de rentabilité basée sur la récurrence et la valeur moyenne par client.',
      'Un alignement entre les coûts d’acquisition et la valeur générée par client sur le long terme.'
    ]
  },
  {
    title: 'Retombées économiques',
    content: `Au-delà des indicateurs internes de performance, le projet présente des retombées positives à l’échelle locale et sectorielle :`,
    list: [
      'Création d’emplois directs et indirects.',
      'Valorisation des compétences locales.',
      'Dynamisation d’un segment de marché en mutation.',
      'Effets induits sur les partenaires, sous-traitants ou écosystèmes connexes.'
    ]
  },
  {
    title: 'Risques économiques',
    content: `Plusieurs risques ont été identifiés, notamment :`,
    list: [
      'Les fluctuations liées au contexte économique général.',
      'Les variations de coût liées à l’acquisition client ou à la chaîne de production.',
      'La dépendance potentielle à certains fournisseurs ou canaux de distribution.'
    ],
    end: `Des stratégies d’atténuation sont prévues : plan de contingence, diversification des canaux, automatisation, partenariats stratégiques.`
  },
  {
    title: 'Hypothèses retenues',
    content: `L’ensemble des prévisions repose sur des hypothèses prudentes et cohérentes avec les tendances observées sur le marché :`,
    list: [
      'Taux de croissance du secteur.',
      'Évolution des comportements consommateurs.',
      'Durée du cycle de vente.',
      'Taux d’adoption de l’offre selon les segments cibles.'
    ]
  }
];

const avantages = [
  { icon: Info, title: 'Vision stratégique', desc: 'Prendre des décisions éclairées et anticiper les évolutions du marché.' },
  { icon: TrendingUp, title: 'Croissance durable', desc: 'Optimiser la rentabilité et la viabilité de votre projet.' },
  { icon: Shield, title: 'Gestion des risques', desc: 'Identifier et atténuer les risques économiques majeurs.' },
  { icon: Users, title: 'Impact local', desc: 'Créer de la valeur et des emplois sur votre territoire.' },
];

const EconomiquePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <DefaultLayout>
      {/* Hero immersif */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={image32} alt="Études économiques" className="absolute inset-0 w-full h-full object-cover object-center blur-sm scale-105" style={{zIndex:1}} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/60 to-purple-900/80" style={{zIndex:2}} />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat drop-shadow-lg">Études économiques</motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">Analyse de la viabilité, des risques et des opportunités économiques de votre projet.</p>
        </div>
      </section>

      {/* Pourquoi une étude économique ? */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 font-montserrat">Pourquoi réaliser une étude économique ?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {avantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="flex flex-col items-center bg-blue-50 rounded-2xl shadow p-6 h-full">
                <Icon className="w-10 h-10 text-blue-700 mb-3" />
                <h3 className="text-lg font-bold text-blue-900 mb-2">{a.title}</h3>
                <p className="text-gray-700 text-base">{a.desc}</p>
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
                key={sec.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="flex flex-col items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-200 group"
              >
                <div className="flex items-center mb-4">
                  <span className="inline-block mr-3 text-white bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">{idx + 1}</span>
                  <Icon className="w-8 h-8 text-blue-700 group-hover:text-purple-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 font-montserrat">{sec.title}</h3>
                <p className="text-gray-700 text-base mb-3 whitespace-pre-line">{sec.content}</p>
                {sec.list && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
                    {sec.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {sec.end && <p className="text-gray-700 text-base mt-3">{sec.end}</p>}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">Besoin d’une étude économique personnalisée ?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Contactez-nous pour discuter de votre projet et obtenir une analyse sur-mesure adaptée à vos besoins et à votre secteur.</p>
        <a href="/#contact" className="inline-block bg-white text-blue-700 font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300">Discuter de votre projet</a>
      </section>
    </DefaultLayout>
  );
};

export default EconomiquePage; 