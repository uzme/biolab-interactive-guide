import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { access, mkdtemp, readFile, rm, stat } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const archivePath = path.resolve(process.argv[2] ?? "/tmp/BioLab_Hero_Assets_Recovery.tar.gz");
const tempRoot = await mkdtemp(path.join(os.tmpdir(), "biolab-ordered-recovery-verify-"));

try {
  const archiveInfo = await stat(archivePath);
  const archiveBytes = await readFile(archivePath);
  const archiveSha256 = createHash("sha256").update(archiveBytes).digest("hex");
  const { stdout: listingText } = await execFileAsync("tar", ["-tzf", archivePath]);
  const archiveEntries = listingText.trim().split("\n").filter(Boolean);
  const imageEntries = archiveEntries.filter((entry) => /^BATCHES\/Batch-\d{3}__BIO-\d{3}__[^/]+\/BIO-\d{3}\.webp$/.test(entry));
  const batchNumbers = imageEntries.map((entry) => Number(entry.match(/^BATCHES\/Batch-(\d{3})__/)[1]));

  if (imageEntries.length !== 100) {
    throw new Error(`100 ta batch WebP kutilgan, ammo ${imageEntries.length} ta topildi.`);
  }
  if (new Set(batchNumbers).size !== 100 || batchNumbers.some((value, index) => value !== index + 1)) {
    throw new Error("Batch raqamlari 001–100 uzluksiz emas.");
  }
  if (!archiveEntries.includes("BATCH_INDEX.md") || !archiveEntries.includes("hero-asset-recovery-manifest.json")) {
    throw new Error("BATCH_INDEX.md yoki checksum manifest topilmadi.");
  }

  await execFileAsync("tar", ["-xzf", archivePath, "-C", tempRoot]);
  const manifest = JSON.parse(await readFile(path.join(tempRoot, "hero-asset-recovery-manifest.json"), "utf8"));
  if (manifest.schemaVersion !== 2 || manifest.acceptedHeroAssetCount !== 100 || manifest.assets.length !== 100) {
    throw new Error("Manifest schema yoki 100 asset soni noto‘g‘ri.");
  }

  for (const asset of manifest.assets) {
    const assetPath = path.join(tempRoot, asset.recoveryPath);
    await access(assetPath);
    const bytes = await readFile(assetPath);
    const checksum = createHash("sha256").update(bytes).digest("hex");
    if (checksum !== asset.sha256) {
      throw new Error(`${asset.id} checksum mos emas.`);
    }
  }

  console.log(
    JSON.stringify(
      {
        verification: "PASS",
        archivePath,
        archiveBytes: archiveInfo.size,
        archiveSha256,
        batchCount: batchNumbers.length,
        assetCount: manifest.assets.length,
        firstBatch: imageEntries[0],
        lastBatch: imageEntries.at(-1),
      },
      null,
      2,
    ),
  );
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
