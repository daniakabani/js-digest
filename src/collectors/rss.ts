import Parser from 'rss-parser';
import { withRetries } from '../utils/retry';
import type { FeedItem, Source } from '../types';
import { toIso } from '../utils/dates';

const parser = new Parser({ timeout: 10000 });

export async function collectFromRss(source: Source): Promise<FeedItem[]> {
  if (source.type !== 'rss') return [];
  return withRetries(
    async () => {
      const feed = await parser.parseURL(source.url);
      const items: FeedItem[] = (feed.items || []).map((it) => ({
        id: stableId(`${source.id}:${it.link || it.guid || it.title}`),
        sourceId: source.id,
        title: it.title || '(untitled)',
        url: it.link || '',
        date: toIso(it.isoDate || it.pubDate || new Date().toISOString()),
        author: it?.author?.name?.join('') || it.creator || it.author || feed.title || undefined,
        excerpt: it.contentSnippet || it.content || undefined,
      }));
      return items.filter((i) => !!i.url);
    },
    { retries: 3, baseDelayMs: 500, factor: 2 },
  );
}

function stableId(input: string): string {
  const data = new TextEncoder().encode(input);
  const hash = Bun.hash.wyhash(data);
  return hash.toString(16);
}
