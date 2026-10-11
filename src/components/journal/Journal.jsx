import { useEffect, useMemo, useRef, useState } from 'react';
import { FiArrowUpRight, FiArrowRight, FiArrowUp, FiDownload, FiSun, FiMoon, FiPlus, FiMinus, FiX, FiMenu, FiSearch } from 'react-icons/fi';
import { useContent } from '../../i18n';
import { useTheme } from '../../hooks/useTheme';
import { journalCopy, projectMeta, additionalProjects, legacySkills, evidenceLinks } from '../../data/journal';
import legacy from '../../data/legacy-projects.json';
import './journal.css';

// Vite fingerprints existing images. Original files remain in the archive.
const imageModules = import.meta.glob([
  '../../../legacy/src/Assets/Projects/*.png',
  '!../../../legacy/src/Assets/Projects/blog.png',
  '!../../../legacy/src/Assets/Projects/codeEditor.png',
  '!../../../legacy/src/Assets/Projects/emotion.png',
  '!../../../legacy/src/Assets/Projects/leaf.png',
  '!../../../legacy/src/Assets/Projects/PP.png',
  '!../../../legacy/src/Assets/Projects/suicide.png',
], { eager: true, query: '?url', import: 'default' });
const projectImage = name => name ? imageModules[`../../../legacy/src/Assets/Projects/${name}`] : undefined;
const legacyMatches = ['Pump Watch', null, null, 'GAIA Agent', 'Knowledge Graph-Enhanced RAG System', 'INSAT GPT', 'Stockify: AI Stock Investment Platform', null, 'Invoice AI Processor', 'Protest Banner Interpreter', null, null];
const navTargets = ['#projects', '#experience', '#about', '#contact'];

