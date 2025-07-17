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

    // Services Pages - Fiscal
    'services.fiscal.hero.title': 'Optimisez votre fiscalité et vos données avec notre expertise !',
    'services.fiscal.hero.subtitle': 'Bénéficiez d\'un accompagnement sur-mesure pour la conformité réglementaire, l\'optimisation fiscale et la valorisation de vos données. Nos experts vous aident à transformer vos obligations en véritables leviers de performance.',
    'services.fiscal.hero.cta': 'Demander un diagnostic gratuit',
    'services.fiscal.fiscal.title': 'Conseil fiscal et conformité réglementaire',
    'services.fiscal.fiscal.subtitle': 'Nous vous aidons à naviguer dans les complexités fiscales et réglementaires grâce à des solutions adaptées :',
    'services.fiscal.fiscal.bullets': [
      'Optimisation fiscale pour réduire vos charges tout en respectant les lois en vigueur.',
      'Gestion de la conformité selon les normes locales et internationales.',
      'Diagnostic fiscal pour identifier les risques et opportunités.'
    ],
    'services.fiscal.bi.title': 'Business Intelligence et Data Analytics',
    'services.fiscal.bi.subtitle': 'Nous exploitons vos données pour en faire un levier stratégique et améliorer votre prise de décision.',
    'services.fiscal.bi.bullets': [
      'Conception et automatisation de rapports interactifs : Création de tableaux de bord dynamiques avec Microsoft Power BI et Excel pour une analyse rapide et visuelle des données.',
      'Reporting financier et analyse de performance : Suivi des indicateurs financiers et organisationnels pour une meilleure gestion.',
      'Modélisation et exploration des données : Identification des tendances et réalisation de prévisions pour guider les décisions stratégiques.',
      'Formation et accompagnement : Développement des compétences de vos équipes pour utiliser efficacement les outils d\'analyse et de reporting.'
    ],
    'services.fiscal.cta.title': 'Vous êtes intéressés par ce service ?',
    'services.fiscal.cta.button': 'CLIQUEZ ICI',

    // Services Pages - RH
    'services.rh.hero.title': 'Développez votre capital humain avec notre expertise RH !',
    'services.rh.hero.subtitle': 'Attirez, fidélisez et faites grandir vos talents grâce à des stratégies RH innovantes et personnalisées. Nous accompagnons vos équipes pour une organisation agile, performante et résiliente.',
    'services.rh.hero.cta': 'Demander un diagnostic RH gratuit',
    'services.rh.title': 'Conseil RH et gestion des talents',
    'services.rh.subtitle': 'Nous vous accompagnons dans la structuration et l\'optimisation de votre politique RH :',
    'services.rh.bullets': [
      'Stratégies d\'attraction et de fidélisation des talents.',
      'Développement des compétences et gestion des carrières.',
      'Optimisation de l\'organisation et de la performance RH.',
      'Accompagnement au changement et transformation culturelle.'
    ],
    'services.rh.cta.title': 'Vous souhaitez booster votre capital humain ?',
    'services.rh.cta.button': 'Contactez-nous',

    // Services Pages - Stratégie
    'services.strategie.hero.title': 'Déployez votre stratégie d\'entreprise avec nos experts !',
    'services.strategie.hero.subtitle': 'Bénéficiez d\'un accompagnement sur-mesure pour définir, piloter et transformer votre stratégie. Nos consultants vous aident à anticiper les défis et à saisir les opportunités pour une croissance durable.',
    'services.strategie.hero.cta': 'Demander un diagnostic stratégique',
    'services.strategie.title': 'Conseil en stratégie et transformation',
    'services.strategie.subtitle': 'Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie :',
    'services.strategie.bullets': [
      'Élaboration de stratégies de croissance, d\'expansion ou de diversification.',
      'Optimisation des processus opérationnels pour améliorer l\'efficacité.',
      'Transformation organisationnelle pour s\'adapter aux défis économiques et technologiques.',
      'Gestion du changement et accompagnement des équipes.'
    ],
    'services.strategie.risk.title': 'Gestion des risques',
    'services.strategie.risk.subtitle': 'Nous identifions, évaluons et élaborons des plans de gestion pour les risques financiers, stratégiques et opérationnels afin de garantir la pérennité et la résilience de votre entreprise.',
    'services.strategie.cta.title': 'Vous souhaitez transformer votre entreprise ?',
    'services.strategie.cta.button': 'Contactez-nous',

    // Services Pages - Représentation Administrative
    'services.representation.administratif.hero.title': 'Accompagnement Administratif & Légal Expert',
    'services.representation.administratif.hero.subtitle': 'Transformez vos ambitions en succès avec notre expertise en conformité administrative et légale en RDC. Nous gérons toutes les démarches pour que vous puissiez vous concentrer sur votre développement.',
    'services.representation.administratif.hero.cta': 'Planifier une consultation',
    'services.representation.administratif.creation.title': 'Création d\'entreprise clé en main',
    'services.representation.administratif.creation.subtitle': 'De la conception à l\'immatriculation, nous gérons l\'ensemble du processus :',
    'services.representation.administratif.creation.bullets': [
      'Choix de la forme juridique optimale',
      'Rédaction des statuts et actes constitutifs',
      'Enregistrement au registre du commerce',
      'Obtention du numéro d\'identification nationale',
      'Ouverture de compte bancaire professionnel'
    ],
    'services.representation.administratif.permis.title': 'Permis et licences sectorielles',
    'services.representation.administratif.permis.subtitle': 'Facilitation de l\'obtention de toutes les autorisations nécessaires :',
    'services.representation.administratif.permis.bullets': [
      'Licences d\'exploitation minière et forestière',
      'Autorisations sectorielles (banque, assurance, télécoms)',
      'Permis environnementaux et d\'impact',
      'Certificats de conformité et de qualité',
      'Renouvellement et suivi des autorisations'
    ],
    'services.representation.administratif.conformite.title': 'Conformité juridique continue',
    'services.representation.administratif.conformite.subtitle': 'Assistance permanente pour garantir votre conformité :',
    'services.representation.administratif.conformite.bullets': [
      'Veille réglementaire et législative',
      'Mise à jour des statuts et documents légaux',
      'Représentation légale auprès des autorités',
      'Gestion des assemblées et conseils d\'administration',
      'Accompagnement en cas de contrôle ou audit'
    ],
    'services.representation.administratif.cta.title': 'Prêt à sécuriser votre conformité ?',
    'services.representation.administratif.cta.button': 'CONTACTEZ-NOUS',

    // Services Pages - Représentation Locale
    'services.representation.locale.hero.title': 'Représentation Locale Stratégique',
    'services.representation.locale.hero.subtitle': 'Établissez une présence forte et crédible sur le marché congolais. Nous devenons l\'extension de votre équipe pour défendre vos intérêts avec professionnalisme et intégrité.',
    'services.representation.locale.hero.cta': 'Discuter de votre représentation',
    'services.representation.locale.commerciale.title': 'Représentation commerciale active',
    'services.representation.locale.commerciale.subtitle': 'Nous agissons en votre nom pour développer vos relations d\'affaires :',
    'services.representation.locale.commerciale.bullets': [
      'Gestion des relations clients et partenaires locaux',
      'Prospection et développement commercial',
      'Participation aux événements sectoriels',
      'Suivi et fidélisation de la clientèle',
      'Reporting détaillé des activités commerciales'
    ],
    'services.representation.locale.negociation.title': 'Négociation et gestion contractuelle',
    'services.representation.locale.negociation.subtitle': 'Expertise en négociation pour sécuriser vos meilleurs intérêts :',
    'services.representation.locale.negociation.bullets': [
      'Négociation d\'accords commerciaux et partenariats',
      'Rédaction et révision de contrats locaux',
      'Médiation en cas de différends commerciaux',
      'Suivi de l\'exécution des contrats',
      'Conseil en stratégie de négociation'
    ],
    'services.representation.locale.bureau.title': 'Gestion de présence physique',
    'services.representation.locale.bureau.subtitle': 'Solutions complètes pour votre présence locale :',
    'services.representation.locale.bureau.bullets': [
      'Mise en place et gestion de bureau local',
      'Recrutement et management d\'équipe locale',
      'Gestion logistique et administrative',
      'Domiciliation commerciale et postale',
      'Support technique et informatique'
    ],
    'services.representation.locale.cta.title': 'Prêt à établir votre présence locale ?',
    'services.representation.locale.cta.button': 'DEVENIR UN ACTEUR LOCAL',

    // Services Pages - Pénétration de Marché
    'services.representation.penetration.hero.title': 'Stratégies de Pénétration de Marché',
    'services.representation.penetration.hero.subtitle': 'Convertissez le potentiel du marché congolais en succès commercial tangible. Notre approche basée sur les données et l\'expertise locale vous garantit une entrée sur le marché optimisée et rentable.',
    'services.representation.penetration.hero.cta': 'Définir votre stratégie',
    'services.representation.penetration.etudes.title': 'Études de marché approfondies',
    'services.representation.penetration.etudes.subtitle': 'Analyses rigoureuses pour identifier les opportunités et minimiser les risques :',
    'services.representation.penetration.etudes.bullets': [
      'Analyse de la taille et du potentiel du marché',
      'Cartographie de la concurrence directe et indirecte',
      'Étude des comportements et préférences consommateurs',
      'Identification des barrières à l\'entrée',
      'Évaluation des canaux de distribution optimaux'
    ],
    'services.representation.penetration.strategie.title': 'Stratégie Go-to-Market personnalisée',
    'services.representation.penetration.strategie.subtitle': 'Plan d\'action sur-mesure pour un lancement réussi :',
    'services.representation.penetration.strategie.bullets': [
      'Positionnement optimal et proposition de valeur',
      'Stratégie de prix adaptée au marché local',
      'Plan de communication et marketing digital',
      'Roadmap de lancement par phases',
      'Définition des KPIs et métriques de succès'
    ],
    'services.representation.penetration.partenaires.title': 'Recherche de partenaires stratégiques',
    'services.representation.penetration.partenaires.subtitle': 'Identification et mise en relation avec les acteurs clés :',
    'services.representation.penetration.partenaires.bullets': [
      'Sourcing de distributeurs et agents commerciaux',
      'Identification de partenaires technologiques',
      'Mise en relation avec des investisseurs locaux',
      'Facilitation des négociations et accords',
      'Due diligence sur les partenaires potentiels'
    ],
    'services.representation.penetration.cta.title': 'Prêt à conquérir le marché congolais ?',
    'services.representation.penetration.cta.button': 'ÉVALUER MON POTENTIEL',

    // Services Pages - Études de Marché
    'services.etudes.marche.hero.title': 'Études de Marché Stratégiques',
    'services.etudes.marche.hero.subtitle': 'Comprenez votre marché, identifiez les opportunités et prenez des décisions éclairées grâce à nos études de marché approfondies. Notre expertise vous aide à minimiser les risques et maximiser votre potentiel de croissance.',
    'services.etudes.marche.hero.cta': 'Demander une étude personnalisée',
    'services.etudes.marche.analyse.title': 'Analyse de marché approfondie',
    'services.etudes.marche.analyse.subtitle': 'Nous analysons votre marché cible pour vous fournir des insights précieux :',
    'services.etudes.marche.analyse.bullets': [
      'Évaluation de la taille du marché et du potentiel de croissance',
      'Analyse de la concurrence et positionnement stratégique',
      'Identification des segments de clientèle les plus porteurs',
      'Étude des tendances et évolutions du secteur',
      'Analyse des barrières à l\'entrée et facteurs de succès'
    ],
    'services.etudes.marche.comportementale.title': 'Recherche comportementale client',
    'services.etudes.marche.comportementale.subtitle': 'Comprenez les motivations et comportements de vos clients :',
    'services.etudes.marche.comportementale.bullets': [
      'Enquêtes et interviews approfondies avec les consommateurs',
      'Analyse des habitudes d\'achat et processus décisionnels',
      'Étude de satisfaction et fidélisation client',
      'Mapping du parcours client et points de contact',
      'Tests de concept et validation d\'idées produit/service'
    ],
    'services.etudes.marche.recommandations.title': 'Recommandations stratégiques',
    'services.etudes.marche.recommandations.subtitle': 'Des insights transformés en actions concrètes :',
    'services.etudes.marche.recommandations.bullets': [
      'Stratégies d\'entrée sur le marché et expansion',
      'Positionnement optimal et proposition de valeur',
      'Recommandations de prix et modèles économiques',
      'Plans d\'action marketing et communication',
      'Feuille de route pour la mise en œuvre'
    ],
    'services.etudes.marche.cta.title': 'Prêt à explorer votre marché ?',
    'services.etudes.marche.cta.button': 'CONTACTEZ-NOUS',

    // Services Pages - Études Économiques
    'services.etudes.economique.hero.title': 'Études Économiques et Financières',
    'services.etudes.economique.hero.subtitle': 'Analysez la viabilité économique de vos projets et optimisez vos performances financières. Nos études approfondies vous donnent les clés pour prendre des décisions d\'investissement éclairées et sécuriser votre avenir financier.',
    'services.etudes.economique.hero.cta': 'Demander une analyse financière',
    'services.etudes.economique.faisabilite.title': 'Analyse de faisabilité économique',
    'services.etudes.economique.faisabilite.subtitle': 'Évaluez la viabilité de vos projets avant investissement :',
    'services.etudes.economique.faisabilite.bullets': [
      'Études de rentabilité et calcul du retour sur investissement (ROI)',
      'Analyse coûts-bénéfices détaillée et scenarios multiples',
      'Évaluation des risques financiers et stratégies de mitigation',
      'Modélisation financière et projections sur 3-5 ans',
      'Analyse de sensibilité et tests de stress'
    ],
    'services.etudes.economique.valorisation.title': 'Valorisation d\'entreprise',
    'services.etudes.economique.valorisation.subtitle': 'Déterminez la juste valeur de votre entreprise :',
    'services.etudes.economique.valorisation.bullets': [
      'Évaluation par multiples comparables du secteur',
      'Méthode des flux de trésorerie actualisés (DCF)',
      'Analyse patrimoniale et valeur de liquidation',
      'Évaluation pour cession, acquisition ou levée de fonds',
      'Audit financier et due diligence'
    ],
    'services.etudes.economique.optimisation.title': 'Optimisation financière',
    'services.etudes.economique.optimisation.subtitle': 'Améliorez vos performances financières :',
    'services.etudes.economique.optimisation.bullets': [
      'Optimisation de la structure de financement',
      'Gestion du besoin en fonds de roulement',
      'Stratégies de réduction des coûts opérationnels',
      'Amélioration de la rentabilité par segment d\'activité',
      'Planification budgétaire et contrôle de gestion'
    ],
    'services.etudes.economique.cta.title': 'Besoin d\'une analyse économique approfondie ?',
    'services.etudes.economique.cta.button': 'PLANIFIEZ UNE CONSULTATION',

    // Services Pages - Études Stratégiques
    'services.etudes.strategique.hero.title': 'Études Stratégiques et Organisationnelles',
    'services.etudes.strategique.hero.subtitle': 'Transformez votre vision en stratégie gagnante. Nos études stratégiques vous aident à définir votre positionnement, optimiser votre organisation et anticiper les évolutions de votre secteur pour maintenir votre avantage concurrentiel.',
    'services.etudes.strategique.hero.cta': 'Planifier votre stratégie',
    'services.etudes.strategique.planification.title': 'Planification stratégique',
    'services.etudes.strategique.planification.subtitle': 'Définissez votre cap et les moyens pour l\'atteindre :',
    'services.etudes.strategique.planification.bullets': [
      'Élaboration de vision, mission et valeurs d\'entreprise',
      'Analyse SWOT et diagnostic stratégique complet',
      'Définition d\'objectifs SMART et indicateurs de performance',
      'Cartographie des parties prenantes et écosystème',
      'Feuille de route stratégique sur 3-5 ans'
    ],
    'services.etudes.strategique.transformation.title': 'Transformation organisationnelle',
    'services.etudes.strategique.transformation.subtitle': 'Optimisez votre organisation pour la performance :',
    'services.etudes.strategique.transformation.bullets': [
      'Restructuration et réorganisation d\'entreprise',
      'Optimisation des processus et workflow',
      'Mise en place de nouvelles gouvernances',
      'Conduite du changement et gestion des résistances',
      'Développement de la culture d\'entreprise'
    ],
    'services.etudes.strategique.intelligence.title': 'Intelligence stratégique',
    'services.etudes.strategique.intelligence.subtitle': 'Anticipez les évolutions de votre environnement :',
    'services.etudes.strategique.intelligence.bullets': [
      'Veille concurrentielle et benchmarking sectoriel',
      'Analyse des tendances et signaux faibles',
      'Évaluation des opportunités et menaces',
      'Scénarios prospectifs et planning stratégique',
      'Système d\'information décisionnelle'
    ],
    'services.etudes.strategique.innovation.title': 'Innovation et développement',
    'services.etudes.strategique.innovation.subtitle': 'Stimulez l\'innovation pour rester compétitif :',
    'services.etudes.strategique.innovation.bullets': [
      'Stratégie d\'innovation et R&D',
      'Développement de nouveaux produits/services',
      'Partenariats stratégiques et écosystème innovation',
      'Transformation digitale et technologies émergentes',
      'Culture de l\'innovation et créativité organisationnelle'
    ],
    'services.etudes.strategique.cta.title': 'Prêt à transformer votre stratégie ?',
    'services.etudes.strategique.cta.button': 'DÉMARRER VOTRE TRANSFORMATION',

    // Sector Pages - Agriculture Vivrière
    'sectors.agricole.vivriere.hero.title': 'Agriculture Vivrière Durable en RDC',
    'sectors.agricole.vivriere.hero.subtitle': 'Renforcez la sécurité alimentaire et améliorez les revenus agricoles grâce à des pratiques modernes et durables. Nous accompagnons les producteurs vers une agriculture vivrière productive et respectueuse de l\'environnement.',
    'sectors.agricole.vivriere.hero.cta': 'Moderniser votre agriculture',
    'sectors.agricole.vivriere.cultures.title': 'Optimisation des cultures vivrières',
    'sectors.agricole.vivriere.cultures.subtitle': 'Maximisez vos rendements avec des pratiques agricoles adaptées :',
    'sectors.agricole.vivriere.cultures.bullets': [
      'Sélection de variétés adaptées au climat local',
      'Planification des rotations culturales optimales',
      'Gestion intégrée des sols et fertilisation naturelle',
      'Techniques de conservation de l\'eau et irrigation',
      'Protection phytosanitaire écologique'
    ],
    'sectors.agricole.vivriere.innovation.title': 'Innovation et modernisation',
    'sectors.agricole.vivriere.innovation.subtitle': 'Adoptez les technologies adaptées à votre contexte :',
    'sectors.agricole.vivriere.innovation.bullets': [
      'Introduction d\'outils agricoles améliorés',
      'Mécanisation adaptée aux petites exploitations',
      'Systèmes d\'irrigation goutte-à-goutte',
      'Utilisation de drones pour le suivi des cultures',
      'Agriculture de précision et géolocalisation'
    ],
    'sectors.agricole.vivriere.revenus.title': 'Amélioration des revenus agricoles',
    'sectors.agricole.vivriere.revenus.subtitle': 'Valorisez votre production et sécurisez vos revenus :',
    'sectors.agricole.vivriere.revenus.bullets': [
      'Organisation en coopératives et groupements',
      'Négociation collective avec les acheteurs',
      'Développement de circuits courts de commercialisation',
      'Stockage et conservation post-récolte',
      'Accès au financement et microcrédits agricoles'
    ],
    'sectors.agricole.vivriere.cta.title': 'Prêt à transformer votre agriculture vivrière ?',
    'sectors.agricole.vivriere.cta.button': 'COMMENCER LA TRANSFORMATION',

    // Sector Pages - Pêche et Aquaculture
    'sectors.agricole.peche.hero.title': 'Pêche et Aquaculture en RDC',
    'sectors.agricole.peche.hero.subtitle': 'Exploitez durablement les immenses ressources halieutiques de la RDC. Nous accompagnons le développement de la pêche artisanale et industrielle ainsi que l\'aquaculture moderne pour renforcer la sécurité alimentaire et créer des emplois.',
    'sectors.agricole.peche.hero.cta': 'Développer votre activité halieutique',
    'sectors.agricole.peche.techniques.title': 'Modernisation des techniques de pêche',
    'sectors.agricole.peche.techniques.subtitle': 'Améliorez vos rendements tout en préservant l\'écosystème :',
    'sectors.agricole.peche.techniques.bullets': [
      'Introduction d\'équipements de pêche modernes et sélectifs',
      'Formation aux techniques de pêche responsable',
      'Gestion durable des stocks halieutiques',
      'Amélioration des embarcations et motorisation',
      'Systèmes de géolocalisation et détection de bancs'
    ],
    'sectors.agricole.peche.aquaculture.title': 'Aquaculture intensive et extensive',
    'sectors.agricole.peche.aquaculture.subtitle': 'Développez une production piscicole rentable et durable :',
    'sectors.agricole.peche.aquaculture.bullets': [
      'Conception et construction d\'étangs d\'aquaculture',
      'Sélection d\'espèces adaptées au climat local',
      'Gestion de l\'alimentation et nutrition piscicole',
      'Contrôle sanitaire et prévention des maladies',
      'Aquaculture intégrée (riz-poisson, maraîchage-pisciculture)'
    ],
    'sectors.agricole.peche.transformation.title': 'Transformation et commercialisation',
    'sectors.agricole.peche.transformation.subtitle': 'Valorisez vos captures et productions piscicoles :',
    'sectors.agricole.peche.transformation.bullets': [
      'Techniques de conservation et transformation du poisson',
      'Mise en place de chaînes de froid',
      'Développement de produits à valeur ajoutée',
      'Organisation de circuits de commercialisation',
      'Certification qualité et normes sanitaires'
    ],
    'sectors.agricole.peche.cta.title': 'Prêt à développer votre activité halieutique ?',
    'sectors.agricole.peche.cta.button': 'LANCER VOTRE PROJET PÊCHE',

    // Sector Pages - Exploration Minière
    'sectors.minier.exploration.hero.title': 'Exploration Minière en RDC',
    'sectors.minier.exploration.hero.subtitle': 'Maximisez le potentiel géologique exceptionnel de la RDC grâce à nos services d\'exploration minière de pointe. Nous accompagnons vos projets depuis la prospection jusqu\'aux études de faisabilité, en respectant les meilleures pratiques internationales.',
    'sectors.minier.exploration.hero.cta': 'Développer vos projets d\'exploration',
    'sectors.minier.exploration.geologie.title': 'Études géologiques et prospection',
    'sectors.minier.exploration.geologie.subtitle': 'Identifiez et évaluez les gisements minéraux avec précision :',
    'sectors.minier.exploration.geologie.bullets': [
      'Cartographie géologique détaillée et télédétection',
      'Prospection géochimique et géophysique',
      'Programmes de forage et échantillonnage',
      'Analyses minéralogiques et géochimiques',
      'Modélisation 3D des corps minéralisés'
    ],
    'sectors.minier.exploration.faisabilite.title': 'Études de faisabilité et évaluation',
    'sectors.minier.exploration.faisabilite.subtitle': 'Validez la viabilité économique de vos projets miniers :',
    'sectors.minier.exploration.faisabilite.bullets': [
      'Estimation des réserves selon standards JORC/NI 43-101',
      'Études de préfaisabilité et faisabilité bancaire',
      'Optimisation des méthodes d\'extraction',
      'Analyse technico-économique et modélisation financière',
      'Évaluation des risques et stratégies d\'atténuation'
    ],
    'sectors.minier.exploration.permis.title': 'Permis et conformité réglementaire',
    'sectors.minier.exploration.permis.subtitle': 'Sécurisez vos droits miniers et respectez la réglementation :',
    'sectors.minier.exploration.permis.bullets': [
      'Obtention de permis de recherche et d\'exploitation',
      'Due diligence réglementaire et compliance',
      'Études d\'impact environnemental et social',
      'Négociation avec les autorités locales',
      'Gestion des relations communautaires'
    ],
    'sectors.minier.exploration.cta.title': 'Prêt à découvrir le potentiel minier ?',
    'sectors.minier.exploration.cta.button': 'COMMENCER L\'EXPLORATION',

    // Sector Pages - Agriculture Industrielle
    'sectors.agricole.industrielle.hero.title': 'Agriculture Industrielle et Agribusiness',
    'sectors.agricole.industrielle.hero.subtitle': 'Transformez l\'agriculture congolaise en industrie moderne et competitive. Nous accompagnons les projets d\'agriculture à grande échelle avec des technologies avancées et une approche business structurée pour maximiser les rendements et la rentabilité.',
    'sectors.agricole.industrielle.hero.cta': 'Industrialiser votre agriculture',
    'sectors.agricole.industrielle.mecanisation.title': 'Mécanisation et équipement moderne',
    'sectors.agricole.industrielle.mecanisation.subtitle': 'Optimisez vos opérations agricoles avec des équipements de pointe :',
    'sectors.agricole.industrielle.mecanisation.bullets': [
      'Sélection et acquisition de tracteurs et machines agricoles',
      'Mise en place de systèmes d\'irrigation automatisés',
      'Formation du personnel à l\'utilisation des équipements',
      'Maintenance préventive et gestion des pièces détachées',
      'Optimisation des coûts opérationnels et énergétiques'
    ],
    'sectors.agricole.industrielle.precision.title': 'Agriculture de précision et technologies',
    'sectors.agricole.industrielle.precision.subtitle': 'Intégrez les dernières innovations technologiques :',
    'sectors.agricole.industrielle.precision.bullets': [
      'Cartographie par drone et imagerie satellite',
      'Capteurs IoT pour surveillance en temps réel',
      'Systèmes GPS pour guidance des machines',
      'Analyse de données et intelligence artificielle',
      'Applications mobiles pour gestion d\'exploitation'
    ],
    'sectors.agricole.industrielle.agribusiness.title': 'Stratégie et gestion d\'agribusiness',
    'sectors.agricole.industrielle.agribusiness.subtitle': 'Développez une approche business structurée et rentable :',
    'sectors.agricole.industrielle.agribusiness.bullets': [
      'Business plan et modélisation financière',
      'Gestion des risques agricoles et assurances',
      'Optimisation de la chaîne d\'approvisionnement',
      'Contrôle de gestion et tableaux de bord',
      'Stratégies de financement et levée de fonds'
    ],
    'sectors.agricole.industrielle.cta.title': 'Prêt à révolutionner votre agriculture ?',
    'sectors.agricole.industrielle.cta.button': 'LANCER VOTRE TRANSFORMATION',

    // Sector Pages - Exploitation Minière
    'sectors.minier.exploitation.hero.title': 'Exploitation Minière Moderne en RDC',
    'sectors.minier.exploitation.hero.subtitle': 'Optimisez vos opérations minières avec des technologies de pointe et des pratiques durables. Nous accompagnons l\'exploitation responsable des ressources minérales congolaises pour une rentabilité maximale et un impact environnemental minimal.',
    'sectors.minier.exploitation.hero.cta': 'Optimiser votre exploitation minière',
    'sectors.minier.exploitation.planification.title': 'Planification et optimisation des opérations',
    'sectors.minier.exploitation.planification.subtitle': 'Maximisez la productivité et l\'efficacité de vos mines :',
    'sectors.minier.exploitation.planification.bullets': [
      'Planification de mine et optimisation des séquences',
      'Sélection et dimensionnement des équipements',
      'Amélioration des processus d\'extraction',
      'Gestion des flottes et maintenance prédictive',
      'Contrôle de la qualité et rendement minier'
    ],
    'sectors.minier.exploitation.traitement.title': 'Traitement et valorisation des minerais',
    'sectors.minier.exploitation.traitement.subtitle': 'Optimisez la récupération et la qualité de vos produits :',
    'sectors.minier.exploitation.traitement.bullets': [
      'Conception d\'usines de traitement moderne',
      'Optimisation des circuits de concentration',
      'Technologies de séparation avancées',
      'Contrôle métallurgique et analyse en continu',
      'Valorisation des sous-produits et résidus'
    ],
    'sectors.minier.exploitation.durabilite.title': 'Exploitation durable et responsable',
    'sectors.minier.exploitation.durabilite.subtitle': 'Intégrez les meilleures pratiques environnementales et sociales :',
    'sectors.minier.exploitation.durabilite.bullets': [
      'Gestion environnementale et réhabilitation',
      'Sécurité au travail et santé occupationnelle',
      'Engagement communautaire et développement local',
      'Certifications internationales (ISO 14001, OHSAS)',
      'Plans de fermeture et post-exploitation'
    ],
    'sectors.minier.exploitation.cta.title': 'Prêt à moderniser votre exploitation ?',
    'sectors.minier.exploitation.cta.button': 'AMÉLIORER VOS PERFORMANCES',

    // Sector Pages - Transformation Minière
    'sectors.minier.transformation.hero.title': 'Transformation Minière et Métallurgie',
    'sectors.minier.transformation.hero.subtitle': 'Créez de la valeur ajoutée en transformant les minerais congolais en produits finis. Nous développons des chaînes de transformation modernes pour maximiser la rentabilité et créer des emplois qualifiés localement.',
    'sectors.minier.transformation.hero.cta': 'Développer votre transformation minière',
    'sectors.minier.transformation.raffinage.title': 'Raffinage et purification des métaux',
    'sectors.minier.transformation.raffinage.subtitle': 'Technologies avancées pour obtenir des métaux de haute pureté :',
    'sectors.minier.transformation.raffinage.bullets': [
      'Procédés hydrométallurgiques et pyrométallurgiques',
      'Raffinage électrolytique du cuivre et cobalt',
      'Purification des métaux précieux (or, argent)',
      'Contrôle qualité et certification LME/COMEX',
      'Optimisation énergétique des procédés'
    ],
    'sectors.minier.transformation.valeur.title': 'Industries à valeur ajoutée',
    'sectors.minier.transformation.valeur.subtitle': 'Développement d\'industries manufacturières basées sur les ressources locales :',
    'sectors.minier.transformation.valeur.bullets': [
      'Fabrication de câbles et fils électriques en cuivre',
      'Production de batteries lithium-ion',
      'Industrie des alliages spéciaux',
      'Transformation en produits semi-finis',
      'Développement de parcs industriels intégrés'
    ],
    'sectors.minier.transformation.commercialisation.title': 'Commercialisation et marchés export',
    'sectors.minier.transformation.commercialisation.subtitle': 'Accédez aux marchés internationaux avec vos produits transformés :',
    'sectors.minier.transformation.commercialisation.bullets': [
      'Stratégies de pricing et négociation commerciale',
      'Certification internationale et traçabilité',
      'Logistique et chaînes d\'approvisionnement',
      'Développement de partenariats industriels',
      'Marketing B2B et participation aux foires'
    ],
    'sectors.minier.transformation.cta.title': 'Prêt à transformer vos minerais en valeur ?',
    'sectors.minier.transformation.cta.button': 'DÉVELOPPER VOTRE INDUSTRIE',

    // Sector Pages - Commerce Minier
    'sectors.minier.commerce.hero.title': 'Commerce Minier et Négociation',
    'sectors.minier.commerce.hero.subtitle': 'Optimisez vos opérations commerciales dans le secteur minier. Nous accompagnons les négociants, traders et exportateurs dans leurs stratégies de commercialisation, gestion des risques et développement de marchés.',
    'sectors.minier.commerce.hero.cta': 'Optimiser votre commerce minier',
    'sectors.minier.commerce.negociation.title': 'Négociation et trading minier',
    'sectors.minier.commerce.negociation.subtitle': 'Maîtrisez les techniques de négociation et de trading :',
    'sectors.minier.commerce.negociation.bullets': [
      'Stratégies de pricing et analyse de marché',
      'Négociation avec les producteurs et acheteurs',
      'Trading sur les marchés à terme (LME, COMEX)',
      'Gestion des positions et couverture de risque',
      'Analyse technique et fondamentale'
    ],
    'sectors.minier.commerce.logistique.title': 'Logistique et chaînes d\'approvisionnement',
    'sectors.minier.commerce.logistique.subtitle': 'Optimisez vos opérations logistiques :',
    'sectors.minier.commerce.logistique.bullets': [
      'Organisation du transport multimodal',
      'Gestion des entrepôts et stockage',
      'Contrôle qualité et échantillonnage',
      'Documentation douanière et réglementaire',
      'Traçabilité et certification des produits'
    ],
    'sectors.minier.commerce.financement.title': 'Financement du commerce minier',
    'sectors.minier.commerce.financement.subtitle': 'Solutions de financement adaptées au secteur minier :',
    'sectors.minier.commerce.financement.bullets': [
      'Crédits commerciaux et préfinancement',
      'Lettres de crédit et garanties bancaires',
      'Factoring et affacturage',
      'Financement structuré et project finance',
      'Gestion des risques de change et de crédit'
    ],
    'sectors.minier.commerce.cta.title': 'Prêt à optimiser votre commerce minier ?',
    'sectors.minier.commerce.cta.button': 'DÉVELOPPER VOTRE ACTIVITÉ',

    // Sector Pages - Secteur Bancaire
    'sectors.financier.banques.hero.title': 'Secteur Bancaire et Financement',
    'sectors.financier.banques.hero.subtitle': 'Développez un système bancaire moderne et inclusif en RDC. Nous accompagnons les institutions financières dans leur transformation digitale, expansion de services et conformité réglementaire pour stimuler l\'inclusion financière et le développement économique.',
    'sectors.financier.banques.hero.cta': 'Moderniser vos services bancaires',
    'sectors.financier.banques.innovation.title': 'Innovation et transformation digitale',
    'sectors.financier.banques.innovation.subtitle': 'Modernisez vos services bancaires avec les dernières technologies :',
    'sectors.financier.banques.innovation.bullets': [
      'Développement de plateformes de banking mobile',
      'Implémentation de solutions de paiement digital',
      'Blockchain et cryptomonnaies pour les transferts',
      'Intelligence artificielle pour l\'analyse de crédit',
      'API banking et écosystème fintech'
    ],
    'sectors.financier.banques.entreprises.title': 'Services bancaires aux entreprises',
    'sectors.financier.banques.entreprises.subtitle': 'Solutions complètes pour accompagner le développement des entreprises :',
    'sectors.financier.banques.entreprises.bullets': [
      'Financement des PME et microentreprises',
      'Crédits commerciaux et lignes de crédit',
      'Trade finance et lettres de crédit',
      'Gestion de trésorerie et cash management',
      'Services de change et couverture de risque'
    ],
    'sectors.financier.banques.risques.title': 'Gestion des risques et conformité',
    'sectors.financier.banques.risques.subtitle': 'Renforcez votre cadre de gestion des risques et de conformité :',
    'sectors.financier.banques.risques.bullets': [
      'Mise en place de systèmes de scoring crédit',
      'Compliance anti-blanchiment (AML/CFT)',
      'Gestion des risques opérationnels et de marché',
      'Reporting réglementaire et supervision bancaire',
      'Formation du personnel aux nouvelles réglementations'
    ],
    'sectors.financier.banques.cta.title': 'Prêt à révolutionner vos services bancaires ?',
    'sectors.financier.banques.cta.button': 'TRANSFORMER VOTRE BANQUE',

    // Sector Pages - Secteur Assurance
    'sectors.financier.assurance.hero.title': 'Secteur de l\'Assurance en RDC',
    'sectors.financier.assurance.hero.subtitle': 'Développez la culture de l\'assurance et de la protection financière en RDC. Nous accompagnons les compagnies d\'assurance dans l\'innovation produit, la digitalisation et l\'expansion de leur couverture pour protéger les personnes et les entreprises.',
    'sectors.financier.assurance.hero.cta': 'Développer vos services d\'assurance',
    'sectors.financier.assurance.insurtech.title': 'InsurTech et digitalisation',
    'sectors.financier.assurance.insurtech.subtitle': 'Modernisez vos processus avec les technologies d\'assurance :',
    'sectors.financier.assurance.insurtech.bullets': [
      'Plateformes digitales de souscription en ligne',
      'Applications mobile pour gestion des polices',
      'Intelligence artificielle pour tarification dynamique',
      'Blockchain pour la transparence et anti-fraude',
      'IoT et télématique pour l\'assurance automobile'
    ],
    'sectors.financier.assurance.risques.title': 'Évaluation et gestion des risques',
    'sectors.financier.assurance.risques.subtitle': 'Renforcez vos capacités d\'analyse et de pricing :',
    'sectors.financier.assurance.risques.bullets': [
      'Modélisation actuarielle et tables de mortalité locales',
      'Évaluation des risques climatiques et environnementaux',
      'Big data et analytics pour la prédiction de sinistres',
      'Développement de produits d\'assurance innovants',
      'Gestion de portefeuille et réassurance'
    ],
    'sectors.financier.assurance.micro.title': 'Micro-assurance et inclusion financière',
    'sectors.financier.assurance.micro.subtitle': 'Démocratisez l\'accès à l\'assurance pour tous :',
    'sectors.financier.assurance.micro.bullets': [
      'Développement de produits micro-assurance abordables',
      'Assurance santé communautaire et mutualiste',
      'Assurance récolte et bétail pour agriculteurs',
      'Partenariats avec institutions de microfinance',
      'Distribution via mobile money et agents ruraux'
    ],
    'sectors.financier.assurance.cta.title': 'Prêt à transformer l\'assurance en RDC ?',
    'sectors.financier.assurance.cta.button': 'DÉVELOPPER VOS PRODUITS',

    // Sector Pages - Investissement
    'sectors.financier.investissement.hero.title': 'Investissement et Capital-Risque',
    'sectors.financier.investissement.hero.subtitle': 'Stimulez l\'investissement privé et le développement du capital-risque en RDC. Nous accompagnons les investisseurs, fonds d\'investissement et startups dans leurs stratégies de financement et de croissance.',
    'sectors.financier.investissement.hero.cta': 'Développer vos investissements',
    'sectors.financier.investissement.fonds.title': 'Fonds d\'investissement et capital-risque',
    'sectors.financier.investissement.fonds.subtitle': 'Structures et stratégies d\'investissement innovantes :',
    'sectors.financier.investissement.fonds.bullets': [
      'Création et structuration de fonds d\'investissement',
      'Capital-risque pour startups et PME innovantes',
      'Private equity et capital-développement',
      'Investissement d\'impact et finance durable',
      'Gestion de portefeuille et exit strategies'
    ],
    'sectors.financier.investissement.startups.title': 'Financement des startups et PME',
    'sectors.financier.investissement.startups.subtitle': 'Accompagnez la croissance des entreprises innovantes :',
    'sectors.financier.investissement.startups.bullets': [
      'Business plan et modélisation financière',
      'Préparation aux levées de fonds',
      'Due diligence et évaluation d\'entreprise',
      'Stratégies de croissance et expansion',
      'Mentorat et accompagnement entrepreneurial'
    ],
    'sectors.financier.investissement.marches.title': 'Marchés financiers et instruments',
    'sectors.financier.investissement.marches.subtitle': 'Développez les marchés de capitaux locaux :',
    'sectors.financier.investissement.marches.bullets': [
      'Introduction en bourse et IPO',
      'Émission d\'obligations et titres de créance',
      'Produits dérivés et couverture de risque',
      'Trading et gestion de portefeuille',
      'Régulation et supervision des marchés'
    ],
    'sectors.financier.investissement.cta.title': 'Prêt à développer l\'investissement ?',
    'sectors.financier.investissement.cta.button': 'LANCER VOS INVESTISSEMENTS',

    // Sector Pages - FinTech
    'sectors.financier.fintech.hero.title': 'FinTech et Innovation Financière',
    'sectors.financier.fintech.hero.subtitle': 'Révolutionnez les services financiers avec les technologies innovantes. Nous accompagnons les startups FinTech et institutions financières dans le développement de solutions digitales pour l\'inclusion financière.',
    'sectors.financier.fintech.hero.cta': 'Développer votre FinTech',
    'sectors.financier.fintech.paiements.title': 'Solutions de paiement digital',
    'sectors.financier.fintech.paiements.subtitle': 'Innovations dans les systèmes de paiement :',
    'sectors.financier.fintech.paiements.bullets': [
      'Plateformes de paiement mobile et e-wallets',
      'Solutions de paiement sans contact',
      'Transferts d\'argent internationaux',
      'Cryptomonnaies et stablecoins',
      'API de paiement et intégration'
    ],
    'sectors.financier.fintech.credit.title': 'Financement alternatif et crédit',
    'sectors.financier.fintech.credit.subtitle': 'Nouvelles approches du financement :',
    'sectors.financier.fintech.credit.bullets': [
      'Plateformes de crowdfunding et P2P lending',
      'Scoring alternatif et microcrédit digital',
      'Factoring et affacturage en ligne',
      'Financement de factures et supply chain finance',
      'Prêts instantanés et crédit revolving'
    ],
    'sectors.financier.fintech.ia.title': 'Intelligence artificielle et analytics',
    'sectors.financier.fintech.ia.subtitle': 'Technologies avancées pour la finance :',
    'sectors.financier.fintech.ia.bullets': [
      'Chatbots et assistants virtuels',
      'Analyse prédictive et gestion des risques',
      'Détection de fraude et sécurité',
      'Robo-advisors et gestion automatisée',
      'Big data et insights clients'
    ],
    'sectors.financier.fintech.cta.title': 'Prêt à révolutionner la finance ?',
    'sectors.financier.fintech.cta.button': 'DÉVELOPPER VOTRE SOLUTION',

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

    // Navigation Submenus - Services
    'nav.services.conseil.fiscal': 'Conseil fiscal et conformité réglementaire',
    'nav.services.conseil.rh': 'Conseil en Gestion des Ressources humaines',
    'nav.services.conseil.strategie': 'Conseil en Stratégie et Transformation d\'Entreprise',
    'nav.services.representation.administratif': 'Accompagnement administratif et légal',
    'nav.services.representation.locale': 'Représentation locale',
    'nav.services.representation.penetration': 'Stratégies de pénétration de marché',
    'nav.services.etudes.marche': 'Études de marché',
    'nav.services.etudes.economique': 'Études économiques et financières',
    'nav.services.etudes.strategique': 'Études stratégiques et organisationnelles',

    // Navigation Submenus - Sectors
    'nav.sectors.agricole.title': 'Agricole',
    'nav.sectors.agricole.agroalimentaire': 'Agroalimentaire',
    'nav.sectors.agricole.vivriere': 'Agriculture vivrière',
    'nav.sectors.agricole.peche': 'Pêche et aquaculture',
    'nav.sectors.agricole.industrielle': 'Agriculture industrielle',
    'nav.sectors.minier.title': 'Minier',
    'nav.sectors.minier.exploration': 'Exploration minière',
    'nav.sectors.minier.exploitation': 'Exploitation minière',
    'nav.sectors.minier.transformation': 'Transformation et métallurgie',
    'nav.sectors.minier.commerce': 'Commerce et négoce',
    'nav.sectors.financier.title': 'Financier',
    'nav.sectors.financier.banques': 'Secteur bancaire',
    'nav.sectors.financier.assurance': 'Assurance',
    'nav.sectors.financier.investissement': 'Investissement et gestion d\'actifs',
    'nav.sectors.financier.fintech': 'Fintech et innovation',

    // Navigation Submenus - About
    'nav.about.about.title': 'À propos',
    'nav.about.mission': 'Mission',
    'nav.about.vision': 'Vision',
    'nav.about.valeurs': 'Valeurs',
    'nav.about.projets.title': 'Projets',
    'nav.about.projets.agrobusiness': 'AgroBusiness',
    'nav.about.projets.bi': 'Business Intelligence',
    'nav.about.projets.banques': 'Banques d\'investissement spécialisées',

    // Sectors Pages
    'sectors.agricole.title': 'Sous-secteurs agricoles',
    'sectors.agricole.agroalimentaire.title': 'Agroalimentaire',
    'sectors.agricole.agroalimentaire.description': "L'agroalimentaire occupe une place centrale dans la chaîne de valeur agricole. Il s'agit de la transformation, du conditionnement et de la valorisation des produits issus de l'agriculture pour répondre aux besoins alimentaires croissants de la population. Ce sous-secteur favorise l'innovation, la création d'emplois et le développement de filières locales compétitives, tout en garantissant la sécurité alimentaire et la qualité des produits destinés à la consommation humaine et animale.",
    'sectors.agricole.vivriere.title': 'Agriculture vivrière',
    'sectors.agricole.vivriere.description': "L'agriculture vivrière est le pilier de la sécurité alimentaire dans de nombreuses régions. Elle se concentre sur la production de cultures destinées principalement à l'autoconsommation et à l'approvisionnement des marchés locaux. Ce sous-secteur valorise les savoir-faire traditionnels, la diversité des cultures et la résilience des communautés rurales, tout en contribuant à la lutte contre la pauvreté et à la préservation de l'environnement.",
    'sectors.agricole.peche.title': 'Pêche et aquaculture',
    'sectors.agricole.peche.description': "La pêche et l'aquaculture représentent des opportunités majeures pour la diversification alimentaire et le développement économique. Ce sous-secteur mise sur l'exploitation durable des ressources halieutiques, la modernisation des techniques de pêche et l'essor de l'aquaculture pour répondre à la demande croissante en protéines animales. Il favorise également la création d'emplois, la valorisation des produits locaux et la préservation des écosystèmes aquatiques.",
    'sectors.agricole.industrielle.title': 'Agriculture industrielle',
    'sectors.agricole.industrielle.description': "L'agriculture industrielle se caractérise par une production à grande échelle, hautement mécanisée et orientée vers l'exportation ou l'approvisionnement des industries agroalimentaires. Ce sous-secteur favorise l'intégration de technologies avancées, l'optimisation des rendements et la compétitivité sur les marchés internationaux. Il joue un rôle clé dans la modernisation du secteur agricole, la création de valeur ajoutée et l'attraction d'investissements.",

    'sectors.minier.title': 'Sous-secteurs miniers',
    'sectors.minier.assurance.title': 'Assurance minière',
    'sectors.minier.assurance.description': "L'assurance minière est un pilier essentiel pour la gestion des risques dans l'industrie extractive. Elle protège les investissements contre les aléas naturels, les accidents et les imprévus liés à l'exploitation des ressources. Ce sous-secteur favorise la confiance des investisseurs, la pérennité des projets miniers et la conformité aux normes internationales en matière de sécurité et d'environnement.",
    'sectors.minier.fiscal.title': 'Fiscalité et redevances minières',
    'sectors.minier.fiscal.description': "La fiscalité et les redevances minières structurent la contribution du secteur minier à l'économie nationale. Ce sous-secteur englobe la gestion des taxes, des droits et des obligations financières des entreprises minières, tout en veillant à l'équilibre entre attractivité pour les investisseurs et retombées positives pour l'État et les communautés locales. Il joue un rôle crucial dans la transparence, la redistribution des richesses et le développement durable.",
    'sectors.minier.banques.title': "Banques d'investissement spécialisées",
    'sectors.minier.banques.description': "Les banques d'investissement spécialisées accompagnent le financement et la structuration des grands projets miniers. Elles offrent des solutions sur mesure pour lever des fonds, gérer les risques financiers et optimiser la rentabilité des opérations. Ce sous-secteur favorise l'innovation financière, l'accès aux marchés internationaux et la réalisation d'investissements stratégiques à long terme.",
    'sectors.minier.audit.title': 'Audit et gestion financière minière',
    'sectors.minier.audit.description': "L'audit et la gestion financière minière garantissent la transparence, la conformité et la performance des entreprises du secteur. Ce sous-secteur englobe le contrôle des flux financiers, l'évaluation des risques, la mise en place de bonnes pratiques comptables et la production de rapports fiables pour les parties prenantes. Il contribue à renforcer la gouvernance, la crédibilité et la durabilité des activités minières.",

    'sectors.financier.title': 'Sous-secteurs financiers',
    'sectors.financier.assurance.title': 'Assurance',
    'sectors.financier.assurance.description': "Le secteur de l'assurance joue un rôle fondamental dans la protection des personnes, des biens et des investissements. Il propose des solutions adaptées pour couvrir les risques liés à la vie, à la santé, à l'activité professionnelle ou aux biens matériels. Ce sous-secteur favorise la stabilité économique, la confiance des acteurs et l'accès à des services financiers innovants, tout en contribuant à la sécurité et à la sérénité des entreprises et des particuliers.",
    'sectors.financier.gestion.title': 'Gestion d\'actifs',
    'sectors.financier.gestion.description': "La gestion d'actifs consiste à optimiser la valorisation et la rentabilité des portefeuilles financiers, immobiliers ou industriels. Ce sous-secteur met en œuvre des stratégies personnalisées pour répondre aux objectifs de croissance, de sécurité et de diversification des investisseurs. Il favorise l'innovation, la transparence et la performance, tout en accompagnant les clients dans la réalisation de leurs ambitions patrimoniales.",
    'sectors.financier.audit.title': 'Audit et contrôle financier',
    'sectors.financier.audit.description': "L'audit et le contrôle financier garantissent la fiabilité, la conformité et la transparence des opérations économiques. Ce sous-secteur englobe l'analyse des flux financiers, la vérification des comptes, l'évaluation des risques et la mise en place de procédures rigoureuses. Il contribue à renforcer la gouvernance, la crédibilité et la confiance des parties prenantes dans la gestion des ressources.",
    'sectors.financier.banques.title': "Banques d'investissement",
    'sectors.financier.banques.description': "Les banques d'investissement accompagnent les entreprises et les institutions dans leurs opérations de financement, de fusion-acquisition et de développement stratégique. Ce sous-secteur propose des solutions sur mesure pour lever des fonds, structurer des transactions complexes et accéder aux marchés internationaux. Il favorise l'innovation financière, la croissance et la compétitivité à l'échelle mondiale.",

    'sectors.back.button': 'Retour aux secteurs',

    // Services Pages
    'services.economique.title': 'Études économiques',
    'services.economique.subtitle': 'Analyse de la viabilité, des risques et des opportunités économiques de votre projet.',
    'services.economique.why.title': 'Pourquoi réaliser une étude économique ?',
    'services.economique.avantages.vision.title': 'Vision stratégique',
    'services.economique.avantages.vision.desc': 'Prendre des décisions éclairées et anticiper les évolutions du marché.',
    'services.economique.avantages.croissance.title': 'Croissance durable',
    'services.economique.avantages.croissance.desc': 'Optimiser la rentabilité et la viabilité de votre projet.',
    'services.economique.avantages.risques.title': 'Gestion des risques',
    'services.economique.avantages.risques.desc': 'Identifier et atténuer les risques économiques majeurs.',
    'services.economique.avantages.impact.title': 'Impact local',
    'services.economique.avantages.impact.desc': 'Créer de la valeur et des emplois sur votre territoire.',
    'services.economique.sections.resume.title': 'Résumé économique',
    'services.economique.sections.resume.content': 'Cette étude économique vise à démontrer la solidité et la viabilité du modèle d\'affaires envisagé. En s\'appuyant sur les données issues de l\'étude de marché, elle évalue la structure des coûts, les sources de revenus, ainsi que les conditions nécessaires à l\'atteinte de la rentabilité.',
    'services.economique.sections.modele.title': 'Modèle économique',
    'services.economique.sections.modele.content': 'Le modèle économique repose sur un équilibre entre coûts de développement, efforts d\'acquisition client et génération de revenus à travers une offre claire et évolutive. Il prend en compte :',
    'services.economique.sections.modele.list': [
      'Une ou plusieurs sources de revenus définies en fonction du positionnement stratégique.',
      'Une structure de coûts optimisée combinant charges fixes et variables.',
      'Des marges prévues permettant une exploitation durable et un potentiel de croissance à moyen terme.',
      'Un seuil de rentabilité atteignable en fonction de l\'évolution naturelle de la clientèle et des efforts commerciaux.'
    ],
    'services.economique.sections.previsions.title': 'Prévisions financières',
    'services.economique.sections.previsions.content': 'Des prévisions financières ont été établies sur un horizon pluriannuel, avec une attention particulière portée à :',
    'services.economique.sections.previsions.list': [
      'L\'évolution progressive du chiffre d\'affaires.',
      'La maîtrise des charges opérationnelles.',
      'La constitution d\'une trésorerie suffisante pour soutenir la croissance.',
      'La mise en place d\'indicateurs de suivi (résultat, flux de trésorerie, rentabilité).'
    ],
    'services.economique.sections.financement.title': 'Besoins en financement',
    'services.economique.sections.financement.content': 'Le projet nécessite un apport initial afin de couvrir les premières phases critiques, incluant le développement, la mise en marché et le recrutement des ressources essentielles. Un plan de financement a été conçu pour répartir les besoins entre les fonds propres, les aides disponibles et les partenaires financiers potentiels.',
    'services.economique.sections.viabilite.title': 'Viabilité et rentabilité',
    'services.economique.sections.viabilite.content': 'L\'analyse économique met en évidence un retour sur investissement réaliste à moyen terme, reposant sur :',
    'services.economique.sections.viabilite.list': [
      'Une montée en charge progressive et maîtrisée.',
      'Une fidélisation efficace de la clientèle.',
      'Une stratégie de rentabilité basée sur la récurrence et la valeur moyenne par client.',
      'Un alignement entre les coûts d\'acquisition et la valeur générée par client sur le long terme.'
    ],
    'services.economique.sections.retombees.title': 'Retombées économiques',
    'services.economique.sections.retombees.content': 'Au-delà des indicateurs internes de performance, le projet présente des retombées positives à l\'échelle locale et sectorielle :',
    'services.economique.sections.retombees.list': [
      'Création d\'emplois directs et indirects.',
      'Valorisation des compétences locales.',
      'Dynamisation d\'un segment de marché en mutation.',
      'Effets induits sur les partenaires, sous-traitants ou écosystèmes connexes.'
    ],
    'services.economique.sections.risques.title': 'Risques économiques',
    'services.economique.sections.risques.content': 'Plusieurs risques ont été identifiés, notamment :',
    'services.economique.sections.risques.list': [
      'Les fluctuations liées au contexte économique général.',
      'Les variations de coût liées à l\'acquisition client ou à la chaîne de production.',
      'La dépendance potentielle à certains fournisseurs ou canaux de distribution.'
    ],
    'services.economique.sections.risques.end': 'Des stratégies d\'atténuation sont prévues : plan de contingence, diversification des canaux, automatisation, partenariats stratégiques.',
    'services.economique.sections.hypotheses.title': 'Hypothèses retenues',
    'services.economique.sections.hypotheses.content': 'L\'ensemble des prévisions repose sur des hypothèses prudentes et cohérentes avec les tendances observées sur le marché :',
    'services.economique.sections.hypotheses.list': [
      'Taux de croissance du secteur.',
      'Évolution des comportements consommateurs.',
      'Durée du cycle de vente.',
      'Taux d\'adoption de l\'offre selon les segments cibles.'
    ],
    'services.economique.cta.title': 'Besoin d\'une étude économique personnalisée ?',
    'services.economique.cta.subtitle': 'Contactez-nous pour discuter de votre projet et obtenir une analyse sur-mesure adaptée à vos besoins et à votre secteur.',
    'services.economique.cta.button': 'Discuter de votre projet',

    // About Page
    'about.hero.title': 'À Propos d\'Elite Partners',
    'about.hero.subtitle': 'Découvrez notre mission, notre vision et nos valeurs qui guident notre engagement envers l\'excellence et l\'innovation en République Démocratique du Congo. Nous sommes votre partenaire de confiance pour transformer les défis en opportunités.',
    'about.hero.cta': 'En savoir plus',
    'about.content.title': 'À Propos d\'Elite Partners',
    'about.mission.title': 'Notre Mission',
    'about.mission.subtitle': 'Accompagner l\'émergence économique de la RDC :',
    'about.mission.items': [
      'Faciliter l\'accès aux opportunités d\'investissement',
      'Accompagner les entreprises dans leur développement',
      'Promouvoir l\'innovation et l\'excellence opérationnelle',
      'Contribuer au développement durable du pays',
      'Créer des ponts entre les acteurs locaux et internationaux'
    ],
    'about.vision.title': 'Notre Vision',
    'about.vision.subtitle': 'Devenir le partenaire de référence en RDC :',
    'about.vision.items': [
      'Être reconnu comme un leader de l\'innovation et de l\'excellence',
      'Contribuer à faire de la RDC un hub économique régional',
      'Développer des solutions durables et inclusives',
      'Inspirer la prochaine génération d\'entrepreneurs',
      'Créer un impact positif sur les communautés locales'
    ],
    'about.values.title': 'Nos Valeurs',
    'about.values.subtitle': 'Les principes qui guident nos actions :',
    'about.values.items': [
      'Excellence : Recherche constante de la qualité et de l\'innovation',
      'Intégrité : Éthique et transparence dans toutes nos relations',
      'Collaboration : Travail d\'équipe et partenariats durables',
      'Responsabilité : Engagement envers nos clients et la société',
      'Adaptabilité : Flexibilité face aux défis et opportunités'
    ],
    'about.cta.subtitle': 'Prêt à collaborer avec nous ?',
    'about.cta.button': 'NOUS CONTACTER',

    // Sector Pages - Agroalimentaire
    'sectors.agroalimentaire.hero.title': 'Secteur Agroalimentaire en RDC',
    'sectors.agroalimentaire.hero.subtitle': 'Transformez le potentiel agricole de la RDC en opportunités d\'affaires durables. Nous accompagnons les entreprises agroalimentaires dans leur développement, de la production à la commercialisation, en respectant les standards internationaux.',
    'sectors.agroalimentaire.hero.cta': 'Développer votre projet agroalimentaire',
    'sectors.agroalimentaire.transformation.title': 'Transformation et valorisation des produits',
    'sectors.agroalimentaire.transformation.subtitle': 'Optimisez la chaîne de valeur de vos produits agricoles :',
    'sectors.agroalimentaire.transformation.items': [
      'Conseil en technologies de transformation alimentaire',
      'Mise en place d\'unités de transformation modernes',
      'Développement de nouveaux produits alimentaires',
      'Optimisation des procédés de conservation',
      'Accompagnement vers l\'agriculture biologique certifiée'
    ],
    'sectors.agroalimentaire.quality.title': 'Contrôle qualité et certifications',
    'sectors.agroalimentaire.quality.subtitle': 'Garantissez la conformité aux standards internationaux :',
    'sectors.agroalimentaire.quality.items': [
      'Mise en place de systèmes HACCP et ISO 22000',
      'Certification biologique et commerce équitable',
      'Traçabilité complète des produits alimentaires',
      'Formation du personnel aux bonnes pratiques',
      'Audits qualité et accompagnement certification'
    ],
    'sectors.agroalimentaire.distribution.title': 'Distribution et accès aux marchés',
    'sectors.agroalimentaire.distribution.subtitle': 'Développez vos canaux de distribution :',
    'sectors.agroalimentaire.distribution.items': [
      'Stratégies de pénétration des marchés locaux et régionaux',
      'Développement de réseaux de distribution',
      'Négociation avec les grandes surfaces et distributeurs',
      'Marketing et communication produits alimentaires',
      'Export vers les marchés internationaux'
    ],
    'sectors.agroalimentaire.cta.subtitle': 'Prêt à valoriser vos produits agroalimentaires ?',
    'sectors.agroalimentaire.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Vivrière
    'sectors.vivriere.hero.title': 'Agriculture Vivrière en RDC',
    'sectors.vivriere.hero.subtitle': 'Développez une agriculture durable et résiliente pour assurer la sécurité alimentaire. Nous accompagnons les producteurs dans l\'optimisation de leurs cultures vivrières et l\'amélioration de leur productivité.',
    'sectors.vivriere.hero.cta': 'Développer votre projet agricole',
    'sectors.vivriere.production.title': 'Production et diversification',
    'sectors.vivriere.production.subtitle': 'Optimisez votre production agricole :',
    'sectors.vivriere.production.items': [
      'Sélection des cultures adaptées au climat local',
      'Techniques de production durable et résiliente',
      'Diversification des cultures pour la sécurité alimentaire',
      'Optimisation des rendements et de la qualité',
      'Gestion intégrée des ressources naturelles'
    ],
    'sectors.vivriere.techniques.title': 'Techniques modernes et traditionnelles',
    'sectors.vivriere.techniques.subtitle': 'Combinez innovation et savoir-faire local :',
    'sectors.vivriere.techniques.items': [
      'Intégration de technologies agricoles modernes',
      'Préservation des techniques traditionnelles éprouvées',
      'Formation aux bonnes pratiques agricoles',
      'Gestion durable de l\'eau et des sols',
      'Adaptation aux changements climatiques'
    ],
    'sectors.vivriere.marche.title': 'Accès aux marchés locaux',
    'sectors.vivriere.marche.subtitle': 'Valorisez votre production :',
    'sectors.vivriere.marche.items': [
      'Développement de circuits courts de commercialisation',
      'Organisation des producteurs en coopératives',
      'Amélioration de la qualité et de la présentation',
      'Accès aux marchés urbains et ruraux',
      'Stabilisation des prix et des revenus'
    ],
    'sectors.vivriere.cta.subtitle': 'Prêt à développer votre agriculture vivrière ?',
    'sectors.vivriere.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Pêche
    'sectors.peche.hero.title': 'Pêche et Aquaculture en RDC',
    'sectors.peche.hero.subtitle': 'Exploitez le potentiel halieutique de la RDC de manière durable. Nous accompagnons les acteurs de la pêche et de l\'aquaculture dans le développement de leurs activités tout en préservant les écosystèmes.',
    'sectors.peche.hero.cta': 'Développer votre projet halieutique',
    'sectors.peche.durable.title': 'Pêche durable et responsable',
    'sectors.peche.durable.subtitle': 'Développez une pêche respectueuse de l\'environnement :',
    'sectors.peche.durable.items': [
      'Techniques de pêche sélectives et durables',
      'Gestion des stocks et des ressources halieutiques',
      'Formation aux bonnes pratiques de pêche',
      'Équipements modernes et respectueux de l\'environnement',
      'Certification MSC et labels de qualité'
    ],
    'sectors.peche.aquaculture.title': 'Développement de l\'aquaculture',
    'sectors.peche.aquaculture.subtitle': 'Diversifiez vos activités avec l\'aquaculture :',
    'sectors.peche.aquaculture.items': [
      'Études de faisabilité pour projets aquacoles',
      'Conception et construction d\'installations',
      'Sélection des espèces adaptées au climat local',
      'Gestion de la qualité de l\'eau et de l\'alimentation',
      'Formation aux techniques d\'élevage'
    ],
    'sectors.peche.transformation.title': 'Transformation et valorisation',
    'sectors.peche.transformation.subtitle': 'Optimisez la valeur de vos produits :',
    'sectors.peche.transformation.items': [
      'Techniques de conservation et de transformation',
      'Développement de produits à valeur ajoutée',
      'Contrôle qualité et traçabilité',
      'Packaging et présentation des produits',
      'Accès aux marchés locaux et internationaux'
    ],
    'sectors.peche.cta.subtitle': 'Prêt à développer vos activités halieutiques ?',
    'sectors.peche.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Industrielle
    'sectors.industrielle.hero.title': 'Agriculture Industrielle en RDC',
    'sectors.industrielle.hero.subtitle': 'Développez une agriculture à grande échelle et hautement mécanisée. Nous accompagnons les investisseurs dans la mise en place de projets agricoles industriels compétitifs et durables.',
    'sectors.industrielle.hero.cta': 'Développer votre projet industriel',
    'sectors.industrielle.mecanisation.title': 'Mécanisation et technologies',
    'sectors.industrielle.mecanisation.subtitle': 'Modernisez vos opérations agricoles :',
    'sectors.industrielle.mecanisation.items': [
      'Sélection d\'équipements agricoles adaptés',
      'Formation aux nouvelles technologies agricoles',
      'Optimisation des processus de production',
      'Gestion de la maintenance et des pièces détachées',
      'Intégration de solutions numériques'
    ],
    'sectors.industrielle.production.title': 'Production à grande échelle',
    'sectors.industrielle.production.subtitle': 'Optimisez votre production industrielle :',
    'sectors.industrielle.production.items': [
      'Planification et gestion des cultures industrielles',
      'Optimisation des rendements et de la productivité',
      'Gestion des intrants et des ressources',
      'Contrôle qualité et certification',
      'Logistique et transport des produits'
    ],
    'sectors.industrielle.export.title': 'Export et marchés internationaux',
    'sectors.industrielle.export.subtitle': 'Accédez aux marchés internationaux :',
    'sectors.industrielle.export.items': [
      'Études de marché et de faisabilité export',
      'Certification et conformité internationale',
      'Logistique et transport international',
      'Négociation avec les acheteurs internationaux',
      'Gestion des risques et des assurances'
    ],
    'sectors.industrielle.cta.subtitle': 'Prêt à développer votre agriculture industrielle ?',
    'sectors.industrielle.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Minier Exploration
    'sectors.minier.exploration.hero.title': 'Exploration Minière en RDC',
    'sectors.minier.exploration.hero.subtitle': 'Découvrez et évaluez le potentiel minier de la RDC. Nous accompagnons les entreprises d\'exploration dans leurs projets de prospection et d\'évaluation des ressources minérales.',
    'sectors.minier.exploration.hero.cta': 'Développer votre projet d\'exploration',
    'sectors.minier.exploration.prospection.title': 'Prospection et géologie',
    'sectors.minier.exploration.prospection.subtitle': 'Identifiez les zones de potentiel minier :',
    'sectors.minier.exploration.prospection.items': [
      'Études géologiques et géophysiques',
      'Cartographie et modélisation 3D',
      'Échantillonnage et analyse des minéraux',
      'Évaluation des ressources et réserves',
      'Rapports techniques conformes aux standards internationaux'
    ],
    'sectors.minier.exploration.permis.title': 'Gestion des permis et autorisations',
    'sectors.minier.exploration.permis.subtitle': 'Obtenez les autorisations nécessaires :',
    'sectors.minier.exploration.permis.items': [
      'Demande et gestion des permis d\'exploration',
      'Conformité réglementaire et environnementale',
      'Négociation avec les autorités locales',
      'Gestion des relations avec les communautés',
      'Suivi des obligations légales et fiscales'
    ],
    'sectors.minier.exploration.technologies.title': 'Technologies d\'exploration avancées',
    'sectors.minier.exploration.technologies.subtitle': 'Utilisez les dernières technologies :',
    'sectors.minier.exploration.technologies.items': [
      'Télédétection et imagerie satellitaire',
      'Systèmes d\'information géographique (SIG)',
      'Technologies de forage et d\'échantillonnage',
      'Analyse géochimique et minéralogique',
      'Modélisation prédictive et IA'
    ],
    'sectors.minier.exploration.cta.subtitle': 'Prêt à explorer le potentiel minier de la RDC ?',
    'sectors.minier.exploration.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Minier Exploitation
    'sectors.minier.exploitation.hero.title': 'Exploitation Minière en RDC',
    'sectors.minier.exploitation.hero.subtitle': 'Développez des opérations minières efficaces et durables. Nous accompagnons les entreprises minières dans l\'optimisation de leurs activités d\'exploitation et la maximisation de leur rentabilité.',
    'sectors.minier.exploitation.hero.cta': 'Développer votre projet d\'exploitation',
    'sectors.minier.exploitation.planification.title': 'Planification et optimisation',
    'sectors.minier.exploitation.planification.subtitle': 'Optimisez vos opérations minières :',
    'sectors.minier.exploitation.planification.items': [
      'Planification minière à court et long terme',
      'Optimisation des méthodes d\'extraction',
      'Gestion des stocks et de la production',
      'Planification des équipements et de la main-d\'œuvre',
      'Analyse de rentabilité et de viabilité'
    ],
    'sectors.minier.exploitation.securite.title': 'Sécurité et environnement',
    'sectors.minier.exploitation.securite.subtitle': 'Assurez des opérations sécurisées :',
    'sectors.minier.exploitation.securite.items': [
      'Mise en place de systèmes de sécurité',
      'Gestion des risques et des incidents',
      'Conformité environnementale',
      'Formation du personnel aux bonnes pratiques',
      'Audits de sécurité et d\'environnement'
    ],
    'sectors.minier.exploitation.maintenance.title': 'Maintenance et équipements',
    'sectors.minier.exploitation.maintenance.subtitle': 'Optimisez la performance de vos équipements :',
    'sectors.minier.exploitation.maintenance.items': [
      'Gestion préventive et prédictive',
      'Optimisation des coûts de maintenance',
      'Formation des équipes techniques',
      'Gestion des pièces détachées',
      'Amélioration continue des processus'
    ],
    'sectors.minier.exploitation.cta.subtitle': 'Prêt à optimiser vos opérations minières ?',
    'sectors.minier.exploitation.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Minier Transformation
    'sectors.minier.transformation.hero.title': 'Transformation et Métallurgie en RDC',
    'sectors.minier.transformation.hero.subtitle': 'Valorisez vos minerais grâce à la transformation et à la métallurgie. Nous accompagnons les entreprises dans le développement d\'unités de transformation et de raffinage.',
    'sectors.minier.transformation.hero.cta': 'Développer votre projet de transformation',
    'sectors.minier.transformation.procedes.title': 'Procédés de transformation',
    'sectors.minier.transformation.procedes.subtitle': 'Optimisez vos procédés de transformation :',
    'sectors.minier.transformation.procedes.items': [
      'Conception d\'unités de transformation',
      'Optimisation des procédés métallurgiques',
      'Contrôle qualité et analyse des produits',
      'Gestion des déchets et de l\'environnement',
      'Formation aux nouvelles technologies'
    ],
    'sectors.minier.transformation.qualite.title': 'Contrôle qualité et certification',
    'sectors.minier.transformation.qualite.subtitle': 'Garantissez la qualité de vos produits :',
    'sectors.minier.transformation.qualite.items': [
      'Mise en place de laboratoires d\'analyse',
      'Certification des produits finis',
      'Traçabilité des matières premières',
      'Contrôle des impuretés et des spécifications',
      'Accréditation des méthodes d\'analyse'
    ],
    'sectors.minier.transformation.marche.title': 'Accès aux marchés',
    'sectors.minier.transformation.marche.subtitle': 'Commercialisez vos produits transformés :',
    'sectors.minier.transformation.marche.items': [
      'Études de marché et de faisabilité',
      'Négociation avec les acheteurs',
      'Logistique et transport des produits',
      'Gestion des stocks et de la distribution',
      'Développement de nouveaux marchés'
    ],
    'sectors.minier.transformation.cta.subtitle': 'Prêt à transformer vos minerais ?',
    'sectors.minier.transformation.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Minier Commerce
    'sectors.minier.commerce.hero.title': 'Commerce et Négoce Minier en RDC',
    'sectors.minier.commerce.hero.subtitle': 'Développez vos activités de commerce et de négoce de minerais. Nous accompagnons les entreprises dans l\'optimisation de leurs opérations commerciales et l\'accès aux marchés internationaux.',
    'sectors.minier.commerce.hero.cta': 'Développer votre projet commercial',
    'sectors.minier.commerce.achat.title': 'Achat et approvisionnement',
    'sectors.minier.commerce.achat.subtitle': 'Optimisez votre chaîne d\'approvisionnement :',
    'sectors.minier.commerce.achat.items': [
      'Identification et qualification des fournisseurs',
      'Négociation des contrats d\'achat',
      'Contrôle qualité des matières premières',
      'Gestion des stocks et de la logistique',
      'Optimisation des coûts d\'approvisionnement'
    ],
    'sectors.minier.commerce.vente.title': 'Vente et commercialisation',
    'sectors.minier.commerce.vente.subtitle': 'Maximisez vos ventes :',
    'sectors.minier.commerce.vente.items': [
      'Identification des marchés cibles',
      'Négociation avec les acheteurs internationaux',
      'Gestion des contrats de vente',
      'Optimisation des prix et des marges',
      'Développement de nouveaux clients'
    ],
    'sectors.minier.commerce.logistique.title': 'Logistique et transport',
    'sectors.minier.commerce.logistique.subtitle': 'Optimisez votre logistique :',
    'sectors.minier.commerce.logistique.items': [
      'Planification des transports',
      'Gestion des entrepôts et du stockage',
      'Optimisation des coûts logistiques',
      'Gestion des documents de transport',
      'Suivi des expéditions'
    ],
    'sectors.minier.commerce.cta.subtitle': 'Prêt à développer votre commerce minier ?',
    'sectors.minier.commerce.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Financier Banques
    'sectors.financier.banques.hero.title': 'Secteur Bancaire en RDC',
    'sectors.financier.banques.hero.subtitle': 'Développez vos activités bancaires et financières en RDC. Nous accompagnons les banques dans l\'optimisation de leurs opérations et l\'accès aux marchés locaux.',
    'sectors.financier.banques.hero.cta': 'Développer votre projet bancaire',
    'sectors.financier.banques.retail.title': 'Banque de détail',
    'sectors.financier.banques.retail.subtitle': 'Développez vos services de banque de détail :',
    'sectors.financier.banques.retail.items': [
      'Gestion des comptes et des dépôts',
      'Services de crédit et de financement',
      'Produits d\'épargne et d\'investissement',
      'Services de paiement et de transfert',
      'Conseil financier personnalisé'
    ],
    'sectors.financier.banques.corporate.title': 'Banque d\'entreprise',
    'sectors.financier.banques.corporate.subtitle': 'Accompagnez les entreprises :',
    'sectors.financier.banques.corporate.items': [
      'Financement des projets d\'investissement',
      'Gestion de trésorerie et de cash-flow',
      'Services de trade finance',
      'Conseil en fusion-acquisition',
      'Gestion des risques financiers'
    ],
    'sectors.financier.banques.investment.title': 'Banque d\'investissement',
    'sectors.financier.banques.investment.subtitle': 'Développez vos activités d\'investissement :',
    'sectors.financier.banques.investment.items': [
      'Levée de fonds et introduction en bourse',
      'Gestion d\'actifs et de portefeuilles',
      'Conseil en investissement',
      'Structuring de produits financiers',
      'Gestion des risques de marché'
    ],
    'sectors.financier.banques.cta.subtitle': 'Prêt à développer vos activités bancaires ?',
    'sectors.financier.banques.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Financier Assurance
    'sectors.financier.assurance.hero.title': 'Secteur de l\'Assurance en RDC',
    'sectors.financier.assurance.hero.subtitle': 'Développez vos activités d\'assurance en RDC. Nous accompagnons les assureurs dans l\'optimisation de leurs produits et l\'accès aux marchés locaux.',
    'sectors.financier.assurance.hero.cta': 'Développer votre projet d\'assurance',
    'sectors.financier.assurance.vie.title': 'Assurance vie',
    'sectors.financier.assurance.vie.subtitle': 'Développez vos produits d\'assurance vie :',
    'sectors.financier.assurance.vie.items': [
      'Produits d\'assurance vie traditionnels',
      'Produits d\'épargne et de retraite',
      'Assurance décès et invalidité',
      'Produits de prévoyance',
      'Conseil en protection sociale'
    ],
    'sectors.financier.assurance.nonvie.title': 'Assurance non-vie',
    'sectors.financier.assurance.nonvie.subtitle': 'Développez vos produits d\'assurance non-vie :',
    'sectors.financier.assurance.nonvie.items': [
      'Assurance automobile et transport',
      'Assurance habitation et biens',
      'Assurance responsabilité civile',
      'Assurance santé et accidents',
      'Assurance entreprise et professionnelle'
    ],
    'sectors.financier.assurance.reassurance.title': 'Réassurance',
    'sectors.financier.assurance.reassurance.subtitle': 'Gérez vos risques de réassurance :',
    'sectors.financier.assurance.reassurance.items': [
      'Cession de risques aux réassureurs',
      'Gestion des traités de réassurance',
      'Optimisation des cessions',
      'Gestion des sinistres complexes',
      'Conformité réglementaire'
    ],
    'sectors.financier.assurance.cta.subtitle': 'Prêt à développer vos activités d\'assurance ?',
    'sectors.financier.assurance.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Financier Investissement
    'sectors.financier.investissement.hero.title': 'Investissement et Gestion d\'Actifs en RDC',
    'sectors.financier.investissement.hero.subtitle': 'Développez vos activités d\'investissement et de gestion d\'actifs en RDC. Nous accompagnons les gestionnaires dans l\'optimisation de leurs stratégies d\'investissement.',
    'sectors.financier.investissement.hero.cta': 'Développer votre projet d\'investissement',
    'sectors.financier.investissement.gestion.title': 'Gestion d\'actifs',
    'sectors.financier.investissement.gestion.subtitle': 'Optimisez la gestion de vos portefeuilles :',
    'sectors.financier.investissement.gestion.items': [
      'Gestion de portefeuilles actions et obligations',
      'Gestion alternative et private equity',
      'Gestion de fonds communs de placement',
      'Gestion de fortune et conseil en investissement',
      'Gestion des risques et de la conformité'
    ],
    'sectors.financier.investissement.private.title': 'Private Equity',
    'sectors.financier.investissement.private.subtitle': 'Développez vos activités de private equity :',
    'sectors.financier.investissement.private.items': [
      'Identification et évaluation d\'opportunités',
      'Due diligence et structuration de transactions',
      'Gestion des participations',
      'Accompagnement des entreprises en croissance',
      'Sorties et valorisations'
    ],
    'sectors.financier.investissement.venture.title': 'Venture Capital',
    'sectors.financier.investissement.venture.subtitle': 'Accompagnez les startups et PME :',
    'sectors.financier.investissement.venture.items': [
      'Investissement en capital-risque',
      'Accompagnement des entrepreneurs',
      'Développement de l\'écosystème startup',
      'Mentorat et formation',
      'Réseautage et partenariats'
    ],
    'sectors.financier.investissement.cta.subtitle': 'Prêt à développer vos activités d\'investissement ?',
    'sectors.financier.investissement.cta.button': 'DÉMARRER VOTRE PROJET',

    // Sector Pages - Financier Fintech
    'sectors.financier.fintech.hero.title': 'Fintech et Innovation Financière en RDC',
    'sectors.financier.fintech.hero.subtitle': 'Développez des solutions financières innovantes en RDC. Nous accompagnons les fintechs dans le développement de leurs produits et l\'accès aux marchés locaux.',
    'sectors.financier.fintech.hero.cta': 'Développer votre projet fintech',
    'sectors.financier.fintech.paiements.title': 'Solutions de paiement',
    'sectors.financier.fintech.paiements.subtitle': 'Développez des solutions de paiement innovantes :',
    'sectors.financier.fintech.paiements.items': [
      'Paiements mobiles et digitaux',
      'Solutions de paiement en ligne',
      'Transferts d\'argent internationaux',
      'Cartes prépayées et portefeuilles électroniques',
      'Intégration avec les systèmes bancaires'
    ],
    'sectors.financier.fintech.lending.title': 'Prêt et financement',
    'sectors.financier.fintech.lending.subtitle': 'Développez des solutions de financement :',
    'sectors.financier.fintech.lending.items': [
      'Prêts en ligne et microcrédit',
      'Financement participatif (crowdfunding)',
      'Scoring et évaluation des risques',
      'Automatisation des processus de prêt',
      'Inclusion financière et bancarisation'
    ],
    'sectors.financier.fintech.insurtech.title': 'Insurtech',
    'sectors.financier.fintech.insurtech.subtitle': 'Innovation dans l\'assurance :',
    'sectors.financier.fintech.insurtech.items': [
      'Assurance connectée et IoT',
      'Tarification dynamique et personnalisée',
      'Gestion des sinistres automatisée',
      'Produits d\'assurance innovants',
      'Distribution digitale d\'assurance'
    ],
    'sectors.financier.fintech.cta.subtitle': 'Prêt à développer votre solution fintech ?',
    'sectors.financier.fintech.cta.button': 'DÉMARRER VOTRE PROJET',

    // Project Pages
    'projects.agrobusiness.hero.title': 'Projet AgroBusiness en RDC',
    'projects.agrobusiness.hero.subtitle': 'Découvrez notre projet innovant dans le secteur agroalimentaire qui transforme l\'agriculture traditionnelle en entreprise moderne et rentable.',
    'projects.agrobusiness.hero.cta': 'En savoir plus',
    'projects.agrobusiness.about.title': 'À propos du projet',
    'projects.agrobusiness.about.content': 'Ce projet vise à moderniser l\'agriculture en RDC en introduisant des technologies avancées et des pratiques durables pour améliorer la productivité et la rentabilité.',
    'projects.agrobusiness.cta.subtitle': 'Intéressé par ce projet ?',
    'projects.agrobusiness.cta.button': 'NOUS CONTACTER',

    'projects.bi.hero.title': 'Projet Business Intelligence en RDC',
    'projects.bi.hero.subtitle': 'Découvrez notre projet de Business Intelligence qui révolutionne la prise de décision dans les entreprises congolaises.',
    'projects.bi.hero.cta': 'En savoir plus',
    'projects.bi.about.title': 'À propos du projet',
    'projects.bi.about.content': 'Ce projet met en place des solutions de Business Intelligence pour aider les entreprises à analyser leurs données et prendre des décisions éclairées.',
    'projects.bi.cta.subtitle': 'Intéressé par ce projet ?',
    'projects.bi.cta.button': 'NOUS CONTACTER',

    'projects.banques.hero.title': 'Projet Banques d\'Investissement Spécialisées en RDC',
    'projects.banques.hero.subtitle': 'Découvrez notre projet de développement de banques d\'investissement spécialisées pour soutenir la croissance économique en RDC.',
    'projects.banques.hero.cta': 'En savoir plus',
    'projects.banques.about.title': 'À propos du projet',
    'projects.banques.about.content': 'Ce projet vise à créer des banques d\'investissement spécialisées pour financer les projets d\'infrastructure et de développement en RDC.',
    'projects.banques.cta.subtitle': 'Intéressé par ce projet ?',
    'projects.banques.cta.button': 'NOUS CONTACTER',

    // Project Pages - AgroBusiness
    'projects.agrobusiness.title': 'AgroBusiness',
    'projects.agrobusiness.subtitle': 'Innovation agricole et développement durable',
    'projects.agrobusiness.description': 'Notre projet AgroBusiness vise à révolutionner le secteur agricole en RDC en combinant technologies modernes, pratiques durables et expertise locale pour créer une chaîne de valeur agricole compétitive et résiliente.',
    'projects.agrobusiness.about.title': 'À propos du projet AgroBusiness',
    'projects.agrobusiness.about.paragraph1': 'Notre initiative AgroBusiness se concentre sur la modernisation du secteur agricole congolais en introduisant des technologies de pointe et des pratiques agricoles durables. Nous travaillons en étroite collaboration avec les agriculteurs locaux pour développer des solutions adaptées aux conditions spécifiques de la RDC, tout en respectant les traditions et les connaissances locales.',
    'projects.agrobusiness.about.paragraph2': 'Le projet comprend la mise en place d\'infrastructures modernes, l\'introduction de techniques d\'irrigation avancées, et l\'utilisation de technologies numériques pour optimiser la production. Nous formons également les agriculteurs aux nouvelles méthodes et leur fournissons un accès aux marchés internationaux, contribuant ainsi à l\'amélioration de leurs revenus et à la sécurité alimentaire du pays.',
    'projects.agrobusiness.about.paragraph3': 'Notre approche holistique intègre également des aspects environnementaux et sociaux, en promouvant l\'agriculture biologique, la gestion durable des ressources naturelles, et l\'autonomisation des communautés rurales. Nous croyons fermement que le développement agricole durable est la clé de la prospérité économique de la RDC.',
    'projects.agrobusiness.cta.interested': 'Intéressé par le projet AgroBusiness ?',

    // Project Pages - Business Intelligence
    'projects.bi.title': 'Business Intelligence',
    'projects.bi.subtitle': 'Données intelligentes pour décisions stratégiques',
    'projects.bi.description': 'Notre plateforme de Business Intelligence transforme les données brutes en insights actionnables, permettant aux entreprises de prendre des décisions éclairées basées sur des analyses approfondies et des prévisions précises.',
    'projects.bi.about.title': 'À propos de notre Business Intelligence',
    'projects.bi.about.paragraph1': 'Notre solution de Business Intelligence révolutionne la façon dont les entreprises congolaises gèrent et analysent leurs données. En utilisant des technologies avancées d\'analyse de données et d\'intelligence artificielle, nous transformons des informations complexes en tableaux de bord intuitifs et en rapports détaillés qui facilitent la prise de décision stratégique.',
    'projects.bi.about.paragraph2': 'La plateforme intègre des sources de données multiples, y compris les systèmes internes, les données de marché, et les indicateurs économiques, pour fournir une vue d\'ensemble complète de la performance de l\'entreprise. Nos algorithmes prédictifs aident à identifier les tendances émergentes et les opportunités de croissance, permettant aux dirigeants d\'anticiper les changements du marché et d\'adapter leurs stratégies en conséquence.',
    'projects.bi.about.paragraph3': 'Nous accordons une importance particulière à la formation et au support des utilisateurs, en organisant des sessions de formation personnalisées et en fournissant une assistance continue. Notre objectif est d\'autonomiser les équipes locales pour qu\'elles puissent exploiter pleinement le potentiel de leurs données et contribuer à la transformation numérique de l\'économie congolaise.',
    'projects.bi.cta.interested': 'Intéressé par notre Business Intelligence ?',

    // Project Pages - Specialized Investment Banks
    'projects.banques.title': 'Banques d\'investissement spécialisées',
    'projects.banques.subtitle': 'Financement sur mesure pour projets stratégiques',
    'projects.banques.description': 'Nos services de banques d\'investissement spécialisées offrent des solutions de financement innovantes et adaptées aux besoins spécifiques des projets d\'envergure en RDC, facilitant l\'accès aux capitaux et l\'optimisation des structures financières.',
    'projects.banques.about.title': 'À propos de nos banques d\'investissement',
    'projects.banques.about.paragraph1': 'Notre division de banques d\'investissement spécialisées se consacre à accompagner les projets d\'envergure en RDC en offrant des solutions de financement sophistiquées et adaptées aux défis spécifiques du marché local. Nous combinons une expertise financière internationale avec une connaissance approfondie du contexte congolais pour structurer des transactions complexes et optimiser les flux de capitaux.',
    'projects.banques.about.paragraph2': 'Nos services comprennent la structuration de financements de projets, l\'organisation de syndications bancaires, la gestion des fusions et acquisitions, et l\'accompagnement dans les introductions en bourse. Nous travaillons en étroite collaboration avec les investisseurs internationaux, les institutions financières locales, et les autorités réglementaires pour créer des solutions qui répondent aux besoins de toutes les parties prenantes.',
    'projects.banques.about.paragraph3': 'Nous accordons une importance particulière à la durabilité et à l\'impact social de nos investissements, en privilégiant les projets qui contribuent au développement économique et social de la RDC. Notre approche responsable nous permet de créer de la valeur à long terme tout en respectant les principes de bonne gouvernance et de transparence financière.',
    'projects.banques.cta.interested': 'Intéressé par nos services d\'investissement ?',

    // Project Pages - Common
    'projects.common.learn.more': 'En savoir plus',
    'projects.common.about.project': 'À propos du projet',
    'projects.common.interested': 'Intéressé par ce projet ?',
    'projects.common.contact.us': 'NOUS CONTACTER',
    'projects.common.back.to.projects': 'Retour aux projets',
    'projects.common.not.found': 'Projet non trouvé',
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
    'about.vision.description': 'ElitePartners aspire to become the undisputed leader in facilitating Canadian investments in the DRC. We are committed to developing integrated solutions that maximize our clients\' profitability while ensuring compliance and respect for best ethical practices.',
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

    // Services Pages - Fiscal
    'services.fiscal.hero.title': 'Optimize your taxation and data with our expertise!',
    'services.fiscal.hero.subtitle': 'Benefit from customized support for regulatory compliance, tax optimization, and data valorization. Our experts help you transform your obligations into real performance levers.',
    'services.fiscal.hero.cta': 'Request a free diagnostic',
    'services.fiscal.fiscal.title': 'Tax advisory and regulatory compliance',
    'services.fiscal.fiscal.subtitle': 'We help you navigate tax and regulatory complexities with tailored solutions:',
    'services.fiscal.fiscal.bullets': [
      'Tax optimization to reduce your costs while respecting current laws.',
      'Compliance management according to local and international standards.',
      'Tax diagnosis to identify risks and opportunities.'
    ],
    'services.fiscal.bi.title': 'Business Intelligence and Data Analytics',
    'services.fiscal.bi.subtitle': 'We exploit your data to make it a strategic lever and improve your decision-making.',
    'services.fiscal.bi.bullets': [
      'Design and automation of interactive reports: Creation of dynamic dashboards with Microsoft Power BI and Excel for quick and visual data analysis.',
      'Financial reporting and performance analysis: Monitoring of financial and organizational indicators for better management.',
      'Data modeling and exploration: Identification of trends and forecasting to guide strategic decisions.',
      'Training and support: Development of your teams\' skills to effectively use analysis and reporting tools.'
    ],
    'services.fiscal.cta.title': 'Are you interested in this service?',
    'services.fiscal.cta.button': 'CLICK HERE',

    // Services Pages - RH
    'services.rh.hero.title': 'Develop your human capital with our HR expertise!',
    'services.rh.hero.subtitle': 'Attract, retain, and grow your talents through innovative and personalized HR strategies. We support your teams for an agile, high-performing, and resilient organization.',
    'services.rh.hero.cta': 'Request a free HR diagnostic',
    'services.rh.title': 'HR consulting and talent management',
    'services.rh.subtitle': 'We support you in structuring and optimizing your HR policy:',
    'services.rh.bullets': [
      'Talent attraction and retention strategies.',
      'Skills development and career management.',
      'Organization and HR performance optimization.',
      'Change management and cultural transformation.'
    ],
    'services.rh.cta.title': 'Do you want to boost your human capital?',
    'services.rh.cta.button': 'Contact Us',

    // Services Pages - Stratégie
    'services.strategie.hero.title': 'Deploy your business strategy with our experts!',
    'services.strategie.hero.subtitle': 'Benefit from customized support to define, pilot, and transform your strategy. Our consultants help you anticipate challenges and seize opportunities for sustainable growth.',
    'services.strategie.hero.cta': 'Request a strategic diagnostic',
    'services.strategie.title': 'Strategy and transformation consulting',
    'services.strategie.subtitle': 'We support you in defining and implementing your strategy:',
    'services.strategie.bullets': [
      'Development of growth, expansion, or diversification strategies.',
      'Optimization of operational processes to improve efficiency.',
      'Organizational transformation to adapt to economic and technological challenges.',
      'Change management and team support.'
    ],
    'services.strategie.risk.title': 'Risk management',
    'services.strategie.risk.subtitle': 'We identify, assess, and develop management plans for financial, strategic, and operational risks to ensure the sustainability and resilience of your company.',
    'services.strategie.cta.title': 'Do you want to transform your company?',
    'services.strategie.cta.button': 'Contact Us',

    // Services Pages - Administrative Representation
    'services.representation.administratif.hero.title': 'Expert Administrative & Legal Support',
    'services.representation.administratif.hero.subtitle': 'Transform your ambitions into success with our expertise in administrative and legal compliance in DRC. We handle all procedures so you can focus on your development.',
    'services.representation.administratif.hero.cta': 'Schedule a consultation',
    'services.representation.administratif.creation.title': 'Turnkey business creation',
    'services.representation.administratif.creation.subtitle': 'From conception to registration, we manage the entire process:',
    'services.representation.administratif.creation.bullets': [
      'Optimal legal form selection',
      'Drafting of articles of association and constitutive acts',
      'Registration with the trade register',
      'Obtaining national identification number',
      'Professional bank account opening'
    ],
    'services.representation.administratif.permis.title': 'Sectoral permits and licenses',
    'services.representation.administratif.permis.subtitle': 'Facilitation of obtaining all necessary authorizations:',
    'services.representation.administratif.permis.bullets': [
      'Mining and forestry exploitation licenses',
      'Sectoral authorizations (banking, insurance, telecoms)',
      'Environmental and impact permits',
      'Compliance and quality certificates',
      'Authorization renewal and monitoring'
    ],
    'services.representation.administratif.conformite.title': 'Ongoing legal compliance',
    'services.representation.administratif.conformite.subtitle': 'Permanent assistance to ensure your compliance:',
    'services.representation.administratif.conformite.bullets': [
      'Regulatory and legislative monitoring',
      'Updating of articles and legal documents',
      'Legal representation before authorities',
      'Management of meetings and board of directors',
      'Support during inspections or audits'
    ],
    'services.representation.administratif.cta.title': 'Ready to secure your compliance?',
    'services.representation.administratif.cta.button': 'CONTACT US',

    // Services Pages - Local Representation
    'services.representation.locale.hero.title': 'Strategic Local Representation',
    'services.representation.locale.hero.subtitle': 'Establish a strong and credible presence in the Congolese market. We become an extension of your team to defend your interests with professionalism and integrity.',
    'services.representation.locale.hero.cta': 'Discuss your representation',
    'services.representation.locale.commerciale.title': 'Active commercial representation',
    'services.representation.locale.commerciale.subtitle': 'We act on your behalf to develop your business relationships:',
    'services.representation.locale.commerciale.bullets': [
      'Management of local client and partner relationships',
      'Prospecting and business development',
      'Participation in sectoral events',
      'Client follow-up and loyalty',
      'Detailed reporting of commercial activities'
    ],
    'services.representation.locale.negociation.title': 'Negotiation and contract management',
    'services.representation.locale.negociation.subtitle': 'Negotiation expertise to secure your best interests:',
    'services.representation.locale.negociation.bullets': [
      'Negotiation of commercial agreements and partnerships',
      'Drafting and revision of local contracts',
      'Mediation in case of commercial disputes',
      'Contract execution monitoring',
      'Negotiation strategy consulting'
    ],
    'services.representation.locale.bureau.title': 'Physical presence management',
    'services.representation.locale.bureau.subtitle': 'Complete solutions for your local presence:',
    'services.representation.locale.bureau.bullets': [
      'Setting up and managing local office',
      'Recruitment and local team management',
      'Logistics and administrative management',
      'Commercial and postal domiciliation',
      'Technical and IT support'
    ],
    'services.representation.locale.cta.title': 'Ready to establish your local presence?',
    'services.representation.locale.cta.button': 'BECOME A LOCAL PLAYER',

    // Services Pages - Market Penetration
    'services.representation.penetration.hero.title': 'Market Penetration Strategies',
    'services.representation.penetration.hero.subtitle': 'Convert the potential of the Congolese market into tangible commercial success. Our data-driven approach and local expertise guarantee you an optimized and profitable market entry.',
    'services.representation.penetration.hero.cta': 'Define your strategy',
    'services.representation.penetration.etudes.title': 'In-depth market studies',
    'services.representation.penetration.etudes.subtitle': 'Rigorous analyses to identify opportunities and minimize risks:',
    'services.representation.penetration.etudes.bullets': [
      'Analysis of market size and potential',
      'Mapping of direct and indirect competition',
      'Study of consumer behaviors and preferences',
      'Identification of entry barriers',
      'Evaluation of optimal distribution channels'
    ],
    'services.representation.penetration.strategie.title': 'Personalized Go-to-Market strategy',
    'services.representation.penetration.strategie.subtitle': 'Custom action plan for successful launch:',
    'services.representation.penetration.strategie.bullets': [
      'Optimal positioning and value proposition',
      'Pricing strategy adapted to local market',
      'Communication and digital marketing plan',
      'Phased launch roadmap',
      'Definition of KPIs and success metrics'
    ],
    'services.representation.penetration.partenaires.title': 'Strategic partner research',
    'services.representation.penetration.partenaires.subtitle': 'Identification and connection with key players:',
    'services.representation.penetration.partenaires.bullets': [
      'Sourcing of distributors and sales agents',
      'Identification of technology partners',
      'Connection with local investors',
      'Facilitation of negotiations and agreements',
      'Due diligence on potential partners'
    ],
    'services.representation.penetration.cta.title': 'Ready to conquer the Congolese market?',
    'services.representation.penetration.cta.button': 'EVALUATE MY POTENTIAL',

    // Services Pages - Market Studies
    'services.etudes.marche.hero.title': 'Strategic Market Studies',
    'services.etudes.marche.hero.subtitle': 'Understand your market, identify opportunities and make informed decisions with our in-depth market studies. Our expertise helps you minimize risks and maximize your growth potential.',
    'services.etudes.marche.hero.cta': 'Request a personalized study',
    'services.etudes.marche.analyse.title': 'In-depth market analysis',
    'services.etudes.marche.analyse.subtitle': 'We analyze your target market to provide valuable insights:',
    'services.etudes.marche.analyse.bullets': [
      'Assessment of market size and growth potential',
      'Competition analysis and strategic positioning',
      'Identification of most promising customer segments',
      'Study of sector trends and evolution',
      'Analysis of entry barriers and success factors'
    ],
    'services.etudes.marche.comportementale.title': 'Customer behavioral research',
    'services.etudes.marche.comportementale.subtitle': 'Understand your customers\' motivations and behaviors:',
    'services.etudes.marche.comportementale.bullets': [
      'In-depth surveys and interviews with consumers',
      'Analysis of purchasing habits and decision processes',
      'Customer satisfaction and loyalty study',
      'Customer journey mapping and touchpoints',
      'Concept testing and product/service idea validation'
    ],
    'services.etudes.marche.recommandations.title': 'Strategic recommendations',
    'services.etudes.marche.recommandations.subtitle': 'Insights transformed into concrete actions:',
    'services.etudes.marche.recommandations.bullets': [
      'Market entry and expansion strategies',
      'Optimal positioning and value proposition',
      'Pricing and business model recommendations',
      'Marketing and communication action plans',
      'Implementation roadmap'
    ],
    'services.etudes.marche.cta.title': 'Ready to explore your market?',
    'services.etudes.marche.cta.button': 'CONTACT US',

    // Services Pages - Economic Studies
    'services.etudes.economique.hero.title': 'Economic and Financial Studies',
    'services.etudes.economique.hero.subtitle': 'Analyze the economic viability of your projects and optimize your financial performance. Our in-depth studies give you the keys to make informed investment decisions and secure your financial future.',
    'services.etudes.economique.hero.cta': 'Request a financial analysis',
    'services.etudes.economique.faisabilite.title': 'Economic feasibility analysis',
    'services.etudes.economique.faisabilite.subtitle': 'Evaluate the viability of your projects before investment:',
    'services.etudes.economique.faisabilite.bullets': [
      'Profitability studies and return on investment (ROI) calculation',
      'Detailed cost-benefit analysis and multiple scenarios',
      'Financial risk assessment and mitigation strategies',
      'Financial modeling and 3-5 year projections',
      'Sensitivity analysis and stress tests'
    ],
    'services.etudes.economique.valorisation.title': 'Business valuation',
    'services.etudes.economique.valorisation.subtitle': 'Determine the fair value of your company:',
    'services.etudes.economique.valorisation.bullets': [
      'Valuation by sector comparable multiples',
      'Discounted cash flow (DCF) method',
      'Asset analysis and liquidation value',
      'Valuation for sale, acquisition or fundraising',
      'Financial audit and due diligence'
    ],
    'services.etudes.economique.optimisation.title': 'Financial optimization',
    'services.etudes.economique.optimisation.subtitle': 'Improve your financial performance:',
    'services.etudes.economique.optimisation.bullets': [
      'Optimization of financing structure',
      'Working capital requirement management',
      'Operational cost reduction strategies',
      'Profitability improvement by business segment',
      'Budget planning and management control'
    ],
    'services.etudes.economique.cta.title': 'Need an in-depth economic analysis?',
    'services.etudes.economique.cta.button': 'SCHEDULE A CONSULTATION',

    // Services Pages - Strategic Studies
    'services.etudes.strategique.hero.title': 'Strategic and Organizational Studies',
    'services.etudes.strategique.hero.subtitle': 'Transform your vision into a winning strategy. Our strategic studies help you define your positioning, optimize your organization and anticipate sector developments to maintain your competitive advantage.',
    'services.etudes.strategique.hero.cta': 'Plan your strategy',
    'services.etudes.strategique.planification.title': 'Strategic planning',
    'services.etudes.strategique.planification.subtitle': 'Define your course and the means to achieve it:',
    'services.etudes.strategique.planification.bullets': [
      'Development of company vision, mission and values',
      'SWOT analysis and complete strategic diagnosis',
      'Definition of SMART objectives and performance indicators',
      'Stakeholder mapping and ecosystem',
      '3-5 year strategic roadmap'
    ],
    'services.etudes.strategique.transformation.title': 'Organizational transformation',
    'services.etudes.strategique.transformation.subtitle': 'Optimize your organization for performance:',
    'services.etudes.strategique.transformation.bullets': [
      'Business restructuring and reorganization',
      'Process and workflow optimization',
      'Implementation of new governance',
      'Change management and resistance management',
      'Development of corporate culture'
    ],
    'services.etudes.strategique.intelligence.title': 'Strategic intelligence',
    'services.etudes.strategique.intelligence.subtitle': 'Anticipate developments in your environment:',
    'services.etudes.strategique.intelligence.bullets': [
      'Competitive intelligence and sector benchmarking',
      'Trend analysis and weak signals',
      'Opportunity and threat assessment',
      'Prospective scenarios and strategic planning',
      'Decision support information system'
    ],
    'services.etudes.strategique.innovation.title': 'Innovation and development',
    'services.etudes.strategique.innovation.subtitle': 'Stimulate innovation to remain competitive:',
    'services.etudes.strategique.innovation.bullets': [
      'Innovation strategy and R&D',
      'Development of new products/services',
      'Strategic partnerships and innovation ecosystem',
      'Digital transformation and emerging technologies',
      'Innovation culture and organizational creativity'
    ],
    'services.etudes.strategique.cta.title': 'Ready to transform your strategy?',
    'services.etudes.strategique.cta.button': 'START YOUR TRANSFORMATION',

    // Sector Pages - Subsistence Agriculture
    'sectors.agricole.vivriere.hero.title': 'Sustainable Subsistence Agriculture in DRC',
    'sectors.agricole.vivriere.hero.subtitle': 'Strengthen food security and improve agricultural incomes through modern and sustainable practices. We support producers towards productive and environmentally friendly subsistence agriculture.',
    'sectors.agricole.vivriere.hero.cta': 'Modernize your agriculture',
    'sectors.agricole.vivriere.cultures.title': 'Optimization of subsistence crops',
    'sectors.agricole.vivriere.cultures.subtitle': 'Maximize your yields with adapted agricultural practices:',
    'sectors.agricole.vivriere.cultures.bullets': [
      'Selection of varieties adapted to local climate',
      'Planning of optimal crop rotations',
      'Integrated soil management and natural fertilization',
      'Water conservation and irrigation techniques',
      'Ecological phytosanitary protection'
    ],
    'sectors.agricole.vivriere.innovation.title': 'Innovation and modernization',
    'sectors.agricole.vivriere.innovation.subtitle': 'Adopt technologies adapted to your context:',
    'sectors.agricole.vivriere.innovation.bullets': [
      'Introduction of improved agricultural tools',
      'Mechanization adapted to small farms',
      'Drip irrigation systems',
      'Use of drones for crop monitoring',
      'Precision agriculture and geolocation'
    ],
    'sectors.agricole.vivriere.revenus.title': 'Improvement of agricultural incomes',
    'sectors.agricole.vivriere.revenus.subtitle': 'Value your production and secure your income:',
    'sectors.agricole.vivriere.revenus.bullets': [
      'Organization in cooperatives and groups',
      'Collective negotiation with buyers',
      'Development of short marketing circuits',
      'Post-harvest storage and conservation',
      'Access to financing and agricultural microcredits'
    ],
    'sectors.agricole.vivriere.cta.title': 'Ready to transform your subsistence agriculture?',
    'sectors.agricole.vivriere.cta.button': 'START THE TRANSFORMATION',

    // Sector Pages - Fishing and Aquaculture
    'sectors.agricole.peche.hero.title': 'Fishing and Aquaculture in DRC',
    'sectors.agricole.peche.hero.subtitle': 'Sustainably exploit the immense fisheries resources of the DRC. We support the development of artisanal and industrial fishing as well as modern aquaculture to strengthen food security and create jobs.',
    'sectors.agricole.peche.hero.cta': 'Develop your fisheries activity',
    'sectors.agricole.peche.techniques.title': 'Modernization of fishing techniques',
    'sectors.agricole.peche.techniques.subtitle': 'Improve your yields while preserving the ecosystem:',
    'sectors.agricole.peche.techniques.bullets': [
      'Introduction of modern and selective fishing equipment',
      'Training in responsible fishing techniques',
      'Sustainable management of fish stocks',
      'Improvement of vessels and motorization',
      'Geolocation systems and school detection'
    ],
    'sectors.agricole.peche.aquaculture.title': 'Intensive and extensive aquaculture',
    'sectors.agricole.peche.aquaculture.subtitle': 'Develop profitable and sustainable fish production:',
    'sectors.agricole.peche.aquaculture.bullets': [
      'Design and construction of aquaculture ponds',
      'Selection of species adapted to local climate',
      'Feed management and fish nutrition',
      'Health control and disease prevention',
      'Integrated aquaculture (rice-fish, market gardening-fish farming)'
    ],
    'sectors.agricole.peche.transformation.title': 'Processing and commercialization',
    'sectors.agricole.peche.transformation.subtitle': 'Value your catches and fish production:',
    'sectors.agricole.peche.transformation.bullets': [
      'Fish preservation and processing techniques',
      'Setting up cold chains',
      'Development of value-added products',
      'Organization of marketing circuits',
      'Quality certification and health standards'
    ],
    'sectors.agricole.peche.cta.title': 'Ready to develop your fisheries activity?',
    'sectors.agricole.peche.cta.button': 'LAUNCH YOUR FISHING PROJECT',

    // Sector Pages - Mining Exploration
    'sectors.minier.exploration.hero.title': 'Mining Exploration in DRC',
    'sectors.minier.exploration.hero.subtitle': 'Maximize the exceptional geological potential of the DRC through our cutting-edge mining exploration services. We support your projects from prospecting to feasibility studies, respecting international best practices.',
    'sectors.minier.exploration.hero.cta': 'Develop your exploration projects',
    'sectors.minier.exploration.geologie.title': 'Geological studies and prospecting',
    'sectors.minier.exploration.geologie.subtitle': 'Identify and evaluate mineral deposits with precision:',
    'sectors.minier.exploration.geologie.bullets': [
      'Detailed geological mapping and remote sensing',
      'Geochemical and geophysical prospecting',
      'Drilling programs and sampling',
      'Mineralogical and geochemical analyses',
      '3D modeling of mineralized bodies'
    ],
    'sectors.minier.exploration.faisabilite.title': 'Feasibility studies and evaluation',
    'sectors.minier.exploration.faisabilite.subtitle': 'Validate the economic viability of your mining projects:',
    'sectors.minier.exploration.faisabilite.bullets': [
      'Reserve estimation according to JORC/NI 43-101 standards',
      'Pre-feasibility and bankable feasibility studies',
      'Optimization of extraction methods',
      'Technical-economic analysis and financial modeling',
      'Risk assessment and mitigation strategies'
    ],
    'sectors.minier.exploration.permis.title': 'Permits and regulatory compliance',
    'sectors.minier.exploration.permis.subtitle': 'Secure your mining rights and respect regulations:',
    'sectors.minier.exploration.permis.bullets': [
      'Obtaining research and exploitation permits',
      'Regulatory due diligence and compliance',
      'Environmental and social impact studies',
      'Negotiation with local authorities',
      'Community relations management'
    ],
    'sectors.minier.exploration.cta.title': 'Ready to discover mining potential?',
    'sectors.minier.exploration.cta.button': 'START EXPLORATION',

    // Sector Pages - Industrial Agriculture
    'sectors.agricole.industrielle.hero.title': 'Industrial Agriculture and Agribusiness',
    'sectors.agricole.industrielle.hero.subtitle': 'Transform Congolese agriculture into a modern and competitive industry. We support large-scale agriculture projects with advanced technologies and a structured business approach to maximize yields and profitability.',
    'sectors.agricole.industrielle.hero.cta': 'Industrialize your agriculture',
    'sectors.agricole.industrielle.mecanisation.title': 'Mechanization and modern equipment',
    'sectors.agricole.industrielle.mecanisation.subtitle': 'Optimize your agricultural operations with cutting-edge equipment:',
    'sectors.agricole.industrielle.mecanisation.bullets': [
      'Selection and acquisition of tractors and agricultural machinery',
      'Setting up automated irrigation systems',
      'Training staff in equipment use',
      'Preventive maintenance and spare parts management',
      'Optimization of operational and energy costs'
    ],
    'sectors.agricole.industrielle.precision.title': 'Precision agriculture and technologies',
    'sectors.agricole.industrielle.precision.subtitle': 'Integrate the latest technological innovations:',
    'sectors.agricole.industrielle.precision.bullets': [
      'Drone mapping and satellite imagery',
      'IoT sensors for real-time monitoring',
      'GPS systems for machine guidance',
      'Data analysis and artificial intelligence',
      'Mobile applications for farm management'
    ],
    'sectors.agricole.industrielle.agribusiness.title': 'Strategy and agribusiness management',
    'sectors.agricole.industrielle.agribusiness.subtitle': 'Develop a structured and profitable business approach:',
    'sectors.agricole.industrielle.agribusiness.bullets': [
      'Business plan and financial modeling',
      'Agricultural risk management and insurance',
      'Supply chain optimization',
      'Management control and dashboards',
      'Financing strategies and fundraising'
    ],
    'sectors.agricole.industrielle.cta.title': 'Ready to revolutionize your agriculture?',
    'sectors.agricole.industrielle.cta.button': 'LAUNCH YOUR TRANSFORMATION',

    // Sector Pages - Mining Exploitation
    'sectors.minier.exploitation.hero.title': 'Modern Mining Exploitation in DRC',
    'sectors.minier.exploitation.hero.subtitle': 'Optimize your mining operations with cutting-edge technologies and sustainable practices. We support responsible exploitation of Congolese mineral resources for maximum profitability and minimal environmental impact.',
    'sectors.minier.exploitation.hero.cta': 'Optimize your mining exploitation',
    'sectors.minier.exploitation.planification.title': 'Planning and optimization of operations',
    'sectors.minier.exploitation.planification.subtitle': 'Maximize the productivity and efficiency of your mines:',
    'sectors.minier.exploitation.planification.bullets': [
      'Mine planning and sequence optimization',
      'Equipment selection and sizing',
      'Improvement of extraction processes',
      'Fleet management and predictive maintenance',
      'Quality control and mining yield'
    ],
    'sectors.minier.exploitation.traitement.title': 'Processing and valorization of ores',
    'sectors.minier.exploitation.traitement.subtitle': 'Optimize recovery and quality of your products:',
    'sectors.minier.exploitation.traitement.bullets': [
      'Design of modern processing plants',
      'Optimization of concentration circuits',
      'Advanced separation technologies',
      'Metallurgical control and continuous analysis',
      'Valorization of by-products and residues'
    ],
    'sectors.minier.exploitation.durabilite.title': 'Sustainable and responsible exploitation',
    'sectors.minier.exploitation.durabilite.subtitle': 'Integrate best environmental and social practices:',
    'sectors.minier.exploitation.durabilite.bullets': [
      'Environmental management and rehabilitation',
      'Occupational safety and health',
      'Community engagement and local development',
      'International certifications (ISO 14001, OHSAS)',
      'Closure and post-exploitation plans'
    ],
    'sectors.minier.exploitation.cta.title': 'Ready to modernize your exploitation?',
    'sectors.minier.exploitation.cta.button': 'IMPROVE YOUR PERFORMANCE',

    // Sector Pages - Mining Transformation
    'sectors.minier.transformation.hero.title': 'Mining Transformation and Metallurgy',
    'sectors.minier.transformation.hero.subtitle': 'Create added value by transforming Congolese minerals into finished products. We develop modern transformation chains to maximize profitability and create skilled jobs locally.',
    'sectors.minier.transformation.hero.cta': 'Develop your mining transformation',
    'sectors.minier.transformation.raffinage.title': 'Metal refining and purification',
    'sectors.minier.transformation.raffinage.subtitle': 'Advanced technologies to obtain high-purity metals:',
    'sectors.minier.transformation.raffinage.bullets': [
      'Hydrometallurgical and pyrometallurgical processes',
      'Electrolytic refining of copper and cobalt',
      'Purification of precious metals (gold, silver)',
      'Quality control and LME/COMEX certification',
      'Energy optimization of processes'
    ],
    'sectors.minier.transformation.valeur.title': 'Value-added industries',
    'sectors.minier.transformation.valeur.subtitle': 'Development of manufacturing industries based on local resources:',
    'sectors.minier.transformation.valeur.bullets': [
      'Manufacturing of copper electrical cables and wires',
      'Lithium-ion battery production',
      'Special alloys industry',
      'Transformation into semi-finished products',
      'Development of integrated industrial parks'
    ],
    'sectors.minier.transformation.commercialisation.title': 'Commercialization and export markets',
    'sectors.minier.transformation.commercialisation.subtitle': 'Access international markets with your transformed products:',
    'sectors.minier.transformation.commercialisation.bullets': [
      'Pricing strategies and commercial negotiation',
      'International certification and traceability',
      'Logistics and supply chains',
      'Development of industrial partnerships',
      'B2B marketing and trade fair participation'
    ],
    'sectors.minier.transformation.cta.title': 'Ready to transform your minerals into value?',
    'sectors.minier.transformation.cta.button': 'DEVELOP YOUR INDUSTRY',

    // Sector Pages - Mining Commerce
    'sectors.minier.commerce.hero.title': 'Mining Commerce and Trading',
    'sectors.minier.commerce.hero.subtitle': 'Optimize your commercial operations in the mining sector. We support traders, traders and exporters in their commercialization strategies, risk management and market development.',
    'sectors.minier.commerce.hero.cta': 'Optimize your mining commerce',
    'sectors.minier.commerce.negociation.title': 'Mining trading and negotiation',
    'sectors.minier.commerce.negociation.subtitle': 'Master trading and negotiation techniques:',
    'sectors.minier.commerce.negociation.bullets': [
      'Pricing strategies and market analysis',
      'Negotiation with producers and buyers',
      'Trading on futures markets (LME, COMEX)',
      'Position management and risk hedging',
      'Technical and fundamental analysis'
    ],
    'sectors.minier.commerce.logistique.title': 'Logistics and supply chains',
    'sectors.minier.commerce.logistique.subtitle': 'Optimize your logistics operations:',
    'sectors.minier.commerce.logistique.bullets': [
      'Organization of multimodal transport',
      'Warehouse and storage management',
      'Quality control and sampling',
      'Customs and regulatory documentation',
      'Product traceability and certification'
    ],
    'sectors.minier.commerce.financement.title': 'Mining commerce financing',
    'sectors.minier.commerce.financement.subtitle': 'Financing solutions adapted to the mining sector:',
    'sectors.minier.commerce.financement.bullets': [
      'Commercial credits and pre-financing',
      'Letters of credit and bank guarantees',
      'Factoring and factoring',
      'Structured financing and project finance',
      'Exchange and credit risk management'
    ],
    'sectors.minier.commerce.cta.title': 'Ready to optimize your mining commerce?',
    'sectors.minier.commerce.cta.button': 'DEVELOP YOUR ACTIVITY',

    // Sector Pages - Banking Sector
    'sectors.financier.banques.hero.title': 'Banking Sector and Financing',
    'sectors.financier.banques.hero.subtitle': 'Develop a modern and inclusive banking system in the DRC. We support financial institutions in their digital transformation, service expansion and regulatory compliance to stimulate financial inclusion and economic development.',
    'sectors.financier.banques.hero.cta': 'Modernize your banking services',
    'sectors.financier.banques.innovation.title': 'Innovation and digital transformation',
    'sectors.financier.banques.innovation.subtitle': 'Modernize your banking services with the latest technologies:',
    'sectors.financier.banques.innovation.bullets': [
      'Development of mobile banking platforms',
      'Implementation of digital payment solutions',
      'Blockchain and cryptocurrencies for transfers',
      'Artificial intelligence for credit analysis',
      'API banking and fintech ecosystem'
    ],
    'sectors.financier.banques.entreprises.title': 'Corporate banking services',
    'sectors.financier.banques.entreprises.subtitle': 'Complete solutions to support business development:',
    'sectors.financier.banques.entreprises.bullets': [
      'SME and microenterprise financing',
      'Commercial credits and credit lines',
      'Trade finance and letters of credit',
      'Treasury management and cash management',
      'Foreign exchange services and risk hedging'
    ],
    'sectors.financier.banques.risques.title': 'Risk management and compliance',
    'sectors.financier.banques.risques.subtitle': 'Strengthen your risk management and compliance framework:',
    'sectors.financier.banques.risques.bullets': [
      'Implementation of credit scoring systems',
      'Anti-money laundering compliance (AML/CFT)',
      'Operational and market risk management',
      'Regulatory reporting and banking supervision',
      'Staff training on new regulations'
    ],
    'sectors.financier.banques.cta.title': 'Ready to revolutionize your banking services?',
    'sectors.financier.banques.cta.button': 'TRANSFORM YOUR BANK',

    // Sector Pages - Insurance Sector
    'sectors.financier.assurance.hero.title': 'Insurance Sector in DRC',
    'sectors.financier.assurance.hero.subtitle': 'Develop insurance culture and financial protection in the DRC. We support insurance companies in product innovation, digitalization and expansion of their coverage to protect individuals and businesses.',
    'sectors.financier.assurance.hero.cta': 'Develop your insurance services',
    'sectors.financier.assurance.insurtech.title': 'InsurTech and digitalization',
    'sectors.financier.assurance.insurtech.subtitle': 'Modernize your processes with insurance technologies:',
    'sectors.financier.assurance.insurtech.bullets': [
      'Digital platforms for online underwriting',
      'Mobile applications for policy management',
      'Artificial intelligence for dynamic pricing',
      'Blockchain for transparency and anti-fraud',
      'IoT and telematics for auto insurance'
    ],
    'sectors.financier.assurance.risques.title': 'Risk assessment and management',
    'sectors.financier.assurance.risques.subtitle': 'Strengthen your analysis and pricing capabilities:',
    'sectors.financier.assurance.risques.bullets': [
      'Actuarial modeling and local mortality tables',
      'Assessment of climate and environmental risks',
      'Big data and analytics for claims prediction',
      'Development of innovative insurance products',
      'Portfolio management and reinsurance'
    ],
    'sectors.financier.assurance.micro.title': 'Micro-insurance and financial inclusion',
    'sectors.financier.assurance.micro.subtitle': 'Democratize access to insurance for all:',
    'sectors.financier.assurance.micro.bullets': [
      'Development of affordable micro-insurance products',
      'Community and mutual health insurance',
      'Crop and livestock insurance for farmers',
      'Partnerships with microfinance institutions',
      'Distribution via mobile money and rural agents'
    ],
    'sectors.financier.assurance.cta.title': 'Ready to transform insurance in DRC?',
    'sectors.financier.assurance.cta.button': 'DEVELOP YOUR PRODUCTS',

    // Sector Pages - Investment
    'sectors.financier.investissement.hero.title': 'Investment and Venture Capital',
    'sectors.financier.investissement.hero.subtitle': 'Stimulate private investment and venture capital development in the DRC. We support investors, investment funds and startups in their financing and growth strategies.',
    'sectors.financier.investissement.hero.cta': 'Develop your investments',
    'sectors.financier.investissement.fonds.title': 'Investment funds and venture capital',
    'sectors.financier.investissement.fonds.subtitle': 'Innovative investment structures and strategies:',
    'sectors.financier.investissement.fonds.bullets': [
      'Creation and structuring of investment funds',
      'Venture capital for innovative startups and SMEs',
      'Private equity and growth capital',
      'Impact investing and sustainable finance',
      'Portfolio management and exit strategies'
    ],
    'sectors.financier.investissement.startups.title': 'Startup and SME financing',
    'sectors.financier.investissement.startups.subtitle': 'Support the growth of innovative companies:',
    'sectors.financier.investissement.startups.bullets': [
      'Business plan and financial modeling',
      'Preparation for fundraising rounds',
      'Due diligence and company valuation',
      'Growth and expansion strategies',
      'Mentoring and entrepreneurial support'
    ],
    'sectors.financier.investissement.marches.title': 'Financial markets and instruments',
    'sectors.financier.investissement.marches.subtitle': 'Develop local capital markets:',
    'sectors.financier.investissement.marches.bullets': [
      'IPO and stock market listing',
      'Bond issuance and debt securities',
      'Derivatives and risk hedging',
      'Trading and portfolio management',
      'Market regulation and supervision'
    ],
    'sectors.financier.investissement.cta.title': 'Ready to develop investment?',
    'sectors.financier.investissement.cta.button': 'LAUNCH YOUR INVESTMENTS',

    // Sector Pages - FinTech
    'sectors.financier.fintech.hero.title': 'FinTech and Financial Innovation',
    'sectors.financier.fintech.hero.subtitle': 'Revolutionize financial services with innovative technologies. We support FinTech startups and financial institutions in developing digital solutions for financial inclusion.',
    'sectors.financier.fintech.hero.cta': 'Develop your FinTech',
    'sectors.financier.fintech.paiements.title': 'Digital payment solutions',
    'sectors.financier.fintech.paiements.subtitle': 'Innovations in payment systems:',
    'sectors.financier.fintech.paiements.bullets': [
      'Mobile payment platforms and e-wallets',
      'Contactless payment solutions',
      'International money transfers',
      'Cryptocurrencies and stablecoins',
      'Payment APIs and integration'
    ],
    'sectors.financier.fintech.credit.title': 'Alternative financing and credit',
    'sectors.financier.fintech.credit.subtitle': 'New approaches to financing:',
    'sectors.financier.fintech.credit.bullets': [
      'Crowdfunding platforms and P2P lending',
      'Alternative scoring and digital microcredit',
      'Online factoring and factoring',
      'Invoice financing and supply chain finance',
      'Instant loans and revolving credit'
    ],
    'sectors.financier.fintech.ia.title': 'Artificial intelligence and analytics',
    'sectors.financier.fintech.ia.subtitle': 'Advanced technologies for finance:',
    'sectors.financier.fintech.ia.bullets': [
      'Chatbots and virtual assistants',
      'Predictive analytics and risk management',
      'Fraud detection and security',
      'Robo-advisors and automated management',
      'Big data and customer insights'
    ],
    'sectors.financier.fintech.cta.title': 'Ready to revolutionize finance?',
    'sectors.financier.fintech.cta.button': 'DEVELOP YOUR SOLUTION',

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

    // Navigation Submenus - Services
    'nav.services.conseil.fiscal': 'Tax Advisory and Regulatory Compliance',
    'nav.services.conseil.rh': 'Human Resources Management Consulting',
    'nav.services.conseil.strategie': 'Strategy and Business Transformation Consulting',
    'nav.services.representation.administratif': 'Administrative and Legal Support',
    'nav.services.representation.locale': 'Local Representation',
    'nav.services.representation.penetration': 'Market Penetration Strategies',
    'nav.services.etudes.marche': 'Market Studies',
    'nav.services.etudes.economique': 'Economic and Financial Studies',
    'nav.services.etudes.strategique': 'Strategic and Organizational Studies',

    // Navigation Submenus - Sectors
    'nav.sectors.agricole.title': 'Agricultural',
    'nav.sectors.agricole.agroalimentaire': 'Agri-food',
    'nav.sectors.agricole.vivriere': 'Subsistence Agriculture',
    'nav.sectors.agricole.peche': 'Fishing and Aquaculture',
    'nav.sectors.agricole.industrielle': 'Industrial Agriculture',
    'nav.sectors.minier.title': 'Mining',
    'nav.sectors.minier.exploration': 'Mining Exploration',
    'nav.sectors.minier.exploitation': 'Mining Exploitation',
    'nav.sectors.minier.transformation': 'Transformation and Metallurgy',
    'nav.sectors.minier.commerce': 'Trade and Trading',
    'nav.sectors.financier.title': 'Financial',
    'nav.sectors.financier.banques': 'Banking Sector',
    'nav.sectors.financier.assurance': 'Insurance',
    'nav.sectors.financier.investissement': 'Investment and Asset Management',
    'nav.sectors.financier.fintech': 'Fintech and Innovation',

    // Navigation Submenus - About
    'nav.about.about.title': 'About',
    'nav.about.mission': 'Mission',
    'nav.about.vision': 'Vision',
    'nav.about.valeurs': 'Values',
    'nav.about.projets.title': 'Projects',
    'nav.about.projets.agrobusiness': 'AgroBusiness',
    'nav.about.projets.bi': 'Business Intelligence',
    'nav.about.projets.banques': 'Specialized Investment Banks',

    // Sectors Pages
    'sectors.agricole.title': 'Agricultural Subsectors',
    'sectors.agricole.agroalimentaire.title': 'Agri-food',
    'sectors.agricole.agroalimentaire.description': "Agri-food is at the heart of the agricultural value chain. It involves the processing, packaging, and enhancement of agricultural products to meet the growing food needs of the population. This subsector fosters innovation, job creation, and the development of competitive local industries, while ensuring food security and the quality of products for both human and animal consumption.",
    'sectors.agricole.vivriere.title': 'Subsistence agriculture',
    'sectors.agricole.vivriere.description': "Subsistence agriculture is the backbone of food security in many regions. It focuses on the production of crops mainly for self-consumption and local market supply. This subsector values traditional know-how, crop diversity, and the resilience of rural communities, while contributing to poverty reduction and environmental preservation.",
    'sectors.agricole.peche.title': 'Fishing and aquaculture',
    'sectors.agricole.peche.description': "Fishing and aquaculture offer major opportunities for food diversification and economic development. This subsector focuses on the sustainable exploitation of fishery resources, the modernization of fishing techniques, and the growth of aquaculture to meet the increasing demand for animal protein. It also promotes job creation, the enhancement of local products, and the preservation of aquatic ecosystems.",
    'sectors.agricole.industrielle.title': 'Industrial agriculture',
    'sectors.agricole.industrielle.description': "Industrial agriculture is characterized by large-scale, highly mechanized production aimed at export or supplying the agri-food industries. This subsector promotes the integration of advanced technologies, yield optimization, and competitiveness in international markets. It plays a key role in modernizing the agricultural sector, creating added value, and attracting investments.",

    'sectors.minier.title': 'Mining Subsectors',
    'sectors.minier.assurance.title': 'Mining Insurance',
    'sectors.minier.assurance.description': "Mining insurance is a key pillar for risk management in the extractive industry. It protects investments against natural hazards, accidents, and unforeseen events related to resource extraction. This subsector fosters investor confidence, project sustainability, and compliance with international safety and environmental standards.",
    'sectors.minier.fiscal.title': 'Mining Taxation and Royalties',
    'sectors.minier.fiscal.description': "Mining taxation and royalties structure the mining sector's contribution to the national economy. This subsector covers the management of taxes, duties, and financial obligations of mining companies, while ensuring a balance between investor attractiveness and positive outcomes for the state and local communities. It plays a crucial role in transparency, wealth redistribution, and sustainable development.",
    'sectors.minier.banques.title': 'Specialized Investment Banks',
    'sectors.minier.banques.description': "Specialized investment banks support the financing and structuring of major mining projects. They offer tailored solutions to raise funds, manage financial risks, and optimize operational profitability. This subsector fosters financial innovation, access to international markets, and the realization of long-term strategic investments.",
    'sectors.minier.audit.title': 'Mining Audit and Financial Management',
    'sectors.minier.audit.description': "Mining audit and financial management ensure transparency, compliance, and performance for companies in the sector. This subsector covers the control of financial flows, risk assessment, implementation of sound accounting practices, and the production of reliable reports for stakeholders. It helps strengthen governance, credibility, and the sustainability of mining activities.",

    'sectors.financier.title': 'Financial Subsectors',
    'sectors.financier.assurance.title': 'Insurance',
    'sectors.financier.assurance.description': "The insurance sector plays a fundamental role in protecting people, property, and investments. It offers tailored solutions to cover risks related to life, health, professional activity, or material assets. This subsector fosters economic stability, stakeholder confidence, and access to innovative financial services, while contributing to the security and peace of mind of businesses and individuals.",
    'sectors.financier.gestion.title': 'Asset Management',
    'sectors.financier.gestion.description': "Asset management is about optimizing the value and profitability of financial, real estate, or industrial portfolios. This subsector implements personalized strategies to meet investors' growth, security, and diversification objectives. It promotes innovation, transparency, and performance, while supporting clients in achieving their wealth ambitions.",
    'sectors.financier.audit.title': 'Financial Audit and Control',
    'sectors.financier.audit.description': "Financial audit and control ensure the reliability, compliance, and transparency of economic operations. This subsector covers the analysis of financial flows, account verification, risk assessment, and the implementation of rigorous procedures. It helps strengthen governance, credibility, and stakeholder confidence in resource management.",
    'sectors.financier.banques.title': 'Investment Banks',
    'sectors.financier.banques.description': "Investment banks support companies and institutions in their financing, mergers and acquisitions, and strategic development operations. This subsector offers tailored solutions to raise funds, structure complex transactions, and access international markets. It fosters financial innovation, growth, and global competitiveness.",

    'sectors.back.button': 'Back to sectors',

    // Services Pages
    'services.economique.title': 'Economic Studies',
    'services.economique.subtitle': 'Analysis of the viability, risks, and economic opportunities of your project.',
    'services.economique.why.title': 'Why conduct an economic study?',
    'services.economique.avantages.vision.title': 'Strategic Vision',
    'services.economique.avantages.vision.desc': 'Make informed decisions and anticipate market developments.',
    'services.economique.avantages.croissance.title': 'Sustainable Growth',
    'services.economique.avantages.croissance.desc': 'Optimize the profitability and viability of your project.',
    'services.economique.avantages.risques.title': 'Risk Management',
    'services.economique.avantages.risques.desc': 'Identify and mitigate major economic risks.',
    'services.economique.avantages.impact.title': 'Local Impact',
    'services.economique.avantages.impact.desc': 'Create value and jobs in your territory.',
    'services.economique.sections.resume.title': 'Economic Summary',
    'services.economique.sections.resume.content': 'This economic study aims to demonstrate the solidity and viability of the envisaged business model. Based on market study data, it evaluates the cost structure, revenue sources, and conditions necessary to achieve profitability.',
    'services.economique.sections.modele.title': 'Economic Model',
    'services.economique.sections.modele.content': 'The economic model is based on a balance between development costs, customer acquisition efforts, and revenue generation through a clear and evolving offering. It takes into account:',
    'services.economique.sections.modele.list': [
      'One or more revenue sources defined according to strategic positioning.',
      'An optimized cost structure combining fixed and variable charges.',
      'Planned margins allowing sustainable operation and medium-term growth potential.',
      'An achievable break-even point based on natural customer evolution and commercial efforts.'
    ],
    'services.economique.sections.previsions.title': 'Financial Forecasts',
    'services.economique.sections.previsions.content': 'Financial forecasts have been established over a multi-year horizon, with particular attention to:',
    'services.economique.sections.previsions.list': [
      'Progressive evolution of turnover.',
      'Control of operational charges.',
      'Building sufficient cash flow to support growth.',
      'Implementation of monitoring indicators (result, cash flow, profitability).'
    ],
    'services.economique.sections.financement.title': 'Financing Needs',
    'services.economique.sections.financement.content': 'The project requires initial funding to cover critical early phases, including development, market launch, and recruitment of essential resources. A financing plan has been designed to distribute needs between equity, available aid, and potential financial partners.',
    'services.economique.sections.viabilite.title': 'Viability and Profitability',
    'services.economique.sections.viabilite.content': 'The economic analysis highlights a realistic return on investment in the medium term, based on:',
    'services.economique.sections.viabilite.list': [
      'Progressive and controlled ramp-up.',
      'Effective customer retention.',
      'A profitability strategy based on recurrence and average value per customer.',
      'Alignment between acquisition costs and long-term customer-generated value.'
    ],
    'services.economique.sections.retombees.title': 'Economic Benefits',
    'services.economique.sections.retombees.content': 'Beyond internal performance indicators, the project presents positive benefits at the local and sectoral level:',
    'services.economique.sections.retombees.list': [
      'Creation of direct and indirect jobs.',
      'Enhancement of local skills.',
      'Dynamization of a changing market segment.',
      'Induced effects on partners, subcontractors, or related ecosystems.'
    ],
    'services.economique.sections.risques.title': 'Economic Risks',
    'services.economique.sections.risques.content': 'Several risks have been identified, including:',
    'services.economique.sections.risques.list': [
      'Fluctuations related to the general economic context.',
      'Cost variations related to customer acquisition or the production chain.',
      'Potential dependence on certain suppliers or distribution channels.'
    ],
    'services.economique.sections.risques.end': 'Mitigation strategies are planned: contingency plan, channel diversification, automation, strategic partnerships.',
    'services.economique.sections.hypotheses.title': 'Assumptions Made',
    'services.economique.sections.hypotheses.content': 'All forecasts are based on prudent assumptions consistent with trends observed in the market:',
    'services.economique.sections.hypotheses.list': [
      'Sector growth rate.',
      'Evolution of consumer behaviors.',
      'Sales cycle duration.',
      'Adoption rate of the offering according to target segments.'
    ],
    'services.economique.cta.title': 'Need a personalized economic study?',
    'services.economique.cta.subtitle': 'Contact us to discuss your project and get a customized analysis tailored to your needs and sector.',
    'services.economique.cta.button': 'Discuss your project',

    // About Page
    'about.hero.title': 'About Elite Partners',
    'about.hero.subtitle': 'Discover our mission, vision, and values that guide our commitment to excellence and innovation in the Democratic Republic of Congo. We are your trusted partner to transform challenges into opportunities.',
    'about.hero.cta': 'Learn More',
    'about.content.title': 'About Elite Partners',
    'about.mission.title': 'Our Mission',
    'about.mission.subtitle': 'Supporting the economic emergence of the DRC:',
    'about.mission.items': [
      'Facilitate access to investment opportunities',
      'Support companies in their development',
      'Promote innovation and operational excellence',
      'Contribute to the country\'s sustainable development',
      'Create bridges between local and international actors'
    ],
    'about.vision.title': 'Our Vision',
    'about.vision.subtitle': 'Become the reference partner in the DRC:',
    'about.vision.items': [
      'Be recognized as a leader in innovation and excellence',
      'Contribute to making the DRC a regional economic hub',
      'Develop sustainable and inclusive solutions',
      'Inspire the next generation of entrepreneurs',
      'Create a positive impact on local communities'
    ],
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our actions:',
    'about.values.items': [
      'Excellence: Constant pursuit of quality and innovation',
      'Integrity: Ethics and transparency in all our relationships',
      'Collaboration: Teamwork and sustainable partnerships',
      'Responsibility: Commitment to our clients and society',
      'Adaptability: Flexibility in the face of challenges and opportunities'
    ],
    'about.cta.subtitle': 'Ready to collaborate with us?',
    'about.cta.button': 'CONTACT US',

    // Sector Pages - Agroalimentaire
    'sectors.agroalimentaire.hero.title': 'Agri-Food Sector in DRC',
    'sectors.agroalimentaire.hero.subtitle': 'Transform the agricultural potential of the DRC into sustainable business opportunities. We support agri-food companies in their development, from production to commercialization, while respecting international standards.',
    'sectors.agroalimentaire.hero.cta': 'Develop your agri-food project',
    'sectors.agroalimentaire.transformation.title': 'Product transformation and valorization',
    'sectors.agroalimentaire.transformation.subtitle': 'Optimize the value chain of your agricultural products:',
    'sectors.agroalimentaire.transformation.items': [
      'Advisory on food processing technologies',
      'Setting up modern processing units',
      'Development of new food products',
      'Optimization of preservation processes',
      'Support towards certified organic agriculture'
    ],
    'sectors.agroalimentaire.quality.title': 'Quality control and certifications',
    'sectors.agroalimentaire.quality.subtitle': 'Ensure compliance with international standards:',
    'sectors.agroalimentaire.quality.items': [
      'Implementation of HACCP and ISO 22000 systems',
      'Organic and fair trade certification',
      'Complete traceability of food products',
      'Staff training in good practices',
      'Quality audits and certification support'
    ],
    'sectors.agroalimentaire.distribution.title': 'Distribution and market access',
    'sectors.agroalimentaire.distribution.subtitle': 'Develop your distribution channels:',
    'sectors.agroalimentaire.distribution.items': [
      'Market penetration strategies for local and regional markets',
      'Development of distribution networks',
      'Negotiation with supermarkets and distributors',
      'Marketing and food product communication',
      'Export to international markets'
    ],
    'sectors.agroalimentaire.cta.subtitle': 'Ready to valorize your agri-food products?',
    'sectors.agroalimentaire.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Vivrière
    'sectors.vivriere.hero.title': 'Subsistence Agriculture in DRC',
    'sectors.vivriere.hero.subtitle': 'Develop sustainable and resilient agriculture to ensure food security. We support producers in optimizing their subsistence crops and improving their productivity.',
    'sectors.vivriere.hero.cta': 'Develop your agricultural project',
    'sectors.vivriere.production.title': 'Production and diversification',
    'sectors.vivriere.production.subtitle': 'Optimize your agricultural production:',
    'sectors.vivriere.production.items': [
      'Selection of crops adapted to local climate',
      'Sustainable and resilient production techniques',
      'Crop diversification for food security',
      'Optimization of yields and quality',
      'Integrated natural resource management'
    ],
    'sectors.vivriere.techniques.title': 'Modern and traditional techniques',
    'sectors.vivriere.techniques.subtitle': 'Combine innovation and local know-how:',
    'sectors.vivriere.techniques.items': [
      'Integration of modern agricultural technologies',
      'Preservation of proven traditional techniques',
      'Training in good agricultural practices',
      'Sustainable water and soil management',
      'Adaptation to climate change'
    ],
    'sectors.vivriere.marche.title': 'Access to local markets',
    'sectors.vivriere.marche.subtitle': 'Valorize your production:',
    'sectors.vivriere.marche.items': [
      'Development of short distribution circuits',
      'Organization of producers into cooperatives',
      'Improvement of quality and presentation',
      'Access to urban and rural markets',
      'Price and income stabilization'
    ],
    'sectors.vivriere.cta.subtitle': 'Ready to develop your subsistence agriculture?',
    'sectors.vivriere.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Pêche
    'sectors.peche.hero.title': 'Fishing and Aquaculture in DRC',
    'sectors.peche.hero.subtitle': 'Exploit the fishery potential of the DRC sustainably. We support fishing and aquaculture actors in developing their activities while preserving ecosystems.',
    'sectors.peche.hero.cta': 'Develop your fishery project',
    'sectors.peche.durable.title': 'Sustainable and responsible fishing',
    'sectors.peche.durable.subtitle': 'Develop environmentally friendly fishing:',
    'sectors.peche.durable.items': [
      'Selective and sustainable fishing techniques',
      'Stock and fishery resource management',
      'Training in good fishing practices',
      'Modern and environmentally friendly equipment',
      'MSC certification and quality labels'
    ],
    'sectors.peche.aquaculture.title': 'Aquaculture development',
    'sectors.peche.aquaculture.subtitle': 'Diversify your activities with aquaculture:',
    'sectors.peche.aquaculture.items': [
      'Études de faisabilité pour projets aquacoles',
      'Conception et construction d\'installations',
      'Sélection des espèces adaptées au climat local',
      'Gestion de la qualité de l\'eau et de l\'alimentation',
      'Formation aux techniques d\'élevage'
    ],
    'sectors.peche.transformation.title': 'Transformation and valorization',
    'sectors.peche.transformation.subtitle': 'Optimize the value of your products:',
    'sectors.peche.transformation.items': [
      'Techniques de conservation et de transformation',
      'Développement de produits à valeur ajoutée',
      'Contrôle qualité et traçabilité',
      'Packaging et présentation des produits',
      'Accès aux marchés locaux et internationaux'
    ],
    'sectors.peche.cta.subtitle': 'Ready to develop your fishery activities?',
    'sectors.peche.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Industrielle
    'sectors.industrielle.hero.title': 'Industrial Agriculture in DRC',
    'sectors.industrielle.hero.subtitle': 'Develop large-scale, highly mechanized agriculture. We support investors in setting up competitive and sustainable industrial agricultural projects.',
    'sectors.industrielle.hero.cta': 'Develop your industrial project',
    'sectors.industrielle.mecanisation.title': 'Mechanization and technologies',
    'sectors.industrielle.mecanisation.subtitle': 'Modernize your agricultural operations:',
    'sectors.industrielle.mecanisation.items': [
      'Selection of adapted agricultural equipment',
      'Training in new agricultural technologies',
      'Optimization of production processes',
      'Maintenance and spare parts management',
      'Integration of digital solutions'
    ],
    'sectors.industrielle.production.title': 'Large-scale production',
    'sectors.industrielle.production.subtitle': 'Optimize your industrial production:',
    'sectors.industrielle.production.items': [
      'Planning and management of industrial crops',
      'Optimization of yields and productivity',
      'Input and resource management',
      'Quality control and certification',
      'Logistics and product transport'
    ],
    'sectors.industrielle.export.title': 'Export and international markets',
    'sectors.industrielle.export.subtitle': 'Access international markets:',
    'sectors.industrielle.export.items': [
      'Market studies and export feasibility',
      'International certification and compliance',
      'International logistics and transport',
      'Negotiation with international buyers',
      'Risk management and insurance'
    ],
    'sectors.industrielle.cta.subtitle': 'Ready to develop your industrial agriculture?',
    'sectors.industrielle.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Minier Exploration
    'sectors.minier.exploration.hero.title': 'Mining Exploration in DRC',
    'sectors.minier.exploration.hero.subtitle': 'Discover and evaluate the mining potential of the DRC. We support exploration companies in their prospecting and mineral resource evaluation projects.',
    'sectors.minier.exploration.hero.cta': 'Develop your exploration project',
    'sectors.minier.exploration.prospection.title': 'Prospecting and geology',
    'sectors.minier.exploration.prospection.subtitle': 'Identify areas of mining potential:',
    'sectors.minier.exploration.prospection.items': [
      'Geological and geophysical studies',
      'Mapping and 3D modeling',
      'Mineral sampling and analysis',
      'Resource and reserve evaluation',
      'Technical reports compliant with international standards'
    ],
    'sectors.minier.exploration.permis.title': 'Permit and authorization management',
    'sectors.minier.exploration.permis.subtitle': 'Obtain necessary authorizations:',
    'sectors.minier.exploration.permis.items': [
      'Application and management of exploration permits',
      'Regulatory and environmental compliance',
      'Negotiation with local authorities',
      'Community relations management',
      'Legal and tax obligation monitoring'
    ],
    'sectors.minier.exploration.technologies.title': 'Advanced exploration technologies',
    'sectors.minier.exploration.technologies.subtitle': 'Use the latest technologies:',
    'sectors.minier.exploration.technologies.items': [
      'Remote sensing and satellite imagery',
      'Geographic Information Systems (GIS)',
      'Drilling and sampling technologies',
      'Geochemical and mineralogical analysis',
      'Predictive modeling and AI'
    ],
    'sectors.minier.exploration.cta.subtitle': 'Ready to explore the mining potential of the DRC?',
    'sectors.minier.exploration.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Minier Exploitation
    'sectors.minier.exploitation.hero.title': 'Mining Exploitation in DRC',
    'sectors.minier.exploitation.hero.subtitle': 'Develop efficient and sustainable mining operations. We support mining companies in optimizing their exploitation activities and maximizing their profitability.',
    'sectors.minier.exploitation.hero.cta': 'Develop your exploitation project',
    'sectors.minier.exploitation.planification.title': 'Planning and optimization',
    'sectors.minier.exploitation.planification.subtitle': 'Optimize your mining operations:',
    'sectors.minier.exploitation.planification.items': [
      'Short and long-term mining planning',
      'Optimization of extraction methods',
      'Stock and production management',
      'Equipment and workforce planning',
      'Profitability and viability analysis'
    ],
    'sectors.minier.exploitation.securite.title': 'Safety and environment',
    'sectors.minier.exploitation.securite.subtitle': 'Ensure secure operations:',
    'sectors.minier.exploitation.securite.items': [
      'Implementation of safety systems',
      'Risk and incident management',
      'Environmental compliance',
      'Staff training in good practices',
      'Safety and environmental audits'
    ],
    'sectors.minier.exploitation.maintenance.title': 'Maintenance and equipment',
    'sectors.minier.exploitation.maintenance.subtitle': 'Optimize your equipment performance:',
    'sectors.minier.exploitation.maintenance.items': [
      'Preventive and predictive management',
      'Maintenance cost optimization',
      'Technical team training',
      'Spare parts management',
      'Continuous process improvement'
    ],
    'sectors.minier.exploitation.cta.subtitle': 'Ready to optimize your mining operations?',
    'sectors.minier.exploitation.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Minier Transformation
    'sectors.minier.transformation.hero.title': 'Transformation and Metallurgy in DRC',
    'sectors.minier.transformation.hero.subtitle': 'Valorize your ores through transformation and metallurgy. We support companies in developing transformation and refining units.',
    'sectors.minier.transformation.hero.cta': 'Develop your transformation project',
    'sectors.minier.transformation.procedes.title': 'Transformation processes',
    'sectors.minier.transformation.procedes.subtitle': 'Optimize your transformation processes:',
    'sectors.minier.transformation.procedes.items': [
      'Design of transformation units',
      'Optimization of metallurgical processes',
      'Quality control and product analysis',
      'Waste and environmental management',
      'Training in new technologies'
    ],
    'sectors.minier.transformation.qualite.title': 'Quality control and certification',
    'sectors.minier.transformation.qualite.subtitle': 'Ensure product quality:',
    'sectors.minier.transformation.qualite.items': [
      'Setting up analysis laboratories',
      'Finished product certification',
      'Raw material traceability',
      'Impurity control and specifications',
      'Analysis method accreditation'
    ],
    'sectors.minier.transformation.marche.title': 'Market access',
    'sectors.minier.transformation.marche.subtitle': 'Commercialize your transformed products:',
    'sectors.minier.transformation.marche.items': [
      'Market studies and feasibility',
      'Buyer negotiation',
      'Product logistics and transport',
      'Stock and distribution management',
      'New market development'
    ],
    'sectors.minier.transformation.cta.subtitle': 'Ready to transform your ores?',
    'sectors.minier.transformation.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Minier Commerce
    'sectors.minier.commerce.hero.title': 'Mining Trade and Trading in DRC',
    'sectors.minier.commerce.hero.subtitle': 'Develop your ore trading and trading activities. We support companies in optimizing their commercial operations and accessing international markets.',
    'sectors.minier.commerce.hero.cta': 'Develop your commercial project',
    'sectors.minier.commerce.achat.title': 'Purchase and supply',
    'sectors.minier.commerce.achat.subtitle': 'Optimize your supply chain:',
    'sectors.minier.commerce.achat.items': [
      'Supplier identification and qualification',
      'Purchase contract negotiation',
      'Raw material quality control',
      'Stock and logistics management',
      'Supply cost optimization'
    ],
    'sectors.minier.commerce.vente.title': 'Sales and commercialization',
    'sectors.minier.commerce.vente.subtitle': 'Maximize your sales:',
    'sectors.minier.commerce.vente.items': [
      'Target market identification',
      'Negotiation with international buyers',
      'Sales contract management',
      'Price and margin optimization',
      'New client development'
    ],
    'sectors.minier.commerce.logistique.title': 'Logistics and transport',
    'sectors.minier.commerce.logistique.subtitle': 'Optimize your logistics:',
    'sectors.minier.commerce.logistique.items': [
      'Transport planning',
      'Warehouse and storage management',
      'Logistics cost optimization',
      'Transport document management',
      'Shipment tracking'
    ],
    'sectors.minier.commerce.cta.subtitle': 'Ready to develop your mining trade?',
    'sectors.minier.commerce.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Financier Banques
    'sectors.financier.banques.hero.title': 'Banking Sector in DRC',
    'sectors.financier.banques.hero.subtitle': 'Develop your banking and financial activities in the DRC. We support banks in optimizing their operations and accessing local markets.',
    'sectors.financier.banques.hero.cta': 'Develop your banking project',
    'sectors.financier.banques.retail.title': 'Retail banking',
    'sectors.financier.banques.retail.subtitle': 'Develop your retail banking services:',
    'sectors.financier.banques.retail.items': [
      'Account and deposit management',
      'Credit and financing services',
      'Savings and investment products',
      'Payment and transfer services',
      'Personalized financial advice'
    ],
    'sectors.financier.banques.corporate.title': 'Corporate banking',
    'sectors.financier.banques.corporate.subtitle': 'Support companies:',
    'sectors.financier.banques.corporate.items': [
      'Investment project financing',
      'Treasury and cash flow management',
      'Trade finance services',
      'Merger and acquisition advisory',
      'Financial risk management'
    ],
    'sectors.financier.banques.investment.title': 'Investment banking',
    'sectors.financier.banques.investment.subtitle': 'Develop your investment activities:',
    'sectors.financier.banques.investment.items': [
      'Fund raising and IPO',
      'Asset and portfolio management',
      'Investment advisory',
      'Financial product structuring',
      'Market risk management'
    ],
    'sectors.financier.banques.cta.subtitle': 'Ready to develop your banking activities?',
    'sectors.financier.banques.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Financier Assurance
    'sectors.financier.assurance.hero.title': 'Insurance Sector in DRC',
    'sectors.financier.assurance.hero.subtitle': 'Develop your insurance activities in the DRC. We support insurers in optimizing their products and accessing local markets.',
    'sectors.financier.assurance.hero.cta': 'Develop your insurance project',
    'sectors.financier.assurance.vie.title': 'Life insurance',
    'sectors.financier.assurance.vie.subtitle': 'Develop your life insurance products:',
    'sectors.financier.assurance.vie.items': [
      'Traditional life insurance products',
      'Savings and retirement products',
      'Death and disability insurance',
      'Provident products',
      'Social protection advisory'
    ],
    'sectors.financier.assurance.nonvie.title': 'Non-life insurance',
    'sectors.financier.assurance.nonvie.subtitle': 'Develop your non-life insurance products:',
    'sectors.financier.assurance.nonvie.items': [
      'Automotive and transport insurance',
      'Home and property insurance',
      'Civil liability insurance',
      'Health and accident insurance',
      'Business and professional insurance'
    ],
    'sectors.financier.assurance.reassurance.title': 'Reinsurance',
    'sectors.financier.assurance.reassurance.subtitle': 'Manage your reinsurance risks:',
    'sectors.financier.assurance.reassurance.items': [
      'Risk cession to reinsurers',
      'Reinsurance treaty management',
      'Cession optimization',
      'Complex claims management',
      'Regulatory compliance'
    ],
    'sectors.financier.assurance.cta.subtitle': 'Ready to develop your insurance activities?',
    'sectors.financier.assurance.cta.button': 'START YOUR PROJECT',

    // Sector Pages - Financier Investissement
    'sectors.financier.investissement.hero.title': 'Investment and Asset Management in DRC',
    'sectors.financier.investissement.hero.subtitle': 'Develop your investment and asset management activities in the DRC. We support managers in optimizing their investment strategies.',
    'sectors.financier.investissement.hero.cta': 'Develop your investment project',
    'sectors.financier.investissement.portfolio.title': 'Institutional portfolio management',
    'sectors.financier.investissement.portfolio.subtitle': 'Asset management services for institutional investors:',
    'sectors.financier.investissement.portfolio.items': [
      'Discretionary management and management mandates',
      'Asset allocation and portfolio construction',
      'Alternative investments and structured products',
      'Quantitative management and trading algorithms',
      'Performance reporting and risk analysis'
    ],
    'sectors.financier.investissement.private.title': 'Private equity and venture capital',
    'sectors.financier.investissement.private.subtitle': 'Equity financing for growing companies:',
    'sectors.financier.investissement.private.items': [
      'Structuring of local private equity funds',
      'Due diligence and company valuation',
      'Post-investment support and value creation',
      'Exit strategies and return optimization',
      'Fundraising from international investors'
    ],
    'sectors.financier.investissement.capital.title': 'Capital markets development',
    'sectors.financier.investissement.capital.subtitle': 'Structuring and dynamization of local financial markets:',
    'sectors.financier.investissement.capital.items': [
      'IPO and bond issuance',
      'Market making and market animation',
      'Development of derivatives and commodities',
      'Training of local institutional investors',
      'Regulatory harmonization with international standards'
    ],
    'sectors.financier.investissement.cta.subtitle': 'Ready to boost investment in DRC?',
    'sectors.financier.investissement.cta.button': 'MOBILIZE CAPITAL',

    // Sector Pages - Financier Fintech
    'sectors.financier.fintech.hero.title': 'Fintech and Financial Innovation in DRC',
    'sectors.financier.fintech.hero.subtitle': 'Develop innovative financial solutions in the DRC. We support fintechs in developing their products and accessing local markets.',
    'sectors.financier.fintech.hero.cta': 'Develop your fintech project',
    'sectors.financier.fintech.payments.title': 'Digital payments and mobile money',
    'sectors.financier.fintech.payments.subtitle': 'Innovative payment solutions for financial inclusion:',
    'sectors.financier.fintech.payments.items': [
      'Development of mobile money platforms',
      'Contactless payment solutions (NFC, QR codes)',
      'Payment gateways for e-commerce',
      'Instant cross-border money transfers',
      'Integration with existing banking systems'
    ],
    'sectors.financier.fintech.blockchain.title': 'Blockchain and digital assets',
    'sectors.financier.fintech.blockchain.subtitle': 'Distributed ledger technologies for financial transparency:',
    'sectors.financier.fintech.blockchain.items': [
      'Development of central bank digital currencies (CBDC)',
      'Smart contracts for financial automation',
      'Asset tokenization and security tokens',
      'Supply chain traceability',
      'DeFi solutions adapted to local context'
    ],
    'sectors.financier.fintech.ai.title': 'AI and analytics for financial services',
    'sectors.financier.fintech.ai.subtitle': 'Intelligent technologies to optimize financial decisions:',
    'sectors.financier.fintech.ai.items': [
      'AI-based credit scoring and alternative data',
      'Chatbots and virtual assistants for customer service',
      'Real-time fraud detection',
      'Robo-advisors for investment advice',
      'Financial behavior prediction and churn'
    ],
    'sectors.financier.fintech.cta.subtitle': 'Ready to revolutionize finance in DRC?',
    'sectors.financier.fintech.cta.button': 'CREATE THE FINANCIAL FUTURE',

    // Project Pages
    'projects.agrobusiness.hero.title': 'AgroBusiness Project in DRC',
    'projects.agrobusiness.hero.subtitle': 'Discover our innovative project in the agri-food sector that transforms traditional agriculture into a modern and profitable business.',
    'projects.agrobusiness.hero.cta': 'Learn More',
    'projects.agrobusiness.about.title': 'About the project',
    'projects.agrobusiness.about.content': 'This project aims to modernize agriculture in the DRC by introducing advanced technologies and sustainable practices to improve productivity and profitability.',
    'projects.agrobusiness.cta.subtitle': 'Interested in this project?',
    'projects.agrobusiness.cta.button': 'CONTACT US',

    'projects.bi.hero.title': 'Business Intelligence Project in DRC',
    'projects.bi.hero.subtitle': 'Discover our Business Intelligence project that revolutionizes decision-making in Congolese companies.',
    'projects.bi.hero.cta': 'Learn More',
    'projects.bi.about.title': 'About the project',
    'projects.bi.about.content': 'This project implements Business Intelligence solutions to help companies analyze their data and make informed decisions.',
    'projects.bi.cta.subtitle': 'Interested in this project?',
    'projects.bi.cta.button': 'CONTACT US',

    'projects.banques.hero.title': 'Specialized Investment Banks Project in DRC',
    'projects.banques.hero.subtitle': 'Discover our project to develop specialized investment banks to support economic growth in the DRC.',
    'projects.banques.hero.cta': 'Learn More',
    'projects.banques.about.title': 'About the project',
    'projects.banques.about.content': 'This project aims to create specialized investment banks to finance infrastructure and development projects in the DRC.',
    'projects.banques.cta.subtitle': 'Interested in this project?',
    'projects.banques.cta.button': 'CONTACT US',

    // Project Pages - AgroBusiness
    'projects.agrobusiness.title': 'AgroBusiness',
    'projects.agrobusiness.subtitle': 'Agricultural innovation and sustainable development',
    'projects.agrobusiness.description': 'Our AgroBusiness project aims to revolutionize the agricultural sector in the DRC by combining modern technologies, sustainable practices, and local expertise to create a competitive and resilient agricultural value chain.',
    'projects.agrobusiness.about.title': 'About the AgroBusiness Project',
    'projects.agrobusiness.about.paragraph1': 'Our AgroBusiness initiative focuses on modernizing the Congolese agricultural sector by introducing cutting-edge technologies and sustainable agricultural practices. We work closely with local farmers to develop solutions adapted to the specific conditions of the DRC, while respecting local traditions and knowledge.',
    'projects.agrobusiness.about.paragraph2': 'The project includes the establishment of modern infrastructure, the introduction of advanced irrigation techniques, and the use of digital technologies to optimize production. We also train farmers in new methods and provide them with access to international markets, thereby contributing to improving their incomes and the country\'s food security.',
    'projects.agrobusiness.about.paragraph3': 'Our holistic approach also integrates environmental and social aspects, promoting organic farming, sustainable natural resource management, and the empowerment of rural communities. We firmly believe that sustainable agricultural development is the key to the DRC\'s economic prosperity.',
    'projects.agrobusiness.cta.interested': 'Interested in the AgroBusiness project?',

    // Project Pages - Business Intelligence
    'projects.bi.title': 'Business Intelligence',
    'projects.bi.subtitle': 'Intelligent data for strategic decisions',
    'projects.bi.description': 'Our Business Intelligence platform transforms raw data into actionable insights, enabling companies to make informed decisions based on in-depth analysis and accurate forecasts.',
    'projects.bi.about.title': 'About our Business Intelligence',
    'projects.bi.about.paragraph1': 'Our Business Intelligence solution revolutionizes how Congolese companies manage and analyze their data. Using advanced data analytics and artificial intelligence technologies, we transform complex information into intuitive dashboards and detailed reports that facilitate strategic decision-making.',
    'projects.bi.about.paragraph2': 'The platform integrates multiple data sources, including internal systems, market data, and economic indicators, to provide a comprehensive overview of company performance. Our predictive algorithms help identify emerging trends and growth opportunities, enabling leaders to anticipate market changes and adapt their strategies accordingly.',
    'projects.bi.about.paragraph3': 'We place particular importance on user training and support, organizing personalized training sessions and providing ongoing assistance. Our goal is to empower local teams to fully exploit the potential of their data and contribute to the digital transformation of the Congolese economy.',
    'projects.bi.cta.interested': 'Interested in our Business Intelligence?',

    // Project Pages - Specialized Investment Banks
    'projects.banques.title': 'Specialized Investment Banks',
    'projects.banques.subtitle': 'Tailored financing for strategic projects',
    'projects.banques.description': 'Our specialized investment banking services offer innovative financing solutions adapted to the specific needs of large-scale projects in the DRC, facilitating access to capital and optimizing financial structures.',
    'projects.banques.about.title': 'About our Investment Banks',
    'projects.banques.about.paragraph1': 'Our specialized investment banking division is dedicated to supporting large-scale projects in the DRC by offering sophisticated financing solutions adapted to the specific challenges of the local market. We combine international financial expertise with deep knowledge of the Congolese context to structure complex transactions and optimize capital flows.',
    'projects.banques.about.paragraph2': 'Our services include project financing structuring, bank syndication organization, merger and acquisition management, and IPO support. We work closely with international investors, local financial institutions, and regulatory authorities to create solutions that meet the needs of all stakeholders.',
    'projects.banques.about.paragraph3': 'We place particular importance on the sustainability and social impact of our investments, prioritizing projects that contribute to the economic and social development of the DRC. Our responsible approach allows us to create long-term value while respecting the principles of good governance and financial transparency.',
    'projects.banques.cta.interested': 'Interested in our investment services?',

    // Project Pages - Common
    'projects.common.learn.more': 'Learn More',
    'projects.common.about.project': 'About the project',
    'projects.common.interested': 'Interested in this project?',
    'projects.common.contact.us': 'CONTACT US',
    'projects.common.back.to.projects': 'Back to projects',
    'projects.common.not.found': 'Project not found',
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