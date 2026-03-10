import { getCollection } from 'astro:content';

export async function getPublishedArticles(language: 'fr' | 'en') {
  const entries = await getCollection(language, ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getFeaturedArticles(language: 'fr' | 'en') {
  const entries = await getPublishedArticles(language);
  return entries.filter((entry) => entry.data.featured);
}

export async function getArticlesByCategory(language: 'fr' | 'en', category: string) {
  const entries = await getPublishedArticles(language);
  return entries.filter((entry) => entry.data.category === category);
}

export function entrySlug(id: string) {
  return id.split('/').pop() ?? id;
}
