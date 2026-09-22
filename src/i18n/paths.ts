/** Locale counterparts shared by server metadata and the language switch. */
export function languagePaths(path: string) {
  const es = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return { es, en: `/en${es}`, "x-default": es };
}
