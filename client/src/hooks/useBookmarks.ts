import { useCallback, useEffect, useState } from "react";

export const BOOKMARKS_STORAGE_KEY = "biolab-guide:bookmarks:v1";
export const BOOKMARKS_EXPORT_VERSION = 1;
export const BOOKMARKS_EXPORT_APP = "biolab-interactive-guide";

type StoredBookmarks = string[];

type BookmarkExportPayload = {
  app: typeof BOOKMARKS_EXPORT_APP;
  version: typeof BOOKMARKS_EXPORT_VERSION;
  exportedAt: string;
  bookmarkIds: StoredBookmarks;
};

export type BookmarkImportResult = {
  addedCount: number;
  ignoredCount: number;
};

function readBookmarks(): StoredBookmarks {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return Array.from(new Set(parsed.filter((value): value is string => typeof value === "string")));
  } catch {
    return [];
  }
}

function getImportIds(parsed: unknown): string[] {
  if (Array.isArray(parsed)) return parsed.filter((value): value is string => typeof value === "string");
  if (!parsed || typeof parsed !== "object" || !("bookmarkIds" in parsed)) return [];
  const bookmarkIds = (parsed as { bookmarkIds?: unknown }).bookmarkIds;
  return Array.isArray(bookmarkIds) ? bookmarkIds.filter((value): value is string => typeof value === "string") : [];
}

export function parseBookmarkIds(raw: string, validDeviceIds?: ReadonlySet<string>): BookmarkImportResult & { ids: string[] } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("JSON faylini o‘qib bo‘lmadi");
  }

  const sourceIds = getImportIds(parsed);
  if (sourceIds.length === 0) throw new Error("Faylda saralangan qurilmalar topilmadi");
  const uniqueIds = Array.from(new Set(sourceIds));
  const ids = validDeviceIds ? uniqueIds.filter((id) => validDeviceIds.has(id)) : uniqueIds;
  return {
    ids,
    addedCount: ids.length,
    ignoredCount: uniqueIds.length - ids.length,
  };
}

export function useBookmarks(validDeviceIds?: ReadonlySet<string>) {
  const [bookmarkedIds, setBookmarkedIds] = useState<StoredBookmarks>(readBookmarks);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = useCallback((deviceId: string) => {
    setBookmarkedIds((current) =>
      current.includes(deviceId)
        ? current.filter((id) => id !== deviceId)
        : [...current, deviceId],
    );
  }, []);

  const isBookmarked = useCallback(
    (deviceId: string) => bookmarkedIds.includes(deviceId),
    [bookmarkedIds],
  );

  const clearBookmarks = useCallback(() => setBookmarkedIds([]), []);

  const exportBookmarks = useCallback(() => {
    if (typeof window === "undefined") return;
    const payload: BookmarkExportPayload = {
      app: BOOKMARKS_EXPORT_APP,
      version: BOOKMARKS_EXPORT_VERSION,
      exportedAt: new Date().toISOString(),
      bookmarkIds: bookmarkedIds,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `BioLab_saralanganlar_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }, [bookmarkedIds]);

  const importBookmarks = useCallback(async (file: File): Promise<BookmarkImportResult> => {
    const raw = await file.text();
    const { ids: validIds, ignoredCount } = parseBookmarkIds(raw, validDeviceIds);

    setBookmarkedIds((current) => {
      const merged = new Set(current);
      validIds.forEach((id) => merged.add(id));
      return Array.from(merged);
    });

    return {
      addedCount: validIds.length,
      ignoredCount,
    };
  }, [validDeviceIds]);

  return {
    bookmarkedIds,
    bookmarkedCount: bookmarkedIds.length,
    toggleBookmark,
    isBookmarked,
    clearBookmarks,
    exportBookmarks,
    importBookmarks,
  };
}
