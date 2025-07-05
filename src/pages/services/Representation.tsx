import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Home } from 'lucide-react';
import Button from '@/components/Button';

const RepresentationPage: React.FC = () => {
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
          <span className="text-gray-900">Représentation & Accompagnement</span>
        </div>
      </div>

      {/* Titre principal */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Représentation & Accompagnement
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Notre expertise locale à votre service
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Nous facilitons l'implantation et l'expansion des entreprises en République Démocratique du Congo (RDC).
            </p>
            
            <p className="leading-relaxed">
              S'implanter ou se développer dans un marché complexe comme celui de la RDC nécessite une expertise locale et une compréhension approfondie des enjeux régionaux.
            </p>
            
            <p className="leading-relaxed">
              ElitePartners Group SARL met son réseau et son savoir-faire au service des entreprises internationales pour garantir leur succès.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8 border-t">
          <p className="text-gray-600 mb-6">
            Prêt à développer votre entreprise en République Démocratique du Congo ?
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

export default RepresentationPage; 