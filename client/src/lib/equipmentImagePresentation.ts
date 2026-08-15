/*
  BioLab visual reminder: Modern Precision Biotech — every device must remain
  recognizable, centered, and clearly legible in its dedicated image window.
*/

export type ImagePresentation = {
  fit: "cover" | "contain";
  position?: string;
};

const safeFrameIds = new Set([
  "BIO-017", "BIO-018", "BIO-019", "BIO-021", "BIO-022", "BIO-023", "BIO-024",
  "BIO-026", "BIO-027", "BIO-028", "BIO-029", "BIO-034", "BIO-037", "BIO-038",
  "BIO-041", "BIO-042", "BIO-046", "BIO-050", "BIO-052", "BIO-053", "BIO-054",
  "BIO-057", "BIO-062", "BIO-063", "BIO-064", "BIO-065", "BIO-071", "BIO-073",
  "BIO-075", "BIO-080", "BIO-082", "BIO-083", "BIO-089", "BIO-092", "BIO-097",
  "BIO-098", "BIO-099", "BIO-100",
]);

const tunedPositions: Partial<Record<string, string>> = {
  "BIO-017": "62% 50%",
  "BIO-019": "50% 52%",
  "BIO-021": "50% 55%",
  "BIO-041": "50% 52%",
  "BIO-042": "50% 54%",
  "BIO-050": "50% 50%",
  "BIO-054": "50% 52%",
  "BIO-057": "50% 50%",
  "BIO-071": "50% 50%",
  "BIO-080": "50% 48%",
  "BIO-083": "50% 50%",
  "BIO-097": "50% 50%",
  "BIO-098": "50% 50%",
  "BIO-100": "50% 50%",
};

export function getImagePresentation(id: string): ImagePresentation {
  return {
    fit: safeFrameIds.has(id) ? "contain" : "cover",
    position: tunedPositions[id] ?? "50% 50%",
  };
}
