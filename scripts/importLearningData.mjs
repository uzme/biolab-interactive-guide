/**
 * BioLab curriculum importer
 * Builds a safe 16-section learning layer for 100 devices. Canonical device name,
 * purpose and model are read from the source master export. Model-specific values
 * are never generated: users are directed to the manufacturer manual instead.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "..");
const uploadRoot = "/home/ubuntu/upload";
const learningFiles = [
  "BIOTECH_100_OQUV_BAZA_1_25.md", "BIOTECH_100_OQUV_BAZA_26_50.md",
  "BIOTECH_100_OQUV_BAZA_51_75.md", "BIOTECH_100_OQUV_BAZA_76_100.md",
];
const purchaseFiles = [
  "BIOTECH_100_XARID_BAZASI_1_25.md", "BIOTECH_100_XARID_BAZASI_26_50.md",
  "BIOTECH_100_XARID_BAZASI_51_75.md", "BIOTECH_100_XARID_BAZASI_76_100.md",
];

const officialPortals = {
  "Agilent": "https://www.agilent.com/en",
  "BD": "https://www.bdbiosciences.com/en-us",
  "Beckman Coulter": "https://www.beckmancoulter.com/",
  "Bio-Rad": "https://www.bio-rad.com/",
  "Cytiva": "https://www.cytivalifesciences.com/",
  "Eppendorf": "https://www.eppendorf.com/us-en/download-center",
  "Esco": "https://www.escoglobal.com/",
  "Illumina": "https://www.illumina.com/",
  "Leica": "https://www.leicabiosystems.com/",
  "Miltenyi Biotec": "https://www.miltenyibiotec.com/",
  "Olympus": "https://www.olympus-lifescience.com/",
  "PHCbi": "https://www.phchd.com/us/biomedical",
  "QIAGEN": "https://www.qiagen.com/",
  "Roche": "https://lifescience.roche.com/",
  "Sartorius": "https://www.sartorius.com/",
  "Shimadzu": "https://www.shimadzu.com/",
  "Thermo Fisher Scientific": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-equipment-learning-center/lab-equipment-resource-library/manuals-by-product-type.html",
  "Thermo Scientific": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-equipment-learning-center/lab-equipment-resource-library/manuals-by-product-type.html",
  "Tuttnauer": "https://tuttnauerusa.com/",
  "Waters": "https://www.waters.com/",
  "ZEISS": "https://www.zeiss.com/microscopy/en/home.html",
};

function clean(value = "") {
  return value.replace(/cite[^]+/g, "").replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function removeMarkdown(value = "") { return clean(value).replace(/\*\*/g, "").replace(/`/g, "").trim(); }
function normalizeHeading(value = "") {
  return removeMarkdown(value).replace(/[🔬⭐⭐⚙️📊⚠️🛡️🧠💰🏪🇺🇿📦🚚🛠️🔧🎯📌]/gu, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function findSection(sections, query) {
  const entry = Object.entries(sections).find(([heading]) => heading.includes(query.toLowerCase()));
  return entry ? entry[1] : "";
}
function parseRecords(source, kind) {
  const headers = [...source.matchAll(/^##\s+(\d{1,3})\.\s*(.+?)\s*$/gm)];
  const records = [];
  headers.forEach((match, index) => {
    const number = Number(match[1]);
    if (number < 1 || number > 100) return;
    const start = match.index + match[0].length;
    const end = index + 1 < headers.length ? headers[index + 1].index : source.length;
    const block = source.slice(start, end).trim();
    const sectionHeaders = [...block.matchAll(/^###\s+(.+?)\s*$/gm)];
    const preamble = block.slice(0, sectionHeaders.length ? sectionHeaders[0].index : block.length);
    const sections = {};
    sectionHeaders.forEach((section, sectionIndex) => {
      const sectionStart = section.index + section[0].length;
      const sectionEnd = sectionIndex + 1 < sectionHeaders.length ? sectionHeaders[sectionIndex + 1].index : block.length;
      sections[normalizeHeading(section[1])] = clean(block.slice(sectionStart, sectionEnd));
    });
    const originalMatch = preamble.match(/\*\*(?:Original nomi\s*\/\s*qidiruv nomi|Original\/qidiruv nomi):\*\*\s*(.+)/i);
    const modelMatch = preamble.match(/\*\*Model:\*\*\s*(.+)/i);
    const base = { number, title: removeMarkdown(match[2]), searchName: originalMatch ? removeMarkdown(originalMatch[1]) : removeMarkdown(match[2]), model: modelMatch ? removeMarkdown(modelMatch[1]) : "", sourceKind: kind };
    if (kind === "learning") records.push({ ...base, whatIs: findSection(sections, "qurilma nima"), whatItDoes: findSection(sections, "nima qiladi"), learningOutcomes: findSection(sections, "nimalarni o‘rganish") || findSection(sections, "nimalarni o'rganish"), principle: findSection(sections, "ishlash prinsipi"), workflow: findSection(sections, "qanday ishlatiladi"), resultInterpretation: findSection(sections, "natijani qanday tushunish"), commonMistakes: findSection(sections, "eng muhim xatolar"), safety: findSection(sections, "xavfsizlik"), maintenance: findSection(sections, "tozalash va texnik xizmat"), practice: findSection(sections, "o‘rganish uchun amaliy mashq") || findSection(sections, "o'rganish uchun amaliy mashq") });
    else {
      const priceHeading = Object.keys(sections).find((heading) => heading.includes("narxi")) || "";
      records.push({ ...base, price: priceHeading.replace(/^.*narxi\s*:\s*/i, "").trim(), priceEvidence: findSection(sections, "narx dalili"), source: findSection(sections, "manba"), priceStatus: findSection(sections, "holat"), whereToBuy: findSection(sections, "qayerdan olish"), purchaseRule: findSection(sections, "xarid qoidasi"), availabilityUz: findSection(sections, "o‘zbekistonda topilishi") || findSection(sections, "o'zbekistonda topilishi"), importInfo: findSection(sections, "import"), delivery: findSection(sections, "yetkazib berish"), service: findSection(sections, "servis"), spares: findSection(sections, "ehtiyot qismlar"), tco: findSection(sections, "umumiy egalik xarajati"), redFlags: findSection(sections, "qizil bayroq"), finalStatus: findSection(sections, "yakuniy status") });
    }
  });
  return records;
}
function parseFiles(files, kind) {
  const all = files.flatMap((fileName) => parseRecords(fs.readFileSync(path.join(uploadRoot, fileName), "utf8"), kind));
  const byNumber = new Map();
  all.forEach((record) => { if (byNumber.has(record.number)) throw new Error(`${kind}: ${record.number}-qurilma takrorlangan`); byNumber.set(record.number, record); });
  const expected = Array.from({ length: 100 }, (_, index) => index + 1);
  const missing = expected.filter((number) => !byNumber.has(number));
  if (missing.length) throw new Error(`${kind}: qamrovda yetishmayotgan raqamlar: ${missing.join(", ")}`);
  return Object.fromEntries(expected.map((number) => [number, byNumber.get(number)]));
}
function readEquipment() {
  const source = fs.readFileSync(path.join(projectRoot, "client/src/lib/equipmentData.ts"), "utf8");
  const marker = "export const equipment: Equipment[] = ";
  const start = source.indexOf(marker) + marker.length;
  const end = source.indexOf("\n];", start) + 2;
  if (start < marker.length || end < 2) throw new Error("Kanonik equipmentData massivi topilmadi");
  return JSON.parse(source.slice(start, end));
}
function inferManufacturer(model, brands) {
  const known = Object.keys(officialPortals).sort((a, b) => b.length - a.length);
  const matched = known.find((name) => model.toLowerCase().startsWith(name.toLowerCase()));
  if (matched) return matched;
  const firstBrand = brands.split("/")[0]?.trim() || "Ishlab chiqaruvchi";
  return firstBrand === "Thermo Fisher" ? "Thermo Fisher Scientific" : firstBrand;
}
function profileFor(device) {
  const name = `${device.name} ${device.model}`.toLowerCase();
  const profiles = [
    [/pcr|termotsik|qPCR|ddpcr/, { principle: "Namuna → nuklein kislota/reaksiya aralashmasi → nazorat qilinadigan harorat sikllari → (tegishli assayda) floresans deteksiyasi → amplifikatsiya ko‘rsatkichi va sifat nazorati.", parts: "- Reaksiya bloki: tube yoki plate ichidagi reaksiyani belgilangan haroratlar bo‘yicha boshqaradi.\n- Qopqoq/siqish mexanizmi: idishlarni ishonchli ushlab, kondensatsiyani kamaytirishga yordam beradi.\n- Optik modul (qPCR/dPCRda): floresans signalni qayd etadi.\n- Dasturiy interfeys: assay, plate layout va run faylini boshqaradi.", prep: "DNK/RNK sifati va kontaminatsiya nazorati assay natijasiga bevosita ta’sir qiladi. Namuna ekstraksiyasi, blank, musbat/manfiy nazoratlar hamda reagentlar faqat tasdiqlangan assay protokoli bo‘yicha tayyorlanadi.", result: "Amplifikatsiya egri chizig‘i, Ct/Cq yoki assayga tegishli miqdoriy ko‘rsatkichlar blank, standart, nazoratlar va qabul mezonlari bilan birga baholanadi. Model yoki assay tasdiqlamagan cutoffni qo‘llamang." }],
    [/sekven/, { principle: "Namuna → library tayyorlash → fragment/klaster yoki boshqa tayyorlash bosqichi → deteksiya → raw readlar → sifat ko‘rsatkichlari va bioinformatik tahlil.", parts: "- Library tayyorlash moduli/reaktivlari: o‘qishga tayyor nuklein kislota kutubxonasini hosil qiladi.\n- Flow cell yoki o‘qish zonasi: deteksiya jarayoni bajariladigan sirt.\n- Optik/deteksiya moduli: sikl signalini qayd etadi.\n- Boshqaruv va ma’lumot tizimi: run, raw data va QC fayllarini yuritadi.", prep: "Nuklein kislota sifati, miqdori va library tayyorlash bosqichi hal qiluvchi ahamiyatga ega. Library kit, indekslash, blank va QC mezonlari faqat mos ishlab chiqaruvchi protokoli asosida tanlanadi.", result: "Read soni, sifat ballari, qamrov, kontaminatsiya ko‘rsatkichlari va bioinformatik QC birgalikda baholanadi. Biologik xulosa berishdan avval positive/negative control va validatsiya mezonlarini tekshiring." }],
    [/sentri|centrifug/, { principle: "Namuna → muvozanatlangan rotor → aylanish orqali nisbiy markazdan qochma kuch → fraksiyalar/sediment hosil bo‘lishi → ehtiyotkor ajratib olish.", parts: "- Rotor: naycha yoki platega aylanish energiyasini uzatadi.\n- Adapter/bucket: mos sarf materialini xavfsiz joylashtiradi.\n- Kamera va qopqoq: mexanik himoya hamda qopqoq qulfi bilan ishlaydi.\n- Boshqaruv paneli: vaqt, RCF/tezlik va zarur bo‘lsa temperaturani boshqaradi.", prep: "Naycha turi, to‘ldirish darajasi va muvozanatlash rotor va protokolga mos bo‘lishi kerak. Qarama-qarshi pozitsiyalar massasi muvozanatlanganini tekshiring; faqat tasdiqlangan rotor/naychalardan foydalaning.", result: "Pellet, supernatant yoki fraksiyaning joylashuvi va holati protokol bilan solishtiriladi. Natijani baholashda RCF, vaqt, temperatura va namuna turi run jurnalida qayd etilgan bo‘lishi kerak." }],
    [/xromat|hplc|gc|lc-ms|mass[a-]spektrom/, { principle: "Namuna → tayyorlash/injeksiya → ajratish tizimi → detektor yoki massa analizatori → signal/chromatogramma → standart/QC asosida identifikatsiya va miqdoriy natija.", parts: "- Namuna kiritish moduli: namuna hajmini tizimga uzatadi.\n- Ajratish zonasi (kolonka/kapillyar): komponentlarni fizik-kimyoviy xususiyatiga ko‘ra ajratadi.\n- Detektor: ajralgan komponentni signalga aylantiradi.\n- Nasos/gaz va data system: oqim, bosim yoki tashuvchi gaz hamda chromatogrammani boshqaradi.", prep: "Matritsa, solvent, filtratsiya, ichki standart va kalibrlash standartlari tanlangan metodga mos bo‘lishi kerak. Namuna tayyorlash validatsiyalangan method/SOP talablariga muvofiq bajariladi.", result: "Retention time, peak shakli, peak maydoni/balandligi, blank, standart egri chizig‘i va QC qabul mezonlari birgalikda baholanadi. Identifikatsiya va miqdoriy xulosani faqat validatsiyalangan method bilan bering." }],
    [/mikroskop|flotsit|flow cytom|bioanalyzer|elektroforez/, { principle: "Namuna → tayyorlash/bo‘yash yoki gel/chip → optik yoki elektr maydon orqali ajratish/deteksiya → tasvir, histogramma yoki electropherogram → sifat nazorati bilan talqin.", parts: "- Namuna joylashadigan zona: slide, plate, gel, chip yoki flow cellni ushlab turadi.\n- Optik/elektr moduli: tasvir, floresans yoki migratsiya signalini hosil qiladi.\n- Detektor/kamera: signalni raqamli ma’lumotga aylantiradi.\n- Dasturiy interfeys: tasvir, gate, histogramma yoki electropherogramni boshqaradi.", prep: "Namuna turi uchun mos slide, bo‘yash, fixatsiya, buffer, gel yoki chip tanlanadi. Kontaminatsiya, havo pufagi va noto‘g‘ri konsentratsiya tasvir/signal sifatini yomonlashtirishi mumkin.", result: "Tasvir sifati, fokus, signal-to-noise, marker/ladder, kontrol namuna yoki gating strategiyasi tekshiriladi. Talqin usuli tanlangan assay va validatsiyalangan analiz rejasi bilan mos bo‘lishi shart." }],
    [/pipet|dispenser|liquid handler/, { principle: "Reagent yoki namuna → mos tip/sarf materiali → aspiratsiya → aniq hajmni dispensing qilish → viskozit, havo pufagi va QC nazorati.", parts: "- Hajm sozlash yoki protokol moduli: uzatiladigan hajmni belgilaydi.\n- Piston/kanal: aspiratsiya va dispensing kuchini hosil qiladi.\n- Tip adapteri: mos tipni ushlab turadi.\n- Ejektor yoki interfeys: tip almashtirish va jarayonni nazorat qiladi.", prep: "Suyuqlik xususiyati, mos tip, oldindan ho‘llash zarurati, havo pufagi va plate/tube joylashuvi tekshiriladi. Hajm diapazonidan tashqarida ishlamang.", result: "Pipetlash sifati blank, gravimetrik/volumetrik tekshiruv yoki assay QC bilan baholanadi. Hajm xatosi, carryover va tomchi qolishi biologik natijaga ta’sir qilishi mumkin." }],
    [/avtoklav/, { principle: "Yuklama → to‘yingan bug‘ va bosim ostidagi sikl → issiqlik ta’sirida sterilizatsiya → indikator/jurnal tekshiruvi → xavfsiz sovitish va chiqarish.", parts: "- Kamera: yuklama joylashadigan bosimli zona.\n- Bug‘/suv tizimi: sterilizatsiya muhitini hosil qiladi.\n- Eshik va qulflash tizimi: bosim ostida ochilishdan himoya qiladi.\n- Sikl boshqaruvi va indikatorlar: vaqt, temperatura va alarm holatini ko‘rsatadi.", prep: "Faqat autoklavga mos materiallarni yuklang. Yuklamani haddan tashqari zich joylashtirmang; indikator, idish yopilishi va chiqindi SOPsini tekshiring.", result: "Sikl tugashi yakuniy steril holatni o‘zi bilan kafolatlamaydi: kimyoviy/biologik indikator, jurnal va laboratoriya validatsiya tartibi asosida baholanadi." }],
  ];
  return profiles.find(([pattern]) => pattern.test(name))?.[1] ?? {
    principle: "Namuna yoki jarayon materiali → tegishli ishchi modul → fizik, kimyoviy yoki biologik o‘zaro ta’sir → deteksiya/yoki jarayon nazorati → raw data yoki kuzatuv natijasi. Aniq mexanizm ushbu modelning rasmiy manualida tekshiriladi.",
    parts: "- Namuna/ishchi zona: material yoki sarf qismini qabul qiladi.\n- Asosiy funksional modul: o‘lchov, ajratish, inkubatsiya yoki ishlov berish jarayonini bajaradi.\n- Deteksiya/nazorat moduli: signal, status yoki jarayon parametrini qayd etadi.\n- Boshqaruv interfeysi: metod, parametr va loglarni boshqaradi.",
    prep: "Namuna turi, sarf materiali va sifat nazorati tanlangan metod/SOPga mos bo‘lishi kerak. Namuna identifikatsiyasi, yetarli hajm, mos konteyner va kontaminatsiya nazorati run boshlanishidan avval tekshiriladi.",
    result: "Natijani raw data, blank/standart/QC va tasdiqlangan protokol bilan birgalikda baholang. Modelga xos cutoff, parametr yoki qabul mezoni faqat rasmiy manual yoki validatsiyalangan SOPdan olinadi.",
  };
}
function familyFor(device) {
  const text = `${device.name} ${device.model} ${device.category}`.toLowerCase();
  if (/pcr|termotsik|qpcr|ddpcr/.test(text)) return "pcr";
  if (/sekven/.test(text)) return "sequencing";
  if (/avtoklav/.test(text)) return "autoclave";
  if (/sentri|centrifug/.test(text)) return "centrifuge";
  if (/xromat|hplc|gc|lc-ms|mass[a-]spektrom/.test(text)) return "chromatography";
  if (/mikroskop|flotsit|flow cytom|bioanalyzer|elektroforez/.test(text)) return "optical";
  if (/pipet|dispenser|liquid handler/.test(text)) return "liquid-handling";
  if (/inkubator|laminar|biosafety|bsc|hujayra|cell culture/.test(text)) return "cell-culture";
  if (/bioreaktor|ferment/.test(text)) return "bioreactor";
  if (/muzlatgich|freezer|sovut|kriyo|cold/.test(text)) return "cold-storage";
  if (/spektr|elisa|lyumin|fluorometr|fotometr/.test(text)) return "optical-assay";
  if (/sonik|homogen|bead|mill|maydal/.test(text)) return "disruption";
  if (/ph.?metr|conductiv|osmometr|titrator/.test(text)) return "physicochemical";
  return "general";
}
function workflowFor(device) {
  const manual = `${device.model} uchun rasmiy manual yoki laboratoriya SOPsidan tasdiqlangan metodni aniqlang`;
  const workflows = {
    pcr: `1. Pre-PCR va post-PCR ish zonalarini ajrating, yuzalarni mos SOP asosida tayyorlang.\n2. Qurilma holati, plate/tube mosligi va xizmat jurnalini tekshiring.\n3. DNK/RNK, primer/probe, master mix hamda musbat/manfiy nazoratlarni tasdiqlangan assay protokoli bo‘yicha tayyorlang.\n4. Namuna identifikatsiyasi va plate layoutni ikki marta tekshiring.\n5. Reaksiya aralashmasini pipetlang, havo pufagi yoki cross-contamination bo‘lmasligini tekshiring.\n6. Plate/tubeni to‘g‘ri muhrlab, qurilmaga joylashtiring.\n7. ${manual}.\n8. Runni boshlang; qopqoq/interlockni chetlab o‘tmang.\n9. Amplifikatsiya plotlari, Ct/Cq hamda control holatini qayd qiling.\n10. Raw data va run faylini saqlang; keyin ish zonasini tozalang va chiqindini SOP bo‘yicha boshqaring.`,
    sequencing: `1. Namuna identifikatsiyasi, DNK/RNK sifati va miqdorini validatsiyalangan mezonlar bo‘yicha tekshiring.\n2. Library kit, indekslash sxemasi, flow cell va reagentlarning mosligini tasdiqlang.\n3. Library tayyorlash hamda QCni ishlab chiqaruvchi protokoliga ko‘ra yakunlang.\n4. ${manual}.\n5. Library/flow cellni ehtiyotkorlik bilan yuklang; lot va run ma’lumotlarini qayd qiling.\n6. Runni boshlang va status/alarmni kuzating.\n7. Run tugagach, raw readlar, yield, Q-score va boshqa QC ko‘rsatkichlarini tekshiring.\n8. Ma’lumotlarni xavfsiz saqlang, so‘ng bioinformatik tahlilga faqat QC talabi qondirilganda o‘tkazing.`,
    autoclave: `1. Qurilma holati, suv/bug‘ tizimi, eshik qistirmasi va xizmat jurnalini tekshiring.\n2. Yuklama autoklavga mos ekanini, idishlar ventlanganini va yopiq konteynerlar yo‘qligini tasdiqlang.\n3. Kimyoviy yoki biologik indikator talabini SOP bo‘yicha belgilang.\n4. Yuklamani haddan ortiq zichlashtirmasdan, bug‘ aylanishi uchun joy qoldirib joylashtiring.\n5. ${manual}.\n6. Mos siklni faqat yuklama turiga mos validatsiyalangan SOP bo‘yicha tanlang.\n7. Sikl davomida eshik/qulf tizimini chetlab o‘tmang.\n8. Sikl tugagach, bosim va temperatura xavfsiz darajaga tushganini tekshiring.\n9. Issiq yuklamani tegishli PPE bilan ehtiyotkorlikda oling.\n10. Indikator, sikl jurnali va qabul mezonlarini qayd qiling; kamera va eshik zonasini ishlab chiqaruvchi ko‘rsatmasi bo‘yicha tozalang.`,
    centrifuge: `1. Rotor, bucket, adapter, naycha turi va xizmat jurnalining mosligini tekshiring.\n2. Namuna konteynerlarida yoriq, oqish yoki noto‘g‘ri to‘ldirish yo‘qligini tekshiring.\n3. Qarama-qarshi pozitsiyalardagi yuklama massasini muvozanatlang.\n4. Rotor/naychalarni tasdiqlangan limitlar doirasida joylashtiring.\n5. ${manual}.\n6. RCF/tezlik, vaqt va zarur bo‘lsa temperaturani faqat metod/SOPga mos kiriting.\n7. Qopqoqni mahkam yoping va runni boshlang; aylanish vaqtida qopqoqni ochmang.\n8. Run tugagach, rotor to‘liq to‘xtaganini kuting.\n9. Pellet/supernatantni protokol bo‘yicha ehtiyotkorlikda ajrating va run parametrlarini qayd qiling.\n10. To‘kilish bo‘lsa, rotorni ishlatishni to‘xtating va biohazard/servis SOP bo‘yicha ish tuting.`,
    chromatography: `1. Namuna, solvent/mobile phase, standart va QC materiallari metod talabiga mosligini tekshiring.\n2. Solvent, filtratsiya, degassing va chiqindi idishlarini SOP bo‘yicha tayyorlang.\n3. Kolonka/kapillyar, injektor va detektor holatini tekshiring.\n4. ${manual}.\n5. Validatsiyalangan metodni yuklang; blank va standart ketma-ketligini rejalashtiring.\n6. Tizim suitability yoki baseline tekshiruvini metod talabi bo‘yicha bajaring.\n7. Namuna ketma-ketligini ishga tushiring, oqish/bosim/alarm holatini kuzating.\n8. Chromatogramma, retention time, peak shakli va QCni tekshiring.\n9. Raw data, integratsiya va audit trailni saqlang; solvent va chiqindini xavfsiz boshqaring.`,
    optical: `1. Optik sirt, kamera/detektor, slide/gel/chip yoki flow cell zonasi holatini tekshiring.\n2. Namuna konsentratsiyasi, bo‘yash/fixatsiya yoki marker/ladder talabini metodga mos tayyorlang.\n3. Focus, light path yoki elektr maydon komponentlarini SOP bo‘yicha tayyorlang.\n4. ${manual}.\n5. Control namuna, calibration slide/bead yoki marker talab qilinsa yuklang.\n6. Tasdiqlangan acquisition/analysis methodini tanlang.\n7. Signal sifati, saturatsiya, fokus va backgroundni run davomida kuzating.\n8. Tasvir, histogramma yoki electropherogramni saqlang; QC bilan tekshirgach talqin qiling.\n9. Optik sirtlarni faqat ishlab chiqaruvchi tavsiya qilgan usul bilan tozalang.`,
    "liquid-handling": `1. Qurilma yoki pipetka diapazoni, kalibratsiya holati va mos tiplarni tekshiring.\n2. Namuna va reagentlarni identifikatsiya qiling; viskozit, temperatura va xavf sinfini hisobga oling.\n3. Plate/tube hamda tiplarni tasdiqlangan labware xaritasiga mos joylashtiring.\n4. ${manual}.\n5. Validatsiyalangan protokol yoki hajm ketma-ketligini tanlang.\n6. Aspiratsiya/dispensing paytida havo pufagi, tomchi qolishi va carryoverni kuzating.\n7. Blank, standard yoki gravimetrik/assay QC bilan hajm sifatini tekshiring.\n8. Ish tugagach, tiplar va chiqindini SOP bo‘yicha boshqaring; tashqi sirtni tozalang.`,
    "cell-culture": `1. Aseptik zona, biosafety kabinasi yoki inkubatorning statusi va xizmat jurnalini tekshiring.\n2. Tegishli PPE, dezinfeksiya vositasi va chiqindi idishlarini tayyorlang.\n3. Hujayra/medium/reagent identifikatsiyasi, loti va kontaminatsiya holatini tekshiring.\n4. ${manual}.\n5. Ish materialini faqat tasdiqlangan SOP va biosafety darajasiga mos joylashtiring.\n6. Temperatura, CO₂, namlik yoki havo oqimi kabi nazoratlarni faqat tasdiqlangan setpointda qo‘llang.\n7. Ish tugagach, sirtlar va chiqindini biologik xavfsizlik SOPsi bo‘yicha boshqaring.\n8. Namuna holati, inkubatsiya sharoiti va kuzatuvlarni jurnalga yozing.`,
    bioreactor: `1. Vessel, probalar, tubing, filtrlar va sensorlar toza, butun va sozligini tekshiring.\n2. Medium, inokulum, antifoam yoki qo‘shimchalarni tasdiqlangan batch/SOP bo‘yicha tayyorlang.\n3. Sterilizatsiya, montaj va leak-check jarayonini zavod hamda laboratoriya yo‘riqnomasiga muvofiq bajaring.\n4. ${manual}.\n5. pH, DO, temperatura, aralashtirish va gaz oqimini faqat validatsiyalangan setpointlarda qo‘llang.\n6. Inokulyatsiyani aseptik tarzda bajaring va batch identifikatsiyasini qayd qiling.\n7. Trendlar, alarm, sampling va qo‘shimcha kiritishni batch record bilan boshqaring.\n8. Batch yakunida mahsulot/namunani SOP bo‘yicha oling; CIP/SIP yoki tozalash bo‘yicha rasmiy tartibni bajaring.`,
    "cold-storage": `1. Qurilma temperatura logi, alarm, eshik qistirmasi va xizmat holatini tekshiring.\n2. Namuna IDsi, konteyner materiali va ruxsat etilgan saqlash temperaturasini tasdiqlang.\n3. Freezer/cryobox xaritasini tayyorlang va eshik ochiq qolish vaqtini kamaytiring.\n4. ${manual}.\n5. Namunani tez, lekin izchil tarzda tegishli pozitsiyaga joylashtiring.\n6. Temperatura excursion yoki alarm bo‘lsa, belgilangan contingency SOPni ishga tushiring.\n7. Kirim/chiqim hamda quti/rack joylashuvini inventar tizimida qayd qiling.\n8. Muz, kondensat yoki qistirma muammosini ruxsat etilgan xizmat tartibida bartaraf eting.`,
    "optical-assay": `1. Lamp/detektor, plate yoki cuvette zonasi va blank holatini tekshiring.\n2. Reagent, standart, kontrol va namuna tayyorligini metod bo‘yicha tasdiqlang.\n3. Plate/cuvette formatini qurilma hamda assayga mos tanlang.\n4. ${manual}.\n5. Blank/standard/QCni plate layout yoki sample listga kiriting.\n6. To‘lqin uzunligi, o‘qish rejimi yoki kinetic methodni faqat tasdiqlangan assay bo‘yicha tanlang.\n7. O‘qishni boshlang; saturatsiya yoki signalning g‘ayritabiiy ko‘rsatkichlarini tekshiring.\n8. Blank-corrected signal, standard curve va QCni baholang; ma’lumotlarni saqlang.`,
    disruption: `1. Namuna konteyneri, adaptor/probe, PPE va kontaminatsiya nazoratini tekshiring.\n2. Namuna hajmi, buffer, sovitish talabi va yopiq/ochiq ishlash cheklovini SOP bo‘yicha belgilang.\n3. ${manual}.\n4. Namuna va mos aksessuarni xavfsiz mahkamlang.\n5. Faqat tasdiqlangan protokol doirasida ishlov bering; qizish, aerozol yoki to‘kilishni kuzating.\n6. Ishlov berilgach, kerakli fraksiyani protokol bo‘yicha ajrating va keyingi analiz uchun saqlang.\n7. Proba, adapter yoki kamera qismlarini ruxsat etilgan usul bilan tozalang.`,
    physicochemical: `1. Elektrod/sensor, standart eritma va namuna konteynerining mosligini tekshiring.\n2. Standartlarning yaroqlilik muddati, temperatura muvozanati va lotini qayd qiling.\n3. ${manual}.\n4. Kalibratsiyani faqat tegishli standart va laboratoriya SOPsi bo‘yicha bajaring.\n5. Namunani ehtiyotkorlik bilan o‘lchang, cross-contaminationni oldini oling.\n6. Natijani standart/blank/QC bilan tekshiring va birliklar bilan qayd qiling.\n7. Sensorni ishlab chiqaruvchi talabiga muvofiq chaying, saqlang yoki regeneratsiya qiling.`,
  };
  return workflows[familyFor(device)] || `1. Qurilmaning holati, xavfsizlik yorliqlari va xizmat jurnalini tekshiring.\n2. Ish zonasini hamda zarur sarf materiallarini mos SOP bo‘yicha tayyorlang.\n3. Namuna yoki ish materiali IDsi, konteyneri va sifatini tekshiring.\n4. ${manual}.\n5. Qurilmaga faqat modelga mos va tasdiqlangan aksessuar/sarf materialini joylashtiring.\n6. Metod parametrlarini faqat validatsiyalangan protokolga muvofiq kiriting.\n7. Tegishli blank, standart, control yoki QCni rejalashtiring.\n8. Jarayonni boshlang va alarm/statusni kuzating; xavfsizlik cheklovini chetlab o‘tmang.\n9. Natija yoki jarayon jurnalini saqlang, QC bilan tekshiring va ishchi zonani tozalang.`;
}
function mistakesFor(device) {
  const shared = "- Modelga mos bo‘lmagan aksessuar yoki sarf materialidan foydalanish.\n- Manual yoki SOP tasdiqlamagan parametrni qo‘llash.\n- Natija/jurnalni saqlamaslik.";
  const specific = {
    pcr: "- Pre-PCR/post-PCR zonalarini aralashtirish yoki controlni chetlab o‘tish.\n- Noto‘g‘ri plate layout, havo pufagi yoki yomon muhrlash.",
    autoclave: "- Mos bo‘lmagan yoki haddan tashqari zich yuklama.\n- Bosim/temperatura xavfsiz darajaga tushmasdan eshikni ochishga urinish.",
    centrifuge: "- Yuklamani muvozanatlashtirmaslik.\n- Rotor/naycha limitidan tashqarida ishlash yoki to‘liq to‘xtashdan oldin ochish.",
    chromatography: "- Solvent, blank, standart yoki system suitabilityni tekshirmaslik.\n- Oqish, bosim yoki peak anomaliyasini e’tiborsiz qoldirish.",
    optical: "- Fokus, background, marker yoki controlni tekshirmaslik.\n- Signal saturatsiyasi yoki noto‘g‘ri acquisition sozlamasini e’tiborsiz qoldirish.",
    "liquid-handling": "- Hajm diapazonidan tashqarida ishlash.\n- Noto‘g‘ri tip, havo pufagi yoki carryoverga e’tibor bermaslik.",
    "cell-culture": "- Aseptik texnikani buzish yoki kontaminatsiya belgilarini e’tiborsiz qoldirish.\n- Ish materialini biosafety darajasiga mos boshqarmaslik.",
    bioreactor: "- Sensor/proba tekshiruvini yoki batch recordni chetlab o‘tish.\n- Alarm trendlarini o‘z vaqtida ko‘rib chiqmaslik.",
    "cold-storage": "- Eshikni uzoq ochiq qoldirish yoki joylashuv jurnalini yuritmaslik.\n- Temperatura alarmiga tasdiqlangan contingency SOPsiz javob berish.",
  };
  return `${specific[familyFor(device)] || "- Namuna, reagent yoki ish materiali metodga mos emasligi.\n- Tegishli QC yoki controlni chetlab o‘tish."}\n${shared}`;
}
function safetyFor(device) {
  const risks = {
    pcr: "biologik material, reagent, kontaminatsiya va elektr",
    sequencing: "biologik material, reagent, kontaminatsiya va elektr",
    autoclave: "yuqori temperatura, bug‘, bosim va issiq yuklama",
    centrifuge: "aylanma mexanik energiya, naycha sinishi va biologik aerozol",
    chromatography: "erituvchi, bosim, gaz, issiq zona va kimyoviy chiqindi",
    optical: "lazer/UV yoki kuchli yorug‘lik, elektr va biologik/kimyoviy namuna",
    "liquid-handling": "biologik/kimyoviy suyuqlik, aerozol va sharps/sarf materiallari",
    "cell-culture": "biologik material, aerozol, dezinfektant va kontaminatsiya",
    bioreactor: "bosim, gaz, issiq sirt, biologik material va kimyoviy qo‘shimchalar",
    "cold-storage": "nihoyatda past temperatura, sovuq kuyishi va yopiq joyda gaz xavfi",
    disruption: "aerozol, shovqin/ultratovush yoki harakatlanuvchi qismlar",
    physicochemical: "standart eritmalar, shisha/elektrod va kimyoviy reagentlar",
    general: "biologik material, kimyoviy reagent, elektr va kontaminatsiya",
  };
  return `Bu qurilmada asosiy xavflar: ${risks[familyFor(device)] || risks.general}. Ishdan avval tegishli SOP, PPE, chiqindi tartibi va ishlab chiqaruvchi xavfsizlik ko‘rsatmasi bilan tanishing. Himoya interlocki, qopqoq/qulf yoki ventilyatsiya tizimini chetlab o‘tish taqiqlanadi.`;
}
function maintenanceFor(model) {
  return `Har ish kuni: ishchi yuzani kontaminatsiya yoki reagent qoldig‘idan tozalang, ko‘rinadigan shikastlanish va alarmni qayd qiling. Har bir servis intervali, almashtiriladigan qism va qabul mezoni **${model}** uchun rasmiy user manual hamda laboratoriya xizmat rejasidan olinadi. Servis, tozalash, kalibrlash va nosozlik holatlarini jurnalga yozing.`;
}
function calibrationFor(model) {
  return `Kalibratsiya/verification chastotasi, standart materiali va acceptance criteria **${model}** uchun rasmiy manual yoki validatsiyalangan laboratoriya SOPsida belgilanadi. Natija kutilganidek bo‘lmasa: (1) xato/alarm kodini yozib oling, (2) namuna, sarf materiali va metod mosligini tekshiring, (3) blank/standard/QCni qayta baholang, (4) faqat ruxsat etilgan oddiy tozalashni bajaring, (5) muammo davom etsa vakolatli servisga murojaat qiling. Qurilmani ruxsatsiz ochmang yoki fabrikaning kalibratsiya sozlamasini o‘zgartirmang.`;
}
function sourceList(manufacturer, model) {
  const portal = officialPortals[manufacturer];
  const first = portal ? { label: `${manufacturer} — rasmiy support va manuals`, url: portal, note: `${model} nomi bo‘yicha User Manual, Instructions for Use, Application Note yoki Downloads bo‘limidan qidiring.` } : { label: "Ishlab chiqaruvchi rasmiy manuali", note: `${model} bo‘yicha ishlab chiqaruvchining Support/Downloads sahifasidan yangilangan qo‘llanmani oling.` };
  return [first, { label: "Laboratoriya SOP va sifat tizimi", note: "Mahalliy SOP, xavfsizlik yo‘riqnomasi, validatsiya rejasi hamda raw-data talablarini laboratoriya rahbari bilan tekshiring." }];
}

const equipment = readEquipment();
const rawLearning = parseFiles(learningFiles, "learning");
const purchaseByNumber = parseFiles(purchaseFiles, "purchase");
const learningByNumber = Object.fromEntries(equipment.map((device) => {
  const source = rawLearning[device.number];
  const manufacturer = inferManufacturer(device.model, device.brands);
  const profile = profileFor(device);
  const practice = `**Boshlang‘ich:** ${device.name}ning vazifasi, asosiy qismlari va xavflarini ayting.\n**O‘rta:** namuna/ish materialini tayyorlashdan yakuniy qaydgacha bo‘lgan workflow’ni ketma-ket tushuntiring.\n**Yuqori:** QC yoki natija kutilganidek bo‘lmasa, ${device.model} manuali hamda laboratoriya SOPsiga tayangan holda kamida 5 ta ehtimoliy sababni ustuvorlik bilan ajrating.`;
  return [device.number, {
    number: device.number, title: device.name, originalName: source?.searchName || device.name, manufacturer, model: device.model, sourceKind: "learning",
    whatIs: device.description, whatItDoes: device.purpose,
    learningOutcomes: `Bu qurilma bilan ${device.purpose.toLowerCase()} bilan bog‘liq biologik yoki analitik savollarni o‘rganish mumkin. Natijaning aniq doirasi tanlangan metod, namuna va validatsiyalangan assayga bog‘liq.`,
    principle: profile.principle, mainParts: profile.parts, samplePreparation: profile.prep, workflow: workflowFor(device), resultInterpretation: profile.result,
    commonMistakes: mistakesFor(device),
    safety: safetyFor(device), maintenance: maintenanceFor(device.model), calibrationTroubleshooting: calibrationFor(device.model), practice, sources: sourceList(manufacturer, device.model),
  }];
}));

const output = `// AUTO-GENERATED by scripts/importLearningData.mjs from user-provided sources and canonical equipment records.\n// Data policy: model-specific controls, limits and parameters are not invented.\n\nexport type OfficialSource = { label: string; url?: string; note: string };\n\nexport type LearningContent = {\n  number: number; title: string; originalName: string; manufacturer: string; model: string; sourceKind: "learning";\n  whatIs: string; whatItDoes: string; learningOutcomes: string; principle: string; mainParts: string; samplePreparation: string; workflow: string;\n  resultInterpretation: string; commonMistakes: string; safety: string; maintenance: string; calibrationTroubleshooting: string; practice: string; sources: OfficialSource[];\n};\n\nexport type PurchaseContent = {\n  number: number; title: string; searchName: string; model: string; sourceKind: "purchase";\n  price: string; priceEvidence: string; source: string; priceStatus: string; whereToBuy: string; purchaseRule: string;\n  availabilityUz: string; importInfo: string; delivery: string; service: string; spares: string; tco: string; redFlags: string; finalStatus: string;\n};\n\nexport const learningByNumber: Record<number, LearningContent> = ${JSON.stringify(learningByNumber, null, 2)};\n\nexport const purchaseByNumber: Record<number, PurchaseContent> = ${JSON.stringify(purchaseByNumber, null, 2)};\n`;
fs.writeFileSync(path.join(projectRoot, "client/src/lib/learningData.ts"), output, "utf8");
console.log(`Validated and imported ${Object.keys(learningByNumber).length} 16-section learning records and ${Object.keys(purchaseByNumber).length} purchase records.`);
