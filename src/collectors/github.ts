import { withRetries } from "../utils/retry";
import type { FeedItem, Source } from "../types";
import { toIso } from "../utils/dates";

export async function collectFromGithubReleases(source: Source): Promise<FeedItem[]> {
  if (source.type !== "github-releases") return [];
  console.log(`Fetching GitHub releases for ${source.url}`, source);
  const url = source.url;
  return withRetries(async () => {
    const res = await fetch(url, {
      headers: {
        "Accept": "application/vnd.github+json",
        "User-Agent": "js-digest-bot",
      },
    });
    if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
    const json = (await res.json()) as any[];
    console.log(`Fetched ${json.length} releases from GitHub`);
    return json.map((rel) => ({
      id: stableId(`${source.id}:${rel.id}`),
      sourceId: source.id,
      title: rel.name || rel.tag_name || "Release",
      url: rel.html_url,
      date: toIso(rel.published_at || rel.created_at || new Date().toISOString()),
      author: rel.author?.login,
      excerpt: rel.body?.slice(0, 300),
    }));
  });
}

function stableId(input: string): string {
  const data = new TextEncoder().encode(input);
  const hash = Bun.hash.wyhash(data);
  return hash.toString(16);
}
