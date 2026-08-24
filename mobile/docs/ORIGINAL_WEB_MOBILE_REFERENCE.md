# BioLab Web → Mobile vizual qabul mezonlari

Bu hujjat Expo Go ilovasi uchun alohida yangi dizayn ixtiro qilish emas, balki BioLab saytining mavjud mobil ko‘rinishini React Native imkoniyatlariga mos, sodiq qayta qurish talabini belgilaydi. U webdagi 2026-08-24 holatiga asoslangan va qurilma ma’lumotlari yoki 16 bo‘limli o‘quv mazmuniga taalluqli emas.

| Qism | Webdagi original holat | Mobile qabul mezoni |
|---|---|---|
| Yuqori panel | Chapda tealli hamburger va `BioLab / LAB-01 · 100 × 16`; o‘ngda online, offline, tema, saralanganlar hamda filter actionlari | Aynan shu ma’no, tartib va deep-teal aksentli kompakt header |
| Asosiy hero | Gridli qorong‘i laboratoriya fonida `01—100`, so‘ng `Qurilmani bilib oling. Keyin aniq ishlating.` taklifi | Native layoutda shu ierarxiya, matn va ikkita asosiy CTA: katalog hamda PCRdan boshlash |
| Katalog | Qidiruv va filter drawer bilan 100 ta protokol rekordi | Qidiruv, kategoriya va saralangan filterlari drawer yoki sheet orqali mavjud bo‘lishi |
| Karta | Hero rasm, `BIO-###`, kategoriya, `PROTOKOL REKORDI`, model, narx va `O‘rganish` oqimi | Har bir qurilmada haqiqiy authoritative hero rasm, shu rekord qatlamlari va detailga kirish |
| Saralanganlar | O‘ng panelda saqlanganlar, CSV/PDF export hamda bo‘sh holat | Native bottom sheet yoki alohida ekran orqali bir xil imkoniyatlar |
| Detail | `BIO-###` dosyesi, 16 bo‘lim, manbalar, xarid/hidden-cost bo‘limlari | To‘liq 16 bo‘lim, yuqoridan ochilish va qaytish/saqlash amallari |

Mobil ilova `web` ichidagi original ma’lumotlarga bog‘liq qolmaydi: katalog va o‘quv kontenti bundle ichida bo‘lishi, saralanganlar esa lokal xotirada davom etishi kerak. Tashqi asset manbalari faqat webdagi tasdiqlangan hero rasmlar bilan cheklanadi.

## 2026-08-24 — Expo Go kirish ekrani vizual auditi

`?expo-preview=1` orqali 390 × 844 viewportda tekshirildi. Kirish ekrani original sahifadan oldin yakka, qorong‘i-teal laboratoriya kadri sifatida ko‘rindi: `BIO.LAB / LAB-01` yuqori identifikatori, `LIVE TIZIM` holati, mavjud laboratorya hero rasmi, skan chizig‘i, DNA overlay, `NAMUNA → TAHLIL → NATIJA` oqimi va `Laboratoriyaga kirish` asosiy amali bir ekran ichida o‘qiladigan joylashuvda. Standart `/` yo‘lida esa original sahifa o‘z holicha saqlanadi; kirish ekrani faqat Expo Go runtime flag’i yoki preview query bilan yoqiladi.
