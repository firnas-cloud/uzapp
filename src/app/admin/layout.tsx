import { requireAdmin } from '@/lib/auth/guards';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return <div className="grid gap-4 md:grid-cols-[220px_1fr]"><AdminSidebar />{children}</div>;
}
