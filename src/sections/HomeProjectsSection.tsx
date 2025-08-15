import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

// Display a curated subset (first 3 for now) with concise cards
const HomeProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const showcase = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50" id="projects-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Exemples de projets' : 'Sample Project Scenarios'}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Ayez rapidement une idée concrète de ce que nous réalisons. Chaque projet illustre comment nous transformons une vision en résultats mesurables.'
              : 'Get a concrete idea of what we deliver. Each example shows how we turn vision into measurable outcomes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcase.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                <img
                  src={p.heroImage}
                  alt={p.title[language as 'fr' | 'en']}
                  className="w-full h-full object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {p.title[language as 'fr' | 'en']}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {p.subtitle[language as 'fr' | 'en']}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  {p.description[language as 'fr' | 'en']}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                  >
                    {language === 'fr' ? 'Voir le projet' : 'View project'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects/agrobusiness"
            className="inline-flex items-center px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm font-semibold"
          >
            {language === 'fr' ? 'Explorer plus de projets' : 'Explore more projects'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectsSection;
