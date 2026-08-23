# Landing Hero Redesign Audit

**Sana:** 2026-08-23  
**Qamrov:** bosh ekran `landing-hero`, mobil-first va desktop

## Natija

Eski katta 16-qadamli hero rail to‘liq almashtirildi. Yangi yuzada laboratoriya fotosi alohida vizual dosye sifatida, mazmun esa mustaqil, qorong‘i o‘quv paneli sifatida o‘qiladi. Shu sababli sarlavha, ikkita asosiy action va 16 bo‘limning to‘rt bosqichli xaritasi bir-biridan aniq ajraladi.

| Viewport | Tekshiruv | Holat |
|---|---|---|
| 390 × 844 | Vizual dosye, sarlavha, CTA, afzalliklar va 4 bosqichli SOP xaritasi gorizontal overflow’siz ko‘rinadi. | PASS |
| 1280 × 900 | Laboratoriya dosyesi va o‘quv paneli ikki ustunli kompozitsiyada o‘qiladi; navigatsiya hamda katalog boshlanishi bilan vizual konflikt yo‘q. | PASS |

## Saqlangan kontraktlar

- `data-hero-surface` va `data-hero-learning-path` mavjud.
- Katalogga o‘tish hamda birinchi PCR qurilmasini ochish actionlari saqlangan.
- 100 qurilma va 16 bo‘limli o‘quv mazmuni o‘zgartirilmagan.
