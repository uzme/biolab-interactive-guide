# BioLab Interactive Guide — Restoration Map

Ushbu restoration map protokolda talab qilinganidek, har bir komponentning asosiy va ikkilamchi manbalarini hamda tiklash usulini aniq ko‘rsatadi.

| Component | Primary Location | Secondary Reference | Restore Method |
|---|---|---|---|
| Source code & Docs | GitHub (`uzme/second-brain`, `projects/biolab-guide`) | Google Drive Snapshot (`1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`) | `gh repo clone` or extract Drive `.tar.gz` snapshot |
| Database schema & Data | Local SQLite/TiDB schema in `drizzle/schema.ts` | `DATABASE.md` & Migrations | `pnpm db:push` or apply migration SQL |
| Equipment Images & Assets | Google Drive Image Vault (`1QuDHKjR8FuMz72en8wjOudrk1Quj0dqk`) | Remote Storage / Static CDN | Extract image zip into static asset vault |
| Secrets & Environment | Secure environment / Manus Secrets | `SECRETS_REQUIRED.md` | Configure via `webdev_request_secrets` or `.env.example` |
| PWA & Service Worker | GitHub repository (`public/sw.js`, `public/manifest.webmanifest`) | Offline cached shell | Automatic registration upon static hosting deploy |
| Dependencies | npm registry via `pnpm` | `pnpm-lock.yaml` | `pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts` |
