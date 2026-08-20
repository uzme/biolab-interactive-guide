# PROJECT_STATE.md — BioLab Interactive Guide Project State

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Web checkpoint | `75bf2c56` |
| Canonical GitHub | `https://github.com/uzme/biolab-interactive-guide`, `main`; latest verified commit va synchronization metadata har bir release outputida qayd etiladi |
| Canonical Google Drive | **Biotexnologiya yangi** BioLab root, ID `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`; canonical snapshot file ID va modified time har bir release outputida qayd etiladi |
| Joriy snapshot nomi | `BioLab_Interactive_Guide_source.tar.gz` |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Joriy audit | TypeScript check, production build, Vitest/regressiya testlari, path audit, sanitizatsiya va canonical docs audit muvaffaqiyatli; holat **READY** |

## Repository Structure (Tartiblangan papka tuzilmasi)
- `client/` — React 19 frontend, shadcn/ui komponentlar, custom hooks (`useBookmarks`), PWA offline qo‘llab-quvvatlashi
- `server/` — Express backend, tRPC routers va API integratsiyalari
- `scripts/` — Vazifasiga ko‘ra ajratilgan automation tooling
  - `scripts/data/` — Learning/purchase data import skriptlari
  - `scripts/release/` — Continuity audit, secret sanitizatsiyasi va GitHub/Drive release skriptlari
  - `scripts/tests/` — Regressiya va brauzer testlari (`test_catalog_controls.mjs`, `test_device_viewer.mjs`, va boshqalar)
  - `scripts/utils/` — Image planning, audit va yordamchi utility skriptlari
  - `scripts/README.md` — Papka kontrakti va buyruqlar ma’lumotnomasi
- `docs/` — Master protocol va restoration hujjatlari
  - `docs/reports/` — Visual design auditi, repository file auditi va tarixiy loglar
- `shared/` — Umumiy turlar va xatoliklar aniqlamalari

## Sinxronlash qoidasi
Tekshirilgan kod va hujjatlar faqat GitHub `uzme/biolab-interactive-guide` repositorysining `main` branch rootiga va Google Drive’dagi yagona **Biotexnologiya yangi** BioLab root papkasiga yuboriladi. Drive root ID: `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`. `Second Brain` root BioLab release manzili emas. `.env` fayllari, tokenlar, API kalitlari va runtime chiqindilari snapshotga kiritilmaydi.


## 2026-08-18 script organization release audit

Root-level helper scripts `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalariga ajratildi. `README.md`, `PROJECT_MANIFEST.md`, `REPRODUCTION.md`, `TROUBLESHOOTING.md`, `CONTINUITY_AUDIT.md`, `AI_HANDOFF.md`, `ARCHITECTURE.md`, `CURRENT_STATE.md`, `PROJECT_INVENTORY.md` va tarixiy audit qaydlaridagi command pathlar yangilandi. Eski script pathlar bo‘yicha yakuniy grep audit bo‘sh natija berdi. `pnpm run check`, production build, regressiya testlari va `pnpm run audit:continuity` muvaffaqiyatli o‘tdi. Sanitizatsiyalangan release fingerprint, GitHub commit, Drive snapshot ID va modified time release run outputida qayd etiladi; har bir release yakunida rootda canonical nom bilan bitta snapshot bo‘lishi tekshiriladi.

## 2026-08-17 responsive release audit

Oxirgi verified release sync GitHub main va Drive snapshotga yuborildi. Ushbu relizda root-level yordamchi skriptlar vazifasiga ko‘ra `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalariga tartiblandi; barcha command va hujjat yo‘llari yangilandi. Responsive layoutning 320/375 px mobil, 768 px planshet, 1280 px desktop va 1920 px TV viewportlari tekshirildi. Sidebar, mobil bottom navigation, dark hero, 16-qadamli SOP rail, katalog kartalari, Pure CSS 3D Carousel va DeviceViewer modalining o‘lchamlari hamda overflow holati verifikatsiya qilindi. TypeScript check, production build, katalog/device/carousel regressiya testlari va `verify_continuity_docs.mjs` auditi muvaffaqiyatli yakunlandi; continuity statusi `READY`. Faqat `.env.example` mavjud emasligi oldindan hujjatlashtirilgan system-security exception bo‘lib qoladi, haqiqiy maxfiy ma’lumotlar snapshotga kiritilmaydi.

## 2026-08-19 rasm presentation profillari auditi

