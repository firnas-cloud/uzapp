import Link from 'next/link';
const links = ['learn','research','signals','news','tools','calculator'];
export function Navbar() {
  return <nav className="glass sticky top-2 z-30 mx-auto mb-6 flex max-w-6xl items-center justify-between px-4 py-3">
    <Link href="/" className="font-bold text-blue-400">UZAPP</Link>
    <div className="flex gap-3 text-sm">{links.map(l => <Link key={l} href={`/${l}`} className="interactive rounded-full px-3 py-1 capitalize hover:text-blue-300">{l}</Link>)}</div>
  </nav>;
}
