import Link from 'next/link';
const items = ['','learn','research','signals','tools','news','comments','settings'];
export function AdminSidebar() {
  return <aside className="glass h-fit p-4"><h2 className="mb-3 font-semibold text-blue-300">Admin</h2><div className="grid gap-2">{items.map(i => <Link key={i||'dashboard'} href={`/admin${i?`/${i}`:''}`} className="interactive rounded-xl px-3 py-2">{i||'dashboard'}</Link>)}</div></aside>;
}
