"use client";

import SectionBody from "./common/SectionBody";

type HeaderProps = {
  fullName: string;
  currentRole: string;
  shortBio: string;
};

export default function Header({
  fullName,
  currentRole,
  shortBio,
}: Readonly<HeaderProps>) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-3xl text-gray-800 dark:text-gray-200 md:text-6xl uppercase tracking-widest">
        {fullName}
      </h1>
      <h3 className="font-normal text-gray-500 dark:text-gray-400 text-lg md:text-xl tracking-wide">
        {currentRole}
      </h3>
      <SectionBody text={shortBio} />
    </div>
  );
}
