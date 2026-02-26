import { StickyControls } from '@/components/common/sticky-controls';
import { SectionCard } from '@/components/common/section-card';
export default function Page(){
  return <div><StickyControls /><div className="grid gap-4">{[1,2,3].map(i=><SectionCard key={i} title={`learn item ${i}`}><p>Preview content with glassmorphism, quick actions, reactions/comments as applicable.</p></SectionCard>)}</div></div>
}
