# UZAPP - Crypto Content Platform

Production-oriented Next.js App Router platform with **public** and **admin** interfaces.

## Stack choices
- **Next.js + TypeScript**: unified frontend/backend, API routes, strong typing.
- **Tailwind**: fast glassmorphism/theming control.
- **NextAuth**: credentials auth + RBAC-ready session callbacks.
- **Prisma + PostgreSQL**: relational models, migrations, seed support.
- **Zod + React Hook Form**: shared validation/form ergonomics.
- **Framer Motion-ready CSS transitions**: fast subtle micro-interactions.

## Features implemented
- Public routes: `/`, `/learn`, `/research`, `/research/[slug]`, `/signals`, `/tools`, `/tools/[slug]`, `/news`, `/calculator`, `/auth/signin`.
- Admin routes: `/admin` + module management pages with protected layout.
- Prisma schema with requested models.
- NextAuth credentials with role-aware session data.
- API routes for news, comments, reactions (rate-limited + dedupe via DB unique).
- Dark glass design with Ethereum watermark, sticky controls, quick action-ready UI.
- Calculator logic + tests, plus API route test.
- Docker Compose PostgreSQL + seed data (admin + demo content).

## Local setup
1. `cp .env.example .env`
2. `docker compose up -d`
3. `npm install`
4. `npx prisma migrate dev`
5. `npm run prisma:seed`
6. `npm run dev`

Then open `http://localhost:3000`.

### Admin account
- Email: `admin@uzapp.dev`
- Password: value of `SEED_ADMIN_PASSWORD` (default `admin1234`)

## Commands
- `npm run dev`
- `npm run lint`
- `npm run test`
- `npx prisma migrate dev`
- `npm run prisma:seed`

## Deployment notes
- Set production `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`.
- Storage adapter toggle: `USE_S3=true` and supply S3 vars.
- `NEWS_API_URL` enables external provider adapter endpoint.

## Architecture
- `src/app`: route-level UI + API handlers
- `src/lib/auth|db|modules|news|storage|validators`: separation of concerns by domain
- `prisma`: schema + seed
- `tests`: unit/API smoke tests
