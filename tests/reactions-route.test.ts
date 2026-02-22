import { describe, it, expect } from 'vitest';
import { applyRateLimit } from '../src/lib/rate-limit';
describe('rate limit',()=>{it('limits after threshold',()=>{const k='t';for(let i=0;i<12;i++) expect(applyRateLimit(k,12,10000)).toBe(true);expect(applyRateLimit(k,12,10000)).toBe(false);});});
