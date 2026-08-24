# Kun/tun laboratoriya dizayni — vizual audit

**Sana:** 2026-08-24  
**Muhit:** lokal development preview  
**Holat:** dastlabki light-mode audit muvaffaqiyatli.

| Ko‘rinish | Natija | Kuzatuv |
|---|---|---|
| 390 × 844 mobil | PASS | Hero, action-klaster, katalog kartalari va pastki kontent viewportdan chiqmaydi; sahifa mobilda bitta vertikal oqimda ishlaydi. |
| 1280 × 900 desktop | PASS | Hero laboratoriya yuzasi, SOP xaritasi, katalog bo‘limlari va kartalar ierarxiyasi o‘qiladi; mazmuni qirqilmagan. |
| 390 × 844 mobil, dark | PASS | Qorong‘i laboratoriya palitrasi fon/tekst kontrastini saqlaydi; hero, CTA va 4 bosqichli SOP xaritasi sig‘adi. |
| 1280 × 900 desktop, dark | PASS | Tungi rejimdagi teal aksentlar, ko‘rsatkichlar va navigatsiya bir xil laboratoriya uslubida, o‘qiladigan kontrast bilan chiqadi. |

`pnpm check && pnpm test && pnpm build` 2026-08-24 kuni PASS bo‘ldi. Browser regressiyasi avtomatik tema, OS dark/light afzalligi hamda `prefers-reduced-motion` holatida jonli laboratoriya animatsiyalari o‘chishini alohida tekshiradi. Canonical production host hali bu audit bilan tasdiqlanmagan: oldingi eskirgan bundle muammosi alohida diagnostika qilinadi.
