import { describe, expect, it } from "vitest";
import { equipmentImages } from "./equipmentImages";
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

  it("qabul qilingan qorong‘i laboratoriya hero-vizuallarini cover va laboratory profilida ochadi", () => {
    const acceptedHeroIds = [
      "BIO-002", "BIO-003", "BIO-004", "BIO-007", "BIO-009", "BIO-011", "BIO-012",
      "BIO-013", "BIO-014", "BIO-015", "BIO-023", "BIO-026", "BIO-030", "BIO-032",
      "BIO-036", "BIO-037", "BIO-040",
    ];

    for (const id of acceptedHeroIds) {
      expect(getImagePresentation(id).fit).toBe("cover");
      expect(getImageBackgroundProfile(id)).toBe("laboratory");
      expect(equipmentImages[id].url).toContain("-hero_");
    }
  });
});
