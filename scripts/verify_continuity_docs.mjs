import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const CANONICAL_REPOSITORY = "uzme/biolab-interactive-guide";
const CANONICAL_DRIVE_ROOT_ID = "19um8Y1EuuZbbTR2ncXDeg6mekc_xorhV";
const requiredDocs = [
  "README.md",
  "PROJECT_MANIFEST.md",
  "ARCHITECTURE.md",
  "DATABASE.md",
  "REPRODUCTION.md",
  "AI_HANDOFF.md",
  "CURRENT_STATE.md",
  "PROJECT_INVENTORY.md",
  "DECISIONS.md",
  "CHANGELOG.md",
  "TROUBLESHOOTING.md",
  "SECRETS_REQUIRED.md",
  "PROJECT_STATE.md",
  "DRIVE_INDEX.md",
  "GITHUB_INDEX.md",
  "RESTORATION_MAP.md",
  "CONTINUITY_AUDIT.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
];

const read = (file) => {
  const filePath = path.join(root, file);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
};

const missing = requiredDocs.filter((file) => !fs.existsSync(path.join(root, file)));
const stateDocuments = ["PROJECT_STATE.md", "CURRENT_STATE.md", "CONTINUITY_AUDIT.md"];
const crossLinkChecks = {
  githubCanonicalRepo: read("README.md").includes(`github.com/${CANONICAL_REPOSITORY}`)
    && read("GITHUB_INDEX.md").includes(`github.com/${CANONICAL_REPOSITORY}`),
  driveRootId: read("DRIVE_INDEX.md").includes(CANONICAL_DRIVE_ROOT_ID),
  restorationHasGitHub: read("RESTORATION_MAP.md").includes(`github.com/${CANONICAL_REPOSITORY}`),
  restorationHasDrive: read("RESTORATION_MAP.md").includes(CANONICAL_DRIVE_ROOT_ID),
  stateHasReadyStatus: stateDocuments.every((file) => {
    const text = read(file);
    return /\bREADY\b/.test(text)
      && !text.includes("READY WITH EXCEPTION")
      && !text.includes("NOT READY")
      && !text.includes("NOT_READY");
  }),
};

const envExamplePresent = fs.existsSync(path.join(root, ".env.example"));
const environmentContractPresent = read("SECRETS_REQUIRED.md").includes("No real secrets or production credentials are stored");
const allChecksPassed = missing.length === 0
  && environmentContractPresent
  && Object.values(crossLinkChecks).every(Boolean);
const result = {
  generatedAt: new Date().toISOString(),
  canonicalRepository: CANONICAL_REPOSITORY,
  canonicalDriveRootId: CANONICAL_DRIVE_ROOT_ID,
  requiredDocumentCount: requiredDocs.length,
  missingRequiredDocs: missing,
  envExamplePresent,
  environmentContractPresent,
  crossLinkChecks,
  status: allChecksPassed ? "READY" : "NOT_READY",
};
console.log(JSON.stringify(result, null, 2));
if (result.status === "NOT_READY") process.exitCode = 1;
