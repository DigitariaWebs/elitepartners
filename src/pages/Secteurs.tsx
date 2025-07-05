import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sprout, Hammer, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

const secteurImages = [
  '/agricole.png',
  '/minier.png',
  '/finance.png',
];

const secteurs = [
  {
    id: 'agricole',
    title: 'Secteur Agricole',
    icon: <Sprout className="w-8 h-8 sm:w-10 sm:h-10" />,
    color: 'green',
    description: "L'agriculture est un pilier fondamental de l'économie, offrant des opportunités dans l'agroalimentaire, la pêche et l'agriculture industrielle.",
    sousSecteurs: [
      'Agroalimentaire',
      'Agriculture vivrière',
      'Pêche et aquaculture',
      'Agriculture industrielle'
    ]
  },
  {
    id: 'minier',
    title: 'Secteur Minier',
    icon: <Hammer className="w-8 h-8 sm:w-10 sm:h-10" />,
    color: 'indigo',
    description: "Le secteur minier est au cœur du développement, englobant l'assurance, la fiscalité et la gestion financière des ressources naturelles.",
    sousSecteurs: [
      'Assurance minière',
      'Fiscalité et redevances minières',
      'Banques d\'investissement spécialisées',
      'Audit et gestion financière minière'
    ]
  },
  {
    id: 'financier',
    title: 'Secteur Financier',
    icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />,
    color: 'purple',
    description: "Le secteur financier accompagne la croissance à travers l'assurance, la gestion d'actifs et l'audit financier.",
    sousSecteurs: [
      'Assurance',
      'Gestion d\'actifs',
      'Audit et contrôle financier',
      'Banques d\'investissement'
    ]
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-600',
      hover: 'group-hover:bg-green-100'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      text: 'text-indigo-600',
      hover: 'group-hover:bg-indigo-100'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-600',
      hover: 'group-hover:bg-purple-100'
    }
  };
  return colorMap[color as keyof typeof colorMap];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Secteurs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  // Animation variants pour le hero
  const containerHeroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };
  const itemHeroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const imageHeroVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <DefaultLayout>
      {/* Hero identique à Home, mais avec 3 images côte à côte */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Background Images */}
        <motion.div
          variants={imageHeroVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0 flex w-full h-full"
        >
          <div className="flex w-full h-full">
            <img src="/hero secterus/image.png" alt="Secteur 1" className="w-1/3 h-full object-cover" />
            <img src="/hero secterus/image copy.png" alt="Secteur 2" className="w-1/3 h-full object-cover" />
            <img src="/hero secterus/image copy 2.png" alt="Secteur 3" className="w-1/3 h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Content Hero */}
        <motion.div
          variants={containerHeroVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={itemHeroVariants} className="mb-6 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight font-montserrat"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                 Là où l'opportunité rencontre l'expertise
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemHeroVariants} className="mb-8 sm:mb-12">
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
               De l'agriculture à la finance en passant par le secteur minier, nous transformons les défis des industries clés en leviers de croissance durable. Découvrez les secteurs où nous faisons la différence.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="hidden sm:block">
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-16 h-16 border border-white/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <SectionTitle
            title="Nos secteurs d'intervention"
            subtitle="Découvrez les domaines dans lesquels nous mettons notre expertise à votre service"
            className="mb-16"
          />

          {/* Secteurs Alternés */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {secteurs.map((secteur, i) => {
              const colors = getColorClasses(secteur.color);
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={secteur.id}
                  variants={itemVariants}
                  className={`flex flex-col-reverse md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-8 group`}
                >
                  {/* Texte */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className={`rounded-xl ${colors.bg} ${colors.hover} transition-colors duration-300 p-3`}>
                        <div className={colors.text}>
                          {secteur.icon}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 ml-4 font-montserrat">
                        {secteur.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-base">{secteur.description}</p>
                    <ul className="space-y-3">
                      {secteur.sousSecteurs.map((sousSecteur, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{sousSecteur}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={secteurImages[i]}
                      alt={secteur.title}
                      className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Besoin d'accompagnement dans votre secteur ?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Nos experts sont là pour vous accompagner dans vos projets. 
                Contactez-nous pour discuter de vos besoins spécifiques.
              </p>
              <Link to="/#contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 inline-flex items-center gap-2"
                >
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Secteurs; 