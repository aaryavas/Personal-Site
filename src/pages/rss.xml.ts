import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: 'Aarya Vasantlal',
    description: 'Essays on AI research, agents, and building things.',
    site: context.site!,
    items: posts
      .sort((a, b) => {
        const da = a.data.date.replace(/·/g, '-');
        const db = b.data.date.replace(/·/g, '-');
        return new Date(db).getTime() - new Date(da).getTime();
      })
      .map(post => ({
        title: post.data.title,
        description: post.data.dek,
        pubDate: new Date(post.data.date.replace(/·/g, '-')),
        link: `/blog/${post.slug}/`,
      })),
  });
}
