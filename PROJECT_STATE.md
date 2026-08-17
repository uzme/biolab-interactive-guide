# PROJECT_STATE.md — BioLab Interactive Guide Project State

## Joriy reliz

| Ko‘rsatkich | Qiymat |
|---|---|
| Web loyiha | BioLab Interactive Guide |
| Web checkpoint | `75bf2c56` |
| Canonical GitHub | `https://github.com/uzme/biolab-interactive-guide`, `main`, commit `928208ef3870dbbbeb22d2c1f0d311d8466ed4b1` |
| Canonical Google Drive | **Biotexnologiya** root, ID `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`, file ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`, modified `2026-08-17T11:46:17.330Z` |
| Joriy snapshot nomi | `BioLab_Interactive_Guide_source.tar.gz` |
| Ishlab chiqarish manzili | `https://biolabguide-fbcitqyf.manus.space` |
| Qamrov | 10 kategoriya, 100 qurilma, 16 bo‘limli o‘quv tarkibi |
| Joriy audit | TypeScript check, production build, Vitest/regressiya testlari, sanitizatsiya va canonical docs audit muvaffaqiyatli; holat **READY** |

## Repository Structure (Tartiblangan papka tuzilmasi)
- `client/` — React 19 frontend, shadcn/ui komponentlar, custom hooks (`useBookmarks`), PWA offline qo‘llab-quvvatlashi
- `server/` — Express backend, tRPC routers va API integratsiyalari
- `scripts/` — Avtomatlashtirilgan release va verify skriptlari
  - `scripts/tests/` — Regressiya va brauzer testlari (`test_catalog_controls.mjs`, `test_device_viewer.mjs`, va boshqalar)
  - `scripts/utils/` — Tooling va audit contact sheet skriptlari
- `docs/` — Master protocol va restoration hujjatlari
  - `docs/reports/` — Visual design auditi, repository file auditi va tarixiy loglar
- `shared/` — Umumiy turlar va xatoliklar aniqlamalari

## Sinxronlash qoidasi
Tekshirilgan kod va hujjatlar faqat GitHub `uzme/biolab-interactive-guide` repositorysining `main` branch rootiga va Google Drive’dagi yagona **Biotexnologiya** root papkasiga yuboriladi. Drive root ID: `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`. `.env` fayllari, tokenlar, API kalitlari va runtime chiqindilari snapshotga kiritilmaydi.
