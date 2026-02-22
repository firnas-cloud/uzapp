import { prisma } from '@/lib/db';
export default async function Page(){ const c = await prisma.comment.count({where:{status:'PENDING'}}); return <div className='glass p-5'><h1 className='text-2xl font-bold text-blue-300'>Admin Comments</h1><p>Pending: {c}</p></div>; }
