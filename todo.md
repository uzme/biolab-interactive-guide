# BioLab Interactive Guide TODO

## BioLab Kanonik Migratsiya va Barcha Vazifalar (2026-08-17)
- [x] Canonical GitHub repository sifatida `uzme/biolab-interactive-guide` ni tasdiqlash va barcha referencelarni moslashtirish
- [x] Google Drive da yagona asosiy root papkani `Biotexnologiya` (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) sifatida to‘liq qo‘llash
- [x] `scripts/sync_release.mjs` va `scripts/verify_continuity_docs.mjs` skriptlarini canonical manzillar va to‘liq READY shartiga moslash
- [x] Home UI kopirayt/settings modalidagi eski Drive papka matnini canonical Biotexnologiya root qoidasiga moslab tuzatish
- [x] TypeScript check (`pnpm run check`), production build (`pnpm build`), Vitest (`pnpm test`), katalog/qurilma browser regressiyalari va carousel pagination testini muvaffaqiyatli bajarish
- [x] Sanitizatsiyalangan source snapshotni faqat Biotexnologiya Drive root papkasiga (`BioLab_Interactive_Guide_source.tar.gz`) va GitHub `uzme/biolab-interactive-guide` main branchining rootiga sinxronlash
- [x] PROJECT_STATE.md, CURRENT_STATE.md, CONTINUITY_AUDIT.md, GITHUB_INDEX.md, DRIVE_INDEX.md, RESTORATION_MAP.md va REPRODUCTION.md hujjatlarini final commit va Drive snapshot ID bilan to‘liq yangilash
- [x] CHECK READY va READY statusini automated audit orqali tasdiqlab, final checkpointni yaratish va productionga chiqarish
- [x] Learning-data va purchase-data uchun dynamic import / code-splitting joriy etish (4 ta asinxron blok)
- [x] Bookmarks sidebar uchun JSON formatida eksport va import funksiyalarini qo‘shish
- [x] Bookmarks JSON import parseri uchun Vitest unit testlarini yozish va muvaffaqiyatli o‘tkazish
- [x] Typecheck, production build, testlar va sanitizatsiyalangan canonical GitHub (`uzme/biolab-interactive-guide`, commit `093e1da`) ↔ Biotexnologiya Drive root (`1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`) release syncni bajarish

## Dizayn audit va zamonaviy polish (2026-08-17)
- [x] Mavjud BioLab visual tilini, Pure CSS 3D Carousel geometriyasini va eski dizayn elementlarini saqlagan holda desktop/mobil UI auditini bajarish
- [x] Hero responsive spacingi va tipografiyasi, SOP spine, modul header hierarchy hamda mavjud reduced-motion/micro-interaction qoidalarini ehtiyotkorlik bilan polish qilish
- [x] TypeScript check, production build, katalog/qurilma/carousel regressiya skriptlari va desktop/mobil screenshot verifikatsiyasini bajarish
- [x] Sanitizatsiyalangan dizayn release snapshotini faqat `uzme/biolab-interactive-guide` va `Biotexnologiya` Drive rootiga sync qilish

## Interaktiv hover va page-loading animatsiyalari (2026-08-17)
- [x] Umumiy Button va asosiy navigatsiya tugmalariga zamonaviy hover, focus-visible, active va loading holatlarini mavjud dizayn tilini saqlagan holda kuchaytirish
- [x] Sahifa yuklanish/page transition animatsiyasini qisqa, GPU-friendly va `prefers-reduced-motion` bilan mos holga keltirish
- [x] Typecheck, production build, Vitest, katalog/qurilma regressiya, reduced-motion CSS audit va desktop/mobil screenshot verifikatsiyasini bajarish
- [ ] Sanitizatsiyalangan release snapshotini faqat `uzme/biolab-interactive-guide` va `Biotexnologiya` Drive rootiga sync qilish
