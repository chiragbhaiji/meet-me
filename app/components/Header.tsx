"use client";

import { FaDownload } from "react-icons/fa";

type HeaderProps = {
  fullName: string;
  currentRole: string;
  shortBio: string;
  socialLinks: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
  resumeUrl: string;
};

export default function Header({
  fullName,
  currentRole,
  shortBio,
  socialLinks,
  resumeUrl,
}: Readonly<HeaderProps>) {
  const handleDownload = () => {
    window.open(resumeUrl, "_self");
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-6xl font-bold text-gray-200">
        {fullName.toUpperCase()}
      </h1>
      <h3 className="text-2xl font-bold text-gray-300 tracking-widest">
        {currentRole.toUpperCase()}
      </h3>
      <p className="text-lg text-gray-400">{shortBio}</p>
      <div className="mt-4 flex gap-4 justify-between">
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
