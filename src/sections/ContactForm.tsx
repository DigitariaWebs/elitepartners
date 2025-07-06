import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { CONTACT_INFO } from '@/constants';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.info.phone'),
      content: CONTACT_INFO.phones.map((phone, index) => (
        <span key={index} style={{ display: 'block', marginBottom: index < CONTACT_INFO.phones.length - 1 ? 4 : 0 }}>
          <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
            {phone}
          </a>
        </span>
      )),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.info.email'),
      content: (
        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600 transition-colors">
          {CONTACT_INFO.email}
        </a>
      ),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.info.address'),
      content: CONTACT_INFO.address,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: t('contact.info.linkedin'),
      content: (
        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          Elite Partners Group
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          className="mb-10 sm:mb-16"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Formulaire de contact */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name.label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder={t('contact.form.name.placeholder')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.email.label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.subject.label')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder={t('contact.form.subject.placeholder')}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.message.label')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder={t('contact.form.message.placeholder')}
              />
                </div>
            </div>
            
            <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="primary" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                >
                {t('contact.form.submit')}
              </Button>
            </div>
          </form>
        </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">{t('contact.info.title')}</h3>
            <div className="space-y-6 sm:space-y-8">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <div className="text-sm sm:text-base text-gray-600 space-y-1">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;