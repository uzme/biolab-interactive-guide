import { imageBackgroundProfiles, type ImageBackgroundProfile } from "@/lib/imagePresentationProfiles";

/*
  BioLab visual reminder: Modern Precision Biotech — every device must remain
  recognizable, centered, and clearly legible in its dedicated image window.
*/

export type ImagePresentation = {
  fit: "cover" | "contain";
  position?: string;
};

// PCR kartasi foydalanuvchi tasdiqlagan kadr nisbatini saqlaydi. Qolgan
// qurilmalarda asosiy mahsulot hech qachon kesilmasligi uchun `contain`
// ishlatiladi; karta oynasi xiralashtirilgan fon qatlami bilan to‘liq qoplanadi.
const coverFrameIds = new Set([
  "BIO-001", "BIO-002", "BIO-003", "BIO-004", "BIO-005", "BIO-007", "BIO-009", "BIO-011",
  "BIO-012", "BIO-013", "BIO-014", "BIO-015", "BIO-016", "BIO-017", "BIO-018", "BIO-019", "BIO-020",
  "BIO-021", "BIO-022", "BIO-024", "BIO-025", "BIO-027", "BIO-028", "BIO-029",
  "BIO-030", "BIO-031", "BIO-032", "BIO-033", "BIO-035", "BIO-036", "BIO-037", "BIO-040",
  "BIO-023", "BIO-026",
]);

const laboratoryHeroIds = new Set(coverFrameIds);

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
    fit: coverFrameIds.has(id) ? "cover" : "contain",
    position: tunedPositions[id] ?? "50% 50%",
  };
}

/**
 * Audit qilingan manba rasm foniga mos media surface tanlaydi.
 * `laboratory` umumiy teal studio fonidir; `paper` va `ink` oq/qorong‘i
 * raster fonni ataylab to‘liq media oynasiga qo‘shib, ichki rectangle
 * yoki noto‘g‘ri blend effektini yo‘qotadi.
 */
export function getImageBackgroundProfile(id: string): ImageBackgroundProfile {
  return laboratoryHeroIds.has(id) ? "laboratory" : imageBackgroundProfiles[id] ?? "laboratory";
}
