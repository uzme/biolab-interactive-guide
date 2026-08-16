# BioLab Interactive Guide — loyiha holati

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Oxirgi tasdiqlangan web checkpoint | `49db349e` |
| Git commit | GitHub `main` branchidagi joriy carousel tuzatishi: `e761a2f` |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Oxirgi tekshiruv | TypeScript tekshiruvi, production build, katalog, qurilma-tafsiloti va original carousel class regressiya testlari muvaffaqiyatli bajarildi |

## Sinxronlash qoidasi

Tekshirilgan manba kodlari va hujjatlar faqat yangi GitHub repository hamda Google Drive’dagi **Biotexnologiya yangi / Loyiha 1** papkasiga yuboriladi. `node_modules`, `dist`, `.git`, `.env*`, loglar, vaqtinchalik audit materiallari, lokal rasm arxivlari va boshqa runtime chiqindilari snapshotga kiritilmaydi. Har bir foydalanuvchi tasdiqlagan yakuniy kod yoki hujjat o‘zgarishidan keyin mavjud snapshot yangilanadi; Drive’da parallel nusxalar yaratilmaydi.

## Rejalashtirilgan sinxronlash manzillari

| Manzil | Holat |
|---|---|
| GitHub — `uzme/biolab-interactive-guide` | Joriy carousel tuzatishi `main` branchiga `e761a2f` commit bilan yuborildi |
| Google Drive — “Biotexnologiya yangi / Loyiha 1” (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) | Mavjud `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` snapshot fayli joyida yangilanadi; parallel nusxa yaratilmaydi |
| Google Drive — qayta foydalanish rasm arxivi | `1QuDHKjR8FuMz72en8wjOudrk1Quj0dqk` — `BioLab_Interactive_Guide_images.zip` alohida, maqsadli rasm arxivi sifatida saqlanadi |

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
- **Yagona Google Drive Papkasi Qoidasi**: Barcha loyiha fayllari, snapshotlar va arxivlar faqat yagona **Biotexnologiya yangi** asosiy Google Drive papkasi (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) va uning `Loyiha 1` subpapkasi doirasida boshqariladi. Boshqa papkalarda BioLab fayllari yaratilmaydi va mavjud snapshotlar faqat shu papka ichida duplikatsiyasiz yangilanadi.
- **Test va Build**: TypeScript check, production build va Playwright regressiya testlari to‘liq muvaffaqiyatli bajarildi. O‘zgarishlar GitHub va Drive’ga sinxronlandi.

## Yakuniy Publish Natijasi — 2026-08-16

- **Git Commit**: `fbe678f` (`uzme/biolab-interactive-guide` `main` branch)
- **Google Drive Snapshot**: `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` fayli **Biotexnologiya yangi / Loyiha 1** papkasi ichida muvaffaqiyatli yangilandi (`BioLab_Interactive_Guide_source.zip`).
- **Testlar va Build**: `pnpm run check`, `pnpm run build`, `test_catalog_controls.mjs`, `test_device_viewer.mjs` to‘liq muvaffaqiyatli o‘tdi.
- **Xavfsizlik va Kopirayt**: Sozlamalar modalida 10/10 himoya, SOP, PPE va Drive papka qoidalari qat’iy rasmiylashtirildi.

## PWA Offline O‘quv Rejimi — 2026-08-16

BioLab Interactive Guide uchun o‘zbekcha PWA manifesti (`manifest.webmanifest`), service worker (`sw.js`) va `OfflineManager` boshqaruvi joriy qilindi. Service worker app shell navigatsiyasini network-first usulida, JavaScript/CSS/font/manifest assetlarini versionlangan cache bilan stale-while-revalidate usulida, qurilma rasmlarini cache-first usulida boshqaradi. Foydalanuvchi sarlavhadagi tugma orqali offline o‘quv paketini yuklaydi yoki yangilaydi; paket holati va Onlayn/Offline status indikatori ko‘rsatiladi.

Offline paket yoqilganda katalog, 100 ta qurilma, 16 bo‘limli o‘quv dosyesi, qidiruv/filtr, Saralanganlar va qurilma rasmlari internetsiz foydalanishga mo‘ljallangan. Login, GitHub va Google Drive publish kabi serverga bog‘liq operatsiyalar internet qaytganda bajariladi. Playwright testi manifest va service worker mavjudligini, service worker ready holatini, haqiqiy offline reloaddan keyin carousel app shell tiklanishini hamda `data-offline-status` Onlayn → Offline → Onlayn almashishini tasdiqladi. `pnpm run check`, production build va mavjud qurilma regressiya testlari muvaffaqiyatli o‘tdi. Buildda faqat mavjud katta chunk hajmi bo‘yicha optimizatsiya ogohlantirishi qoldi; kompilyatsiya xatosi aniqlanmadi.

Sinxronlashdan oldingi holat: PWA kodi, testlar va metadata tayyor; keyingi `sync_release.mjs --publish` bajarilishida GitHub `main` hamda mavjud `Biotexnologiya yangi / Loyiha 1` snapshot fayli duplikatsiyasiz yangilanadi.
