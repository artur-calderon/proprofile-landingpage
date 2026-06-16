import { getDefaultStore } from "./default-profiles";
import type { ProfileStore } from "./types";
import { STORAGE_KEY } from "./types";

export function loadStore(): ProfileStore {
  if (typeof window === "undefined") return getDefaultStore();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultStore();
    const parsed = JSON.parse(raw) as ProfileStore;
    if (!parsed.profiles?.length) return getDefaultStore();
    return parsed;
  } catch {
    return getDefaultStore();
  }
}

export function saveStore(store: ProfileStore): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
