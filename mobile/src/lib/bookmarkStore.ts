import AsyncStorage from '@react-native-async-storage/async-storage';

export const BOOKMARKS_STORAGE_KEY = 'biolab-guide:bookmarks:v1';

function normalize(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item): item is string => typeof item === 'string' && item.startsWith('BIO-')))];
}

export async function loadBookmarkIds(): Promise<string[]> {
  const stored = await AsyncStorage.getItem(BOOKMARKS_STORAGE_KEY);
  if (!stored) return [];
  try {
    const parsed: unknown = JSON.parse(stored);
    if (Array.isArray(parsed)) return normalize(parsed);
    if (parsed && typeof parsed === 'object' && 'bookmarkIds' in parsed) {
      return normalize((parsed as { bookmarkIds?: unknown }).bookmarkIds);
    }
  } catch {
    return [];
  }
  return [];
}

export async function saveBookmarkIds(ids: string[]): Promise<string[]> {
  const normalized = normalize(ids);
  await AsyncStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify({ version: 1, bookmarkIds: normalized }));
  return normalized;
}
