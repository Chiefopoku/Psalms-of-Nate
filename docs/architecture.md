# Architecture

Psalms of Nate is organized around the Next.js App Router. Public catalog routes live in `src/app/(public)`, and authenticated admin routes live in `src/app/(admin)/admin` so they resolve to `/admin/*`.

Business logic belongs in `src/features`, persistence adapters belong in `src/services`, and reusable app primitives belong in `src/lib`.
