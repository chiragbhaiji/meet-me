type HeaderProps = {
  fullName: string;
  currentRole: string;
  shortBio: string;
  socialLinks: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
};

export default function Header({
  fullName,
  currentRole,
  shortBio,
  socialLinks,
}: Readonly<HeaderProps>) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-6xl font-bold text-gray-200">
        {fullName.toUpperCase()}
      </h1>
      <h3 className="text-2xl font-bold text-gray-300 tracking-widest">
        {currentRole.toUpperCase()}
      </h3>
      <p className="text-lg text-gray-400">{shortBio}</p>
      <div className="mt-4 flex gap-4">
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
    </div>
  );
}
