# BioLab Interactive Guide — Continuity Protocol Audit

## Audit Purpose

Ushbu audit `AI_PROJECT_GITHUB_GOOGLE_DRIVE_CONTINUITY_MASTER_PROTOCOL` va unga biriktirilgan joriy etish topshirig‘i asosida BioLab loyihasining source code, documentation, tests, build, database metadata, secure environment, GitHub archive, Google Drive canonical snapshot va reproducibility holatini tekshiradi. Ishlayotgan UI, architecture va features qayta yozilmadi.

## Audit Scope and Findings

| Audit sohasi | Natija | Dalil yoki manzil |
|---|---|---|
| Source of truth | PASS | Working BioLab source; GitHub `uzme/second-brain/main/projects/biolab-guide` |
| Required documentation | PASS with exception | Protocol hujjatlarining asosiy to‘plami mavjud; `DRIVE_INDEX.md`, `GITHUB_INDEX.md`, `RESTORATION_MAP.md` qo‘shildi |
| `.env.example` | EXCEPTION / NOT READY | System security policy sabab `.env.example`ni to‘g‘ridan-to‘g‘ri yaratish yoki tahrirlash mumkin emas; real secretlar secure environment’da qoladi; `SECRETS_REQUIRED.md` konfiguratsiya kontraktini beradi |
| GitHub ↔ Drive cross-links | PASS | `DRIVE_INDEX.md`, `GITHUB_INDEX.md`, `RESTORATION_MAP.md`; real repository, folder ID va snapshot ID ishlatilgan |
| GitHub canonical archive | PASS | `uzme/second-brain`, `main`, `projects/biolab-guide`; verified content/docs commit `319fe22c5aeb9c3b27a83d9098fcd8adca205631` |
| Drive canonical archive | PASS | Second Brain root `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`; snapshot `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` |
| Tests and build | PASS | TypeScript check, production build, catalog/device/carousel regressions and sanitisation check passed |
| Clean-clone reproducibility | PASS with configuration note | Nested install uses `pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts`; secure environment values are supplied separately |
| Database/migrations | PASS | Existing schema/migration metadata audited; no destructive database operation performed |
| Secret safety | PASS | Snapshot excludes `.env*`, tokens, API keys, passwords, PATs, logs, `node_modules`, `dist` and runtime outputs |
| Known risks | OPEN | Local `pnpm audit` reported 2 critical, 44 high, 74 moderate and 9 low advisories; GitHub Dependabot detail endpoint returned 403; dossier data chunk remains above 500 kB and CSS gradient warnings remain |

## Verification Sequence

1. Current project files and state documentation were audited before protocol documentation changes.
2. Required documentation and cross-link gaps were identified; `GITHUB_INDEX.md`, `DRIVE_INDEX.md` and `RESTORATION_MAP.md` were created without changing application architecture.
3. `node scripts/sync_release.mjs --check` completed TypeScript check, production build, browser regressions and sanitisation successfully.
4. `node scripts/sync_release.mjs --publish` synchronized the sanitised archive to GitHub and updated the existing Drive snapshot without creating a duplicate.
5. GitHub tree, Drive root and snapshot parent/timestamp were checked independently through their configured CLIs.

## Status Decision

The technical application release is verified and synchronized, but the strict universal protocol is **NOT READY / READY WITH EXCEPTION** until `.env.example` is resolved through an approved secure configuration mechanism. This audit does not fabricate a template or place any real credential value in the repository. All other identified items remain explicitly tracked in `todo.md`.

## Restoration Starting Point

Use `README.md`, `PROJECT_MANIFEST.md`, `AI_HANDOFF.md`, `REPRODUCTION.md`, `SECRETS_REQUIRED.md`, `DRIVE_INDEX.md`, `GITHUB_INDEX.md` and `RESTORATION_MAP.md` together. The source archive and all cross-links use the Second Brain canonical locations; historical `Biotexnologiya yangi / Loyiha 1` material is not a current write destination.

## 2026-08-17 — Security va reproducibility follow-up

### Dependency audit

