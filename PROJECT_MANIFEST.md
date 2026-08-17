# BioLab Interactive Guide — Project Manifest

## Overview

BioLab Interactive Guide — 100 ta biotexnologiya qurilmasini 10 kategoriya va 16 bosqichli o‘quv dosyesi orqali o‘rgatuvchi, qidiruv/filtr, original horizontal Pure CSS 3D carousel, Saralanganlar, PWA offline rejimi va modelga asoslangan workflow talqinini birlashtirgan professional ta’lim platformasi.

| Ko‘rsatkich | Joriy holat |
|---|---|
| Project name | BioLab Interactive Guide |
| Current version | `1.0.0` |
| Verified application/source release | GitHub `uzme/second-brain` `main`, `projects/biolab-guide`, content commit `aaaa299894d0f80699f9cf5def9af0a80b40dde2` |
| Deployment | Manus Autoscale Web Hosting — `https://biolabguide-fbcitqyf.manus.space` |
| Language | Professional Uzbek (`uz`) |
| Archive status | Sanitised canonical archive workflow verified; final archive commit and Drive modified time are recorded by each release run and state metadata |

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui, Wouter.
- **Backend:** Node.js 22, Express 4, tRPC 11, Drizzle ORM, MySQL/TiDB compatibility.
- **Authentication:** Manus OAuth session cookies.
- **Storage:** S3 storage helpers and browser-side PWA cache where applicable.
- **Testing:** TypeScript check, Vitest configuration, Playwright browser regression scripts.
- **Package manager:** pnpm.

## Runtime & Environment

Required runtime services and environment contracts are documented in `SECRETS_REQUIRED.md`. Real secret values are supplied only through the secure environment; `.env*`, tokens, passwords, API keys, PATs and runtime outputs are excluded from GitHub and Drive snapshots. A committed `.env.example` is currently absent and is tracked as a documentation gap because secret configuration must not be edited through unsafe direct file operations.

## Available Commands

```bash
pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts
pnpm run check
pnpm build
pnpm test
node scripts/test_catalog_controls.mjs
node scripts/test_device_viewer.mjs
node scripts/sync_release.mjs --check
node scripts/sync_release.mjs --publish
```

## Directory Structure

```text
client/       React frontend, pages, components, hooks, PWA integration
server/       Express, tRPC, authentication and database helpers
drizzle/      Schema and migration metadata
scripts/      Regression tests and sanitised release automation
shared/       Shared types and constants
storage/      S3 storage helpers
docs/         Project reference documentation, when present
```

## Canonical Archive

- **GitHub:** `https://github.com/uzme/second-brain`, branch `main`, project path `projects/biolab-guide`.
- **Google Drive:** Second Brain root ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`; canonical snapshot ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, file name `BioLab_Interactive_Guide_source.tar.gz`.
- **Cross-links:** `DRIVE_INDEX.md`, `GITHUB_INDEX.md`, and `RESTORATION_MAP.md`.
- **Excluded locations:** old `Biotexnologiya yangi / Loyiha 1` is historical only; `Kodlar`, `PUBG`, and `Skills` Drive folders are not modified.
