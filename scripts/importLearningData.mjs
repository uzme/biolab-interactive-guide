/**
 * BioLab content importer
 * Purpose: import the user-provided 1–100 educational and purchasing Markdown records
 * into a typed frontend data layer without changing source wording or inventing values.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "..");
const uploadRoot = "/home/ubuntu/upload";

const learningFiles = [
  "BIOTECH_100_OQUV_BAZA_1_25.md",
  "BIOTECH_100_OQUV_BAZA_26_50.md",
  "BIOTECH_100_OQUV_BAZA_51_75.md",
  "BIOTECH_100_OQUV_BAZA_76_100.md",
];

const purchaseFiles = [
  "BIOTECH_100_XARID_BAZASI_1_25.md",
  "BIOTECH_100_XARID_BAZASI_26_50.md",
  "BIOTECH_100_XARID_BAZASI_51_75.md",
  "BIOTECH_100_XARID_BAZASI_76_100.md",
];

function clean(value = "") {
  return value
    .replace(/cite[^]+/g, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function removeMarkdown(value = "") {
  return clean(value)
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .trim();
}

function normalizeHeading(value = "") {
  return removeMarkdown(value)
    .replace(/[🔬⭐⭐⚙️📊⚠️🛡️🧠💰🏪🇺🇿📦🚚🛠️🔧🎯📌]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function findSection(sections, query) {
  const normalizedQuery = query.toLowerCase();
  const entry = Object.entries(sections).find(([heading]) => heading.includes(normalizedQuery));
  return entry ? entry[1] : "";
}

function parseRecords(source, kind) {
  const recordHeaders = [...source.matchAll(/^##\s+(\d{1,3})\.\s*(.+?)\s*$/gm)];
  const records = [];

  recordHeaders.forEach((match, index) => {
    const number = Number(match[1]);
    if (number < 1 || number > 100) return;

    const start = match.index + match[0].length;
    const end = index + 1 < recordHeaders.length ? recordHeaders[index + 1].index : source.length;
    const block = source.slice(start, end).trim();
    const sectionHeaders = [...block.matchAll(/^###\s+(.+?)\s*$/gm)];
    const preambleEnd = sectionHeaders.length ? sectionHeaders[0].index : block.length;
    const preamble = block.slice(0, preambleEnd);
    const sections = {};

    sectionHeaders.forEach((section, sectionIndex) => {
      const sectionStart = section.index + section[0].length;
      const sectionEnd = sectionIndex + 1 < sectionHeaders.length ? sectionHeaders[sectionIndex + 1].index : block.length;
      sections[normalizeHeading(section[1])] = clean(block.slice(sectionStart, sectionEnd));
    });

    const originalMatch = preamble.match(/\*\*(?:Original nomi\s*\/\s*qidiruv nomi|Original\/qidiruv nomi):\*\*\s*(.+)/i);
    const modelMatch = preamble.match(/\*\*Model:\*\*\s*(.+)/i);
    const rawTitle = clean(match[2]);
    const base = {
      number,
      title: removeMarkdown(rawTitle),
      searchName: originalMatch ? removeMarkdown(originalMatch[1]) : removeMarkdown(rawTitle),
      model: modelMatch ? removeMarkdown(modelMatch[1]) : "",
      sourceKind: kind,
    };

    if (kind === "learning") {
      records.push({
        ...base,
        whatIs: findSection(sections, "qurilma nima"),
        whatItDoes: findSection(sections, "nima qiladi"),
        learningOutcomes: findSection(sections, "nimalarni o‘rganish") || findSection(sections, "nimalarni o'rganish"),
        principle: findSection(sections, "ishlash prinsipi"),
        workflow: findSection(sections, "qanday ishlatiladi"),
        resultInterpretation: findSection(sections, "natijani qanday tushunish"),
        commonMistakes: findSection(sections, "eng muhim xatolar"),
        safety: findSection(sections, "xavfsizlik"),
        maintenance: findSection(sections, "tozalash va texnik xizmat"),
        practice: findSection(sections, "o‘rganish uchun amaliy mashq") || findSection(sections, "o'rganish uchun amaliy mashq"),
      });
    } else {
      const priceHeading = Object.keys(sections).find((heading) => heading.includes("narxi")) || "";
      records.push({
        ...base,
        price: priceHeading.replace(/^.*narxi\s*:\s*/i, "").trim(),
        priceEvidence: findSection(sections, "narx dalili"),
        source: findSection(sections, "manba"),
        priceStatus: findSection(sections, "holat"),
        whereToBuy: findSection(sections, "qayerdan olish"),
        purchaseRule: findSection(sections, "xarid qoidasi"),
        availabilityUz: findSection(sections, "o‘zbekistonda topilishi") || findSection(sections, "o'zbekistonda topilishi"),
        importInfo: findSection(sections, "import"),
        delivery: findSection(sections, "yetkazib berish"),
        service: findSection(sections, "servis"),
        spares: findSection(sections, "ehtiyot qismlar"),
        tco: findSection(sections, "umumiy egalik xarajati"),
        redFlags: findSection(sections, "qizil bayroq"),
        finalStatus: findSection(sections, "yakuniy status"),
      });
    }
  });

  return records;
}

function parseFiles(files, kind) {
  const all = files.flatMap((fileName) => {
    const source = fs.readFileSync(path.join(uploadRoot, fileName), "utf8");
    return parseRecords(source, kind);
  });
  const byNumber = new Map();
  for (const record of all) {
    if (byNumber.has(record.number)) throw new Error(`${kind}: ${record.number}-qurilma takrorlangan`);
    byNumber.set(record.number, record);
  }
  const expected = Array.from({ length: 100 }, (_, index) => index + 1);
  const missing = expected.filter((number) => !byNumber.has(number));
  if (missing.length) throw new Error(`${kind}: qamrovda yetishmayotgan raqamlar: ${missing.join(", ")}`);
  return Object.fromEntries(expected.map((number) => [number, byNumber.get(number)]));
}

const learningByNumber = parseFiles(learningFiles, "learning");
const purchaseByNumber = parseFiles(purchaseFiles, "purchase");

const output = `// AUTO-GENERATED by scripts/importLearningData.mjs from user-provided Markdown sources.\n// Data policy: source wording is preserved; no technical or price data has been invented.\n\nexport type LearningContent = {\n  number: number; title: string; searchName: string; model: string; sourceKind: \"learning\";\n  whatIs: string; whatItDoes: string; learningOutcomes: string; principle: string; workflow: string;\n  resultInterpretation: string; commonMistakes: string; safety: string; maintenance: string; practice: string;\n};\n\nexport type PurchaseContent = {\n  number: number; title: string; searchName: string; model: string; sourceKind: \"purchase\";\n  price: string; priceEvidence: string; source: string; priceStatus: string; whereToBuy: string; purchaseRule: string;\n  availabilityUz: string; importInfo: string; delivery: string; service: string; spares: string; tco: string; redFlags: string; finalStatus: string;\n};\n\nexport const learningByNumber: Record<number, LearningContent> = ${JSON.stringify(learningByNumber, null, 2)};\n\nexport const purchaseByNumber: Record<number, PurchaseContent> = ${JSON.stringify(purchaseByNumber, null, 2)};\n`;

const target = path.join(projectRoot, "client/src/lib/learningData.ts");
fs.writeFileSync(target, output, "utf8");
console.log(`Imported ${Object.keys(learningByNumber).length} educational and ${Object.keys(purchaseByNumber).length} purchase records.`);
