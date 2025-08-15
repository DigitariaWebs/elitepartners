import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import HeroSection from '@/sections/HeroSection';
import AcademySection from '@/sections/AcademySection';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesSection from '@/sections/ServicesSection';
import ContactForm from '@/sections/ContactForm';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <AcademySection />
      <ClientsCarousel />
      <ServicesSection />
      <ContactForm />
    </DefaultLayout>
  );
};

export default Home;