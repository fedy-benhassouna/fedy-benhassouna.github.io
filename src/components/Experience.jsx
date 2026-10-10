import { useContent } from "../i18n";
import Reveal from "./Reveal";
import Flag from "./Flag";

export default function Experience() {
  const { experience, ui } = useContent();
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{ui.experience.eyebrow}</p>
          <h2 id="experience-title">{ui.experience.title(experience.length)}</h2>
          <p>{ui.experience.sub}</p>
        </Reveal>

        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" className="tl-item" key={`${e.company}-${e.start}`} delay={Math.min(i, 3) * 60}>
              <article className="card tl-card">
                <div className="tl-head">
                  <div className="tl-logo">
                    <img src={e.logo} alt="" width="44" height="44" loading="lazy" />
                  </div>
                  <div className="tl-title">
                    <h3>{e.role}</h3>
                    <p className="tl-company-line">
                      {e.country && <Flag code={e.country} size={18} />}
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noreferrer">
                          {e.company} · {e.location}
                        </a>
                      ) : (
                        <span className="tl-company">
                          {e.company} · {e.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="tl-meta">
                    <span>
                      {e.start} — {e.end}
                    </span>
                    <span>{e.type}</span>
                  </div>
                </div>
                <ul className="tl-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
