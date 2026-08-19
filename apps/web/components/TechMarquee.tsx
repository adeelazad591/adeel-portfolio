"use client";

import type { IconType } from "react-icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiReact,
  SiRedux,
  SiSvelte,
  SiTailwindcss,
} from "react-icons/si";

type Tech = {
  name: string;
  icon: IconType;
  /** Brand color, as a hex value. Left unset for marks (GitHub, Figma) that
   * should track the theme's foreground color instead of a fixed brand color. */
  color?: string;
};

const techStack: Tech[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
];

// Rendered twice back-to-back so the track can loop seamlessly: once the
// animation slides it -50%, the second copy lines up exactly where the
// first one started, with no visible seam or jump.
const loopedStack = [...techStack, ...techStack];

type HoveredTooltip = {
  index: number;
  name: string;
  /** Viewport-relative anchor point: horizontal center, top edge of the icon. */
  x: number;
  y: number;
};

export const TechMarquee = () => {
  // The tooltip can't be a plain CSS-positioned descendant of the marquee:
  // the pill needs `overflow-hidden` to clip the horizontally-scrolling
  // track, and that same clip would cut off a tooltip popping up above an
  // icon. Instead it's portaled straight to <body> and positioned from the
  // hovered icon's real viewport coordinates, so it floats freely above
  // everything else on the page.
  const [tooltip, setTooltip] = useState<HoveredTooltip | null>(null);

  const showTooltip = (index: number, name: string, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    setTooltip({ index, name, x: rect.left + rect.width / 2, y: rect.top });
  };

  return (
    <div
      className="border-border bg-card shadow-xs mx-auto mt-10 max-w-2xl overflow-hidden rounded-[100px] border"
      role="list"
      aria-label="Technologies I work with"
    >
      <div className="animate-marquee flex w-max gap-8 px-7 pb-3 pt-3 focus-within:[animation-play-state:paused] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loopedStack.map((tech, index) => {
          const Icon = tech.icon;
          // The second copy exists purely for the visual loop — hide it from
          // assistive tech and keyboard tabbing so each name is announced once.
          const isDuplicate = index >= techStack.length;

          return (
            <div
              key={`${tech.name}-${index}`}
              role={isDuplicate ? undefined : "listitem"}
              aria-hidden={isDuplicate || undefined}
              tabIndex={isDuplicate ? -1 : 0}
              className="relative flex shrink-0 flex-col items-center outline-none"
              onMouseEnter={(event) =>
                showTooltip(index, tech.name, event.currentTarget)
              }
              onMouseLeave={() => setTooltip(null)}
              onFocus={(event) =>
                showTooltip(index, tech.name, event.currentTarget)
              }
              onBlur={() => setTooltip(null)}
            >
              <span
                className={`flex size-11 items-center justify-center rounded-full border transition-all duration-200 ${
                  tooltip?.index === index
                    ? "border-border scale-110"
                    : "border-transparent"
                }`}
              >
                <Icon
                  size={22}
                  color={tech.color}
                  className="text-foreground"
                  aria-hidden="true"
                />
              </span>
            </div>
          );
        })}
      </div>

      {tooltip &&
        createPortal(
          <span
            role="tooltip"
            className="border-border bg-popover text-popover-foreground pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-[calc(100%+8px)] whitespace-nowrap rounded-md border px-2.5 py-1 text-xs font-medium shadow-md"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.name}
          </span>,
          document.body
        )}
    </div>
  );
};
