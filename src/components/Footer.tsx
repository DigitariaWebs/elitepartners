import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const services = t('footer.services.list');

  // Navigation items with translations
  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.sectors'), path: '/secteurs' },
    { name: t('nav.about'), path: '/#about' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company info with logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <img 
                  src={CONTACT_INFO.logo}
                  alt="Elite Partners Logo"
                  className="h-16 w-auto mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('footer.company.description')}
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.quicklinks.title')}</h3>
              <ul className="space-y-3">
                {navigationItems.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.services.title')}</h3>
              <ul className="space-y-3">
                {Array.isArray(services) ? services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                )) : null}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.contact.title')}</h3>
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Phones */}
                <div className="space-y-2">
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Phone size={16} className="text-blue-400 flex-shrink-0" />
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </p>
              
              {/* Back to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;