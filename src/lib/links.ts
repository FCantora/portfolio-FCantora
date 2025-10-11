export function buildLocaleHash(
  getRelativeLocaleUrl: (locale: string, path: string) => string,
  locale: string,
  hash: string
): string {
  const path = hash.startsWith("/#") || hash.startsWith("/") ? hash : `/#${hash}`;
  return getRelativeLocaleUrl(locale, path).replace(/\/$/, "");
}
