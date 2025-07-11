import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.sectors': 'Secteurs',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title.part1': 'Leaders du Conseil',
    'hero.title.part2': 'Stratégique',
    'hero.title.part3': 'en RDC',
    'hero.subtitle': '15 ans d\'expertise au service de votre expansion en République Démocratique du Congo. Nous transformons les défis complexes en opportunités de croissance durable.',
    'hero.cta.primary': 'Démarrer maintenant',
    'hero.cta.secondary': 'Découvrir nos services',

    // About Section
    'about.title': 'À propos de nous',
    'about.subtitle': 'Découvrez ElitePartners Group SARL, votre partenaire stratégique avec excellence',
    'about.who.title': 'Qui sommes-nous ?',
    'about.who.description': 'ElitePartners Group SARL est un cabinet de conseil spécialisé dans l\'accompagnement des entreprises à chaque étape de leur développement. Que ce soit pour optimiser vos opérations, pénétrer un nouveau marché ou sécuriser vos activités, nous vous apportons une expertise locale combinée à des standards internationaux.',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Créer de la valeur durable pour nos clients en leur permettant de relever leurs défis les plus complexes et de transformer leurs ambitions en réalisations concrètes. ElitePartners Group SARL : votre partenaire pour l\'excellence stratégique, opérationnelle et financière.',
    'about.vision.title': 'Notre Vision',
    'about.vision.description': 'ElitePartners aspire à devenir le leader incontesté dans la facilitation des investissements canadiens en RDC. Nous nous engageons à développer des solutions intégrées qui maximisent la rentabilité de nos clients tout en assurant la conformité et le respect des meilleures pratiques éthiques.',
    'about.values.title': 'Nos Valeurs',
    'about.values.leadership.title': 'Leadership',
    'about.values.leadership.description': 'Nous cultivons un leadership éthique qui inspire confiance et respect.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'Nous nous efforçons constamment d\'atteindre l\'excellence dans tous nos services et interactions.',
    'about.values.integrity.title': 'Intégrité',
    'about.values.integrity.description': 'Nous maintenons une intégrité inébranlable dans toutes nos actions.',
    'about.values.commitment.title': 'Engagement',
    'about.values.commitment.description': 'Nous nous engageons à surpasser les attentes en fournissant des services de qualité supérieure.',

    // Services Page
    'services.hero.title': 'Nos services, votre réussite',
    'services.hero.subtitle': 'Découvrez comment nos solutions sur-mesure transforment vos défis en opportunités de croissance durable, dans tous les secteurs clés.',
    'services.grid.title': 'Nos Services',
    'services.grid.subtitle': 'Découvrez notre gamme complète de services conçus pour accompagner votre croissance et optimiser vos performances en RDC',
    'services.grid.conseil.title': 'Services-Conseils',
    'services.grid.conseil.description': 'Nous offrons des services de conseil stratégique et opérationnel pour accompagner les entreprises à relever leurs défis complexes et atteindre leurs objectifs de performance. Grâce à une approche axée sur les résultats, nous élaborons des stratégies performantes et apportons des solutions concrètes pour optimiser vos opérations, renforcer votre résilience et améliorer votre performance globale.',
    'services.grid.conseil.features': [
      'Conseil fiscal et conformité réglementaire',
      'Conseil en gestion des ressources humaines',
      'Conseil en stratégie et transformation d\'entreprise'
    ],
    'services.grid.representation.title': 'Représentation & Accompagnement',
    'services.grid.representation.description': 'Nous facilitons l\'implantation et l\'expansion des entreprises en République Démocratique du Congo (RDC). S\'implanter ou se développer dans un marché complexe comme celui de la RDC nécessite une expertise locale et une compréhension approfondie des enjeux régionaux. ElitePartners Group SARL met son réseau et son savoir-faire au service des entreprises internationales pour garantir leur succès.',
    'services.grid.representation.features': [
      'Accompagnement administratif et légal',
      'Représentation locale',
      'Stratégies de pénétration de marché'
    ],
    'services.grid.etudes.title': 'Études & Recherches',
    'services.grid.etudes.description': 'Nous réalisons des études et des recherches pour vous fournir des analyses claires, pertinentes et exploitables. En combinant des méthodologies rigoureuses et une connaissance approfondie du marché, nous aidons nos clients à prendre des décisions éclairées et à saisir les meilleures opportunités.',
    'services.grid.etudes.features': [
      'Études de marché',
      'Études économiques',
      'Évaluations stratégiques'
    ],
    'services.grid.features.title': 'Prestations incluses :',
    'services.grid.cta.title': 'Besoin d\'un service personnalisé ?',
    'services.grid.cta.description': 'Chaque entreprise est unique. Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment ElitePartners peut vous accompagner dans votre développement en RDC.',
    'services.grid.cta.button': 'Discuter de votre projet',

    // Services Section (Home page)
    'services.section.title': 'Nos Services',
    'services.section.subtitle': 'Des solutions professionnelles adaptées pour votre succès en RDC',
    'services.section.conseil.title': 'Services-Conseils',
    'services.section.conseil.description': 'Conseil stratégique et opérationnel pour accompagner les entreprises à relever leurs défis complexes.',
    'services.section.representation.title': 'Représentation & Accompagnement',
    'services.section.representation.description': 'Facilitation de l\'implantation et l\'expansion des entreprises en République Démocratique du Congo.',
    'services.section.etudes.title': 'Études & Recherches',
    'services.section.etudes.description': 'Analyses claires et pertinentes pour des décisions éclairées et la saisie des meilleures opportunités.',
    'services.section.cta': 'Découvrir tous nos services',

    // Clients Carousel
    'clients.title': 'Ils nous ont choisi',
    'clients.subtitle': 'Plus de 50+ entreprises nous font confiance pour leur développement en République Démocratique du Congo',

    // Sectors Page
    'sectors.hero.title': 'Là où l\'opportunité rencontre l\'expertise',
    'sectors.hero.subtitle': 'De l\'agriculture à la finance en passant par le secteur minier, nous transformons les défis des industries clés en leviers de croissance durable. Découvrez les secteurs où nous faisons la différence.',
    'sectors.agricultural.title': 'Secteur Agricole',
    'sectors.agricultural.description': 'L\'agriculture est un pilier fondamental de l\'économie, offrant des opportunités dans l\'agroalimentaire, la pêche et l\'agriculture industrielle.',
    'sectors.agricultural.subsectors': ['Agroalimentaire', 'Agriculture vivrière', 'Pêche et aquaculture', 'Agriculture industrielle'],
    'sectors.mining.title': 'Secteur Minier',
    'sectors.mining.description': 'Le secteur minier est au cœur du développement, englobant l\'assurance, la fiscalité et la gestion financière des ressources naturelles.',
    'sectors.mining.subsectors': ['Assurance minière', 'Fiscalité et redevances minières', 'Banques d\'investissement spécialisées', 'Audit et gestion financière minière'],
    'sectors.financial.title': 'Secteur Financier',
    'sectors.financial.description': 'Le secteur financier accompagne la croissance à travers l\'assurance, la gestion d\'actifs et l\'audit financier.',
    'sectors.financial.subsectors': ['Assurance', 'Gestion d\'actifs', 'Audit et contrôle financier', 'Banques d\'investissement'],

    // Conseil Service Page
    'conseil.title': 'Services-Conseils',
    'conseil.fiscal.title': 'Conseil fiscal et conformité réglementaire',
    'conseil.fiscal.description': 'Nous vous aidons à naviguer dans les complexités fiscales et réglementaires grâce à des solutions adaptées :',
    'conseil.fiscal.bullets': [
      'Optimisation fiscale pour réduire vos charges tout en respectant les lois en vigueur.',
      'Gestion de la conformité selon les normes locales et internationales.',
      'Diagnostic fiscal pour identifier les risques et opportunités.'
    ],
    'conseil.bi.title': 'Business Intelligence et Data Analytics',
    'conseil.bi.bullets': [
      'Conception et automatisation de rapports interactifs : Création de tableaux de bord dynamiques avec Microsoft Power BI et Excel pour une analyse rapide et visuelle des données.',
      'Reporting financier et analyse de performance : Suivi des indicateurs financiers et organisationnels pour une meilleure gestion.',
      'Modélisation et exploration des données : Identification des tendances et réalisation de prévisions pour guider les décisions stratégiques.',
      'Formation et accompagnement : Développement des compétences de vos équipes pour utiliser efficacement les outils d\'analyse et de reporting.'
    ],
    'conseil.strategy.title': 'Conseil en Stratégie et Transformation d\'Entreprise',
    'conseil.strategy.description': 'Nous aidons les entreprises à définir leur vision stratégique et à la traduire en actions concrètes. Nos services incluent :',
    'conseil.strategy.bullets': [
      'Élaboration de stratégies de croissance, d\'expansion ou de diversification.',
      'Optimisation des processus opérationnels pour améliorer l\'efficacité.',
      'Transformation organisationnelle pour s\'adapter aux défis économiques et technologiques.'
    ],
    'conseil.risk.title': 'Gestion des risques',
    'conseil.risk.description': 'Nous identifions, évaluons et élaborons des plans de gestion pour les risques financiers, stratégiques et opérationnels afin de garantir la pérennité et la résilience de votre entreprise.',
    'conseil.hr.title': 'Conseil en Gestion des Ressources humaines',
    'conseil.hr.description': 'Nous développons des stratégies RH pour attirer, fidéliser et développer les talents, tout en alignant les équipes sur les objectifs stratégiques de l\'entreprise.',
    'conseil.hr.subtitle': 'Pour une organisation agile, performante et résiliente, capable de s\'adapter aux défis économiques et technologiques.',
    'conseil.cta.text': 'Besoin d\'accompagnement pour optimiser votre gestion fiscale ou améliorer votre business intelligence ?',
    'conseil.cta.button': 'Contactez-nous',

    // Representation Service Page
    'representation.title': 'Représentation & Accompagnement',
    'representation.admin.title': 'Accompagnement administratif et légal',
    'representation.admin.description': 'Nous gérons les démarches administratives et juridiques nécessaires pour établir votre entreprise en toute conformité :',
    'representation.admin.bullets': [
      'Création d\'entités légales : Assistance dans l\'établissement de votre entreprise en conformité avec les réglementations locales.',
      'Gestion des autorisations : Obtention des licences et permis nécessaires pour vos activités.'
    ],
    'representation.local.title': 'Représentation locale',
    'representation.local.description': 'Nous agissons en tant que représentant local pour défendre vos intérêts auprès des parties prenantes :',
    'representation.local.bullets': [
      'Gestion des relations commerciales et institutionnelles publiques et privées : Agir en tant que représentant local pour défendre vos intérêts auprès des parties prenantes.',
      'Soutien logistique : Coordination des opérations administratives et organisationnelles pour simplifier vos démarches.'
    ],
    'representation.market.title': 'Stratégies de pénétration de marché',
    'representation.market.description': 'Nous élaborons des stratégies adaptées pour maximiser vos chances de succès sur le marché congolais :',
    'representation.market.bullets': [
      'Études de faisabilité : Analyse des opportunités de marché et des risques liés à votre implantation.',
      'Développement de plans d\'action : Élaboration de stratégies pour conquérir de nouveaux marchés et segments.'
    ],
    'representation.cta.text': 'Prêt à développer votre entreprise en République Démocratique du Congo ?',
    'representation.cta.button': 'Contactez-nous',

    // Etudes Service Page
    'etudes.title': 'Études & Recherches',
    'etudes.subtitle': 'Des études approfondies pour des décisions éclairées',
    'etudes.market.title': 'Études de marché',
    'etudes.market.description': 'Nous analysons les dynamiques du marché pour vous aider à comprendre votre environnement et à identifier les opportunités :',
    'etudes.market.bullets': [
      'Analyse de la demande pour évaluer les besoins des consommateurs.',
      'Études concurrentielles pour comprendre les forces et faiblesses des acteurs du marché.'
    ],
    'etudes.economic.title': 'Études économiques',
    'etudes.economic.description': 'Nous vous fournissons des analyses économiques détaillées pour guider vos projets à court, moyen et long terme :',
    'etudes.economic.bullets': [
      'Analyse des tendances sectorielles et macroéconomiques.',
      'Études d\'impact pour évaluer les effets économiques et sociaux de vos projets.'
    ],
    'etudes.strategic.title': 'Évaluations stratégiques',
    'etudes.strategic.description': 'Nous réalisons des études approfondies pour évaluer la viabilité de vos projets et initiatives :',
    'etudes.strategic.bullets': [
      'Études de faisabilité technique, financière et opérationnelle.',
      'Analyses sectorielles pour identifier les opportunités de croissance et les défis à relever.'
    ],
    'etudes.cta.text': 'Besoin d\'une étude de marché ou d\'une analyse approfondie pour votre entreprise ?',
    'etudes.cta.button': 'Contactez-nous',
    'etudes.cta.title': 'Prêt à démarrer votre projet ?',

    // Footer
    'footer.company.description': 'Elite Partners - Votre partenaire de confiance pour l\'excellence et l\'innovation en République Démocratique du Congo.',
    'footer.quicklinks.title': 'Liens Rapides',
    'footer.services.title': 'Nos Services',
    'footer.services.list': ['Conseil en stratégie', 'Transformation digitale', 'Gestion de projet', 'Formation professionnelle'],
    'footer.contact.title': 'Contact',
    'footer.copyright': '© {year} Elite Partners RDC. Tous droits réservés.',

    // Contact Form
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name.label': 'Nom complet',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.subject.label': 'Sujet',
    'contact.form.subject.placeholder': 'Sujet de votre message',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.submit': 'Envoyer le message',
    'contact.info.title': 'Nos coordonnées',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Adresse',
    'contact.info.linkedin': 'LinkedIn',

    // Common
    'common.contact': 'Contactez-nous',
    'common.learnMore': 'En savoir plus',
    'common.readMore': 'Lire la suite',
    'common.backToTop': 'Retour en haut',
    'common.subsectors': 'Sous-secteurs :',
    'about.values.description': 'Nos valeurs fondamentales guident chacune de nos actions et définissent notre culture d\'entreprise.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.sectors': 'Sectors',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title.part1': 'Strategic Consulting',
    'hero.title.part2': 'Leaders',
    'hero.title.part3': 'in DRC',
    'hero.subtitle': '15 years of expertise serving your expansion in the Democratic Republic of Congo. We transform complex challenges into sustainable growth opportunities.',
    'hero.cta.primary': 'Get Started Now',
    'hero.cta.secondary': 'Discover Our Services',

    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Discover ElitePartners Group SARL, your strategic partner with excellence',
    'about.who.title': 'Who We Are',
    'about.who.description': 'ElitePartners Group SARL is a consulting firm specialized in supporting companies at every stage of their development. Whether to optimize your operations, penetrate a new market or secure your activities, we bring you local expertise combined with international standards.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Create sustainable value for our clients by enabling them to meet their most complex challenges and transform their ambitions into concrete achievements. ElitePartners Group SARL: your partner for strategic, operational and financial excellence.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'ElitePartners aspires to become the undisputed leader in facilitating Canadian investments in the DRC. We are committed to developing integrated solutions that maximize our clients\' profitability while ensuring compliance and respect for best ethical practices.',
    'about.values.title': 'Our Values',
    'about.values.leadership.title': 'Leadership',
    'about.values.leadership.description': 'We cultivate ethical leadership that inspires trust and respect.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'We constantly strive to achieve excellence in all our services and interactions.',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.description': 'We maintain unwavering integrity in all our actions.',
    'about.values.commitment.title': 'Commitment',
    'about.values.commitment.description': 'We are committed to exceeding expectations by providing superior quality services.',

    // Services Page
    'services.hero.title': 'Our Services, Your Success',
    'services.hero.subtitle': 'Discover how our customized solutions transform your challenges into sustainable growth opportunities across all key sectors.',
    'services.grid.title': 'Our Services',
    'services.grid.subtitle': 'Discover our complete range of services designed to support your growth and optimize your performance in the DRC',
    'services.grid.conseil.title': 'Consulting Services',
    'services.grid.conseil.description': 'We offer strategic and operational consulting services to help companies meet their complex challenges and achieve their performance objectives. Through a results-oriented approach, we develop effective strategies and provide concrete solutions to optimize your operations, strengthen your resilience and improve your overall performance.',
    'services.grid.conseil.features': [
      'Tax advisory and regulatory compliance',
      'Human resources management consulting',
      'Strategy and business transformation consulting'
    ],
    'services.grid.representation.title': 'Representation & Support',
    'services.grid.representation.description': 'We facilitate the establishment and expansion of companies in the Democratic Republic of Congo (DRC). Establishing or developing in a complex market like that of the DRC requires local expertise and a deep understanding of regional issues. ElitePartners Group SARL puts its network and know-how at the service of international companies to guarantee their success.',
    'services.grid.representation.features': [
      'Administrative and legal support',
      'Local representation',
      'Market penetration strategies'
    ],
    'services.grid.etudes.title': 'Studies & Research',
    'services.grid.etudes.description': 'We conduct studies and research to provide you with clear, relevant and actionable analyses. By combining rigorous methodologies and deep market knowledge, we help our clients make informed decisions and seize the best opportunities.',
    'services.grid.etudes.features': [
      'Market studies',
      'Economic studies',
      'Strategic assessments'
    ],
    'services.grid.features.title': 'Included services:',
    'services.grid.cta.title': 'Need a personalized service?',
    'services.grid.cta.description': 'Every company is unique. Contact us to discuss your specific needs and discover how ElitePartners can support you in your development in the DRC.',
    'services.grid.cta.button': 'Discuss your project',

    // Services Section (Home page)
    'services.section.title': 'Our Services',
    'services.section.subtitle': 'Professional solutions adapted for your success in the DRC',
    'services.section.conseil.title': 'Consulting Services',
    'services.section.conseil.description': 'Strategic and operational consulting to help companies meet their complex challenges.',
    'services.section.representation.title': 'Representation & Support',
    'services.section.representation.description': 'Facilitation of the establishment and expansion of companies in the Democratic Republic of Congo.',
    'services.section.etudes.title': 'Studies & Research',
    'services.section.etudes.description': 'Clear and relevant analyses for informed decisions and seizing the best opportunities.',
    'services.section.cta': 'Discover all our services',

    // Clients Carousel
    'clients.title': 'They chose us',
    'clients.subtitle': 'More than 50+ companies trust us for their development in the Democratic Republic of Congo',

    // Sectors Page
    'sectors.hero.title': 'Where Opportunity Meets Expertise',
    'sectors.hero.subtitle': 'From agriculture to finance through the mining sector, we transform the challenges of key industries into levers for sustainable growth. Discover the sectors where we make a difference.',
    'sectors.agricultural.title': 'Agricultural Sector',
    'sectors.agricultural.description': 'Agriculture is a fundamental pillar of the economy, offering opportunities in agri-food, fishing and industrial agriculture.',
    'sectors.agricultural.subsectors': ['Agri-food', 'Subsistence agriculture', 'Fishing and aquaculture', 'Industrial agriculture'],
    'sectors.mining.title': 'Mining Sector',
    'sectors.mining.description': 'The mining sector is at the heart of development, encompassing insurance, taxation and financial management of natural resources.',
    'sectors.mining.subsectors': ['Mining insurance', 'Mining taxation and royalties', 'Specialized investment banks', 'Mining audit and financial management'],
    'sectors.financial.title': 'Financial Sector',
    'sectors.financial.description': 'The financial sector supports growth through insurance, asset management and financial auditing.',
    'sectors.financial.subsectors': ['Insurance', 'Asset management', 'Financial audit and control', 'Investment banks'],

    // Conseil Service Page
    'conseil.title': 'Consulting Services',
    'conseil.fiscal.title': 'Tax Advisory and Regulatory Compliance',
    'conseil.fiscal.description': 'We help you navigate tax and regulatory complexities with tailored solutions:',
    'conseil.fiscal.bullets': [
      'Tax optimization to reduce your costs while respecting current laws.',
      'Compliance management according to local and international standards.',
      'Tax diagnosis to identify risks and opportunities.'
    ],
    'conseil.bi.title': 'Business Intelligence and Data Analytics',
    'conseil.bi.bullets': [
      'Design and automation of interactive reports: Creation of dynamic dashboards with Microsoft Power BI and Excel for quick and visual data analysis.',
      'Financial reporting and performance analysis: Monitoring of financial and organizational indicators for better management.',
      'Data modeling and exploration: Identification of trends and forecasting to guide strategic decisions.',
      'Training and support: Development of your teams\' skills to effectively use analysis and reporting tools.'
    ],
    'conseil.strategy.title': 'Strategy and Business Transformation Consulting',
    'conseil.strategy.description': 'We help companies define their strategic vision and translate it into concrete actions. Our services include:',
    'conseil.strategy.bullets': [
      'Development of growth, expansion or diversification strategies.',
      'Optimization of operational processes to improve efficiency.',
      'Organizational transformation to adapt to economic and technological challenges.'
    ],
    'conseil.risk.title': 'Risk Management',
    'conseil.risk.description': 'We identify, assess and develop management plans for financial, strategic and operational risks to ensure the sustainability and resilience of your company.',
    'conseil.hr.title': 'Human Resources Management Consulting',
    'conseil.hr.description': 'We develop HR strategies to attract, retain and develop talent, while aligning teams with the company\'s strategic objectives.',
    'conseil.hr.subtitle': 'For an agile, high-performing and resilient organization, capable of adapting to economic and technological challenges.',
    'conseil.cta.text': 'Need support to optimize your tax management or improve your business intelligence?',
    'conseil.cta.button': 'Contact Us',

    // Representation Service Page
    'representation.title': 'Representation & Support',
    'representation.admin.title': 'Administrative and Legal Support',
    'representation.admin.description': 'We manage the administrative and legal procedures necessary to establish your company in full compliance:',
    'representation.admin.bullets': [
      'Legal entity creation: Assistance in establishing your company in compliance with local regulations.',
      'Authorization management: Obtaining the necessary licenses and permits for your activities.'
    ],
    'representation.local.title': 'Local Representation',
    'representation.local.description': 'We act as a local representative to defend your interests with stakeholders:',
    'representation.local.bullets': [
      'Management of public and private commercial and institutional relations: Acting as a local representative to defend your interests with stakeholders.',
      'Logistical support: Coordination of administrative and organizational operations to simplify your procedures.'
    ],
    'representation.market.title': 'Market Penetration Strategies',
    'representation.market.description': 'We develop adapted strategies to maximize your chances of success in the Congolese market:',
    'representation.market.bullets': [
      'Feasibility studies: Analysis of market opportunities and risks related to your establishment.',
      'Action plan development: Development of strategies to conquer new markets and segments.'
    ],
    'representation.cta.text': 'Ready to develop your business in the Democratic Republic of Congo?',
    'representation.cta.button': 'Contact Us',

    // Etudes Service Page
    'etudes.title': 'Studies & Research',
    'etudes.subtitle': 'In-depth studies for informed decisions',
    'etudes.market.title': 'Market Studies',
    'etudes.market.description': 'We analyze market dynamics to help you understand your environment and identify opportunities:',
    'etudes.market.bullets': [
      'Demand analysis to assess consumer needs.',
      'Competitive studies to understand the strengths and weaknesses of market players.'
    ],
    'etudes.economic.title': 'Economic Studies',
    'etudes.economic.description': 'We provide you with detailed economic analyses to guide your short, medium and long-term projects:',
    'etudes.economic.bullets': [
      'Analysis of sectoral and macroeconomic trends.',
      'Impact studies to assess the economic and social effects of your projects.'
    ],
    'etudes.strategic.title': 'Strategic Assessments',
    'etudes.strategic.description': 'We conduct in-depth studies to assess the viability of your projects and initiatives:',
    'etudes.strategic.bullets': [
      'Technical, financial and operational feasibility studies.',
      'Sectoral analyses to identify growth opportunities and challenges to overcome.'
    ],
    'etudes.cta.text': 'Need a market study or in-depth analysis for your company?',
    'etudes.cta.button': 'Contact Us',
    'etudes.cta.title': 'Ready to start your project?',

    // Footer
    'footer.company.description': 'Elite Partners - Your trusted partner for excellence and innovation in the Democratic Republic of Congo.',
    'footer.quicklinks.title': 'Quick Links',
    'footer.services.title': 'Our Services',
    'footer.services.list': ['Strategy consulting', 'Digital transformation', 'Project management', 'Professional training'],
    'footer.contact.title': 'Contact',
    'footer.copyright': '© {year} Elite Partners RDC. All rights reserved.',

    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to answer your questions and support you in your projects',
    'contact.form.title': 'Send us a message',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject.label': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Our Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.linkedin': 'LinkedIn',

    // Common
    'common.contact': 'Contact Us',
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.backToTop': 'Back to Top',
    'common.subsectors': 'Sub-sectors:',
    'about.values.description': 'Our fundamental values guide each of our actions and define our corporate culture.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'fr' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: 'fr' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key];
    if (translation) {
      // Handle dynamic values like {year}
      if (typeof translation === 'string' && translation.includes('{year}')) {
        return translation.replace('{year}', new Date().getFullYear().toString());
      }
      return translation;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};