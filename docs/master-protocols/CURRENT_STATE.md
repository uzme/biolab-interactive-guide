# BioLab Interactive Guide — Current State

- **Version:** `1.1.0` — 100/100 authoritative hero rollout
- **Sana:** 21-avgust 2026
- **Holat:** **READY**
- **Build:** `pnpm build` muvaffaqiyatli yakunlandi
- **Typecheck:** `pnpm run check` xatosiz yakunlandi
- **Testlar:** `pnpm test`, katalog/qurilma browser regressiyalari va carousel pagination browser tekshiruvi muvaffaqiyatli
- **Continuity audit:** `node scripts/release/verify_continuity_docs.mjs` 20 ta required document va canonical cross-linklarni `READY` deb tasdiqladi
- **Sanitizatsiya:** `.env`, tokenlar, API kalitlari, parollar, PATlar, service-role kalitlari, loglar, `node_modules`, `dist` va runtime chiqindilari snapshotdan chiqariladi
- **Clean-clone:** root-level `uzme/biolab-interactive-guide` clone uchun `pnpm install --frozen-lockfile --ignore-scripts`, check va build muvaffaqiyatli bajarildi
- **Known non-blocking warnings:** learning dossier data chunki 500 kB dan katta; buildda mavjud CSS gradient yo‘nalishi bo‘yicha warninglar bor. Ular build yoki runtimeni to‘xtatmaydi.
- **Dependency audit:** advisorylar alohida remediation bosqichi sifatida hujjatlashtirilgan; bu migratsiyada ishlayotgan UI yoki 100 ta qurilma source-of-truth qayta yozilmaydi
- **Completed features:** 100-device catalog, 100/100 qorong‘i laboratoriya hero-vizual, original horizontal Pure CSS 3D carousel, 16-section learning dossiers, PDF export, bookmarks, responsive right sidebar, PWA offline shell, loading/micro-interactions, transition-safe catalog controls va sanitised release workflow
- **Incomplete features:** None
- **Repository organization:** `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalari; root-level script qoldig‘i yo‘q, barcha eski path reference’lar tozalangan
- **Deployment:** Manus Autoscale Web Hosting — `https://biolabguide-fbcitqyf.manus.space`
- **Canonical GitHub:** `https://github.com/uzme/biolab-interactive-guide`, `main`; latest commit va release metadata publish outputida qayd etiladi
- **Canonical Drive:** `Biotexnologiya yangi` BioLab root ID `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`; canonical file ID va modified time publish outputida qayd etiladi, rootda bitta snapshot tekshiriladi. `Second Brain` root BioLabga tegishli emas va write destination bo‘la olmaydi
- **Canonical snapshot:** `BioLab_Interactive_Guide_source.tar.gz`; source fingerprint har bir sanitizatsiyalangan release outputida qayd etiladi
- **Hero source correction:** `BIO-041.webp` canonical `BioLab_hero_assets_batch_13.zip` ichidan tasdiqlandi; 2560×1440 WebP, SHA-256 `fcf69a9e93eb91fb8f0bdcb217e612e93f2ff76c27a98e8cb0f1c832f8c43799`. Recovery archive (`1s6Uhum2PxA1RWzVP1VDHAj12-AhZdT08`) 100 ta hero asset bilan o‘rnida yangilandi.
- **Latest verified release:** GitHub `cd3997285c45280397e3e95f507cb0e5b20fa54e`; Drive file `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, modified `2026-08-21T09:57:19.982Z`, fingerprint `4bdc775283ffba6cbbb3d8013cb8c382128a621b84cc7a7a0f2e7567759c6fdf`.
- **Database:** Schema va migration metadata repositorydagi `drizzle/` katalogida saqlanadi; destructive migration bajarilmagן

## Qat’iy saqlanadigan source-of-truth

3D carousel geometriyasi, 100 ta qurilma ma’lumotlari, 16 bosqichli o‘quv dosyelari, rasm metadata si va foydalanuvchi oqimlari o‘zgartirilmagan. Repository rootdan tashqaridagi Drive papkalariga, jumladan `Kodlar`, `PUBG` va `Skills` papkalariga yozilmaydi.

## Sinxronlash tartibi

Har bir muhim o‘zgarishdan so‘ng `pnpm run check`, `pnpm build`, `pnpm test`, browser regressiya va `node scripts/release/sync_release.mjs --check` bajariladi. Faqat tekshiruvlar muvaffaqiyatli bo‘lganda `node scripts/release/sync_release.mjs --publish` ishlatiladi. Publish GitHub `main` branch rootini va `Biotexnologiya yangi` BioLab rootidagi mavjud snapshotni joyida yangilaydi; duplicate arxiv yaratilmaydi.
