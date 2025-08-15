import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, ArrowUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src={CONTACT_INFO.logo}
                    alt="OrionPartners Group SARL Logo"
                    className="h-14 w-auto"
                  />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t("footer.company.description")}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {t("footer.legal.full")}
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
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>

                <motion.a
                  href={CONTACT_INFO.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-black p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>

                <motion.a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>

                <motion.a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">
                {t("footer.quicklinks.title")}
              </h3>
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
              <h3 className="text-lg font-semibold mb-6 text-white">
                {t("footer.services.title")}
              </h3>

              <ul className="space-y-3">
                {Array.isArray(services) && services.length > 0 ? (
                  services.map((service: any, index: number) => (
                    <li key={index}>
                      <Link
                        to={service.path}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-sm">
                    Services en cours de chargement...
                  </li>
                )}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">
                {t("footer.contact.title")}
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={16}
                    className="text-blue-400 mt-1 flex-shrink-0"
                  />
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
                      <Phone
                        size={16}
                        className="text-blue-400 flex-shrink-0"
                      />
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
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
              <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>

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