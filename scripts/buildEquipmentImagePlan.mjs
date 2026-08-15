import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "client/src/lib/equipmentData.ts");
const outputPath = path.join(root, "docs/equipment-image-plan.md");
const source = fs.readFileSync(sourcePath, "utf8");

const equipment = [...source.matchAll(
  /"id": "(?<id>[^"]+)",\s*"number": (?<number>\d+),\s*"name": "(?<name>[^"]+)",\s*"category": "(?<category>[^"]+)",\s*"model": "(?<model>[^"]+)"/g,
)].map(({ groups }) => groups);

if (equipment.length !== 100) {
  throw new Error(`100 ta qurilma kutilgan edi, topildi: ${equipment.length}`);
}

const instruction = [
  "# BioLab — 100 ta qurilma rasmi rejasi",
  "",
  "Har rasm alohida 4:3 gorizontal, fotorealistik ilmiy katalog uslubida tayyorlanadi. Rasmda odam, matn, watermark yoki uydirma logo bo‘lmaydi. Har rasm avval qurilma turi va ko‘rsatilgan namuna model bilan tekshiriladi; modelga xos detal tasdiqlanmagan bo‘lsa, faqat qurilma turining ishonchli umumiy ko‘rinishi ishlatiladi.",
  "",
  "| # | ID | Qurilma | Kategoriya | Namuna model | Rasm manbasi |",
  "|---:|---|---|---|---|---|",
  ...equipment.map((item) => `| ${item.number} | ${item.id} | ${item.name} | ${item.category} | ${item.model} | Kutilmoqda |`),
  "",
  "## Rasm siyosati",
  "Rasmiy manufacturer yoki distributor fotosurati model hamda rasm litsenziyasi aniq bo‘lsa qo‘llanadi. Bunday rasm topilmasa, BioLab uchun laboratoriya-realistik AI tasvir yaratiladi va u ishlab chiqaruvchi fotosurati emasligi sifatida ichki reyestrda belgilanadi.",
].join("\n");

fs.writeFileSync(outputPath, instruction);
console.log(`Rasm reja yaratildi: ${equipment.length} ta qurilma → ${outputPath}`);
