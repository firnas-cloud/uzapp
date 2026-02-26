import { prisma } from '@/lib/db/prisma';
import { compare } from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  pages: { signIn: '/auth/signin' },
  providers: [CredentialsProvider({
    name: 'Credentials',
    credentials: { email: {}, password: {} },
    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) return null;
      const user = await prisma.user.findUnique({ where: { email: credentials.email } });
      if (!user?.passwordHash) return null;
      const valid = await compare(credentials.password, user.passwordHash);
      return valid ? { id: user.id, email: user.email, role: user.role } as any : null;
    }
  })],
  callbacks: {
    jwt: async ({ token, user }) => ({ ...token, role: (user as any)?.role ?? token.role }),
    session: async ({ session, token }) => ({ ...session, user: { ...session.user, id: token.sub!, role: token.role as string } as any })
  }
};
