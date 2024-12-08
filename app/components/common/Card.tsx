import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  href?: string;
};

const className =
  "group/card flex flex-col md:flex-row bg-gradient-to-br from-gray-700/10 via-transparent to-gray-700/20 p-6 rounded-lg hover:bg-gray-700/20";

export default function Card({ children, href }: Readonly<CardProps>) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Link className={className} href={href} target="_blank">
      {children}
    </Link>
  );
}
