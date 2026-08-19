# PROJECT_STATE.md — BioLab Interactive Guide Project State

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Web checkpoint | `75bf2c56` |
| Canonical GitHub | `https://github.com/uzme/biolab-interactive-guide`, `main`; latest verified commit va synchronization metadata har bir release outputida qayd etiladi |
| Canonical Google Drive | **Biotexnologiya** root, ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`; canonical snapshot file ID va modified time har bir release outputida qayd etiladi |
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
Tekshirilgan kod va hujjatlar faqat GitHub `uzme/biolab-interactive-guide` repositorysining `main` branch rootiga va Google Drive’dagi yagona **Biotexnologiya** root papkasiga yuboriladi. Drive root ID: `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`. `.env` fayllari, tokenlar, API kalitlari va runtime chiqindilari snapshotga kiritilmaydi.


## 2026-08-18 script organization release audit

Root-level helper scripts `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalariga ajratildi. `README.md`, `PROJECT_MANIFEST.md`, `REPRODUCTION.md`, `TROUBLESHOOTING.md`, `CONTINUITY_AUDIT.md`, `AI_HANDOFF.md`, `ARCHITECTURE.md`, `CURRENT_STATE.md`, `PROJECT_INVENTORY.md` va tarixiy audit qaydlaridagi command pathlar yangilandi. Eski script pathlar bo‘yicha yakuniy grep audit bo‘sh natija berdi. `pnpm run check`, production build, regressiya testlari va `pnpm run audit:continuity` muvaffaqiyatli o‘tdi. Sanitizatsiyalangan release fingerprint, GitHub commit, Drive snapshot ID va modified time release run outputida qayd etiladi; har bir release yakunida rootda canonical nom bilan bitta snapshot bo‘lishi tekshiriladi.

## 2026-08-17 responsive release audit

Oxirgi verified release sync GitHub main va Drive snapshotga yuborildi. Ushbu relizda root-level yordamchi skriptlar vazifasiga ko‘ra `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalariga tartiblandi; barcha command va hujjat yo‘llari yangilandi. Responsive layoutning 320/375 px mobil, 768 px planshet, 1280 px desktop va 1920 px TV viewportlari tekshirildi. Sidebar, mobil bottom navigation, dark hero, 16-qadamli SOP rail, katalog kartalari, Pure CSS 3D Carousel va DeviceViewer modalining o‘lchamlari hamda overflow holati verifikatsiya qilindi. TypeScript check, production build, katalog/device/carousel regressiya testlari va `verify_continuity_docs.mjs` auditi muvaffaqiyatli yakunlandi; continuity statusi `READY`. Faqat `.env.example` mavjud emasligi oldindan hujjatlashtirilgan system-security exception bo‘lib qoladi, haqiqiy maxfiy ma’lumotlar snapshotga kiritilmaydi.

## 2026-08-19 rasm presentation profillari auditi

Katalogdagi **100 / 100** qurilma mobil karta rasm oynasi avtomatik capture va piksel auditidan o‘tkazildi. Audit natijasiga ko‘ra 53 ta `laboratory`, 45 ta `paper` va 2 ta `ink` fon profili qo‘llandi. `paper` profilida oq fonli rasm bilan media oynasi birlashtirilib, ichki oq rectangle (`letterboxing`) va noto‘g‘ri `mix-blend-mode` bartaraf etildi; `ink` profilida qorong‘i mahsulot rasmlarining kontrasti oshirildi. Ushbu profil qoidalari katalog kartasi, DeviceViewer, Pure 3D Carousel va Saralanganlar thumbnail’ida bir xilda ishlaydi. `pnpm run check`, production build, Vitest rasm profili unit testi va Playwright regressiya testlari muvaffaqiyatli yakunlandi. Batafsil natijalar: `docs/reports/image-presentation-audit-final.md`.
