import type { RankedItem, ProcessedItem } from "../types";

export interface LLMProvider {
  summarizeAndDraft(items: RankedItem[]): Promise<ProcessedItem[]>;
}

export class MockLLM implements LLMProvider {
  async summarizeAndDraft(items: RankedItem[]): Promise<ProcessedItem[]> {
    return items.map((i) => ({
      ...i,
      summary: `Summary: ${i.title}`,
      highlights: ["Key point 1", "Key point 2"],
      tags: i.keywordsMatched.slice(0, 5),
      draftTitle: i.title,
      draftContent: `# ${i.title}\n\n- Source: ${i.url}\n- Date: ${i.date}\n\n${i.excerpt || "No excerpt available."}`,
    }));
  }
}

export class OpenAIProvider implements LLMProvider {
  private client: any;
  private model: string;
  private systemPrompt: string;

  constructor(opts?: { apiKey?: string; model?: string; systemPrompt?: string }) {
    const apiKey = opts?.apiKey || process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("OPENAI_API_KEY is required");
    this.model = opts?.model || process.env.OPENAI_MODEL || "gpt-4o-mini";
    // lazy import to avoid dependency if mocked
    const { OpenAI } = require("openai");
    this.client = new OpenAI({ apiKey });
    this.systemPrompt = opts?.systemPrompt || "You are a helpful assistant that writes concise developer news summaries.";
  }

  async summarizeAndDraft(items: RankedItem[]): Promise<ProcessedItem[]> {
    const prompt = buildPrompt(items);
    const res = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: "system", content: this.systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.5,
    });
    const content: string = res.choices?.[0]?.message?.content || "";
    return parseLLMOutput(items, content);
  }
}

function buildPrompt(items: RankedItem[]): string {
  const instructions = `Summarize each item with:\n- summary (1-2 sentences)\n- 2 bullet highlights\n- 3-6 tags\n- suggest a short draft title\nThen draft a short markdown article body per item.\nOutput as JSON array with fields: summary, highlights, tags, draftTitle, draftContent`;
  const list = items.map((i) => ({ title: i.title, url: i.url, date: i.date, excerpt: i.excerpt })).slice(0, 10);
  return `${instructions}\n\nItems:\n${JSON.stringify(list, null, 2)}`;
}

function parseLLMOutput(items: RankedItem[], content: string): ProcessedItem[] {
  try {
    const arr = JSON.parse(content);
    if (Array.isArray(arr)) {
      return arr.map((obj, idx) => ({
        ...items[idx],
        summary: obj.summary ?? "",
        highlights: obj.highlights ?? [],
        tags: obj.tags ?? [],
        draftTitle: obj.draftTitle ?? items[idx].title,
        draftContent: obj.draftContent ?? items[idx].excerpt ?? items[idx].title,
      }));
    }
  } catch (e) {
    // fall back to mockish
  }
  return new MockLLM().summarizeAndDraft(items);
}
