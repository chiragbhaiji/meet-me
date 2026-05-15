"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-gray-400 dark:text-gray-500 text-sm text-center">
        © {currentYear} Chirag Bhaiji
      </div>
    </div>
  );
}
