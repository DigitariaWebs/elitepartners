import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ServicesGrid from '@/sections/ServicesGrid';

const Services: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="pt-16">
        <ServicesGrid />
      </div>
    </DefaultLayout>
  );
};

export default Services;