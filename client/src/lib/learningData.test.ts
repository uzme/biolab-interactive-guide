import { describe, expect, it } from "vitest";
import { loadLearningContent, loadPurchaseContent, resolveDeviceContent } from "./learningData";

describe("100 ta qurilma uchun dinamik detail ma’lumotlari", () => {
  it("har bir BIO-001–BIO-100 uchun o‘quv va xarid blokini hamda 16 bo‘lim maydonlarini to‘liq yuklaydi", async () => {
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
      expect(learning, `BIO-${String(number).padStart(3, "0")} o‘quv dosyesi`).toBeDefined();
      expect(purchase, `BIO-${String(number).padStart(3, "0")} xarid dosyesi`).toBeDefined();

      const requiredLearningFields = [
        "title",
        "originalName",
        "manufacturer",
        "model",
        "whatIs",
        "whatItDoes",
        "principle",
        "learningOutcomes",
        "mainParts",
        "samplePreparation",
        "workflow",
        "resultInterpretation",
        "commonMistakes",
        "safety",
        "maintenance",
        "calibrationTroubleshooting",
        "practice",
      ] as const;

      for (const field of requiredLearningFields) {
        expect(learning?.[field].trim(), `BIO-${String(number).padStart(3, "0")} / ${field}`).not.toHaveLength(0);
      }

      expect(learning?.sources.length, `BIO-${String(number).padStart(3, "0")} / manbalar`).toBeGreaterThan(0);
      for (const source of learning?.sources ?? []) {
        expect(source.label.trim(), `BIO-${String(number).padStart(3, "0")} / manba nomi`).not.toHaveLength(0);
        expect(source.note.trim(), `BIO-${String(number).padStart(3, "0")} / manba izohi`).not.toHaveLength(0);
      }
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
