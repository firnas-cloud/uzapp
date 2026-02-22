'use client';
import { useMemo, useState } from 'react';
import { computePnL } from '@/lib/modules/calculator';
export default function Calc(){const [v,set]=useState({entry:100,exit:110,size:1,lev:1,fee:0.1});const out=useMemo(()=>computePnL(v.entry,v.exit,v.size,v.lev,v.fee),[v]);
const on=(k:string,val:string)=>set(s=>({...s,[k]:Number(val)}));
return <div className='glass max-w-xl p-6'><h1 className='text-3xl font-bold'>Calculator</h1>{[['entry','Entry'],['exit','Exit'],['size','Position size'],['lev','Leverage'],['fee','Fee %']].map(([k,l])=><label key={k} className='mt-3 block'><span>{l}</span><input className='input mt-1' type='number' value={(v as any)[k]} onChange={e=>on(k,e.target.value)} /></label>)}<div className='mt-4 space-y-1'><p>P/L amount: {out.pnl.toFixed(2)}</p><p>P/L %: {out.pnlPct.toFixed(2)}%</p><p>ROI: {out.roi.toFixed(2)}%</p>{out.highLeverage&&<p className='text-orange-300'>Warning: high leverage risk.</p>}</div></div>}
