import { describe, expect, it } from "vitest";
import { getDeviceDetailPath, getDeviceDetailUrl } from "./deviceQr";

describe("device QR deep link", () => {
  it("detail oynasini Live Lab gate'siz ochadigan QR path yaratadi", () => {
    expect(getDeviceDetailPath("BIO-001")).toBe("/?direct=1&device=BIO-001");
  });

  it("berilgan origin asosida share qilinadigan to‘liq URL yaratadi", () => {
    expect(getDeviceDetailUrl("BIO-100", "https://biolab.example/")).toBe("https://biolab.example/?direct=1&device=BIO-100");
  });
});
