import { DraftRecord } from '../types';
import { readFileSync } from 'fs';
import { logger } from '../utils/logger';

export async function publishToLinkedIn(d: DraftRecord) {
  if (process.env.PUBLISH !== 'true') {
    logger.warn('PUBLISH not true, skipping LinkedIn publish');
    return;
  }
  const token = process.env.LINKEDIN_TOKEN;
  const orgId = process.env.LINKEDIN_ORGANIZATION_ID;
  if (!token) {
    logger.warn('Missing LinkedIn token, skipping');
    return;
  }
  const content = readFileSync(d.path, 'utf8');
  logger.info(`[DRY-RUN] Would publish to LinkedIn${orgId ? ' org ' + orgId : ''}: ${d.title}`);
  // Real implementation would call LinkedIn UGC API with Bearer token
}
