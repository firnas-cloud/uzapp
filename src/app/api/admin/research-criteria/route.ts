import { NextRequest, NextResponse } from 'next/server';import { prisma } from '@/lib/db';import { requireAdmin } from '@/lib/auth/session';
export async function POST(req:NextRequest){await requireAdmin();const {name,order}=await req.json();const c=await prisma.researchRatingCriterion.create({data:{name,order}});return NextResponse.json(c)}
