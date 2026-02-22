const bucket = new Map<string, { count: number; resetAt: number }>();
export function applyRateLimit(key: string, max = 12, windowMs = 60_000) {
  const now = Date.now();
  const found = bucket.get(key);
  if (!found || found.resetAt < now) { bucket.set(key, { count: 1, resetAt: now + windowMs }); return true; }
  if (found.count >= max) return false;
  found.count += 1;
  return true;
}
