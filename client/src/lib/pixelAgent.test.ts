import { describe, expect, it } from "vitest";
import { equipment } from "@/lib/equipmentData";
import { buildAgentReply, searchCatalog } from "@/lib/pixelAgent";

describe("pixel agent catalog engine", () => {
  it("finds an exact BIO record and model", () => {
    const results = searchCatalog("BIO-001", equipment);
    expect(results[0]?.id).toBe("BIO-001");
    expect(results[0]?.model).toContain("CFX96");
  });

  it("answers a device-purpose question from the catalog", () => {
    const reply = buildAgentReply("DNK amplifikatsiyasi uchun nima kerak?", equipment);
    expect(reply.text).toContain("BIO-001");
    expect(reply.text).toContain("PCR");
    expect(reply.sources.length).toBeGreaterThan(0);
  });

  it("returns a useful fallback when no catalog record matches", () => {
    const reply = buildAgentReply("mars rover laboratoriyasi", equipment);
    expect(reply.sources).toHaveLength(0);
    expect(reply.text).toContain("aniq rekord topilmadi");
  });
});
