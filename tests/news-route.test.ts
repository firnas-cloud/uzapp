import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/news/route';
describe('news route', () => {
  it('returns array', async () => {
    const res = await GET();
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
  });
});
