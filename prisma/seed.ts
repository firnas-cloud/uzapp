import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcryptjs';
const prisma = new PrismaClient();
async function main() {
  const adminPass = await hash(process.env.SEED_ADMIN_PASSWORD ?? 'admin1234', 10);
  await prisma.user.upsert({ where: { email: 'admin@uzapp.dev' }, create: { email: 'admin@uzapp.dev', passwordHash: adminPass, role: Role.ADMIN }, update: {} });
  await prisma.learnVideo.createMany({ data: [{ title:'BTC Market Structure', youtubeUrl:'https://www.youtube.com/watch?v=dQw4w9WgXcQ', published:true }], skipDuplicates: true });
  await prisma.learnArticle.upsert({ where: { slug: 'onchain-basics' }, create: { slug:'onchain-basics', title:'On-chain Basics', contentRich:'<p>Read wallets, flows, and liquidity.</p>', published:true }, update: {} });
}
main().finally(() => prisma.$disconnect());
