# BioLab Hero Visual Continuation Handoff

## Maqsad va joriy holat

BioLab katalogida **100 ta qurilma** mavjud va ular to‘liq saqlanadi. Ushbu ishning maqsadi har bir qurilmaning katalog kartasida foydalanuvchi tasdiqlagan **laboratoriya-hero** ko‘rinishini berishdir: qurilma katta va markazda, 16:9 media oynasini estetik egallagan, laboratoriya muhiti bilan uyg‘un va qorong‘i rejimda ham aniq ko‘rinadigan bo‘lishi kerak.

Hozircha barcha 100 ta rasmning `object-fit`, fon va dark-mode kontrasti avtomatik audit qilingan. Quyidagi **15 ta** qurilma yangi laboratoriya-hero vizualiga o‘tkazilgan va yengil WebP asset sifatida productionga ulangan:

| Holat | Qurilma IDlari | Ko‘rsatish qoidasi |
|---|---|---|
| Yangi hero vizual ulangan | `BIO-016`–`BIO-022`, `BIO-024`, `BIO-025`, `BIO-027`–`BIO-029`, `BIO-031`, `BIO-033`, `BIO-035` | `cover`, laboratoriya foni, markazlangan hero framing |
| Foydalanuvchi tasdiqlagan avvalgi hero reference | `BIO-001` | `cover`, laboratoriya foni |
| Hero-vizual qayta yaratish navbatida | `BIO-002`–`BIO-015`, `BIO-023`, `BIO-026`, `BIO-030`, `BIO-032`, `BIO-034`, `BIO-036`–`BIO-100` | Jami 84 ta yangi hero asset talab qilinadi |

> `BIO-001` avvaldan laboratoriya-hero standarti uchun qabul qilingan reference hisoblanadi. Yangi 15 asset bilan birgalikda hero-standarddagi kartalar soni 16 ta; qayta yaratilishi kerak bo‘lgan navbat 84 ta qurilmadan iborat.

## Muhim fayllar

| Fayl | Vazifasi |
|---|---|
| `client/src/lib/equipmentImages.ts` | Har bir `BIO-` ID uchun asset URL, alt matn va manba turini saqlaydi |
| `client/src/lib/equipmentImagePresentation.ts` | `coverFrameIds`, `laboratoryHeroIds` va joylashuv qoidalarini boshqaradi |
| `client/src/lib/imagePresentationProfiles.ts` | Audit asosidagi `laboratory`, `paper`, `ink` media fon profillari |
| `client/src/components/EquipmentCard.tsx` | Katalog kartasidagi rasm renderi, preload va loading atributlari |
| `client/src/components/DeviceViewer.tsx` | Qurilma batafsil oynasidagi rasm renderi |
| `client/src/components/Pure3DCarousel.tsx` | Carousel rasm renderi |
| `client/src/pages/Home.tsx` | Birinchi ko‘rinadigan kartalar uchun image warmup strategiyasi |
| `scripts/data/optimize_hero_assets.py` | Tayyor hero JPG rasmlarini WebP’ga yengillashtiradi |
| `scripts/tests/audit_image_loading.mjs` | Rasm yuklanish prioriteti va so‘rovlarini o‘lchaydi |
| `scripts/tests/capture_mobile_card_renders.mjs` | Mobil kartalarning 100 ta render capture’ini yaratadi |
| `docs/reports/image-presentation-audit-final.md` | Avvalgi visual audit natijalari |

## Qolgan 84 hero vizual uchun qat’iy standart

Har bir yangi rasm **original, matnsiz, 16:9, 1600×900 yoki undan katta** bo‘lsin. Qurilma media oynasining markazida, umumiy kadrning taxminan 60–80 foizini egallagan holda ko‘rinsin. Fon zamonaviy, toza, och-ko‘k yoki neytral biotexnologiya laboratoriyasi bo‘lsin. Odamlar, qo‘llar, logotiplar, watermark, alohida yozuv va soxta model belgilari bo‘lmasin. Qurilma haqiqiy laboratoriya instrumenti turiga mos, lekin uydirma manufacturer logotipisiz tasvirlansin.

