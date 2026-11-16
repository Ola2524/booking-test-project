import express from 'express';
import { env } from './config/env';
import { errorHandler, notFound } from './middleware/error-handler';
import { requestLogger } from './middleware/request-logger';
import { healthRouter } from './modules/health/health.routes';

export const app = express();

app.use(requestLogger);
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', env.CORS_ORIGIN);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return void res.sendStatus(204);
  next();
});

app.use('/health', healthRouter);

app.use(notFound);
app.use(errorHandler);
