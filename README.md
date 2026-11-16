# Booking Platform

A long-term backend engineering learning project. This repository is only the **foundation**: the backend
business logic, design patterns, Redis features and payments are intentionally left for you to build.

## Structure

```
.devcontainer/      GitHub Codespaces setup
.github/workflows/  CI (lint, typecheck, test, build)
docker-compose.yml  PostgreSQL + Redis (and an optional containerised backend)
backend/            Express + TypeScript + Prisma + ioredis
  src/main.ts            process entry (listen, graceful shutdown)
  src/app.ts             Express app (middleware + routes)
  src/config/env.ts      environment validation (zod)
  src/infrastructure/    Prisma and Redis connections only
  src/middleware/        request logger, error handling
  src/modules/health/    GET /health
  prisma/schema.prisma   datasource + generator, no models yet
frontend/           Next.js (App Router) + Tailwind, mock data, 3 pages
  src/lib/api/           axios client + mock-backed service functions
```

New backend business modules go in `backend/src/modules/<name>/`, using whatever structure you choose.

## Run in GitHub Codespaces

Create a Codespace on this repo. The devcontainer installs dependencies, copies the `.env` files and starts
PostgreSQL and Redis. Then run the two apps (below) in separate terminals; ports 3000 and 4000 are forwarded.

## Run locally

Requirements: Node 22+, Docker.

```bash
docker compose up -d postgres redis
```

```bash
cd backend
cp .env.example .env
npm ci
npm run dev          # http://localhost:4000/health
```

```bash
cd frontend
cp .env.example .env.local
npm ci
npm run dev          # http://localhost:3000
```

## Scripts

| Where    | Command                                  | Purpose                      |
| -------- | ---------------------------------------- | ---------------------------- |
| backend  | `npm run dev`                            | dev server (tsx watch)       |
| backend  | `npm run build` / `npm start`            | production build / run       |
| backend  | `npm run lint` / `typecheck` / `test`    | quality checks               |
| backend  | `npm run prisma:migrate`                 | create/apply migrations      |
| frontend | `npm run dev` / `build` / `start`        | Next.js                      |
| frontend | `npm run lint`                           | lint                         |

Optionally run the backend in Docker too: `docker compose --profile app up --build`.

## Configuration

See `.env.example` (and `backend/.env.example`, `frontend/.env.example`). The backend refuses to start if
`DATABASE_URL` or `REDIS_URL` is missing. The frontend reads `NEXT_PUBLIC_API_URL`. Real `.env` files are
gitignored; never commit secrets.

## Prisma

`prisma/schema.prisma` has no models. Add your own, then run `npm run prisma:migrate -- --name init`.

## Future VPS deployment

The backend is configured purely through environment variables and ships a production Dockerfile, so pointing
`DATABASE_URL` at Neon and `REDIS_URL` at Upstash (use a `rediss://` URL), and running behind Caddy with Docker
Compose, needs no code changes. No deployment automation exists yet.

## CI

`.github/workflows/ci.yml` installs dependencies, lints, type-checks, tests and builds both apps. It does not deploy.
