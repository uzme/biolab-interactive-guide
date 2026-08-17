import { describe, expect, it } from "vitest";
import { parseBookmarkIds } from "./useBookmarks";

describe("parseBookmarkIds", () => {
  it("versioned eksport payloadidan valid IDlarni deduplikatsiya qiladi", () => {
    const result = parseBookmarkIds(
      JSON.stringify({ app: "biolab-interactive-guide", version: 1, bookmarkIds: ["BIO-001", "BIO-001", "BIO-004"] }),
      new Set(["BIO-001", "BIO-004"]),
    );

    expect(result).toEqual({ ids: ["BIO-001", "BIO-004"], addedCount: 2, ignoredCount: 0 });
  });

  it("noma’lum device IDlarini importdan chiqarib tashlaydi", () => {
    const result = parseBookmarkIds(
      JSON.stringify({ bookmarkIds: ["BIO-001", "BIO-999", "BIO-001"] }),
      new Set(["BIO-001"]),
    );

    expect(result).toEqual({ ids: ["BIO-001"], addedCount: 1, ignoredCount: 1 });
  });

  it("legacy string array formatini ham qabul qiladi", () => {
    expect(parseBookmarkIds(JSON.stringify(["BIO-003", "BIO-002"]))).toEqual({
      ids: ["BIO-003", "BIO-002"],
      addedCount: 2,
      ignoredCount: 0,
    });
  });

  it("yaroqsiz JSON uchun tushunarli xato beradi", () => {
    expect(() => parseBookmarkIds("not-json")).toThrow("JSON faylini o‘qib bo‘lmadi");
  });
});
