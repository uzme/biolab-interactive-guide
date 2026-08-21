import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const legacyAuditPath = "/home/ubuntu/biolab-guide/docs/reports/hero-drive-asset-audit.json";
const finalManifestPath = "/home/ubuntu/biolab-guide/docs/reports/hero-asset-recovery-manifest.json";
const outputPath = "/home/ubuntu/biolab-guide/docs/reports/hero-legacy-batch-comparison.json";

const legacyAudit = JSON.parse(readFileSync(legacyAuditPath, "utf8"));
const finalManifest = JSON.parse(readFileSync(finalManifestPath, "utf8"));
const finalById = new Map(finalManifest.assets.map((asset) => [asset.id, asset]));

const entries = legacyAudit.batches.flatMap((batch) =>
  batch.assets
    .filter((asset) => asset.validName)
    .map((asset) => {
      const id = asset.member.replace(/\.webp$/i, "");
      const finalAsset = finalById.get(id);
      return {
        id,
        batch: batch.batch,
        zipName: batch.name,
        legacySha256: asset.sha256,
        finalSha256: finalAsset?.sha256 ?? null,
        matchesFinal: Boolean(finalAsset && asset.sha256 === finalAsset.sha256),
      };
    }),
);

const groupedById = Object.groupBy(entries, (entry) => entry.id);
const idComparison = Object.fromEntries(
  [...finalById.keys()].sort().map((id) => {
    const variants = groupedById[id] ?? [];
    const matchingBatches = variants.filter((entry) => entry.matchesFinal).map((entry) => entry.batch);
    const supersededBatches = variants.filter((entry) => !entry.matchesFinal).map((entry) => entry.batch);
    return [id, {
      finalSha256: finalById.get(id).sha256,
      matchingBatches,
      supersededBatches,
      absentFromLegacyZips: variants.length === 0,
    }];
  }),
);

const zipSummary = legacyAudit.batches.map((batch) => {
  const assets = entries.filter((entry) => entry.batch === batch.batch);
  const matchingCount = assets.filter((entry) => entry.matchesFinal).length;
  const supersededCount = assets.length - matchingCount;
  return {
    batch: batch.batch,
    zipName: batch.name,
    assetCount: assets.length,
    matchingCount,
    supersededCount,
    status: supersededCount === 0
      ? "all-final"
      : matchingCount === 0
        ? "superseded-only"
        : "mixed",
    assetIds: assets.map((asset) => asset.id),
  };
});

const summary = {
  legacyZipCount: legacyAudit.batchCount,
  legacyAssetOccurrences: entries.length,
  finalAssetCount: finalManifest.acceptedHeroAssetCount,
  occurrencesMatchingFinal: entries.filter((entry) => entry.matchesFinal).length,
  occurrencesSuperseded: entries.filter((entry) => !entry.matchesFinal).length,
  finalIdsAbsentFromLegacyZips: Object.entries(idComparison)
    .filter(([, item]) => item.absentFromLegacyZips)
    .map(([id]) => id),
  finalIdsWithSupersededVariant: Object.entries(idComparison)
    .filter(([, item]) => item.supersededBatches.length > 0)
    .map(([id]) => id),
  allLegacyZipsContainOnlyFinal: zipSummary.every((zip) => zip.status === "all-final"),
};

const report = {
  generatedAt: new Date().toISOString(),
  purpose: "Eski source ZIP batchlarining yakuniy 100 hero mirror bilan SHA-256 moslik auditi.",
  summary,
  zipSummary,
  idComparison,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ summary, outputPath }, null, 2));
