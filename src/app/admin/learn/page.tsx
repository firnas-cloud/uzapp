import { prisma } from '@/lib/db';
export default async function Page(){const [v,a]=await Promise.all([prisma.learnVideo.findMany(),prisma.learnArticle.findMany()]);return <div className='space-y-4'><h1 className='text-2xl font-bold text-blue-300'>Manage Learn</h1><div className='glass p-4'><p>Videos: {v.length}</p><p>Articles: {a.length}</p></div></div>}
