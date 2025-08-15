import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Star, Award, Shield, Heart, Target, Eye } from "lucide-react";

// Professional African business images from Unsplash
const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Company values with icons from AboutSection
  const valeurs = [
    // Order updated: Excellence before Leadership per client request
    {
      icon: <Award className="w-6 h-6" />,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: t("about.values.leadership.title"),
      description: t("about.values.leadership.description"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.description"),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("about.values.commitment.title"),
      description: t("about.values.commitment.description"),
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-violet-600 to-violet-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              {t("about.hero.title")}
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              {t("about.hero.subtitle")}
            </p>
            <div className="flex justify-center sm:justify-start">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-violet-800 transition-all duration-300"
                onClick={scrollToAbout}
              >
                {t("about.hero.cta")}
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt={t("about.hero.title")}
              className="rounded-2xl shadow-xl object-cover w-full max-w-md h-64 md:h-80 lg:h-96"
              style={{ background: "#e5e7eb" }}
            />
          </div>
        </div>
        {/* WAVE SVG */}
        <div
          className="absolute left-0 right-0 bottom-0 w-full pointer-events-none"
          style={{ lineHeight: 0 }}
        >
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-32 md:h-44 lg:h-56"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,180 1080,0 1440,120 L1440,180 L0,180 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div
        id="about-content"
        className="py-12 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              {t("about.content.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez OrionPartners Group SARL et Transformez vos ambitions en
              résultats durable
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
            {/* Left Column - Company Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-2 space-y-8"
              id="whoweare"
            >
              <div className="prose prose-lg max-w-none">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight font-montserrat">
                  Qui sommes-nous ?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  OrionPartners Group est un cabinet de conseil en stratégie et
                  performance, nous intervenons pour le compte d'entreprises et
                  d'organisations pour des missions de conseil stratégique,
                  opérationnel et financier. Nous capitalisons sur notre
                  signature unique : une connaissance intime des enjeux et des
                  écosystèmes locaux, combinée à la maîtrise des standards
                  internationaux les plus exigeants, garantissant ainsi des
                  solutions à haute valeur ajoutée, pertinentes et immédiatement
                  opérationnelles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Notre Expertise
                    </h4>
                    <p className="text-gray-600">
                      Plus de 15 ans d'expérience dans le conseil stratégique et
                      l'accompagnement des entreprises vers l'excellence
                      opérationnelle.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Notre Approche
                    </h4>
                    <p className="text-gray-600">
                      Une méthodologie éprouvée basée sur l'analyse rigoureuse
                      et la mise en œuvre pragmatique de solutions sur mesure.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 font-montserrat">
                En Chiffres
              </h4>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Clients Accompagnés
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Années d'Expérience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Secteurs d'Activité
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Taux de Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Notre Équipe Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20"
            id="team"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                Notre Équipe
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une équipe d'experts passionnés, unis par la même vision : votre
                réussite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EP</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                  Direction Générale
                </h4>
                <p className="text-blue-600 font-semibold mb-3">
                  Stratégie & Leadership
                </p>
                <p className="text-gray-600 text-sm">
                  Expertise en développement stratégique et accompagnement des
                  entreprises vers l'excellence opérationnelle.
                </p>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EC</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                  Équipe Conseil
                </h4>
                <p className="text-blue-600 font-semibold mb-3">
                  Experts Sectoriels
                </p>
                <p className="text-gray-600 text-sm">
                  Spécialistes en conseil fiscal, RH, stratégie et
                  transformation d'entreprise avec une expertise locale
                  approfondie.
                </p>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">ER</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                  Équipe Recherche
                </h4>
                <p className="text-blue-600 font-semibold mb-3">
                  Analyses & Études
                </p>
                <p className="text-gray-600 text-sm">
                  Analystes spécialisés dans les études de marché, recherches
                  économiques et stratégiques pour éclairer vos décisions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border-l-4 border-blue-600 pl-8"
              id="mission"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                    {t("about.mission.title")}
                  </h3>
                  <div className="w-16 h-1 bg-blue-600 rounded"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("about.mission.description")}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border-l-4 border-blue-600 pl-8"
              id="vision"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                    {t("about.vision.title")}
                  </h3>
                  <div className="w-16 h-1 bg-blue-600 rounded"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("about.vision.description")}
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="valeurs"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                {t("about.values.title")}
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("about.values.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">{valeur.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">
                    {valeur.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {valeur.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center py-8 border-t mt-16">
            <p className="text-gray-600 mb-6">{t("about.cta.subtitle")}</p>
            <Link to="/#contact">
              <Button variant="primary" size="lg">
                {t("about.cta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 