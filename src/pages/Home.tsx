import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesSection from '@/sections/ServicesSection';
import ContactForm from '@/sections/ContactForm';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <AboutSection />
      <ClientsCarousel />
      <ServicesSection />
      <ContactForm />
    </DefaultLayout>
  );
};

export default Home;