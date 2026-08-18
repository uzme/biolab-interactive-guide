# BioLab Scripts

BioLab’dagi yordamchi skriptlar funksional vazifasiga ko‘ra alohida papkalarga ajratilgan. Skriptlarni loyiha rootidan ishga tushiring; ular root-relative yo‘llarni o‘zlari hisoblaydi.

| Papka | Vazifa | Asosiy fayllar |
|---|---|---|
| `data/` | O‘quv va xarid ma’lumotlarini kanonik qurilmalar bilan import qilish | `importLearningData.mjs` |
| `tests/` | Katalog, qurilma viewer, carousel va mobil vizual regressiya tekshiruvlari | `test_catalog_controls.mjs`, `test_device_viewer.mjs`, `test_carousel_pagination_browser.mjs`, `capture_mobile_card_renders.mjs` |
| `utils/` | Rasm rejalari, prompt manifestlari va audit yordamchi utilitalari | `buildEquipmentImagePlan.mjs`, `buildImageGenerationManifest.mjs`, `print_audit_overview.mjs`, `summarize_pnpm_audit.mjs` |
| `release/` | Continuity audit, secret sanitizatsiyasi, GitHub va Google Drive release oqimi | `verify_continuity_docs.mjs`, `sync_release.mjs` |

## Tavsiya etiladigan buyruqlar

```bash
pnpm run check
pnpm build
pnpm test
pnpm run audit:continuity
pnpm run release:check
pnpm run release:publish
```

`release:publish` faqat barcha tekshiruvlar muvaffaqiyatli tugagach ishlatiladi. U mavjud sanitizatsiyalangan Google Drive snapshotini yangilaydi va GitHub `main` branchiga tekshirilgan source kodni yuboradi. `.env`, tokenlar, API kalitlar, parollar, PATlar, loglar, `node_modules` va build chiqindilari release tarkibiga kiritilmaydi.
