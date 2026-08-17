# BioLab Interactive Guide TODO

## Yakunlangan Asosiy Vazifalar
- [x] 100 ta biotexnologiya qurilmasi va 16 bo‘limli o‘quv platformasi
- [x] GitHub va Google Drive sinxronlash avtomatizatsiyasi (sync_release.mjs)
- [x] Rasm shaffofligi va litsenziya bloki
- [x] Mobil rasm preloadi, lazy-loading va fallback
- [x] PDF eksport funksiyasi
- [x] Sozlamalar va mualliflik huquqi (Copyright) paneli
- [x] Pure 3D Carousel va barcha 100 qurilma kengaytmasi
- [x] Qurilma to‘liq xususiyatlari modal oynasi va 16 bo‘limli o‘quv dosyesi

## Joriy Reliz va Sinxronizatsiya
- [x] TypeScript tekshiruvi va production build muvaffaqiyatli bajarildi (`dist/` yaratildi)
- [x] Regression testlar (`test_catalog_controls.mjs`, `test_device_viewer.mjs`) muvaffaqiyatli o‘tdi
- [x] Sanitizatsiyalangan source snapshot Google Drive’dagi **Biotexnologiya yangi / Loyiha 1** papkasiga (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) va mavjud `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` fayliga duplikatsiyasiz yangilandi
- [x] GitHub uzme/biolab-interactive-guide `main` branchiga (`df4cd7e`) push qilindi
- [x] PROJECT_STATE.md va todo.md metadata yangilandi

## Pure 3D Carousel Geometriyasini Asl Namuna Boyicha Tiklash
- [x] Pure3DCarousel.css va Pure3DCarousel.tsx da kartalarning vertikal ("tepadan pastga") emas, balki original 3D aylanish geometriyasiga mos kelishini ta’minlash
- [x] TypeScript va production build tekshiruvini bajarish
- [x] Playwright regressiya testlarini o‘tkazish
- [x] GitHub va Google Drive ga sanitizatsiyalangan snapshotni sinxronlash (`e761a2f`, Drive file `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT`)

## Brauzer Xotirasida Ishlaydigan "Saralanganlar" (Bookmarks) Funksiyasi
- [x] localStorage orqali saqlanadigan saralangan qurilmalar ID ro‘yxatini state va hooklar orqali boshqarish
- [x] Qurilma kartalari va Pure3DCarousel da yurakcha (bookmark) tugmasini qo‘shish
- [x] Katalog filtrlarida "Saralanganlar" tugmasini yaratish va faqat saqlangan qurilmalarni ko‘rsatish
- [x] Playwright testlariga saralanganlar funksiyasini qo‘shish
- [x] TypeScript va production build tekshiruvidan o‘tkazib GitHub va Google Drive ga sinxronlash (`4ca6796`, Drive file `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT`)

## Saralanganlar O‘ng Yon Paneli (Sidebar) Funksiyasi
- [x] Saralanganlar o‘ng yon paneli komponentini (`BookmarksSidebar.tsx`) yaratish
- [x] Home.tsx da o‘ng panelni ochish/yopish state va header tugmasini ulash
- [x] Panel ichida saqlangan qurilmalarni ko‘rsatish, bittalab yoki to‘liq tozalash va to‘g‘ridan-to‘g‘ri o‘quv modaliga o‘tishni ta’minlash
- [x] Playwright testlariga o‘ng yon panelni ochish va sinash tekshiruvlarini kiritish
- [x] TypeScript, production build, GitHub va Google Drive ga sinxronlashni yakunlash (`e37afcb`, Drive file `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT`)

## Google Drive To‘liq Nomsiz Obyektlar Auditi
- [x] Butun Google Drive bo‘ylab read-only metadata rejimida skanerlash (`name = ''` yoki `name is null`)
- [x] Topilgan nomsiz fayl yoki papkalarning ID, egasi, yaratilgan vaqti va parent papkasini aniqlash
- [x] Obyektlarning qaysi loyihaga tegishli ekanligini aniqlab batafsil hisobot tayyorlash (`0` ta nomsiz obyekt aniqlandi)

