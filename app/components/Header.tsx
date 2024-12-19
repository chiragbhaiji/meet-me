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
      <h1 className="uppercase text-6xl font-bold text-gray-200 tracking-widest">
        {fullName}
      </h1>
      <h3 className="uppercase text-2xl font-semibold text-gray-300 tracking-widest">
        {currentRole}
      </h3>
      <SectionBody text={shortBio} />
    </div>
  );
}
