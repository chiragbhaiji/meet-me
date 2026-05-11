"use client";

import { FaDownload, FaSun, FaMoon } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

type NavBarProps = {
  socialLinks: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
  resumeUrl: string;
};

const SECTION_IDS = ["about", "experience", "projects"] as const;
const SCROLL_STUCK_THRESHOLD = 10;
const NAVBAR_HEIGHT_PX = 70;

function getActiveSectionId(): string | null {
  let active: string | null = null;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const titleBottom = (el.querySelector("h3") ?? el).getBoundingClientRect()
      .bottom;
    if (titleBottom <= NAVBAR_HEIGHT_PX) active = id;
  }
  return active;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function NavBar({
  socialLinks,
  resumeUrl,
}: Readonly<NavBarProps>) {
  const [isStuck, setIsStuck] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [labelFits, setLabelFits] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > SCROLL_STUCK_THRESHOLD);
      setActiveSection(getActiveSectionId());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionLabel =
    isStuck && activeSection ? capitalize(activeSection) : null;

  useEffect(() => {
    const checkFit = () => {
      if (
        !containerRef.current ||
        !leftRef.current ||
        !rightRef.current ||
        !labelRef.current
      )
        return;
      const containerWidth = containerRef.current.offsetWidth;
      const leftWidth = leftRef.current.offsetWidth;
      const rightWidth = rightRef.current.offsetWidth;
      const labelWidth = labelRef.current.scrollWidth;
      const GAP = 12;
      const labelLeft = containerWidth / 2 - labelWidth / 2;
      const labelRight = containerWidth / 2 + labelWidth / 2;
      setLabelFits(
        labelLeft > leftWidth + GAP &&
          labelRight < containerWidth - rightWidth - GAP,
      );
    };

    checkFit();
    const ro = new ResizeObserver(checkFit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [sectionLabel]);

  return (
    <div className="top-0 z-50 sticky backdrop-blur-3xl py-4 transition-all duration-200">
      <div
        ref={containerRef}
        className="relative flex justify-between items-center gap-4 mx-auto px-6 max-w-6xl"
      >
        <div ref={leftRef} className="flex gap-2">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-500/20 dark:hover:bg-gray-500/60 p-2 rounded-lg text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </div>
          ))}
        </div>
        <span
          ref={labelRef}
          className={`absolute left-1/2 -translate-x-1/2 font-semibold text-gray-900 dark:text-white transition-all duration-300 ${
            sectionLabel && labelFits
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          {sectionLabel}
        </span>
        <div ref={rightRef} className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-500/20 dark:hover:bg-gray-500/60 p-2 rounded-lg text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <button
            onClick={() => window.open(resumeUrl, "_self")}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-500/20 dark:shadow-md dark:hover:shadow-green-500/20 px-4 py-2 rounded-lg font-medium text-green-600 dark:text-green-500 transition-colors duration-200"
          >
            <FaDownload size={16} />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
