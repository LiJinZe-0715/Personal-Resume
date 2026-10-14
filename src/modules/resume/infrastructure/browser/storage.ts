// Display preferences are optional. Resume content always comes from the bundle.
export function saveBrowserValue(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Switching the current view remains available.
  }
}
