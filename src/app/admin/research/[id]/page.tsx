export default async function ResearchEdit({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <div className="glass p-5">Edit research topic {id}</div>; }
