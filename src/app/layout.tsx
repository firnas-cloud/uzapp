import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ['latin'] });
export const metadata = { title: 'UZAPP Crypto Platform', description: 'Crypto learn, research, signals, tools and news' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className={`${inter.className} eth-watermark`}><Navbar /><main className="mx-auto max-w-6xl space-y-6 px-4 pb-12">{children}</main><Toaster richColors /></body></html>;
}
