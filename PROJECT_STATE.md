# BioLab Interactive Guide — loyiha holati

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Oxirgi tasdiqlangan web checkpoint | `49db349e` |
| Git commit | Joriy tuzatish sinxronizatsiyadan so‘ng GitHub `main` branchida qayd etiladi |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Oxirgi tekshiruv | TypeScript tekshiruvi, production build, katalog, qurilma-tafsiloti va original carousel class regressiya testlari muvaffaqiyatli bajarildi |

## Sinxronlash qoidasi

Tekshirilgan manba kodlari va hujjatlar faqat yangi GitHub repository hamda Google Drive’dagi **Biotexnologiya yangi / Loyiha 1** papkasiga yuboriladi. `node_modules`, `dist`, `.git`, `.env*`, loglar, vaqtinchalik audit materiallari, lokal rasm arxivlari va boshqa runtime chiqindilari snapshotga kiritilmaydi. Har bir foydalanuvchi tasdiqlagan yakuniy kod yoki hujjat o‘zgarishidan keyin mavjud snapshot yangilanadi; Drive’da parallel nusxalar yaratilmaydi.

## Rejalashtirilgan sinxronlash manzillari

| Manzil | Holat |
|---|---|
| GitHub — `uzme/biolab-interactive-guide` | Tekshirilgan manba kodi joriy carousel tuzatishidan keyin `main` branchiga yuboriladi |
| Google Drive — “Biotexnologiya yangi / Loyiha 1” (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) | Mavjud `1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT` snapshot fayli joyida yangilanadi; parallel nusxa yaratilmaydi |
| Google Drive — qayta foydalanish rasm arxivi | `1QuDHKjR8FuMz72en8wjOudrk1Quj0dqk` — `BioLab_Interactive_Guide_images.zip` alohida, maqsadli rasm arxivi sifatida saqlanadi |

## Original Pure CSS 3D Carousel Yo‘nalishini Tiklash — 2026-08-16

Carousel komponentining joriy React markupida original CSS selectorlari (`.pure3d-carousel`, `.scene`, `.a3d`, `.card`) ishlatilmay, boshqa class nomlari (`.carousel`, `.carousel-item`) qo‘llanilgani sababli original 3D geometriya amalda ishga tushmagan va ko‘rinish tepadan pastga yoki oddiy grid kabi chiqib qolgan. Tuzatishda original struktura qayta tiklandi: `.scene` perspective konteyneri, `.a3d` y-o‘qi bo‘yicha aylanuvchi halqa va `.card` elementlarining `rotatey(...) translatez(...)` joylashuvi yana ishlamoqda. 12 ta sahifalangan qurilma kartasi original halqa bo‘ylab gorizontal 3D perspektivada ko‘rinadi. `CSSProperties` redeklaratsiyasi ham bitta toza importga keltirildi.

TypeScript, production build, katalog regressiya testi va 16 bo‘limli DeviceViewer/mobil menyu brauzer testi muvaffaqiyatli bajarildi. Google Drive va GitHub sinxronizatsiyasi yakunlangach, commit va checkpoint ID shu faylga qo‘shiladi.

## Oldingi relizlar

2026-08-16 dagi avvalgi relizlarda 100 ta qurilma katalogi, 16 bo‘limli modal o‘quv dosyesi, rasm manbasi/litsenziyasi bloki, PDF eksport, WebP optimizatsiyasi, qidiruv-filtrlar, sozlamalar paneli va sanitizatsiyalangan Drive snapshot tizimi joriy qilingan.
