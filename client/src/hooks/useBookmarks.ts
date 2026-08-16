import { useCallback, useEffect, useState } from "react";

export const BOOKMARKS_STORAGE_KEY = "biolab-guide:bookmarks:v1";

type StoredBookmarks = string[];

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

export function useBookmarks() {
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

  return {
    bookmarkedIds,
    bookmarkedCount: bookmarkedIds.length,
    toggleBookmark,
    isBookmarked,
    clearBookmarks,
  };
}
