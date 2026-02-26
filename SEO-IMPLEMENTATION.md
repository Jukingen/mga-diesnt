# SEO Implementasyon Özeti – MIGA Dienstleistungen

**Domain:** www.miga-dienstleistungen.at  
**Dil:** Almanca (de-AT)  
**Hedef:** Graz + Steiermark, B2B + Privat

---

## Değişen Dosyalar

| Dosya | Değişiklik |
|-------|------------|
| `src/components/SEO.astro` | **Yeni** – Teknik SEO, canonical, OG, Twitter meta |
| `src/components/StructuredData.astro` | **Yeni** – LocalBusiness + Service JSON-LD |
| `src/lib/seoUtils.ts` | **Yeni** – Meta description üretimi, stripHtml |
| `src/layouts/BaseLayout.astro` | SEO component, StructuredData (LocalBusiness), OG fallback |
| `src/pages/leistungen.astro` | intro_text, meta fallback, img optimizasyonu |
| `src/pages/leistungen/[slug].astro` | Service JSON-LD, meta fallback, H2, img optimizasyonu |
| `src/pages/datenschutz.astro` | meta_title, meta_description, og_image fallback |
| `src/pages/impressum.astro` | meta_title, meta_description, og_image fallback |
| `src/pages/uber-uns.astro` | img alt, width, height, decoding |
| `src/content/config.ts` | services seo: meta_title, meta_description, focus_keyword, og_image |
| `src/content/pages/services.md` | intro_text (250–500 kelime SEO metni) |
| `src/content/services/reinigung.md` | body (H2 yapılı örnek içerik) |
| `public/admin/config.yml` | SEO alanları: meta_title, meta_description, focus_keyword, og_image, intro_text |
| `public/robots.txt` | **Yeni** – Sitemap referansı |
| `astro.config.mjs` | @astrojs/sitemap entegrasyonu |
| `package.json` | @astrojs/sitemap, marked bağımlılıkları |

---

## Sayfa Bazlı Hedef Keyword Tablosu

| Sayfa | Hedef Keyword | Lokal Varyasyonlar |
|-------|---------------|--------------------|
| `/` (Home) | Reinigung Graz, Dienstleister Graz | Graz, Steiermark, Umgebung |
| `/leistungen` | Leistungen Graz, Reinigungsservice | Graz, Steiermark, B2B |
| `/leistungen/reinigung` | Reinigung Graz, Reinigungsdienst | Graz, Steiermark |
| `/leistungen/gruenflaeche` | Grünflächenpflege Steiermark | Graz, Steiermark |
| `/leistungen/winterdienst` | Winterdienst Graz | Steiermark, Umgebung |
| `/leistungen/bau` | Bauarbeiten Graz, Bauendreinigung | Steiermark |
| `/leistungen/montage` | Montage Graz | Steiermark |
| `/leistungen/transport` | Transport Graz | Steiermark |
| `/leistungen/tischler` | Tischler Graz | Steiermark |
| `/leistungen/sanitaer` | Sanitär Graz | Steiermark |
| `/kontakt` | Kontakt MIGA, Reinigung Graz kontakt | Graz |
| `/uber-uns` | MIGA Dienstleistungen, Über uns | Graz, Meisterbetrieb |

---

## Title + Description Listesi (Fallback)

| Sayfa | Title (max 60 Zeichen) | Description (max 160 Zeichen) |
|-------|------------------------|------------------------------|
| Home | MIGA Dienstleistungen GmbH | subtitle / „Ihr Allround-Dienstleister in Graz“ |
| Leistungen | Unsere Leistungen - MIGA... | Professionelle Dienstleistungen: Reinigung, Grünflächenpflege... in Graz und Steiermark |
| Reinigung | Reinigung - MIGA Dienstleistungen GmbH | Professionelle Reinigung in Graz und Steiermark... |
| Kontakt | Kontakt - MIGA Dienstleistungen GmbH | Kontaktieren Sie MIGA... Graz |
| Über uns | {title} - MIGA Dienstleistungen GmbH | intro / Fallback |
| Datenschutz | {title} - MIGA... | DSGVO Datenschutzerklärung |
| Impressum | {title} - MIGA... | Impressum und rechtliche Informationen |

---

## CMS Meta Alanları (Fallback Mantığı)

- **meta_title** → seo.title → sayfa başlığı  
- **meta_description** → seo.description → varsayılan / içerikten 150 karakter  
- **og_image** → `/uploads/...` (varsayılan görsel)  
- **focus_keyword** → İsteğe bağlı (analiz/araçlar için)

---

## Test Adımları (5 Madde)

1. **Build:** `npm run build` hatasız tamamlanmalı.
2. **Sitemap:** `https://www.miga-dienstleistungen.at/sitemap-index.xml` açılmalı.
3. **robots.txt:** `https://www.miga-dienstleistungen.at/robots.txt` Sitemap URL içermeli.
4. **Canonical:** Her sayfada `<link rel="canonical" href="https://miga-dienstleistungen.at/...">` doğru görünmeli.
5. **Lighthouse SEO:** Chrome DevTools → Lighthouse → SEO skoru 90+ hedeflenir (Title, meta description, H1, alt text, JSON-LD kontrolü).

---

## Ek Notlar

- **OG-Bild:** 1200×630 px önerilir. Varsayılan: `/uploads/meg-jenson-idi7kb6eqy0-unsplash.jpg`. Özel OG için CMS `og_image` kullanılabilir.
- **Internal Linking:** Leistungen sayfalarında yan menüde tüm hizmetler listelenir; ana sayfada „Mehr erfahren“ linkleri bulunur.
- **Minimal JS:** Astro static output; yalnızca Datenschutz/Impressum placeholder değişimi için minimal client script.
