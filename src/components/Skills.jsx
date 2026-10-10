import {
  SiLangchain,
  SiLanggraph,
  SiHuggingface,
  SiGooglegemini,
  SiMeta,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiSpacy,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiPrometheus,
  SiN8N,
  SiFirebase,
  SiStreamlit,
  SiGradio,
  SiPostgresql,
  SiMongodb,
  SiQdrant,
  SiMilvus,
  SiSupabase,
  SiPandas,
  SiNumpy,
  SiPython,
  SiCplusplus,
  SiGnubash,
  SiJavascript,
  SiReact,
  SiGit,
  SiLinux,
  SiJupyter,
} from "react-icons/si";
import { useContent } from "../i18n";
import Reveal from "./Reveal";

// Explicit map keeps the bundle small (a namespace import would ship every Simple Icon).
// Add a new icon here and reference its key in profile.js.
const ICONS = {
  SiLangchain,
  SiLanggraph,
  SiHuggingface,
  SiGooglegemini,
  SiMeta,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiSpacy,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiPrometheus,
  SiN8N,
  SiFirebase,
  SiStreamlit,
  SiGradio,
  SiPostgresql,
  SiMongodb,
  SiQdrant,
  SiMilvus,
  SiSupabase,
  SiPandas,
  SiNumpy,
  SiPython,
  SiCplusplus,
  SiGnubash,
  SiJavascript,
  SiReact,
  SiGit,
  SiLinux,
  SiJupyter,
};

function Icon({ name }) {
  const Cmp = name ? ICONS[name] : null;
  return Cmp ? <Cmp aria-hidden="true" /> : null;
}

export default function Skills() {
  const { skills, ui } = useContent();
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{ui.skills.eyebrow}</p>
          <h2 id="skills-title">{ui.skills.title}</h2>
          <p>{ui.skills.sub}</p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal
              key={g.group}
              as="section"
              className="card skill-group"
              delay={i * 60}
              aria-labelledby={`skill-${i}`}
            >
              <div className="skill-group-head">
                <h3 id={`skill-${i}`}>{g.group}</h3>
                <span className="skill-count">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="skill-tags">
                {g.items.map((s) => (
                  <li className="skill-tag" key={s.name}>
                    <Icon name={s.icon} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
