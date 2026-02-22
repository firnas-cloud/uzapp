import { getServerSession } from 'next-auth';
import { authOptions } from './options';
export async function getSession() { return getServerSession(authOptions); }
export async function requireAdmin() {
  const session = await getSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') throw new Error('Unauthorized');
  return session;
}
