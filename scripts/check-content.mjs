import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import * as en from '../src/data/profile.js';
import { projectMeta, additionalProjects, journalCopy } from '../src/data/journal.js';

const root = path.resolve(import.meta.dirname, '..');
assert.equal(path.basename(root), 'Fedy_Portfolio copy', 'Run only in the experimental copy.');
const frSource = fs.readFileSync(path.join(root, 'src/data/profile.fr.js'), 'utf8').replace('"./profile"', JSON.stringify(new URL('../src/data/profile.js', import.meta.url).href));
const fr = await import('data:text/javascript;base64,' + Buffer.from(frSource).toString('base64'));
const legacy = JSON.parse(fs.readFileSync(path.join(root, 'src/data/legacy-projects.json'), 'utf8'));
const originalLegacy = fs.readFileSync(path.join(root, 'legacy/src/components/Projects/Projects.js'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.checkpoints/before-engineering-journal/manifest.json'), 'utf8').replace(/^\uFEFF/, ''));
const allowedChanges = new Set(['src/App.jsx', 'src/main.jsx', 'src/hooks/useTheme.js', 'src/i18n.jsx', 'index.html']);
let preserved = 0;
for (const entry of manifest) {
  const name = entry.Path.replaceAll('\\', '/');
  if (allowedChanges.has(name)) continue;
  const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, name))).digest('hex').toUpperCase();
  assert.equal(actual, entry.Hash, `Original record/asset/config changed: ${name}`);
  preserved++;
}
assert.equal(en.projects.length, 12);
assert.equal(en.projects.length + additionalProjects.length, 20);
assert.equal(projectMeta.length, en.projects.length);
assert.equal(new Set([...projectMeta.map(p => p[0]), ...additionalProjects.map(p => p.id)]).size, 20);
assert.equal(legacy.length, 14);
for (const p of legacy) assert(originalLegacy.includes(p.description), `Legacy description not preserved: ${p.title}`);
for (const p of additionalProjects) {
  if (p.legacy) assert(legacy.some(l => l.title === p.legacy), `Unmatched legacy project: ${p.legacy}`);
  assert(p.fr, `Missing French description: ${p.id}`);
}
for (const data of [en, fr]) {
  assert.equal(data.projects.length, 12);
  assert.equal(data.experience.length, 10);
  assert.equal(data.education.awards.length, 8);
  assert.equal(data.skills.reduce((n, g) => n + g.items.length, 0), 56);
  const refs = [data.site.cv, ...data.experience.map(e => e.logo), ...data.education.awards.map(a => a.image), '/mainimage.webp', '/portrait.png'];
  for (const ref of refs) assert(fs.existsSync(path.join(root, 'public', ref)), `Missing asset: ${ref}`);
  for (const p of data.projects) for (const l of p.links) assert.equal(new URL(l.href).protocol, 'https:');
}
assert.deepEqual(en.projects.map(p => p.links.map(l => l.href)), fr.projects.map(p => p.links.map(l => l.href)));
for (const lang of ['en', 'fr']) {
  assert.equal(journalCopy[lang].studies.length, 3);
  assert.deepEqual(Object.keys(journalCopy[lang]).sort(), Object.keys(journalCopy.en).sort());
  for (const study of journalCopy[lang].studies) assert.equal(study.stages.length, 3);
}
for (const name of [...projectMeta.map(p => p[2]), ...additionalProjects.map(p => p.image)].filter(Boolean)) assert(fs.existsSync(path.join(root, 'legacy/src/Assets/Projects', name)), `Missing project image: ${name}`);
const css = fs.readFileSync(path.join(root, 'public/fonts/fonts.css'), 'utf8');
for (const match of css.matchAll(/url\(([^)]+)\)/g)) assert(fs.existsSync(path.join(root, 'public', match[1])), `Missing local font: ${match[1]}`);
console.log(`PASS: ${preserved} original files unchanged; 20 projects; 10 roles; 8 awards; 56 skills; EN/FR parity; local assets, CV, images, and fonts.`);
