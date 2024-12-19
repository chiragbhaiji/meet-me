"use client";

import { FaDownload } from "react-icons/fa";
import React from "react";
type NavBarProps = {
  socialLinks: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
  resumeUrl: string;
};

export default function NavBar({
  socialLinks,
  resumeUrl,
}: Readonly<NavBarProps>) {
  const handleDownload = () => {
    window.open(resumeUrl, "_self");
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-3xl py-4 transition-all duration-200">
      <div className="flex px-6 gap-4 justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              className="bg-gray-500/20 text-gray-400 rounded-lg p-2 hover:bg-gray-500/60 hover:text-gray-200"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 text-green-500 font-medium bg-gray-500/20 rounded-lg px-4 py-2 shadow-md hover:shadow-green-500/20"
        >
          <FaDownload size={16} />
          Resume
        </button>
      </div>
    </div>
  );
}
