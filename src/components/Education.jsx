import { useEffect, useState } from "react";
import { FiX, FiMaximize2 } from "react-icons/fi";
import { useContent } from "../i18n";
import Reveal from "./Reveal";

function Lightbox({ award, onClose }) {
  const { ui } = useContent();
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={award.event} onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn lightbox-close" onClick={onClose} aria-label={ui.education.close} autoFocus>
          <FiX />
        </button>
        <img src={award.image} alt={`${award.event} — ${award.what}`} />
        <div className="lightbox-caption">
          <span className={`award-place ${/^1/.test(award.place) ? "is-gold" : ""}`}>{award.place}</span>
          <div>
            <strong>{award.event}</strong>
            <p>{award.what}</p>
            {award.detail && <p className="lightbox-detail">{award.detail}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const { education, ui } = useContent();
  const { degree, awards, community } = education;
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{ui.education.eyebrow}</p>
          <h2 id="education-title">{ui.education.title}</h2>
        </Reveal>

        <Reveal as="article" className="card edu-card edu-degree-card" delay={60}>
          <div className="edu-degree">
            <span className="mono" style={{ color: "var(--text-3)" }}>
              {ui.education.education}
            </span>
            <strong>{degree.program}</strong>
            <span>{degree.school}</span>
            <span className="mono" style={{ marginTop: "0.35rem", color: "var(--text-3)" }}>
              {degree.location} · {degree.period}
            </span>
          </div>
          <div className="edu-degree">
            <span className="mono" style={{ color: "var(--text-3)" }}>
              {ui.education.community}
            </span>
            <ul className="edu-list">
              {community.map((c) => (
                <li key={c}>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <ul className="awards-grid" aria-label={ui.education.awards}>
          {awards.map((a, i) => (
            <Reveal as="li" key={`${a.event}-${a.what}`} delay={(i % 4) * 60}>
              <button className="card award-card" onClick={() => setOpen(a)} aria-label={`${ui.education.openPhoto}: ${a.event}`}>
                <div className="award-media">
                  <img src={a.image} alt="" loading="lazy" />
                  <span className="award-zoom" aria-hidden="true">
                    <FiMaximize2 />
                  </span>
                </div>
                <div className="award-body">
                  <div className="award-head">
                    <span className={`award-place ${/^1/.test(a.place) ? "is-gold" : ""}`}>{a.place}</span>
                    <strong>{a.event}</strong>
                  </div>
                  <span className="award-what">{a.what}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {open && <Lightbox award={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
