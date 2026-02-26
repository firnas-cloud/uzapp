export type NewsItem = { title: string; url: string; source: string };
export async function fetchNews(): Promise<NewsItem[]> {
  if (!process.env.NEWS_API_URL) return [{ title: 'BTC ETF Flows Rise', url: '#', source: 'mock' }];
  const res = await fetch(process.env.NEWS_API_URL, { cache: 'no-store' });
  const data = await res.json();
  return (data.articles ?? []).slice(0, 20).map((a: any) => ({ title: a.title, url: a.url, source: a.source?.name ?? 'provider' }));
}
