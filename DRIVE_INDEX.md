# DRIVE_INDEX.md — BioLabning kanonik Google Drive xaritasi

Ushbu hujjat BioLab Interactive Guide uchun GitHub ↔ Google Drive cross-linking, snapshot nomlash va tiklash manzilini belgilaydi. U faqat tasdiqlangan kanonik mappingdan foydalanadi.

## Kanonik Drive manzil

BioLab Interactive Guide uchun sanitizatsiyalangan source snapshotlar va `BIOLAB_CURRENT_SYNC_STATE.json` pointeri faqat **Biotexnologiya yangi / Loyiha 1** papkasiga yuklanadi: `1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`. `Biotexnologiya yangi` root papkasi (`19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`) faqat konteynerdir; u BioLab snapshotlari yoki pointeri uchun write target emas.

| Asset | Maqsad | Kanonik Drive papka | Fayl turi | Holat |
|---|---|---|---|---|
| `biolab-sync-<fingerprint>-<UTC>.tar.gz` | Sanitizatsiyalangan source va hujjatlar snapshot | `Biotexnologiya yangi / Loyiha 1` — `1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw` | `.tar.gz` | CURRENT, pointer ko‘rsatgan so‘nggi nusxa |
| `BIOLAB_CURRENT_SYNC_STATE.json` | Snapshot ID, Git commit va fingerprintning authoritative pointeri | `Biotexnologiya yangi / Loyiha 1` — `1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw` | `.json` | CURRENT |
| `BioLab_Interactive_Guide_source.zip` | Oldingi manba arxivi | `Biotexnologiya yangi / Loyiha 1` | `.zip` | ARCHIVED, faqat tarixiy reference |
| `BioLab_Interactive_Guide_images.zip` | Equipment rasmlarining tarixiy reference arxivi | `Biotexnologiya yangi / Loyiha 1` | `.zip` | ARCHIVED, write target emas |

Har bir joriy snapshot `biolab-sync-<sanitizatsiyalangan-fingerprint>-<UTC-vaqt>.tar.gz` nomida bo‘ladi. `node_modules`, `.git`, build/runtime fayllari, `.env*`, tokenlar, kalitlar va parollar snapshotdan chiqariladi.

## GitHub ↔ Drive bog‘lanishi

| Manba | Kanonik qiymat |
|---|---|
| GitHub source | `https://github.com/uzme/biolab-interactive-guide` |
| Stable branch | `main` |
| Drive parent | `Biotexnologiya yangi / Loyiha 1` — `1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw` |
| Joriy sync holati | Drive’dagi `BIOLAB_CURRENT_SYNC_STATE.json` pointer fayli |

> Eng so‘nggi snapshot ID, commit va fingerprint pointer faylida saqlanadi. Taxminiy yoki eskirgan snapshot IDlari kanonik holat sifatida yozilmaydi.
