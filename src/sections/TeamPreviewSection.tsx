import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamPreviewSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id="team-preview" ref={ref} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <SectionTitle
              title={t('team.preview.title')}
              subtitle={t('team.preview.subtitle')}
              align="left"
              className="mb-0"
            />
          </motion.div>

          {/* Overview Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {t('team.preview.overview')}
            </p>
            <Link to="/about#team">
              <Button variant="outline" size="lg" className="font-bold">
                {t('team.preview.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreviewSection;
