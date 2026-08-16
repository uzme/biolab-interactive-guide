# BioLab Interactive Guide — loyiha holati

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Oxirgi tasdiqlangan web checkpoint | `b5a1aa4a` |
| Git commit | GitHub `main` branchida sinxronlash metadata-si bilan qayd etilgan joriy versiya |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Oxirgi tekshiruv | TypeScript tekshiruvi, production build, katalog hamda qurilma-tafsiloti brauzer testlari muvaffaqiyatli bajarildi |

## Sinxronlash qoidasi

Tekshirilgan manba kodlari va hujjatlar faqat yangi GitHub repository hamda Google Drive’dagi **Biotexnologiya yangi / Loyiha 1** papkasiga yuboriladi. `node_modules`, `dist`, `.git`, `.env*`, loglar, vaqtinchalik audit materiallari, lokal rasm arxivlari va boshqa runtime chiqindilari snapshotga kiritilmaydi. Har bir foydalanuvchi tasdiqlagan yakuniy kod yoki hujjat o‘zgarishidan keyin mavjud snapshot yangilanadi; Drive’da parallel nusxalar yaratilmaydi.

## Rejalashtirilgan sinxronlash manzillari

| Manzil | Holat |
|---|---|
| GitHub — `uzme/biolab-interactive-guide` | Yangi public repository yaratildi; tekshirilgan manba kodi `main` branchiga yuborildi |
| Google Drive — “Biotexnologiya yangi / Loyiha 1” (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) | Mavjud `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` snapshot fayli joyida yangilandi; parallel nusxa yaratilmagan |
| Google Drive — qayta foydalanish rasm arxivi | `1QuDHKjR8FuMz72en8wjOudrk1Quj0dqk` — `BioLab_Interactive_Guide_images.zip` alohida, maqsadli rasm arxivi sifatida qo‘shildi |

## Auditdan keyingi sinxronlash holati

2026-08-16 auditida katalogdagi chalg‘ituvchi hisob xabari olib tashlandi, “Sozlamalar” tugmasiga aniq holat xabari qo‘shildi, qurilma tafsiloti regressiya testi yaratildi va o‘quv dosyesi lazy-loading orqali ajratildi. Shuningdek, mobil katalogning dastlabki uch kartasi uchun rasm preload/ustuvor yuklash qoidasi, keyingi kartalar uchun lazy-loading hamda rasm kutish yoki xatolik fallbacki qo‘shildi. Bu o‘zgarishlar `047b251` commit bilan GitHub `main` branchiga yuborildi va Drive’dagi mavjud `BioLab_Interactive_Guide_source.zip` snapshoti ayni fayl ID’sida duplikatsiz yangilandi.

## Mobil rasm yuklanishi — qayta sinov

2026-08-16 dagi qayta ko‘rikda birinchi uchta katalog kartasining mahsulot rasmlari sahifa tarkibida muvaffaqiyatli chiqdi va ular uchun “Rasm yuklanmoqda” yoki yuklash xatosi fallbacki ko‘rinmadi. Keyingi kartalarda esa lazy-loading sabab rasm kutish yozuvi vaqtincha chiqishi kuzatildi; u birinchi ekrandagi ustuvor kartalarga taalluqli emas. Yakuniy browser-regressiya tekshiruvi va production build natijasi checklistda qayd etiladi.

## Snapshot tarkibi

Drive’dagi yagona arxiv: `BioLab_Interactive_Guide_source.zip`. U Git tomonidan kuzatilgan manba kodlari va hujjatlarni o‘z ichiga oladi hamda `node_modules`, build chiqindilari, maxfiy konfiguratsiyalar, loglar, lokal audit materiallari va runtime fayllarini o‘z ichiga olmaydi. Arxiv sanitizatsiya qoidasi bo‘yicha tekshirildi; uning nazorat yig‘indisi har sinxronlashda yangidan hisoblanadi.

## Qayta foydalanish uchun rasm arxivi

`BioLab_Interactive_Guide_images.zip` ichida platformada ishlatilayotgan 100 qurilma yozuviga mos **99 ta noyob rasm fayli**, `ASSET_MANIFEST.tsv` bog‘lanish reyestri va manba/litsenziya hujjatlari bor. Arxiv hajmi taxminan **63 MB**. BIO-063 va BIO-064 uchun bitta ayni kontent topilgani sabab u faqat bir marta saqlangan; ushbu bog‘lanish manifestda ochiq ko‘rsatilgan. Bu arxiv manba-kod snapshotining duplikati emas, balki kelajakda rasm fayllarini boshqa AI yoki platformada ishlatish uchun alohida media zaxirasidir.

## Mobil pastki audit va WebP optimallashtirish — 2026-08-16

390×844 mobil viewportda katalog sahifasi to‘liq skroll qilinib tekshirildi. 100 ta karta ko‘rildi; gorizontal overflow aniqlanmadi, barcha kartalarning pastki qismi viewportga sig‘di, barcha kartalarda “O‘rganish” tugmasi mavjud bo‘ldi va tugma kartadan tashqariga chiqmagan. To‘liq skrolldan keyin 100/100 rasm yuklandi, loading/error fallbacklari 0 ta bo‘ldi.

BIO-004–BIO-100 uchun 97 ta keyingi lazy-loading rasm WebP formatiga o‘tkazildi. O‘lchamlar saqlandi; WebP quality=84 va method=6 ishlatildi. Lokal manba hajmi 58,002,475 baytdan 3,400,182 baytgacha kamaydi, ya’ni 94.14% tejaldi. BIO-001–BIO-003 ustuvor preload rasmlari o‘zgartirilmadi. `EquipmentCard` fallback kodi qayta tekshirildi va BIO-004 buzilgan WebP URL bilan brauzer testida “Rasm vaqtincha ochilmadi”, “Qayta yuklab ko‘ring” hamda “O‘rganish” tugmasi birgalikda to‘g‘ri ko‘rsatildi.

WebP o‘zgarishidan keyin `pnpm test`, `node scripts/test_catalog_controls.mjs`, `node scripts/test_device_viewer.mjs` va `pnpm build` muvaffaqiyatli bajarildi. Production buildda faqat mavjud chunk-size ogohlantirishi qayd etildi; build xatosi yo‘q. Sinxronlashdan oldingi sanitizatsiya `scripts/sync_release.mjs --check` orqali qayta tekshiriladi.

## Yakuniy WebP relizi va manzil tasdig‘i — 2026-08-16

Foydalanuvchi tasdig‘idan keyin BioLab uchun faqat quyidagi manzillar yakuniy deb belgilandi: GitHub `uzme/biolab-interactive-guide` repositorysi va Google Drive’dagi `Biotexnologiya yangi / Loyiha 1` papkasi (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`). Second Brain repositorysi va `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd` papkasiga BioLab kodlari kiritilmaydi.

WebP relizi `sync_release.mjs --publish` orqali muvaffaqiyatli yuborildi. GitHub `main` branchining yangi commiti `6d5c734`; Drive’da yangi fayl yaratilmadi, mavjud `BioLab_Interactive_Guide_source.zip` fayli (`1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT`) joyida yangilandi. Sanitizatsiyalangan source archive 305.4 KB bo‘ldi; maxfiy fayllar, `.env`, tokenlar, loglar, `node_modules` va `dist` snapshotga kiritilmadi.
