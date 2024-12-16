"use client";
import { FaLink } from "react-icons/fa";

type AppLinksProps = {
  appLinks: Array<{
    name: string;
    url: string;
  }>;
};

export default function AppLinks({ appLinks }: Readonly<AppLinksProps>) {
  return (
    <div className="flex gap-4">
      {appLinks.map((appLink) => (
        <AppLinkItem key={appLink.name} name={appLink.name} url={appLink.url} />
      ))}
    </div>
  );
}

const AppLinkItem = ({ name, url }: { name: string; url: string }) => (
  <div className="flex gap-2 items-center text-gray-300 hover:text-green-500">
    <FaLink size={10} />
    <a href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  </div>
);
