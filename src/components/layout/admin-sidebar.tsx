'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = ['','learn','research','signals','tools','news','comments','settings'];
export function AdminSidebar(){const p=usePathname();return <aside className="glass h-fit p-4"><h2 className="mb-3 font-semibold text-blue-300">Admin</h2><div className="space-y-2">{links.map(l=>{const href='/admin'+(l?'/'+l:'');return <Link key={href} href={href} className={`block rounded-xl px-3 py-2 ${p===href?'bg-blue-600/30':'hover:bg-white/10'}`}>{l||'dashboard'}</Link>})}</div></aside>}
