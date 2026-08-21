# BioLab dizayn vizual auditi — 2026-08-21

## Tekshiruv qamrovi

Yangi precision-biotech CSS qatlami dev serverda desktop (`1280×900`) va mobil (`390×844`) full-page ko‘rinishlarda tekshirildi. Gorizontal 3D karusel vertikal ko‘rinishga o‘tmagan, mobil oqimda sahna saqlangan va katalogning 100 kartali responsiv oqimi buzilmagan.

## Qabul qilingan topilmalar

| Qism | Holat | Keyingi dizayn qarori |
|---|---|---|
| Hero | Qorong‘i teal kontrasti va strukturaviy authority ishlaydi | 16 bosqichli LAB-01 rail ko‘rinarliroq asosiy spine qilinadi |
| Gorizontal karusel | Interaktiv sahna, pause/continue hamda sahifalash mavjud | Kartalar va control yozuvlari yanada signalga yo‘naltiriladi; vertikal karuselga o‘tilmaydi |
| Katalog | Karta va rasm profilingi saqlangan | Katalog e-commerce feedga o‘xshab qolmasligi uchun professional modul ajratgichlar kuchaytiriladi |
| Mobil | Qatorlar va gorizontal sahna saqlangan | Touch boshqaruvlar hamda o‘qilishi o‘rtacha ekranlarda regression bilan tasdiqlanadi |

## O‘zgarmas kontrakt

O‘quv ma’lumotlari, 16 bo‘limli SOP tuzilmasi, qurilma nomlari, rasm mappingi va mavjud functional flows dizayn o‘zgarishida o‘zgartirilmaydi.

## Yakuniy ko‘rinish tekshiruvi

Desktop tekshiruvida LAB-01 rail hero sarlavhasi bilan bir xil ko‘rish ierarxiyasiga chiqdi; quyidagi rekord-panel, sovuq teal fon, kalibrlangan grid hamda modul chegaralari yagona laboratoriya ishchi stansiyasi tilini beradi. Telefon tekshiruvida rail ikki qatorli raqamli progress ko‘rinishini saqladi, matn hamda primary CTA o‘qiladigan qoldi. Karusel uchun belgilangan `horizontal` o‘qi, keyingi/oldingi to‘plam va pause/continue boshqaruvlari regression orqali tekshirildi; vertikal karusel ishlatilmagan.

### Breakpoint va kam-harakat yakuniy tekshiruvi

`768×1024` planshetda LAB-01 rail 8×2 qadam tarmog‘iga o‘tadi; shu sababli raqamlar bir qatorga siqilmaydi va rels o‘qilishi aniq qoladi. `1920×1080` katta ekranda hero, record-panel, metrikalar hamda karusel bo‘limi belgilangan maksimal kenglikda qolib, haddan tashqari cho‘zilmaydi. OS darajasidagi `prefers-reduced-motion` va Sozlamalardagi “Kamroq animatsiya” tanlovi endi tugma, modal, katalog, drawer hamda gorizontal karusel transitionlarini amalda o‘chiradi; regression test computed style orqali tasdiqlaydi.
