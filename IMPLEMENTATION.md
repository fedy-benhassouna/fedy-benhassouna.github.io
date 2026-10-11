# Engineering Journal — experimental implementation

Implemented only in `C:\Users\Fedy\Desktop\portfolio\Fedy_Portfolio copy`.
The original sibling project was not modified. Nothing was committed, pushed, or deployed.

## Run locally

From this directory, on Windows PowerShell:

```powershell
npm.cmd run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).
The `.cmd` form avoids PowerShell's restriction on `npm.ps1`.

```powershell
npm.cmd run build
npm.cmd run preview
node scripts/check-content.mjs
```

Dependencies were already installed. No dependency or package-lock changes were needed.
If restoring the project elsewhere without `node_modules`, run `npm.cmd ci` first.

## Recovery checkpoint

`.checkpoints/before-engineering-journal/` contains the pre-edit `src`, `public`, `legacy`,
`.github`, root HTML, package/lock files, Vite/Vercel configuration, README, and gitignore.
`manifest.json` records original file hashes. Git metadata and installed dependencies were
not duplicated. The checkpoint is local and ignored by Git.

To inspect or recover an original file, copy the corresponding file from this checkpoint
back to the same relative path **inside this experimental copy**. Do not restore into the
original sibling project. The checkpoint does not need to be extracted or downloaded.

## Changed existing files

- `src/App.jsx`: selects the new complete journal presentation.
- `src/main.jsx`: stops importing the old design CSS; those files remain intact.
- `src/hooks/useTheme.js`: updates browser theme-color values for the new palette.
- `src/i18n.jsx`: localized document descriptions and stricter saved-language validation.
- `index.html`: local fonts/preloads, initial browser color, clickable no-JavaScript CV link.
- `.gitignore`: excludes local recovery snapshots and browser QA artifacts.

## Added files

- `src/components/journal/Journal.jsx`: all page sections, case studies, accessible navigation,
  interactive HTML/SVG figures, 20-record archive, experience disclosures, recognition dialog.
- `src/components/journal/journal.css`: responsive editorial system and accessible themes.
- `src/data/journal.js`: bilingual editorial material, documented study narratives, legacy
  translations, project categories, and the existing Ready Tensor publication reference.
- `src/data/legacy-projects.json`: exact original English gallery descriptions and usable
  existing public destinations. Commented template links are excluded. Signed temporary
  destinations remain intact only in their original legacy source.
- `public/fonts/fonts.css`, eight WOFF2 subsets, and three OFL license files: locally hosted
  Source Serif 4, Inter, JetBrains Mono; no runtime Google Fonts requests.
- `scripts/check-content.mjs`: preservation hashes, bilingual counts, unique IDs, source
  descriptions, image/font/CV references, and link parity.
- `scripts/browser-check.mjs`: local Chrome DevTools QA without an added project dependency.
- `scripts/check-links.mjs`: HTTP checks for 34 supplied external destinations.
- `IMPLEMENTATION.md`: this handoff.

Generated `dist/` is rebuilt. Local screenshots, browser profile, downloaded axe checker,
and JSON reports are stored in ignored `.qa/`.

## Content preservation and behavior

The original `profile.js` and `profile.fr.js` are unchanged. All original images, CVs,
legacy files, package files, and deployment configuration remain unchanged.
The checker verifies 146 original files against the checkpoint, excluding the small set
of deliberately modified application entry/hook/HTML files.

The page contains 20 archived projects (12 current, 7 legacy-only, 1 CV-only), 10 roles,
8 awards/selections, all 56 current skills, earlier tools, biography, education, community,
and contact/CV functionality. Marketplace Operations Automation is a featured account of
the existing Marketplace Distribution role, rather than an invented legacy project.

Original descriptions and role bullets remain available through native disclosures.
New descriptions for legacy-only projects are translated into French; historical English
wording is retained separately with `lang="en"`. All current bilingual content is retained.
Theme/language preferences still use `fbh-theme` and `fbh-lang` in local storage.

Project filters distinguish documented production work, research, and experiments.
Unproven deployment is not promoted to a production claim. Figures summarize documented
systems; they are not product screenshots, live telemetry, or new evaluation evidence.

## Validation actually performed

- Production build with `npm.cmd run build`: passed. The first `npm run build` was blocked
  by PowerShell script policy; `.cmd` resolves that. Esbuild directory resolution required
  running the build outside the restricted tool sandbox.
- `node scripts/check-content.mjs`: passed.
- Local production preview: `npm.cmd run preview -- --host 127.0.0.1 --port 4173 --strictPort`.
- Headless installed Chrome, using a profile inside `.qa/`; no browser package added.
- `node scripts/browser-check.mjs`: 20 EN/FR × light/dark × viewport combinations at
  1440, 960, 768, 390, and 320 CSS pixels. No document overflow in those combinations.
- Expanded content checked at desktop/tablet/mobile widths; all four language/theme
  combinations also checked expanded at 1440 and 390px.
- Language/theme control state and persistence, menu activation/closing/Escape/focus,
  case disclosures, diagram stage buttons, archive filtering/search, modal Tab containment,
  Escape/focus restoration, reduced-motion behavior, anchors, unique IDs, local image/CV
  HTTP responses, and absence of browser exceptions/HTTP failures.
- axe-core 4.10.3 WCAG 2 A/AA and 2.1 AA checks with all disclosures expanded in eight
  language/theme/desktop-mobile combinations: no automated violations.
- axe flagged the three decorative SVG node numbers for manual contrast review because
  it could not infer their circle backgrounds. Their four selected/unselected light/dark
  color combinations were separately checked against the 4.5:1 text threshold and passed.
  The SVG is hidden from assistive technology; the equivalent stage buttons supply labels.
- Screenshots of both language/theme combinations and the featured work, archive, about,
  recognition, and contact sections were inspected.
- `node scripts/check-links.mjs`: 34 external destinations checked; 32 successful HTTP
  responses, no 404/410 responses. TAIS returned 503; the LinkedIn profile returned 999.
  Those endpoints remain unverified. HTTP success alone does not verify media permissions
  or the correctness of remote content.

Initial QA found a modal Tab containment issue and inadequate muted-label contrast on the
inset paper surface. Both were corrected. The light muted token is now `#5D6558`, a small
accessibility adjustment to the approved palette. Text annotations are at least 12px.