## Mualliflik Huquqi, 10/10 Xavfsizlik va "Biotexnologiya yangi" Papka Qoidasi
- [x] Sozlamalar va mualliflik huquqi modalida qat’iy litsenziya, xavfsizlik (SOP/PPE/Biohazard) standartlari va 10/10 himoya qoidalarini shakllantirish
- [x] `sync_release.mjs` skriptini tekshirib, barcha fayl va snapshotlar faqat "Biotexnologiya yangi" papkasi (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) doirasida ishlashini kafolatlash
- [x] PROJECT_STATE.md va loyiha ko‘rsatmalariga qoidani yozib qo‘yish
- [x] TypeScript, production build, Playwright testlari va sanitizatsiyalangan release sinxronizatsiyasini bajarish (`b6d91f2`)

## Pure3DCarousel Xatosini Tuzatish va Original Holatga Qaytarish
- [x] `Pure3DCarousel.tsx` da `.pure3d-carousel` tashqi wrapperini tiklash va rasm URL logikasini to‘g‘rilash
- [x] TypeScript check va production build bajarish
- [x] Playwright regressiya testlarini yangilash va o‘tkazish
- [x] GitHub va Google Drive ga sanitizatsiyalangan snapshotni sinxronlash (`1e6a4ca`, Drive file `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT`)

## PWA Offline O‘quv Rejimi va Kesh Boshqaruvi
- [x] `public/manifest.webmanifest` faylini yaratish va `index.html` ga PWA meta teglarni qo‘shish
- [x] `public/sw.js` (Service Worker) yaratish va offline kesh strategiyasini yozish
- [x] `client/src/components/OfflineManager.tsx` orqali foydalanuvchiga offline paketni yuklab olish, kesh holatini ko‘rsatish va yangilash imkoniyatini berish
- [x] Home.tsx va sarlavhaga offline boshqaruv tugmasi va status indikatorini ulash
- [x] TypeScript, production build va Playwright testlari bajarildi; Drive sync yangi Second Brain root siyosatiga ko‘chirildi (eski papka talabi superseded)

- [x] Service worker’da versionlangan build app-shell assetlarini (JS/CSS/font) cache qilish va offline reload oqimini test bilan tasdiqlash
- [x] OfflineManager/Home header’da aniq online/offline status indikatorini ko‘rsatish va holat almashishini brauzer testida tekshirish

> Yuqoridagi ikki band avvalgi PWA implementatsiyasi auditi davomida aniqlangan qo‘shimcha tuzatishlardir; mavjud bandlar tarix sifatida saqlanadi.

- [x] Playwright testida service worker cache orqali haqiqiy offline reload va app shell tiklanishini assert qilish
- [x] Playwright testida `data-offline-status` atributi va Onlayn → Offline holat almashishini assert qilish

## Master Protocol Reproduktibilitet va Hujjatlashtirish
- [x] MANUS_PROJECT_REPRODUCIBILITY_GITHUB_ARCHIVE_MASTER_PROTOCOL.md protokolini o‘qib to‘liq audit qilish
- [x] SOURCE_OF_TRUTH asosida `PROJECT_MANIFEST.md`, `ARCHITECTURE.md`, `DATABASE.md`, `REPRODUCTION.md`, `AI_HANDOFF.md`, `CURRENT_STATE.md`, `PROJECT_INVENTORY.md`, `DECISIONS.md`, `CHANGELOG.md`, `TROUBLESHOOTING.md`, `SECRETS_REQUIRED.md` hujjatlarini yaratish
- [x] todo.md dagi barcha vazifalarni yangi tizim bilan birlashtirish va hech qanday funksiyani yo‘qotmaslik
- [x] Secrets siyosatiga rioya qilgan holda kodni o‘zgartirmasdan saqlash
- [x] Build, typecheck, test va clean-clone reproducibility verificationni bajarish
- [x] READY / NOT READY hisoboti va sanitizatsiyalangan GitHub/Drive release sinxronizatsiyasini yakunlash

