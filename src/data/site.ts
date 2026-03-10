export const site = {
  name: 'Bois Pratique',
  domain: 'https://boispratique.com',
  tagline: {
    fr: 'Le média terrain du travail du bois.',
    en: 'Practical woodworking, no fluff.',
  },
  description: {
    fr: 'Bois Pratique aide à choisir les bons outils, progresser en atelier et réussir ses projets bois avec des conseils concrets.',
    en: 'Bois Pratique helps readers choose the right tools, improve workshop skills, and build with confidence through practical woodworking advice.',
  },
};

export const navigation = {
  fr: [
    { label: 'Débuter', href: '/' },
    { label: 'Outils', href: '/outils/' },
    { label: 'Atelier', href: '/atelier/' },
    { label: 'Techniques', href: '/techniques/' },
    { label: 'Projets', href: '/projets/' },
    { label: 'Matériaux', href: '/materiaux/' },
    { label: 'Guides d’achat', href: '/guides-achat/' },
  ],
  en: [
    { label: 'Start Here', href: '/en/' },
    { label: 'Tools', href: '/en/tools/' },
    { label: 'Workshop', href: '/en/workshop/' },
    { label: 'Techniques', href: '/en/techniques/' },
    { label: 'Projects', href: '/en/projects/' },
    { label: 'Materials', href: '/en/materials/' },
    { label: 'Buying Guides', href: '/en/buying-guides/' },
  ],
};

export const categoryMeta = {
  fr: {
    'outils': { title: 'Outils', description: 'Scies, défonceuses, ponceuses, aspiration, sécurité et comparatifs pratiques.' },
    'atelier': { title: 'Atelier', description: 'Organisation, petit espace, établi, rangement, aspiration et sécurité.' },
    'techniques': { title: 'Techniques', description: 'Coupe, ponçage, assemblages, réglages et méthodes concrètes.' },
    'projets': { title: 'Projets', description: 'Projets utiles, gabarits simples et réalisations orientées atelier.' },
    'materiaux': { title: 'Matériaux', description: 'Bois massif, panneaux, contreplaqué, OSB, humidité et usages.' },
    'guides-achat': { title: 'Guides d’achat', description: 'Articles transactionnels pensés pour la conversion et l’affiliation.' },
  },
  en: {
    'tools': { title: 'Tools', description: 'Saws, routers, sanders, dust collection, safety and buying advice.' },
    'workshop': { title: 'Workshop', description: 'Layout, small shop organization, benches, storage and dust control.' },
    'techniques': { title: 'Techniques', description: 'Cutting, sanding, joinery, setup tips and practical methods.' },
    'projects': { title: 'Projects', description: 'Useful builds, simple jigs and shop-focused projects.' },
    'materials': { title: 'Materials', description: 'Solid wood, sheet goods, plywood, MDF, OSB and moisture basics.' },
    'buying-guides': { title: 'Buying Guides', description: 'Commercial-intent content designed for conversion and affiliate revenue.' },
  },
};
