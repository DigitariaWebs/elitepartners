import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, BarChart, Home } from 'lucide-react';
import Button from '@/components/Button';

const ConseilPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 flex items-center">
            <Home size={16} className="mr-1" />
            Accueil
          </Link>
          <ChevronRight size={16} />
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <ChevronRight size={16} />
          <span className="text-gray-900">Services-Conseils</span>
        </div>
      </div>

      {/* Titre principal */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Services-Conseils
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section 1: Conseil fiscal */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Conseil fiscal et conformité réglementaire
            </h2>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Optimisation fiscale pour réduire les charges tout en respectant les lois en vigueur</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Gestion de la conformité selon les normes locales et internationales</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Diagnostic fiscal pour identifier les risques et opportunités</p>
            </li>
          </ul>
        </section>

        {/* Section 2: Business Intelligence */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Business Intelligence et Data Analytics
            </h2>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Conception et automatisation de rapports interactifs (Power BI, Excel)</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Reporting financier et analyse de performance</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Modélisation et exploration des données (tendances, prévisions stratégiques)</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Formation et accompagnement à l'utilisation des outils de reporting</p>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center py-8 border-t">
          <p className="text-gray-600 mb-6">
            Besoin d'accompagnement pour optimiser votre gestion fiscale ou améliorer votre business intelligence ?
          </p>
          <Link to="/#contact">
            <Button variant="primary" size="lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConseilPage; 