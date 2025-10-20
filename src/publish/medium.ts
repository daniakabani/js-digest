import { DraftRecord } from '../types';
import { readFileSync } from 'fs';
import { logger } from '../utils/logger';

export async function publishToMedium(d: DraftRecord) {
  if (process.env.PUBLISH !== 'true') {
    logger.warn('PUBLISH not true, skipping Medium publish');
    return;
  }
  const token = process.env.MEDIUM_TOKEN;
  const userId = process.env.MEDIUM_USER_ID;
  if (!token || !userId) {
    logger.warn('Missing Medium credentials, skipping');
    return;
  }
  const content = readFileSync(d.path, 'utf8');
  // Minimal placeholder: do not actually publish in scaffold; show intent.
  logger.info(`[DRY-RUN] Would publish to Medium as user ${userId}: ${d.title}`);
  // To implement real call: POST https://api.medium.com/v1/users/{userId}/posts with Bearer token
}
