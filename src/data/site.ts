export const site = {
  name: 'Bois Pratique',
  domain: 'https://boispratique.com',
  tagline: {
    fr: 'Le média terrain du travail du bois.',
    en: 'Practical woodworking, without empty shop talk.',
  },
  description: {
    fr: 'Bois Pratique publie des guides concrets sur les outils, l’atelier, les matériaux et les projets bois, avec un angle usage réel plutôt que blabla SEO.',
    en: 'Bois Pratique publishes practical woodworking guides on tools, workshop setup, materials and projects, with an editorial focus on real use instead of empty SEO filler.',
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
    'outils': { title: 'Outils', description: 'Des achats mieux arbitrés, des machines mieux comprises et moins de fantasmes d’atelier.' },
    'atelier': { title: 'Atelier', description: 'Organisation, rangement, flux, poussière, confort de travail : l’atelier comme lieu de production, pas comme décor.' },
    'techniques': { title: 'Techniques', description: 'Couper, poncer, régler, avancer proprement : les gestes utiles expliqués sans folklore inutile.' },
    'projets': { title: 'Projets', description: 'Des projets assez simples pour être construits, assez utiles pour vraiment servir, et assez propres pour faire progresser.' },
    'materiaux': { title: 'Matériaux', description: 'Massif, contreplaqué, MDF, panneaux : comment choisir la matière qui aide le projet au lieu de le compliquer.' },
    'guides-achat': { title: 'Guides d’achat', description: 'Des guides d’achat pensés pour l’usage réel, pas pour flatter la fiche technique ou l’achat compulsif.' },
  },
  en: {
    'tools': { title: 'Tools', description: 'Better buying decisions, clearer tool choices and less fantasy-shop thinking.' },
    'workshop': { title: 'Workshop', description: 'Layout, storage, dust, movement and everyday shop comfort — the workshop as a working space, not a backdrop.' },
    'techniques': { title: 'Techniques', description: 'Cutting, sanding, setup and practical shop methods explained without empty ritual.' },
    'projects': { title: 'Projects', description: 'Projects simple enough to build, useful enough to matter and honest enough to teach something real.' },
    'materials': { title: 'Materials', description: 'Solid wood, plywood, MDF and sheet goods — choosing materials that help the build instead of complicating it.' },
    'buying-guides': { title: 'Buying Guides', description: 'Buying guides built around actual use, not spec-sheet vanity or impulse purchases.' },
  },
};
