## Dino — Digital Agency Website & CMS

Modern website and headless CMS for Dino, built with Next.js 15 and Payload. The site powers public pages (home, services, case studies, resources, careers) and a secure admin for content management.

### Highlights

- Next.js 15 (App Router) with React 19
- Payload CMS on PostgreSQL
- Tailwind CSS 4 + shadcn/ui
- Media via Vercel Blob, email via Resend
- Animations with GSAP and 3D via Three.js/@react-three/fiber
- TypeScript and Biome for DX

---

## Tech Stack

- Framework: Next.js 15, React 19
- CMS: Payload CMS (`withPayload`) + PostgreSQL
- Styling: Tailwind CSS 4, shadcn/ui (New York)
- Media: Vercel Blob storage
- Email: Resend
- Data: TanStack React Query
- Animation/3D: GSAP, @gsap/react, Three.js, @react-three/fiber; smooth scroll via Lenis
- Tooling: TypeScript, Biome

## Requirements

- Node.js 18+ (Node 20+ recommended)
- A package manager (`npm`, `pnpm`, `yarn`, or `bun`)
- PostgreSQL database and credentials

## Setup

1) Install dependencies

```bash
npm install
```

2) Environment variables

Create a `.env.local` file in the project root with:

```
PAYLOAD_SECRET=your-strong-secret
DATABASE_URI=postgres://user:pass@host:5432/dbname?sslmode=require
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
RESEND_API_KEY=re_...
```

Notes:

- PostgreSQL: Neon or another managed Postgres works well. Ensure SSL if required.
- Vercel Blob: Token must have read/write scope for media.
- Resend: Use a verified sender domain; defaults are configured in `src/payload.config.ts`.

3) Development

```bash
npm run dev
```

- App: http://localhost:3000
- Admin (Payload): http://localhost:3000/admin

Build and start production:

```bash
npm run build
npm start
```

## Project Structure

- `src/app/(frontend)`: Public site routes, layout, and `globals.css`
- `src/app/(payload)`: Payload admin and API routes (GraphQL, REST)
- `src/collections`: Payload collections (Users, Media, CaseStudies, Resources, Services, Careers, ContactSubmissions, Pages)
- `src/globals`: Global site settings (e.g., CompanyAbout)
- `src/components`: UI and shared components (navigation, providers, ui, universal)
- `src/lib`: Utilities and helpers
- `src/emails`: Email templates

## CMS & Content

- Admin URL: `/admin`
- Collections: Users, Media (Vercel Blob), Pages, CaseStudies, Resources, Services, Careers, ContactSubmissions
- Globals: CompanyAbout
- GraphQL endpoint: `/api/graphql`
- GraphQL playground (dev): `/api/graphql-playground`

## Scripts

- `npm run dev` — Start Next.js + Payload in dev
- `npm run build` — Build production bundle and generate Payload types
- `npm start` — Start production server
- `npm run lint` — Biome checks
- `npm run format` — Biome format (write)

## Configuration

- Next.js (`next.config.ts`): uses `withPayload`. Image optimization allows `localhost` media; add production asset domains before deploying.
- Payload (`src/payload.config.ts`):
  - `DATABASE_URI` for PostgreSQL
  - `PAYLOAD_SECRET` for auth/session
  - Vercel Blob via `BLOB_READ_WRITE_TOKEN`
  - Resend via `RESEND_API_KEY` (default from name/address set here)

## Deployment

Recommended: Vercel

- Set env vars: `PAYLOAD_SECRET`, `DATABASE_URI`, `BLOB_READ_WRITE_TOKEN`, `RESEND_API_KEY`
- Add production media/image domains in `next.config.ts` `images.remotePatterns`
- Ensure Postgres is reachable from Vercel with SSL if needed
- Verify Resend domain and DNS (SPF/DKIM) for sending

## Troubleshooting

- Admin login issues: verify `PAYLOAD_SECRET` and database connectivity
- Media upload errors: check `BLOB_READ_WRITE_TOKEN` and Blob binding
- Emails not sending: confirm `RESEND_API_KEY` and verified sender domain

## Security Notes

- Do not commit secrets. Use `.env.local` for local development.
- If any secrets were previously committed, rotate them immediately (database, blob token, email API key).

---

Maintained by Madeley Design Studio for Dino.
