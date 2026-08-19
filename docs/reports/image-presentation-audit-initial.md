# Rasm Presentation Auditi — Birlamchi Natijalar

**Sana:** 2026-08-19  
**Qamrov:** BioLab katalogidagi 100 ta mobil qurilma kartasi

Avtomatik Playwright capture auditi 100 ta rasm oynasini muvaffaqiyatli qayd etdi. Mobil kartalarning rasm oynasi bir xil 348 × 208 px geometriyada ishlamoqda; demak muammo layout kengligida emas, balki ayrim raster tasvirlarning oq fonli kompozitsiyasi va `object-fit: contain` profilidan kelib chiqmoqda.

| Tekshiruv | Natija | Xulosa |
|---|---:|---|
| Audit qilingan kartalar | 100 | To‘liq katalog qamrab olindi |
| `cover` profili | 1 | Faqat BIO-001 |
| `contain` profili | 99 | Rasmning to‘liq ko‘rinishini saqlaydi, biroq oq fonli manbalarda letterboxing xavfi bor |
| Rasm oynasi | 348 × 208 px | Card shell geometriyasi barqaror |

Foydalanuvchi yuborgan misollar oq fonli rasm qatlami ko‘rinib qolayotganini tasdiqladi. Keyingi audit bosqichida manba tasvirlaridagi chekka fon, yorqinlik va qurilma masshtabi o‘lchanadi; so‘ng fit, fon va blend profillari rasmga mos ravishda avtomatik yangilanadi.

## Namuna tekshiruvlari

BIO-047 va BIO-091 kartalari vizual tekshirildi. Har ikkala holatda ham qurilma konturi saqlangan, ammo manba rasmning to‘rtburchak och rangli fon qatlami karta uchun yaratilgan teal gradient fonidan ajralib turadi. Bu `object-contain` xatosi emas; muammo — manba raster fonining komponent foniga vizual jihatdan qo‘shilmayotgani. Tuzatish qoidasida bunday rasm uchun `contain` saqlanadi, lekin `mix-blend-mode` bekor qilinadi va rasm oynasi fonini neytral oq/och kulrang studio surfacega o‘tkaziladi. Shunda oq manba fonini yashirishga urinish o‘rniga uni dizaynning izchil qismi sifatida ko‘rsatish mumkin bo‘ladi.
