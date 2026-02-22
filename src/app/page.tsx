import Link from 'next/link';
import { prisma } from '@/lib/db';
const sections = [
  { name: 'Learn', href: '/learn', model: 'learnArticle' },
  { name: 'Research', href: '/research', model: 'researchTopic' },
  { name: 'Signals', href: '/signals', model: 'signal' },
  { name: 'News', href: '/news', model: 'newsSourceConfig' },
  { name: 'Tools', href: '/tools', model: 'toolItem' },
  { name: 'Calculator', href: '/calculator', model: null }
];
export default async function Home() {
  const counts = {
    learn: await prisma.learnArticle.count(), research: await prisma.researchTopic.count(), signals: await prisma.signal.count(), tools: await prisma.toolItem.count()
  };
  return <div className="space-y-6 animate-rise"><h1 className="text-3xl font-bold">Crypto Command Center</h1><div className="grid gap-4 md:grid-cols-2">{sections.map(s=><section key={s.name} className="glass p-5"><h2 className="text-xl font-semibold">{s.name}</h2><p className="text-zinc-300">Latest insights and actionable information.</p><p className="mt-2 text-sm text-zinc-400">Items: {counts[s.name.toLowerCase() as keyof typeof counts] ?? 'live'}</p><Link href={s.href} className="btn-primary mt-4 inline-block">View all</Link></section>)}</div></div>;
}
