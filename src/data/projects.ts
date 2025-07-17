export interface Project {
  id: string;
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  subtitle: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  content: {
    fr: string[];
    en: string[];
  };
  heroImage: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'agrobusiness',
    slug: 'agrobusiness',
    title: {
      fr: 'AgroBusiness',
      en: 'AgroBusiness'
    },
    subtitle: {
      fr: 'Innovation agricole et développement durable',
      en: 'Agricultural innovation and sustainable development'
    },
    description: {
      fr: 'Notre projet AgroBusiness vise à révolutionner le secteur agricole en RDC en combinant technologies modernes, pratiques durables et expertise locale pour créer une chaîne de valeur agricole compétitive et résiliente.',
      en: 'Our AgroBusiness project aims to revolutionize the agricultural sector in DRC by combining modern technologies, sustainable practices, and local expertise to create a competitive and resilient agricultural value chain.'
    },
    content: {
      fr: [
        'Notre initiative AgroBusiness se concentre sur la modernisation du secteur agricole congolais en introduisant des technologies de pointe et des pratiques agricoles durables. Nous travaillons en étroite collaboration avec les agriculteurs locaux pour développer des solutions adaptées aux conditions spécifiques de la RDC, tout en respectant les traditions et les connaissances locales.',
        'Le projet comprend la mise en place d\'infrastructures modernes, l\'introduction de techniques d\'irrigation avancées, et l\'utilisation de technologies numériques pour optimiser la production. Nous formons également les agriculteurs aux nouvelles méthodes et leur fournissons un accès aux marchés internationaux, contribuant ainsi à l\'amélioration de leurs revenus et à la sécurité alimentaire du pays.',
        'Notre approche holistique intègre également des aspects environnementaux et sociaux, en promouvant l\'agriculture biologique, la gestion durable des ressources naturelles, et l\'autonomisation des communautés rurales. Nous croyons fermement que le développement agricole durable est la clé de la prospérité économique de la RDC.'
      ],
      en: [
        'Our AgroBusiness initiative focuses on modernizing the Congolese agricultural sector by introducing cutting-edge technologies and sustainable farming practices. We work closely with local farmers to develop solutions adapted to the specific conditions of the DRC, while respecting local traditions and knowledge.',
        'The project includes the establishment of modern infrastructure, the introduction of advanced irrigation techniques, and the use of digital technologies to optimize production. We also train farmers in new methods and provide them with access to international markets, thereby contributing to improving their incomes and the country\'s food security.',
        'Our holistic approach also integrates environmental and social aspects, promoting organic farming, sustainable natural resource management, and the empowerment of rural communities. We firmly believe that sustainable agricultural development is the key to the DRC\'s economic prosperity.'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 'business-intelligence',
    slug: 'business-intelligence',
    title: {
      fr: 'Business Intelligence',
      en: 'Business Intelligence'
    },
    subtitle: {
      fr: 'Données intelligentes pour décisions stratégiques',
      en: 'Smart data for strategic decisions'
    },
    description: {
      fr: 'Notre plateforme de Business Intelligence transforme les données brutes en insights actionnables, permettant aux entreprises de prendre des décisions éclairées basées sur des analyses approfondies et des prévisions précises.',
      en: 'Our Business Intelligence platform transforms raw data into actionable insights, enabling businesses to make informed decisions based on in-depth analysis and accurate forecasts.'
    },
    content: {
      fr: [
        'Notre solution de Business Intelligence révolutionne la façon dont les entreprises congolaises gèrent et analysent leurs données. En utilisant des technologies avancées d\'analyse de données et d\'intelligence artificielle, nous transformons des informations complexes en tableaux de bord intuitifs et en rapports détaillés qui facilitent la prise de décision stratégique.',
        'La plateforme intègre des sources de données multiples, y compris les systèmes internes, les données de marché, et les indicateurs économiques, pour fournir une vue d\'ensemble complète de la performance de l\'entreprise. Nos algorithmes prédictifs aident à identifier les tendances émergentes et les opportunités de croissance, permettant aux dirigeants d\'anticiper les changements du marché et d\'adapter leurs stratégies en conséquence.',
        'Nous accordons une importance particulière à la formation et au support des utilisateurs, en organisant des sessions de formation personnalisées et en fournissant une assistance continue. Notre objectif est d\'autonomiser les équipes locales pour qu\'elles puissent exploiter pleinement le potentiel de leurs données et contribuer à la transformation numérique de l\'économie congolaise.'
      ],
      en: [
        'Our Business Intelligence solution revolutionizes how Congolese companies manage and analyze their data. Using advanced data analytics and artificial intelligence technologies, we transform complex information into intuitive dashboards and detailed reports that facilitate strategic decision-making.',
        'The platform integrates multiple data sources, including internal systems, market data, and economic indicators, to provide a comprehensive overview of business performance. Our predictive algorithms help identify emerging trends and growth opportunities, enabling leaders to anticipate market changes and adapt their strategies accordingly.',
        'We place particular emphasis on user training and support, organizing personalized training sessions and providing ongoing assistance. Our goal is to empower local teams to fully exploit the potential of their data and contribute to the digital transformation of the Congolese economy.'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'specialized-investment-banks',
    slug: 'specialized-investment-banks',
    title: {
      fr: 'Banques d\'investissement spécialisées',
      en: 'Specialized Investment Banks'
    },
    subtitle: {
      fr: 'Financement sur mesure pour projets stratégiques',
      en: 'Customized financing for strategic projects'
    },
    description: {
      fr: 'Nos services de banques d\'investissement spécialisées offrent des solutions de financement innovantes et adaptées aux besoins spécifiques des projets d\'envergure en RDC, facilitant l\'accès aux capitaux et l\'optimisation des structures financières.',
      en: 'Our specialized investment banking services offer innovative financing solutions tailored to the specific needs of large-scale projects in the DRC, facilitating access to capital and optimization of financial structures.'
    },
    content: {
      fr: [
        'Notre division de banques d\'investissement spécialisées se consacre à accompagner les projets d\'envergure en RDC en offrant des solutions de financement sophistiquées et adaptées aux défis spécifiques du marché local. Nous combinons une expertise financière internationale avec une connaissance approfondie du contexte congolais pour structurer des transactions complexes et optimiser les flux de capitaux.',
        'Nos services comprennent la structuration de financements de projets, l\'organisation de syndications bancaires, la gestion des fusions et acquisitions, et l\'accompagnement dans les introductions en bourse. Nous travaillons en étroite collaboration avec les investisseurs internationaux, les institutions financières locales, et les autorités réglementaires pour créer des solutions qui répondent aux besoins de toutes les parties prenantes.',
        'Nous accordons une importance particulière à la durabilité et à l\'impact social de nos investissements, en privilégiant les projets qui contribuent au développement économique et social de la RDC. Notre approche responsable nous permet de créer de la valeur à long terme tout en respectant les principes de bonne gouvernance et de transparence financière.'
      ],
      en: [
        'Our specialized investment banking division is dedicated to supporting large-scale projects in the DRC by offering sophisticated financing solutions adapted to the specific challenges of the local market. We combine international financial expertise with deep knowledge of the Congolese context to structure complex transactions and optimize capital flows.',
        'Our services include project financing structuring, bank syndication organization, mergers and acquisitions management, and IPO support. We work closely with international investors, local financial institutions, and regulatory authorities to create solutions that meet the needs of all stakeholders.',
        'We place particular emphasis on the sustainability and social impact of our investments, prioritizing projects that contribute to the economic and social development of the DRC. Our responsible approach allows us to create long-term value while respecting principles of good governance and financial transparency.'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    color: 'from-purple-600 to-purple-800'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjects = (): Project[] => {
  return projects;
}; 