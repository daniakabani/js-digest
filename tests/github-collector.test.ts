import { describe, expect, it, mock, afterAll } from "bun:test";
import { collectFromGithubReleases } from "../src/collectors/github";

const sample = [
  { id: 1, name: "v1.0.0", tag_name: "v1.0.0", html_url: "https://github.com/org/repo/releases/1", published_at: "2024-01-01T00:00:00Z", author: { login: "bot" }, body: "Init" },
  { id: 2, name: "v1.1.0", tag_name: "v1.1.0", html_url: "https://github.com/org/repo/releases/2", published_at: "2024-02-01T00:00:00Z", author: { login: "bot" }, body: "Update" },
];

describe("github releases collector", () => {
  const origFetch = globalThis.fetch;
  const mocked = mock(async (input: RequestInfo, init?: RequestInit) => {
    return new Response(JSON.stringify(sample), { status: 200, headers: { "content-type": "application/json" } });
  });

  it("parses releases into feed items", async () => {
    // @ts-ignore
    globalThis.fetch = mocked;
    const items = await collectFromGithubReleases({ id: "x", type: "github-releases", url: "https://api.github.com/repos/x/y/releases" });
    expect(items.length).toBe(2);
    expect(items[0].url).toContain("github.com");
  });

  afterAll(() => {
    // @ts-ignore
    globalThis.fetch = origFetch;
  });
});