function External({ href, children, className = '' }) {
  return <a className={`text-link ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}<FiArrowUpRight aria-hidden="true" /></a>;
}
function SectionHead({ label, title, intro }) {
  return <header className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{intro && <p className="section-intro">{intro}</p>}</header>;
}

function Nav({ copy, theme, toggleTheme }) {
  const { lang, setLang, site } = useContent();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggleRef = useRef(null);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const close = () => setOpen(false);
    const key = e => { if (e.key === 'Escape' && open) { setOpen(false); toggleRef.current?.focus(); } };
    mq.addEventListener('change', close); document.addEventListener('keydown', key);
    return () => { mq.removeEventListener('change', close); document.removeEventListener('keydown', key); };
  }, [open]);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
    }, { rootMargin: '-15% 0px -65% 0px' });
    navTargets.forEach(h => { const el = document.querySelector(h); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const links = navTargets.map((href, i) => <a href={href} key={href} aria-current={active === href ? 'location' : undefined} onClick={() => setOpen(false)}>{copy.nav[i]}</a>);
  return <header className="masthead"><div className="container masthead-inner">
    <a className="wordmark" href="#top" aria-label={site.name}><span className="monogram" aria-hidden="true">f.</span><span className="wordmark-name">Fedy Ben Hassouna<span>{copy.publication}</span></span></a>
    <nav className="desktop-nav" aria-label={copy.primaryNav}>{links}</nav>
    <div className="nav-tools"><div className="language-switch" role="group" aria-label={copy.language}>{['en', 'fr'].map(l => <button type="button" key={l} lang={l} aria-label={l === 'en' ? 'English' : 'Français'} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}</div>
    <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? copy.light : copy.dark}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>
    <button ref={toggleRef} className="icon-button menu-toggle" type="button" aria-expanded={open} aria-controls="journal-mobile-nav" aria-label={open ? copy.close : copy.menu} onClick={() => setOpen(v => !v)}>{open ? <FiX /> : <FiMenu />}</button></div>
  </div><nav className="mobile-nav container" id="journal-mobile-nav" aria-label={copy.primaryNav} hidden={!open}>{links}</nav></header>;
}

function Hero({ copy }) {
  const { site } = useContent();
  return <section className="journal-hero container" id="top" aria-labelledby="hero-title">
    <div className="hero-meta"><span className="eyebrow">{copy.specialty}</span><span className="small-label hero-edition">{copy.edition}</span></div>
    <div className="hero-spread"><div className="hero-writing"><p className="hero-byline">{copy.introLabel}</p><h1 id="hero-title">{copy.heroStart}<br /><em>{copy.heroEmphasis}</em></h1><p className="hero-description">{copy.heroDescription}</p>
      <div className="hero-actions"><a className="button-primary" href="#projects">{copy.explore}<FiArrowRight aria-hidden="true" /></a><a className="text-link" href={site.cv} download>{copy.cv}<FiDownload aria-hidden="true" /></a></div><p className="availability"><span aria-hidden="true" />{site.status}</p>
    </div><figure className="hero-portrait"><div className="portrait-frame"><img src="/mainimage.webp" width="941" height="935" alt={copy.portrait} fetchPriority="high" /><span className="portrait-mark" aria-hidden="true">f.</span></div><figcaption><span className="small-label">{copy.portraitCaption}</span><span aria-hidden="true">↗</span></figcaption></figure></div>
    <div className="hero-index"><p>{copy.heroNote}</p><ol>{copy.studies.map(s => <li key={s.id}><a href={`#study-${s.id}`}><span className="small-label">{s.number}</span>{s.shortTitle}<FiArrowUpRight aria-hidden="true" /></a></li>)}</ol></div>
  </section>;
}

function SystemFigure({ study, copy, graph = false }) {
  const [selected, setSelected] = useState(0);
  return <figure className={`system-figure ${graph ? 'graph-figure' : ''}`}><div className="figure-top"><span className="small-label">FIG. {study.number}</span><span className="small-label">{study.flowLabel}</span></div>
    {graph && <svg className="knowledge-graph" viewBox="0 0 620 235" aria-hidden="true"><path d="M118 135 L310 60 L502 135 L310 193 Z M310 60 L310 193 M118 135 L502 135" /><circle cx="310" cy="135" r="79" className="graph-orbit" />{[[118,135],[310,60],[502,135]].map(([cx,cy], i) => <g key={i} className={selected === i ? 'selected-node' : ''}><circle cx={cx} cy={cy} r="29"/><text x={cx} y={cy + 5}>{String(i + 1).padStart(2,'0')}</text></g>)}<circle cx="310" cy="193" r="5" className="graph-dot" /></svg>}
    <ol className="flow-stages">{study.stages.map(([name, detail], i) => <li key={name}><button type="button" aria-pressed={selected === i} aria-controls={`figure-note-${study.id}`} onClick={() => setSelected(i)}><span className="stage-number">0{i + 1}</span><strong>{name}</strong><span>{detail}</span></button>{!graph && i < study.stages.length - 1 && <FiArrowRight className="flow-arrow" aria-hidden="true" />}</li>)}</ol>
    <p className="figure-instruction">{copy.inspect}</p><p className="stage-explanation" id={`figure-note-${study.id}`} aria-live="polite">{study.stages[selected][2]}</p>
    {study.mapping && <div className="secondary-flow"><span className="small-label">{study.mapping}</span><ol>{study.mappingSteps.map(s => <li key={s}>{s}</li>)}</ol></div>}
    <figcaption>{graph ? study.graphCaption : copy.figureNote}</figcaption></figure>;
}

function CaseNotes({ study, copy, role, project }) {
  return <details className="case-notes" id={`notes-${study.id}`}><summary><span>{copy.readStudy}</span><FiPlus className="plus" aria-hidden="true" /><FiMinus className="minus" aria-hidden="true" /></summary><div className="case-notes-body">
    <div className="notes-context"><p className="small-label">{copy.role}</p><p>{role.role} · {role.company}</p><p>{role.start} — {role.end}</p></div>
    <div className="notes-grid"><div><h4>{copy.problem}</h4><p>{study.problem}</p><h4>{copy.decisions}</h4><ol>{study.decisions.map(d => <li key={d}>{d}</li>)}</ol></div><div><h4>{copy.outcomes}</h4><ul>{study.results.map(r => <li key={r}>{r}</li>)}</ul><p className="evidence-note">{copy.reported}</p>{project?.links?.map(l => <External key={l.href} href={l.href}>{l.label}</External>)}</div></div>
    {study.id === 'pump-watch' && <SystemFigure study={study} copy={copy} />}
    <a className="text-link" href={`#role-${study.id === 'marketplace' ? 1 : study.id === 'pump-watch' ? 4 : 3}`}>{copy.fullRecord}<FiArrowRight aria-hidden="true" /></a></div></details>;
}

function Featured({ copy, onImage }) {
  const { experience, projects } = useContent();
  return <section className="journal-section container" id="projects" aria-label={copy.selectedTitle}><SectionHead label={copy.selectedLabel} title={copy.selectedTitle} intro={copy.selectedIntro} />
    {copy.studies.map((s, i) => <article className={`case-study case-${s.id}`} id={`study-${s.id}`} key={s.id}><div className="case-running-head"><span className="case-number">{s.number}</span><span className="small-label">{s.org}</span><span className="category-label">{copy[s.category]}</span></div>
      <div className="case-layout"><div className="case-writing"><p className="eyebrow">{s.kicker}</p><h3>{s.title}</h3><p className="case-description">{s.description}</p><div className="case-metrics"><div><strong>{s.metric}</strong><span>{s.metricLabel}</span></div><div><strong>{s.secondMetric}</strong><span>{s.secondLabel}</span></div></div></div>
      <div className="case-visual">{i === 1 ? <figure className="pump-photo"><button type="button" className="photo-button" aria-label={`${copy.openPhoto}: Pump Watch`} onClick={() => onImage({ src: '/awards/pumpwatch.webp', title: 'Pump Watch / Hack for Good 3', caption: s.photoCaption })}><img src="/awards/pumpwatch.webp" alt={s.photoCaption} width="1400" height="939" loading="lazy" /><span className="photo-action"><FiPlus aria-hidden="true" /></span></button></figure> : <SystemFigure study={s} copy={copy} graph={i === 2} />}</div></div>
      <CaseNotes study={s} copy={copy} role={experience[i === 0 ? 1 : i === 1 ? 4 : 3]} project={i === 1 ? projects[0] : i === 2 ? projects[2] : null} /></article>)}
  </section>;
}

function ProjectArchive({ copy }) {
  const { lang, projects } = useContent();
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const records = useMemo(() => [
    ...projects.map((p, i) => ({ ...p, id: projectMeta[i][0], category: projectMeta[i][1], image: projectMeta[i][2], links: [...p.links, ...(evidenceLinks[projectMeta[i][0]] || [])], older: legacy.find(l => l.title === legacyMatches[i]) })),
    ...additionalProjects.map(p => { const old = legacy.find(l => l.title === p.legacy); return { ...p, category: 'experimental', title: lang === 'fr' ? p.titleFr || p.legacy : p.title || p.legacy, built: lang === 'fr' ? p.fr : old?.description || p.en, links: old?.links || p.links, older: old, problem: '' }; }),
  ], [projects, lang]);
  const normalized = query.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
  const visible = records.filter(p => (filter === 'all' || p.category === filter) && `${p.title} ${p.problem || ''} ${p.built} ${p.stack.join(' ')}`.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes(normalized));
  useEffect(() => {
    const revealHash = () => {
      if (!location.hash.startsWith('#project-')) return;
      setFilter('all'); setQuery('');
      requestAnimationFrame(() => { let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; } const el = document.getElementById(id); if (el?.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); } });
    };
    revealHash(); window.addEventListener('hashchange', revealHash);
    return () => window.removeEventListener('hashchange', revealHash);
  }, []);
  return <section className="archive-section journal-section" id="archive" aria-label={copy.archiveTitle}><div className="container"><SectionHead label={copy.archiveLabel} title={copy.archiveTitle} intro={copy.archiveIntro} />
    <div className="archive-toolbar"><div className="archive-filters" role="group" aria-label={copy.archiveTitle}>{['all','production','research','experimental'].map(f => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{copy[f]}<span>{f === 'all' ? records.length : records.filter(p => p.category === f).length}</span></button>)}</div><label className="archive-search"><FiSearch aria-hidden="true" /><span className="sr-only">{copy.search}</span><input type="search" placeholder={copy.search} value={query} onChange={e => setQuery(e.target.value)} /></label></div>
    <p className="archive-count small-label" role="status">{String(visible.length).padStart(2,'0')} / {records.length} {copy.results}</p><div className="project-index">{visible.map(p => <details className="archive-record" id={`project-${p.id}`} key={p.id}><summary><span className="archive-number small-label">{String(records.indexOf(p) + 1).padStart(2,'0')}</span><span className="archive-title">{p.title}</span><span className="archive-category small-label">{copy[p.category]}</span><FiPlus className="plus" aria-hidden="true" /><FiMinus className="minus" aria-hidden="true" /></summary><div className={`archive-body ${p.image ? 'has-image' : ''}`}>
      {p.image && <img src={projectImage(p.image)} alt={p.title} loading="lazy" width="625" height="398" />}
      <div>{p.tagline && <p className="archive-tagline">{p.tagline}</p>}{p.problem && <p>{p.problem}</p>}<p>{p.built}</p>{p.result && <p className="archive-result"><strong>{p.result.value}</strong> {p.result.label}</p>}{p.extra && <ul className="result-list">{p.extra.map(e => <li key={e}>{e}</li>)}</ul>}
        <ul className="technology-list" aria-label={copy.stack}>{p.stack.map(s => <li key={s}>{s}</li>)}</ul><div className="project-destinations">{p.links?.length ? p.links.map(l => <External key={l.href} href={l.href}>{l.label === 'Demo' && lang === 'fr' ? 'Démo' : l.label}</External>) : <p className="no-link">{copy.noLink}</p>}</div>
        {p.older && <details className="source-note"><summary>{copy.sourceNotes}</summary><p lang="en">{p.older.description}</p>{p.older.hasSignedDemo && <p>{copy.signed}</p>}</details>}
      </div></div></details>)}</div>{!visible.length && <div className="empty-results"><p>{copy.none}</p><button className="text-link" type="button" onClick={() => { setQuery(''); setFilter('all'); }}>{copy.reset}<FiArrowRight aria-hidden="true" /></button></div>}
  </div></section>;
}

