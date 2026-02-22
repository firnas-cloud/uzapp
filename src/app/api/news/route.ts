import { NextResponse } from 'next/server';import { prisma } from '@/lib/db';import { fetchNews } from '@/lib/news/provider';
export async function GET(){const config=await prisma.newsSourceConfig.findFirst();const items=await fetchNews(config?.provider||'mock',(config?.categoriesJson as string[])||['defi']);return NextResponse.json(items)}
