import { SectionCard } from '@/components/common/section-card';
export default async function ResearchDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div className="grid gap-4"><SectionCard title={slug}><img src="https://placehold.co/200x120" alt="logo" className="rounded-2xl"/><h2 className="text-2xl font-extrabold">PROJECT ALPHA</h2><article className="prose prose-invert">Long form research article rich text.</article><div className="glass p-3">Security: 8/10 • Team: 7/10 • Tokenomics: 6/10</div></SectionCard></div>;
}
