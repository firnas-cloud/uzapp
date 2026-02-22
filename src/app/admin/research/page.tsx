import Link from 'next/link';import { prisma } from '@/lib/db';
export default async function Page(){const items=await prisma.researchTopic.findMany();return <div className='space-y-3'><h1 className='text-2xl font-bold text-blue-300'>Manage Research</h1>{items.map(i=><Link key={i.id} className='glass block p-3' href={`/admin/research/${i.id}`}>{i.title}</Link>)}</div>}
