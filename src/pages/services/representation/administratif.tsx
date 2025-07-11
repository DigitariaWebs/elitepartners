import React, { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { FaFileContract, FaBuilding, FaBalanceScale, FaHandshake, FaNetworkWired, FaUserTie } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}
const IconWrapper = ({ children, className = '' }: IconWrapperProps) => (
  <div className={`flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-blue-100 mb-5 shadow-sm ${className}`}>
    {children}
  </div>
);

interface AccordionItemProps {
  question: string;
  answer: string;
}
const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      layout 
      className="border-b border-gray-200 py-6"
    >
      <motion.header
        initial={false}
        className="flex justify-between items-center cursor-pointer gap-x-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg text-gray-800 flex-1">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? <Minus className="text-blue-600" /> : <Plus className="text-gray-500" />}
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="pt-4"
          >
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface ShapeDividerProps {
  className?: string;
}
const ShapeDivider = ({ className = '' }: ShapeDividerProps) => (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`}>
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
    </div>
);

const sectionVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2
    }
  }
};

const AdministratifPage: React.FC = () => {
  return (
    <DefaultLayout>
      {/* 1. Hero Section */}
      <section className="relative bg-blue-800 text-white pt-28 md:pt-32 pb-32 md:pb-40">
          <div className="container mx-auto px-4 z-10 relative">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="md:w-7/12 lg:w-1/2 text-center md:text-left"
                  >
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Votre Partenaire Stratégique Pour un Lancement Réussi
                      </h1>
                      <p className="text-lg lg:text-xl mb-8 opacity-90">
                        Transformez vos ambitions en succès avec notre expertise en conformité administrative et légale en RDC.
                      </p>
                      <motion.button 
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.15)' }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                          Planifier une consultation
                      </motion.button>
                  </motion.div>
                  <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="w-full md:w-5/12 lg:w-1/2 mt-8 md:mt-0"
                  >
                      <img src="/imgsec/7.png" alt="Consultation en bureau" className="rounded-lg shadow-2xl" />
                  </motion.div>
              </div>
          </div>
          <ShapeDivider />
      </section>

      {/* 2. Nos Prestations Clés */}
      <motion.section 
        className="py-20 bg-white relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une Conformité Assurée, de A à Z</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Notre expertise couvre tous les aspects administratifs et légaux pour vous garantir une tranquillité d'esprit totale.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="p-6 text-center flex flex-col items-center">
              <IconWrapper><FaFileContract className="text-3xl md:text-4xl text-blue-600" /></IconWrapper>
              <h3 className="text-xl font-bold mb-2">Création d'entreprise</h3>
              <p className="text-gray-600">De la rédaction des statuts à l'immatriculation, nous gérons l'ensemble du processus pour un démarrage rapide et conforme.</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <IconWrapper><FaBuilding className="text-3xl md:text-4xl text-blue-600" /></IconWrapper>
              <h3 className="text-xl font-bold mb-2">Permis & Licences</h3>
              <p className="text-gray-600">Nous facilitons l'obtention de toutes les autorisations et licences sectorielles nécessaires à votre activité.</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <IconWrapper><FaBalanceScale className="text-3xl md:text-4xl text-blue-600" /></IconWrapper>
              <h3 className="text-xl font-bold mb-2">Conformité Juridique</h3>
              <p className="text-gray-600">Assistance continue pour garantir que vos opérations respectent la législation en vigueur et les normes internationales.</p>
            </div>
          </div>
        </div>
        
      </motion.section>

      {/* 3. Pourquoi nous choisir ? */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Votre Bouclier Réglementaire en RDC</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Opérer dans un nouvel environnement juridique peut être complexe. Elite Partners Group agit comme votre partenaire stratégique, transformant les défis réglementaires en avantages compétitifs. Nous vous permettons de vous concentrer sur votre cœur de métier, en toute tranquillité.</p>
              <div className="space-y-6">
                  <div className="flex items-start"><IconWrapper className="h-14 w-14 md:h-16 md:w-16 !mb-0 flex-shrink-0"><FaHandshake className="text-2xl text-blue-600" /></IconWrapper><div className="ml-4"><h4 className="font-bold text-lg">Partenariat Stratégique</h4><p className="text-sm text-gray-600">Plus qu'un prestataire, un véritable partenaire investi dans votre succès.</p></div></div>
                  <div className="flex items-start"><IconWrapper className="h-14 w-14 md:h-16 md:w-16 !mb-0 flex-shrink-0"><FaNetworkWired className="text-2xl text-blue-600" /></IconWrapper><div className="ml-4"><h4 className="font-bold text-lg">Réseau d'Experts</h4><p className="text-sm text-gray-600">Accès à notre réseau de juristes, fiscalistes et experts sectoriels.</p></div></div>
                  <div className="flex items-start"><IconWrapper className="h-14 w-14 md:h-16 md:w-16 !mb-0 flex-shrink-0"><FaUserTie className="text-2xl text-blue-600" /></IconWrapper><div className="ml-4"><h4 className="font-bold text-lg">Approche Sur-Mesure</h4><p className="text-sm text-gray-600">Des solutions adaptées à la taille et aux ambitions de votre entreprise.</p></div></div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/imgsec/4.png" alt="Partenariat stratégique" className="rounded-lg shadow-2xl"/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-20 bg-gray-50 relative">
          <ShapeDivider className="transform rotate-180 top-0" />
          <div className="container mx-auto px-4 z-10 relative">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Questions Fréquemment Posées</h2>
              <div className="max-w-3xl mx-auto">
                <AccordionItem
                  question="Quels sont les délais pour créer une entreprise en RDC ?"
                  answer="Les délais varient, mais avec notre accompagnement, nous optimisons chaque étape pour un enregistrement en quelques semaines, contre plusieurs mois via les circuits traditionnels."
                />
                <AccordionItem
                  question="Quelle est la différence entre représentation légale et fiscale ?"
                  answer="La représentation légale concerne la conformité de votre entité (statuts, enregistrement), tandis que la représentation fiscale désigne un mandataire pour vos déclarations et paiements d'impôts. Nous couvrons les deux aspects."
                />
                <AccordionItem
                  question="Comment assurez-vous la veille réglementaire ?"
                  answer="Grâce à notre ancrage local et notre réseau, nous sommes informés en temps réel des évolutions législatives. Nous vous transmettons des synthèses claires et ajustons votre stratégie de conformité de manière proactive."
                />
              </div>
          </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={sectionVariants}>
            <FaFileContract className="mx-auto h-12 w-12 mb-4"/>
            <h2 className="text-3xl font-bold mb-4">Prêt à sécuriser votre conformité en RDC ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous pour une consultation initiale et découvrez comment nous pouvons vous aider à vous concentrer sur votre croissance en toute sérénité.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-transform transform duration-300 shadow-lg hover:shadow-xl"
            >
              Obtenir mon analyse gratuite
            </motion.button>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default AdministratifPage; 