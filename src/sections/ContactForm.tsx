import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
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
    ...CONTACT_INFO.phones.map((phone, index) => ({
      icon: <Phone className="w-5 h-5" />,
      title:
        index === 0
          ? t("contact.info.phone")
          : `${t("contact.info.phone")} ${index + 1}`,
      href: `tel:${phone}`,
      target: undefined,
      content: <span className="text-slate-600 font-medium">{phone}</span>,
    })),
    {
      icon: <Mail className="w-5 h-5" />,
      title: t("contact.info.email"),
      href: `mailto:${CONTACT_INFO.email}`,
      target: undefined,
      content: (
        <span className="text-slate-600 font-medium">{CONTACT_INFO.email}</span>
      ),
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t("contact.info.address"),
      href: `https://maps.google.com/?q=${encodeURIComponent(
        CONTACT_INFO.address
      )}`,
      target: "_blank",
      content: (
        <span className="text-slate-600 leading-relaxed">
          {CONTACT_INFO.address}
        </span>
      ),
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: t("contact.info.linkedin"),
      href: CONTACT_INFO.linkedin,
      target: "_blank",
      content: (
        <span className="text-slate-600 font-medium">Eliteparners Group</span>
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
              {t("contact.title")}
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
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
              <div
                key={index}
                className="flex items-center gap-2 text-slate-600"
              >
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
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 lg:p-10 h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  {t("contact.form.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Partagez-nous votre projet et nous vous accompagnons vers le
                  succès.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 tracking-wide"
                    >
                      {t("contact.form.name.label")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
                      placeholder={t("contact.form.name.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 tracking-wide"
                    >
                      {t("contact.form.email.label")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
                      placeholder={t("contact.form.email.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 tracking-wide"
                    >
                      {t("contact.form.subject.label")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400"
                      placeholder={t("contact.form.subject.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 tracking-wide"
                    >
                      {t("contact.form.message.label")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400 resize-none"
                      placeholder={t("contact.form.message.placeholder")}
                    />
                  </div>
                </div>

                <div className="pt-4 mt-auto">
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
                        {t("contact.form.submit")}
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
                  {t("contact.info.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Plusieurs moyens de nous joindre pour discuter de votre
                  projet.
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
                    <a
                      href={item.href}
                      target={item.target}
                      rel={
                        item.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer group-hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-slate-100 group-hover:bg-blue-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-all duration-200">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-wide group-hover:text-blue-600 transition-colors duration-200">
                            {item.title}
                          </h4>
                          <div className="space-y-1 group-hover:text-blue-600 transition-colors duration-200">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action - Moved outside and below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 text-center">
            <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Consultation gratuite
            </h4>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Discutons de votre projet sans engagement. Notre équipe d'experts
              est à votre disposition pour vous accompagner.
            </p>
            <a
              href={`tel:${CONTACT_INFO.phones[0]}`}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Appelez maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;