AI tasvirining maqsadi **o‘quv uchun reprezentativ vizual** bo‘lib, uni rasmiy manufacturer mahsulot fotosi deb ko‘rsatish mumkin emas. `equipmentImages.ts` ichida bunday rasm uchun `sourceType: "ai-representative"` qoladi va alt matnda “laboratoriya-realistik o‘quv vizuali” ifodasi ishlatiladi.

## Har bir batch uchun bajariladigan tartib

1. Avval navbatdagi beshta `BIO-` ID uchun `equipmentData.ts` dan qurilma turi va model mazmunini o‘qing.
2. Yuqoridagi standartga mos, **bir xil fon tili va kamera burchagi** bilan beshta original hero rasm yarating.
3. Rasm fayllarini `/home/ubuntu/webdev-static-assets/` ichida `biolab-equipment-XXX-hero.jpg` nomida saqlang. Assetlarni loyiha katalogi ichiga qo‘ymang.
4. `scripts/data/optimize_hero_assets.py` bilan WebP nusxasini yarating. Maqsad — ko‘rish sifati saqlangan holda har bir rasmni yengil assetga aylantirish.
5. `manus-upload-file --webdev` bilan WebP fayllarni yuklang va qaytgan storage URL’ni aynan o‘sha ko‘rinishda ishlating.
6. `equipmentImages.ts` ichida har bir ID URL’ini yangi WebP URL’ga almashtiring, alt matnni qurilma turiga moslashtiring va `sourceType: "ai-representative"` qiling.
7. `equipmentImagePresentation.ts` ichidagi `coverFrameIds` ro‘yxatiga yangi IDlarni qo‘shing. Bu rasmga `cover` va laboratoriya fon profilini avtomatik beradi.
8. Agar qurilma kadrda markazdan siljisa, faqat o‘sha ID uchun `tunedPositions` yozuvini qo‘shing; butun katalog uchun global crop qoidasini o‘zgartirmang.
9. Har batchdan keyin testlar va visual auditni bajaring. Sifatsiz yoki noto‘g‘ri instrument tasvirini ulamang.

## Tez yuklash qoidasi

Yaratilgan 15 hero asset WebP formatiga o‘tkazilgach umumiy hajm **63.79 MiB dan 0.78 MiB gacha** qisqardi. Shu sababli yangi assetlar ham avval WebP’ga optimallashtirilishi shart. Birinchi ekrandagi kartalar preload va warmup bilan tezroq yuklanadi; keyingi kartalar esa foydalanuvchi skroll qilganda lazy-load bo‘lib qoladi. Barcha 100 ta rasmni birdaniga eager yuklamang — bu mobil tarmoqni sekinlashtiradi.

## Majburiy tekshiruvlar

Har bir muhim batch yoki release oldidan quyidagi buyruqlarni loyiha ildizida bajaring:

```bash
pnpm test
pnpm run check
pnpm run build
node scripts/tests/audit_image_loading.mjs
node scripts/tests/capture_mobile_card_renders.mjs
pnpm run audit:continuity
pnpm run release:check
```

Keyin mobil light/dark ko‘rinishda kamida yangi qo‘shilgan assetlardan birini va `BIO-001` reference kartasini vizual tekshiring. Faqat tekshiruvlar muvaffaqiyatli tugagach `pnpm run release:publish` bilan sanitizatsiyalangan snapshotni yuboring.

## Xavfsizlik va sinxronlash qoidalari

`.env`, token, API key, parol, browser loglari va runtime chiqindilarini hech qachon GitHub yoki Drive snapshotiga kiritmang. Release faqat mavjud master skript orqali amalga oshiriladi; u GitHub `uzme/biolab-interactive-guide` `main` branchiga va mavjud canonical Google Drive snapshotiga yuboradi. Yangi Drive root yoki duplicate papka yaratmang. `todo.md` hamda `docs/master-protocols/PROJECT_STATE.md` ga har bir muhim batchning qamrovi va sinov holatini yozib boring.
