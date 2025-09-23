// Database Client Setup
// Singleton Prisma client with proper connection management

import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error'],
  })
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    })
  }
  prisma = global.cachedPrisma
}

export { prisma }

// Database utilities
export async function isConnected(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch {
    return false
  }
}

export async function disconnect(): Promise<void> {
  await prisma.$disconnect()
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await disconnect()
})