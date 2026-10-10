import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { useContent } from "../i18n";
import Reveal from "./Reveal";

function Links({ links }) {
  if (!links?.length) return null;
  return (
    <div className="project-links">
      {links.map((l) => (
        <a key={l.href} className="project-link" href={l.href} target="_blank" rel="noreferrer">
          {l.label === "GitHub" ? <FiGithub aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />}
          {l.label}
        </a>
      ))}
    </div>
  );
}

function Stack({ stack }) {
  const { ui } = useContent();
  return (
    <ul className="project-stack" aria-label={ui.projects.stack}>
      {stack.map((s) => (
        <li className="tag" key={s}>
          {s}
        </li>
      ))}
    </ul>
  );
}

function Featured({ p, i }) {
  const { ui } = useContent();
  return (
    <Reveal as="article" className="card project-feature" delay={i * 90}>
      <div className="project-feature-glow" aria-hidden="true" />
      <div className="project-feature-top">
        <div className="project-feature-meta">
          <p className="project-index">{ui.projects.featured} · 0{i + 1}</p>
          <div className="project-result">
            <strong className="gradient-text">{p.result.value}</strong>
            <span>{p.result.label}</span>
          </div>
        </div>
        <div>
          <h3>{p.title}</h3>
          <p className="project-tagline">{p.tagline}</p>
        </div>
      </div>

      <div className="project-body">
        <div className="project-field">
          <span className="mono">{ui.projects.problem}</span>
          <p>{p.problem}</p>
        </div>
        <div className="project-field">
          <span className="mono">{ui.projects.built}</span>
          <p>{p.built}</p>
        </div>
        {p.extra?.length > 0 && (
          <ul className="project-extra" aria-label={ui.projects.moreResults}>
            {p.extra.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-foot">
        <Stack stack={p.stack} />
        <Links links={p.links} />
      </div>
    </Reveal>
  );
}

function Card({ p, i }) {
  return (
    <Reveal as="article" className="card project-card" delay={(i % 3) * 70}>
      <div className="project-card-top">
        <h3>{p.title}</h3>
        <div className="project-result">
          <strong className="gradient-text">{p.result.value}</strong>
          <span>{p.result.label}</span>
        </div>
      </div>
      <div className="project-body">
        <p className="project-problem">{p.problem}</p>
        <p>{p.built}</p>
      </div>
      <div className="project-foot">
        <Stack stack={p.stack} />
        <Links links={p.links} />
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { projects, site, ui } = useContent();
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{ui.projects.eyebrow}</p>
          <h2 id="projects-title">{ui.projects.title}</h2>
          <p>{ui.projects.sub}</p>
        </Reveal>

        <div className="projects-featured">
          {featured.map((p, i) => (
            <Featured key={p.title} p={p} i={i} />
          ))}
        </div>

        <div className="projects-grid">
          {rest.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>

        <Reveal className="projects-more">
          <a className="btn" href={site.github} target="_blank" rel="noreferrer">
            {ui.projects.more} <FiArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
