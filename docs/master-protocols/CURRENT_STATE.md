# BioLab Interactive Guide — Current State

- **Version:** `1.1.0` — 100/100 authoritative hero rollout
- **Sana:** 22-avgust 2026
- **Holat:** **READY**
- **Build:** `pnpm build` muvaffaqiyatli yakunlandi
- **Typecheck:** `pnpm run check` xatosiz yakunlandi
- **Testlar:** `pnpm test`, katalog/qurilma browser regressiyalari va carousel pagination browser tekshiruvi muvaffaqiyatli
- **Continuity audit:** `node scripts/release/verify_continuity_docs.mjs` 20 ta required document va canonical cross-linklarni `READY` deb tasdiqladi
- **Sanitizatsiya:** `.env`, tokenlar, API kalitlari, parollar, PATlar, service-role kalitlari, loglar, `node_modules`, `dist` va runtime chiqindilari snapshotdan chiqariladi
- **Clean-clone:** root-level `uzme/biolab-interactive-guide` clone uchun `pnpm install --frozen-lockfile --ignore-scripts`, check va build muvaffaqiyatli bajarildi
- **Known non-blocking warnings:** learning dossier data chunki 500 kB dan katta; buildda mavjud CSS gradient yo‘nalishi bo‘yicha warninglar bor. Ular build yoki runtimeni to‘xtatmaydi.
- **Dependency audit:** advisorylar alohida remediation bosqichi sifatida hujjatlashtirilgan; bu migratsiyada ishlayotgan UI yoki 100 ta qurilma source-of-truth qayta yozilmaydi
- **Completed features:** 100-device catalog, 100/100 qorong‘i laboratoriya hero-vizual, professional precision-biotech visual system, LAB-01 16-qadamli hero rail, original gorizontal Pure CSS 3D carousel, 16-section learning dossiers, PDF export, bookmarks, responsive right sidebar, PWA offline shell, reduced-motion-safe micro-interactions, transition-safe catalog controls va sanitised release workflow
- **Incomplete features:** None
- **Repository organization:** `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalari; root-level script qoldig‘i yo‘q, barcha eski path reference’lar tozalangan
- **Deployment:** Manus Autoscale Web Hosting — `https://biolabguide-fbcitqyf.manus.space`; eski Vercel `biolab-interactive-guide` loyihasi butunlay o‘chirilgan, uchala tarixiy alias `404`, canonical Manus manzili `200` qaytardi
- **Canonical GitHub:** `https://github.com/uzme/biolab-interactive-guide`, `main`; latest commit va release metadata publish outputida qayd etiladi
- **Canonical Drive:** `Biotexnologiya yangi` BioLab root ID `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`; canonical file ID va modified time publish outputida qayd etiladi, rootda bitta snapshot tekshiriladi. `Second Brain` root BioLabga tegishli emas va write destination bo‘la olmaydi
- **Canonical snapshot:** `BioLab_Interactive_Guide_source.tar.gz`; source fingerprint har bir sanitizatsiyalangan release outputida qayd etiladi
- **Hero source correction:** `BIO-041.webp` canonical `BioLab_hero_assets_batch_13.zip` ichidan tasdiqlandi; 2560×1440 WebP, SHA-256 `fcf69a9e93eb91fb8f0bdcb217e612e93f2ff76c27a98e8cb0f1c832f8c43799`. Recovery archive (`1s6Uhum2PxA1RWzVP1VDHAj12-AhZdT08`) 100 ta hero asset bilan o‘rnida yangilandi.
- **Hero asset mirror:** `Biotexnologiya yangi/BioLab_Hero_Assets_By_Batch` — Drive ID `1i3CwBud6QOyWMlEyitXSFm4vD_5jd9ar`; 100 batch, 100 checksum-verified WebP, rootda `BATCH_INDEX.md` va manifest mavjud.
- **Final hero ZIP history:** `Biotexnologiya yangi/BioLab_Historical_Final_Hero_ZIPs` — Drive ID `19dpcDupgvEXS5JnznEUW0-lbagewubGE`; 100 final ZIP batch, 100 checksum-verified WebP hamda 3 nazorat fayli mavjud. Eski 76 xom source ZIP Drive Chiqindisida, root esa tozalangan.
- **Latest verified release:** GitHub `790c81404427f7bc05e1c11030c18bc66c2f642d`; Drive source file `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, parent `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`, modified `2026-08-22T03:45:53.993Z`, fingerprint `9d2716739a85f6bf1f6bf59e5cc8d6e34967e68ed0981de1019b30661d4435c4`.
- **Database:** Schema va migration metadata repositorydagi `drizzle/` katalogida saqlanadi; destructive migration bajarilmagן

## Qat’iy saqlanadigan source-of-truth

3D carousel geometriyasi (gorizontal o‘q), 100 ta qurilma ma’lumotlari, 16 bosqichli o‘quv dosyelari, rasm metadata si va foydalanuvchi oqimlari o‘zgartirilmagan. Yangi dizayn `390×844`, `768×1024`, `1280×900` va `1920×1080` qabul viewportlarida tekshirildi; planshetda LAB-01 rail 8×2 qadam tarmog‘i bilan o‘qiladi. Repository rootdan tashqaridagi Drive papkalariga, jumladan `Kodlar`, `PUBG` va `Skills` papkalariga yozilmaydi.

## Sinxronlash tartibi

Har bir muhim o‘zgarishdan so‘ng `pnpm run check`, `pnpm build`, `pnpm test`, browser regressiya va `node scripts/release/sync_release.mjs --check` bajariladi. Faqat tekshiruvlar muvaffaqiyatli bo‘lganda `node scripts/release/sync_release.mjs --publish` ishlatiladi. Publish GitHub `main` branch rootini va `Biotexnologiya yangi` BioLab rootidagi mavjud snapshotni joyida yangilaydi; duplicate arxiv yaratilmaydi.
