import { sources, rankingKeywords } from "../config/sources";
import { collectFromRss } from "./rss";
import { collectFromGithubReleases } from "./github";
import type { FeedItem, RankedItem, Source } from "../types";

export async function collectAll(customSources?: Source[]): Promise<FeedItem[]> {
  const srcs = customSources ?? sources;
  const results = await Promise.all(srcs.map((s) => collectOne(s)));
  return results.flat();
}

async function collectOne(s: Source): Promise<FeedItem[]> {
  if (s.type === "rss") return collectFromRss(s);
  if (s.type === "github-releases") return collectFromGithubReleases(s);
  return [];
}

export function rank(items: FeedItem[], keywords: string[] = rankingKeywords): RankedItem[] {
  const kws = keywords.map((k) => k.toLowerCase());
  return items.map((i) => {
    const text = (i.title + " " + (i.excerpt ?? "")).toLowerCase();
    const matched = kws.filter((k) => text.includes(k));
    const score = matched.length + (i.title.toLowerCase().includes("release") ? 1 : 0);
    return { ...i, score, keywordsMatched: matched };
  }).sort((a, b) => b.score - a.score);
}

export function dedupe(items: FeedItem[]): FeedItem[] {
  const seen = new Set<string>();
  const out: FeedItem[] = [];
  for (const it of items) {
    const key = it.url.split("?")[0].toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}
