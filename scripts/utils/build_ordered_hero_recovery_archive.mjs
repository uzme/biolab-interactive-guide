import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { copyFile, cp, mkdir, mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const projectRoot = path.resolve(import.meta.dirname, "../..");
const staticAssetRoot = "/home/ubuntu/webdev-static-assets";
const manifestPath = path.join(projectRoot, "docs/reports/hero-asset-recovery-manifest.json");
const equipmentPath = path.join(projectRoot, "client/src/lib/equipmentData.ts");
const outputPath = path.resolve(process.argv[2] ?? "/tmp/BioLab_Hero_Assets_Recovery.tar.gz");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const equipmentText = await readFile(equipmentPath, "utf8");
const equipmentById = new Map();
const equipmentPattern = /"id":\s*"(BIO-\d{3})",[\s\S]*?"number":\s*(\d+),[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?"model":\s*"([^"]+)",[\s\S]*?"slug":\s*"([^"]+)"/g;

for (const match of equipmentText.matchAll(equipmentPattern)) {
  equipmentById.set(match[1], {
    number: Number(match[2]),
    name: match[3],
    model: match[4],
    slug: match[5],
  });
}

if (manifest.acceptedHeroAssetCount !== 100 || manifest.assets.length !== 100) {
  throw new Error(`100 ta hero asset kutilgan, ammo manifestda ${manifest.assets.length} ta topildi.`);
}

const orderedAssets = [...manifest.assets].sort((left, right) => left.id.localeCompare(right.id));
for (const asset of orderedAssets) {
  if (!equipmentById.has(asset.id)) {
    throw new Error(`${asset.id} uchun qurilma nomi/slug topilmadi.`);
  }
}

const stageRoot = await mkdtemp(path.join(os.tmpdir(), "biolab-ordered-hero-recovery-"));
const batchesRoot = path.join(stageRoot, "BATCHES");
await mkdir(batchesRoot, { recursive: true });

try {
  const batchIndex = [
    "# BioLab Hero Assets — tartibli batch indeksi",
    "",
    "Har bir batch bitta qurilmaga tegishli. Papka nomi tartibi: `Batch-NNN__BIO-NNN__qurilma-nomi`.",
    "Rasm fayli ichkarida har doim `BIO-NNN.webp` deb nomlanadi. Har bir fayl SHA-256 checksum bilan recovery manifestda qayd etilgan.",
    "",
    "| Batch | BIO ID | Qurilma | Model | Fayl | SHA-256 |",
    "|---:|---|---|---|---|---|",
  ];

  const recoveryAssets = [];
  for (const asset of orderedAssets) {
    const equipment = equipmentById.get(asset.id);
    const batchName = `Batch-${String(equipment.number).padStart(3, "0")}__${asset.id}__${equipment.slug}`;
    const batchPath = path.join(batchesRoot, batchName);
    const archiveFilename = `${asset.id}.webp`;
    const recoveryPath = path.posix.join("BATCHES", batchName, archiveFilename);
    const sourcePath = path.join(staticAssetRoot, asset.assetFilename);
    const destinationPath = path.join(batchPath, archiveFilename);

    await mkdir(batchPath, { recursive: true });
    await copyFile(sourcePath, destinationPath);
    const bytes = await readFile(destinationPath);
    const checksum = createHash("sha256").update(bytes).digest("hex");
    if (checksum !== asset.sha256) {
      throw new Error(`${asset.id} checksum mos emas; archive yaratish to‘xtatildi.`);
    }

    batchIndex.push(
      `| ${String(equipment.number).padStart(3, "0")} | ${asset.id} | ${equipment.name.replaceAll("|", "\\|")} | ${equipment.model.replaceAll("|", "\\|")} | \`${recoveryPath}\` | \`${asset.sha256}\` |`,
    );
    recoveryAssets.push({ ...asset, recoveryPath, batch: equipment.number, batchName, archiveFilename });
  }

  const orderedManifest = {
    ...manifest,
    schemaVersion: 2,
    generatedAt: new Date().toISOString(),
    purpose:
      "BioLab 100 ta qabul qilingan hero-vizualini qurilma raqami va nomiga ko‘ra batchlab tiklash; runtime nusxalari project asset storage’da saqlanadi.",
    recoveryArchive: {
      ...manifest.recoveryArchive,
      contents: ["BATCHES/Batch-NNN__BIO-NNN__qurilma-nomi/BIO-NNN.webp", "BATCH_INDEX.md", "hero-asset-recovery-manifest.json"],
      organization: "Bitta batch = bitta qurilma; Batch 001 dan Batch 100 gacha uzluksiz tartib.",
      updatePolicy: "Mavjud Drive fayli o‘rnida yangilanadi; duplicate arxiv yoki papka yaratilmaydi.",
    },
    acceptedHeroAssetCount: recoveryAssets.length,
    assets: recoveryAssets,
  };

  await Promise.all([
    writeFile(path.join(stageRoot, "BATCH_INDEX.md"), `${batchIndex.join("\n")}\n`),
    writeFile(path.join(stageRoot, "hero-asset-recovery-manifest.json"), `${JSON.stringify(orderedManifest, null, 2)}\n`),
  ]);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await rm(outputPath, { force: true });
  await execFileAsync("tar", ["-czf", outputPath, "-C", stageRoot, "BATCHES", "BATCH_INDEX.md", "hero-asset-recovery-manifest.json"]);

  const archiveInfo = await stat(outputPath);
  console.log(
    JSON.stringify(
      {
        outputPath,
        bytes: archiveInfo.size,
        assetCount: recoveryAssets.length,
        firstBatch: recoveryAssets[0].batchName,
        lastBatch: recoveryAssets.at(-1).batchName,
      },
      null,
      2,
    ),
  );
} finally {
  await rm(stageRoot, { recursive: true, force: true });
}
