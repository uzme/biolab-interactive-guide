# Hero Command Deck — Mobil Vizual Audit

## Maqsad

Mobil bosh ekrandagi oldingi zich, 16 tugmali SOP rail o‘rniga soddaroq command-deck kompozitsiyasi qo‘llandi. O‘quv mazmuni va 16 bo‘lim modeli saqlanadi; faqat uning hero yuzasidagi vizual taqdimoti yangilandi.

## Tekshiruv natijasi

| Tekshiruv | Natija | Dalil |
|---|---|---|
| iPhone kengligi | PASS | 390×844 viewportda sarlavha, ikki CTA va o‘quv yo‘li gorizontal overflow bermadi. |
| 16 bo‘lim signali | PASS | Progress chizig‘ida 16 segment, 01/05/09/16 milestone’lari ko‘rinadi. |
| Etiketlar o‘qilishi | PASS | Bosqich kodi va nomlari ikki qatorli mini-etiketlarda alohida o‘qiladi. |
| Desktop kontrakti | PASS | Browser regressiyasi 1280px viewportda hero va katalog actionini tekshiradi. |
| Accessibility | PASS | Hero sarlavhasi, semantic action tugmalari va o‘quv yo‘li labeli mavjud. |

## Regression

`scripts/tests/test_hero_command_deck.mjs` 390px va 1280px viewportlarda yangi surface, 16 segmentli o‘quv yo‘li, milestone label’lari hamda katalog actionini tekshiradi. Test standart `pnpm test` zanjiriga kiritilgan.
