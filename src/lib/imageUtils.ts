/**
 * CMS görsel alanı için yardımcı fonksiyonlar.
 * Schema: { src: string, hidden?: boolean }
 * Guard: image?.src && !image?.hidden
 */

export type CmsImage = { src?: string; hidden?: boolean } | undefined;

/** Görünür görsel path döndürür; hidden veya boşsa undefined. */
export function getVisibleImage(img: CmsImage): string | undefined {
  if (!img?.src || img.hidden) return undefined;
  const s = String(img.src).trim();
  if (!s) return undefined;
  return s.startsWith('/') ? s : `/${s}`;
}

/** Decap CMS bazen { url, path } döndürür; string de kabul et. */
export function normalizeImagePath(
  v: string | { url?: string; path?: string } | CmsImage | undefined
): string {
  if (!v) return '';
  if (typeof v === 'string') return v.startsWith('/') ? v : `/${v}`;
  const obj = v as Record<string, unknown>;
  if (obj.src && typeof obj.src === 'string') return (obj.src as string).startsWith('/') ? (obj.src as string) : `/${obj.src}`;
  const u = (obj.url ?? obj.path) as string | undefined;
  return u ? (u.startsWith('/') ? u : `/${u}`) : '';
}
