# BioLab Interactive Guide — Troubleshooting Guide

## 1. Clean Clone TypeScript Xatosi: `Cannot find type definition file for vite/client`

Bu holat BioLab loyihasi Second Brain repository ichida nested katalogda joylashgani va parent repository o‘zining alohida pnpm workspace konfiguratsiyasiga ega bo‘lgani uchun yuz beradi. `second-brain/projects/biolab-guide` katalogidan oddiy `pnpm install` ishlatish parent dependency graphini tanlashi mumkin.

```bash
cd second-brain/projects/biolab-guide
pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts
pnpm run check
pnpm build
```

`--ignore-workspace` nested BioLab `package.json` va `pnpm-lock.yaml` fayllaridan foydalanishni majbur qiladi; `--frozen-lockfile` esa dependency versiyalarini o‘zgartirmaydi.

## 2. TypeScript yoki Production Build Xatosi

Node.js v22 yoki undan yuqori versiyasi ishlayotganini, dependency install yuqoridagi nested buyruq bilan bajarilganini va `pnpm-lock.yaml` o‘zgarmaganini tekshiring. `pnpm run check` kompilyatsiya xatosini, `pnpm build` esa Vite hamda server bundle xatosini ajratib ko‘rsatadi.

Build vaqtida katta JavaScript chunklari yoki CSS gradient yo‘nalishi bo‘yicha warninglar chiqishi mumkin. Hozirgi verifikatsiyada ular non-blocking warning bo‘lib, buildni muvaffaqiyatsiz qilmaydi. Ularni xato deb talqin qilib, ishlayotgan carousel yoki layoutni o‘zboshimchalik bilan qayta yozmang.

## 3. Transition Regressiya Testi Beqarorligi

`useTransition` katalog filtri yoki qidiruv natijasini keyingi renderga qoldiradi. Playwright assertionini click yoki fill amali ortidan darhol bajarmang; kutilayotgan DOM holatini `waitForFunction`, `locator.waitFor` yoki aniq count assertion bilan kuting. `scripts/test_catalog_controls.mjs` ushbu qoidaga mos ravishda qidiruvni tozalash, kategoriya tanlash va natija yo‘q holatlarini transition yakunidan keyin tekshiradi.

## 4. Service Worker yoki Offline Status Ishlamasligi

Service worker `localhost` yoki HTTPS kontekstida ro‘yxatdan o‘tadi. Dev serverni ishga tushiring va `manifest.webmanifest` hamda `sw.js` URL larini tekshiring:

```bash
pnpm dev
curl -I http://localhost:3000/manifest.webmanifest
curl -I http://localhost:3000/sw.js
```

Brauzerda service worker ready holatiga kelgandan keyin Offline paketni yuklash tugmasini bosing. Tarmoqni vaqtincha offline qilganda `data-offline-status="offline"`, qayta online qilganda esa `data-offline-status="online"` bo‘lishi kerak. Offline rejimga tegishli login, GitHub va Drive amallari internet tiklangach bajariladi.

## 5. Google Drive Sync Xatosi

`gws` CLI autentifikatsiyasi va Drive parent ID ni tekshiring. Amaldagi yagona destination:

```text
1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd
```

Release buyruqlari loyiha rootidan bajariladi:

```bash
node scripts/sync_release.mjs --check
node scripts/sync_release.mjs --publish
```

`gws` upload validatsiyasi snapshot fayli turgan katalogdan bajarilishini talab qiladi; `scripts/sync_release.mjs` buni avtomatik boshqaradi. `.env*`, tokenlar, API kalitlar, parollar, PATlar, runtime loglar, dependency va build kataloglari snapshotga kiritilmaydi. Snapshot nomi `BioLab_Interactive_Guide_source.tar.gz`; skript avval shu nomdagi mavjud faylni faqat Second Brain root ichidan qidiradi va mavjud bo‘lsa yangilaydi.

## 6. GitHub Sync Xatosi

BioLab arxivi `uzme/second-brain` repository `main` branchidagi `projects/biolab-guide` yo‘liga yuboriladi. `gh auth status` bilan GitHub CLI autentifikatsiyasini tekshiring. Release script pushdan oldin typecheck, build, regressiya testlari va secret scan bajaradi. Eski `uzme/biolab-interactive-guide` repository yoki eski BioLab-specific Drive papkasi amaldagi source-of-truth sync manzili emas.

## 7. Maxfiy Ma’lumotlar Bo‘yicha Xavfsizlik

Haqiqiy secret aniqlansa release jarayoni ataylab to‘xtaydi. Secretni Git historyga qo‘shmang; uni o‘chirib, hosting Secrets paneli yoki mahalliy untracked `.env` orqali ta’minlang. `.env.example` faqat placeholder nomlarini ko‘rsatishi mumkin, hech qachon haqiqiy qiymatlarni saqlamasligi kerak.
