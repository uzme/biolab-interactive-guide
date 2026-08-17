import fs from "node:fs";

const inputPath = process.argv[2] ?? "/tmp/biolab-pnpm-audit.json";
const report = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const advisories = Object.values(report.advisories ?? {});
const counts = {};
const modules = {};
for (const advisory of advisories) {
  const severity = advisory.severity ?? "unknown";
  counts[severity] = (counts[severity] ?? 0) + 1;
  const modulesForAdvisory = new Set((advisory.findings ?? []).map((finding) => finding.paths ?? []).flat().map((path) => path.split(" > ").at(-1)?.split("@")[0]).filter(Boolean));
  for (const module of modulesForAdvisory) modules[module] = (modules[module] ?? 0) + 1;
}
console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  auditVersion: report.auditReportVersion,
  metadata: report.metadata,
  severityCounts: counts,
  advisoryCount: advisories.length,
  affectedModules: Object.entries(modules).sort((a, b) => b[1] - a[1]).map(([module, count]) => ({ module, advisoryCount: count })),
  advisories: advisories.map((advisory) => ({
    id: advisory.id,
    severity: advisory.severity,
    module: advisory.module_name,
    title: advisory.title,
    vulnerableVersions: advisory.vulnerable_versions,
    patchedVersions: advisory.patched_versions,
    recommendation: advisory.recommendation,
  })).sort((a, b) => (a.severity ?? "").localeCompare(b.severity ?? "") || String(a.module).localeCompare(String(b.module))),
}, null, 2));
