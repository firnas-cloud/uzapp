export function StickyControls() {
  return <div className="glass sticky top-20 z-20 mb-4 flex flex-wrap gap-2 p-3 text-sm">
    <input placeholder="Search" className="interactive rounded-full bg-zinc-900/80 px-3 py-1 outline-none focus:ring-1 focus:ring-blue-400" />
    <select className="rounded-full bg-zinc-900/80 px-3 py-1"><option>Newest</option><option>Popular</option></select>
    <button className="rounded-full bg-zinc-800 px-3 py-1">Published</button>
    <button className="rounded-full bg-zinc-800 px-3 py-1">Pinned</button>
  </div>;
}
