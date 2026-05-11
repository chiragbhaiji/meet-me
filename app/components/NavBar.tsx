"use client";

import { FaDownload } from "react-icons/fa";
import React, { useEffect, useState } from "react";

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
    const titleBottom = (el.querySelector("h3") ?? el).getBoundingClientRect().bottom;
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

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > SCROLL_STUCK_THRESHOLD);
      setActiveSection(getActiveSectionId());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionLabel = isStuck && activeSection ? capitalize(activeSection) : null;

  return (
    <div className="top-0 z-50 sticky backdrop-blur-3xl py-4 transition-all duration-200">
      <div className="relative flex justify-between items-center gap-4 mx-auto px-6 max-w-6xl">
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              className="bg-gray-500/20 hover:bg-gray-500/60 p-2 rounded-lg text-gray-400 hover:text-gray-200"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </div>
          ))}
        </div>
        <span
          className={`absolute left-1/2 -translate-x-1/2 font-semibold text-white transition-all duration-300 ${
            sectionLabel
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          {sectionLabel}
        </span>
        <button
          onClick={() => window.open(resumeUrl, "_self")}
          className="flex items-center gap-2 bg-gray-500/20 shadow-md hover:shadow-green-500/20 px-4 py-2 rounded-lg font-medium text-green-500"
        >
          <FaDownload size={16} />
          Resume
        </button>
      </div>
    </div>
  );
}
