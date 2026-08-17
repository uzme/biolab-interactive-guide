# BioLab Interactive Guide

BioLab Interactive Guide is a professional biotechnology learning platform featuring 100 devices across 10 categories, real-time search and filters, an original horizontal Pure CSS 3D carousel, and 16-stage learning dossiers for every instrument. The interface includes browser-based localStorage bookmarks, a responsive bookmarks sidebar, PWA offline capabilities, and verified equipment image licenses.

## Current Source of Truth

The active canonical source repository is [`uzme/biolab-interactive-guide`](https://github.com/uzme/biolab-interactive-guide) on the `main` branch. Complete binary and sanitised application snapshots reside in the canonical Google Drive root folder **Biotexnologiya** (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`). Real credentials and secrets remain strictly in secure environment storage.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui, Wouter.
- **Backend:** Node.js 22, Express 4, tRPC 11, Drizzle ORM, MySQL/TiDB compatibility.
- **PWA:** `manifest.webmanifest`, `sw.js`, `OfflineManager`.
- **Testing:** TypeScript check, production build, and Playwright regression scripts.
- **Package Manager:** pnpm.

## Installation and Validation

To run or validate the project locally:

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm build
pnpm test
node scripts/test_catalog_controls.mjs
node scripts/test_device_viewer.mjs
```

Development server:

```bash
pnpm dev
```

Release validation and sanitisation:

```bash
node scripts/sync_release.mjs --check
node scripts/sync_release.mjs --publish
```

`--check` validates integrity without publishing; `--publish` executes tests, builds, secret sanitisation checks, and synchronises the sanitised snapshot to GitHub and Google Drive. Snapshots exclude `.env*`, tokens, API keys, passwords, PATs, `node_modules`, `dist`, and runtime logs.

## Project Structure

```text
client/       React frontend, pages, components, hooks, and PWA integration
server/       Express, tRPC, authentication, and database helpers
scripts/      Release sync, verification, and regression test scripts
drizzle/      Database schema and migrations
```
