import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'UZAPP Crypto Platform', description: 'Learn, research, signals, tools, and news' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className="relative overflow-x-hidden">
    <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center"><div className="h-[70vmin] w-[70vmin] rounded-full bg-[url('https://cryptologos.cc/logos/ethereum-eth-logo.png')] bg-contain bg-center bg-no-repeat opacity-[0.15] blur-sm"/></div>
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    <Toaster position="top-right" richColors theme="dark" />
  </body></html>;
}
