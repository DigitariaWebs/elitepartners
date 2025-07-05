import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sprout, Hammer, Briefcase, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

const Secteurs: React.FC = () => {
  const secteurs = [
    {
      id: 'agricole',
      title: 'Secteur Agricole',
      icon: <Sprout className="w-8 h-8 sm:w-10 sm:h-10" />,
      color: 'green',
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
      color: 'blue',
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
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-600',
        hover: 'group-hover:bg-blue-100'
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

  return (
    <DefaultLayout>
      <div className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-gray-700 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="font-medium text-gray-900">Secteurs</li>
            </ol>
          </nav>

          {/* Title */}
          <SectionTitle
            title="Nos secteurs d'intervention"
            subtitle="Découvrez les domaines dans lesquels nous mettons notre expertise à votre service"
            className="mb-16"
          />

          {/* Secteurs Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {secteurs.map((secteur) => {
              const colors = getColorClasses(secteur.color);
              
              return (
                <motion.div
                  key={secteur.id}
                  variants={itemVariants}
                  className={`group rounded-2xl border ${colors.border} ${colors.bg} p-6 sm:p-8 transition-all duration-300 hover:shadow-lg`}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className={`rounded-xl ${colors.bg} ${colors.hover} transition-colors duration-300 p-3`}>
                      <div className={colors.text}>
                        {secteur.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 ml-4">
                      {secteur.title}
                    </h3>
                  </div>

                  {/* Sous-secteurs List */}
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