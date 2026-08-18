# BioLab Interactive Guide — Current State

- **Version:** `1.0.0` — canonical repository alignment release
- **Sana:** 17-avgust 2026
- **Holat:** **READY**
- **Build:** `pnpm build` muvaffaqiyatli yakunlandi
- **Typecheck:** `pnpm run check` xatosiz yakunlandi
- **Testlar:** `pnpm test`, katalog/qurilma browser regressiyalari va carousel pagination browser tekshiruvi muvaffaqiyatli
- **Continuity audit:** `node scripts/verify_continuity_docs.mjs` 20 ta required document va canonical cross-linklarni `READY` deb tasdiqladi
- **Sanitizatsiya:** `.env`, tokenlar, API kalitlari, parollar, PATlar, service-role kalitlari, loglar, `node_modules`, `dist` va runtime chiqindilari snapshotdan chiqariladi
- **Clean-clone:** root-level `uzme/biolab-interactive-guide` clone uchun `pnpm install --frozen-lockfile --ignore-scripts`, check va build muvaffaqiyatli bajarildi
- **Known non-blocking warnings:** learning dossier data chunki 500 kB dan katta; buildda mavjud CSS gradient yo‘nalishi bo‘yicha warninglar bor. Ular build yoki runtimeni to‘xtatmaydi.
- **Dependency audit:** advisorylar alohida remediation bosqichi sifatida hujjatlashtirilgan; bu migratsiyada ishlayotgan UI yoki 100 ta qurilma source-of-truth qayta yozilmaydi
- **Completed features:** 100-device catalog, original horizontal Pure CSS 3D carousel, 16-section learning dossiers, PDF export, bookmarks, responsive right sidebar, PWA offline shell, loading/micro-interactions, transition-safe catalog controls va sanitised release workflow
- **Incomplete features:** None
- **Deployment:** Manus Autoscale Web Hosting — `https://biolabguide-fbcitqyf.manus.space`
- **Canonical GitHub:** `https://github.com/uzme/biolab-interactive-guide`, `main`, commit `e29c0352f0f772593aa8f45f9738cc5dfcab0180`
- **Canonical Drive:** `Biotexnologiya` root ID `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`, file ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, modified `2026-08-17T10:25:25.306Z`
- **Canonical snapshot:** `BioLab_Interactive_Guide_source.tar.gz`
- **Database:** Schema va migration metadata repositorydagi `drizzle/` katalogida saqlanadi; destructive migration bajarilmagן

## Qat’iy saqlanadigan source-of-truth

3D carousel geometriyasi, 100 ta qurilma ma’lumotlari, 16 bosqichli o‘quv dosyelari, rasm metadata si va foydalanuvchi oqimlari o‘zgartirilmagan. Repository rootdan tashqaridagi Drive papkalariga, jumladan `Kodlar`, `PUBG` va `Skills` papkalariga yozilmaydi.

## Sinxronlash tartibi

Har bir muhim o‘zgarishdan so‘ng `pnpm run check`, `pnpm build`, `pnpm test`, browser regressiya va `node scripts/sync_release.mjs --check` bajariladi. Faqat tekshiruvlar muvaffaqiyatli bo‘lganda `node scripts/sync_release.mjs --publish` ishlatiladi. Publish GitHub `main` branch rootini va Biotexnologiya yangi rootidagi mavjud snapshotni joyida yangilaydi; duplicate arxiv yaratilmaydi.
