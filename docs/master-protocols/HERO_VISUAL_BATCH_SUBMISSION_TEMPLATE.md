# BioLab Hero Batch — Yetkazib Berish Shabloni

Ushbu shablon boshqa akkaunt yoki tashqi AI yaratgan hero-vizual batchini asosiy BioLab agentiga xatosiz topshirish uchun ishlatiladi. Rasmlar **faqat** mavjud canonical Drive root — `Biotexnologiya yangi` (`19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV`) — ichiga yuklanadi. Yangi papka, kod repositorysi yoki Drive root yaratilmaydi.

## Batch qoidasi

Har batch 5–10 ta WebP fayldan iborat bo‘ladi. Fayl nomi `BIO-NNN.webp` formatidan chetga chiqmaydi. Barcha fayllar bitta `BioLab_hero_assets_batch_NN.zip` arxivida bo‘ladi; ZIP ichida kod, manifestning maxfiy nusxasi, `.env`, token, log yoki boshqa turdagi fayl bo‘lmaydi.

| Tekshiruv | Qabul sharti |
|---|---|
| Fayl formati | Faqat `.webp` |
| Kadr | 16:9, kamida 1600×900 px |
| Asosiy obyekt | Bitta, markazda, to‘liq ko‘rinadigan va o‘sha BIO ID qurilma sinfiga mos instrument |
| Vizual til | Qorong‘i teal/cyan laboratoriya foni, matnsiz, odam/qo‘l/logotipsiz |
| Arxiv | `BioLab_hero_assets_batch_NN.zip` va faqat rasm fayllari |

## Yuboriladigan xabar

Quyidagi blokni to‘ldirib asosiy BioLab agentiga yuboring:

```text
Batch: NN
ZIP Drive linki: <to‘liq Google Drive havolasi>
ZIP fayl nomi: BioLab_hero_assets_batch_NN.zip
Fayllar: BIO-NNN.webp, BIO-NNN.webp, BIO-NNN.webp
Qayta yaratilgan IDlar: <bo‘lsa yozing, bo‘lmasa yo‘q>
Aniqlashtirish kerak bo‘lgan IDlar: <bo‘lsa yozing, bo‘lmasa yo‘q>
```

> Asosiy agent ZIP’ni ochib, qurilma sinfi, rasm sifati, markazlashuv, kontrast va WebP texnik parametrlarini audit qiladi. Faqat **PASS** bo‘lgan tasvirlar katalog registryga ulanadi; noto‘g‘ri rasm uchun qayta yaratish briefi qaytariladi.
