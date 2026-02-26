/**
 * SEO yardımcı fonksiyonları.
 * meta_description yoksa içerikten 150 karakter üretmek için.
 */

const DEFAULT_DESC_LENGTH = 155;

/** HTML/strip etiketlerinden metin çıkarır, boşlukları düzeltir. */
export function stripHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

/** İçerikten meta description üretir (max ~155 karakter). */
export function generateMetaDescription(
  content: string,
  maxLength: number = DEFAULT_DESC_LENGTH
): string {
  const clean = stripHtml(content);
  if (!clean) return '';
  if (clean.length <= maxLength) return clean;
  const truncated = clean.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > maxLength * 0.7
    ? truncated.slice(0, lastSpace) + '…'
    : truncated + '…';
}

/** Title uzunluğunu kontrol et (50-60 ideal). */
export function truncateTitle(title: string, maxLength: number = 60): string {
  if (!title || title.length <= maxLength) return title;
  return title.slice(0, maxLength - 1) + '…';
}
