// Regenerates public/Tristan_Jessup_Resume.pdf from src/data/resume.json,
// the same data the /experience page uses, so the two cannot drift.
// Needs a local Chrome/Chromium: CHROME=/path/to/chrome npm run resume:pdf
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const r = JSON.parse(readFileSync(join(root, 'src/data/resume.json'), 'utf8'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(r.name)} — Resume</title>
<style>
  @page { size: Letter; margin: 0.45in 0.55in; }
  body { font-family: 'Source Serif 4', Georgia, serif; color: #111; font-size: 9.6pt; line-height: 1.32; margin: 0; }
  h1 { font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 20pt; margin: 0; letter-spacing: -0.5px; }
  .headline { font-size: 11pt; margin: 2px 0 4px; }
  .contact { font-family: 'Fira Code', monospace; font-size: 8.3pt; color: #333; }
  h2 { font-family: 'Fira Code', monospace; font-size: 9pt; text-transform: uppercase; letter-spacing: 1px; color: #0a7a2a;
       border-bottom: 1px solid #bbb; padding-bottom: 2px; margin: 10px 0 5px; }
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .t { font-weight: 700; } .o { color: #333; } .p { font-family: 'Fira Code', monospace; font-size: 8.3pt; color: #555; white-space: nowrap; }
  .link { font-family: 'Fira Code', monospace; font-size: 8pt; color: #0a7a2a; }
  ul { margin: 3px 0 7px; padding-left: 16px; } li { margin: 1px 0; }
  .item { margin-bottom: 6px; } p { margin: 3px 0; }
  .skills div { margin: 2px 0; } .skills b { font-family: 'Fira Code', monospace; font-size: 8.5pt; }
</style></head><body>
<h1>${esc(r.name)}</h1>
<div class="headline">${esc(r.headline)}</div>
<div class="contact">${esc(r.location)} · ${esc(r.email)} · ${esc(r.site)} · ${esc(r.github)} · ${esc(r.linkedin)}</div>
<h2>Summary</h2><p>${esc(r.summary)}</p>
<h2>Experience</h2>
${r.experience.map((j) => `<div class="item"><div class="row"><span><span class="t">${esc(j.title)}</span> · <span class="o">${esc(j.org)}</span></span><span class="p">${esc(j.period)}</span></div>
<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div>`).join('')}
<div class="item"><span class="t">Earlier roles:</span> ${r.earlierRoles.map((e) => `${esc(e.title)}, ${esc(e.org)}`).join(' · ')}</div>
<h2>Selected AI work</h2>
${r.selectedWork.map((w) => `<div class="item"><div class="row"><span class="t">${esc(w.title)}</span>${w.link ? `<span class="link">${esc(w.link)}</span>` : ''}</div><p>${esc(w.detail)}</p></div>`).join('')}
<h2>Certifications</h2><p>${r.certifications.map(esc).join(' · ')}</p>
<h2>Education</h2>
${r.education.map((e) => `<div class="row"><span><span class="t">${esc(e.degree)}</span> · ${esc(e.school)}</span><span class="p">${esc(e.period)}</span></div>`).join('')}
<h2>Skills</h2><div class="skills">${Object.entries(r.skills).map(([k, v]) => `<div><b>${esc(k)}:</b> ${v.map(esc).join(', ')}</div>`).join('')}</div>
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), 'resume-'));
const htmlPath = join(dir, 'resume.html');
writeFileSync(htmlPath, html);
const out = join(root, 'public/Tristan_Jessup_Resume.pdf');
const chrome = process.env.CHROME || 'google-chrome';
execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer', `--print-to-pdf=${out}`, `file://${htmlPath}`], { stdio: 'inherit' });
console.log(`wrote ${out}`);
