import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth/session';
import { applyRateLimit } from '@/lib/rate-limit';
const schema = z.object({ entityType: z.string(), entityId: z.string(), type: z.string() });
export async function POST(req: NextRequest){
  const ip=req.ip||'unknown'; if(!applyRateLimit(`react:${ip}`)) return NextResponse.json({error:'Too many requests'},{status:429});
  const body=schema.parse(await req.json()); const session=await getSession();
  const payload:any={...body,userId:(session?.user as any)?.id,sessionId:session?null:req.headers.get('x-session-id')||'anon'};
  try { await prisma.reaction.create({data:payload}); } catch { return NextResponse.json({ok:true,deduped:true}); }
  const count=await prisma.reaction.count({where:{entityType:body.entityType,entityId:body.entityId,type:body.type}});
  return NextResponse.json({ok:true,count});
}