## Zamonaviy Yuklanish Animatsiyalari va Micro-Interactions (2026-08-17)
- [x] Tugmalar uchun bosilganda ripple/spinner va zamonaviy transition animatsiyalarini joriy qilish
- [x] Katta ma’lumotlar yoki modallar ochilganda yumshoq skeleton/fade-in o‘tishlarini qo‘shish
- [x] Sahifa bo‘ylab navigatsiya va qidiruv/filtr o‘tishlarida o‘qishni chalg‘itmaydigan shaffof yuklanish chizig‘i (loading bar) yaratish
- [x] `prefers-reduced-motion` qoidasiga to‘liq amal qilgan holda accessibility auditini o‘tkazish
- [x] TypeScript, production build, Playwright testlari va "Biotexnologiya yangi" Drive papkasiga sinxronlashni bajarish (`pending-sync`)

- [x] Playwright reduced-motion tekshiruvida pseudo-element uchun yaroqsiz CSS selectorni DOM computed-style tekshiruviga almashtirish

- [x] `useTransition` filter integratsiyasidan keyin Saralanganlar filtri regressiya testidagi faqat saqlangan qurilma ko‘rinishi muammosini tuzatish

- [x] Zamonaviy yuklanish animatsiyalari o‘zgarishlarini sanitizatsiyalangan holda `uzme/second-brain` va Second Brain Drive snapshotiga publish qilish (eski papka talabi superseded)
- [x] Loading animatsiyalari relizi uchun PROJECT_STATE.md ni sync natijasi va READY/NOT READY holati bilan yangilash
- [x] PROJECT_STATE.md va CURRENT_STATE.md ni oxirgi 57b4133ad9ed2a070b7bede3e3dca2d96f8915fb commit hamda 2026-08-17T08:36:36.367Z Drive natijasi bilan yangilash
- [x] READY/CHECK READY hisobotini final canonical holat va loading animatsiyalari metadata si bilan moslashtirish
- [x] State hujjatlari yangilangach bitta final publish va undan keyin publishsiz `--check` verificationini bajarish
- [x] PROJECT_STATE.md ning yuqori qismidagi eskirgan Biotexnologiya yangi manzillarini tarixiy qayd sifatida aniq belgilab, Second Brain rootni joriy canonical manzil qilish
- [x] PROJECT_STATE.md va CURRENT_STATE.md dagi 57b4133/08:36 final metadata o‘zgarishlarini canonical GitHub/Drive arxiviga sync qilish
- [x] Oxirgi state hujjati yangilanishlaridan keyin publishsiz `node scripts/sync_release.mjs --check` bilan READY/CHECK READY holatini qayta tasdiqlash
- [x] Final sync va final `--check` natijasini checkpoint tavsifida commit/timestamp bilan qayd etish
- [x] Protocol auditida missing `DRIVE_INDEX.md` va `RESTORATION_MAP.md` aniqlanib yaratildi
- [x] Protocol talabidagi `GITHUB_INDEX.md` cross-link faylini yaratish va real URL/commit ma’lumotlari bilan to‘ldirish
- [x] Barcha majburiy GitHub hujjatlari va GitHub↔Drive cross-linklarini final verify qilish; `.env.example` system policy exceptioni `CONTINUITY_AUDIT.md`da qayd etildi
- [x] PROJECT_MANIFEST.md dagi eski release, deployment va test tavsiflarini verified current state bilan moslashtirish
- [x] PROJECT_MANIFEST.md va boshqa docs uchun production build/checkdan keyin canonical syncni qayta bajarish
- [x] `.env.example` bo‘yicha protokol talabi uchun xavfsiz placeholder-template o‘rniga system security policy cheklovi va NOT READY/exception holati `CONTINUITY_AUDIT.md`, `PROJECT_STATE.md` va `CURRENT_STATE.md`da hujjatlashtirildi
- [x] GitHub Dependabot auditida qayd etilgan repository warninglari bo‘yicha dependency review: lokal `pnpm audit` 129 advisory (2 critical, 44 high, 74 moderate, 9 low) bilan hujjatlashtirildi; GitHub API 403 exceptioni qayd etildi
- [x] Production builddagi katta chunklar uchun code-splitting boundarylari qo‘shildi; dossier data 731.06 kB intentional data chunk sifatida `CONTINUITY_AUDIT.md`da qayd etildi
- [x] `package.json` dagi eski `pnpm` konfiguratsiyasini `pnpm-workspace.yaml` ga pnpm 10 settings formatida ko‘chirish
- [x] Majburiy hujjatlar auditi `.env.example` holati bilan qayta tekshirildi; system policy exception sabab status `READY WITH EXCEPTION` sifatida yopildi
- [x] `pnpm audit` lokal dependency auditini bajarib, topilmalarni severity va paket kesimida `CONTINUITY_AUDIT.md`ga hujjatlashtirish
- [x] Dependabot API 403 permission exceptionini `CONTINUITY_AUDIT.md`da qayd etib, dependency review holatini aniq chegaralash
- [x] Barcha majburiy GitHub hujjatlari va GitHub↔Drive cross-linklarini so‘nggi docs o‘zgarishlaridan keyin avtomatlashtirilgan final audit bilan tekshirish
- [x] RESTORATION_MAP.md ga canonical GitHub URL va Second Brain Drive root ID ni qo‘shib automated auditni READY WITH EXCEPTION holatiga olib chiqish
- [x] `.env.example` exceptioni bilan yakuniy majburiy hujjatlar xulosasini PROJECT_STATE.md va CURRENT_STATE.md da READY WITH EXCEPTION sifatida qayta qayd etish
- [x] `CONTINUITY_AUDIT.md` orqali audit qamrovi, topilmalar, protocol exception va NOT READY sababini project arxiviga kiritish
- [x] `CONTINUITY_AUDIT.md`, `PROJECT_STATE.md` va `CURRENT_STATE.md` dagi continuity audit o‘zgarishlarini canonical GitHub/Drive arxiviga publish qilish
- [x] Publishdan keyin GitHub tree va Drive snapshot metadata orqali `CONTINUITY_AUDIT.md` arxivga kirganini alohida tasdiqlash
- [x] PROJECT_STATE.md, CURRENT_STATE.md, DRIVE_INDEX.md va GITHUB_INDEX.md ni 31f15ba/2026-08-17T09:24:40.598Z verified archive holati bilan moslashtirish
- [x] Automated `verify_continuity_docs.mjs` natijasini `CONTINUITY_AUDIT.md`, `PROJECT_STATE.md` va `CURRENT_STATE.md`da 2026-08-17T09:38:10.326Z bilan qayd etish
- [x] Automated auditdan keyin bitta final canonical sync va publishsiz post-sync verificationni bajarish
- [x] Final metadata update’dan keyin bitta publish va publishsiz check bilan checkpointga tayyor holatni tasdiqlash
- [x] Final state/index/todo metadata o‘zgarishlarini canonical GitHub/Drive arxiviga yana bir marta sync qilish
- [x] So‘nggi metadata syncdan keyin publishsiz `verify_continuity_docs.mjs` va `sync_release.mjs --check`ni bajarib checkpointga tayyorlikni tasdiqlash
- [x] 2026-08-17T09:40:57.343Z automated auditdan keyin `node scripts/sync_release.mjs --publish` bilan canonical GitHub/Drive syncni bajarish
- [x] Ushbu publishdan keyin `node scripts/sync_release.mjs --check` bilan post-sync verificationni tasdiqlash
- [x] Final publish commit hash va Drive modified time ni PROJECT_STATE.md / CURRENT_STATE.md ga qayd etish
- [x] README.md dagi eski CI/repository badge, TypeScript versiyasi va validation ko‘rsatmalarini current source-of-truth bilan moslashtirish
- [x] ARCHITECTURE.md va CHANGELOG.md dagi eski Biotexnologiya yangi/uzme-biotech sync manzillarini tarixiy yoki current Second Brain oqimiga moslab tuzatish

