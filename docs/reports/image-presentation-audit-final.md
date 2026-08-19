# Image Presentation Audit — Final

**Sana:** 2026-08-19  
**Qamrov:** BioLab katalogidagi 100 ta qurilma kartasi, mobil ekran rasm oynalari.

## Avtomatik natija

| Ko‘rsatkich | Natija |
|---|---:|
| Audit qilingan karta rasm oynalari | 100 / 100 |
| `laboratory` profil | 53 |
| `paper` profil | 45 |
| `ink` profil | 2 |
| Gorizontal overflow | Aniqlanmadi |
| Yo‘qolgan rasm | Aniqlanmadi |

## Joriy qilingan qoida

Rasmlar fon profiliga ko‘ra avtomatik `laboratory`, `paper` yoki `ink` guruhiga ajratildi. Oqartirilgan mahsulot rasmlarida `mix-blend-mode` o‘chirildi va rasm media oynasining o‘zi bilan bir xil och fon ishlatildi. Shu sababli avvalgi ichki oq to‘rtburchak (`letterboxing`) yo‘qoldi. Qorong‘i fonli rasmlar alohida yuzaga va kontrastni ko‘taruvchi ko‘rsatish qoidalariga ega bo‘ldi. Laboratoriya fonli rasmlar esa markazlangan `contain` hamda yumshoq fon qatlamini saqlab qoldi.

## Vizual nazorat namunasi

- **BIO-047 — Shpritsli nasos:** oq fon endi media oynasi bilan yaxlit ko‘rinadi; qurilma markazda, to‘liq va aniq ko‘rsatiladi.
- **BIO-091 — qPCR uchun digital PCR:** oq fon qoldig‘i kartaning qolgan qismidan ajralib turmaydi; qurilma masshtabi saqlangan.

## Xulosa

Rasmning tabiiy oq fonini generativ tarzda o‘chirib tashlash emas, balki har bir manba rasmning fon xususiyatiga mos media yuzasi va `object-fit` profili berildi. Bu mahsulot detallarini yo‘qotmasdan, barcha katalog yuzalarida izchil va professional ko‘rinish beradi.