Katalogdagi **100 / 100** qurilma mobil karta rasm oynasi avtomatik capture va piksel auditidan o‘tkazildi. Audit natijasiga ko‘ra 53 ta `laboratory`, 45 ta `paper` va 2 ta `ink` fon profili qo‘llandi. `paper` profilida oq fonli rasm bilan media oynasi birlashtirilib, ichki oq rectangle (`letterboxing`) va noto‘g‘ri `mix-blend-mode` bartaraf etildi; `ink` profilida qorong‘i mahsulot rasmlarining kontrasti oshirildi. Ushbu profil qoidalari katalog kartasi, DeviceViewer, Pure 3D Carousel va Saralanganlar thumbnail’ida bir xilda ishlaydi. `pnpm run check`, production build, Vitest rasm profili unit testi va Playwright regressiya testlari muvaffaqiyatli yakunlandi. Batafsil natijalar: `docs/reports/image-presentation-audit-final.md`.

## 2026-08-19 hero vizual va loading performance optimizatsiyasi

Foydalanuvchi tanlagan katta, markazlangan laboratoriya-hero standardiga o‘tkazish uchun dastlabki **15 ta** oq fonli qurilma vizuali qayta yaratildi va media registryga ulandi. Ushbu rasmlar 63.79 MiB dan 0.78 MiB gacha (**98.8%** qisqartirilgan) WebP assetlarga almashtirildi. Katalog birinchi sakkizta ehtimoliy media so‘rovini render bilan bir vaqtda warmup qiladi; birinchi uchta karta esa HTML preload orqali yuqori tarmoq ustuvorligida yuklanadi. Loading audit dastlabki ekranda 20 ta media so‘rovi, 3 ta yuqori ustuvor preload va 6 ta tayyor rasmni tasdiqladi. Qolgan hero-vizuallar uchun media yaratish kunlik limiti tiklanishini kutayotgan ish ochiq qoladi; shu vaqtgacha barcha 100 ta mavjud rasmning `object-fit`, fon va dark-mode presentation profillari barqaror ishlaydi.

## 2026-08-19 boshqa akkaunt continuation paketi

Hero-vizual ishini boshqa akkauntdagi agent ham aniq va xavfsiz davom ettirishi uchun `HERO_VISUAL_CONTINUATION_HANDOFF.md` hamda `HERO_VISUAL_CONTINUATION_PROMPT.md` yaratildi. Paket yangi hero rasm ulangan 15 ta qurilma IDsi, reference `BIO-001`, qolgan 84 ta ID navbati, asset storage tartibi, WebP optimizatsiyasi, media profil yangilash qadamlari, majburiy test/release oqimi va secrets-free sync qoidalarini qamrab oladi. U shuningdek yangi Drive papka yoki duplicate snapshot yaratishni taqiqlaydi.

## 2026-08-19 image-only handoff aniqlashtirishi

Continuation prompt qayta yozildi: boshqa akkauntdagi agentning roli **faqat** matnsiz, 16:9, kamida 1600×900 px, `BIO-NNN.webp` nomli hero-vizual rasmlarni 5–10 tadan batch qilib mavjud canonical Drive rootga yuklash bilan cheklanadi. U kod, image URL registry, presentation profil, test/build, GitHub push yoki release jarayoniga tegmaydi. ZIP batch hamda ID ro‘yxati kelgach, asosiy loyiha agenti sifat, crop, kontrast, WebP storage, bog‘lash, test, production build va canonical GitHub–Drive release ishlarini bajaradi. Handoff IDlari amaldagi `equipmentImages.ts` registrysi bilan tekshirildi: tayyor 15 ta hero ID — `BIO-016`–`BIO-022`, `BIO-024`, `BIO-025`, `BIO-027`–`BIO-029`, `BIO-031`, `BIO-033`, `BIO-035`; yaratiladigan 84 ta ID esa `BIO-002`–`BIO-015`, `BIO-023`, `BIO-026`, `BIO-030`, `BIO-032`, `BIO-034`, `BIO-036`–`BIO-100`.

## 2026-08-20 Drive root va hero batch auditi

Drive metadata va fayl inventari BioLabning yagona canonical rootini **Biotexnologiya yangi** (`19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`) sifatida tasdiqladi: unda `BioLab_Interactive_Guide_source.tar.gz`, beshta hero batch va Biotexnologiya qurilma auditlari mavjud. Avvalgi `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd` root esa `Second Brain` loyihasiga tegishli ekanligi aniqlandi; BioLab release skriptlari va continuity hujjatlari unga yozmaydigan qilib tuzatildi.

`BioLab_hero_assets_batch_01.zip`–`05.zip` ichidagi 24 ta WebP rasm auditidan keyin 17 ta mos hero-vizual media registryga laboratoriya presentation profili bilan ulandi: `BIO-002`, `003`, `004`, `007`, `009`, `011`–`015`, `023`, `026`, `030`, `032`, `036`, `037`, `040`. `BIO-005`, `006`, `008`, `010`, `034`, `038`, `039` noto‘g‘ri qurilma sinfiga o‘xshagani uchun registriga kiritilmadi va qayta yaratish navbatida qoldi. Batafsil qarorlar: `docs/reports/hero-batch-audit-2026-08-20.md`.
