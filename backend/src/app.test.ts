process.env.DATABASE_URL = 'postgresql://x:x@localhost:5432/x';
process.env.REDIS_URL = 'redis://localhost:6379';

import request from 'supertest';

jest.mock('./infrastructure/prisma', () => ({
  prisma: { $queryRaw: jest.fn().mockResolvedValue([{ '?column?': 1 }]) },
}));
jest.mock('./infrastructure/redis', () => ({
  redis: { ping: jest.fn().mockResolvedValue('PONG') },
}));

import { app } from './app';

describe('app', () => {
  it('GET /health returns ok when dependencies are up', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok', database: 'up', redis: 'up' });
  });

  it('returns 404 JSON for unknown routes', async () => {
    const res = await request(app).get('/nope');
    expect(res.status).toBe(404);
  });
});
