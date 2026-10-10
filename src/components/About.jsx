import { useContent } from "../i18n";
import Reveal from "./Reveal";

export default function About() {
  const { about, site, ui } = useContent();
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{ui.about.eyebrow}</p>
          <h2 id="about-title">{about.title}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={80}>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="about-side" delay={160}>
            <div className="about-portrait">
              <img src="/portrait.png" alt={`${ui.about.portrait} ${site.name}`} width="300" height="300" loading="lazy" />
            </div>
            <dl className="about-facts">
              {about.facts.map((f) => (
                <div className="about-fact" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
