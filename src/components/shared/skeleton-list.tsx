export function SkeletonList(){return <div className="space-y-3">{Array.from({length:4}).map((_,i)=><div key={i} className="skeleton h-24 rounded-2xl" />)}</div>}
