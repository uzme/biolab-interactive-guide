import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, copyFileSync } from "node:fs";
import { join, basename } from "node:path";
import { tmpdir } from "node:os";

const args = process.argv.slice(2);
const getArg = name => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
};

const input = getArg("--input");
const output = getArg("--output");

if (!input || !output) {
  throw new Error("Usage: node build_final_hero_history_zips.mjs --input <recovery.tar.gz> --output <directory>");
}

const sha256 = value => createHash("sha256").update(value).digest("hex");
const staging = mkdtempSync(join(tmpdir(), "biolab-history-zips-"));

try {
  execFileSync("tar", ["-xzf", input, "-C", staging], { stdio: "inherit" });
  const batchesPath = join(staging, "BATCHES");
  const manifestPath = join(staging, "hero-asset-recovery-manifest.json");
  const sourceManifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const manifestAssets = new Map(sourceManifest.assets.map(asset => [asset.id, asset]));
  const batchDirectories = readdirSync(batchesPath, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b, "en"));

  if (batchDirectories.length !== 100) {
    throw new Error(`100 batch kutilgan edi, amalda ${batchDirectories.length} topildi.`);
  }

  rmSync(output, { recursive: true, force: true });
  mkdirSync(output, { recursive: true });
  const records = [];

  for (let order = 1; order <= 100; order += 1) {
    const expectedPrefix = `Batch-${String(order).padStart(3, "0")}__BIO-${String(order).padStart(3, "0")}__`;
    const batchDirectory = batchDirectories.find(name => name.startsWith(expectedPrefix));
    if (!batchDirectory) throw new Error(`${expectedPrefix} bilan boshlanuvchi batch topilmadi.`);

    const batchPath = join(batchesPath, batchDirectory);
    const imageFiles = readdirSync(batchPath).filter(name => /^BIO-\d{3}\.webp$/i.test(name));
    if (imageFiles.length !== 1) throw new Error(`${batchDirectory} ichida yagona BIO WebP bo‘lishi kerak.`);

    const imageFile = imageFiles[0];
    const id = basename(imageFile, ".webp");
    const imagePath = join(batchPath, imageFile);
    const imageBytes = readFileSync(imagePath);
    const imageSha256 = sha256(imageBytes);
    const manifestAsset = manifestAssets.get(id);
    if (!manifestAsset || manifestAsset.sha256 !== imageSha256) {
      throw new Error(`${id} checksum manifest bilan mos emas.`);
    }

    const zipName = `${batchDirectory}.zip`;
    const zipPath = join(output, zipName);
    const infoPath = join(staging, `${id}-BATCH_INFO.md`);
    const info = [
      "# BioLab Final Hero Batch",
      "",
      `- Batch: ${String(order).padStart(3, "0")}`,
      `- Qurilma ID: ${id}`,
      `- Qurilma katalogi: ${batchDirectory}`,
      `- Fayl: ${imageFile}`,
      `- SHA-256: ${imageSha256}`,
      "- Holat: Yakuniy authoritative hero visual",
      "",
      "Bu ZIP faqat BioLab platformasida ishlatilayotgan yakuniy rasmni saqlaydi.",
      "",
    ].join("\n");
    writeFileSync(infoPath, info);
    execFileSync("zip", ["-q", "-j", zipPath, imagePath, infoPath], { stdio: "inherit" });
    execFileSync("zip", ["-T", zipPath], { stdio: "inherit" });

    records.push({
      batch: order,
      id,
      directory: batchDirectory,
      zipName,
      imageFile,
      imageSha256,
      zipSha256: sha256(readFileSync(zipPath)),
    });
  }

  const indexLines = [
    "# BioLab — Yakuniy Hero ZIP Tarixi",
    "",
    "Bu katalogda BioLab platformasida ishlatilayotgan 100 ta yakuniy hero rasm bor. Har ZIP faqat bitta qurilmaga tegishli bo‘lib, recovery manifest checksumlari bilan tekshirilgan.",
    "",
    "| Batch | BIO ID | ZIP fayli | Rasm SHA-256 |",
    "|---:|---|---|---|",
    ...records.map(record => `| ${String(record.batch).padStart(3, "0")} | ${record.id} | ${record.zipName} | \`${record.imageSha256}\` |`),
    "",
    "> Eski xom ZIP batchlari tarixiy yoki takroriy variantlarni o‘z ichiga olishi mumkin. Bu katalog faqat yakuniy authoritative rasm versiyalarini saqlaydi.",
    "",
  ];
  writeFileSync(join(output, "HISTORY_INDEX.md"), indexLines.join("\n"));
  copyFileSync(manifestPath, join(output, "hero-asset-recovery-manifest.json"));
  const historyManifest = {
    schema: "biolab-final-hero-history-zips/v1",
    generatedAt: new Date().toISOString(),
    sourceRecoveryArchive: basename(input),
    sourceRecoveryArchiveSha256: sha256(readFileSync(input)),
    batchCount: records.length,
    records,
  };
  writeFileSync(join(output, "history-zip-batch-manifest.json"), `${JSON.stringify(historyManifest, null, 2)}\n`);
  console.log(JSON.stringify({ output, batchCount: records.length, sourceRecoveryArchiveSha256: historyManifest.sourceRecoveryArchiveSha256 }, null, 2));
} finally {
  rmSync(staging, { recursive: true, force: true });
}
