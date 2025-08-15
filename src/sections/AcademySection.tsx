import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Target, BookOpen, Mail, Phone, Building2, User, FileText, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AcademySection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    program: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        program: '',
        motivation: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const programs = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('academy.programs.entrepreneurship.title'),
      description: t('academy.programs.entrepreneurship.description'),
      color: 'bg-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('academy.programs.leadership.title'),
      description: t('academy.programs.leadership.description'),
      color: 'bg-purple-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t('academy.programs.business.title'),
      description: t('academy.programs.business.description'),
      color: 'bg-green-600'
    }
  ];

  return (
    <section id="academy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t('academy.about.title')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            {t('academy.about.description')}
          </p>
        </motion.div>

        {/* Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('academy.programs.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${program.color} p-6 text-white`}>
                  <div className="text-center">
                    {program.icon}
                    <h4 className="text-xl font-bold mt-4">{program.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-blue-900 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t('academy.application.title')}
            </h3>
            <p className="text-xl text-blue-200">
              {t('academy.application.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-semibold text-blue-200 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  {t('academy.application.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center text-sm font-semibold text-blue-200 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('academy.application.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-semibold text-blue-200 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {t('academy.application.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="company" className="flex items-center text-sm font-semibold text-blue-200 mb-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  {t('academy.application.form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="position" className="text-sm font-semibold text-blue-200 mb-2 block">
                  {t('academy.application.form.position')}
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="program" className="flex items-center text-sm font-semibold text-blue-200 mb-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t('academy.application.form.program')}
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner un programme</option>
                  <option value="entrepreneurship">{t('academy.programs.entrepreneurship.title')}</option>
                  <option value="leadership">{t('academy.programs.leadership.title')}</option>
                  <option value="business">{t('academy.programs.business.title')}</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="motivation" className="flex items-center text-sm font-semibold text-blue-200 mb-2">
                <FileText className="w-4 h-4 mr-2" />
                {t('academy.application.form.motivation')}
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
                placeholder="Expliquez votre motivation pour rejoindre l'Académie Elite..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                ) : (
                  <Send className="w-5 h-5 mr-3" />
                )}
                {isSubmitting ? 'Envoi en cours...' : t('academy.application.form.submit')}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-300 font-semibold"
                >
                  {t('academy.application.success')}
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-300 font-semibold"
                >
                  {t('academy.application.error')}
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademySection;
