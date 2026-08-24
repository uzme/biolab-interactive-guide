import { PDFDocument } from "pdf-lib";
import { describe, expect, it } from "vitest";
import { buildBookmarksCsv, buildBookmarksPdf } from "./bookmarkExport";
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
});