`pnpm audit --json` local dependency tree bo‘yicha bajarildi. Audit 129 advisory qaytardi: 2 critical, 44 high, 74 moderate va 9 low. Eng ko‘p ta’sirlangan paketlar `axios` (28 advisory), `pnpm` (23), `dompurify` (18), `tar` (13), `vite` (10), `mermaid` (9), `postcss` (4), `qs` (3), `lodash-es` (3), `lodash` (3) va `nanoid` (3) bo‘ldi. Ushbu audit natijasi `/tmp/biolab-pnpm-audit.json` va projectdagi `scripts/summarize_pnpm_audit.mjs` hamda `scripts/print_audit_overview.mjs` orqali reproducible tarzda olindi.

GitHub Dependabot alert endpointi `uzme/second-brain` repository uchun `403 Resource not accessible by integration` qaytardi. Shuning uchun GitHub alertlarini advisory-by-advisory mustaqil tasdiqlash imkoni bo‘lmadi; push jarayonida ko‘ringan repository warning countlari alohida signal sifatida qoldirildi. Dependency upgrade’lari source-of-truth va ishlayotgan BioLab UI’ni o‘zboshimchalik bilan o‘zgartirmaslik qoidasi sabab ushbu auditdan keyingi alohida remediation bosqichiga qoldirildi.

### Reproducibility va bundle follow-up

`package.json` ichidagi pnpm 10 tomonidan e’tiborsiz qoldirilgan legacy `pnpm` block `pnpm-workspace.yaml` ga ko‘chirildi; `pnpm install --lockfile-only --ignore-scripts` muvaffaqiyatli bajarildi. Vite build output’ida `learningData` va `equipmentImages` uchun manual chunk boundary qo‘shildi. Natijada `DeviceViewer` 49.10 kB, asosiy application chunk 335.97 kB va learning dossier data 731.06 kB alohida chunk sifatida chiqdi. Dossier ma’lumotlari intentionally large data chunk bo‘lib qoldi; keyingi optimizatsiya per-device dynamic import sifatida alohida performance vazifasidir.

### Protocol exception

System security policy `.env` va `.env.example` fayllarini bevosita yaratish yoki tahrirlashga ruxsat bermadi. Haqiqiy secretlar source yoki archive’ga kiritilmadi. `SECRETS_REQUIRED.md` amaldagi secret nomlari va managed environment oqimini ko‘rsatadi; `.env.example` majburiy protokol bandi esa **NOT READY / documented exception** sifatida qoladi. Ushbu exception yopilmaguncha continuity protocol holati `READY WITH EXCEPTION`, to‘liq `READY` emas.

## 2026-08-17 09:38:10 UTC — Automated required-documents audit

`scripts/verify_continuity_docs.mjs` yakuniy docs o‘zgarishlaridan keyin qayta bajarildi. Natija: `requiredDocumentCount = 20`, `missingRequiredDocs = []`, `envExamplePresent = false`, `envExampleException = true`, GitHub canonical URL, Second Brain Drive root ID, RESTORATION_MAP cross-linklari, state exception statusi va audit exception matni — barchasi `true`. Yakuniy avtomatlashtirilgan status: **READY_WITH_EXCEPTION**.

Bu natija `.env.example` system security policy exceptioni hujjatlashtirilganini tasdiqlaydi; to‘liq `READY` statusi emas. `PROJECT_STATE.md` va `CURRENT_STATE.md` ayni timestamp hamda status bilan yangilandi. Keyingi canonical sync shu audit hujjati va state metadata o‘zgarishlarini GitHub/Drive arxiviga yuboradi.

## 2026-08-17 09:44–09:45 UTC — Final canonical archive verification

Automated required-documents audit va application post-sync check muvaffaqiyatli yakunlandi. `verify_continuity_docs.mjs` 2026-08-17T09:45:03.305Z da barcha 20 majburiy hujjat, canonical GitHub↔Drive cross-linklari va `.env.example` exceptionini tekshirib, `READY_WITH_EXCEPTION` qaytardi. `node scripts/sync_release.mjs --check` typecheck, production build, catalog/device/carousel browser regressiyalari va sanitizatsiya fingerprint tekshiruvlarini muvaffaqiyatli bajardi.

Final canonical publish natijasi: GitHub `uzme/second-brain` `main` branchidagi `projects/biolab-guide` commit `1f8730e596ab1f6932856be3c8601493c3d7568f`; mavjud Drive snapshot `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` joyida yangilandi, parent — Second Brain root `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`, modified time `2026-08-17T09:44:55.140Z`. Duplicate snapshot yaratilmagan.
