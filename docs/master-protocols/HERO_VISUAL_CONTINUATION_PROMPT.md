# BioLab Hero Visual Continuation Prompt

Quyidagi promptni boshqa akkauntdagi yangi agentga to‘liq yuboring:

> BioLab Interactive Guide loyihasini **mavjud ishlayotgan holatini buzmasdan** davom ettiring. Avval quyidagi fayllarni to‘liq o‘qing: `docs/master-protocols/HERO_VISUAL_CONTINUATION_HANDOFF.md`, `docs/master-protocols/PROJECT_STATE.md`, `todo.md`, `client/src/lib/equipmentImages.ts`, `client/src/lib/equipmentImagePresentation.ts`, `client/src/lib/imagePresentationProfiles.ts`.
>
> Loyiha maqsadi: 100 ta qurilma kartasining barchasini foydalanuvchi tasdiqlagan BioLab laboratoriya-hero standardiga yaqinlashtirish. Qurilma katta, markazda, 16:9 kadrda, zamonaviy laboratoriya muhitida va dark mode’da aniq ko‘rinsin. Oqartirilgan ichki rectangle, letterboxing, noto‘g‘ri crop, qo‘l/odam, watermark, matn va soxta logo bo‘lmasin.
>
> Hozir yangi hero rasm ulangan IDlar: `BIO-016`–`BIO-022`, `BIO-024`, `BIO-025`, `BIO-027`–`BIO-029`, `BIO-031`, `BIO-033`, `BIO-035`. `BIO-001` qabul qilingan hero reference. Qolgan hero navbati: `BIO-002`–`BIO-015`, `BIO-023`, `BIO-026`, `BIO-030`, `BIO-032`, `BIO-034`, `BIO-036`–`BIO-100`.
>
> Qolgan qurilmalarni beshtalik batchlarda yarating. Har bir rasm original, matnsiz, 16:9, kamida 1600×900 bo‘lsin. Faylni `/home/ubuntu/webdev-static-assets/` ichiga saqlang, WebP’ga optimallashtiring, `manus-upload-file --webdev` orqali storage’ga yuklang. Keyin `equipmentImages.ts` da URL’ni almashtiring; `sourceType` qiymatini `ai-representative` qiling; `equipmentImagePresentation.ts` dagi `coverFrameIds` ga IDni qo‘shing. Har bir rasm o‘quvga mo‘ljallangan reprezentativ vizual ekanini saqlang; uni rasmiy manufacturer fotosi deb ko‘rsatmang.
>
> Har batchdan keyin `pnpm test`, `pnpm run check`, `pnpm run build`, `node scripts/tests/audit_image_loading.mjs`, `node scripts/tests/capture_mobile_card_renders.mjs`, `pnpm run audit:continuity` va `pnpm run release:check` ni bajaring. Mobil light/dark renderini ko‘rib chiqing. Test yoki visual audit muvaffaqiyatsiz bo‘lsa, release qilmang.
>
> `.env`, token, API key, parol va runtime loglarni GitHub yoki Drive’ga kiritmang. Har muhim batchdan keyin `todo.md` va `PROJECT_STATE.md` ni yangilang. Faqat yakuniy tekshiruvlardan keyin `pnpm run release:publish` bilan GitHub `uzme/biolab-interactive-guide` `main` branchiga va mavjud canonical Drive snapshotiga sinxronlang. Yangi Drive papkasi yoki duplicate yaratmang.
