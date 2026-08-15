import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "client/src/lib/equipmentData.ts");
const outputPath = path.join(root, "docs/equipment-image-generation-manifest.json");
const source = fs.readFileSync(sourcePath, "utf8");

const equipment = [...source.matchAll(
  /"id": "(?<id>[^"]+)",\s*"number": (?<number>\d+),\s*"name": "(?<name>[^"]+)",\s*"category": "(?<category>[^"]+)",\s*"model": "(?<model>[^"]+)",\s*"description": "(?<description>[^"]+)"/g,
)].map(({ groups }) => groups);

if (equipment.length !== 100) {
  throw new Error(`100 ta qurilma kutilgan edi, topildi: ${equipment.length}`);
}

const categoryContext = {
  "Molekulyar biologiya": "molecular biology laboratory",
  "Mikroskopiya": "advanced microscopy laboratory",
  "Hujayra kulturalari": "cell culture laboratory",
  "Mikrobiologiya": "microbiology laboratory",
  "Analitika": "analytical chemistry laboratory",
  "Sentrifugatsiya": "sample preparation laboratory",
  "Bioreaktorlar": "bioprocess laboratory",
  "Sovutish va saqlash": "biological sample storage laboratory",
  "Namuna tayyorlash": "sample preparation laboratory",
  "Avtomatlashtirish": "automated laboratory workflow",
};

const manifest = equipment.map((item) => {
  const fileStem = `biolab-equipment-${String(item.number).padStart(3, "0")}`;
  return {
    id: item.id,
    number: Number(item.number),
    name: item.name,
    category: item.category,
    model: item.model,
    outputPath: `/home/ubuntu/webdev-static-assets/${fileStem}.jpg`,
    assetKey: fileStem,
    sourceType: "ai-representative",
    prompt: `Create a photorealistic laboratory equipment product image for a professional biotech learning platform. Subject: ${item.name}, accurately represented as the physical class of “${item.model}”. Context: ${categoryContext[item.category] ?? "professional life-science laboratory"}. Depict a scientifically credible standalone instrument with the appropriate scale, ports, doors, optics, vessels, or controls for this equipment type. Composition: three-quarter front product view, centered on a pristine cool-slate laboratory bench, 4:3 horizontal frame, generous clean margin, no people. Style: premium scientific catalogue photography, neutral 5600K laboratory lighting, crisp engineering detail, soft realistic shadow and restrained deep teal BioLab accent. Text/content to render: no text. Constraints: no brand marks, no readable controls, no logos, no watermark, no impossible components, no science-fiction styling.`
  };
});

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
console.log(`Prompt manifest yaratildi: ${manifest.length} ta qurilma → ${outputPath}`);
