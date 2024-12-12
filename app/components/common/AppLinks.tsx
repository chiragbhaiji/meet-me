import Link from "next/link";
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
        <Link
          className="flex gap-2 items-center text-gray-300 hover:text-green-500"
          href={appLink.url}
          key={appLink.name}
          target="_blank"
        >
          <FaLink size={10} />
          {appLink.name}
        </Link>
      ))}
    </div>
  );
}
