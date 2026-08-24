import type { LearningContent } from "./learningData";

const learningBlock3: Record<number, LearningContent> = {
    "51": {
    "number": 51,
    "title": "Suv distillyatori",
    "originalName": "Ultrapure suv tozalash tizimi",
    "manufacturer": "Merck",
    "model": "Milli-Q IQ 7000 (Merck)",
    "sourceKind": "learning",
    "whatIs": "Ultratoza suv (18.2 MΩ·cm) ishlab chiqaradi.",
    "whatItDoes": "PCR, HPLC, hujayra kulturasi va buferlar uchun toza suv",
    "learningOutcomes": "Bu qurilma bilan pcr, hplc, hujayra kulturasi va buferlar uchun toza suv bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Namuna konteyneri, adaptor/probe, PPE va kontaminatsiya nazoratini tekshiring.\n2. Namuna hajmi, buffer, sovitish talabi va yopiq/ochiq ishlash cheklovini SOP bo‘yicha belgilang.\n3. Milli-Q IQ 7000 (Merck) uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n4. Namuna va mos aksessuarni xavfsiz mahkamlang.\n5. Faqat tasdiqlangan protokol doirasida ishlov bering; qizish, aerozol yoki to‘kilishni kuzating.\n6. Ishlov berilgach, kerakli fraksiyani protokol bo‘yicha ajrating va keyingi analiz uchun saqlang.\n7. Proba, adapter yoki kamera qismlarini ruxsat etilgan usul bilan tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: aerozol, shovqin/ultratovush yoki harakatlanuvchi qismlar. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Milli-Q IQ 7000 (Merck)** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Milli-Q IQ 7000 (Merck)** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Suv distillyatorining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Milli-Q IQ 7000 (Merck) manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Milli-Q IQ 7000 (Merck) bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "52": {
    "number": 52,
    "title": "Termomixer (blok termostat)",
    "originalName": "Termomixer (blok termostat)",
    "manufacturer": "Eppendorf",
    "model": "Eppendorf ThermoMixer C",
    "sourceKind": "learning",
    "whatIs": "Aralashtirishni isitish bilan birlashtirib qisqa trubkalarda inkubatsiya qiladi.",
    "whatItDoes": "Ferment reaksiyalari, antikor inkubatsiyasi, digestion",
    "learningOutcomes": "Bu qurilma bilan ferment reaksiyalari, antikor inkubatsiyasi, digestion bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Eppendorf ThermoMixer C uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Eppendorf ThermoMixer C** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Eppendorf ThermoMixer C** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Termomixer (blok termostat)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Eppendorf ThermoMixer C manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Eppendorf — rasmiy support va manuals",
        "url": "https://www.eppendorf.com/us-en/download-center",
        "note": "Eppendorf ThermoMixer C nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "53": {
    "number": 53,
    "title": "Avtomatik kolonka (SPE)",
    "originalName": "SPE kartriji (Oasis HLB) — sarf materiali",
    "manufacturer": "Waters",
    "model": "Waters Oasis HLB 3cc Cartridge",
    "sourceKind": "learning",
    "whatIs": "Qattiq faza ekstraksiyasi kolonkasi.",
    "whatItDoes": "Murakkab matrikslardan maqsadli moddani tozalash, konsentrlash",
    "learningOutcomes": "Bu qurilma bilan murakkab matrikslardan maqsadli moddani tozalash, konsentrlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Waters Oasis HLB 3cc Cartridge uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Waters Oasis HLB 3cc Cartridge** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Waters Oasis HLB 3cc Cartridge** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Avtomatik kolonka (SPE)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Waters Oasis HLB 3cc Cartridge manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Waters — rasmiy support va manuals",
        "url": "https://www.waters.com/",
        "note": "Waters Oasis HLB 3cc Cartridge nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "54": {
    "number": 54,
    "title": "Protein elektroforez tizimi (SDS-PAGE)",
    "originalName": "Protein elektroforez tizimi (SDS-PAGE)",
    "manufacturer": "Bio-Rad",
    "model": "Bio-Rad Mini-PROTEAN Tetra Cell",
    "sourceKind": "learning",
    "whatIs": "Oqsillarni molekulyar massa bo'yicha ajratadi.",
    "whatItDoes": "Oqsil profili, tozalik nazorati, Western blot tayyorlash",
    "learningOutcomes": "Bu qurilma bilan oqsil profili, tozalik nazorati, western blot tayyorlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/bo‘yash yoki gel/chip → optik yoki elektr maydon orqali ajratish/deteksiya → tasvir, histogramma yoki electropherogram → sifat nazorati bilan talqin.",
    "mainParts": "- Namuna joylashadigan zona: slide, plate, gel, chip yoki flow cellni ushlab turadi.\n- Optik/elektr moduli: tasvir, floresans yoki migratsiya signalini hosil qiladi.\n- Detektor/kamera: signalni raqamli ma’lumotga aylantiradi.\n- Dasturiy interfeys: tasvir, gate, histogramma yoki electropherogramni boshqaradi.",
    "samplePreparation": "Namuna turi uchun mos slide, bo‘yash, fixatsiya, buffer, gel yoki chip tanlanadi. Kontaminatsiya, havo pufagi va noto‘g‘ri konsentratsiya tasvir/signal sifatini yomonlashtirishi mumkin.",
    "workflow": "1. Optik sirt, kamera/detektor, slide/gel/chip yoki flow cell zonasi holatini tekshiring.\n2. Namuna konsentratsiyasi, bo‘yash/fixatsiya yoki marker/ladder talabini metodga mos tayyorlang.\n3. Focus, light path yoki elektr maydon komponentlarini SOP bo‘yicha tayyorlang.\n4. Bio-Rad Mini-PROTEAN Tetra Cell uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Control namuna, calibration slide/bead yoki marker talab qilinsa yuklang.\n6. Tasdiqlangan acquisition/analysis methodini tanlang.\n7. Signal sifati, saturatsiya, fokus va backgroundni run davomida kuzating.\n8. Tasvir, histogramma yoki electropherogramni saqlang; QC bilan tekshirgach talqin qiling.\n9. Optik sirtlarni faqat ishlab chiqaruvchi tavsiya qilgan usul bilan tozalang.",
    "resultInterpretation": "Tasvir sifati, fokus, signal-to-noise, marker/ladder, kontrol namuna yoki gating strategiyasi tekshiriladi. Talqin usuli tanlangan assay va validatsiyalangan analiz rejasi bilan mos bo‘lishi shart.",
    "commonMistakes": "- Fokus, background, marker yoki controlni tekshirmaslik.\n- Signal saturatsiyasi yoki noto‘g‘ri acquisition sozlamasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: lazer/UV yoki kuchli yorug‘lik, elektr va biologik/kimyoviy namuna. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bio-Rad Mini-PROTEAN Tetra Cell** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bio-Rad Mini-PROTEAN Tetra Cell** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Protein elektroforez tizimi (SDS-PAGE)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bio-Rad Mini-PROTEAN Tetra Cell manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Bio-Rad Mini-PROTEAN Tetra Cell nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "55": {
    "number": 55,
    "title": "Izoelektrik fokuslash (IEF) tizimi",
    "originalName": "Izoelektrik fokuslash (IEF) tizimi",
    "manufacturer": "Bio-Rad",
    "model": "Bio-Rad Protean IEF Cell",
    "sourceKind": "learning",
    "whatIs": "Oqsillarni izoelektrik nuqtasi bo'yicha ajratadi.",
    "whatItDoes": "2D-elektroforez, oqsil xarakteristikasi",
    "learningOutcomes": "Bu qurilma bilan 2d-elektroforez, oqsil xarakteristikasi bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Bio-Rad Protean IEF Cell uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bio-Rad Protean IEF Cell** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bio-Rad Protean IEF Cell** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Izoelektrik fokuslash (IEF) tizimining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bio-Rad Protean IEF Cell manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Bio-Rad Protean IEF Cell nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "56": {
    "number": 56,
    "title": "Oqsil tozalash tizimi (FPLC)",
    "originalName": "Oqsil tozalash tizimi (FPLC)",
    "manufacturer": "Cytiva",
    "model": "Cytiva AKTA Pure 25",
    "sourceKind": "learning",
    "whatIs": "Ko'p bosqichli xromatografiyani avtomatlashtiradi.",
    "whatItDoes": "Rekombinant oqsillar, antitelolar tozalash",
    "learningOutcomes": "Bu qurilma bilan rekombinant oqsillar, antitelolar tozalash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Cytiva AKTA Pure 25 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Cytiva AKTA Pure 25** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Cytiva AKTA Pure 25** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Oqsil tozalash tizimi (FPLC)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Cytiva AKTA Pure 25 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Cytiva — rasmiy support va manuals",
        "url": "https://www.cytivalifesciences.com/",
        "note": "Cytiva AKTA Pure 25 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "57": {
    "number": 57,
    "title": "Xemiluminessent deteksiya tizimi",
    "originalName": "Kimyoluminessent/fluorescent gel va blot imaging tizimi",
    "manufacturer": "Bio-Rad",
    "model": "Amersham ImageQuant 800",
    "sourceKind": "learning",
    "whatIs": "Kimyoviy lyuminessensiya va flyuorессentlikni kuchaytiradi va qayd etadi.",
    "whatItDoes": "Western blot, Dot blot tasvirlarini olish",
    "learningOutcomes": "Bu qurilma bilan western blot, dot blot tasvirlarini olish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Amersham ImageQuant 800 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Amersham ImageQuant 800** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Amersham ImageQuant 800** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Xemiluminessent deteksiya tizimining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Amersham ImageQuant 800 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Amersham ImageQuant 800 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "58": {
    "number": 58,
    "title": "Yadroviy magnit rezonans (NMR)",
    "originalName": "Yadroviy magnit rezonans (NMR)",
    "manufacturer": "Bruker",
    "model": "Bruker AVANCE NEO 400MHz",
    "sourceKind": "learning",
    "whatIs": "Magnit maydon va radio-to'lqinlar yordamida tuzilishni aniqlaydi.",
    "whatItDoes": "Organik birikmalar tuzilishini aniqlash, sof modda tahlili",
    "learningOutcomes": "Bu qurilma bilan organik birikmalar tuzilishini aniqlash, sof modda tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Bruker AVANCE NEO 400MHz uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bruker AVANCE NEO 400MHz** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bruker AVANCE NEO 400MHz** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Yadroviy magnit rezonans (NMR)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bruker AVANCE NEO 400MHz manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Bruker AVANCE NEO 400MHz bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "59": {
    "number": 59,
    "title": "Infra-qizil spektrometr (FTIR)",
    "originalName": "Infra-qizil spektrometr (FTIR)",
    "manufacturer": "Bruker",
    "model": "Bruker ALPHA II",
    "sourceKind": "learning",
    "whatIs": "Infra-qizil nurni utkazib molekulyar tuzilishni aniqlaydi.",
    "whatItDoes": "Oziq-ovqat qo'shimchalari, polimer, oqsil, yog' tarkibi tahlili",
    "learningOutcomes": "Bu qurilma bilan oziq-ovqat qo'shimchalari, polimer, oqsil, yog' tarkibi tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. Bruker ALPHA II uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bruker ALPHA II** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bruker ALPHA II** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Infra-qizil spektrometr (FTIR)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bruker ALPHA II manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Bruker ALPHA II bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "60": {
    "number": 60,
    "title": "Ramanga spektroskopiyasi",
    "originalName": "Ramanga spektroskopiyasi",
    "manufacturer": "Renishaw",
    "model": "Renishaw inVia Raman Microscope",
    "sourceKind": "learning",
    "whatIs": "Ramanaga sochilish orqali kimyoviy tarkibni aniqlaydi.",
    "whatItDoes": "Dori sifati, material tahlili, mikrobial identifikatsiya",
    "learningOutcomes": "Bu qurilma bilan dori sifati, material tahlili, mikrobial identifikatsiya bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. Renishaw inVia Raman Microscope uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Renishaw inVia Raman Microscope** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Renishaw inVia Raman Microscope** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Ramanga spektroskopiyasining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Renishaw inVia Raman Microscope manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Renishaw inVia Raman Microscope bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "61": {
    "number": 61,
    "title": "Mikroto'm (Tissue sectioner)",
    "originalName": "Mikroto'm (Tissue sectioner)",
    "manufacturer": "Leica",
    "model": "Leica RM2255",
    "sourceKind": "learning",
    "whatIs": "To'qimalardan 2-10 mkm qalinlikdagi kesimlar tayyorlaydi.",
    "whatItDoes": "Gistologik bo'yash, immunohistokimyo preparatlari",
    "learningOutcomes": "Bu qurilma bilan gistologik bo'yash, immunohistokimyo preparatlari bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Leica RM2255 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Leica RM2255** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Leica RM2255** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Mikroto'm (Tissue sectioner)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Leica RM2255 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Leica — rasmiy support va manuals",
        "url": "https://www.leicabiosystems.com/",
        "note": "Leica RM2255 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "62": {
    "number": 62,
    "title": "Kriostat",
    "originalName": "Kriostat",
    "manufacturer": "Leica",
    "model": "Leica CM3050 S",
    "sourceKind": "learning",
    "whatIs": "Muzlatilgan to'qimalardan yanada nozik kesimlar oladi.",
    "whatItDoes": "Tez diagnostika, qo'shimcha muzlatilgan to'qima kesim tahlili",
    "learningOutcomes": "Bu qurilma bilan tez diagnostika, qo'shimcha muzlatilgan to'qima kesim tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilma temperatura logi, alarm, eshik qistirmasi va xizmat holatini tekshiring.\n2. Namuna IDsi, konteyner materiali va ruxsat etilgan saqlash temperaturasini tasdiqlang.\n3. Freezer/cryobox xaritasini tayyorlang va eshik ochiq qolish vaqtini kamaytiring.\n4. Leica CM3050 S uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Namunani tez, lekin izchil tarzda tegishli pozitsiyaga joylashtiring.\n6. Temperatura excursion yoki alarm bo‘lsa, belgilangan contingency SOPni ishga tushiring.\n7. Kirim/chiqim hamda quti/rack joylashuvini inventar tizimida qayd qiling.\n8. Muz, kondensat yoki qistirma muammosini ruxsat etilgan xizmat tartibida bartaraf eting.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Eshikni uzoq ochiq qoldirish yoki joylashuv jurnalini yuritmaslik.\n- Temperatura alarmiga tasdiqlangan contingency SOPsiz javob berish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: nihoyatda past temperatura, sovuq kuyishi va yopiq joyda gaz xavfi. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Leica CM3050 S** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Leica CM3050 S** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Kriostatning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Leica CM3050 S manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Leica — rasmiy support va manuals",
        "url": "https://www.leicabiosystems.com/",
        "note": "Leica CM3050 S nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "63": {
    "number": 63,
    "title": "Immuno-xistokimyo (IHC) stantsiyasi",
    "originalName": "Immuno-xistokimyo (IHC) stantsiyasi",
    "manufacturer": "Leica",
    "model": "Leica BOND-III",
    "sourceKind": "learning",
    "whatIs": "Antikor asosida to'qimalarda maqsadli antigenlarni ko'rsatadi.",
    "whatItDoes": "Onkologiya, patologiya diagnostikasi",
    "learningOutcomes": "Bu qurilma bilan onkologiya, patologiya diagnostikasi bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Leica BOND-III uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Leica BOND-III** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Leica BOND-III** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Immuno-xistokimyo (IHC) stantsiyasining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Leica BOND-III manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Leica — rasmiy support va manuals",
        "url": "https://www.leicabiosystems.com/",
        "note": "Leica BOND-III nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "64": {
    "number": 64,
    "title": "Avtomatik bo'yash qurilmasi (stainer)",
    "originalName": "Avtomatik bo'yash qurilmasi (stainer)",
    "manufacturer": "Sakura Finetek",
    "model": "Sakura Tissue-Tek Prisma Plus",
    "sourceKind": "learning",
    "whatIs": "Gistologik bo'yash jarayonini avtomatlashtiradi.",
    "whatItDoes": "HE, PAS va boshqa bo'yash usullarini standartlashtirish",
    "learningOutcomes": "Bu qurilma bilan he, pas va boshqa bo'yash usullarini standartlashtirish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Sakura Tissue-Tek Prisma Plus uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Sakura Tissue-Tek Prisma Plus** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Sakura Tissue-Tek Prisma Plus** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Avtomatik bo'yash qurilmasi (stainer)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Sakura Tissue-Tek Prisma Plus manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Sakura Tissue-Tek Prisma Plus bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "65": {
    "number": 65,
    "title": "Mikroinjeksiya tizimi",
    "originalName": "Mikromanipulyator",
    "manufacturer": "Eppendorf",
    "model": "Eppendorf TransferMan 4r",
    "sourceKind": "learning",
    "whatIs": "Mikromanipulatorlar bilan hujayra ichiga nanoinjeksiya qiladi.",
    "whatItDoes": "In vitro urug'lantirish, gen transformatsiyasi",
    "learningOutcomes": "Bu qurilma bilan in vitro urug'lantirish, gen transformatsiyasi bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Aseptik zona, biosafety kabinasi yoki inkubatorning statusi va xizmat jurnalini tekshiring.\n2. Tegishli PPE, dezinfeksiya vositasi va chiqindi idishlarini tayyorlang.\n3. Hujayra/medium/reagent identifikatsiyasi, loti va kontaminatsiya holatini tekshiring.\n4. Eppendorf TransferMan 4r uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Ish materialini faqat tasdiqlangan SOP va biosafety darajasiga mos joylashtiring.\n6. Temperatura, CO₂, namlik yoki havo oqimi kabi nazoratlarni faqat tasdiqlangan setpointda qo‘llang.\n7. Ish tugagach, sirtlar va chiqindini biologik xavfsizlik SOPsi bo‘yicha boshqaring.\n8. Namuna holati, inkubatsiya sharoiti va kuzatuvlarni jurnalga yozing.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Aseptik texnikani buzish yoki kontaminatsiya belgilarini e’tiborsiz qoldirish.\n- Ish materialini biosafety darajasiga mos boshqarmaslik.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, aerozol, dezinfektant va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Eppendorf TransferMan 4r** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Eppendorf TransferMan 4r** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Mikroinjeksiya tizimining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Eppendorf TransferMan 4r manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Eppendorf — rasmiy support va manuals",
        "url": "https://www.eppendorf.com/us-en/download-center",
        "note": "Eppendorf TransferMan 4r nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "66": {
    "number": 66,
    "title": "Elektroporatsion sistema",
    "originalName": "Elektroporatsion sistema",
    "manufacturer": "Bio-Rad",
    "model": "Bio-Rad Gene Pulser Xcell",
    "sourceKind": "learning",
    "whatIs": "Elektr impulsi bilan hujayra pardasi o'tkazuvchanligini oshiradi.",
    "whatItDoes": "Plazmid, siRNA, oqsil hujayra ichiga kiritish",
    "learningOutcomes": "Bu qurilma bilan plazmid, sirna, oqsil hujayra ichiga kiritish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Aseptik zona, biosafety kabinasi yoki inkubatorning statusi va xizmat jurnalini tekshiring.\n2. Tegishli PPE, dezinfeksiya vositasi va chiqindi idishlarini tayyorlang.\n3. Hujayra/medium/reagent identifikatsiyasi, loti va kontaminatsiya holatini tekshiring.\n4. Bio-Rad Gene Pulser Xcell uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Ish materialini faqat tasdiqlangan SOP va biosafety darajasiga mos joylashtiring.\n6. Temperatura, CO₂, namlik yoki havo oqimi kabi nazoratlarni faqat tasdiqlangan setpointda qo‘llang.\n7. Ish tugagach, sirtlar va chiqindini biologik xavfsizlik SOPsi bo‘yicha boshqaring.\n8. Namuna holati, inkubatsiya sharoiti va kuzatuvlarni jurnalga yozing.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Aseptik texnikani buzish yoki kontaminatsiya belgilarini e’tiborsiz qoldirish.\n- Ish materialini biosafety darajasiga mos boshqarmaslik.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, aerozol, dezinfektant va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bio-Rad Gene Pulser Xcell** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bio-Rad Gene Pulser Xcell** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Elektroporatsion sistemaning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bio-Rad Gene Pulser Xcell manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Bio-Rad Gene Pulser Xcell nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "67": {
    "number": 67,
    "title": "Bioprinter (3D biologik bosib chiqarish)",
    "originalName": "Bioprinter (3D biologik bosib chiqarish)",
    "manufacturer": "CELLINK (BICO)",
    "model": "CELLINK BIO X6",
    "sourceKind": "learning",
    "whatIs": "Tirik hujayralar va bioink bilan 3D to'qima yaratadi.",
    "whatItDoes": "To'qima muhandisligi, dori sinovlari, sun'iy organlar",
    "learningOutcomes": "Bu qurilma bilan to'qima muhandisligi, dori sinovlari, sun'iy organlar bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Aseptik zona, biosafety kabinasi yoki inkubatorning statusi va xizmat jurnalini tekshiring.\n2. Tegishli PPE, dezinfeksiya vositasi va chiqindi idishlarini tayyorlang.\n3. Hujayra/medium/reagent identifikatsiyasi, loti va kontaminatsiya holatini tekshiring.\n4. CELLINK BIO X6 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Ish materialini faqat tasdiqlangan SOP va biosafety darajasiga mos joylashtiring.\n6. Temperatura, CO₂, namlik yoki havo oqimi kabi nazoratlarni faqat tasdiqlangan setpointda qo‘llang.\n7. Ish tugagach, sirtlar va chiqindini biologik xavfsizlik SOPsi bo‘yicha boshqaring.\n8. Namuna holati, inkubatsiya sharoiti va kuzatuvlarni jurnalga yozing.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Aseptik texnikani buzish yoki kontaminatsiya belgilarini e’tiborsiz qoldirish.\n- Ish materialini biosafety darajasiga mos boshqarmaslik.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, aerozol, dezinfektant va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **CELLINK BIO X6** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **CELLINK BIO X6** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Bioprinter (3D biologik bosib chiqarish)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, CELLINK BIO X6 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "CELLINK BIO X6 bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "68": {
    "number": 68,
    "title": "Mikrokapsulalash qurilmasi",
    "originalName": "Spray dryer / nano spray dryer",
    "manufacturer": "Buchi",
    "model": "Buchi Nano Spray Dryer B-90 HP",
    "sourceKind": "learning",
    "whatIs": "Nano va mikro o'lchamli kapsulalar hosil qiladi.",
    "whatItDoes": "Dori transporti, probiotiklar kapsulalash",
    "learningOutcomes": "Bu qurilma bilan dori transporti, probiotiklar kapsulalash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Buchi Nano Spray Dryer B-90 HP uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Buchi Nano Spray Dryer B-90 HP** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Buchi Nano Spray Dryer B-90 HP** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Mikrokapsulalash qurilmasining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Buchi Nano Spray Dryer B-90 HP manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Buchi Nano Spray Dryer B-90 HP bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "69": {
    "number": 69,
    "title": "Dinamik yorug'lik sochilishi (DLS)",
    "originalName": "Dinamik yorug'lik sochilishi (DLS)",
    "manufacturer": "Malvern Panalytical",
    "model": "Malvern Panalytical Zetasizer Ultra",
    "sourceKind": "learning",
    "whatIs": "Nanopartikulalar o'lchamini va zeta-potensialini o'lchaydi.",
    "whatItDoes": "Nanodorolar, liposomalar, kolloidlar tahlili",
    "learningOutcomes": "Bu qurilma bilan nanodorolar, liposomalar, kolloidlar tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Malvern Panalytical Zetasizer Ultra uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Malvern Panalytical Zetasizer Ultra** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Malvern Panalytical Zetasizer Ultra** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Dinamik yorug'lik sochilishi (DLS)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Malvern Panalytical Zetasizer Ultra manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Malvern Panalytical Zetasizer Ultra bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "70": {
    "number": 70,
    "title": "Qo'lda yadro aniqlash tizimi (Lateral Flow)",
    "originalName": "Lateral-flow tezkor diagnostika testi",
    "manufacturer": "SD Biosensor",
    "model": "SD Biosensor Standard F (multiplex)",
    "sourceKind": "learning",
    "whatIs": "Lateral oqim immunoassay orqali tezkor aniqlash.",
    "whatItDoes": "Maydonda tezkor diagnostika (COVID-19, gripp, ABO va boshq.)",
    "learningOutcomes": "Bu qurilma bilan maydonda tezkor diagnostika (covid-19, gripp, abo va boshq.) bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. SD Biosensor Standard F (multiplex) uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **SD Biosensor Standard F (multiplex)** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **SD Biosensor Standard F (multiplex)** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Qo'lda yadro aniqlash tizimi (Lateral Flow)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, SD Biosensor Standard F (multiplex) manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "SD Biosensor Standard F (multiplex) bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "71": {
    "number": 71,
    "title": "MALDI-TOF massa spektrometr",
    "originalName": "MALDI-TOF massa spektrometr",
    "manufacturer": "Bruker",
    "model": "Bruker Microflex LT/SH",
    "sourceKind": "learning",
    "whatIs": "Matritsada lazer desorbsiyasi bilan ionlash va massa o'lchash.",
    "whatItDoes": "Mikrob identifikatsiyasi, oqsil tuzilishi tahlili",
    "learningOutcomes": "Bu qurilma bilan mikrob identifikatsiyasi, oqsil tuzilishi tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. Bruker Microflex LT/SH uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bruker Microflex LT/SH** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bruker Microflex LT/SH** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** MALDI-TOF massa spektrometrning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bruker Microflex LT/SH manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Bruker Microflex LT/SH bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "72": {
    "number": 72,
    "title": "Bioimpedans tahlilchi",
    "originalName": "Bioimpedans tahlilchi",
    "manufacturer": "ImpediMed",
    "model": "Impedimed SFB7",
    "sourceKind": "learning",
    "whatIs": "Elektr o'tkazuvchanlik orqali biologik parametrlarni o'lchaydi.",
    "whatItDoes": "Hujayra kulturasi tirikligini, fermentatsiya holatini kuzatish",
    "learningOutcomes": "Bu qurilma bilan hujayra kulturasi tirikligini, fermentatsiya holatini kuzatish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Impedimed SFB7 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Impedimed SFB7** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Impedimed SFB7** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Bioimpedans tahlilchining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Impedimed SFB7 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Impedimed SFB7 bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "73": {
    "number": 73,
    "title": "Termal tahlil qurilmasi (DSC)",
    "originalName": "Termal tahlil qurilmasi (DSC)",
    "manufacturer": "TA Instruments",
    "model": "TA Instruments DSC 250",
    "sourceKind": "learning",
    "whatIs": "Moddalar issiqlik sig'imi va fazaviy o'tishlarini tahlil qiladi.",
    "whatItDoes": "Lipidlar, oqsillar denaturatsiya tahlili, oziq-ovqat formülasi",
    "learningOutcomes": "Bu qurilma bilan lipidlar, oqsillar denaturatsiya tahlili, oziq-ovqat formülasi bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. TA Instruments DSC 250 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **TA Instruments DSC 250** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **TA Instruments DSC 250** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Termal tahlil qurilmasi (DSC)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, TA Instruments DSC 250 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "TA Instruments DSC 250 bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "74": {
    "number": 74,
    "title": "Rotary evaporator (rotovap)",
    "originalName": "Rotary evaporator (rotovap)",
    "manufacturer": "Buchi",
    "model": "Buchi R-300",
    "sourceKind": "learning",
    "whatIs": "Vakuum va aylanish yordamida past haroratda bug'lantiradi.",
    "whatItDoes": "Erituvchilarni ajratish, ekstraktlarni konsentrlash",
    "learningOutcomes": "Bu qurilma bilan erituvchilarni ajratish, ekstraktlarni konsentrlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Buchi R-300 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Buchi R-300** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Buchi R-300** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Rotary evaporator (rotovap)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Buchi R-300 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Buchi R-300 bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "75": {
    "number": 75,
    "title": "Sonikator (bath type)",
    "originalName": "Sonikator (bath type)",
    "manufacturer": "Qsonica",
    "model": "Elmasonic S60H",
    "sourceKind": "learning",
    "whatIs": "Ultratovush vanna orqali namunalarni tozalaydi yoki eritadi.",
    "whatItDoes": "Kolonka tozalash, membrana eritmasi, liposoma tayyorlash",
    "learningOutcomes": "Bu qurilma bilan kolonka tozalash, membrana eritmasi, liposoma tayyorlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Namuna konteyneri, adaptor/probe, PPE va kontaminatsiya nazoratini tekshiring.\n2. Namuna hajmi, buffer, sovitish talabi va yopiq/ochiq ishlash cheklovini SOP bo‘yicha belgilang.\n3. Elmasonic S60H uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n4. Namuna va mos aksessuarni xavfsiz mahkamlang.\n5. Faqat tasdiqlangan protokol doirasida ishlov bering; qizish, aerozol yoki to‘kilishni kuzating.\n6. Ishlov berilgach, kerakli fraksiyani protokol bo‘yicha ajrating va keyingi analiz uchun saqlang.\n7. Proba, adapter yoki kamera qismlarini ruxsat etilgan usul bilan tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: aerozol, shovqin/ultratovush yoki harakatlanuvchi qismlar. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Elmasonic S60H** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Elmasonic S60H** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Sonikator (bath type)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Elmasonic S60H manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Elmasonic S60H bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  }
};

export default learningBlock3;
