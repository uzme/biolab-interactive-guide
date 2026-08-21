import { describe, expect, it } from "vitest";
import { loadLearningContent, loadPurchaseContent, resolveDeviceContent } from "./learningData";

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

  it("xarid loaderi xato bersa ham 16-bo‘limli o‘quv dosyesini saqlab qoladi", async () => {
    const learning = await loadLearningContent(26);
    const result = await resolveDeviceContent(
      Promise.resolve(learning),
      Promise.reject(new Error("Purchase blokini yuklash imitatsiyasi")),
    );

    expect(result.learning).toMatchObject({ number: 26, sourceKind: "learning" });
    expect(result.purchase).toBeUndefined();
    expect(result.learningLoadFailed).toBe(false);
  });
});
