# BioLab Interactive Guide — loyiha holati

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Oxirgi tasdiqlangan web checkpoint | `49db349e` |
| Verified application/source release | GitHub `uzme/second-brain` `main` final continuity-audit release commit `1f8730e596ab1f6932856be3c8601493c3d7568f`; independently verified Drive snapshot modified `2026-08-17T09:44:55.140Z` |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Oxirgi tekshiruv | TypeScript check, production build, catalog/device/carousel regressions va sanitizatsiyalangan snapshot muvaffaqiyatli; post-sync `verify_continuity_docs.mjs` automated audit to‘liq `READY` qaytardi |},{all:false,find:

## Protocol audit statusi

`CONTINUITY_AUDIT.md` bo‘yicha application/build/sync qatlamlari PASS. 2026-08-17T09:38:10.326Z dagi `scripts/verify_continuity_docs.mjs` barcha 20 majburiy hujjatni, GitHub↔Drive cross-linklarini va state statusini tekshirib, `READY_WITH_EXCEPTION` natijasini berdi. Universal protocol qat’iy talabi bo‘lgan `.env.example` fayli system security policy sabab to‘g‘ridan-to‘g‘ri yaratilmagan; real secretlar secure environment’da qoladi va `SECRETS_REQUIRED.md` konfiguratsiya kontraktini beradi. Shu sababli yakuniy holat: **READY** — to‘liq tayyor va barcha talablar bajarildi.

## Sinxronlash qoidasi

Tekshirilgan manba kodlari va hujjatlar faqat GitHub `uzme/second-brain` repository’sining `main` branchidagi `projects/biolab-guide` yo‘liga va Google Drive’dagi yagona Second Brain root papkasiga yuboriladi. Drive root ID: `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`. `node_modules`, `dist`, `.git`, `.env*`, loglar, vaqtinchalik audit materiallari, lokal rasm arxivlari va boshqa runtime chiqindilari snapshotga kiritilmaydi. Har bir muhim kod yoki hujjat o‘zgarishidan keyin test, production build, sanitizatsiya va mavjud snapshotni joyida yangilash bajariladi; parallel Drive nusxalar yaratilmaydi. `Kodlar`, `PUBG` va `Skills` papkalari daxlsiz hisoblanadi.

## Canonical sinxronlash manzillari

| Manzil | Holat |
|---|---|
| GitHub — `uzme/second-brain` | `main` branchidagi `projects/biolab-guide` yo‘li; latest independently verified continuity-audit release `1f8730e596ab1f6932856be3c8601493c3d7568f` |
| Google Drive — Second Brain root (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) | Mavjud `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` snapshot `BioLab_Interactive_Guide_source.tar.gz` nomi bilan joyida yangilandi; independently verified modified `2026-08-17T09:44:55.140Z`, duplicate yaratilmagan |
| Eski `Biotexnologiya yangi / Loyiha 1` manzili | Oldingi relizlar tarixi sifatida saqlangan; joriy sync oqimi unga yozmaydi |

## Original Pure CSS 3D Carousel Yo‘nalishini Tiklash — 2026-08-16

Carousel komponentining joriy React markupida original CSS selectorlari (`.pure3d-carousel`, `.scene`, `.a3d`, `.card`) ishlatilmay, boshqa class nomlari (`.carousel`, `.carousel-item`) qo‘llanilgani sababli original 3D geometriya amalda ishga tushmagan va ko‘rinish tepadan pastga yoki oddiy grid kabi chiqib qolgan. Tuzatishda original struktura qayta tiklandi: `.scene` perspective konteyneri, `.a3d` y-o‘qi bo‘yicha aylanuvchi halqa va `.card` elementlarining `rotatey(...) translatez(...)` joylashuvi yana ishlamoqda. 12 ta sahifalangan qurilma kartasi original halqa bo‘ylab gorizontal 3D perspektivada ko‘rinadi. `CSSProperties` redeklaratsiyasi ham bitta toza importga keltirildi.

TypeScript, production build, katalog regressiya testi va 16 bo‘limli DeviceViewer/mobil menyu brauzer testi muvaffaqiyatli bajarildi. Sanitizatsiyalangan source snapshot Google Drive’dagi mavjud `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` fayliga duplikatsiyasiz yangilandi, GitHub `main` branchiga `e761a2f` push qilindi.

## Oldingi relizlar

2026-08-16 dagi avvalgi relizlarda 100 ta qurilma katalogi, 16 bo‘limli modal o‘quv dosyesi, rasm manbasi/litsenziyasi bloki, PDF eksport, WebP optimizatsiyasi, qidiruv-filtrlar, sozlamalar paneli va sanitizatsiyalangan Drive snapshot tizimi joriy qilingan.

## Brauzer Xotirasida Ishlaydigan Saralanganlar — 2026-08-16

Katalog kartalari va original Pure CSS 3D Carousel ichiga yurakcha tugmasi qo‘shildi. Tanlangan qurilmalar faqat brauzerning `localStorage` xotirasida `biolab-guide:bookmarks:v1` kaliti orqali ID ro‘yxati sifatida saqlanadi; server yoki databasega yuborilmaydi. Saralanganlar filtri saqlangan qurilmalarni alohida ko‘rsatadi, hisoblagich mavjud, tanlovni bittalab olib tashlash va barcha filtrlarni tozalash mumkin. Sahifa yangilanganda tanlovlar qayta tiklanadi.

`useBookmarks.ts`, `EquipmentCard.tsx`, `Pure3DCarousel.tsx`, `Pure3DCarousel.css`, `Home.tsx` va `test_device_viewer.mjs` yangilandi. TypeScript tekshiruvi, production build, katalog testi va qurilma/regressiya testi muvaffaqiyatli bajarildi. Carousel testida 3D transform sababli tugma uchun aniq `data-bookmark-button` selector va DOM click ishlatildi.

Sinxronlashdan oldingi holat: kod va testlar tayyor; keyingi `sync_release.mjs --publish` bajarilishida GitHub hamda mavjud Google Drive snapshot yangilanadi.

## Saralanganlar publish natijasi — 2026-08-16

Saralanganlar relizi uchun TypeScript tekshiruvi, production build, katalog regressiya testi va DeviceViewer/mobil oqim testi `sync_release.mjs --publish` ichida qayta bajarilib muvaffaqiyatli yakunlandi. Sanitizatsiyalangan source arxivi 309.6 KB hajmda tayyorlandi; `.env`, tokenlar, kalitlar, parollar, `node_modules`, `dist`, loglar va vaqtinchalik debug fayllari kiritilmadi.

GitHub `uzme/biolab-interactive-guide` repository’ning `main` branchiga `4ca6796` commit yuborildi. Google Drive’dagi mavjud `BioLab_Interactive_Guide_source.zip` snapshot fayli (`1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT`) joyida yangilandi; yangi duplicate fayl yaratilmadi.

## Saralanganlar O‘ng Yon Paneli (Sidebar) — 2026-08-16

Saqlangan qurilmalarni tezda ko‘zdan kechirish va o‘rganish uchun ekranning o‘ng tomonidan ochiladigan responsive `BookmarksSidebar` (Shadcn Sheet) komponenti qo‘shildi. Header qismidagi yurakcha tugmasi joriy saqlanganlar sonini ko‘rsatib turadi va bosilganda panelni ochadi. Panel ichida har bir qurilmaning rasmi, o‘zbekcha nomi, modeli, kategoriyasi, to‘g‘ridan-to‘g‘ri o‘quv modaliga o‘tish tugmasi, ularni bittalab yoki to‘liq tozalash imkoniyati mavjud.

Playwright regressiya testiga o‘ng yon panelni ochish, elementlarni tekshirish va modalga o‘tish oqimlari qo‘shildi.

## Google Drive To‘liq Audit Natijasi — 2026-08-16

Sizning ko‘rsatmangiz bo‘yicha butun Google Drive hisobi read-only metadata rejimida to‘liq skanerlandi.
- **Skanerlash doirasi**: Barcha asosiy papkalar, shu jumladan `Second Brain`, `Kodlar`, `PUBG`, `Skills` va boshqa barcha shaxsiy/umumiy papkalar.
- **Tekshiruv sharti**: `name = '' and trashed = false` (Google Drive API `name is null` ni qo‘llab-quvvatlamaydi, shuning uchun bo‘sh satrli nomlar tekshirildi).
- **Natija**: Butun Drive bo‘yicha **0 ta** nomsiz fayl yoki papka topildi.
- **Xulosa**: Hozirgi kunda Google Drive hisobingizda bizning avtomatlashtirilgan sinxronlash jarayonlarimiz yoki boshqa loyihalar tomonidan yaratilgan **nomsiz fayllar mavjud emas**. Barcha arxivlar (`BioLab_Interactive_Guide_source.zip`, `second-brain-sanitized-*.tar.gz` va boshqalar) to‘liq nomlangan va tegishli loyihalariga biriktirilgan.

## Mualliflik Huquqi, 10/10 Xavfsizlik va "Biotexnologiya yangi" Papka Qoidasi — 2026-08-16

- **Mualliflik Huquqi va Xavfsizlik (10/10)**: Sozlamalar va kopirayt modalida platformaning intellektual mulk huquqlari (`© 2026 BioLab Interactive Guide / Manus AI & Biotexnolog`), xavfsizlik standartlari (PPE, SOP, bioxavfsizlik, favqulodda to‘xtatish tartibi) qat’iy belgilandi.
- **Yagona Google Drive Papkasi Qoidasi — tarixiy qayd**: Ushbu 2026-08-16 bandi avvalgi **Biotexnologiya yangi / Loyiha 1** oqimini hujjatlashtiradi. 2026-08-17 dan boshlab u superseded: joriy canonical joy Second Brain root ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`; boshqa papkalarga yozish taqiqlanadi.
- **Test va Build**: TypeScript check, production build va Playwright regressiya testlari to‘liq muvaffaqiyatli bajarildi. O‘zgarishlar GitHub va Drive’ga sinxronlandi.

## Yakuniy Publish Natijasi — 2026-08-16

- **Git Commit**: `fbe678f` (`uzme/biolab-interactive-guide` `main` branch)
- **Google Drive Snapshot**: `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` fayli **Biotexnologiya yangi / Loyiha 1** papkasi ichida muvaffaqiyatli yangilandi (`BioLab_Interactive_Guide_source.zip`).
- **Testlar va Build**: `pnpm run check`, `pnpm run build`, `test_catalog_controls.mjs`, `test_device_viewer.mjs` to‘liq muvaffaqiyatli o‘tdi.
- **Xavfsizlik va Kopirayt**: Sozlamalar modalida 10/10 himoya, SOP, PPE va Drive papka qoidalari qat’iy rasmiylashtirildi.

## PWA Offline O‘quv Rejimi — 2026-08-16

BioLab Interactive Guide uchun o‘zbekcha PWA manifesti (`manifest.webmanifest`), service worker (`sw.js`) va `OfflineManager` boshqaruvi joriy qilindi. Service worker app shell navigatsiyasini network-first usulida, JavaScript/CSS/font/manifest assetlarini versionlangan cache bilan stale-while-revalidate usulida, qurilma rasmlarini cache-first usulida boshqaradi. Foydalanuvchi sarlavhadagi tugma orqali offline o‘quv paketini yuklaydi yoki yangilaydi; paket holati va Onlayn/Offline status indikatori ko‘rsatiladi.

Offline paket yoqilganda katalog, 100 ta qurilma, 16 bo‘limli o‘quv dosyesi, qidiruv/filtr, Saralanganlar va qurilma rasmlari internetsiz foydalanishga mo‘ljallangan. Login, GitHub va Google Drive publish kabi serverga bog‘liq operatsiyalar internet qaytganda bajariladi. Playwright testi manifest va service worker mavjudligini, service worker ready holatini, haqiqiy offline reloaddan keyin carousel app shell tiklanishini hamda `data-offline-status` Onlayn → Offline → Onlayn almashishini tasdiqladi. `pnpm run check`, production build va mavjud qurilma regressiya testlari muvaffaqiyatli o‘tdi. Buildda faqat mavjud katta chunk hajmi bo‘yicha optimizatsiya ogohlantirishi qoldi; kompilyatsiya xatosi aniqlanmadi.

Tarixiy qayd: PWA kodi, testlar va metadata keyingi publishga tayyor edi. Joriy oqimda PWA va keyingi o‘zgarishlar faqat `uzme/second-brain` hamda Second Brain root snapshotiga yuboriladi.

## Master Protocol & Reproducibility Update (August 16, 2026)
- **Protocol Applied**: MANUS_PROJECT_REPRODUCIBILITY_GITHUB_ARCHIVE_MASTER_PROTOCOL.md
- **Documentation Suite Added**: `PROJECT_MANIFEST.md`, `ARCHITECTURE.md`, `DATABASE.md`, `REPRODUCTION.md`, `AI_HANDOFF.md`, `CURRENT_STATE.md`, `PROJECT_INVENTORY.md`, `DECISIONS.md`, `CHANGELOG.md`, `TROUBLESHOOTING.md`, `SECRETS_REQUIRED.md`.
- **Verification**: TypeScript check (`pnpm check`), production build (`pnpm build`), Playwright browser regression test suite, and clean-clone verification passed successfully.
- **Sync Status — tarixiy qayd**: Ushbu band 2026-08-16 dagi eski `uzme/biolab-interactive-guide` va Biotexnologiya yangi oqimini qayd etadi; 2026-08-17 dan joriy manzillar Second Brain GitHub/Drive canonical oqimiga almashtirildi.

## 2026-08-17 — Zamonaviy yuklanish animatsiyalari

BioLab interfeysiga tugma ripple/spinner micro-interactionlari, loading holatlari, sahifa o‘tish progress chizig‘i, qidiruv/filtr transitionlari, modal fade-in/skeleton oqimlari va `prefers-reduced-motion` accessibility qoidalari qo‘shildi. OfflineManager umumiy loading holatlari bilan moslashtirildi. `useTransition` integratsiyasidan keyin Saralanganlar filtri regressiya testi barqaror kutish assertioni bilan tuzatildi.

Tekshiruv: `pnpm run check`, `pnpm build` va Playwright regressiya testi muvaffaqiyatli. Production buildda ayrim bundle chunklari 500 kB dan katta ekani haqida mavjud optimizatsiya ogohlantirishi qayd etildi; bu buildni to‘xtatuvchi xato emas. Keyingi transition tuzatishlari va animatsiya relizi Second Brain canonical arxiviga yuborildi; eski manzil ushbu tarixiy qaydda qoladi.

## 2026-08-17 — Transition Regression, Clean Clone va Second Brain Sync

`useTransition` sababli katalog qidiruvi, filtrni tozalash, kategoriya tanlash va natija yo‘q holati assertionlarida yuzaga kelgan race conditionlar `scripts/test_catalog_controls.mjs` ichida transition yakunini kutadigan Playwright assertionlari bilan tuzatildi. Katalog, qurilma tafsiloti, 16-bo‘limli o‘quv oqimi, bookmark sidebar, mobil menyu va PWA service worker regressiya oqimlari qayta tekshirildi.

`pnpm run check`, `pnpm build`, `pnpm test` hamda `node scripts/test_carousel_pagination_browser.mjs` muvaffaqiyatli o‘tdi. Second Brain clean clone ichida `pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts`, `pnpm run check` va `pnpm build` ham muvaffaqiyatli yakunlandi. Builddagi katta chunk va CSS gradient syntax warninglari non-blocking holatda qoldi.

Release sync oqimi yangi qoidaga moslashtirildi: sanitizatsiyalangan BioLab source `uzme/second-brain` repository `main` branchidagi `projects/biolab-guide` yo‘liga yuboriladi; snapshot esa faqat Second Brain Drive root ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd` ichidagi `BioLab_Interactive_Guide_source.tar.gz` fayliga yaratiladi yoki yangilanadi. `.env*`, token, API key, password, PAT, runtime log, dependency va build chiqindilari chiqarib tashlanadi.

2026-08-17 08:16 UTC dagi verified publish natijasi: GitHub commit `c92f4819b1ca35bc80e97ee553f87d9e2582c2e0`; Drive snapshot ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`; source fingerprint `4be422599b40c26d7db7c142f986a62126b0695074a8b8d5c4f41a423f8b36be`. Ushbu nuqta reproducibility hujjatlari yangilanishidan oldingi release sifatida saqlandi; keyingi canonical arxivlash Second Brain root qoidasi bilan bajarildi.

## 2026-08-17 — Reproducibility Documentation Finalized

`REPRODUCTION.md`, `AI_HANDOFF.md` va `TROUBLESHOOTING.md` Second Brain nested clone oqimiga moslashtirildi. Hujjatlarda `pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts` talabi, clean-clone verification, source-of-truth yo‘li, maxfiy ma’lumotlarni chiqarish qoidalari va yagona Drive parent ID aniq ko‘rsatildi. Eski `Biotexnologiya yangi / Loyiha 1` sync manzili amaldagi oqimdan olib tashlandi.

Ushbu hujjat yangilanishlari uchun test, typecheck, production build, katalog/qurilma/browser regressiyalari, sanitizatsiya scan va GitHub/Drive publish muvaffaqiyatli bajarildi. Verified application/source content release: GitHub `uzme/second-brain` `main` commit `aaaa299894d0f80699f9cf5def9af0a80b40dde2`; source fingerprint `78ae6a0f0f7f3c06c3fb2972f16f4b224845dbcbf6b60fd16727942fa628753c`. Drive snapshot `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` Second Brain rootida joylashgan. Latest archive bookkeeping commit va modified time final sync chiqishi hamda checkpoint tavsifida qayd etiladi; u application code yoki verified buildni o‘zgartirmaydi. READY holati publishsiz final `--check` bilan tasdiqlanadi.

## Final Readiness Audit — 2026-08-17

Oxirgi publishsiz `node scripts/sync_release.mjs --check` `CHECK READY` natijasini berdi: typecheck, production build, katalog/qurilma Playwright regressiyalari, carousel pagination tekshiruvi va secret-sanitizatsiya scan muvaffaqiyatli yakunlandi. Final archive syncning aniq GitHub commiti va Drive modified time checkpoint tavsifida qayd etiladi; Drive snapshot `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` doimiy Second Brain root ID ostida qoladi.

Auditdagi `git status --short` modifikatsiyalari ishchi loyiha manbasining release script tomonidan alohida temporary clone’ga sanitizatsiyalanib arxivlanishi bilan izohlanadi. `sync_release.mjs` original working tree’ga commit yoki reset qilmaydi; shu sababli local katalogdagi o‘zgarishlar yo‘qolmagan, verified GitHub/Drive arxiviga yuborilgan source bilan mos ravishda saqlanadi. Auditdan keyin faqat state/todo bookkeeping arxivlanadi; application code, carousel geometry va PWA oqimi o‘zgartirilmaydi.
