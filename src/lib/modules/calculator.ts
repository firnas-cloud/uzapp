export function computePnL(entry:number, exit:number, size:number, leverage=1, feePct=0){
  const gross = (exit-entry)*size*leverage;
  const fees = ((entry+exit)/2)*size*(feePct/100);
  const pnl = gross-fees;
  const pnlPct = entry ? ((exit-entry)/entry)*100*leverage - feePct : 0;
  const roi = size ? (pnl/(entry*size))*100 : 0;
  return { pnl, pnlPct, roi, highLeverage: leverage>=10 };
}
