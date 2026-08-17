# PROJECT_STATE.md — BioLab Interactive Guide Project State

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Web checkpoint | `3a896ebf` / `d7c21234` |
| Canonical GitHub | `https://github.com/uzme/biolab-interactive-guide`, `main`, commit `e29c0352f0f772593aa8f45f9738cc5dfcab0180` |
| Canonical Google Drive | **Biotexnologiya** root, ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`, file ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, modified `2026-08-17T10:25:25.306Z` |
| Joriy snapshot nomi | `BioLab_Interactive_Guide_source.tar.gz` |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Joriy audit | TypeScript check, production build, Vitest/regressiya testlari, sanitizatsiya va canonical docs audit muvaffaqiyatli; holat **READY** |

## Protocol audit statusi

`CONTINUITY_AUDIT.md` bo‘yicha application, build, sanitizatsiya va hujjat cross-link qatlamlari tekshirildi. `scripts/verify_continuity_docs.mjs` 20 ta majburiy hujjatni, canonical GitHub↔Drive bog‘lanishlarini va maxfiy ma’lumotlar kontraktini tekshiradi. Environment o‘zgaruvchilari nomlari `SECRETS_REQUIRED.md`da berilgan; haqiqiy qiymatlar repository yoki snapshotga kiritilmaydi. Yakuniy holat: **READY**.

## Sinxronlash qoidasi

Tekshirilgan kod va hujjatlar faqat GitHub `uzme/biolab-interactive-guide` repositorysining `main` branch rootiga va Google Drive’dagi yagona **Biotexnologiya** root papkasiga yuboriladi. Drive root ID: `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`. `.env` fayllari, tokenlar, API kalitlari, parollar, PATlar, service-role kalitlari, `node_modules`, `dist`, `.git`, loglar, runtime chiqindilari va boshqa vaqtinchalik materiallar snapshotga kiritilmaydi. Har bir muhim kod yoki hujjat o‘zgarishidan so‘ng check, production build, test, secret scan va sanitizatsiyalangan sync bajariladi. Parallel Drive snapshotlari yaratilmaydi. `Kodlar`, `PUBG` va `Skills` papkalari daxlsiz hisoblanadi.

## Canonical manzillar

| Manzil | Vazifasi |
|---|---|
| GitHub — `uzme/biolab-interactive-guide` | Source code, hujjatlar va tekshirilgan release tarixining yagona Git manbasi (`e29c035`) |
| Google Drive — `Biotexnologiya` (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) | Sanitizatsiyalangan source snapshotning yagona arxiv manzili (`1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`) |
| `BioLab_Interactive_Guide_source.tar.gz` | GitHub source bilan moslashtiriladigan Drive snapshot nomi |

## Source-of-truth funksiyalar

### Original Pure CSS 3D Carousel

Carousel geometriyasi `.pure3d-carousel`, `.scene`, `.a3d` va `.card` selectorlari bilan gorizontal 3D perspektivada saqlanadi. 100 ta qurilma 12 tadan sahifalanadi; qidiruv yoki filtr ishlatilmaganda katalog 1–100 tartibida ko‘rsatiladi.

### Saralanganlar va offline rejim

`localStorage` asosidagi saralanganlar, responsive o‘ng sidebar, o‘quv modal oynasi, PWA service worker va offline paket boshqaruvi joriy qilingan. Qurilma ma’lumotlari, 100 ta dosye va rasm metadata si source-of-truth sifatida saqlanadi.
