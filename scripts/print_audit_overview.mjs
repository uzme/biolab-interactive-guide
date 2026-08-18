import fs from "node:fs";

const report = JSON.parse(fs.readFileSync("/tmp/biolab-pnpm-audit-summary.json", "utf8"));
console.log(JSON.stringify({
  severityCounts: report.severityCounts,
  advisoryCount: report.advisoryCount,
  affectedModules: report.affectedModules,
}, null, 2));
