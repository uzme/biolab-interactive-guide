# BioLab Interactive Guide — Restoration Map

Ushbu restoration map protokolda talab qilinganidek, har bir komponentning asosiy va ikkilamchi manbalarini hamda tiklash usulini aniq ko‘rsatadi.

| Component | Primary Location | Secondary Reference | Restore Method |
|---|---|---|---|
| Source code & Docs | [GitHub `uzme/second-brain` / `projects/biolab-guide`](https://github.com/uzme/second-brain/tree/main/projects/biolab-guide) | Second Brain Drive root `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`; verified snapshot `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` | `gh repo clone` or extract the canonical Drive snapshot |
| Database schema & Data | Local SQLite/TiDB schema in `drizzle/schema.ts` | `DATABASE.md` & Migrations | `pnpm db:push` or apply migration SQL |
| Equipment Images & Assets | Current BioLab source references and managed static storage | Second Brain Drive root `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd` | Restore only from the canonical project snapshot; historical asset vaults are read-only and not write destinations |
| Secrets & Environment | Secure environment / Manus Secrets | `SECRETS_REQUIRED.md`; `.env.example` is a documented system-policy exception | Configure through managed secrets; never commit real values |
| PWA & Service Worker | GitHub repository (`public/sw.js`, `public/manifest.webmanifest`) | Offline cached shell | Automatic registration upon static hosting deploy |
| Dependencies | npm registry via `pnpm` | `pnpm-lock.yaml` | `pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts` |
