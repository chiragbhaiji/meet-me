type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: Readonly<SectionTitleProps>) {
  return (
    <h3 className="mb-3 md:mb-6 font-bold text-green-500 text-lg md:text-xl tracking-wide">
      {title.toUpperCase()}
    </h3>
  );
}
