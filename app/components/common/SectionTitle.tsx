type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: Readonly<SectionTitleProps>) {
  return (
    <h3 className="mb-3 md:mb-6 font-bold text-green-500 text-xl md:text-3xl tracking-widest">
      {title.toUpperCase()}
    </h3>
  );
}
