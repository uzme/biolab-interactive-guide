# BioLab Interactive Guide TODO

- [x] Joriy repository tree va config/import bog‘lanishlarini audit qilish
- [x] Skriptlarni `scripts/tests/` va `scripts/utils/` papkalariga, audit hujjatlarini esa `docs/reports/` papkasiga tartibli ravishda ko‘chirish va skript yo‘llarini yangilash
- [x] Typecheck, production build va continuity auditi
- [x] Canonical GitHub (`uzme/biolab-interactive-guide`, `main`) va Biotexnologiya Drive root papkasiga (`1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh`) sanitizatsiyalangan responsive release sync qilish
- [x] Mobile (320/375px), tablet (768px), desktop (1280px) va TV (1920px) viewportlari uchun responsive layout, typography, 3D carousel va modal elementlarini moslashtirish
- [x] Headerdagi chap menyu (hamburger) va o‘ng filtr/sozlamalar tugmalarini to‘liq interaktiv va ishlaydigan qilish
- [x] Ilovaning to‘liq funksional "Sozlamalar va Mualliflik huquqi" (Settings & Copyright / Attribution) modal oynasini qo‘shish
- [x] SettingsDialog JSON import oqimini regressiya/end-to-end test bilan tasdiqlash
- [x] Data-management bo‘limining to‘liq end-to-end verifikatsiyasini yakunlash
- [x] Rasm manbasi/litsenziya shaffofligi oqimini end-to-end tekshirish
- [x] Google Drive root ID va canonical papka nomlarini sinxronlash (`Biotexnologiya`)
- [x] Mobil sidebar drawer ekrandan tashqariga chiqib ketishi va matn kesilishi xatosini Sheet yordamida mukammal hal qilish (`w-[min(86vw,320px)]`, `side="left"`)
- [x] Typecheck, production build, Vitest va continuity verifikatsiyasidan o‘tkazish
- [x] Mobil drawer fixidan so‘ng `node scripts/release/sync_release.mjs --publish` ni bajarib, yangi GitHub commit hash va Drive snapshot metadata (file ID, parent, modified time)ni release logda qayd etish
- [x] Telefon, planshet, kompyuter va TV ekranlarida sidebar drawer va shell overflow xatolarini to‘liq tuzatish
