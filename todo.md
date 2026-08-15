# BioLab 16 bo‘limli chuqur o‘quv tizimi

- [x] 3D va 2D texnik ko‘rinishlarni butun platformadan olib tashlash
- [x] 16 ta majburiy o‘quv bo‘limi bo‘yicha mavjud kontent qamrovini tekshirish
- [x] Asosiy qismlar, namuna tayyorlash va troubleshooting maydonlarini manbali shakllantirish
- [x] Ishonchli manbalar blokini manufacturer/manual/application note havolalari bilan qo‘shish
- [x] 100 ta qurilma uchun manba asosida 16 bo‘limli data model yaratish
- [x] Qurilma sahifasini o‘qishga qulay, bo‘limli o‘quv markaziga qayta yaratish
- [x] 100 qurilmada bo‘limlar, qidiruv, navigatsiya va responsivlikni tekshirish
- [x] TypeScript va production buildni tekshirish
- [x] Yangilangan checkpoint yaratish

## Google Drive nusxasi — Loyiha 1

- [x] Google Drive integratsiyasi va mavjud “Biotexnologiya yangi” papkasini tekshirish
- [x] Loyiha kodlari, konfiguratsiya va kerakli statik resurslarni eksportga tayyorlash
- [x] “Biotexnologiya yangi/Loyiha 1” papka tuzilmasini yaratish
- [x] Loyiha kodlarini Google Drive’ga yuklash
- [x] Yuklangan tarkib va papka havolasini tekshirish

## 100 ta qurilma rasmi

- [ ] 100 ta qurilma uchun kanonik rasm identifikatori, manufacturer/model mosligi va manba strategiyasini belgilash
- [ ] Rasmiy manbalardan yuqori aniqlikdagi rasmlarni tanlash hamda manbalarni reyestrga kiritish
- [ ] Rasm manbasi bo‘lmagan qurilmalar uchun laboratoriya-realistik AI vizuallar yaratish
- [ ] Rasmlarni web asset sifatida xavfsiz yuklash va 100 ta qurilma bilan bog‘lash
- [ ] Qurilma sahifasining yuqori qismiga rasm blokini integratsiya qilish
- [ ] Rasm-model mosligi, desktop/mobile o‘qilishi va fallback holatini tekshirish
- [ ] Rasmli versiyani checkpointga saqlash
- [ ] Foydalanuvchi tasdiqidan keyin Google Drive’dagi “Loyiha 1” nusxasini yangilash

## Majburiy o‘quv tartibi
1. O‘zbekcha nomi.
2. Original nomi, manufacturer va model.
3. Qurilma nima.
4. Qurilma nima qiladi.
5. Ishlash prinsipi.
6. Nimalarni o‘rganish mumkin.
7. Asosiy qismlari.
8. Namuna tayyorlash.
9. Bosqichma-bosqich foydalanish.
10. Natijani o‘qish va talqin qilish.
11. Ko‘p uchraydigan xatolar.
12. Xavfsizlik.
13. Tozalash va kundalik xizmat.
14. Kalibratsiya va troubleshooting.
15. Amaliy mashqlar.
16. Ishonchli o‘quv manbalari.

## Qaror
Platformaning ustuvor maqsadi — qurilmani chuqur va aniq o‘rganish. Hech qanday 3D model, 2D qurilma sxemasi yoki hotspot ko‘rinishi ishlatilmaydi. Modelga xos tugma, parametr yoki texnik da’vo faqat user-provided ma’lumot yoki ishlab chiqaruvchining ishonchli manbasi bo‘lsa ko‘rsatiladi; aks holda manual/SOPga havola beriladi.

## Style Decisions
- Qurilma sahifasi uzun, lekin modulga bo‘lingan o‘quv konspekti sifatida ishlaydi.
- Bo‘limlar professorona, sodda va o‘zbekcha sarlavhalar bilan ajratiladi.
- Ishonchli manbalar sahifaning yakunida, alohida reference bo‘limida beriladi.
