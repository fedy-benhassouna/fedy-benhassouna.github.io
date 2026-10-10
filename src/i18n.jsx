import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as en from "./data/profile";
import * as fr from "./data/profile.fr";

const KEY = "fbh-lang";
const LANGS = { en, fr };

function readInitial() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved in LANGS) return saved;
  } catch {
    /* storage unavailable */
  }
  return (navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}

const Ctx = createContext(null);

/** Provides the active language's content and a setter. Persists the choice. */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "fr" ? "Fedy Ben Hassouna — Ingénieur IA" : "Fedy Ben Hassouna — AI Engineer";
    try {
      localStorage.setItem(KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle: () => setLang((l) => (l === "en" ? "fr" : "en")), ...LANGS[lang] }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Returns { lang, setLang, toggle, site, hero, about, skills, projects, experience, education, contact, nav, ui }. */
export function useContent() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContent must be used inside <LanguageProvider>");
  return ctx;
}
