import { PrismaClient, Role, CommentStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD || 'admin12345', 10);
  const admin = await prisma.user.upsert({ where: { email: 'admin@uzapp.local' }, update: {}, create: { email: 'admin@uzapp.local', role: Role.ADMIN, passwordHash } });
  const user = await prisma.user.upsert({ where: { email: 'user@uzapp.local' }, update: {}, create: { email: 'user@uzapp.local', role: Role.USER, passwordHash: await bcrypt.hash('user12345', 10) } });

  const [security, tokenomics] = await Promise.all([
    prisma.researchRatingCriterion.upsert({ where: { id: 'security' }, update: {}, create: { id: 'security', name: 'Security', order: 1 } }).catch(() => prisma.researchRatingCriterion.findFirstOrThrow({ where: { name: 'Security' } })),
    prisma.researchRatingCriterion.upsert({ where: { id: 'tokenomics' }, update: {}, create: { id: 'tokenomics', name: 'Tokenomics', order: 2 } }).catch(() => prisma.researchRatingCriterion.findFirstOrThrow({ where: { name: 'Tokenomics' } }))
  ]);

  const topic = await prisma.researchTopic.upsert({
    where: { slug: 'ethereum-ecosystem' },
    update: {},
    create: { slug: 'ethereum-ecosystem', title: 'Ethereum Ecosystem', logoImageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', projectName: 'Ethereum', articleRich: '<p>Ethereum remains core infrastructure for DeFi and L2 settlement.</p>' }
  });

  await prisma.researchRating.upsert({ where: { researchTopicId_criterionId: { researchTopicId: topic.id, criterionId: security.id } }, update: { score: 9 }, create: { researchTopicId: topic.id, criterionId: security.id, score: 9 } });
  await prisma.researchRating.upsert({ where: { researchTopicId_criterionId: { researchTopicId: topic.id, criterionId: tokenomics.id } }, update: { score: 8 }, create: { researchTopicId: topic.id, criterionId: tokenomics.id, score: 8 } });

  await prisma.learnVideo.create({ data: { title: 'Intro to On-chain Analytics', youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' } }).catch(()=>{});
  const article = await prisma.learnArticle.upsert({ where: { slug: 'risk-management-basics' }, update: {}, create: { slug: 'risk-management-basics', title: 'Risk Management Basics', contentRich: '<p>Always size positions relative to volatility.</p>' } });
  await prisma.signal.create({ data: { title: 'BTC Breakout Setup', tradingViewUrl: 'https://www.tradingview.com/chart/', analysisText: 'Breakout above resistance with volume confirmation.', priceLevelsJson: { entry: 62000, target: 67000, stop: 59800 }, pinned: true } }).catch(()=>{});
  await prisma.toolItem.upsert({ where: { slug: 'gas-fee-scanner' }, update: {}, create: { slug: 'gas-fee-scanner', title: 'Gas Fee Scanner', clickbaitSubtitle: 'Find cheap execution windows in seconds', externalLinksJson: ['https://etherscan.io/gastracker'], articleRich: '<p>Use off-peak windows for cheaper execution.</p>', apiIntegrationType: 'coingecko', apiConfigJson: { endpoint: '/simple/price' } } });
  await prisma.newsSourceConfig.upsert({ where: { id: 'default-news' }, update: {}, create: { id: 'default-news', provider: 'mock', categoriesJson: ['defi', 'macro'], enabled: true } });
  await prisma.comment.create({ data: { entityType: 'learnArticle', entityId: article.id, userId: user.id, content: 'Great intro!', status: CommentStatus.APPROVED } }).catch(()=>{});

  console.log('Seeded', { admin: admin.email });
}

main().finally(() => prisma.$disconnect());
