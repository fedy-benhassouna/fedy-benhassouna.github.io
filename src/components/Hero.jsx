import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { useContent } from "../i18n";
import NeuralCanvas from "./NeuralCanvas";
import Typewriter from "./Typewriter";
import Reveal from "./Reveal";

export default function Hero() {
  const { hero, site, ui } = useContent();
  const [first, ...rest] = site.name.split(" ");

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <NeuralCanvas />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal className="hero-status" as="p">
              <span className="hero-status-dot" aria-hidden="true" />
              {site.status}
            </Reveal>

            <div>
              <Reveal as="p" className="hero-eyebrow" delay={60}>
                {hero.eyebrow}
              </Reveal>
              <Reveal delay={120}>
                <h1 id="hero-name" className="hero-name">
                  {first} <span className="gradient-text">{rest.join(" ")}</span>
                </h1>
              </Reveal>
            </div>

            <Reveal as="p" className="hero-headline" delay={180}>
              {hero.headline}
            </Reveal>

            <Reveal delay={240}>
              <Typewriter phrases={hero.typed} />
            </Reveal>

            <Reveal as="p" className="hero-sub" delay={300}>
              {hero.sub}
            </Reveal>

            <Reveal className="hero-ctas" delay={360}>
              <a className="btn btn-primary" href="#projects">
                {ui.hero.viewProjects} <FiArrowRight />
              </a>
              <a className="btn" href={site.cv} download>
                <FiDownload /> {ui.hero.downloadCv}
              </a>
              <a className="btn btn-ghost" href="#contact">
                <FiMail /> {ui.hero.contact}
              </a>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={200}>
            <div className="hero-photo">
              <img src="/mainimage.webp" alt={site.name} width="520" height="520" fetchpriority="high" />
              <span className="hero-photo-ring" aria-hidden="true" />
            </div>
          </Reveal>
        </div>

        <Reveal as="ul" className="hero-stats" delay={440} aria-label={ui.hero.keyResults}>
          {hero.stats.map((s) => (
            <li className="hero-stat" key={s.label}>
              <strong className="gradient-text">{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
