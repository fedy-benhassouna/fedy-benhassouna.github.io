import { useContent } from "../i18n";
import Reveal from "./Reveal";
import WorldMap from "./WorldMap";

export default function About() {
  const { about, site, ui, workedWith } = useContent();

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
          </Reveal>
        </div>

        <Reveal className="section-head worked-head" delay={120}>
          <h2>{ui.about.workedWith}</h2>
        </Reveal>
      </div>

      {/* Full-bleed map; the logo grid sits in the Atlantic, between the Americas and Europe/Africa. */}
      <Reveal className="map-bleed" delay={160}>
        <WorldMap />
        <ul className="worked-logos" aria-label={ui.about.workedWith}>
          {workedWith.map((c) => (
            <li key={c.name}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className={`worked-logo ${c.dark ? "is-dark" : ""}`}
                title={c.name}
                aria-label={c.name}
              >
                <img src={c.logo} alt="" loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="container">
      </div>
    </section>
  );
}
