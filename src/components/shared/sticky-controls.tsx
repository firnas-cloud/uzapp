export function StickyControls() {
  return <div className="glass sticky top-20 z-20 mb-4 flex flex-wrap gap-2 p-3 text-sm">
    <input className="input max-w-xs" placeholder="Search" />
    <select className="input max-w-[150px]"><option>Newest</option><option>Popular</option></select>
    <button className="btn">Published</button><button className="btn">Pinned</button>
  </div>;
}
