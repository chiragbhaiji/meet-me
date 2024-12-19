export default function SectionBody({ text }: Readonly<{ text: string }>) {
  const markdown = text.replace(/\n/g, "<br /><br />");

  return (
    <div
      className="text-md md:text-lg text-gray-400"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
}
