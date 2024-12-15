export default function SectionBody({ text }: Readonly<{ text: string }>) {
  const markdown = text.replace(/\n/g, "<br /><br />");

  return (
    <div
      className="text-lg text-gray-400 whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
}
