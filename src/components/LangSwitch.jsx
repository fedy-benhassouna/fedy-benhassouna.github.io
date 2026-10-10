import { useContent } from "../i18n";
import Flag from "./Flag";

const OPTIONS = [
  { code: "en", flag: "gb", label: "EN", name: "English" },
  { code: "fr", flag: "fr", label: "FR", name: "Français" },
];

/** Pill switch with two flags; the highlighted thumb slides to the active language. */
export default function LangSwitch() {
  const { lang, setLang } = useContent();
  const index = OPTIONS.findIndex((o) => o.code === lang);

  return (
    <div className="lang-switch" role="radiogroup" aria-label="Language" data-active={index}>
      <span className="lang-thumb" aria-hidden="true" />
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          role="radio"
          aria-checked={lang === o.code}
          className={`lang-opt ${lang === o.code ? "is-active" : ""}`}
          onClick={() => setLang(o.code)}
          title={o.name}
        >
          <Flag code={o.flag} name={o.name} size={16} />
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  );
}
