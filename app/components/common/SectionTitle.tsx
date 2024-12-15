type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: Readonly<SectionTitleProps>) {
  return (
    <h3 className="text-2xl font-bold tracking-widest text-green-500 mb-6">
      {title.toUpperCase()}
    </h3>
  );
}
