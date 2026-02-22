import 'next-auth';
declare module 'next-auth' { interface Session { user?: { email?: string | null; role?: string; id?: string } } interface User { role?: string } }
declare module 'next-auth/jwt' { interface JWT { role?: string } }
