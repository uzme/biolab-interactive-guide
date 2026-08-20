import { createHash } from "node:crypto";
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "../..");
const staticAssetRoot = "/home/ubuntu/webdev-static-assets";
const registryPath = path.join(projectRoot, "client/src/lib/equipmentImages.ts");
const outputPath = path.join(projectRoot, "docs/reports/hero-asset-recovery-manifest.json");

const registryText = await readFile(registryPath, "utf8");
const registry = new Map();
const entryPattern = /"(BIO-\d{3})":\s*\{\s*url:\s*"([^"]+)"[\s\S]*?alt:\s*"([^"]+)"/g;

for (const match of registryText.matchAll(entryPattern)) {
  registry.set(match[1], { url: match[2], alt: match[3] });
}

const filenames = (await readdir(staticAssetRoot))
  .filter((filename) => /^biolab-equipment-\d{3}-hero\.webp$/.test(filename))
  .sort();

const assets = await Promise.all(
  filenames.map(async (filename) => {
    const idMatch = filename.match(/biolab-equipment-(\d{3})-hero\.webp/);
    const id = `BIO-${idMatch[1]}`;
    const absolutePath = path.join(staticAssetRoot, filename);
    const [data, metadata] = await Promise.all([readFile(absolutePath), stat(absolutePath)]);
    const entry = registry.get(id);

    if (!entry?.url) {
      throw new Error(`${id} registry URL topilmadi; recovery manifest yaratish to‘xtatildi.`);
    }

    return {
      id,
      assetFilename: filename,
      assetUrl: entry.url,
      alt: entry.alt,
      bytes: metadata.size,
      sha256: createHash("sha256").update(data).digest("hex"),
      contentType: "image/webp",
    };
  }),
);

const manifest = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  purpose:
    "BioLab qabul qilingan hero-vizuallarini recovery uchun aniqlash; barcha fayl baytlari canonical Drive arxivida, runtime nusxalari project asset storage’da saqlanadi.",
  canonicalDriveRoot: {
    name: "Biotexnologiya yangi",
    id: "19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV",
  },
  recoveryArchive: {
    name: "BioLab_Hero_Assets_Recovery.tar.gz",
    contents: ["assets/*.webp", "hero-asset-recovery-manifest.json"],
    updatePolicy: "Mavjud Drive fayli o‘rnida yangilanadi; duplicate arxiv yaratilmaydi.",
  },
  acceptedHeroAssetCount: assets.length,
  assets,
};

await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Recovery manifest yaratildi: ${outputPath}`);
console.log(`Qabul qilingan hero assetlar: ${assets.length}`);
