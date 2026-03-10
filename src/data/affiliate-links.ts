export const amazonFrTag = 'boispratique-21';

export type AffiliateProduct = {
  slug: string;
  title: string;
  merchant: 'amazon-fr';
  market: 'fr';
  asin?: string;
  search?: string;
  note?: string;
};

export const affiliateProductsFr: Record<string, AffiliateProduct> = {
  'makita-hs7601': {
    slug: 'makita-hs7601',
    title: 'Makita HS7601',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Makita HS7601 scie circulaire',
    note: 'Remplacer par un lien ASIN direct quand confirmé.',
  },
  'bosch-gks-190': {
    slug: 'bosch-gks-190',
    title: 'Bosch Professional GKS 190',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Bosch Professional GKS 190',
    note: 'Remplacer par un lien ASIN direct quand confirmé.',
  },
  'makita-dhs680': {
    slug: 'makita-dhs680',
    title: 'Makita DHS680',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Makita DHS680',
  },
  'makita-rt0700': {
    slug: 'makita-rt0700',
    title: 'Makita RT0700C / RT0702C',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Makita RT0700C affleureuse',
  },
  'bosch-gof-1250': {
    slug: 'bosch-gof-1250',
    title: 'Bosch GOF 1250 CE',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Bosch GOF 1250 CE',
  },
  'makita-ddf482': {
    slug: 'makita-ddf482',
    title: 'Makita DDF482',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Makita DDF482',
  },
  'bosch-gsr-18v-55': {
    slug: 'bosch-gsr-18v-55',
    title: 'Bosch Professional GSR 18V-55',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Bosch GSR 18V-55',
  },
  'bosch-gex-125-1-ae': {
    slug: 'bosch-gex-125-1-ae',
    title: 'Bosch Professional GEX 125-1 AE',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Bosch GEX 125-1 AE',
  },
  'makita-bo5041': {
    slug: 'makita-bo5041',
    title: 'Makita BO5041',
    merchant: 'amazon-fr',
    market: 'fr',
    search: 'Makita BO5041',
  },
};

export function getAffiliateUrlFr(product: AffiliateProduct) {
  if (product.asin) {
    return `https://www.amazon.fr/dp/${product.asin}?tag=${amazonFrTag}`;
  }
  const query = encodeURIComponent(product.search ?? product.title);
  return `https://www.amazon.fr/s?k=${query}&tag=${amazonFrTag}`;
}


// TODO_ASIN: remplacer progressivement les liens de recherche par des ASIN exacts sur les pages FR les plus rentables.
