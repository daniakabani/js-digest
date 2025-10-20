import { describe, expect, it } from 'bun:test';
import { MockLLM } from '../src/llm/provider';
import { RankedItem } from '../src/types';

describe('MockLLM', () => {
  it('produces processed items with required fields', async () => {
    const mock = new MockLLM();
    const items: RankedItem[] = [
      {
        id: '1',
        sourceId: 's',
        title: 'React 19 RC',
        url: 'https://react.dev',
        date: new Date().toISOString(),
        score: 3,
        keywordsMatched: ['react'],
      },
    ];
    const out = await mock.summarizeAndDraft(items);
    expect(out.length).toBe(1);
    const first = out[0];
    expect(first.summary.length).toBeGreaterThan(0);
    expect(first.highlights.length).toBe(2);
    expect(first.draftContent).toContain('# React 19 RC');
  });
});
