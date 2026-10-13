# Fedy Ben Hassouna — Portfolio

Personal site for an AI Engineer. Dark-first, single page, React + Vite, no UI framework.

## Edit content

Everything you read on the site lives in **`src/data/profile.js`** (English) and
**`src/data/profile.fr.js`** (French): hero copy, stats, skills, projects, experience, education,
awards, contact, and the `ui` labels. Both files have the same shape; keep them in sync when you
add or edit an entry. The EN/FR button in the nav switches language, the choice is saved in the
browser, and first-time visitors with a French browser get French by default.

- Add a project: push an entry into `projects` (set `featured: true` for one of the three large cards).
- Add a role: push an entry into `experience` and drop its logo in `public/logos/`.
- Add a skill icon: import it in `src/components/Skills.jsx`, add it to `ICONS`, then reference the key in `profile.js`.
- Replace the CV: overwrite `public/Fedy_Ben_Hassouna_CV_EN.pdf`.
- Update the social preview: regenerate `public/og.png` (1200×630).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview
```

## Structure

```
index.html              SEO, Open Graph, fonts, theme pre-script
src/data/profile.js     all content (English)
src/data/profile.fr.js  all content (French)
src/i18n.jsx            language context + EN/FR switch
src/styles/tokens.css   colors, type scale, spacing (dark + light themes)
src/styles/base.css     reset, layout, buttons, tags, cards, reveal
src/styles/components.css  per-section styles
src/components/         one file per section + NeuralCanvas, Typewriter, Reveal, Nav
src/hooks/              useTheme, useReducedMotion
legacy/                 previous Create-React-App version, kept for reference
```

Deploys as a static site (Vercel, Netlify, GitHub Pages). Build command `npm run build`, output `dist`.
