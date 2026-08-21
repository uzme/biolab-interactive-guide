# Hero Visual Audit Notes

## 2026-08-21 — Kontakt varaqlar 01–02

Read-only Drive auditida 76 ta ZIP fayl ochildi; barcha arxivlar integrity tekshiruvdan o‘tdi va barcha ichki rasm fayllari `2560×1440` WebP o‘lchamida. Quyidagi vizual qaydlar kontakt varaqlarning birinchi 40 ta noyob assetini 4×5 grid ko‘rinishida tekshirish asosida yozildi.

| Qamrov | Vizual holat | Keyingi qaror |
|---|---|---|
| BIO-001–005, BIO-007, BIO-009, BIO-011–015 | Qurilma markazda, matnsiz, qorong‘i teal laboratoriya fonida hamda katalog hero maqsadiga mos ko‘rinadi. | Noyob final asset sifatida qabul qilishga tayyor. |
| BIO-006, BIO-008, BIO-010, BIO-034, BIO-038, BIO-039 | Birinchi batch variantlari ilmiy sinf yoki instrument detalini yetarli aniq ko‘rsatmaydi; ularga Drive’da keyingi duplicate variantlar bor. | Batch 06–11 final variantlarini alohida contact sheetda solishtirish shart. |
| BIO-023, BIO-026, BIO-030, BIO-032, BIO-036, BIO-037, BIO-040–045, BIO-050–055 | Kompozitsiya, markazlashuv va qurilma sinfi o‘quv hero mezoniga mos ko‘rinadi. | Model nomi bilan metadata auditdan keyin qabul qilishga tayyor. |
| BIO-041 | Ko‘rinadigan Batch 13 varianti vakuum filtrga o‘xshaydi, biroq handoff uni superseded deb belgilaydi. | Missing Batch 15 authoritative replacement kelmaguncha aktivga ulanmaydi. |
| BIO-046–049 | Ko‘rinadigan ilk variantlar mavjud; har birining Drive’da keyingi duplicate varianti bor. | Batch 24–27 variantlari bilan parallel solishtirish talab qilinadi. |

> Bu qaydlar faqat ishchi vizual auditdir. Aktiv mappingga faqat yakuniy variantlar tanlanib, model nomi va regression bilan tekshirilgandan keyin kiritiladi.

## 2026-08-21 — Kontakt varaqlar 03–04

BIO-056–095 qamrovida kompozitsiya bir xil professional qorong‘i-teal laboratoriya estetikasi, matnsiz fon va 16:9 hero nisbatini saqlaydi. Qurilmalar to‘liq yoki asosiy optik/mexanik qismlari bilan markazga joylashtirilgan; odam qo‘llari, mahsulot ustidagi marketing matni va ko‘rishni chalg‘ituvchi sahnalar kuzatilmadi.

| Qamrov | Vizual holat | Keyingi qaror |
|---|---|---|
| BIO-056–064 | Xromatografiya, tasvirlash, spektroskopiya hamda gistologiya instrumentlari tashqi konfiguratsiyasi mavzuga mos. | Noyob final asset sifatida mappingga tayyor. |
| BIO-065–075 | Mikroinjeksiya, elektroporatsiya, bioprint, nano-quritish, DLS va termik/namuna tayyorlash sinflari vizual jihatdan o‘qiladigan. | Metadata va URL tekshiruvi bilan qabul qilishga tayyor. |
| BIO-076–095 | Avtomatlashtirilgan analizatorlar, sequencer/robotika, hujayra ishlovi va filtratsiya instrumentlari markazlangan hamda card/detail hero uchun yetarli kontrastga ega. | BIO-082, BIO-086 va BIO-093 bo‘yicha handoffdagi final variant qoidalari mapping qatlamida alohida tekshiriladi. |

> AI-hero rasmlarida ishlab chiqaruvchi brend yozuvi majburiy aniqlik manbai emas. Bu loyiha uchun tasvirning asosiy vazifasi — metadatada berilgan instrument sinfi va konfiguratsiyasini matnsiz, markazlangan o‘quv vizuali sifatida ko‘rsatishdir.

## 2026-08-21 — Kontakt varaq 05

BIO-096–100 assetlari ham standartdan chiqmaydi: uskunalar markazda, qorong‘i-teal laboratoriya fonida, matnsiz va 16:9 formatda berilgan. BIO-098 kompyuter ish stansiyasini to‘liq kompozitsiyada ko‘rsatadi; uning sahifadagi o‘quv metadata bilan mosligi mapping integratsiyasidan oldin ustuvor tekshiruvga kiritiladi. BIO-096, BIO-097, BIO-099 va BIO-100 asosiy laboratoriya uskuna sinfini o‘qiladigan miqyosda tasvirlaydi.

> Yakuniy natija: mavjud 85 ta noyob assetda umumiy vizual standart **PASS**. Ammo 15 ta BIO-ID va authoritative Batch 15 Drive manbasida yo‘q; shu sabab 100/100 integratsiya uchun hali yetarli input mavjud emas.

## 2026-08-21 — Duplicate variantlar solishtiruvi

Duplicate variantlar yonma-yon ko‘rildi. Quyidagi keyingi batchlar instrument sinfini aniqroq ko‘rsatadi va aktiv variant sifatida tanlandi: `BIO-006 → Batch 06`, `BIO-008 → Batch 07`, `BIO-010 → Batch 08`, `BIO-034 → Batch 09`, `BIO-038 → Batch 10`, `BIO-039 → Batch 11`, `BIO-046 → Batch 24`, `BIO-047 → Batch 25`, `BIO-048 → Batch 26`, `BIO-049 → Batch 27`. Oldingi versiyalar faqat audit izchilligi uchun canonical Drive’da saqlanadi va loyiha mappingiga ulanmaydi.

> Ayniqsa BIO-006, BIO-008, BIO-010, BIO-034, BIO-038, BIO-039 hamda BIO-046–049 uchun keyingi batchlar avvalgi noto‘g‘ri yoki noaniq qurilma sinfini tegishli gaz xromatografi, LC-MS/MS, Western-blot tasvirlash, atom-absorbsion spektrometriya, refraktometriya, lyuminestsent mikroskopiya, CO₂ o‘lchovi, shpritsli nasos, peristaltik nasos va gel-dokumentatsiya konfiguratsiyasi bilan almashtiradi.
