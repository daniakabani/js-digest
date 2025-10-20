import { collectAll, dedupe, rank } from '../collectors';
import { type LLMProvider, MockLLM, OpenAIProvider } from '../llm/provider';
import { Storage } from '../storage/db';
import type { ProcessedItem, RankedItem } from '../types';
import { writeDraftMarkdown } from '../drafts/writer';
import { today } from '../utils/dates';

export async function collectAndStore(storage: Storage): Promise<RankedItem[]> {
  const raw = await collectAll();
  const unique = dedupe(raw);
  storage.saveItems(unique);
  return rank(unique);
}

export async function processTopN(
  storage: Storage,
  topN = 5,
): Promise<{ processed: ProcessedItem[] }> {
  const items = storage.listItems();
  const ranked = rank(dedupe(items)).slice(0, topN);
  const provider: LLMProvider =
    process.env.LLM_MOCK === 'true' || !process.env.OPENAI_API_KEY
      ? new MockLLM()
      : new OpenAIProvider();
  const processed = await provider.summarizeAndDraft(ranked);
  const dateStr = today();
  for (const p of processed) {
    const w = writeDraftMarkdown(p, dateStr);
    storage.createDraft({
      itemId: p.id,
      slug: w.slug,
      title: w.title,
      path: w.path,
      date: dateStr,
      approved: 0,
      publishedMedium: 0,
      publishedLinkedIn: 0,
    });
  }
  return { processed };
}
