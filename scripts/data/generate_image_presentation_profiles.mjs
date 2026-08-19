import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const auditPath = "/home/ubuntu/biolab-image-audit/card-render-visual-audit.json";
const outputPath = resolve(root, "client/src/lib/imagePresentationProfiles.ts");
const audit = JSON.parse(await readFile(auditPath, "utf8"));

const profiles = audit.entries
  .filter((entry) => entry.profile === "paper" || entry.profile === "ink")
  .map((entry) => [entry.id, entry.profile])
  .sort(([left], [right]) => left.localeCompare(right));

const lines = profiles.map(([id, profile]) => `  "${id}": "${profile}",`).join("\n");
const source = `/*
 * Generated from the mobile rendered-image pixel audit.
 * Do not hand-edit: run scripts/tests/analyze_card_image_renders.py and
 * node scripts/data/generate_image_presentation_profiles.mjs after auditing.
 */
export type ImageBackgroundProfile = "laboratory" | "paper" | "ink";

export const imageBackgroundProfiles: Partial<Record<string, ImageBackgroundProfile>> = {
${lines}
};
`;

await writeFile(outputPath, source, "utf8");
console.log(`Generated ${profiles.length} non-default image background profiles in ${outputPath}`);
