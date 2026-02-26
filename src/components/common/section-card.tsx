import { ReactNode } from 'react';
export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return <section className="glass animate-fadeUp p-5"><h2 className="mb-3 text-xl font-bold">{title}</h2>{children}</section>;
}
