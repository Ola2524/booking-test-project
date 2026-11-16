import Redis from 'ioredis';
import { env } from '../config/env';

// Connection only. No caching, locking or queue logic lives here.
export const redis = new Redis(env.REDIS_URL, { maxRetriesPerRequest: 3 });

redis.on('error', (err) => console.error('[redis] error:', err.message));
