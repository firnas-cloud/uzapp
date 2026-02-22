import { AdminSidebar } from '@/components/layout/admin-sidebar';
export default function AdminLayout({children}:{children:React.ReactNode}){return <div className='grid gap-4 md:grid-cols-[240px_1fr]'><AdminSidebar/><div>{children}</div></div>}
