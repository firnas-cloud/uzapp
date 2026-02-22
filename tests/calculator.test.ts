import { describe, it, expect } from 'vitest';
import { computePnL } from '../src/lib/modules/calculator';
describe('computePnL',()=>{
  it('calculates pnl and warns on leverage',()=>{
    const r=computePnL(100,120,2,10,0.1);
    expect(r.pnl).toBeGreaterThan(0);
    expect(r.highLeverage).toBe(true);
  });
});
