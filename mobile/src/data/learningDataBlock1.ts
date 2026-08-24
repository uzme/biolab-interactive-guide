import type { LearningContent } from "./learningData";

const learningBlock1: Record<number, LearningContent> = {
    "1": {
    "number": 1,
    "title": "PCR (Polimeraz zanjir reaksiyasi) mashina",
    "originalName": "Real-time PCR (qPCR) qurilmasi",
    "manufacturer": "Bio-Rad",
    "model": "Bio-Rad CFX96 Touch Real-Time PCR",
    "sourceKind": "learning",
    "whatIs": "DNK va RNK fragmentlarini ko'paytirish (amplifikatsiya) uchun.",
    "whatItDoes": "Genetik diagnostika, klonlash, gen ekspressiyasini aniqlash",
    "learningOutcomes": "Bu qurilma bilan genetik diagnostika, klonlash, gen ekspressiyasini aniqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → nuklein kislota/reaksiya aralashmasi → nazorat qilinadigan harorat sikllari → (tegishli assayda) floresans deteksiyasi → amplifikatsiya ko‘rsatkichi va sifat nazorati.",
    "mainParts": "- Reaksiya bloki: tube yoki plate ichidagi reaksiyani belgilangan haroratlar bo‘yicha boshqaradi.\n- Qopqoq/siqish mexanizmi: idishlarni ishonchli ushlab, kondensatsiyani kamaytirishga yordam beradi.\n- Optik modul (qPCR/dPCRda): floresans signalni qayd etadi.\n- Dasturiy interfeys: assay, plate layout va run faylini boshqaradi.",
    "samplePreparation": "DNK/RNK sifati va kontaminatsiya nazorati assay natijasiga bevosita ta’sir qiladi. Namuna ekstraksiyasi, blank, musbat/manfiy nazoratlar hamda reagentlar faqat tasdiqlangan assay protokoli bo‘yicha tayyorlanadi.",
    "workflow": "1. Pre-PCR va post-PCR ish zonalarini ajrating, yuzalarni mos SOP asosida tayyorlang.\n2. Qurilma holati, plate/tube mosligi va xizmat jurnalini tekshiring.\n3. DNK/RNK, primer/probe, master mix hamda musbat/manfiy nazoratlarni tasdiqlangan assay protokoli bo‘yicha tayyorlang.\n4. Namuna identifikatsiyasi va plate layoutni ikki marta tekshiring.\n5. Reaksiya aralashmasini pipetlang, havo pufagi yoki cross-contamination bo‘lmasligini tekshiring.\n6. Plate/tubeni to‘g‘ri muhrlab, qurilmaga joylashtiring.\n7. Bio-Rad CFX96 Touch Real-Time PCR uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n8. Runni boshlang; qopqoq/interlockni chetlab o‘tmang.\n9. Amplifikatsiya plotlari, Ct/Cq hamda control holatini qayd qiling.\n10. Raw data va run faylini saqlang; keyin ish zonasini tozalang va chiqindini SOP bo‘yicha boshqaring.",
    "resultInterpretation": "Amplifikatsiya egri chizig‘i, Ct/Cq yoki assayga tegishli miqdoriy ko‘rsatkichlar blank, standart, nazoratlar va qabul mezonlari bilan birga baholanadi. Model yoki assay tasdiqlamagan cutoffni qo‘llamang.",
    "commonMistakes": "- Pre-PCR/post-PCR zonalarini aralashtirish yoki controlni chetlab o‘tish.\n- Noto‘g‘ri plate layout, havo pufagi yoki yomon muhrlash.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, reagent, kontaminatsiya va elektr. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bio-Rad CFX96 Touch Real-Time PCR** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bio-Rad CFX96 Touch Real-Time PCR** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** PCR (Polimeraz zanjir reaksiyasi) mashinaning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bio-Rad CFX96 Touch Real-Time PCR manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Bio-Rad CFX96 Touch Real-Time PCR nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "2": {
    "number": 2,
    "title": "Avtoklav (Bug'li sterilizator)",
    "originalName": "Avtoklav (Bug'li sterilizator)",
    "manufacturer": "Tuttnauer",
    "model": "Tuttnauer 2540MK",
    "sourceKind": "learning",
    "whatIs": "Yuqori bosim va bug' yordamida asbob-uskunalar va muhitlarni sterilizatsiya qiladi.",
    "whatItDoes": "Laboratoriya asboblarini, ozuqa muhitlarini steril holga keltirish",
    "learningOutcomes": "Bu qurilma bilan laboratoriya asboblarini, ozuqa muhitlarini steril holga keltirish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Yuklama → to‘yingan bug‘ va bosim ostidagi sikl → issiqlik ta’sirida sterilizatsiya → indikator/jurnal tekshiruvi → xavfsiz sovitish va chiqarish.",
    "mainParts": "- Kamera: yuklama joylashadigan bosimli zona.\n- Bug‘/suv tizimi: sterilizatsiya muhitini hosil qiladi.\n- Eshik va qulflash tizimi: bosim ostida ochilishdan himoya qiladi.\n- Sikl boshqaruvi va indikatorlar: vaqt, temperatura va alarm holatini ko‘rsatadi.",
    "samplePreparation": "Faqat autoklavga mos materiallarni yuklang. Yuklamani haddan tashqari zich joylashtirmang; indikator, idish yopilishi va chiqindi SOPsini tekshiring.",
    "workflow": "1. Qurilma holati, suv/bug‘ tizimi, eshik qistirmasi va xizmat jurnalini tekshiring.\n2. Yuklama autoklavga mos ekanini, idishlar ventlanganini va yopiq konteynerlar yo‘qligini tasdiqlang.\n3. Kimyoviy yoki biologik indikator talabini SOP bo‘yicha belgilang.\n4. Yuklamani haddan ortiq zichlashtirmasdan, bug‘ aylanishi uchun joy qoldirib joylashtiring.\n5. Tuttnauer 2540MK uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n6. Mos siklni faqat yuklama turiga mos validatsiyalangan SOP bo‘yicha tanlang.\n7. Sikl davomida eshik/qulf tizimini chetlab o‘tmang.\n8. Sikl tugagach, bosim va temperatura xavfsiz darajaga tushganini tekshiring.\n9. Issiq yuklamani tegishli PPE bilan ehtiyotkorlikda oling.\n10. Indikator, sikl jurnali va qabul mezonlarini qayd qiling; kamera va eshik zonasini ishlab chiqaruvchi ko‘rsatmasi bo‘yicha tozalang.",
    "resultInterpretation": "Sikl tugashi yakuniy steril holatni o‘zi bilan kafolatlamaydi: kimyoviy/biologik indikator, jurnal va laboratoriya validatsiya tartibi asosida baholanadi.",
    "commonMistakes": "- Mos bo‘lmagan yoki haddan tashqari zich yuklama.\n- Bosim/temperatura xavfsiz darajaga tushmasdan eshikni ochishga urinish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: yuqori temperatura, bug‘, bosim va issiq yuklama. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Tuttnauer 2540MK** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Tuttnauer 2540MK** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Avtoklav (Bug'li sterilizator)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Tuttnauer 2540MK manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Tuttnauer — rasmiy support va manuals",
        "url": "https://tuttnauerusa.com/",
        "note": "Tuttnauer 2540MK nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "3": {
    "number": 3,
    "title": "Laminar oqim shkaflari (BSC)",
    "originalName": "Laminar oqim shkaflari (BSC)",
    "manufacturer": "Thermo Scientific",
    "model": "Thermo Scientific MSC-Advantage Class II",
    "sourceKind": "learning",
    "whatIs": "Steril ish muhitini ta'minlovchi vertikal havo oqimli shkaf.",
    "whatItDoes": "Mikrobiologik va hujayra kulturasi ishlari uchun kontaminatsiyadan himoya",
    "learningOutcomes": "Bu qurilma bilan mikrobiologik va hujayra kulturasi ishlari uchun kontaminatsiyadan himoya bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Aseptik zona, biosafety kabinasi yoki inkubatorning statusi va xizmat jurnalini tekshiring.\n2. Tegishli PPE, dezinfeksiya vositasi va chiqindi idishlarini tayyorlang.\n3. Hujayra/medium/reagent identifikatsiyasi, loti va kontaminatsiya holatini tekshiring.\n4. Thermo Scientific MSC-Advantage Class II uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Ish materialini faqat tasdiqlangan SOP va biosafety darajasiga mos joylashtiring.\n6. Temperatura, CO₂, namlik yoki havo oqimi kabi nazoratlarni faqat tasdiqlangan setpointda qo‘llang.\n7. Ish tugagach, sirtlar va chiqindini biologik xavfsizlik SOPsi bo‘yicha boshqaring.\n8. Namuna holati, inkubatsiya sharoiti va kuzatuvlarni jurnalga yozing.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Aseptik texnikani buzish yoki kontaminatsiya belgilarini e’tiborsiz qoldirish.\n- Ish materialini biosafety darajasiga mos boshqarmaslik.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, aerozol, dezinfektant va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Thermo Scientific MSC-Advantage Class II** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Thermo Scientific MSC-Advantage Class II** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Laminar oqim shkaflari (BSC)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Thermo Scientific MSC-Advantage Class II manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Thermo Scientific — rasmiy support va manuals",
        "url": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-equipment-learning-center/lab-equipment-resource-library/manuals-by-product-type.html",
        "note": "Thermo Scientific MSC-Advantage Class II nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "4": {
    "number": 4,
    "title": "Sentrifuga",
    "originalName": "Sentrifuga",
    "manufacturer": "Eppendorf",
    "model": "Eppendorf Centrifuge 5430 R",
    "sourceKind": "learning",
    "whatIs": "Qo'shimchali sovutish tizimiga ega, yuqori tezlikli aylanma qurilma.",
    "whatItDoes": "Hujayra, DNK, oqsil ajratish, namunalarni fraksiyalash",
    "learningOutcomes": "Bu qurilma bilan hujayra, dnk, oqsil ajratish, namunalarni fraksiyalash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → muvozanatlangan rotor → aylanish orqali nisbiy markazdan qochma kuch → fraksiyalar/sediment hosil bo‘lishi → ehtiyotkor ajratib olish.",
    "mainParts": "- Rotor: naycha yoki platega aylanish energiyasini uzatadi.\n- Adapter/bucket: mos sarf materialini xavfsiz joylashtiradi.\n- Kamera va qopqoq: mexanik himoya hamda qopqoq qulfi bilan ishlaydi.\n- Boshqaruv paneli: vaqt, RCF/tezlik va zarur bo‘lsa temperaturani boshqaradi.",
    "samplePreparation": "Naycha turi, to‘ldirish darajasi va muvozanatlash rotor va protokolga mos bo‘lishi kerak. Qarama-qarshi pozitsiyalar massasi muvozanatlanganini tekshiring; faqat tasdiqlangan rotor/naychalardan foydalaning.",
    "workflow": "1. Rotor, bucket, adapter, naycha turi va xizmat jurnalining mosligini tekshiring.\n2. Namuna konteynerlarida yoriq, oqish yoki noto‘g‘ri to‘ldirish yo‘qligini tekshiring.\n3. Qarama-qarshi pozitsiyalardagi yuklama massasini muvozanatlang.\n4. Rotor/naychalarni tasdiqlangan limitlar doirasida joylashtiring.\n5. Eppendorf Centrifuge 5430 R uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n6. RCF/tezlik, vaqt va zarur bo‘lsa temperaturani faqat metod/SOPga mos kiriting.\n7. Qopqoqni mahkam yoping va runni boshlang; aylanish vaqtida qopqoqni ochmang.\n8. Run tugagach, rotor to‘liq to‘xtaganini kuting.\n9. Pellet/supernatantni protokol bo‘yicha ehtiyotkorlikda ajrating va run parametrlarini qayd qiling.\n10. To‘kilish bo‘lsa, rotorni ishlatishni to‘xtating va biohazard/servis SOP bo‘yicha ish tuting.",
    "resultInterpretation": "Pellet, supernatant yoki fraksiyaning joylashuvi va holati protokol bilan solishtiriladi. Natijani baholashda RCF, vaqt, temperatura va namuna turi run jurnalida qayd etilgan bo‘lishi kerak.",
    "commonMistakes": "- Yuklamani muvozanatlashtirmaslik.\n- Rotor/naycha limitidan tashqarida ishlash yoki to‘liq to‘xtashdan oldin ochish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: aylanma mexanik energiya, naycha sinishi va biologik aerozol. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Eppendorf Centrifuge 5430 R** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Eppendorf Centrifuge 5430 R** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Sentrifuganing vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Eppendorf Centrifuge 5430 R manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Eppendorf — rasmiy support va manuals",
        "url": "https://www.eppendorf.com/us-en/download-center",
        "note": "Eppendorf Centrifuge 5430 R nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "5": {
    "number": 5,
    "title": "Spektrofotometr",
    "originalName": "Spektrofotometr",
    "manufacturer": "Agilent",
    "model": "Thermo NanoDrop One",
    "sourceKind": "learning",
    "whatIs": "Nur yutilishini o'lchovchi optik qurilma.",
    "whatItDoes": "DNK, RNK, oqsil konsentratsiyasini aniqlash",
    "learningOutcomes": "Bu qurilma bilan dnk, rnk, oqsil konsentratsiyasini aniqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. Thermo NanoDrop One uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Thermo NanoDrop One** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Thermo NanoDrop One** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Spektrofotometrning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Thermo NanoDrop One manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Agilent — rasmiy support va manuals",
        "url": "https://www.agilent.com/en",
        "note": "Thermo NanoDrop One nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "6": {
    "number": 6,
    "title": "Gaz xromatografi (GC)",
    "originalName": "Gaz xromatografi (GC)",
    "manufacturer": "Agilent",
    "model": "Agilent 8890 GC System",
    "sourceKind": "learning",
    "whatIs": "Gaz fazasidagi moddalarni ajratib tahlil qiluvchi qurilma.",
    "whatItDoes": "Uchar organik birikmalar, qoldiq pestitsidlar, yog' kislotalarini aniqlash",
    "learningOutcomes": "Bu qurilma bilan uchar organik birikmalar, qoldiq pestitsidlar, yog' kislotalarini aniqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/injeksiya → ajratish tizimi → detektor yoki massa analizatori → signal/chromatogramma → standart/QC asosida identifikatsiya va miqdoriy natija.",
    "mainParts": "- Namuna kiritish moduli: namuna hajmini tizimga uzatadi.\n- Ajratish zonasi (kolonka/kapillyar): komponentlarni fizik-kimyoviy xususiyatiga ko‘ra ajratadi.\n- Detektor: ajralgan komponentni signalga aylantiradi.\n- Nasos/gaz va data system: oqim, bosim yoki tashuvchi gaz hamda chromatogrammani boshqaradi.",
    "samplePreparation": "Matritsa, solvent, filtratsiya, ichki standart va kalibrlash standartlari tanlangan metodga mos bo‘lishi kerak. Namuna tayyorlash validatsiyalangan method/SOP talablariga muvofiq bajariladi.",
    "workflow": "1. Namuna, solvent/mobile phase, standart va QC materiallari metod talabiga mosligini tekshiring.\n2. Solvent, filtratsiya, degassing va chiqindi idishlarini SOP bo‘yicha tayyorlang.\n3. Kolonka/kapillyar, injektor va detektor holatini tekshiring.\n4. Agilent 8890 GC System uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Validatsiyalangan metodni yuklang; blank va standart ketma-ketligini rejalashtiring.\n6. Tizim suitability yoki baseline tekshiruvini metod talabi bo‘yicha bajaring.\n7. Namuna ketma-ketligini ishga tushiring, oqish/bosim/alarm holatini kuzating.\n8. Chromatogramma, retention time, peak shakli va QCni tekshiring.\n9. Raw data, integratsiya va audit trailni saqlang; solvent va chiqindini xavfsiz boshqaring.",
    "resultInterpretation": "Retention time, peak shakli, peak maydoni/balandligi, blank, standart egri chizig‘i va QC qabul mezonlari birgalikda baholanadi. Identifikatsiya va miqdoriy xulosani faqat validatsiyalangan method bilan bering.",
    "commonMistakes": "- Solvent, blank, standart yoki system suitabilityni tekshirmaslik.\n- Oqish, bosim yoki peak anomaliyasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: erituvchi, bosim, gaz, issiq zona va kimyoviy chiqindi. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Agilent 8890 GC System** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Agilent 8890 GC System** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Gaz xromatografi (GC)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Agilent 8890 GC System manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Agilent — rasmiy support va manuals",
        "url": "https://www.agilent.com/en",
        "note": "Agilent 8890 GC System nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "7": {
    "number": 7,
    "title": "Suyuq xromatografi (HPLC)",
    "originalName": "Suyuq xromatografi (HPLC)",
    "manufacturer": "Shimadzu",
    "model": "Shimadzu Nexera X3",
    "sourceKind": "learning",
    "whatIs": "Yuqori bosimli suyuqlik xromatografiyasi qurilmasi.",
    "whatItDoes": "Vitaminlar, antioksidantlar, konservantlar miqdorini aniqlash",
    "learningOutcomes": "Bu qurilma bilan vitaminlar, antioksidantlar, konservantlar miqdorini aniqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/injeksiya → ajratish tizimi → detektor yoki massa analizatori → signal/chromatogramma → standart/QC asosida identifikatsiya va miqdoriy natija.",
    "mainParts": "- Namuna kiritish moduli: namuna hajmini tizimga uzatadi.\n- Ajratish zonasi (kolonka/kapillyar): komponentlarni fizik-kimyoviy xususiyatiga ko‘ra ajratadi.\n- Detektor: ajralgan komponentni signalga aylantiradi.\n- Nasos/gaz va data system: oqim, bosim yoki tashuvchi gaz hamda chromatogrammani boshqaradi.",
    "samplePreparation": "Matritsa, solvent, filtratsiya, ichki standart va kalibrlash standartlari tanlangan metodga mos bo‘lishi kerak. Namuna tayyorlash validatsiyalangan method/SOP talablariga muvofiq bajariladi.",
    "workflow": "1. Namuna, solvent/mobile phase, standart va QC materiallari metod talabiga mosligini tekshiring.\n2. Solvent, filtratsiya, degassing va chiqindi idishlarini SOP bo‘yicha tayyorlang.\n3. Kolonka/kapillyar, injektor va detektor holatini tekshiring.\n4. Shimadzu Nexera X3 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Validatsiyalangan metodni yuklang; blank va standart ketma-ketligini rejalashtiring.\n6. Tizim suitability yoki baseline tekshiruvini metod talabi bo‘yicha bajaring.\n7. Namuna ketma-ketligini ishga tushiring, oqish/bosim/alarm holatini kuzating.\n8. Chromatogramma, retention time, peak shakli va QCni tekshiring.\n9. Raw data, integratsiya va audit trailni saqlang; solvent va chiqindini xavfsiz boshqaring.",
    "resultInterpretation": "Retention time, peak shakli, peak maydoni/balandligi, blank, standart egri chizig‘i va QC qabul mezonlari birgalikda baholanadi. Identifikatsiya va miqdoriy xulosani faqat validatsiyalangan method bilan bering.",
    "commonMistakes": "- Solvent, blank, standart yoki system suitabilityni tekshirmaslik.\n- Oqish, bosim yoki peak anomaliyasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: erituvchi, bosim, gaz, issiq zona va kimyoviy chiqindi. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Shimadzu Nexera X3** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Shimadzu Nexera X3** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Suyuq xromatografi (HPLC)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Shimadzu Nexera X3 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Shimadzu — rasmiy support va manuals",
        "url": "https://www.shimadzu.com/",
        "note": "Shimadzu Nexera X3 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "8": {
    "number": 8,
    "title": "Massa-spektrometr (LC-MS/MS)",
    "originalName": "Massa-spektrometr (LC-MS/MS)",
    "manufacturer": "Waters",
    "model": "Waters ACQUITY UPLC I-Class / Xevo TQ-S",
    "sourceKind": "learning",
    "whatIs": "LC bilan birlashgan uch kvadrupol massa-spektrometr.",
    "whatItDoes": "Toksinlar, dori qoldiqlari, pestitsidlarni ultraizsiz aniqlash",
    "learningOutcomes": "Bu qurilma bilan toksinlar, dori qoldiqlari, pestitsidlarni ultraizsiz aniqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/injeksiya → ajratish tizimi → detektor yoki massa analizatori → signal/chromatogramma → standart/QC asosida identifikatsiya va miqdoriy natija.",
    "mainParts": "- Namuna kiritish moduli: namuna hajmini tizimga uzatadi.\n- Ajratish zonasi (kolonka/kapillyar): komponentlarni fizik-kimyoviy xususiyatiga ko‘ra ajratadi.\n- Detektor: ajralgan komponentni signalga aylantiradi.\n- Nasos/gaz va data system: oqim, bosim yoki tashuvchi gaz hamda chromatogrammani boshqaradi.",
    "samplePreparation": "Matritsa, solvent, filtratsiya, ichki standart va kalibrlash standartlari tanlangan metodga mos bo‘lishi kerak. Namuna tayyorlash validatsiyalangan method/SOP talablariga muvofiq bajariladi.",
    "workflow": "1. Namuna, solvent/mobile phase, standart va QC materiallari metod talabiga mosligini tekshiring.\n2. Solvent, filtratsiya, degassing va chiqindi idishlarini SOP bo‘yicha tayyorlang.\n3. Kolonka/kapillyar, injektor va detektor holatini tekshiring.\n4. Waters ACQUITY UPLC I-Class / Xevo TQ-S uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Validatsiyalangan metodni yuklang; blank va standart ketma-ketligini rejalashtiring.\n6. Tizim suitability yoki baseline tekshiruvini metod talabi bo‘yicha bajaring.\n7. Namuna ketma-ketligini ishga tushiring, oqish/bosim/alarm holatini kuzating.\n8. Chromatogramma, retention time, peak shakli va QCni tekshiring.\n9. Raw data, integratsiya va audit trailni saqlang; solvent va chiqindini xavfsiz boshqaring.",
    "resultInterpretation": "Retention time, peak shakli, peak maydoni/balandligi, blank, standart egri chizig‘i va QC qabul mezonlari birgalikda baholanadi. Identifikatsiya va miqdoriy xulosani faqat validatsiyalangan method bilan bering.",
    "commonMistakes": "- Solvent, blank, standart yoki system suitabilityni tekshirmaslik.\n- Oqish, bosim yoki peak anomaliyasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: erituvchi, bosim, gaz, issiq zona va kimyoviy chiqindi. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Waters ACQUITY UPLC I-Class / Xevo TQ-S** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Waters ACQUITY UPLC I-Class / Xevo TQ-S** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Massa-spektrometr (LC-MS/MS)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Waters ACQUITY UPLC I-Class / Xevo TQ-S manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Waters — rasmiy support va manuals",
        "url": "https://www.waters.com/",
        "note": "Waters ACQUITY UPLC I-Class / Xevo TQ-S nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "9": {
    "number": 9,
    "title": "Elektroforez tizimi (gel)",
    "originalName": "Elektroforez tizimi (gel)",
    "manufacturer": "Bio-Rad",
    "model": "Bio-Rad PowerPac Universal",
    "sourceKind": "learning",
    "whatIs": "Agaroz yoki PAAG gelida biomolekulalarni ajratadi.",
    "whatItDoes": "DNK/RNK/oqsil fraksiyalarini ko'rish va aniqlash",
    "learningOutcomes": "Bu qurilma bilan dnk/rnk/oqsil fraksiyalarini ko'rish va aniqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/bo‘yash yoki gel/chip → optik yoki elektr maydon orqali ajratish/deteksiya → tasvir, histogramma yoki electropherogram → sifat nazorati bilan talqin.",
    "mainParts": "- Namuna joylashadigan zona: slide, plate, gel, chip yoki flow cellni ushlab turadi.\n- Optik/elektr moduli: tasvir, floresans yoki migratsiya signalini hosil qiladi.\n- Detektor/kamera: signalni raqamli ma’lumotga aylantiradi.\n- Dasturiy interfeys: tasvir, gate, histogramma yoki electropherogramni boshqaradi.",
    "samplePreparation": "Namuna turi uchun mos slide, bo‘yash, fixatsiya, buffer, gel yoki chip tanlanadi. Kontaminatsiya, havo pufagi va noto‘g‘ri konsentratsiya tasvir/signal sifatini yomonlashtirishi mumkin.",
    "workflow": "1. Optik sirt, kamera/detektor, slide/gel/chip yoki flow cell zonasi holatini tekshiring.\n2. Namuna konsentratsiyasi, bo‘yash/fixatsiya yoki marker/ladder talabini metodga mos tayyorlang.\n3. Focus, light path yoki elektr maydon komponentlarini SOP bo‘yicha tayyorlang.\n4. Bio-Rad PowerPac Universal uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Control namuna, calibration slide/bead yoki marker talab qilinsa yuklang.\n6. Tasdiqlangan acquisition/analysis methodini tanlang.\n7. Signal sifati, saturatsiya, fokus va backgroundni run davomida kuzating.\n8. Tasvir, histogramma yoki electropherogramni saqlang; QC bilan tekshirgach talqin qiling.\n9. Optik sirtlarni faqat ishlab chiqaruvchi tavsiya qilgan usul bilan tozalang.",
    "resultInterpretation": "Tasvir sifati, fokus, signal-to-noise, marker/ladder, kontrol namuna yoki gating strategiyasi tekshiriladi. Talqin usuli tanlangan assay va validatsiyalangan analiz rejasi bilan mos bo‘lishi shart.",
    "commonMistakes": "- Fokus, background, marker yoki controlni tekshirmaslik.\n- Signal saturatsiyasi yoki noto‘g‘ri acquisition sozlamasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: lazer/UV yoki kuchli yorug‘lik, elektr va biologik/kimyoviy namuna. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bio-Rad PowerPac Universal** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bio-Rad PowerPac Universal** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Elektroforez tizimi (gel)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bio-Rad PowerPac Universal manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Bio-Rad PowerPac Universal nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "10": {
    "number": 10,
    "title": "Western blot tizimi",
    "originalName": "Western blot tizimi",
    "manufacturer": "Bio-Rad",
    "model": "Bio-Rad ChemiDoc MP Imaging System",
    "sourceKind": "learning",
    "whatIs": "Oqsillarni antikor yordamida aniqlash va vizualizatsiya qiladi.",
    "whatItDoes": "Maqsadli oqsilni sifat va miqdoriy tahlil qilish",
    "learningOutcomes": "Bu qurilma bilan maqsadli oqsilni sifat va miqdoriy tahlil qilish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Bio-Rad ChemiDoc MP Imaging System uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Bio-Rad ChemiDoc MP Imaging System** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Bio-Rad ChemiDoc MP Imaging System** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Western blot tizimining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Bio-Rad ChemiDoc MP Imaging System manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Bio-Rad ChemiDoc MP Imaging System nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "11": {
    "number": 11,
    "title": "ELISA o'quvchi (Mikroplanshet fotometr)",
    "originalName": "ELISA o'quvchi (Mikroplanshet fotometr)",
    "manufacturer": "BioTek",
    "model": "BioTek Synergy HTX",
    "sourceKind": "learning",
    "whatIs": "96- yoki 384-quduqli planshetlarda optik zichlikni o'lchaydi.",
    "whatItDoes": "Immunoferment tahlil (ELISA), ferment faolligini o'lchash",
    "learningOutcomes": "Bu qurilma bilan immunoferment tahlil (elisa), ferment faolligini o'lchash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. BioTek Synergy HTX uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **BioTek Synergy HTX** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **BioTek Synergy HTX** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** ELISA o'quvchi (Mikroplanshet fotometr)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, BioTek Synergy HTX manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "BioTek Synergy HTX bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "12": {
    "number": 12,
    "title": "Lyuminometr",
    "originalName": "Lyuminometr",
    "manufacturer": "Bio-Rad",
    "model": "Berthold Centro XS3 LB 960",
    "sourceKind": "learning",
    "whatIs": "Bioluminessensiya va kimyoluminessensiya signalini o'lchaydi.",
    "whatItDoes": "ATP bioluminessensiyasi, gen ekspressiyasi tahlili",
    "learningOutcomes": "Bu qurilma bilan atp bioluminessensiyasi, gen ekspressiyasi tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. Berthold Centro XS3 LB 960 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Berthold Centro XS3 LB 960** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Berthold Centro XS3 LB 960** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Lyuminometrning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Berthold Centro XS3 LB 960 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Bio-Rad — rasmiy support va manuals",
        "url": "https://www.bio-rad.com/",
        "note": "Berthold Centro XS3 LB 960 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "13": {
    "number": 13,
    "title": "Flotsitometr (Flow cytometer)",
    "originalName": "Flotsitometr (Flow cytometer)",
    "manufacturer": "BD",
    "model": "BD FACSLyric",
    "sourceKind": "learning",
    "whatIs": "Individual hujayralarni lazer nurida tahlil qiladi.",
    "whatItDoes": "Hujayra saralash, immunofenotiplash, apoptoz tahlili",
    "learningOutcomes": "Bu qurilma bilan hujayra saralash, immunofenotiplash, apoptoz tahlili bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/bo‘yash yoki gel/chip → optik yoki elektr maydon orqali ajratish/deteksiya → tasvir, histogramma yoki electropherogram → sifat nazorati bilan talqin.",
    "mainParts": "- Namuna joylashadigan zona: slide, plate, gel, chip yoki flow cellni ushlab turadi.\n- Optik/elektr moduli: tasvir, floresans yoki migratsiya signalini hosil qiladi.\n- Detektor/kamera: signalni raqamli ma’lumotga aylantiradi.\n- Dasturiy interfeys: tasvir, gate, histogramma yoki electropherogramni boshqaradi.",
    "samplePreparation": "Namuna turi uchun mos slide, bo‘yash, fixatsiya, buffer, gel yoki chip tanlanadi. Kontaminatsiya, havo pufagi va noto‘g‘ri konsentratsiya tasvir/signal sifatini yomonlashtirishi mumkin.",
    "workflow": "1. Optik sirt, kamera/detektor, slide/gel/chip yoki flow cell zonasi holatini tekshiring.\n2. Namuna konsentratsiyasi, bo‘yash/fixatsiya yoki marker/ladder talabini metodga mos tayyorlang.\n3. Focus, light path yoki elektr maydon komponentlarini SOP bo‘yicha tayyorlang.\n4. BD FACSLyric uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Control namuna, calibration slide/bead yoki marker talab qilinsa yuklang.\n6. Tasdiqlangan acquisition/analysis methodini tanlang.\n7. Signal sifati, saturatsiya, fokus va backgroundni run davomida kuzating.\n8. Tasvir, histogramma yoki electropherogramni saqlang; QC bilan tekshirgach talqin qiling.\n9. Optik sirtlarni faqat ishlab chiqaruvchi tavsiya qilgan usul bilan tozalang.",
    "resultInterpretation": "Tasvir sifati, fokus, signal-to-noise, marker/ladder, kontrol namuna yoki gating strategiyasi tekshiriladi. Talqin usuli tanlangan assay va validatsiyalangan analiz rejasi bilan mos bo‘lishi shart.",
    "commonMistakes": "- Fokus, background, marker yoki controlni tekshirmaslik.\n- Signal saturatsiyasi yoki noto‘g‘ri acquisition sozlamasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: lazer/UV yoki kuchli yorug‘lik, elektr va biologik/kimyoviy namuna. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **BD FACSLyric** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **BD FACSLyric** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Flotsitometr (Flow cytometer)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, BD FACSLyric manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "BD — rasmiy support va manuals",
        "url": "https://www.bdbiosciences.com/en-us",
        "note": "BD FACSLyric nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "14": {
    "number": 14,
    "title": "Konfokalli mikroskop",
    "originalName": "Konfokalli mikroskop",
    "manufacturer": "ZEISS",
    "model": "Zeiss LSM 980",
    "sourceKind": "learning",
    "whatIs": "Lazer skanerli optik kesimlar yaratuvchi mikroskop.",
    "whatItDoes": "Hujayra ichki tuzilishini 3D tasvirda ko'rish",
    "learningOutcomes": "Bu qurilma bilan hujayra ichki tuzilishini 3d tasvirda ko'rish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/bo‘yash yoki gel/chip → optik yoki elektr maydon orqali ajratish/deteksiya → tasvir, histogramma yoki electropherogram → sifat nazorati bilan talqin.",
    "mainParts": "- Namuna joylashadigan zona: slide, plate, gel, chip yoki flow cellni ushlab turadi.\n- Optik/elektr moduli: tasvir, floresans yoki migratsiya signalini hosil qiladi.\n- Detektor/kamera: signalni raqamli ma’lumotga aylantiradi.\n- Dasturiy interfeys: tasvir, gate, histogramma yoki electropherogramni boshqaradi.",
    "samplePreparation": "Namuna turi uchun mos slide, bo‘yash, fixatsiya, buffer, gel yoki chip tanlanadi. Kontaminatsiya, havo pufagi va noto‘g‘ri konsentratsiya tasvir/signal sifatini yomonlashtirishi mumkin.",
    "workflow": "1. Optik sirt, kamera/detektor, slide/gel/chip yoki flow cell zonasi holatini tekshiring.\n2. Namuna konsentratsiyasi, bo‘yash/fixatsiya yoki marker/ladder talabini metodga mos tayyorlang.\n3. Focus, light path yoki elektr maydon komponentlarini SOP bo‘yicha tayyorlang.\n4. Zeiss LSM 980 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Control namuna, calibration slide/bead yoki marker talab qilinsa yuklang.\n6. Tasdiqlangan acquisition/analysis methodini tanlang.\n7. Signal sifati, saturatsiya, fokus va backgroundni run davomida kuzating.\n8. Tasvir, histogramma yoki electropherogramni saqlang; QC bilan tekshirgach talqin qiling.\n9. Optik sirtlarni faqat ishlab chiqaruvchi tavsiya qilgan usul bilan tozalang.",
    "resultInterpretation": "Tasvir sifati, fokus, signal-to-noise, marker/ladder, kontrol namuna yoki gating strategiyasi tekshiriladi. Talqin usuli tanlangan assay va validatsiyalangan analiz rejasi bilan mos bo‘lishi shart.",
    "commonMistakes": "- Fokus, background, marker yoki controlni tekshirmaslik.\n- Signal saturatsiyasi yoki noto‘g‘ri acquisition sozlamasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: lazer/UV yoki kuchli yorug‘lik, elektr va biologik/kimyoviy namuna. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Zeiss LSM 980** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Zeiss LSM 980** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Konfokalli mikroskopning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Zeiss LSM 980 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "ZEISS — rasmiy support va manuals",
        "url": "https://www.zeiss.com/microscopy/en/home.html",
        "note": "Zeiss LSM 980 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "15": {
    "number": 15,
    "title": "Teskari faza mikroskopi",
    "originalName": "Teskari faza mikroskopi",
    "manufacturer": "Olympus",
    "model": "Olympus CKX53",
    "sourceKind": "learning",
    "whatIs": "Ob'ektiv pastdan, yorug'lik yuqoridan tushadigan mikroskop.",
    "whatItDoes": "Hujayra kulturalari holati va o'sishini kuzatish",
    "learningOutcomes": "Bu qurilma bilan hujayra kulturalari holati va o'sishini kuzatish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → tayyorlash/bo‘yash yoki gel/chip → optik yoki elektr maydon orqali ajratish/deteksiya → tasvir, histogramma yoki electropherogram → sifat nazorati bilan talqin.",
    "mainParts": "- Namuna joylashadigan zona: slide, plate, gel, chip yoki flow cellni ushlab turadi.\n- Optik/elektr moduli: tasvir, floresans yoki migratsiya signalini hosil qiladi.\n- Detektor/kamera: signalni raqamli ma’lumotga aylantiradi.\n- Dasturiy interfeys: tasvir, gate, histogramma yoki electropherogramni boshqaradi.",
    "samplePreparation": "Namuna turi uchun mos slide, bo‘yash, fixatsiya, buffer, gel yoki chip tanlanadi. Kontaminatsiya, havo pufagi va noto‘g‘ri konsentratsiya tasvir/signal sifatini yomonlashtirishi mumkin.",
    "workflow": "1. Optik sirt, kamera/detektor, slide/gel/chip yoki flow cell zonasi holatini tekshiring.\n2. Namuna konsentratsiyasi, bo‘yash/fixatsiya yoki marker/ladder talabini metodga mos tayyorlang.\n3. Focus, light path yoki elektr maydon komponentlarini SOP bo‘yicha tayyorlang.\n4. Olympus CKX53 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Control namuna, calibration slide/bead yoki marker talab qilinsa yuklang.\n6. Tasdiqlangan acquisition/analysis methodini tanlang.\n7. Signal sifati, saturatsiya, fokus va backgroundni run davomida kuzating.\n8. Tasvir, histogramma yoki electropherogramni saqlang; QC bilan tekshirgach talqin qiling.\n9. Optik sirtlarni faqat ishlab chiqaruvchi tavsiya qilgan usul bilan tozalang.",
    "resultInterpretation": "Tasvir sifati, fokus, signal-to-noise, marker/ladder, kontrol namuna yoki gating strategiyasi tekshiriladi. Talqin usuli tanlangan assay va validatsiyalangan analiz rejasi bilan mos bo‘lishi shart.",
    "commonMistakes": "- Fokus, background, marker yoki controlni tekshirmaslik.\n- Signal saturatsiyasi yoki noto‘g‘ri acquisition sozlamasini e’tiborsiz qoldirish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: lazer/UV yoki kuchli yorug‘lik, elektr va biologik/kimyoviy namuna. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Olympus CKX53** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Olympus CKX53** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Teskari faza mikroskopining vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Olympus CKX53 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Olympus — rasmiy support va manuals",
        "url": "https://www.olympus-lifescience.com/",
        "note": "Olympus CKX53 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "16": {
    "number": 16,
    "title": "CO2 inkubator",
    "originalName": "CO2 inkubator",
    "manufacturer": "Thermo Scientific",
    "model": "Thermo Scientific Heracell VIOS 160i",
    "sourceKind": "learning",
    "whatIs": "Nazorat qilinadigan CO2, harorat va namlik sharoiti yaratadi.",
    "whatItDoes": "Hujayra va to'qima kulturalarini o'stirish",
    "learningOutcomes": "Bu qurilma bilan hujayra va to'qima kulturalarini o'stirish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Aseptik zona, biosafety kabinasi yoki inkubatorning statusi va xizmat jurnalini tekshiring.\n2. Tegishli PPE, dezinfeksiya vositasi va chiqindi idishlarini tayyorlang.\n3. Hujayra/medium/reagent identifikatsiyasi, loti va kontaminatsiya holatini tekshiring.\n4. Thermo Scientific Heracell VIOS 160i uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Ish materialini faqat tasdiqlangan SOP va biosafety darajasiga mos joylashtiring.\n6. Temperatura, CO₂, namlik yoki havo oqimi kabi nazoratlarni faqat tasdiqlangan setpointda qo‘llang.\n7. Ish tugagach, sirtlar va chiqindini biologik xavfsizlik SOPsi bo‘yicha boshqaring.\n8. Namuna holati, inkubatsiya sharoiti va kuzatuvlarni jurnalga yozing.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Aseptik texnikani buzish yoki kontaminatsiya belgilarini e’tiborsiz qoldirish.\n- Ish materialini biosafety darajasiga mos boshqarmaslik.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, aerozol, dezinfektant va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Thermo Scientific Heracell VIOS 160i** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Thermo Scientific Heracell VIOS 160i** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** CO2 inkubatorning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Thermo Scientific Heracell VIOS 160i manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Thermo Scientific — rasmiy support va manuals",
        "url": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-equipment-learning-center/lab-equipment-resource-library/manuals-by-product-type.html",
        "note": "Thermo Scientific Heracell VIOS 160i nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "17": {
    "number": 17,
    "title": "Muzlatgich (ULT, -80°C)",
    "originalName": "Muzlatgich (ULT, -80°C)",
    "manufacturer": "Thermo Scientific",
    "model": "Thermo Scientific TSX Series -86°C",
    "sourceKind": "learning",
    "whatIs": "Ultra past haroratda biologik namunalarni saqlaydi.",
    "whatItDoes": "Hujayra liniyalari, fermentlar, plazmidalar, qon namunalarini saqlash",
    "learningOutcomes": "Bu qurilma bilan hujayra liniyalari, fermentlar, plazmidalar, qon namunalarini saqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilma temperatura logi, alarm, eshik qistirmasi va xizmat holatini tekshiring.\n2. Namuna IDsi, konteyner materiali va ruxsat etilgan saqlash temperaturasini tasdiqlang.\n3. Freezer/cryobox xaritasini tayyorlang va eshik ochiq qolish vaqtini kamaytiring.\n4. Thermo Scientific TSX Series -86°C uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Namunani tez, lekin izchil tarzda tegishli pozitsiyaga joylashtiring.\n6. Temperatura excursion yoki alarm bo‘lsa, belgilangan contingency SOPni ishga tushiring.\n7. Kirim/chiqim hamda quti/rack joylashuvini inventar tizimida qayd qiling.\n8. Muz, kondensat yoki qistirma muammosini ruxsat etilgan xizmat tartibida bartaraf eting.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Eshikni uzoq ochiq qoldirish yoki joylashuv jurnalini yuritmaslik.\n- Temperatura alarmiga tasdiqlangan contingency SOPsiz javob berish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: nihoyatda past temperatura, sovuq kuyishi va yopiq joyda gaz xavfi. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Thermo Scientific TSX Series -86°C** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Thermo Scientific TSX Series -86°C** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Muzlatgich (ULT, -80°C)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Thermo Scientific TSX Series -86°C manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Thermo Scientific — rasmiy support va manuals",
        "url": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-equipment-learning-center/lab-equipment-resource-library/manuals-by-product-type.html",
        "note": "Thermo Scientific TSX Series -86°C nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "18": {
    "number": 18,
    "title": "Liyofilizator (Freeze dryer)",
    "originalName": "Liyofilizator (Freeze dryer)",
    "manufacturer": "Labconco",
    "model": "Christ Alpha 1-2 LDplus",
    "sourceKind": "learning",
    "whatIs": "Sovitib quritish orqali suvni sublimatsiya qiladi.",
    "whatItDoes": "Oqsillar, vaksinalar, biologik preparatlar barqarorligini saqlash",
    "learningOutcomes": "Bu qurilma bilan oqsillar, vaksinalar, biologik preparatlar barqarorligini saqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Christ Alpha 1-2 LDplus uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Christ Alpha 1-2 LDplus** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Christ Alpha 1-2 LDplus** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Liyofilizator (Freeze dryer)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Christ Alpha 1-2 LDplus manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Christ Alpha 1-2 LDplus bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "19": {
    "number": 19,
    "title": "Homogenizator (ultratovush)",
    "originalName": "Homogenizator (ultratovush)",
    "manufacturer": "Qsonica",
    "model": "Branson SFX550 Sonifier",
    "sourceKind": "learning",
    "whatIs": "Ultratovush to'lqinlari bilan hujayra pardalarini parchalaydi.",
    "whatItDoes": "Hujayra lizisi, DNK/oqsil ekstraksiyasi",
    "learningOutcomes": "Bu qurilma bilan hujayra lizisi, dnk/oqsil ekstraksiyasi bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Namuna konteyneri, adaptor/probe, PPE va kontaminatsiya nazoratini tekshiring.\n2. Namuna hajmi, buffer, sovitish talabi va yopiq/ochiq ishlash cheklovini SOP bo‘yicha belgilang.\n3. Branson SFX550 Sonifier uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n4. Namuna va mos aksessuarni xavfsiz mahkamlang.\n5. Faqat tasdiqlangan protokol doirasida ishlov bering; qizish, aerozol yoki to‘kilishni kuzating.\n6. Ishlov berilgach, kerakli fraksiyani protokol bo‘yicha ajrating va keyingi analiz uchun saqlang.\n7. Proba, adapter yoki kamera qismlarini ruxsat etilgan usul bilan tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: aerozol, shovqin/ultratovush yoki harakatlanuvchi qismlar. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Branson SFX550 Sonifier** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Branson SFX550 Sonifier** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Homogenizator (ultratovush)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Branson SFX550 Sonifier manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Branson SFX550 Sonifier bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "20": {
    "number": 20,
    "title": "Magnit aralashtirgich (qizdiruvchi plita)",
    "originalName": "Magnit aralashtirgich (qizdiruvchi plita)",
    "manufacturer": "IKA",
    "model": "IKA C-MAG HS 7 digital",
    "sourceKind": "learning",
    "whatIs": "Magnit maydon yordamida suyuqlikni aralashtirib qizdiradi.",
    "whatItDoes": "Reagentlar tayyorlash, eritmalar tayyorlash",
    "learningOutcomes": "Bu qurilma bilan reagentlar tayyorlash, eritmalar tayyorlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. IKA C-MAG HS 7 digital uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **IKA C-MAG HS 7 digital** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **IKA C-MAG HS 7 digital** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Magnit aralashtirgich (qizdiruvchi plita)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, IKA C-MAG HS 7 digital manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "IKA C-MAG HS 7 digital bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "21": {
    "number": 21,
    "title": "pH-metr",
    "originalName": "pH-metr",
    "manufacturer": "Mettler Toledo",
    "model": "Mettler Toledo Seven Excellence S470",
    "sourceKind": "learning",
    "whatIs": "Eritmalar vodorod ionlari konsentratsiyasini aniq o'lchaydi.",
    "whatItDoes": "Buferlar, ozuqa muhitlari, namunalar pH ini nazorat qilish",
    "learningOutcomes": "Bu qurilma bilan buferlar, ozuqa muhitlari, namunalar ph ini nazorat qilish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Elektrod/sensor, standart eritma va namuna konteynerining mosligini tekshiring.\n2. Standartlarning yaroqlilik muddati, temperatura muvozanati va lotini qayd qiling.\n3. Mettler Toledo Seven Excellence S470 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n4. Kalibratsiyani faqat tegishli standart va laboratoriya SOPsi bo‘yicha bajaring.\n5. Namunani ehtiyotkorlik bilan o‘lchang, cross-contaminationni oldini oling.\n6. Natijani standart/blank/QC bilan tekshiring va birliklar bilan qayd qiling.\n7. Sensorni ishlab chiqaruvchi talabiga muvofiq chaying, saqlang yoki regeneratsiya qiling.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: standart eritmalar, shisha/elektrod va kimyoviy reagentlar. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Mettler Toledo Seven Excellence S470** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Mettler Toledo Seven Excellence S470** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** pH-metrning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Mettler Toledo Seven Excellence S470 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Mettler Toledo Seven Excellence S470 bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "22": {
    "number": 22,
    "title": "Analitik tarozilar",
    "originalName": "Analitik tarozilar",
    "manufacturer": "Sartorius",
    "model": "Sartorius Entris II BCE64i-1S",
    "sourceKind": "learning",
    "whatIs": "0,0001 g aniqlikdagi elektron tarozilar.",
    "whatItDoes": "Reagent, namuna va ozuqa muhitlari og'irligini o'lchash",
    "learningOutcomes": "Bu qurilma bilan reagent, namuna va ozuqa muhitlari og'irligini o'lchash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Sartorius Entris II BCE64i-1S uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Sartorius Entris II BCE64i-1S** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Sartorius Entris II BCE64i-1S** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Analitik tarozilarning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Sartorius Entris II BCE64i-1S manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Sartorius — rasmiy support va manuals",
        "url": "https://www.sartorius.com/",
        "note": "Sartorius Entris II BCE64i-1S nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "23": {
    "number": 23,
    "title": "Termostat (Issiq kamera)",
    "originalName": "Termostat (Issiq kamera)",
    "manufacturer": "Binder",
    "model": "Memmert IN260",
    "sourceKind": "learning",
    "whatIs": "Aniq harorat rejimini ushlab turuvchi kamera.",
    "whatItDoes": "Mikrobiologik o'stirish, fermentatsiya, laboratoriya testlari",
    "learningOutcomes": "Bu qurilma bilan mikrobiologik o'stirish, fermentatsiya, laboratoriya testlari bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. Memmert IN260 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: biologik material, kimyoviy reagent, elektr va kontaminatsiya. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Memmert IN260** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Memmert IN260** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Termostat (Issiq kamera)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Memmert IN260 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Ishlab chiqaruvchi rasmiy manuali",
        "note": "Memmert IN260 bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "24": {
    "number": 24,
    "title": "Suyuq azot idishi (Devar idishi)",
    "originalName": "Suyuq azot idishi (Devar idishi)",
    "manufacturer": "Thermo Fisher Scientific",
    "model": "Taylor-Wharton CP Series CP34",
    "sourceKind": "learning",
    "whatIs": "Kriogenikdagi (-196°C) biologik namunalarni saqlaydi.",
    "whatItDoes": "Hujayra liniyalari va spermalarni uzoq muddatli saqlash",
    "learningOutcomes": "Bu qurilma bilan hujayra liniyalari va spermalarni uzoq muddatli saqlash bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    "mainParts": "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    "samplePreparation": "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    "workflow": "1. Qurilma temperatura logi, alarm, eshik qistirmasi va xizmat holatini tekshiring.\n2. Namuna IDsi, konteyner materiali va ruxsat etilgan saqlash temperaturasini tasdiqlang.\n3. Freezer/cryobox xaritasini tayyorlang va eshik ochiq qolish vaqtini kamaytiring.\n4. Taylor-Wharton CP Series CP34 uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n5. Namunani tez, lekin izchil tarzda tegishli pozitsiyaga joylashtiring.\n6. Temperatura excursion yoki alarm bo‘lsa, belgilangan contingency SOPni ishga tushiring.\n7. Kirim/chiqim hamda quti/rack joylashuvini inventar tizimida qayd qiling.\n8. Muz, kondensat yoki qistirma muammosini ruxsat etilgan xizmat tartibida bartaraf eting.",
    "resultInterpretation": "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
    "commonMistakes": "- Eshikni uzoq ochiq qoldirish yoki joylashuv jurnalini yuritmaslik.\n- Temperatura alarmiga tasdiqlangan contingency SOPsiz javob berish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: nihoyatda past temperatura, sovuq kuyishi va yopiq joyda gaz xavfi. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Taylor-Wharton CP Series CP34** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Taylor-Wharton CP Series CP34** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Suyuq azot idishi (Devar idishi)ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Taylor-Wharton CP Series CP34 manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Thermo Fisher Scientific — rasmiy support va manuals",
        "url": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-equipment-learning-center/lab-equipment-resource-library/manuals-by-product-type.html",
        "note": "Taylor-Wharton CP Series CP34 nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  },
    "25": {
    "number": 25,
    "title": "Mikrosentrifuga",
    "originalName": "Mikrosentrifuga",
    "manufacturer": "Eppendorf",
    "model": "Eppendorf MiniSpin plus",
    "sourceKind": "learning",
    "whatIs": "Kichik hacmdagi ependorf trubkalar uchun kompakt sentrifuga.",
    "whatItDoes": "Tez fraktsiyalash, PCR tayyorlov, oqsil cho'ktirish",
    "learningOutcomes": "Bu qurilma bilan tez fraktsiyalash, pcr tayyorlov, oqsil cho'ktirish bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.",
    "principle": "Namuna → muvozanatlangan rotor → aylanish orqali nisbiy markazdan qochma kuch → fraksiyalar/sediment hosil bo‘lishi → ehtiyotkor ajratib olish.",
    "mainParts": "- Rotor: naycha yoki platega aylanish energiyasini uzatadi.\n- Adapter/bucket: mos sarf materialini xavfsiz joylashtiradi.\n- Kamera va qopqoq: mexanik himoya hamda qopqoq qulfi bilan ishlaydi.\n- Boshqaruv paneli: vaqt, RCF/tezlik va zarur bo‘lsa temperaturani boshqaradi.",
    "samplePreparation": "Naycha turi, to‘ldirish darajasi va muvozanatlash rotor va protokolga mos bo‘lishi kerak. Qarama-qarshi pozitsiyalar massasi muvozanatlanganini tekshiring; faqat tasdiqlangan rotor/naychalardan foydalaning.",
    "workflow": "1. Rotor, bucket, adapter, naycha turi va xizmat jurnalining mosligini tekshiring.\n2. Namuna konteynerlarida yoriq, oqish yoki noto‘g‘ri to‘ldirish yo‘qligini tekshiring.\n3. Qarama-qarshi pozitsiyalardagi yuklama massasini muvozanatlang.\n4. Rotor/naychalarni tasdiqlangan limitlar doirasida joylashtiring.\n5. Eppendorf MiniSpin plus uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang.\n6. RCF/tezlik, vaqt va zarur bo‘lsa temperaturani faqat metod/SOPga mos kiriting.\n7. Qopqoqni mahkam yoping va runni boshlang; aylanish vaqtida qopqoqni ochmang.\n8. Run tugagach, rotor to‘liq to‘xtaganini kuting.\n9. Pellet/supernatantni protokol bo‘yicha ehtiyotkorlikda ajrating va run parametrlarini qayd qiling.\n10. To‘kilish bo‘lsa, rotorni ishlatishni to‘xtating va biohazard/servis SOP bo‘yicha ish tuting.",
    "resultInterpretation": "Pellet, supernatant yoki fraksiyaning joylashuvi va holati protokol bilan solishtiriladi. Natijani baholashda RCF, vaqt, temperatura va namuna turi run jurnalida qayd etilgan bo‘lishi kerak.",
    "commonMistakes": "- Yuklamani muvozanatlashtirmaslik.\n- Rotor/naycha limitidan tashqarida ishlash yoki to‘liq to‘xtashdan oldin ochish.\n- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.",
    "safety": "Bu qurilmada asosiy xavflar: aylanma mexanik energiya, naycha sinishi va biologik aerozol. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.",
    "maintenance": "Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **Eppendorf MiniSpin plus** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.",
    "calibrationTroubleshooting": "Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **Eppendorf MiniSpin plus** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.",
    "practice": "**Boshlang‘ich:** Mikrosentrifuganing vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, Eppendorf MiniSpin plus manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.",
    "sources": [
      {
        "label": "Eppendorf — rasmiy support va manuals",
        "url": "https://www.eppendorf.com/us-en/download-center",
        "note": "Eppendorf MiniSpin plus nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring."
      },
      {
        "label": "Laboratoriya SOP va sifat tizimi",
        "note": "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring."
      }
    ]
  }
};

export default learningBlock1;
