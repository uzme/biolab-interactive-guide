# Vercel Hosting Link Inventory — 2026-08-22

## Maqsad

BioLabning boshqa akkauntdan tiklash oqimida eskirgan Vercel manzillari canonical production sifatida ko‘rinib qolmasligini ta’minlash.

> **Canonical production manzili:** `https://biolabguide-fbcitqyf.manus.space/`

## Topilgan manzillar

| Manzil | Holat | Qaror |
|---|---|---|
| `biolab-interactive-guide.vercel.app` | O‘chirilgan Vercel alias | `404` — tiklash/deploy uchun ishlatilmaydi. |
| `biolab-interactive-guide-bahroms-projects-fade24c3.vercel.app` | O‘chirilgan Vercel alias | `404` — tiklash/deploy uchun ishlatilmaydi. |
| `biolab-interactive-guide-git-main-bahroms-projects-fade24c3.vercel.app` | O‘chirilgan Git-branch Vercel alias | `404` — tiklash/deploy uchun ishlatilmaydi. |
| `https://biolabguide-fbcitqyf.manus.space/` | Manus production | `200` — **yagona canonical live manzil.** |

## Manba inventari

| Joy | Vercelga oid mazmun | Holat |
|---|---|---|
| `docs/master-protocols/FINAL_MASTER_CONTINUATION_PROMPT.md` | Vercel aliaslari non-canonical deb belgilangan. | Tiklash prompti tuzatilgan. |
| `docs/master-protocols/PROJECT_STATE.md` | Uchta alias, canonical Manus URL va audit qarori qayd etilgan. | Yangilangan. |
| `docs/reports/VERCEL_HOSTING_LINK_INVENTORY.md` | Ushbu to‘liq inventar va post-delete dalili. | Source-of-truth hisobot. |
| Ilova kodi, runtime config va deployment scriptlari | `vercel.app`/`vercel.com` production URLi topilmadi. | Kod canonical Manus hostingga bog‘lanmagan. |
| Vercel loyiha sozlamalari | `biolab-interactive-guide`, avvalgi project ID `prj_rqrqaYGGjeUZO5NvuTM6tViLCHwh`. | Loyiha butunlay o‘chirilgan; API `404`. |

## Disconnect va post-check dalili

Foydalanuvchi tasdig‘i bilan Vercel Settings → Git ichidan `uzme/biolab-interactive-guide` bog‘lanishi uzildi. Sahifa tasdig‘i: **“Disconnected Git Repository successfully.”** Keyingi read-only Vercel `get_project` so‘rovida loyiha metadatasida `gitRepository` yoki unga teng Git bog‘lanishi qaytmadi; uchta alias faqat tarixiy `domains` sifatida ko‘rindi. Shuning uchun GitHub `main` pushlari Vercel auto-deployini ishga tushiradigan bog‘lanish qolmagan.

Foydalanuvchining keyingi aniq tasdig‘i bilan Vercel `biolab-interactive-guide` loyihasi ham butunlay o‘chirildi. Read-only API so‘rovi loyiha slugiga `404 Not Found` qaytardi. Yakuniy HTTP tekshiruvda uchala eski Vercel aliasi `404`, canonical Manus manzili esa `200` qaytardi. Demak, Vercel endi BioLabning working releasei, deployi yoki restore targeti emas.

## Boshqa akkaunt uchun qat’iy qoida

1. GitHub manbasi: `https://github.com/uzme/biolab-interactive-guide`, **`main`**.
2. Production tekshiruv manzili: `https://biolabguide-fbcitqyf.manus.space/`.
3. Vercel aliaslaridan deploy, preview, restore yoki source-of-truth sifatida foydalanilmaydi.
4. Vercel ishlatish kelajakda kerak bo‘lsa, eski loyihani qayta tiklash emas, foydalanuvchining yangi aniq tasdig‘i bilan alohida yangi hosting integratsiyasi yaratiladi.
