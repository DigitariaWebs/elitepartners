import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import HeroSection from '@/sections/HeroSection';
import HomeProjectsSection from "@/sections/HomeProjectsSection";
import AcademySection from "@/sections/AcademySection";
import ClientsCarousel from "@/components/ClientsCarousel";
import ServicesSection from "@/sections/ServicesSection";
import ContactForm from "@/sections/ContactForm";
import TeamPreviewSection from "@/sections/TeamPreviewSection";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <HomeProjectsSection />
      <AcademySection />
      <TeamPreviewSection />
      <ClientsCarousel />
      <ServicesSection />
      <ContactForm />
    </DefaultLayout>
  );
};

export default Home;