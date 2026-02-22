import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import { ReactionRow } from '@/components/shared/reaction-row';
export default async function LearnDetail({params}:{params:{slug:string}}){
 const article=await prisma.learnArticle.findUnique({where:{slug:params.slug}}); if(!article) return notFound();
 const comments=await prisma.comment.findMany({where:{entityType:'learnArticle',entityId:article.id,status:'APPROVED'}});
 return <article className='glass p-6'><h1 className='text-3xl font-bold'>{article.title}</h1><div className='prose prose-invert mt-4' dangerouslySetInnerHTML={{__html:article.contentRich}}/><ReactionRow entityType='learnArticle' entityId={article.id}/><h2 className='mt-6 text-lg font-semibold'>Comments</h2>{comments.map(c=><p key={c.id} className='mt-2 rounded-xl bg-white/5 p-2'>{c.content}</p>)}</article>
}
