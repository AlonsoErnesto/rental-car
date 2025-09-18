import { PrismaClient } from '../generated/prisma';

// 👈 cambia aquí también

async function verifyPrisma() {
  const prisma = new PrismaClient();
  const result = await prisma.$queryRaw`SELECT 1`;
  await prisma.$disconnect();
}

verifyPrisma().catch(e => {
  console.error('❌ Verification failed:', e);
  process.exit(1);
});
