import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/** Types and erases each phrase in turn. Shows the first phrase statically under reduced motion. */
export default function Typewriter({ phrases, typeMs = 42, eraseMs = 22, holdMs = 1800 }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const target = phrases[index % phrases.length];
    let timer;

    if (!erasing && text.length < target.length) {
      timer = setTimeout(() => setText(target.slice(0, text.length + 1)), typeMs);
    } else if (!erasing && text.length === target.length) {
      timer = setTimeout(() => setErasing(true), holdMs);
    } else if (erasing && text.length > 0) {
      timer = setTimeout(() => setText(target.slice(0, text.length - 1)), eraseMs);
    } else if (erasing && text.length === 0) {
      setErasing(false);
      setIndex((i) => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timer);
  }, [text, erasing, index, phrases, typeMs, eraseMs, holdMs, reduced]);

  return (
    <p className="hero-typed" aria-live="polite" aria-atomic="true">
      <span className="eyebrow">&gt; </span>
      {reduced ? phrases[0] : text}
      {!reduced && <span className="caret" aria-hidden="true" />}
    </p>
  );
}
