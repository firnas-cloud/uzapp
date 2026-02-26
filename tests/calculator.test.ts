import { describe, it, expect } from 'vitest';
import { calculatePnL } from '@/lib/modules/calculator';
describe('calculatePnL', () => {
  it('computes pnl and roi', () => {
    const out = calculatePnL({ entry: 100, exit: 110, size: 1000, leverage: 2, feePct: 0.1 });
    expect(out.pnl).toBeCloseTo(198);
    expect(out.roi).toBeCloseTo(19.8);
  });
});
