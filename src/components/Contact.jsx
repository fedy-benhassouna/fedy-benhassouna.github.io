import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { useContent } from "../i18n";
import Reveal from "./Reveal";

export default function Contact() {
  const { contact, site, ui } = useContent();
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="card contact-card">
          <p className="eyebrow">{ui.contact.eyebrow}</p>
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.text}</p>

          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              <FiMail aria-hidden="true" /> {ui.contact.email}
            </a>
            <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" /> {ui.contact.linkedin}
            </a>
            <a className="btn" href={site.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> {ui.contact.github}
            </a>
            <a className="btn btn-ghost" href={site.cv} download>
              <FiDownload aria-hidden="true" /> {ui.contact.cv}
            </a>
          </div>

          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
