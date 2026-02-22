import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';import { prisma } from '@/lib/db';import { getSession } from '@/lib/auth/session';import { applyRateLimit } from '@/lib/rate-limit';
const schema=z.object({entityType:z.string(),entityId:z.string(),content:z.string().min(2)});
export async function POST(req:NextRequest){ if(!applyRateLimit('comment:'+ (req.ip||'unknown'),8)) return NextResponse.json({error:'Too many requests'},{status:429});const body=schema.parse(await req.json());const session=await getSession();const created=await prisma.comment.create({data:{...body,userId:(session?.user as any)?.id,status:'PENDING'}});return NextResponse.json(created); }
