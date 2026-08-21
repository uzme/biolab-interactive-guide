import { describe, expect, it } from "vitest";
import { loadLearningContent, loadPurchaseContent } from "./learningData";

describe("100 ta qurilma uchun dinamik detail ma’lumotlari", () => {
  it("har bir BIO-001–BIO-100 uchun o‘quv va xarid blokini yuklaydi", async () => {
    const results = await Promise.all(
      Array.from({ length: 100 }, async (_, index) => {
        const number = index + 1;
        const [learning, purchase] = await Promise.all([
          loadLearningContent(number),
          loadPurchaseContent(number),
        ]);
        return { number, learning, purchase };
      }),
    );

    for (const { number, learning, purchase } of results) {
      expect(learning, `BIO-${String(number).padStart(3, "0")} o‘quv ma’lumoti`).toMatchObject({ number });
      expect(purchase, `BIO-${String(number).padStart(3, "0")} xarid ma’lumoti`).toMatchObject({ number });
    }
  });
});
