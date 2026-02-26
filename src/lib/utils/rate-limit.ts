const mem = new Map<string, { c: number; t: number }>();
export function rateLimit(key: string, max = 12, windowMs = 60_000) {
  const now = Date.now();
  const v = mem.get(key);
  if (!v || now - v.t > windowMs) { mem.set(key, { c: 1, t: now }); return true; }
  if (v.c >= max) return false;
  v.c += 1; return true;
}
