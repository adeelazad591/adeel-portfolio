# adeel-portfolio

Adeel Azad's portfolio, rebuilt as a **Turborepo + pnpm** monorepo on
**Next.js (App Router) + TypeScript**, structured so a backend app can be
added later without restructuring anything that exists today.

This replaces the previous single-app repo
([`code-canvas-portfolio-pulse`](https://github.com/adeelazad591/code-canvas-portfolio-pulse),
a Vite + React Router SPA). All content — About, Experience, Projects,
Resume, Contact — was carried over as-is; only the codebase structure and
framework changed. See [Migration notes](#migration-notes) below for every
place that required a real decision.

## Folder structure

```
adeel-portfolio/
├── apps/
│   └── web/                   # The portfolio site (Next.js App Router)
│       ├── app/                   # Routes: /, /projects, /project/[id], /resume
│       ├── components/            # Page-specific sections (Navbar, Hero, About, ...)
│       ├── lib/                   # projectData.ts (typed project content)
│       └── public/                # Images, résumé PDF, favicon, robots.txt
│       # apps/api or apps/server would live here later — see below
├── packages/
│   ├── ui/                    # Shared shadcn/ui-derived component library
│   │   └── src/                   # Button, Carousel, Toast/Toaster, Sonner, hooks
│   └── config/                # Shared ESLint / TypeScript / Prettier config
│       ├── eslint/base.mjs
│       ├── typescript/{base,nextjs}.json
│       └── prettier/index.mjs
├── package.json                # Root workspace scripts (turbo run ...)
├── pnpm-workspace.yaml
├── turbo.json
├── .env.example                 # Root-level env reference (see apps/web/.env.example too)
└── prettier.config.mjs
```

**Why this shape:** `apps/*` holds independently deployable applications
(today just `web`); `packages/*` holds code shared between them. Nothing in
`packages/ui` or `packages/config` knows anything about Next.js beyond the
one `typescript/nextjs.json` preset, so both are equally usable from a
future non-Next backend.

## Setup

Requires Node ≥20.9 and pnpm (repo pins `pnpm@10.33.0` via
`packageManager`; `corepack enable` will pick it up automatically).

```bash
pnpm install        # installs all workspace packages
pnpm dev             # runs apps/web on http://localhost:3000
```

Other root-level scripts (all fan out per-package via Turborepo):

```bash
pnpm build           # production build (apps/web -> .next)
pnpm lint            # eslint across every package
pnpm type-check       # tsc --noEmit across every package
pnpm format           # prettier --write .
pnpm format:check     # prettier --check .
```

Environment variables: copy `apps/web/.env.example` to
`apps/web/.env.local` for local development. See
[Environment variables](#environment-variables) below.

This was scaffolded and verified directly in this environment —
`pnpm install`, `pnpm build`, `pnpm lint`, `pnpm type-check`, and
`pnpm format:check` all pass, and the four routes (`/`, `/projects`,
`/project/[id]`, `/resume`) were smoke-tested against a production build.

## Adding a backend later

The repo is already shaped for this — no restructuring needed:

1. Create `apps/api` (or `apps/server`) with its own `package.json` (any
   stack: Next.js Route Handlers, Express, Fastify, Hono, NestJS...). pnpm's
   workspace glob (`apps/*` in `pnpm-workspace.yaml`) picks it up
   automatically.
2. Reuse `@adeel-portfolio/config` for its ESLint/TypeScript/Prettier setup
   the same way `apps/web` does (see `apps/web/tsconfig.json` and
   `apps/web/eslint.config.mjs` for the pattern).
3. If it needs to share types or utilities with the frontend, add a new
   `packages/*` package (e.g. `packages/types`) rather than importing
   across `apps/*` directly.
4. Add its scripts (`dev`, `build`, `lint`, ...) — `turbo.json`'s task
   definitions already apply to any workspace package that defines a
   matching script, so `pnpm build` / `pnpm dev` etc. at the root will pick
   it up with no changes to `turbo.json`.
5. Point the frontend at it via an env var, e.g. `NEXT_PUBLIC_API_URL`
   (placeholder already noted in `apps/web/.env.example`).

## Environment variables

- **`apps/web/.env.example`** — the vars the frontend actually reads today
  (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`). Copy to
  `apps/web/.env.local`.
- **Root `.env.example`** — documents the overall convention (shared vars,
  and where a future backend's secrets will go) rather than holding real
  values itself.
- Real `.env*` files are git-ignored everywhere; only `.env.example` files
  are committed.

## Migration notes

Everything below is a deliberate call made during the rebuild, flagged so
nothing is a silent surprise. Nothing here changes visible content —
About/Experience/Projects/Contact copy, images, and the résumé PDF are
byte-for-byte the same as the source repo.

**Dropped (Lovable/Vite-specific, not applicable to a standalone Next.js repo):**

- The `lovable-tagger` Vite plugin and the `cdn.gpteng.co/gptengineer.js`
  script tag injected by the Lovable platform.
- `public/_redirects` (Netlify SPA fallback for client-side routing) — not
  needed since Next.js does real server-side routing.
- An unused `GLightbox` init in the home page's project carousel
  (`components/Projects.jsx` in the old repo): it called
  `GLightbox({selector: ".glightbox"})` but that component renders no
  `.glightbox` elements, so it was dead code. Dropped in
  `ProjectsPreview.tsx`. The `/projects` listing page's GLightbox usage
  (which _does_ have matching gallery elements) was kept, now dynamically
  imported client-side.
- `@tailwindcss/typography` was a listed dependency in the old repo but was
  never added to the Tailwind `plugins` array, so it did nothing — not
  carried over.
- `src/pages/Index.jsx` (the framework-generated placeholder page, shadowed
  by the real `Index.tsx`) and `src/App.css` (unused default Vite/React
  template styles) — dead files, not migrated.

**Renamed for clarity (no behavior change):**

- `components/Projects.jsx` (home page carousel) → `ProjectsPreview.tsx`,
  to avoid a name collision with the `/projects` route's page component —
  Next's file-based routing makes that collision more confusing than in the
  old `react-router` setup where they were just two independently-named
  imports.
- `components/ScrollToTopOnRouteChange.jsx` →
  `components/RouteChangeScrollReset.tsx`, rewired from
  `react-router-dom`'s `useLocation` to `next/navigation`'s `usePathname`.

**Framework-shape differences worth knowing about:**

- The old `<AnimatePresence mode="wait">` page-transition wrapper around
  `react-router`'s `<Routes>` was not carried over — Next's App Router
  navigates and unmounts differently, and a faithful equivalent would need
  its own `template.tsx` plus exit-animation plumbing. Every section still
  has its own `framer-motion` enter animation, so within-page animation is
  unchanged; only the fade-between-pages transition is gone. Worth
  revisiting if that transition mattered.
- Next.js's `app/not-found.tsx` doesn't receive the attempted pathname the
  way `react-router`'s catch-all route did, so the old
  `console.error(..., location.pathname)` diagnostic was dropped — it was
  dev-only console noise, not user-visible.
- `Navbar`, `Footer`, and `ScrollToTop` are rendered per-page (on `/`,
  `/projects`, `/project/[id]`) rather than hoisted into the root layout,
  and `/resume` deliberately has none of them — this matches the original
  SPA's inconsistency exactly rather than "fixing" it, since the request
  was to reuse content/layout as-is.
- `Footer`'s copyright year is computed via `new Date()`; it's kept as a
  Client Component (`"use client"`) specifically so that value is computed
  in the browser on every visit, not frozen at build time the way a Server
  Component would freeze it.
- Fonts (Inter, Fira Code) now load via `next/font/google` instead of a
  render-blocking `@import url(...)` in the stylesheet — same fonts, faster
  load, no visual change.
- `html2canvas`/`jsPDF` (résumé PDF export) and `GLightbox` (project
  gallery) are dynamically `import()`ed at the point of use instead of
  imported at module scope, since they touch the DOM and shouldn't be
  bundled into the initial server-rendered payload.
- Raw `<img>` tags were kept (rather than converting to `next/image`) to
  preserve the exact original rendering behavior without re-deriving
  aspect ratios for every screenshot; each is marked with an ESLint disable
  comment. Worth revisiting as a follow-up optimization.

## Tech stack

- **Monorepo:** Turborepo, pnpm workspaces
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 3 (same custom theme/tokens as the original —
  navy/slate/theme colors, `heading-section` counters, etc.), shadcn/ui
  component patterns
- **Animation:** Framer Motion
- **Other:** TanStack Query, Radix UI primitives, Sonner, GLightbox,
  html2canvas + jsPDF (résumé export)
