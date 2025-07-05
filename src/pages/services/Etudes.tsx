import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Target, Home } from 'lucide-react';
import Button from '@/components/Button';

const EtudesPage: React.FC = () => {
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
          <span className="text-gray-900">Études & Recherches</span>
        </div>
      </div>

      {/* Titre principal */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Études & Recherches
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section 1: Études de marché */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Études de marché
            </h2>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Analyse de la demande pour évaluer les besoins des consommateurs</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p>Études concurrentielles pour comprendre les forces et faiblesses des acteurs du marché</p>
            </li>
          </ul>
        </section>

        {/* Section 2: Objectif général */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Objectif général
            </h2>
          </div>
          
          <div className="prose prose-lg text-gray-700">
            <p className="leading-relaxed">
              Fournir des analyses approfondies pour orienter les décisions stratégiques des clients.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8 border-t">
          <p className="text-gray-600 mb-6">
            Besoin d'une étude de marché ou d'une analyse approfondie pour votre entreprise ?
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

export default EtudesPage; 