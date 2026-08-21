import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const args = process.argv.slice(2);
const directoryIndex = args.indexOf("--directory");
const directory = directoryIndex >= 0 ? args[directoryIndex + 1] : undefined;
if (!directory) throw new Error("Usage: node verify_final_hero_history_zips.mjs --directory <history-zips-directory>");

const sha256 = value => createHash("sha256").update(value).digest("hex");
const manifest = JSON.parse(readFileSync(join(directory, "history-zip-batch-manifest.json"), "utf8"));
if (manifest.batchCount !== 100 || manifest.records.length !== 100) throw new Error("History manifest 100 batchni qayd etishi kerak.");

const work = mkdtempSync(join(tmpdir(), "biolab-history-zips-verify-"));
try {
  const archiveNames = readdirSync(directory).filter(name => /^Batch-\d{3}__BIO-\d{3}__.+\.zip$/.test(name)).sort();
  if (archiveNames.length !== 100) throw new Error(`100 ZIP kutilgan edi, amalda ${archiveNames.length} topildi.`);
  for (const record of manifest.records) {
    const zipPath = join(directory, record.zipName);
    execFileSync("zip", ["-T", zipPath], { stdio: "inherit" });
    const extractPath = join(work, record.id);
    execFileSync("unzip", ["-qq", zipPath, "-d", extractPath], { stdio: "inherit" });
    const imagePath = join(extractPath, record.imageFile);
    const actualImageSha = sha256(readFileSync(imagePath));
    const actualZipSha = sha256(readFileSync(zipPath));
    if (actualImageSha !== record.imageSha256) throw new Error(`${record.id} rasm checksum xatosi.`);
    if (actualZipSha !== record.zipSha256) throw new Error(`${record.id} ZIP checksum xatosi.`);
  }
  console.log(JSON.stringify({ status: "PASS", batchCount: 100, directory }, null, 2));
} finally {
  rmSync(work, { recursive: true, force: true });
}
