'use client';
import { useState } from 'react';
import { toast } from 'sonner';
const types=['🔥','🚀','👍'];
export function ReactionRow({ entityType, entityId, initial }: { entityType: string; entityId: string; initial?: Record<string, number> }) {
  const [counts, setCounts] = useState(initial || {}); const [busy, setBusy] = useState(false);
  return <div className="flex gap-2">{types.map(t => <button key={t} disabled={busy} title={`React ${t}`} className="btn bg-white/5 hover:shadow-glow" onClick={async()=>{if(busy)return;setBusy(true);setCounts(c=>({...c,[t]:(c[t]||0)+1}));setTimeout(()=>setBusy(false),350);const r=await fetch('/api/reactions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({entityType,entityId,type:t})});if(!r.ok){setCounts(c=>({...c,[t]:Math.max((c[t]||1)-1,0)}));toast.error('Failed to react');}}}>{t} <span className="inline-block transition">{counts[t]||0}</span></button>)}</div>;
}
