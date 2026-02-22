import { prisma } from '@/lib/db';
export default async function Admin(){const [users,comments,signals]=await Promise.all([prisma.user.count(),prisma.comment.count(),prisma.signal.count()]);
return <div className='grid gap-4 md:grid-cols-3'>{[{k:'Users',v:users},{k:'Comments',v:comments},{k:'Signals',v:signals}].map(i=><div key={i.k} className='glass p-5'><p className='text-zinc-400'>{i.k}</p><p className='text-3xl font-bold text-blue-300'>{i.v}</p></div>)}</div>}
