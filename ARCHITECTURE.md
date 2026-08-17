# BioLab Interactive Guide — Architecture Documentation

## System Architecture

BioLab Interactive Guide React 19, TypeScript, Vite 7 va Tailwind CSS 4 asosidagi full-stack web ilovadir. Frontend interaktiv katalog, original horizontal Pure CSS 3D carousel, 16 bo‘limli qurilma dosyesi, Saralanganlar sidebar’i va PWA offline holatini taqdim etadi. Backend Express, tRPC 11, Drizzle ORM va MySQL/TiDB compatibility qatlamidan foydalanadi.

## Frontend Architecture

`client/src/pages/Home.tsx` katalog shell’ini, qidiruv/filtr boshqaruvlarini va o‘quv modaliga kirishni boshqaradi. `Pure3DCarousel.tsx` original `.pure3d-carousel`, `.scene`, `.a3d` va `.card` geometriyasini saqlaydi. `DeviceViewer.tsx` 16 bosqichli o‘quv dosyesini, `EquipmentCard.tsx` qurilma metadata sini, `BookmarksSidebar.tsx` browser localStorage asosidagi Saralanganlar oqimini, `OfflineManager.tsx` esa PWA holati va offline paket boshqaruvini ta’minlaydi.

## Backend, Data & Storage

Server tRPC orqali type-safe contractlarni taqdim etadi. Drizzle schema va migration metadata `drizzle/` ichida saqlanadi; production database ma’lumotlari arxivga kiritilmaydi. Qurilma katalogi va o‘quv mazmuni structured TypeScript datasetlaridan keladi. Media assetlar S3/Drive canonical manzillarida saqlanadi; runtime snapshotlar va katta binary fayllar source archive ichiga nazoratsiz ko‘chirilmaydi.

## PWA & Client Persistence

`manifest.webmanifest` installable app metadata sini, `sw.js` esa navigation/asset cache strategiyasini boshqaradi. Bookmarklar `localStorage`da qoladi va serverga yuborilmaydi. Offline status va paket holati foydalanuvchiga ko‘rinadigan Uzbek interfeys orqali beriladi.

## Deployment & Synchronization Flow

`node scripts/sync_release.mjs --check` typecheck, production build, katalog/qurilma regressiya testlari va sanitizatsiya fingerprintini tekshiradi. `--publish` shu tekshiruvdan keyin maxfiy va runtime fayllarsiz snapshotni GitHub `uzme/second-brain` repository’sining `main/projects/biolab-guide` yo‘liga hamda Google Drive’dagi yagona Second Brain root ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd` ichidagi mavjud canonical snapshotga yuboradi. Eski `uzme/biolab-interactive-guide` va `Biotexnologiya yangi / Loyiha 1` manzillari faqat tarixiy qaydlar sifatida qoladi; joriy workflow ularga yozmaydi.

## Reproducibility Boundary

Source code, schema, tests va documentation GitHub’da; images, screenshots, PDFs, large archives va reference assets Drive’da; real credentials esa secure environment’da saqlanadi. `DRIVE_INDEX.md`, `GITHUB_INDEX.md` va `RESTORATION_MAP.md` uch qatlamni qayta tiklash uchun o‘zaro bog‘laydi.
