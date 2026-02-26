import { fetchNews } from '@/lib/news/provider';
import { NextResponse } from 'next/server';
export async function GET(){ return NextResponse.json(await fetchNews()); }
