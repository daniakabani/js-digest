import { describe, expect, it } from "bun:test";
import { dedupe, rank } from "../src/collectors";
import { FeedItem } from "../src/types";

describe("dedupe", () => {
  it("removes duplicate URLs regardless of query params", () => {
    const items: FeedItem[] = [
      { id: "1", sourceId: "s", title: "A", url: "https://x.dev/post?id=1", date: new Date().toISOString() },
      { id: "2", sourceId: "s", title: "B", url: "https://x.dev/post?id=1&utm=a", date: new Date().toISOString() },
      { id: "3", sourceId: "s", title: "C", url: "https://x.dev/other", date: new Date().toISOString() },
    ];
    const out = dedupe(items);
    expect(out.length).toBe(2);
    expect(out.some((i) => i.url.startsWith("https://x.dev/post"))).toBeTrue();
    expect(out.some((i) => i.url === "https://x.dev/other")).toBeTrue();
  });
});

describe("rank", () => {
  it("boosts items matching keywords and 'release' in title", () => {
    const items: FeedItem[] = [
      { id: "1", sourceId: "s", title: "TypeScript 6.0 Release", url: "https://ts.dev", date: new Date().toISOString(), excerpt: "TypeScript" },
      { id: "2", sourceId: "s", title: "Random news", url: "https://x.dev", date: new Date().toISOString() },
    ];
    const out = rank(items, ["typescript"]);
    expect(out[0].id).toBe("1");
    expect(out[0].score).toBeGreaterThan(out[1].score);
  });
});
