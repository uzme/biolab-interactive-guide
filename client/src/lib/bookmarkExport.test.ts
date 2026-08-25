import { PDFDocument } from "pdf-lib";
import { describe, expect, it, vi } from "vitest";
import { buildBookmarksCsv, buildBookmarksPdf, shareBookmarksPdf } from "./bookmarkExport";
import type { Equipment } from "./equipmentData";

const devices = [
  {
    id: "BIO-001",
    number: 1,
    name: "PCR (Polimeraz zanjir reaksiyasi) mashina",
    category: "Molekulyar biologiya",
    model: "Bio-Rad CFX96 Touch",
    brands: "Bio-Rad",
  },
  {
    id: "BIO-002",
    number: 2,
    name: "Avtoklav (Bug'li sterilizator)",
    category: "Mikrobiologiya",
    model: "Tuttnauer 2540MK",
    brands: "Tuttnauer",
  },
] as Equipment[];

describe("bookmark exports", () => {
  const exportedAt = new Date("2026-08-24T12:00:00.000Z");

  it("CSV uchun UTF-8 BOM, kerakli ustunlar va qurilmalarni beradi", () => {
    const csv = buildBookmarksCsv(devices, exportedAt);
    expect(csv.startsWith("\uFEFF")).toBe(true);
    expect(csv).toContain('"Kod"');
    expect(csv).toContain('"BIO-001"');
    expect(csv).toContain('"PCR (Polimeraz zanjir reaksiyasi) mashina"');
    expect(csv).toContain('"BIO-002"');
  });

  it("PDF hujjati o‘qiladigan va bir nechta qurilmani qamrab oladi", async () => {
    const blob = await buildBookmarksPdf(devices, exportedAt);
    expect(blob.type).toBe("application/pdf");
    const document = await PDFDocument.load(await blob.arrayBuffer());
    expect(document.getPageCount()).toBe(1);
    expect(document.getTitle()).toBe("BioLab — Saralangan qurilmalar");
  });

  it("qo‘llab-quvvatlangan qurilmada PDFni native Share oynasiga beradi", async () => {
    const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, "navigator");
    const share = vi.fn().mockResolvedValue(undefined);
    const canShare = vi.fn(() => true);
    Object.defineProperty(globalThis, "navigator", { configurable: true, value: { share, canShare } });

    try {
      await expect(shareBookmarksPdf(devices, exportedAt)).resolves.toBe("shared");
      expect(canShare).toHaveBeenCalledOnce();
      expect(share).toHaveBeenCalledOnce();
      expect(share.mock.calls[0][0].files?.[0].name).toBe("BioLab_saralanganlar_2026-08-24.pdf");
    } finally {
      if (navigatorDescriptor) Object.defineProperty(globalThis, "navigator", navigatorDescriptor);
      else Reflect.deleteProperty(globalThis, "navigator");
    }
  });
});
