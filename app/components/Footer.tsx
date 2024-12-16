"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-gray-500 font-semibold">
        Built with Next.js, TypeScript, Tailwind & Deployed on GitHub Pages 🚀
      </div>
      <div className="text-gray-500 text-sm font-medium">
        © {currentYear} All rights reserved.
      </div>
    </div>
  );
}
