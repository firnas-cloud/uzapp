import Link from 'next/link';
import { SectionCard } from '@/components/common/section-card';
const modules = ['Learn','Research','Signals','News','Tools','Calculator'];
export default function HomePage() {
  return <div className="grid gap-4">{modules.map(m => <SectionCard key={m} title={m}><p className="mb-3 text-zinc-300">Latest {m.toLowerCase()} content preview.</p><Link href={`/${m.toLowerCase()}`} className="interactive inline-block rounded-full bg-blue-600 px-4 py-2">View all</Link></SectionCard>)}</div>;
}
