import { prisma } from '@/lib/db';
export default async function Page(){ const c = await prisma.toolItem.count(); return <div className='glass p-5'><h1 className='text-2xl font-bold text-blue-300'>Admin Tools</h1><p>Records: {c}</p></div>; }
