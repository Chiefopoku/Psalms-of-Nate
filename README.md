# Psalms of Nate

A Next.js App Router site for publishing psalm-inspired compositions, downloadable scores, MIDI/MP3 files, projects, search, uploads, and admin analytics.

## Getting Started

```bash
npm install
npm run dev
```

Copy `.env.local.example` to `.env.local` and fill in Firebase values before connecting live services.

## Structure

- `src/app/(public)` contains the public catalog, project, search, about, and contact pages.
- `src/app/(admin)/admin` contains authenticated admin pages mounted at `/admin/*`.
- `src/features`, `src/services`, and `src/lib` isolate business logic, persistence, and shared utilities.
- `firebase` contains starter rules and project configuration.
- `docs` contains implementation notes and roadmap material.
