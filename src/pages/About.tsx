import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Star, Award, Shield, Heart } from "lucide-react";

// Professional African business images from Unsplash
const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const missionImage =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const visionImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const valuesImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

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

  const aboutSections = [
    {
      id: "mission",
      titre: t("about.mission.title"),
      description: (
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {t("about.mission.description")}
        </p>
      ),
      image: missionImage,
    },
    {
      id: "vision",
      titre: t("about.vision.title"),
      description: (
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {t("about.vision.description")}
        </p>
      ),
      image: visionImage,
    },
    {
      id: "valeurs",
      titre: t("about.values.title"),
      description: (
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {t("about.values.description")}
        </p>
      ),
      image: valuesImage,
    },
  ];

  // Company values with icons from AboutSection
  const valeurs = [
    {
      icon: <Star className="w-6 h-6" />,
      title: t("about.values.leadership.title"),
      description: t("about.values.leadership.description"),
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
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
          </div>
          <motion.div className="space-y-16">
            {aboutSections.map((section, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className={`flex flex-col-reverse md:flex-row ${
                    isEven ? "" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-8 group`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionVariants}
                  custom={i + 1}
                >
                  {/* Texte */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                      {section.titre}
                    </h2>
                    <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {section.description}
                    </div>
                  </div>
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={section.image}
                      alt={section.titre}
                      className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Company Metrics Section from AboutSection */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="mt-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              {/* Company Overview */}
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight font-montserrat">
                    {t("about.who.title")}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    {t("about.who.description")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="border-l-4 border-violet-600 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Notre Expertise
                      </h4>
                      <p className="text-gray-600">
                        Plus de 15 ans d'expérience dans le conseil stratégique
                        et l'accompagnement des entreprises vers l'excellence
                        opérationnelle.
                      </p>
                    </div>
                    <div className="border-l-4 border-violet-600 pl-6">
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
              </div>

              {/* Key Metrics */}
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 font-montserrat">
                  En Chiffres
                </h4>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      Clients Accompagnés
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 mb-2">
                      15
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      Années d'Expérience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 mb-2">
                      3
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      Secteurs d'Activité
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 mb-2">
                      95%
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      Taux de Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Values Section with Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="mt-20"
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
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-violet-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-violet-700 transition-colors duration-300">
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