export async function withRetries<T>(fn: () => Promise<T>, opts?: { retries?: number; baseDelayMs?: number; factor?: number }): Promise<T> {
  const retries = opts?.retries ?? 3;
  const base = opts?.baseDelayMs ?? 400;
  const factor = opts?.factor ?? 2;
  let attempt = 0;
  let lastErr: unknown;
  while (attempt <= retries) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (attempt === retries) break;
      const delay = base * Math.pow(factor, attempt);
      await new Promise((r) => setTimeout(r, delay));
      attempt++;
    }
  }
  throw lastErr;
}
