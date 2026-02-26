export default async function ToolDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div className="glass grid gap-3 p-5"><h1 className="text-2xl font-bold">{slug}</h1><ul className="list-disc pl-5"><li>External Link A</li></ul><img src="https://placehold.co/600x300" alt="tool" className="rounded-2xl"/><article>Tool article details and server-side API integration output area.</article></div>;
}
