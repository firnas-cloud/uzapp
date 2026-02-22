import { prisma } from '@/lib/db/prisma';
import { commentSchema } from '@/lib/validators';
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const payload = commentSchema.parse(await req.json());
  const comment = await prisma.comment.create({ data: { ...payload, status: 'PENDING' } });
  return NextResponse.json(comment);
}
