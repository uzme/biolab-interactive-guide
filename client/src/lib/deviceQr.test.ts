import { describe, expect, it } from "vitest";
import { equipment } from "./equipmentData";
import { DEFAULT_BIOLAB_ORIGIN, getDeviceDetailPath, getDeviceDetailUrl, getDeviceQrDataUrl } from "./deviceQr";

describe("device QR deep link", () => {
  it("detail oynasini Live Lab gate'siz ochadigan QR path yaratadi", () => {
    expect(getDeviceDetailPath("BIO-001")).toBe("/?direct=1&device=BIO-001");
  });

  it("berilgan origin asosida share qilinadigan to‘liq URL yaratadi", () => {
    expect(getDeviceDetailUrl("BIO-100", "https://biolab.example/")).toBe("https://biolab.example/?direct=1&device=BIO-100");
  });

  it("100 ta qurilmaning har biri uchun aniq direct detail manzil yaratadi", () => {
    expect(equipment).toHaveLength(100);
    for (const device of equipment) {
      const path = getDeviceDetailPath(device.id);
      expect(path).toBe(`/?direct=1&device=${device.id}`);
      expect(getDeviceDetailUrl(device.id, DEFAULT_BIOLAB_ORIGIN)).toBe(`${DEFAULT_BIOLAB_ORIGIN}${path}`);
    }
  });

  it("skan qilinadigan PNG QR ma’lumotini yaratadi", async () => {
    const dataUrl = await getDeviceQrDataUrl("BIO-001", DEFAULT_BIOLAB_ORIGIN);
    expect(dataUrl).toMatch(/^data:image\/png;base64,/);
  });
});
