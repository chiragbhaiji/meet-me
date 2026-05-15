"use client";

type CardProps = {
  children: React.ReactNode;
  href?: string;
};

const className =
  "text-left group/card flex flex-col md:flex-row bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md hover:shadow-green-500/30 dark:hover:shadow-green-500/20 transition-shadow duration-200";

export default function Card({ children, href }: Readonly<CardProps>) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
