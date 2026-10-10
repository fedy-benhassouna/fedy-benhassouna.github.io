import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    // FIX: pointer-events is handled in CSS (pointer-events:none on #tsparticles)
    // so interactive content above the particle layer receives click events correctly.
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 120, /* FIX: reduced from 160 — better perf on mid-range devices */
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          // FIX: detect_on changed from default "canvas" to "window"
          // so interaction still works even though pointer-events:none is on the element
          detect_on: "window",
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;