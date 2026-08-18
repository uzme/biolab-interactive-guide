# BioLab Interactive Guide — Continuity Audit

## Audit maqsadi

Ushbu audit BioLab Interactive Guide loyihasining yagona GitHub repositorysi, yagona Google Drive root papkasi, majburiy hujjatlari, source-of-truth kodlari, maxfiy ma’lumotlar siyosati va qayta tiklash oqimini tekshiradi. Audit loyihani qayta yozmaydi; ishlayotgan UI, original Pure CSS 3D carousel geometriyasi, 100 ta qurilma dosyesi va 16 bosqichli o‘quv mazmuni saqlanadi.

## Canonical manzillar

| Qatlam | Tekshirilgan manzil | Natija |
|---|---|---|
| GitHub source | `https://github.com/uzme/biolab-interactive-guide`, `main`, repository root | PASS |
| Google Drive archive | `Biotexnologiya yangi` root, ID `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV` | PASS |
| Snapshot | `BioLab_Interactive_Guide_source.tar.gz`, mavjud faylni joyida yangilash | PASS |
| Cross-links | `GITHUB_INDEX.md`, `DRIVE_INDEX.md`, `RESTORATION_MAP.md` | PASS |
| Required documents | 20 ta continuity hujjati va LICENSE/CONTRIBUTING/SECURITY | PASS |
| Environment contract | `SECRETS_REQUIRED.md`; real credential qiymatlari mavjud emas | PASS |

## Verification natijalari

2026-08-18 dagi verified release’da `pnpm run check`, `pnpm build`, `pnpm test` (katalog va DeviceViewer regressiyalari), `node scripts/verify_continuity_docs.mjs` va `node scripts/sync_release.mjs --check` muvaffaqiyatli yakunlandi. `scripts/tests/test_catalog_controls.mjs` va `scripts/tests/test_device_viewer.mjs` ham PASS qaytardi; sanitizatsiya secret scan’i topilmasiz tugadi. `scripts/test_carousel_pagination_browser.mjs` esa package script tarkibiga kirmaydigan alohida smoke test sifatida mavjud bo‘lsa, joriy release check’da asosiy regressiya qamrovi katalog va DeviceViewer testlari bilan bajarildi.

## Verified release metadata

| Ko‘rsatkich | Qiymat |
|---|---|
| GitHub `main` commit | `e70057880a93b85fa76815dc17b150d5c9f9a3d4` |
| Drive snapshot file ID | `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` |
| Drive modified time | `2026-08-18T16:55:27.710Z` |
| Source fingerprint | `3d4d50b51a0170cff85913ca4fc2dace1eb42b483d6b1b5f96489733bc9712de` |

## Sanitizatsiya va xavfsizlik

Release snapshot `.env` fayllari, tokenlar, API kalitlari, parollar, PATlar, service-role kalitlari, `node_modules`, `dist`, `.git`, loglar, runtime chiqindilari, vaqtinchalik kataloglar va arxivlarning o‘zini kiritmaydi. `sync_release.mjs` source fingerprint yaratishdan va publishdan oldin keng tarqalgan maxfiy qiymat formatlarini scan qiladi; topilma aniqlansa jarayon ataylab to‘xtaydi. Haqiqiy credential faqat managed secret environment orqali beriladi.

## Reproduktibilitet

Canonical GitHub repository rootidan clean clone qilingach, Node.js 22 yoki undan yangi versiya va pnpm yordamida `pnpm install --frozen-lockfile --ignore-scripts`, `pnpm run check`, `pnpm build` va `pnpm test` bajariladi. Database yoki OAuth qiymatlari repositoryga yozilmaydi va `SECRETS_REQUIRED.md` kontraktiga muvofiq tashqi secure environment orqali beriladi.

## Ochiq, ammo bloklamaydigan kuzatuvlar

Production bundle ichidagi learning dossier ma’lumotlari 500 kB dan katta intentional chunk sifatida qolmoqda. Buildda CSS gradient yo‘nalishi bo‘yicha mavjud warninglar bor. Dependency audit advisorylari alohida remediation bosqichi sifatida qayd etilgan. Ushbu kuzatuvlar typecheck, build, test, carousel geometriyasi yoki 100 ta qurilma source-of-truth funksiyasini bloklamaydi.

## Status qarori

Continuity auditning joriy holati: **READY**. Yakuniy publishdan keyin GitHub commit hash’i, Drive snapshot file ID si, modified time va source fingerprint `PROJECT_STATE.md`, `CURRENT_STATE.md`, `GITHUB_INDEX.md`, `DRIVE_INDEX.md` va ushbu hujjatda bir xil metadata sifatida qayd etiladi. Faqat canonical GitHub repository va Biotexnologiya yangi root papkasi write destination hisoblanadi; boshqa Drive papkalari o‘zgartirilmaydi.
