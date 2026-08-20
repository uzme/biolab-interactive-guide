# BioLab Interactive Guide — Current State

- **Version:** `1.0.0` — canonical repository alignment release
- **Sana:** 18-avgust 2026
- **Holat:** **READY**
- **Build:** `pnpm build` muvaffaqiyatli yakunlandi
- **Typecheck:** `pnpm run check` xatosiz yakunlandi
- **Testlar:** `pnpm test`, katalog/qurilma browser regressiyalari va carousel pagination browser tekshiruvi muvaffaqiyatli
- **Continuity audit:** `node scripts/release/verify_continuity_docs.mjs` 20 ta required document va canonical cross-linklarni `READY` deb tasdiqladi
- **Sanitizatsiya:** `.env`, tokenlar, API kalitlari, parollar, PATlar, service-role kalitlari, loglar, `node_modules`, `dist` va runtime chiqindilari snapshotdan chiqariladi
- **Clean-clone:** root-level `uzme/biolab-interactive-guide` clone uchun `pnpm install --frozen-lockfile --ignore-scripts`, check va build muvaffaqiyatli bajarildi
- **Known non-blocking warnings:** learning dossier data chunki 500 kB dan katta; buildda mavjud CSS gradient yo‘nalishi bo‘yicha warninglar bor. Ular build yoki runtimeni to‘xtatmaydi.
- **Dependency audit:** advisorylar alohida remediation bosqichi sifatida hujjatlashtirilgan; bu migratsiyada ishlayotgan UI yoki 100 ta qurilma source-of-truth qayta yozilmaydi
- **Completed features:** 100-device catalog, original horizontal Pure CSS 3D carousel, 16-section learning dossiers, PDF export, bookmarks, responsive right sidebar, PWA offline shell, loading/micro-interactions, transition-safe catalog controls va sanitised release workflow
- **Incomplete features:** None
- **Repository organization:** `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalari; root-level script qoldig‘i yo‘q, barcha eski path reference’lar tozalangan
- **Deployment:** Manus Autoscale Web Hosting — `https://biolabguide-fbcitqyf.manus.space`
- **Canonical GitHub:** `https://github.com/uzme/biolab-interactive-guide`, `main`; latest commit va release metadata publish outputida qayd etiladi
- **Canonical Drive:** `Biotexnologiya yangi` BioLab root ID `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`; canonical file ID va modified time publish outputida qayd etiladi, rootda bitta snapshot tekshiriladi. `Second Brain` root BioLabga tegishli emas va write destination bo‘la olmaydi
- **Canonical snapshot:** `BioLab_Interactive_Guide_source.tar.gz`; source fingerprint har bir sanitizatsiyalangan release outputida qayd etiladi
- **Latest verified release:** GitHub `de9eea4287e5f85a4b959e5bd01bc42e38f7e1d1`; Drive file `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, modified `2026-08-20T06:24:25.426Z`, fingerprint `d273b32f213065204bde5f49e5a059b05401eb21dfd56546f06ed63da0e21f95`
- **Database:** Schema va migration metadata repositorydagi `drizzle/` katalogida saqlanadi; destructive migration bajarilmagן

## Qat’iy saqlanadigan source-of-truth

3D carousel geometriyasi, 100 ta qurilma ma’lumotlari, 16 bosqichli o‘quv dosyelari, rasm metadata si va foydalanuvchi oqimlari o‘zgartirilmagan. Repository rootdan tashqaridagi Drive papkalariga, jumladan `Kodlar`, `PUBG` va `Skills` papkalariga yozilmaydi.

## Sinxronlash tartibi

Har bir muhim o‘zgarishdan so‘ng `pnpm run check`, `pnpm build`, `pnpm test`, browser regressiya va `node scripts/release/sync_release.mjs --check` bajariladi. Faqat tekshiruvlar muvaffaqiyatli bo‘lganda `node scripts/release/sync_release.mjs --publish` ishlatiladi. Publish GitHub `main` branch rootini va `Biotexnologiya yangi` BioLab rootidagi mavjud snapshotni joyida yangilaydi; duplicate arxiv yaratilmaydi.
