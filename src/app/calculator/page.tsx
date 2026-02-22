'use client';
import { useMemo, useState } from 'react';
import { calculatePnL } from '@/lib/modules/calculator';
export default function CalculatorPage() {
  const [entry, setEntry] = useState(100); const [exit, setExit] = useState(110); const [size, setSize] = useState(1000); const [lev, setLev] = useState(1); const [fee, setFee] = useState(0.1);
  const out = useMemo(() => calculatePnL({ entry, exit, size, leverage: lev, feePct: fee }), [entry, exit, size, lev, fee]);
  return <div className="glass grid gap-3 p-5"><h1 className="text-2xl font-bold">P/L Calculator</h1>{[['Entry',entry,setEntry],['Exit',exit,setExit],['Position',size,setSize],['Leverage',lev,setLev],['Fee %',fee,setFee]].map(([l,v,s]: any)=><label key={l as string} className="grid gap-1"><span>{l}</span><input type="number" value={v} onChange={e=>s(Number(e.target.value))} className="rounded-xl bg-zinc-900 p-2"/></label>)}<p>P/L: {out.pnl.toFixed(2)}</p><p>P/L %: {out.changePct.toFixed(2)}%</p><p>ROI: {out.roi.toFixed(2)}%</p>{out.warning && <p className="text-orange-400">{out.warning}</p>}</div>;
}
