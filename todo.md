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
