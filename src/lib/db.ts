// import { PrismaClient } from '@prisma/client';
// declare global {
//   var prisma: PrismaClient | undefined;
// }
// export const db = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
// src/lib/db.ts
// src/lib/db.ts
// src/lib/db.ts
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
