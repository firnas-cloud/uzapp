import Link from 'next/link';
import { prisma } from '@/lib/db';
import { StickyControls } from '@/components/shared/sticky-controls';
export default async function LearnPage(){
  const [videos, articles]= await Promise.all([prisma.learnVideo.findMany({where:{published:true},take:6,orderBy:{createdAt:'desc'}}),prisma.learnArticle.findMany({where:{published:true},take:6,orderBy:{createdAt:'desc'}})]);
  return <div className="space-y-4 animate-rise"><h1 className="text-3xl font-bold">Learn</h1><StickyControls />
  <div className="grid gap-4 md:grid-cols-2">{videos.map(v=><div key={v.id} className="glass p-4"><h3>{v.title}</h3><iframe className="mt-2 aspect-video w-full rounded-xl" src={v.youtubeUrl.replace('watch?v=','embed/')} title={v.title} /></div>)}</div>
  <div className="grid gap-4 md:grid-cols-2">{articles.map(a=><Link key={a.id} href={`/learn/${a.slug}`} className="glass block p-4"><h3 className="font-semibold">{a.title}</h3><div className="text-sm text-zinc-300" dangerouslySetInnerHTML={{__html:a.contentRich.slice(0,140)}}/></Link>)}</div></div>
}
