# BioLab Interactive Guide

BioLab Interactive Guide — 100 ta biotexnologiya qurilmasini 10 kategoriya, qidiruv/filtr, original horizontal Pure CSS 3D carousel va 16 bosqichli o‘quv dosyesi orqali o‘rgatuvchi professional platforma. Interfeysda Saralanganlar browser xotirasi, responsive bookmarks sidebar, PWA offline holati va qurilma rasmi/litsenziya metadata si mavjud.

## Current Source of Truth

Joriy tasdiqlangan source GitHub’dagi [`uzme/second-brain`](https://github.com/uzme/second-brain) repository’sining `main/projects/biolab-guide` yo‘lida saqlanadi. Katta binary/reference materiallar va sanitizatsiyalangan snapshotlar Google Drive’dagi yagona Second Brain root papkasida (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) saqlanadi. Real secrets faqat secure environment’da bo‘ladi. Eski `uzme/biolab-interactive-guide` va `Biotexnologiya yangi / Loyiha 1` manzillari tarixiy, joriy sync manzili emas.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui, Wouter.
- **Backend:** Node.js 22, Express 4, tRPC 11, Drizzle ORM, MySQL/TiDB compatibility.
- **PWA:** `manifest.webmanifest`, `sw.js`, `OfflineManager`.
- **Testing:** TypeScript check, production build va Playwright regressiya skriptlari.
- **Package manager:** pnpm.

## Installation and Validation

Nested project clean-clone uchun Second Brain monorepo workspace’ini noto‘g‘ri ishlatib yubormaslik maqsadida quyidagi buyruqlardan foydalaning:

```bash
cd projects/biolab-guide
pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts
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

Release validation va sanitizatsiya:

```bash
node scripts/sync_release.mjs --check
node scripts/sync_release.mjs --publish
```

`--check` upload bajarmaydi; `--publish` esa avval test, build va secret sanitizatsiyasini bajaradi. Snapshotga `.env*`, tokenlar, parollar, API kalitlari, PATlar, `node_modules`, `dist`, loglar va runtime chiqindilari kiritilmaydi.

## Project Structure

```text
client/       React frontend, pages, components, hooks and PWA integration
server/       Express, tRPC, auth and database helpers
drizzle/      Database schema and migration metadata
scripts/      Release automation and browser regression tests
shared/       Shared types and constants
storage/      S3 storage helpers
```

## Continuity Documentation

`PROJECT_MANIFEST.md`, `PROJECT_STATE.md`, `CURRENT_STATE.md`, `PROJECT_INVENTORY.md`, `ARCHITECTURE.md`, `DATABASE.md`, `REPRODUCTION.md`, `AI_HANDOFF.md`, `SECRETS_REQUIRED.md`, `TROUBLESHOOTING.md`, `DECISIONS.md`, `CHANGELOG.md`, `todo.md`, `DRIVE_INDEX.md`, `GITHUB_INDEX.md` va `RESTORATION_MAP.md` yangi AI/account orqali loyihani qayta tiklash uchun source-of-truth hujjatlarini tashkil qiladi.

`DRIVE_INDEX.md` canonical binary va snapshot manzillarini, `GITHUB_INDEX.md` esa Drive’dan GitHub source va muhim hujjatlarga qaytish URL’larini ko‘rsatadi. `RESTORATION_MAP.md` kod, database schema, assetlar va secure environment’ni tiklash usullarini belgilaydi.

## Status

Loyiha production’da `https://biolabguide-fbcitqyf.manus.space` manzilida ishlaydi. Joriy test/build holati va known limitations `CURRENT_STATE.md`, audit tarixi `PROJECT_STATE.md`, bajariladigan yoki kelajakdagi ishlar esa `todo.md` orqali yuritiladi.
