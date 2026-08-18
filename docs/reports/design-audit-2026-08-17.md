# BioLab dizayn auditi — 2026-08-17

## Source-of-truth saqlanadigan elementlar

BioLab’ning cold white/mint canvas, chuqur teal authority palette, chap navigatsiya, dark hero panel, technical badges, original gorizontal Pure CSS 3D Carousel geometriyasi va O‘zbekcha SOP oqimi o‘zgartirilmaydi.

## Aniqlangan polish yo‘nalishlari

Desktop previewda hero va katalog vizual jihatdan uyg‘un, ammo uzun katalog scroll davomida bir xil card feed sifatida ko‘rinadi. O‘quv platformasi hissini kuchaytirish uchun katalog guruhlari raqamlangan ilmiy modul zonalari bilan ajratiladi, section headerlarda SOP qadam indikatori va calibrated separator qo‘llanadi. Kichik metadata matnlari uchun hierarchy kuchaytiriladi, lekin card markup va qurilma rasmlari o‘zgarmaydi.

Mint ranglar active learning signal, SOP status va primary protocol highlights uchun cheklanadi. Deep teal/slate ranglari structure, heading va authority uchun ishlatiladi. Micro-interactionlar mavjud transition tizimi bilan 180–260 ms oralig‘ida qoladi; Pure3DCarousel geometriyasiga tegilmaydi.

## Qabul mezonlari

Katalog 10 ta kategoriya bo‘yicha aniq modul sarlavhalariga ega bo‘ladi; har bir guruhda raqamlangan SOP badge yoki progress rail mavjud bo‘ladi; mobil ko‘rinishda 2 ustunli card grid va pastki navigatsiya buzilmaydi; `prefers-reduced-motion` qoidasi saqlanadi; mavjud qidiruv, filter, Bookmarks va DeviceViewer oqimlari regressiyasiz ishlaydi.

## Mobil preview kuzatuvlari

390×844 previewda header ixcham va navigatsiya tugmalari yetarlicha aniq. Hero panel mobil ekran kengligini yaxshi egallaydi; 16 qadamli rail o‘qiladigan, biroq hero ichidagi sarlavha pastga uzun tushgani sabab primary CTA lar viewportdan pastda qoladi. Katalogga o‘tishni tezlashtirish uchun mobil hero matn oralig‘i va CTA grouping ehtiyotkorlik bilan ixchamlashtiriladi. Bottom navigation mavjudligi sabab content bottom padding saqlanadi. Hero background, teal gradient va original typographic ruhiyat o‘zgartirilmaydi.

## Polishdan keyingi verifikatsiya

Desktop previewda hero sarlavhasi va right-side scientific record paneli bir-biriga to‘qnashmadi; yuqori header, sidebar va dark hero authority hierarchy saqlandi. Mobil previewda hero sarlavhasi bir oz ixchamlashdi, ikkala CTA ham viewport ichida ko‘rinadi va 16-step rail to‘liq o‘qiladi. Katalogdagi yangi SOP spine desktop/mobil uchun to‘rt bosqichli vizual anchor sifatida ishlaydi. TypeScript, production build, Vitest va katalog/device/carousel regressiya skriptlari muvaffaqiyatli o‘tdi.

## Interaktivlik va loading polish verifikatsiyasi

Umumiy Button komponentiga hoverda yengil ko‘tarilish, soyani kuchaytirish, ikonka siljishi, focus-visible halo, active bosilish va loading paytida cursor/ikonka animatsiyasi qo‘shildi. Hover faqat pointer qurilmalarda ishlaydi, shuning uchun touch ekranlarda keraksiz yopishib qolgan hover holati yuzaga kelmaydi. Routerdagi mavjud page-transition va progress-indicator saqlandi, yangi GPU-friendly transition bazasi bilan uyg‘unlashtirildi. `prefers-reduced-motion` qoidasi barcha yangi animatsiyalarni qisqartiradi.

Desktop va mobil screenshot tekshiruvida hero, CTA tugmalari, header actions, sidebar va mobil bottom navigation layouti buzilmagani ko‘rildi. TypeScript check, production build, Vitest (4 test) va katalog/qurilma regressiya skriptlarida xatolik aniqlanmadi.

### Navigatsiya interactionlari qayta tekshiruvi

Yakuniy desktop screenshotda sidebarning faol bandida chap teal indikator, hover/focus uchun yumshoq soya va ikonka mikro-siljishi mavjud dizayn tiliga mos ko‘rindi; hero va ikkala CTA tugmasi joylashuvi o‘zgarmadi. Mobil screenshotda header actionlari, hero SOP rail, ikki CTA va bottom navigation uchun ajratilgan joy saqlanib qoldi. Touch viewport uchun hover media query bilan cheklangani sabab mobil layoutda yopishib qolgan hover holati kuzatilmadi.

## Responsive audit — 2026-08-17

Desktop 1280 px viewportda mavjud sidebar, dark-teal hero, 16-qadam SOP rail va kartalar tizimi vizual jihatdan barqaror ko‘rindi. Keng ekranlar uchun asosiy nazorat nuqtalari kontentning haddan tashqari yoyilib ketmasligi, hero va katalogning bir xil max-width ichida qolishi hamda TV ko‘rinishida matn va kartalar juda kichrayib ketmasligidir.

Telefon 390×844 viewportda top navigation compact holatga o‘tadi, hero ichidagi 16 qadam raili ikki qatorda o‘qiladigan bo‘ladi va CTA tugmalari touch uchun yetarli balandlikni saqlaydi. Keyingi responsive ishlar davomida hero sarlavhasi, rail, CTA va katalog kartalari orasidagi vertikal spacing, horizontal overflow, modal kengligi va 3D carousel touch-friendly holati alohida verifikatsiya qilinadi.


### Responsive layout qayta tekshiruvi — 2026-08-17

1280×720 desktop, 768×1024 planshet, 375×812 telefon, 320×740 tor telefon va 1920×1080 TV viewportlarida tekshirildi. Sidebar desktopda 250px, planshetda ixcham 76px va telefonda touch-friendly bottom navigation rejimida ishladi. Hero, 16-qadamli SOP rail, statistika kartalari va action tugmalari barcha viewportlarda konteyner ichida qoldi; 320px kenglikda sarlavha ko‘proq satrga bo‘lindi, ammo gorizontal overflow yoki kesilgan matn kuzatilmadi. Pure CSS 3D Carousel geometriyasi clamp asosidagi scene/card o‘lchamlari bilan moslashtirildi, original gorizontal aylanish va pagination mantig‘i saqlandi. DeviceViewer modalidagi rasm, ikki ustunli o‘quv layouti va sarlavha o‘lchami telefon/planshet uchun moslashtirildi. `prefers-reduced-motion` qoidalari saqlanib, animation va transitionlar qisqartiriladi.

### UI redesign visual audit — 2026-08-18

390×844 mobil viewportda modern compact header, menyu, xatcho‘plar, offline va filter boshqaruvlari ko‘rindi; hero SOP rail, 16 qadam, 100 qurilma izohi va CTA lar overflow qilmasdan joylashdi. 1280×720 desktop viewportda persistent sidebar, `Sozlamalar & Copyright` kartasi, yuqori action bar, LAB-01/16-step SOP spine va ilmiy rekord paneli ko‘rindi. Qizil bilan ko‘rsatilgan mobil boshqaruvlar mazmunli interaktiv tugmalarga ulangan. Testlar interaktiv drawer/settings oqimini ham qamrab oldi.
