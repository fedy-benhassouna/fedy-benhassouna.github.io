import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * Animated neural-network field for the hero.
 * Nodes drift slowly, connect when close, and lean toward the cursor.
 * Renders a single static frame when reduced motion is requested.
 */
export default function NeuralCanvas() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const root = document.documentElement;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const readColors = () => {
      const cs = getComputedStyle(root);
      return {
        node: cs.getPropertyValue("--net-node").trim() || "124, 92, 255",
        link: cs.getPropertyValue("--net-link").trim() || "34, 211, 238",
      };
    };
    let colors = readColors();

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(110, Math.max(36, (w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const LINK_DIST = 140;

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      // Links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(${colors.link}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.0012 + n.phase);
        ctx.fillStyle = `rgba(${colors.node}, ${0.35 + 0.5 * pulse})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Signal pulses toward cursor
      if (mouse.x > 0) {
        for (const n of nodes) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < 180) {
            const alpha = (1 - d / 180) * 0.5;
            ctx.strokeStyle = `rgba(${colors.node}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const step = (t) => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (mouse.x > 0) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < 220) {
            n.vx += (dx / d) * 0.004;
            n.vy += (dy / d) * 0.004;
          }
        }
        // Gentle damping keeps velocities bounded
        n.vx *= 0.995;
        n.vy *= 0.995;
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;
      }
      draw(t);
      raf = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onTheme = () => {
      colors = readColors();
      if (reduced) draw(0);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas.parentElement);

    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    if (reduced) {
      draw(0);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(step);
    }

    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(step);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
