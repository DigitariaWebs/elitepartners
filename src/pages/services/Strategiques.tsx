import React, { useEffect } from 'react';
import { Users, Target, Lightbulb, Award, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';

const StrategiquesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100 text-blue-900 py-24">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Évaluations stratégiques
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-700">
            Solutions haut de gamme et personnalisées
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-blue-800">
            Une entreprise innovante dédiée à offrir des solutions sur mesure pour répondre 
            aux défis actuels de nos clients, centrée sur la qualité, l'innovation et la proximité client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Découvrir nos services
            </button>
            <button className="bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-50 hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Vision et positionnement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ElitePartners Group SARL se positionne comme une entreprise innovante, dédiée à offrir des solutions haut de gamme et personnalisées
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">ElitePartners Group SARL</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Notre expertise approfondie vous guide vers l'excellence opérationnelle et la croissance durable 
                avec des solutions sur mesure et un accompagnement personnalisé.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Notre avantage concurrentiel
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Une <strong>expertise approfondie</strong> dans les domaines métier de nos clients</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Un accompagnement <strong>sur mesure</strong>, du diagnostic à la mise en œuvre</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Une <strong>réactivité et flexibilité</strong> adaptées aux contextes changeants</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Un service après-vente soigné garantissant la satisfaction client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Alignement stratégique</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque initiative d'ElitePartners Group SARL s'inscrit dans une logique cohérente 
                avec nos objectifs de croissance, de performance et d'image. Cette cohérence assure 
                une <strong>exécution fluide de la stratégie</strong> et une capacité d'adaptation renforcée.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-2xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Capacités internes</h3>
              <div className="text-left space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Une <strong>équipe multicompétente</strong>, couvrant le conseil, la technique et l'opérationnel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Un <strong>réseau de processus et d'outils efficaces</strong>, facilitant la performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Une infrastructure flexible, favorable à l'évolution et à la montée en charge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Analyse SWOT
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre analyse stratégique révèle nos forces, faiblesses, opportunités et menaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl shadow-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Forces</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Compétences qualifiées</li>
                <li>• Service client attentif</li>
                <li>• Agilité opérationnelle</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-xl shadow-lg">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-3">Faiblesses</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Dépendance à quelques clients clés</li>
                <li>• Notoriété en construction</li>
                <li>• Ressources limitées</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Opportunités</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Digitalisation du marché</li>
                <li>• Nouveaux secteurs</li>
                <li>• Nouvelles offres</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl shadow-lg">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Menaces</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Concurrence intense</li>
                <li>• Évolution technologique</li>
                <li>• Contexte économique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Objectifs stratégiques à moyen terme
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre feuille de route pour les prochaines années
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Développement de la notoriété</h3>
              <p className="text-gray-600">
                Accroître la <strong>notoriété</strong> de la marque ElitePartners Group SARL 
                et son image de référence sur le marché.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-4">Expansion géographique</h3>
              <p className="text-gray-600">
                Étendre <strong>géographiquement</strong> notre influence et cibler 
                de nouveaux secteurs d'activité.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Innovation continue</h3>
              <p className="text-gray-600">
                Lancer des <strong>offres innovantes</strong> à forte valeur ajoutée 
                pour nos clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Optimisation interne</h3>
              <p className="text-gray-600">
                Optimiser en continu les <strong>processus internes</strong> et 
                la veille technologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptability Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Adaptabilité au changement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ElitePartners Group SARL se distingue par sa <strong>capacité de pivot, 
              de réorientation ou d'évolution rapide</strong> face aux transformations du marché, 
              grâce à une organisation agile et une veille active.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Partenariats stratégiques</h3>
              <p className="text-gray-600">
                Nous cultivons des partenariats précieux avec des prestataires, 
                fournisseurs technologiques et consultants, enrichissant notre offre.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Veille technologique</h3>
              <p className="text-gray-600">
                Une veille active nous permet d'anticiper les innovations 
                et les attentes clients pour rester à la pointe.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">Organisation agile</h3>
              <p className="text-gray-600">
                Notre structure flexible nous permet de nous adapter rapidement 
                aux changements du marché et aux besoins évolutifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Ils nous ont choisi
            </h2>
            <p className="text-lg text-gray-600">
              Plus de 50+ entreprises nous font confiance pour leur développement et leur succès
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-2xl font-bold text-gray-400">Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Nos Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Services Conseils</h3>
              <p className="text-gray-600 mb-6">
                Nous offrons des services de consultation stratégique pour optimiser 
                vos opérations et maximiser votre croissance.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Représentation & Accompagnement</h3>
              <p className="text-gray-600 mb-6">
                Services de représentation commerciale et d'accompagnement pour 
                développer votre présence sur de nouveaux marchés.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">Études & Recherches</h3>
              <p className="text-gray-600 mb-6">
                Analyses de marché approfondies et études sectorielles pour éclairer 
                vos décisions stratégiques.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Découvrir tous nos services
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default StrategiquesPage;