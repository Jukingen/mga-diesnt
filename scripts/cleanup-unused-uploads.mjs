#!/usr/bin/env node
/**
 * Unused uploads cleanup script.
 * Referansı olmayan public/uploads dosyalarını listeler ve opsiyonel olarak siler.
 * Kullanım: node scripts/cleanup-unused-uploads.mjs [--dry-run]
 * --dry-run: Sadece listele, silme (varsayılan)
 * --delete: Gerçekten sil
 */
import { readFileSync, readdirSync, unlinkSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const uploadsDir = join(root, 'public', 'uploads');
const contentDir = join(root, 'src', 'content');

const refs = new Set();

function extractPathsFromMd(content) {
  const paths = [];
  const re = /\/uploads\/[^\s)"'\]]+/g;
  let m;
  while ((m = re.exec(content)) !== null) paths.push(m[0]);
  return paths;
}

function extractPathsFromYaml(content) {
  const paths = [];
  const re = /(?:src|image|path|url):\s*['"]?(\/uploads\/[^'"\s]+)['"]?/g;
  let m;
  while ((m = re.exec(content)) !== null) paths.push(m[1]);
  return paths;
}

function walkDir(dir, ext = '.md') {
  try {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      const st = statSync(p);
      if (st.isDirectory()) walkDir(p, ext);
      else if (name.endsWith(ext)) {
        const text = readFileSync(p, 'utf-8');
        extractPathsFromMd(text).forEach((x) => refs.add(x));
        extractPathsFromYaml(text).forEach((x) => refs.add(x));
      }
    }
  } catch (_) {
    /* ignore */
  }
}

walkDir(contentDir);
walkDir(root, '.yml');
walkDir(root, '.yaml');

function normalizePath(p) {
  return p.replace(/\\/g, '/').replace(/^\/+/, '/');
}

function getUploadFiles(dir, base = '') {
  const out = [];
  try {
    for (const name of readdirSync(dir)) {
      const rel = base ? `${base}/${name}` : name;
      const p = join(dir, name);
      const st = statSync(p);
      if (st.isDirectory()) out.push(...getUploadFiles(p, rel));
      else out.push(rel);
    }
  } catch (_) {
    /* ignore */
  }
  return out;
}

const used = new Set();
for (const r of refs) {
  const n = normalizePath(r);
  used.add(n);
  used.add(n.replace(/^\//, ''));
  used.add(n.replace(/^\/uploads\//, ''));
}

const files = getUploadFiles(uploadsDir);
const orphans = files.filter((f) => {
  const full = `/uploads/${f}`;
  return !used.has(full) && !used.has(full.replace(/^\//, '')) && !used.has(f);
});

const dryRun = !process.argv.includes('--delete');

if (orphans.length === 0) {
  console.log('No orphan uploads found.');
  process.exit(0);
}

console.log(`Found ${orphans.length} orphan file(s) in public/uploads:`);
orphans.forEach((f) => console.log(`  - ${f}`));

if (dryRun) {
  console.log('\nRun with --delete to remove these files.');
  process.exit(0);
}

for (const f of orphans) {
  const p = join(uploadsDir, f);
  try {
    unlinkSync(p);
    console.log(`Deleted: ${f}`);
  } catch (e) {
    console.error(`Failed to delete ${f}:`, e.message);
  }
}
