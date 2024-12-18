"use client";

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
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-6xl font-bold text-gray-200 tracking-widest">
          {fullName.toUpperCase()}
        </h1>
        <h3 className="text-2xl font-semibold text-gray-300 tracking-widest">
          {currentRole.toUpperCase()}
        </h3>
        <p className="text-lg text-gray-400">{shortBio}</p>
      </div>
    </div>
  );
}
