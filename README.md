# Clenja HQ

![Status](https://img.shields.io/badge/status-production_ready-success)

Welcome to the official repository for **Clenja Tech Ltd**'s website and client portal. This application is built with the modern Next.js App Router, styled with Tailwind CSS + Shadcn UI, and uses Prisma with an SQLite database (easily scalable to Postgres) for tracking leads, support tickets, and project requests.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Shadcn UI + Framer Motion
- **Database:** Prisma ORM with SQLite (for easy setup)
- **Data Validation:** Zod
- **Authentication:** NextAuth (Credentials Provider)

## Prerequisites
- Node.js > 18.x
- npm

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory (one should already be present from the setup script):
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="super-secret-clenja-key-which-should-be-changed"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Initialize the Database
Generate the Prisma client, push the schema to SQLite, and run the seed script.
```bash
npx prisma generate
npx prisma db push
npm run prisma:seed
```

The seed script (`prisma/seed.ts`) inserts:
- 3 Sample Case Studies
- A demo admin user for the Client Portal: `admin@clenja.com` / `password`

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Client Portal
Navigate to `/login` to access the portal. You can log in using the seeded credentials:
- **Email:** `admin@clenja.com`
- **Password:** `password`

Once inside, you can navigate the mocked dashboard, create project requests, and submit support tickets.

## Extending the App
- **Database Switch:** To migrate from SQLite to Postgres, simply change `provider = "sqlite"` to `provider = "postgresql"` in `prisma/schema.prisma` and update `DATABASE_URL`.
- **Styling:** Main colors and themes are defined in `app/globals.css` using `oklch` variables.
- **Server Actions:** All logic for submitting forms resides in `app/actions/`.

## Deployment (Vercel)
1. Push repository to GitHub.
2. Import project in Vercel.
3. Configure Environment Variables in Vercel Dashboard (ensure `DATABASE_URL` points to a reachable Postgres connection string if changing from SQLite).
4. Override build command if needed (usually Next.js defaults are fine).
5. Deploy.
