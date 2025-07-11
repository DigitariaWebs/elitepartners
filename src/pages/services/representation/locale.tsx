import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}
const IconWrapper = ({ children, className = '' }: IconWrapperProps) => (
  <div className={`flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-purple-100 mb-5 shadow-sm ${className}`}>
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
    <motion.div layout className="border-b border-gray-200 py-6">
      <motion.header
        initial={false}
        className="flex justify-between items-center cursor-pointer gap-x-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg text-gray-800 flex-1">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? <Minus className="text-purple-600" /> : <Plus className="text-gray-500" />}
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
  color?: string;
}
const ShapeDivider = ({ className = '', color = 'fill-white' }: ShapeDividerProps) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={color}></path>
    </svg>
  </div>
);

const LocalePage = () => {
  return (
    <DefaultLayout>
      {/* 1. Hero Section */}
      <section className="relative bg-purple-800 text-white pt-28 md:pt-32 pb-32 md:pb-40">
          <div className="container mx-auto px-4 z-10 relative">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="md:w-7/12 lg:w-1/2 text-center md:text-left"
                  >
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Votre Visage et Votre Voix sur le Marché Congolais
                      </h1>
                      <p className="text-lg lg:text-xl mb-8 opacity-90">
                        Établissez une présence forte et crédible. Nous devenons l'extension de votre équipe pour défendre vos intérêts avec professionnalisme.
                      </p>
                      <motion.button 
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.15)' }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                          Discuter de votre représentation
                      </motion.button>
                  </motion.div>
                  <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="w-full md:w-5/12 lg:w-1/2 mt-8 md:mt-0"
                  >
                      <img src="/imgsec/8.png" alt="Représentation en réunion" className="rounded-lg shadow-2xl" />
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
        variants={{offscreen: { y: 50, opacity: 0 },onscreen: {y: 0,opacity: 1,transition: {type: "spring",bounce: 0.2,duration: 1.2}}}}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une Représentation Complète</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Nous agissons en votre nom à tous les niveaux pour construire et maintenir votre réputation et vos relations d'affaires.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="p-6 text-center flex flex-col items-center">
              <IconWrapper><svg className="text-3xl md:text-4xl text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-8 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm4 8c2.21 0 4-1.79 4-4h-2c0 1.104-.896 2-2 2s-2-.896-2-2H8c0 2.21 1.79 4 4 4zm6-8c0 2.21-3.582 4-8 4s-8-1.79-8-4V5c0-2.21 3.582-4 8-4s8 1.79 8 4v6z"/></svg></IconWrapper>
              <h3 className="text-xl font-bold mb-2">Représentation Commerciale</h3>
              <p className="text-gray-600">Gestion de vos relations avec les clients, partenaires et fournisseurs locaux pour maximiser vos opportunités.</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <IconWrapper><svg className="text-3xl md:text-4xl text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7v4H5V7H3v10h2v-4h14v4h2V7z"/></svg></IconWrapper>
              <h3 className="text-xl font-bold mb-2">Négociation & Contrats</h3>
              <p className="text-gray-600">Nous menons les négociations en votre nom pour sécuriser les meilleurs accords commerciaux et juridiques.</p>
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <IconWrapper><svg className="text-3xl md:text-4xl text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></IconWrapper>
              <h3 className="text-xl font-bold mb-2">Gestion de Bureau Local</h3>
              <p className="text-gray-600">Mise en place et gestion de votre présence physique, incluant la logistique et le personnel si nécessaire.</p>
            </div>
          </div>
        </div>
        
      </motion.section>

      {/* 3. Pourquoi nous choisir ? */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Votre Partenaire de Confiance sur le Terrain</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Nous nous immergeons dans votre culture d'entreprise pour représenter fidèlement votre marque. Notre connaissance du tissu économique local et notre réseau étendu nous permettent de défendre vos intérêts avec efficacité et intégrité.</p>
              <div className="space-y-6">
                  <div className="flex items-start"><IconWrapper className="h-14 w-14 md:h-16 md:w-16 !mb-0 flex-shrink-0"><svg className="text-2xl text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></IconWrapper><div className="ml-4"><h4 className="font-bold text-lg">Intégrité et Professionnalisme</h4><p className="text-sm text-gray-600">Votre réputation est notre priorité. Nous agissons avec la plus grande éthique.</p></div></div>
                  <div className="flex items-start"><IconWrapper className="h-14 w-14 md:h-16 md:w-16 !mb-0 flex-shrink-0"><svg className="text-2xl text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V9c0-3.07-2.13-5.64-5-6.32V2a1 1 0 10-2 0v.68C8.13 3.36 6 5.92 6 9v7l-1.29 1.29A.996.996 0 006 20h12a.996.996 0 00.71-1.71L18 16z"/></svg></IconWrapper><div className="ml-4"><h4 className="font-bold text-lg">Communication Transparente</h4><p className="text-sm text-gray-600">Vous recevez des rapports réguliers et détaillés sur toutes nos actions.</p></div></div>
                  <div className="flex items-start"><IconWrapper className="h-14 w-14 md:h-16 md:w-16 !mb-0 flex-shrink-0"><svg className="text-2xl text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7z"/></svg></IconWrapper><div className="ml-4"><h4 className="font-bold text-lg">Focus sur les Résultats</h4><p className="text-sm text-gray-600">Notre mission est d'atteindre vos objectifs commerciaux et stratégiques.</p></div></div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/imgsec/9.png" alt="Partenariat sur le terrain" className="rounded-lg shadow-2xl"/>
            </motion.div>
          </div>
        </div>
        
      </section>

      {/* 4. FAQ */}
      <section className="py-20 bg-gray-50 relative">
          <ShapeDivider className="transform rotate-180 top-0" color="fill-white"/>
          <div className="container mx-auto px-4 z-10 relative">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Questions Fréquemment Posées</h2>
              <div className="max-w-3xl mx-auto">
                <AccordionItem
                  question="Dois-je être physiquement présent en RDC ?"
                  answer="Pas nécessairement. Notre service de représentation locale est conçu pour vous offrir une présence forte sans que vous ayez à gérer une équipe ou un bureau sur place, surtout dans les premières phases."
                />
                <AccordionItem
                  question="Comment se déroule la communication et le reporting ?"
                  answer="Nous établissons un plan de communication clair dès le départ, avec des points hebdomadaires ou mensuels et des rapports détaillés. Vous êtes toujours informé des avancées et des prochaines étapes."
                />
                <AccordionItem
                  question="Représentez-vous des entreprises concurrentes ?"
                  answer="Notre politique est stricte : nous ne représentons jamais deux sociétés en concurrence directe simultanément. Votre stratégie et vos informations restent confidentielles."
                />
              </div>
          </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 bg-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={{offscreen: { y: 50, opacity: 0 },onscreen: {y: 0,opacity: 1,transition: {type: "spring",bounce: 0.2,duration: 1.2}}}}>
            <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <h2 className="text-3xl font-bold mb-4">Établissez une présence forte en RDC</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Laissez-nous être votre ancre locale. Contactez-nous pour découvrir comment notre expertise peut accélérer votre implantation et votre succès.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-transform transform duration-300 shadow-lg hover:shadow-xl"
            >
              Devenir un acteur local
            </motion.button>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LocalePage;