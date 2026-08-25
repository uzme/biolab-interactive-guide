import { describe, expect, it } from "vitest";
import { equipmentImages } from "./equipmentImages";
import { auditedHeroImageUrls, localMirrorImageUrls } from "./auditedHeroImageUrls";
import {
  getImageBackgroundProfile,
  getImagePresentation,
} from "./equipmentImagePresentation";
import { imageBackgroundProfiles } from "./imagePresentationProfiles";

describe("qurilma rasm presentation profillari", () => {
  const deviceIds = Object.keys(equipmentImages);

  it("100 ta qurilmaning har biri uchun aniqlangan media profili qaytaradi", () => {
    expect(deviceIds).toHaveLength(100);

    for (const id of deviceIds) {
      expect(["laboratory", "paper", "ink"]).toContain(getImageBackgroundProfile(id));
    }
  });

  it("oq va qorong‘i fonli audit natijalarini saqlaydi", () => {
    const profiles = Object.values(imageBackgroundProfiles);

    expect(profiles.filter((profile) => profile === "paper").length).toBeGreaterThan(0);
    expect(profiles.filter((profile) => profile === "ink").length).toBeGreaterThan(0);
  });

  it("har bir qurilma uchun xavfsiz object-fit va position qiymatini qaytaradi", () => {
    for (const id of deviceIds) {
      const presentation = getImagePresentation(id);
      expect(["cover", "contain"]).toContain(presentation.fit);
      expect(presentation.position).toMatch(/^\d+% \d+%$/);
    }
  });

  it("auditdan o‘tgan 85 ta yangi hero-vizualni cover, laboratory va AI shaffofligi bilan ochadi", () => {
    const acceptedHeroIds = Object.keys(auditedHeroImageUrls);
    expect(acceptedHeroIds).toHaveLength(85);

    for (const id of acceptedHeroIds) {
      expect(getImagePresentation(id).fit).toBe("cover");
      expect(getImageBackgroundProfile(id)).toBe("laboratory");
      expect(equipmentImages[id].url).toBe(localMirrorImageUrls[id]);
      expect(equipmentImages[id].url).toBe(`/biolab-drive-assets/${id}-hero_local.webp`);
      expect(equipmentImages[id].sourceType).toBe("ai-representative");
    }
  });

  it("oldingi tekshirilgan herolar bilan 100 ta cover profili saqlanadi", () => {
    const nonHeroIds = deviceIds.filter((id) => getImagePresentation(id).fit !== "cover");
    expect(nonHeroIds).toEqual([]);
  });
});
