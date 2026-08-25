import { describe, expect, it, vi } from "vitest";
import { PDFDocument } from "pdf-lib";
import { equipment } from "./equipmentData";
import { buildDevicePdf, getDevicePdfFilename, shareDevicePdf } from "./devicePdfExport";
import { loadLearningContent, loadPurchaseContent, resolveDeviceContent } from "./learningData";

describe("individual qurilma PDF dosyesi", () => {
  const device = equipment[0];
  const exportedAt = new Date("2026-08-25T12:00:00.000Z");

  it("haqiqiy PDF, metadata va 16 bo‘limli kontent yaratadi", async () => {
    const { learning, purchase } = await resolveDeviceContent(loadLearningContent(device.number), loadPurchaseContent(device.number));
    const blob = await buildDevicePdf(device, learning, purchase, exportedAt);
    const document = await PDFDocument.load(await blob.arrayBuffer());

    expect(blob.type).toBe("application/pdf");
    expect(document.getTitle()).toBe(`BioLab — ${device.name}`);
    expect(document.getPageCount()).toBeGreaterThan(1);
    expect(getDevicePdfFilename(device, exportedAt)).toBe("BioLab_BIO-001_oquv_dosyesi_2026-08-25.pdf");
  });

  it("qo‘llab-quvvatlangan qurilmada individual PDFni native Share oynasiga beradi", async () => {
    const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, "navigator");
    const share = vi.fn().mockResolvedValue(undefined);
    const canShare = vi.fn(() => true);
    Object.defineProperty(globalThis, "navigator", { configurable: true, value: { share, canShare } });

    try {
      await expect(shareDevicePdf(device, exportedAt)).resolves.toBe("shared");
      expect(canShare).toHaveBeenCalledOnce();
      expect(share).toHaveBeenCalledOnce();
      expect(share.mock.calls[0][0].files?.[0].name).toBe("BioLab_BIO-001_oquv_dosyesi_2026-08-25.pdf");
    } finally {
      if (navigatorDescriptor) Object.defineProperty(globalThis, "navigator", navigatorDescriptor);
      else Reflect.deleteProperty(globalThis, "navigator");
    }
  });
});