- [x] Catalog regressiya testida qidiruvni tozalashdan keyingi `useTransition` re-render yakunini kutish assertionini qo‘shish

- [x] Catalog regressiya testida kategoriya tanlangandan keyin `useTransition` re-render yakunini kutish assertionini qo‘shish
- [x] Catalog regressiya testida natija yo‘q holati (`Qurilma topilmadi`) render bo‘lishini transition yakunigacha kutish

- [x] Release sync oqimini Second Brain Drive root ID va `uzme/second-brain` main repository qoidalariga moslashtirish
- [x] Sync runner bo‘sh stdout qaytarganda `null.trim()` xatosiga tushmasligini ta’minlash
- [x] Drive metadata chaqiruvlarida loyiha yo‘li noto‘g‘ri CLI argumenti sifatida yuborilmasligini ta’minlash
- [x] gws upload snapshot yo‘li joriy katalogdan tashqarida bo‘lsa ham xavfsiz ishlashini ta’minlash
- [x] Clean-clone reproducibility tekshiruvida nested BioLab workspace dependency o‘rnatilishini to‘g‘ri bajarish
- [x] Yakuniy test/build, clean-clone va Second Brain sync natijalarini PROJECT_STATE.md hamda CURRENT_STATE.md ga qayd etish
- [x] PROJECT_STATE.md dagi publish metadata sini yakuniy de44a20 commit va Drive timestamp bilan moslashtirish
- [x] Clean-clone uchun `pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts` oqimini REPRODUCTION.md, AI_HANDOFF.md va TROUBLESHOOTING.md ga yozish
- [x] Nested BioLab clean-clone verification buyruqlarini avtomatlashtirilgan yoki hujjatlashtirilgan oqim sifatida qayta tekshirish
- [x] PROJECT_STATE.md va CURRENT_STATE.md ni aaaa299894d0f80699f9cf5def9af0a80b40dde2 hamda 2026-08-17T08:26:40.774Z Drive natijasi bilan moslashtirish
- [x] Yakuniy metadata-only syncni bajarib, content release va metadata sync farqini qayd etish
- [x] PROJECT_STATE.md va CURRENT_STATE.md ni haqiqiy 32c4e943b3351a54925b7163b76e4832a9ac3306 hamda 2026-08-17T08:29:01.223Z Drive natijasi bilan yangilash
- [x] Content release commiti va metadata-only sync commit/timestamp farqini ikkala state hujjatida aniq qayd etish
- [x] Metadata hujjatlari yangilangach yangi publish qilmasdan yakuniy checkpointga tayyor holatni tekshirish
- [x] Metadata hujjatlari yangilangach publishsiz final readiness auditini bajarish va natijani state hujjatlarida qayd etish
- [x] CHECK READY audit natijasini PROJECT_STATE.md va CURRENT_STATE.md ga aniq yozish
- [x] Local working tree modified holatini arxivlash va state hujjatlarida tushuntirish
- [x] PROJECT_STATE.md va CURRENT_STATE.md dagi final audit hamda working-tree izohlarini GitHub/Drive arxiviga sync qilish
- [x] Final syncdan keyin canonical commit va Drive modified time ni checkpoint uchun tasdiqlash
- [x] So‘nggi todo exception statusi o‘zgarishini canonical GitHub/Drive snapshotiga sync qilish
- [x] So‘nggi todo syncdan keyin publishsiz `verify_continuity_docs.mjs` va `sync_release.mjs --check`ni bajarish
