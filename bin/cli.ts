#!/usr/bin/env bun
import { Storage } from '../src/storage/db';
import { collectAndStore, processTopN } from '../src/process/pipeline';
import { logger } from '../src/utils/logger';

async function main() {
  const [, , cmd, ...args] = process.argv;
  const storage = new Storage();

  switch (cmd) {
    case 'collect': {
      const ranked = await collectAndStore(storage);
      logger.info(`Collected ${ranked.length} items.`);
      break;
    }
    case 'process': {
      const topN = parseInt(getFlag(args, '--top', '5'), 10);
      const { processed } = await processTopN(storage, topN);
      logger.info(`Processed ${processed.length} items into drafts.`);
      break;
    }
    case 'run-once': {
      const ranked = await collectAndStore(storage);
      logger.info(`Collected ${ranked.length} items.`);
      const { processed } = await processTopN(storage, 5);
      logger.info(`Processed ${processed.length} items into drafts.`);
      break;
    }
    case 'list-drafts': {
      const drafts = storage.listDrafts();
      for (const d of drafts) {
        console.log(`#${d.id} ${d.approved ? '[APPROVED]' : '[DRAFT]'} ${d.title} -> ${d.path}`);
      }
      break;
    }
    case 'preview-draft': {
      const id = parseInt(args[0], 10);
      const d = storage.getDraft(id);
      if (!d) {
        console.error('Draft not found');
        process.exit(1);
      }
      console.log(JSON.stringify(d, null, 2));
      break;
    }
    case 'approve': {
      const id = parseInt(args[0], 10);
      storage.approveDraft(id);
      logger.info(`Approved draft #${id}`);
      break;
    }
    case 'publish': {
      const id = parseInt(args[0], 10);
      const to = getFlag(args, '--to', '');
      await publish(storage, id, to);
      break;
    }
    case 'preview': {
      const port = parseInt(process.env.PREVIEW_PORT || '3099', 10);
      await import('../src/server/preview').then(({ serve }) => serve(port));
      break;
    }
    default: {
      console.log(
        `Usage: bun run bin/cli.ts <command>\n` +
          `Commands:\n` +
          `  collect\n  process\n  run-once\n  list-drafts\n  preview-draft <id>\n  approve <id>\n  publish <id> --to=medium,linkedin\n  preview`,
      );
    }
  }
}

function getFlag(args: string[], name: string, def: string): string {
  const found = args.find((a) => a.startsWith(name + '='));
  if (!found) return def;
  return found.split('=')[1] ?? def;
}

async function publish(storage: Storage, id: number, to: string) {
  const d = storage.getDraft(id);
  if (!d) throw new Error('Draft not found');
  if (!d.approved) throw new Error('Draft not approved');
  if (process.env.PUBLISH !== 'true') {
    logger.warn('PUBLISH flag is not true; skipping publishing');
    return;
  }
  const targets = to
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  for (const t of targets) {
    if (t === 'medium') {
      await import('../src/publish/medium').then(({ publishToMedium }) => publishToMedium(d));
      storage.markPublished(d.id, 'medium');
    } else if (t === 'linkedin') {
      await import('../src/publish/linkedin').then(({ publishToLinkedIn }) => publishToLinkedIn(d));
      storage.markPublished(d.id, 'linkedin');
    } else {
      logger.warn('Unknown publish target:', t);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
