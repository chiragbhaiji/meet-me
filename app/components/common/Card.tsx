import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  href?: string;
};

const className =
  "group/card flex flex-col md:flex-row bg-gradient-to-br from-green-300/10 via-transparent to-green-300/20 p-6 rounded-lg hover:bg-green-900/20";

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
