import { describe, expect, it } from "vitest";
import { sanitizeLearningProgress } from "./useLearningProgress";

describe("learning progress sanitization", () => {
  const validIds = new Set(["BIO-001", "BIO-002"]);

  it("faqat haqiqiy qurilma va 1–16 oralig‘idagi noyob bo‘limlarni saqlaydi", () => {
    expect(sanitizeLearningProgress({ "BIO-001": [3, 1, 3, 17, 0], "BIO-999": [1], "BIO-002": [16] }, validIds)).toEqual({ "BIO-001": [1, 3], "BIO-002": [16] });
  });
});
