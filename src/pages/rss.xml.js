import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET(context) {
  const entries = await getCollection('fr', ({ data }) => !data.draft);
  return rss({
    title: site.name,
    description: site.description.fr,
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/${entry.data.category}/${entry.id.split('/').pop()}/`,
    })),
  });
}
