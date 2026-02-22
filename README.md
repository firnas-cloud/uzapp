# UZAPP - Crypto Content Platform

Production-ready Next.js App Router + TypeScript platform with separate Public and Admin interfaces.

## Stack choices
- **Next.js App Router + TypeScript**: unified fullstack runtime.
- **TailwindCSS + custom glass components** (shadcn-compatible patterns): enforces premium dark crypto UI.
- **NextAuth Credentials + RBAC**: ADMIN/USER control for `/admin` routes.
- **PostgreSQL + Prisma**: strongly typed schema and migrations.
- **Zod + React Hook Form-ready API validation**.
- **Framer Motion-compatible interaction system** via CSS/animation constraints.

## Features
- Public routes: `/`, `/learn`, `/learn/[slug]`, `/research`, `/research/[slug]`, `/signals`, `/tools`, `/tools/[slug]`, `/news`, `/calculator`, `/auth/signin`.
- Admin routes: `/admin`, `/admin/learn`, `/admin/research`, `/admin/research/[id]`, `/admin/signals`, `/admin/tools`, `/admin/news`, `/admin/comments`, `/admin/settings`.
- Reaction API with dedupe guard and basic rate-limiting.
- Comment submission flow defaulting to `PENDING` moderation.
- News provider adapter with mock fallback.
- Local upload endpoint with production adapter toggle (`STORAGE_MODE`).
- Seeded demo content + seed admin account.

## One-time setup
```bash
cp .env.example .env
docker compose up -d
npm install
npx prisma migrate dev --name init
npm run prisma:seed
```

## Run locally
```bash
npm run dev
```

## Admin login (seed)
- Email: `admin@uzapp.local`
- Password: value of `SEED_ADMIN_PASSWORD` (default `admin12345`)

## Tests
```bash
npm test
```

## Deployment notes
- Set managed Postgres `DATABASE_URL`.
- Set `NEXTAUTH_SECRET` and `NEXTAUTH_URL`.
- For S3-compatible media storage, replace `src/lib/storage/index.ts` adapter and set `STORAGE_MODE=s3`.
- News provider keys should be server env vars only; never exposed client-side.
