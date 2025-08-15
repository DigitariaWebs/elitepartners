export const SITE_CONFIG = {
  name: 'OrionPartners Group SARL',
  description: 'Votre partenaire de confiance pour l\'excellence et l\'innovation en République Démocratique du Congo',
  url: 'https://elitepartners-rdc.com', // TODO: update domain when new domain is available
  author: 'OrionPartners Group SARL',
};

// Note: NAVIGATION_ITEMS will be handled by the LanguageContext
// This is kept for backward compatibility but should be replaced with translations
export const NAVIGATION_ITEMS = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Secteurs', path: '/secteurs' },
  { name: 'À propos', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Service 1',
    description: 'Description du premier service',
    icon: 'Settings',
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Description du second service',
    icon: 'Zap',
  },
  {
    id: 3,
    title: 'Service 3',
    description: 'Description du troisième service',
    icon: 'Shield',
  },
];

export const CONTACT_INFO = {
  legalName: 'OrionPartners Group SARL',
  legalFormLongFr: 'Société à Responsabilité Limitée',
  legalFormLongEn: 'Limited Liability Company',
  address: 'No. 1 Avenue Tombalbaye, Local 307, Kinshasa-Gombe, DRC',
  email: 'contact@elitepartners-rdc.com', // TODO: update email domain when changed
  phones: ['+243 991 222 231', '+243 819 740 681'],
  linkedin: 'https://www.linkedin.com/company/elitepartnersgroup12/about/', // Update once new LinkedIn page exists
  x: 'https://x.com/elitepartners_rdc', // Update handle when rebranded
  instagram: 'https://instagram.com/elitepartners_rdc', // Update handle when rebranded
  whatsapp: 'https://wa.me/243991222231',
  logo: '/home images/LogoEle-1024x724.png',
};

export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    600: '#4b5563',
    700: '#374151',
    900: '#111827',
  },
};