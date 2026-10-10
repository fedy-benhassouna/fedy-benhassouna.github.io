import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX, FiGithub } from "react-icons/fi";
import { useContent } from "../i18n";
import LangSwitch from "./LangSwitch";

export default function Nav({ theme, onToggleTheme }) {
  const { nav, site, ui } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [nav]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="container">
        <a href="#top" className="nav-brand" aria-label={`${site.name} — ${ui.nav.home}`}>
          <span className="nav-brand-dot" aria-hidden="true" />
          {site.shortName}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href ? "is-active" : ""}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LangSwitch />
          <a className="icon-btn" href={site.github} target="_blank" rel="noreferrer" aria-label={ui.nav.github}>
            <FiGithub />
          </a>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? ui.nav.toLight : ui.nav.toDark}
            aria-pressed={theme === "light"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={ui.nav.menu}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