This is automated Chromium QA plus visual inspection, not a complete manual screen-reader,
Safari/Firefox, or real-device audit. No active-project test/lint script existed; meaningful
content and browser checks were added without changing package dependencies.

## Remaining content decisions (not silently corrected)

1. Both preserved CV files are byte-identical and older than the current site. They omit
   recent roles and use different degree wording, role dates, Seekmake location, and
   a different tree-detection architecture (Mask R-CNN vs DeepForest).
2. The visible CV email is `fedy.benhassouna@insat.ucar.tn`, but its PDF hyperlink targets
   `mailto:name@gmail.com`. Legacy HTML uses `insat.uar.tn`; the active website retains
   the current `insat.ucar.tn` contact. The CV and historical records were not rewritten.
3. Metrics remain as supplied. Baselines, protocols, sample sizes, and publication evidence
   for the featured results need owner confirmation before any stronger claim is made.
4. INSAT GPT's original `1 / 1,400+` card wording is preserved, without expanding it into
   a claim of being the sole winner. The older “every project has a number” biography
   remains unchanged even where an archive result is qualitative.
5. The three legacy signed demos need durable URLs. No substitute screenshots or demos
   were invented. Their original URLs remain in untouched legacy files, not copied into
   the active bundle. Usable supplied repository links remain available.
6. TAIS availability and the LinkedIn profile could not be confirmed by automated HTTP
   checks (503/999). URLs were preserved.
7. Existing social-preview image and canonical/deployment settings are preserved. The
   original OG artwork still reflects the older visual style; it was not overwritten.
8. New French editorial translations should receive an owner language review. Original
   French records have not been edited.

## Browser QA reproduction

The browser checker expects the preview at `127.0.0.1:4173` and an already running Chrome
DevTools endpoint at `127.0.0.1:9223`. Its browser profile and output should remain inside
`.qa/`. The optional accessibility phase uses `.qa/axe.min.js`; the recorded run included
that checker. Do not expose the debugging endpoint publicly.
