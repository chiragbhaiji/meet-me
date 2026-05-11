"use client";

import { FaDownload, FaSun, FaMoon } from "react-icons/fa";
import React, { useEffect, useState } from "react";
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
  const { theme, toggleTheme } = useTheme();

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

  return (
    <div className="top-0 z-50 sticky backdrop-blur-3xl py-4 transition-all duration-200">
      <div className="relative flex justify-between items-center gap-4 mx-auto px-6 max-w-6xl">
        <div className="flex gap-2">
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
          className={`absolute left-1/2 -translate-x-1/2 font-semibold text-gray-900 dark:text-white transition-all duration-300 ${
            sectionLabel
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          {sectionLabel}
        </span>
        <div className="flex items-center gap-2">
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
