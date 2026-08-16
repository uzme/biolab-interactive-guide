import { execSync } from "child_process";
import fs from "fs";

console.log("=== BioLab Release & Sync Automation ===");

try {
  console.log("1. Running TypeScript check and production build...");
  execSync("pnpm run check && pnpm run build", { stdio: "inherit" });

  console.log("2. Running catalog controls test...");
  execSync("node scripts/test_catalog_controls.mjs", { stdio: "inherit" });

  console.log("3. Creating sanitized source archive for Google Drive...");
  execSync("git archive --format=zip --output=/home/ubuntu/biolab-sync/BioLab_Interactive_Guide_source.zip HEAD", { stdio: "inherit" });

  console.log("4. Committing and pushing changes to GitHub...");
  execSync("git add -A && git commit -m 'fix: resolve BIO-063/BIO-064 image uniqueness and update release sync' || true", { stdio: "inherit" });
  execSync("git push origin main", { stdio: "inherit" });

  console.log("5. Updating Google Drive snapshot (fileId: 1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT)...");
  const updateCmd = `gws drive files update --params '{"fileId":"1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT"}' --upload /home/ubuntu/biolab-sync/BioLab_Interactive_Guide_source.zip --upload-content-type application/zip --json '{"name":"BioLab_Interactive_Guide_source.zip","description":"BioLab Interactive Guide sanitizatsiyalangan manba kodi (GitHub main branch)."}' --format json`;
  execSync(updateCmd, { stdio: "inherit" });

  console.log("=== Sync completed successfully! ===");
} catch (error) {
  console.error("Sync failed:", error);
  process.exit(1);
}