function Experience({ copy }) {
  const { experience } = useContent();
  return <section className="journal-section container experience-section" id="experience" aria-label={copy.experienceTitle}><SectionHead label={copy.experienceLabel} title={copy.experienceTitle} intro={copy.experienceIntro} /><ol className="experience-ledger">{experience.map((e, i) => <li id={`role-${i}`} key={e.company}>
    <div className="role-date small-label"><span>{e.start}</span><span>— {e.end}</span></div><div className="role-main"><div className="role-heading"><div className="role-identity"><h3><External href={e.url}>{e.company}</External></h3><p className="role-title">{e.role}</p><p className="role-context">{e.location} · {e.type}</p></div><div className="role-logo"><img src={e.logo} alt="" width="144" height="96" loading="lazy" /></div></div><details className="role-details"><summary>{copy.contributions}<FiPlus className="plus" aria-hidden="true" /><FiMinus className="minus" aria-hidden="true" /></summary><ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul></details></div>
  </li>)}</ol></section>;
}

function About({ copy }) {
  const { about, site, hero, education } = useContent();
  return <section className="journal-section container" id="about" aria-label={copy.aboutTitle}><SectionHead label={copy.aboutLabel} title={copy.aboutTitle} /><div className="about-spread"><aside className="about-marginalia"><div className="about-image"><img src="/portrait.png" alt={site.name} width="500" height="500" loading="lazy" /></div><dl>{about.facts.map(f => <div key={f.k}><dt className="small-label">{f.k}</dt><dd>{f.v}</dd></div>)}</dl></aside><div className="biography"><p className="eyebrow">{copy.bioLabel}</p><h3>{about.title}</h3>{about.paragraphs.map(p => <p key={p}>{p}</p>)}
    <details className="source-note"><summary>{copy.originalPosition}</summary><h4>{hero.headline}</h4><p>{hero.sub}</p><ul>{hero.typed.map(p => <li key={p}>{p}</li>)}</ul><dl className="original-stats">{hero.stats.map(s => <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}</dl></details>
    <div className="education-block" id="education"><div><h4 className="eyebrow">{copy.education}</h4><p className="degree-title">{education.degree.program}</p><p>{education.degree.school}</p><p className="small-label">{education.degree.location} · {education.degree.period}</p></div><div><h4 className="eyebrow">{copy.community}</h4><ul>{education.community.map(c => <li key={c}>{c}</li>)}</ul><div className="community-links"><External href="https://nrw.ieee.tn/">National Robotics Weekend</External><External href="https://dataoverflow.tn/">DataOverflow</External></div></div></div>
  </div></div></section>;
}

function Skills({ copy }) {
  const { skills } = useContent();
  return <section className="skills-section journal-section" id="skills" aria-label={copy.skillsTitle}><div className="container"><SectionHead label={copy.skillsLabel} title={copy.skillsTitle} intro={copy.skillsIntro} /><div className="capabilities">{skills.map((group, i) => <div className="capability" key={group.group}><span className="small-label">0{i + 1}</span><h3>{group.group}</h3><ul>{group.items.map(s => <li key={s.name}>{s.name}</li>)}</ul></div>)}</div><details className="source-note earlier-tools"><summary>{copy.earlierTools}</summary><ul className="technology-list">{legacySkills.map(s => <li key={s}>{s}</li>)}</ul></details></div></section>;
}

function Recognition({ copy, onImage }) {
  const { education } = useContent();
  const selected = [0, 1, 5];
  const show = a => onImage({ src: a.image, title: a.event, caption: `${a.place} · ${a.what}`, detail: a.detail });
  return <section className="journal-section container" id="recognition" aria-label={copy.recognitionTitle}><SectionHead label={copy.recognitionLabel} title={copy.recognitionTitle} intro={copy.recognitionIntro} /><div className="recognition-spread">{selected.map((index, i) => { const a = education.awards[index]; return <figure key={a.event}><button type="button" className="photo-button" aria-label={`${copy.openPhoto}: ${a.event}`} onClick={() => show(a)}><img src={a.image} alt={a.event} width="700" height="470" loading="lazy" /><span className="photo-action"><FiPlus aria-hidden="true" /></span></button><figcaption><span className="small-label">0{i + 1} / {a.place}</span><strong>{a.event}</strong><span>{a.what}</span></figcaption></figure>; })}</div><h3 className="recognition-list-label small-label">{copy.allRecognition}</h3><ol className="recognition-list">{education.awards.map(a => <li key={a.event}><button type="button" onClick={() => show(a)} aria-label={`${copy.openPhoto}: ${a.event}`}><span className="recognition-place">{a.place}</span><span><strong>{a.event}</strong><span>{a.what}</span></span><FiArrowUpRight aria-hidden="true" /></button></li>)}</ol></section>;
}

function Contact({ copy }) {
  const { site, contact } = useContent();
  return <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container"><p className="eyebrow">{copy.contactLabel}</p><div className="contact-spread"><div><h2 id="contact-title">{copy.contactStart}<br /><em>{copy.contactEnd}</em></h2><p>{contact.text}</p><a className="contact-address" href={`mailto:${site.email}`}>{site.email}<FiArrowUpRight aria-hidden="true" /></a></div><aside><p className="small-label">{site.status}</p><External href={site.linkedin}>LinkedIn</External><External href={site.github}>GitHub</External><a className="text-link" href={site.cv} download>{copy.cv}<FiDownload aria-hidden="true" /></a></aside></div><footer className="journal-footer"><span>© {new Date().getFullYear()} {site.name}</span><span>{copy.footer}</span><a className="text-link" href="#top">{copy.back}<FiArrowUp aria-hidden="true" /></a></footer></div></section>;
}

function ImageDialog({ image, onClose, copy }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!image) return;
    const dialog = ref.current, prior = document.activeElement, previousOverflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; if (prior?.isConnected) prior.focus(); };
  }, [image]);
  if (!image) return null;
  const containFocus = e => {
    if (e.key !== 'Tab') return;
    const nodes = [...ref.current.querySelectorAll('button, a[href], input, [tabindex="0"]')].filter(n => !n.disabled && n.getClientRects().length);
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (!nodes.length) { e.preventDefault(); return; }
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  return <dialog ref={ref} className="image-dialog" aria-labelledby="image-dialog-title" onKeyDown={containFocus} onCancel={onClose} onClick={e => { if (e.target === ref.current) onClose(); }}><div className="dialog-content"><button className="icon-button dialog-close" type="button" onClick={onClose} aria-label={copy.close}><FiX /></button><img src={image.src} alt={image.title} /><div className="dialog-caption"><h2 id="image-dialog-title">{image.title}</h2><p>{image.caption}</p>{image.detail && <p>{image.detail}</p>}</div></div></dialog>;
}

export default function Journal() {
  const { lang } = useContent();
  const { theme, toggle } = useTheme();
  const [image, setImage] = useState(null);
  const copy = journalCopy[lang];
  useEffect(() => { setImage(null); }, [lang]);
  useEffect(() => {
    const handleHash = () => {
      let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (target?.tagName === 'DETAILS') target.open = true;
      if (id.startsWith('role-')) target?.querySelector('details')?.setAttribute('open', '');
    };
    handleHash(); window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  return <><a className="skip-link" href="#main-content">{copy.skip}</a><Nav copy={copy} theme={theme} toggleTheme={toggle} /><main id="main-content" tabIndex="-1"><Hero copy={copy} /><Featured copy={copy} onImage={setImage} /><ProjectArchive copy={copy} /><Experience copy={copy} /><About copy={copy} /><Skills copy={copy} /><Recognition copy={copy} onImage={setImage} /><Contact copy={copy} /></main><ImageDialog image={image} onClose={() => setImage(null)} copy={copy} /></>;
}
