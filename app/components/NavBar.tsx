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
    <div className="top-0 z-50 sticky backdrop-blur-3xl py-4 transition-all duration-200">
      <div className="flex justify-between items-center gap-4 mx-auto px-6 max-w-6xl">
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
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-gray-500/20 shadow-md hover:shadow-green-500/20 px-4 py-2 rounded-lg font-medium text-green-500"
        >
          <FaDownload size={16} />
          Resume
        </button>
      </div>
    </div>
  );
}
