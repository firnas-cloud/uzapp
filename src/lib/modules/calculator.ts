export type CalcInput = { entry: number; exit: number; size: number; leverage?: number; feePct?: number };
export function calculatePnL({ entry, exit, size, leverage = 1, feePct = 0 }: CalcInput) {
  const changePct = ((exit - entry) / entry) * 100;
  const gross = (size * changePct) / 100 * leverage;
  const fee = size * leverage * (feePct / 100);
  const pnl = gross - fee;
  const roi = (pnl / size) * 100;
  return { pnl, changePct, roi, warning: leverage >= 10 ? 'High leverage increases liquidation risk.' : '' };
}
