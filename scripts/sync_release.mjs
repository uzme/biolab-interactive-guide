import { execSync } from "child_process";
import fs from "fs";

const args = process.argv.slice(2);
const mode = args[0]; // --check or --publish

console.log("=== BioLab Release & Sync Automation (Two-Step Workflow) ===");

if (!mode || (mode !== "--check" && mode !== "--publish")) {
  console.log("Usage:");
  console.log("  node scripts/sync_release.mjs --check     (Run checks, build & prepare archive without uploading)");
  console.log("  node scripts/sync_release.mjs --publish   (Push to GitHub & update Google Drive snapshot)");
  process.exit(1);
}

try {
  console.log("[1/4] Running TypeScript check and production build...");
  execSync("pnpm run check && pnpm run build", { stdio: "inherit" });

  console.log("[2/4] Running catalog controls test...");
  execSync("node scripts/test_catalog_controls.mjs", { stdio: "inherit" });

  console.log("[3/4] Creating sanitized source archive for Google Drive...");
  const syncDir = ".sync";
  const archivePath = `${syncDir}/BioLab_Interactive_Guide_source.zip`;
  if (!fs.existsSync(syncDir)) {
    fs.mkdirSync(syncDir, { recursive: true });
  }
  execSync(`git archive --format=zip --output=${archivePath} HEAD`, { stdio: "inherit" });

  const archiveStat = fs.statSync(archivePath);
  console.log(`[Info] Sanitized source archive prepared successfully: ${(archiveStat.size / 1024).toFixed(1)} KB`);

  if (mode === "--check") {
    console.log("\n=== CHECK SUCCESSFUL ===");
    console.log("All tests passed and clean archive is ready.");
    console.log("To publish to GitHub and Google Drive, run:");
    console.log("  node scripts/sync_release.mjs --publish");
    process.exit(0);
  }

  // --publish mode
  console.log("[4/4] Publishing to GitHub and Google Drive...");
  
  console.log(" -> Committing and pushing changes to GitHub (main)...");
  execSync("git add -A && git commit -m 'chore: release update and automated sync publish' || true", { stdio: "inherit" });
  execSync("git push origin main", { stdio: "inherit" });

  // Re-generate archive after commit so it includes latest committed state
  execSync(`git archive --format=zip --output=${archivePath} HEAD`, { stdio: "inherit" });

  console.log(" -> Updating Google Drive snapshot (fileId: 1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT)...");
  const updateCmd = `gws drive files update --params '{"fileId":"1t3nhJbGH2THfU5E17LRJ2P21bRkhVAnT"}' --upload ${archivePath} --upload-content-type application/zip --json '{"name":"BioLab_Interactive_Guide_source.zip","description":"BioLab Interactive Guide sanitizatsiyalangan manba kodi (GitHub main branch)."}' --format json`;
  execSync(updateCmd, { stdio: "inherit" });

  console.log("\n=== PUBLISH COMPLETED SUCCESSFULLY ===");
  console.log("GitHub repository: https://github.com/uzme/biolab-interactive-guide");
  console.log("Google Drive folder: https://drive.google.com/drive/folders/1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw");

} catch (error) {
  console.error("\n[Error] Sync workflow failed:", error);
  process.exit(1);
}
