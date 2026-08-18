# BioLab Interactive Guide — Change va Sync hisoboti

**Sana:** 18-avgust 2026  
**Umumiy holat:** **READY**  
**Rejim:** mavjud loyiha saqlandi; qayta yozish, dizaynni almashtirish yoki mavjud funksiyalarni olib tashlash bajarilmadi.

## Yakuniy natija

`Biotexnologiya yangi` papkasi endi BioLab loyihasining canonical Google Drive root manzili sifatida sozlandi. Avval berilgan `1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd` ID amalda `Second Brain` papkasiga tegishli edi; snapshot duplicate qilinmasligi uchun mavjud canonical `BioLab_Interactive_Guide_source.tar.gz` fayli parent-only update orqali yangi canonical rootga ko‘chirildi. Keyingi sanitizatsiyalangan release’lar ham shu mavjud faylni joyida update qiladi.

Lokal clean-clone regression muammosi ham minimal patch bilan bartaraf etildi. Forge storage secretlari mavjud bo‘lmagan local development muhitida `/manus-storage/...` asset so‘rovlari endi joriy BioLab deployment storage’iga fallback redirect qiladi. Bu faqat Vite development storage proxy’iga tegishli bo‘lib, production UI, asset registry va original dizayn geometriyasini o‘zgartirmaydi. PWA offline pack esa 6 ta cheklangan worker yordamida assetlarni parallel cache qiladi; mavjud cache semantics, progress xabarlari va Uzbek offline status oqimi saqlangan.

## Kiritilgan o‘zgarishlar

| Qism | Amal | Continuity natijasi |
|---|---|---|
| Canonical Drive metadata | Eski root ID barcha faol hujjat va release skriptlarida `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV` bilan almashtirildi | `Biotexnologiya yangi` yagona canonical root sifatida qayd etildi |
| Drive snapshot | Mavjud file ID `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` yangi rootga ko‘chirildi va keyin joyida update qilindi | Duplicate snapshot yaratilmagan |
| Vite storage proxy | Secretlarsiz local clone uchun faqat image asset fallback redirect qo‘shildi | Birinchi 3 priority image testi o‘tdi |
| Service worker | Offline pack ketma-ket download o‘rniga maksimal 6 worker bilan cache qiladi | Offline pack regression timeout’i bartaraf etildi |
| Documentation | README, state, architecture, reproduction, index, restoration, changelog va continuity metadata yangilandi | GitHub/Drive cross-linklari yangi root bilan moslandi |
| `todo.md` | Har bir o‘zgarishdan oldin `[ ]` band qo‘shildi; verified bandlar keyin `[x]` qilindi | Ishlar izi saqlandi |

Original Modern Precision Biotech ko‘rinishi, Pure CSS 3D Carousel’ning `.scene`, `.a3d`, `.card` geometriyasi, 100 ta qurilma, 16 bo‘limli o‘quv tarkibi, bookmarks, qidiruv/filter, modal, PDF eksporti, PWA offline rejimi va responsive layout o‘zgartirilmadi.

## Validation natijalari

| Tekshiruv | Natija |
|---|---|
| `pnpm install --frozen-lockfile --ignore-scripts` | **PASS** |
| `pnpm run check` | **PASS** |
| `pnpm build` | **PASS**, analytics placeholder va katta chunk warninglari mavjud |
| `pnpm test` | **PASS**; katalog, search/filter, 100 karta, mobile image loading, DeviceViewer, PWA, bookmarks, modal va 16 bo‘lim oqimi tekshirildi |
| `node scripts/verify_continuity_docs.mjs` | **READY**; 20 required document va canonical cross-linklar tasdiqlandi |
| `node scripts/sync_release.mjs --check` | **CHECK READY**; secret scan va sanitized archive tayyorlandi, upload bajarilmadi |
| `node scripts/sync_release.mjs --publish` | **PASS**; GitHub push va Drive update bajarildi |
| `git diff --check` | **PASS** |
| Tracked secret/runtime sanitizatsiyasi | **PASS**; `.env*`, token, API key, PAT, log, `node_modules`, `dist` va archive runtime fayllari release’dan chiqarildi |

Production build quyidagi non-blocking warninglarni saqlab qolmoqda: `VITE_ANALYTICS_ENDPOINT` va `VITE_ANALYTICS_WEBSITE_ID` placeholderlari aniqlanmagan, analytics script module attributesiz qolgan va learning-data chunk hajmi katta. Ular build yoki regression testlarini to‘xtatmadi.

## GitHub synchronization

GitHub `main` branchga sanitizatsiyalangan source muvaffaqiyatli yuborildi.

| Ko‘rsatkich | Qiymat |
|---|---|
| Repository | `https://github.com/uzme/biolab-interactive-guide` |
| Branch | `main` |
| Final live commit | `700a30a3fb8c1d290548f4b894099afe89b0232a` |
| Push holati | **PASS** |
| Source/design rewrite | **Bajarilmadi** |

GitHub server push vaqtida repository default branchida dependency advisorylari borligini bildirdi: jami **123 ta** advisory, jumladan **2 critical, 40 high, 72 moderate va 9 low**. Bu alohida keyingi remediation vazifasi sifatida qoldirildi; hozirgi patch dependency versiyalarini o‘zgartirmadi.

## Google Drive synchronization

Snapshot `Biotexnologiya yangi` papkasida mavjud file IDni saqlagan holda update qilindi. Exact-name qidiruv canonical root ichida **1 ta** faol fayl qaytardi; duplicate snapshot yaratilmagan.

| Ko‘rsatkich | Qiymat |
|---|---|
| Canonical root name | `Biotexnologiya yangi` |
| Canonical root ID | `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV` |
| Snapshot name | `BioLab_Interactive_Guide_source.tar.gz` |
| Snapshot file ID | `1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh` |
| Parent ID | `19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV` |
| Final modified time | `2026-08-18T17:02:43.137Z` |
| Size | `546601` bytes |
| MD5 | `f05daa76958fb3180b62fc9e9b96f7d0` |
| Trashed | `false` |
| Exact-name active files in canonical root | `1` |
| Upload/update result | **PASS** |
| Kodlar, PUBG, Skills papkalari | Tegilmadi |

Final sanitized source fingerprint release vaqtida `7f798c715bc2e439658709d57b2e44629d91ca12daefb56ae743de79dc1c8a0a` bo‘ldi.

## Qolgan masalalar

Current approved restoration patch uchun holat **READY**. Keyingi mustaqil vazifa sifatida GitHub ko‘rsatgan dependency advisorylarini regressiyasiz kamaytirish kerak. Build warninglari ham keyingi texnik tozalashga qoldirildi. Ushbu vazifalar hozirgi ishlayotgan UI, 3D carousel, 100 ta qurilma katalogi yoki 16 bo‘limli tarkibni qayta yozishni talab qilmaydi.

## References

[1]: https://github.com/uzme/biolab-interactive-guide "BioLab Interactive Guide — GitHub repository"
[2]: https://github.com/uzme/biolab-interactive-guide/commit/700a30a3fb8c1d290548f4b894099afe89b0232a "Final synchronized GitHub commit"
[3]: https://drive.google.com/drive/folders/19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV "Biotexnologiya yangi — canonical Drive root"
[4]: https://drive.google.com/file/d/1q3PT-h_0FOHSoTIRMfQ6IOaRqHYkrgjh/view "BioLab_Interactive_Guide_source.tar.gz — canonical snapshot"
