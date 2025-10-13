export type SourceType = "rss" | "github-releases";

export interface Source {
  id: string;
  type: SourceType;
  url: string;
  title?: string;
}

export interface FeedItem {
  id: string; // stable hash
  sourceId: string;
  title: string;
  url: string;
  date: string; // ISO
  author?: string;
  excerpt?: string;
}

export interface RankedItem extends FeedItem {
  score: number;
  keywordsMatched: string[];
}

export interface ProcessedItem extends RankedItem {
  summary: string;
  highlights: string[];
  tags: string[];
  draftTitle: string;
  draftContent: string; // Markdown body (no frontmatter)
}

export interface DraftRecord {
  id: number;
  itemId: string;
  slug: string;
  title: string;
  path: string; // relative path to markdown
  date: string; // ISO
  approved: number; // 0/1
  publishedMedium: number; // 0/1
  publishedLinkedIn: number; // 0/1
}
