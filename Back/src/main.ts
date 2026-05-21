import { webcrypto } from 'crypto';

if (!globalThis.crypto) {
  (globalThis as unknown as { crypto: typeof webcrypto }).crypto = webcrypto;
}

import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { appValidationPipe } from './shared/pipes/validation.pipe';

const DEFAULT_CORS_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:4173',
  'https://docqee.vercel.app',
];

function normalizeOrigin(origin: string) {
  return origin.trim().replace(/\/+$/, '');
}

function getAllowedCorsOrigins() {
  const configuredOrigins = (process.env.FRONTEND_URL ?? '')
    .split(',')
    .map(normalizeOrigin)
    .filter(Boolean);

  return new Set([...DEFAULT_CORS_ORIGINS, ...configuredOrigins].map(normalizeOrigin));
}

function isAllowedVercelPreviewOrigin(origin: string) {
  try {
    const { hostname, protocol } = new URL(origin);
    return protocol === 'https:' && hostname.endsWith('.vercel.app') && hostname.startsWith('docqee-');
  } catch {
    return false;
  }
}

type CorsOriginCallback = (err: Error | null, allow?: boolean) => void;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  const allowedCorsOrigins = getAllowedCorsOrigins();

  app.use(json({ limit: '6mb' }));
  app.use(urlencoded({ extended: true, limit: '6mb' }));
  app.use(compression());

  app.enableCors({
    origin(origin: string | undefined, callback: CorsOriginCallback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      const normalizedOrigin = normalizeOrigin(origin);
      const isAllowed =
        allowedCorsOrigins.has(normalizedOrigin) || isAllowedVercelPreviewOrigin(normalizedOrigin);

      callback(null, isAllowed);
    },
    allowedHeaders: ['Accept', 'Authorization', 'Content-Type'],
    credentials: true,
    methods: ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'],
  });

  app.useGlobalPipes(appValidationPipe);
  app.useGlobalFilters(new HttpExceptionFilter());

  // Health check para Railway / proxies
  const httpAdapter = app.getHttpAdapter();
  httpAdapter.get('/health', (_req: unknown, res: { json: (body: object) => void }) => {
    res.json({ status: 'ok' });
  });

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port, '0.0.0.0');
}

bootstrap();
