import { Router } from 'express';
import { prisma } from '../../infrastructure/prisma';
import { redis } from '../../infrastructure/redis';

export const healthRouter = Router();

async function check(fn: () => Promise<unknown>): Promise<'up' | 'down'> {
  try {
    await fn();
    return 'up';
  } catch {
    return 'down';
  }
}

healthRouter.get('/', async (_req, res) => {
  const [database, cache] = await Promise.all([
    check(() => prisma.$queryRaw`SELECT 1`),
    check(() => redis.ping()),
  ]);
  const ok = database === 'up' && cache === 'up';
  res.status(ok ? 200 : 503).json({ status: ok ? 'ok' : 'degraded', database, redis: cache });
});
