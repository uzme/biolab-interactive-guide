# BioLab Interactive Guide — Tiklash xaritasi

Ushbu tiklash xaritasi BioLabni GitHub manbasi va Drive’dagi tasdiqlangan snapshot orqali qayta tiklash tartibini belgilaydi.

| Komponent | Asosiy manzil | Ikkilamchi reference | Tiklash usuli |
|---|---|---|---|
| Source code va hujjatlar | [GitHub `uzme/biolab-interactive-guide` root](https://github.com/uzme/biolab-interactive-guide/tree/main) | `Biotexnologiya yangi / Loyiha 1` — `1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw` ichidagi pointer ko‘rsatgan `biolab-sync-*.tar.gz` | `gh repo clone uzme/biolab-interactive-guide`; pointerdagi commitni checkout qiling yoki mos snapshotni extract qiling |
| Snapshot holati | Drive’dagi `BIOLAB_CURRENT_SYNC_STATE.json` | GitHub `main` | Pointerdagi commit, snapshot ID va fingerprintni tekshiring |
| Equipment images va assets | Joriy BioLab source references va managed static storage | `BioLab_Interactive_Guide_images.zip` tarixiy reference arxivi | Faqat pointer ko‘rsatgan joriy snapshot yoki manba kodidan tiklang; tarixiy asset vaultlarga yozmang |
| PWA va service worker | GitHub repository (`public/sw.js`, `public/manifest.webmanifest`) | Offline cached shell | Static hosting deployda avtomatik ro‘yxatdan o‘tadi |
| Dependencies | `pnpm-lock.yaml` orqali npm registry | GitHub repository | `pnpm install --frozen-lockfile` |
| Secrets va environment | Xavfsiz runtime konfiguratsiyasi | `SECRETS_REQUIRED.md`; arxivda real qiymatlar yo‘q | Managed secret sozlamalari orqali alohida bering |

Tiklash ketma-ketligi: yangi papkaga `main` branchni clone qiling, Drive pointeridan commit va snapshot IDni oling, kerakli commitni checkout qiling, so‘ng `pnpm install --frozen-lockfile`, `pnpm run check`, `pnpm run build` va browser regressiya testlarini bajaring. Zarur bo‘lsa pointer ko‘rsatgan sanitizatsiyalangan snapshotni olib, source bilan SHA-256 fingerprint bo‘yicha solishtiring.

`.env*`, API kalit, token, parol va boshqa credentiallar snapshotda bo‘lmaydi. Ular faqat xavfsiz runtime konfiguratsiyasi orqali alohida beriladi.
