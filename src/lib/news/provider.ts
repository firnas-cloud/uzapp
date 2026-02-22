export type NewsItem = { id: string; title: string; url: string; summary: string; source: string; publishedAt: string };
export async function fetchNews(provider: string, categories: string[]): Promise<NewsItem[]> {
  if (provider === 'mock' || !process.env.NEWS_API_KEY) {
    return categories.slice(0, 5).map((c, i) => ({ id: `${c}-${i}`, title: `${c.toUpperCase()} pulse #${i + 1}`, url: '#', summary: 'Mock headline for local dev.', source: 'LocalMock', publishedAt: new Date().toISOString() }));
  }
  return [{ id: 'fallback', title: 'Provider adapter connected', url: '#', summary: 'Implement provider-specific calls in lib/news/provider.ts', source: provider, publishedAt: new Date().toISOString() }];
}
