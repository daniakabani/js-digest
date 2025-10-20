import { existsSync, mkdirSync, writeFileSync } from 'fs';
import type { ProcessedItem } from '../types';
import { today } from '../utils/dates';
import { slugify } from '../utils/slug';

export interface WriteDraftResult {
  path: string; // relative path
  slug: string;
  title: string;
}

export function writeDraftMarkdown(item: ProcessedItem, dateStr = today()): WriteDraftResult {
  const dir = `./data/drafts/${dateStr}`;
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const slug = slugify(item.draftTitle || item.title);
  const filename = `${dir}/${slug}.md`;
  const frontmatter =
    `---\n` +
    `title: ${escapeYaml(item.draftTitle || item.title)}\n` +
    `date: ${dateStr}\n` +
    `sources:\n  - ${item.url}\n` +
    `status: draft\n` +
    `tags: [${item.tags.join(', ')}]\n` +
    `---\n\n`;
  const content = `${frontmatter}${item.draftContent}\n`;
  writeFileSync(filename, content, 'utf8');
  return { path: filename.replace(/^\.\//, ''), slug, title: item.draftTitle || item.title };
}

function escapeYaml(s: string): string {
  if (/[:\-\[\]{}#,\n]/.test(s)) return JSON.stringify(s);
  return s;
}
