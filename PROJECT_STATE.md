# PROJECT_STATE.md — BioLab Interactive Guide Project State

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Web checkpoint | `75bf2c56` |
| Canonical GitHub | `https://github.com/uzme/biolab-interactive-guide`, `main`; oxirgi verified responsive release sync holati quyida qayd etilgan |
| Canonical Google Drive | **Biotexnologiya** root, ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`, snapshot file ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`; oxirgi verified responsive release sync holati quyida qayd etilgan |
| Joriy snapshot nomi | `BioLab_Interactive_Guide_source.tar.gz` |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Joriy audit | TypeScript check, production build, Vitest/regressiya testlari, sanitizatsiya va canonical docs audit muvaffaqiyatli; holat **READY** |

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


## 2026-08-17 responsive release audit

Oxirgi verified release sync GitHub main va Drive snapshotga yuborildi. Ushbu relizda root-level yordamchi skriptlar vazifasiga ko‘ra `scripts/data/`, `scripts/release/`, `scripts/tests/` va `scripts/utils/` papkalariga tartiblandi; barcha command va hujjat yo‘llari yangilandi. Responsive layoutning 320/375 px mobil, 768 px planshet, 1280 px desktop va 1920 px TV viewportlari tekshirildi. Sidebar, mobil bottom navigation, dark hero, 16-qadamli SOP rail, katalog kartalari, Pure CSS 3D Carousel va DeviceViewer modalining o‘lchamlari hamda overflow holati verifikatsiya qilindi. TypeScript check, production build, katalog/device/carousel regressiya testlari va `verify_continuity_docs.mjs` auditi muvaffaqiyatli yakunlandi; continuity statusi `READY`. Faqat `.env.example` mavjud emasligi oldindan hujjatlashtirilgan system-security exception bo‘lib qoladi, haqiqiy maxfiy ma’lumotlar snapshotga kiritilmaydi.
