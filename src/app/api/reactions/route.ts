import { prisma } from '@/lib/db/prisma';
import { reactionSchema } from '@/lib/validators';
import { rateLimit } from '@/lib/utils/rate-limit';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  if (!rateLimit(req.headers.get('x-forwarded-for') ?? 'local')) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  const payload = reactionSchema.parse(await req.json());
  try {
    const reaction = await prisma.reaction.create({ data: payload });
    return NextResponse.json(reaction);
  } catch { return NextResponse.json({ error: 'Duplicate reaction' }, { status: 409 }); }
}
