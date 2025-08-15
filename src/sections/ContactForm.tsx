import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { CONTACT_INFO } from '@/constants';
import { Phone, Mail, MapPin, Linkedin, Send, Clock, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  const contactItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: t("contact.info.phone"),
      content: CONTACT_INFO.phones.map((phone, index) => (
        <a
          key={index}
          href={`tel:${phone}`}
          className="block text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          {phone}
        </a>
      )),
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: t("contact.info.email"),
      content: (
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          {CONTACT_INFO.email}
        </a>
      ),
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t("contact.info.address"),
      content: (
        <span className="text-slate-600 leading-relaxed">
          {CONTACT_INFO.address}
        </span>
      ),
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: t("contact.info.linkedin"),
      content: (
        <a
          href={CONTACT_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Eliteparners Group
        </a>
      ),
    },
  ];

  const features = [
    { icon: <Clock className="w-5 h-5" />, text: "Réponse sous 24h" },
    { icon: <Users className="w-5 h-5" />, text: "Consultation gratuite" },
    { icon: <Award className="w-5 h-5" />, text: "Expertise certifiée" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
          
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-8 mt-8 flex-wrap"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-600">
                <div className="text-blue-600">{feature.icon}</div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  {t('contact.form.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Partagez-nous votre projet et nous vous accompagnons vers le succès.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 tracking-wide">
                      {t('contact.form.name.label')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 tracking-wide">
                      {t('contact.form.email.label')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 tracking-wide">
                    {t('contact.form.subject.label')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
                    placeholder={t('contact.form.subject.placeholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 tracking-wide">
                    {t('contact.form.message.label')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400 resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 lg:p-10 h-full">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  {t('contact.info.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Plusieurs moyens de nous joindre pour discuter de votre projet.
                </p>
              </div>

              <div className="space-y-8">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-slate-100 group-hover:bg-blue-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-all duration-200">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-wide">
                          {item.title}
                        </h4>
                        <div className="space-y-1">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="bg-slate-50 rounded-2xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    Consultation gratuite
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Discutons de votre projet sans engagement
                  </p>
                  <a 
                    href="tel:+33123456789" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    Appelez maintenant
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;