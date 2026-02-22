'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = ['learn','research','signals','news','tools','calculator'];
export function Navbar() {
  const p = usePathname();
  return <nav className="glass sticky top-4 z-30 mx-auto mt-4 flex max-w-6xl items-center justify-between px-4 py-3">
    <Link href="/" className="font-bold">UZAPP</Link>
    <div className="flex gap-2 text-sm">{links.map(l => <Link key={l} className={`rounded-xl px-3 py-1 ${p?.startsWith('/'+l)?'bg-blue-600/30 text-blue-200':'text-zinc-300 hover:bg-white/10'}`} href={`/${l}`}>{l[0].toUpperCase()+l.slice(1)}</Link>)}</div>
  </nav>;
}
